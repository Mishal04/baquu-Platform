import express from 'express';
import path from 'path';
import { createServer as createViteServer } from 'vite';
import { GoogleGenAI } from '@google/genai';
import jwt from 'jsonwebtoken';
import rateLimit from 'express-rate-limit';
import 'dotenv/config';

async function startServer() {
  const app = express();
  const PORT = parseInt(process.env.PORT || '3001', 10);

  app.use(express.json({ limit: '10mb' }));

  // Rate limiter for admin login — max 10 attempts per 15 minutes per IP
  const loginLimiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 10,
    message: { success: false, error: 'Too many login attempts. Please try again in 15 minutes.' },
    standardHeaders: true,
    legacyHeaders: false,
  });

  // Initialize Gemini client lazily
  let aiClient: GoogleGenAI | null = null;
  function getGenAI(): GoogleGenAI | null {
    if (!aiClient && process.env.GEMINI_API_KEY) {
      aiClient = new GoogleGenAI({
        apiKey: process.env.GEMINI_API_KEY,
        httpOptions: {
          headers: {
            'User-Agent': 'aistudio-build',
          },
        },
      });
    }
    return aiClient;
  }

  // Health endpoint
  app.get('/api/health', (req, res) => {
    res.json({
      status: 'ok',
      service: 'SIRFPK Azerbaijan Travel & Consultancy Portal',
      timestamp: new Date().toISOString(),
    });
  });

  // ─── Admin Authentication ───────────────────────────────────────────────────
  const JWT_SECRET = process.env.JWT_SECRET || 'sirfpk-fallback-secret-change-me';
  const ADMIN_EMAIL = (process.env.ADMIN_EMAIL || '').trim().toLowerCase();
  const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || '';

  // POST /api/admin/login — validate credentials server-side, return signed JWT
  app.post('/api/admin/login', loginLimiter, (req, res) => {
    const { email, password } = req.body || {};
    if (!email || !password) {
      return res.status(400).json({ success: false, error: 'Email and password are required.' });
    }
    const inputEmail = String(email).trim().toLowerCase();
    const inputPassword = String(password);

    if (!ADMIN_EMAIL || !ADMIN_PASSWORD) {
      console.error('[Admin Auth] ADMIN_EMAIL or ADMIN_PASSWORD not set in environment variables.');
      return res.status(500).json({ success: false, error: 'Server authentication is not configured.' });
    }

    if (inputEmail !== ADMIN_EMAIL || inputPassword !== ADMIN_PASSWORD) {
      // Deliberate delay to slow brute-force attempts
      return setTimeout(() => {
        res.status(401).json({ success: false, error: 'Invalid email or password.' });
      }, 800);
    }

    const token = jwt.sign(
      { role: 'admin', email: ADMIN_EMAIL },
      JWT_SECRET,
      { expiresIn: '24h' }
    );

    res.json({ success: true, token });
  });

  // GET /api/admin/verify — verify a JWT token is still valid
  app.get('/api/admin/verify', (req, res) => {
    const authHeader = req.headers.authorization || '';
    const token = authHeader.startsWith('Bearer ') ? authHeader.slice(7) : '';
    if (!token) {
      return res.status(401).json({ valid: false, error: 'No token provided.' });
    }
    try {
      const decoded = jwt.verify(token, JWT_SECRET);
      res.json({ valid: true, decoded });
    } catch {
      res.status(401).json({ valid: false, error: 'Token is invalid or expired.' });
    }
  });
  // ────────────────────────────────────────────────────────────────────────────

  // Server-side Gemini AI content assistant for Admin
  app.post('/api/gemini/generate', async (req, res) => {
    try {
      const { prompt, systemInstruction, taskType } = req.body;

      if (!prompt) {
        return res.status(400).json({ error: 'Prompt is required' });
      }

      const ai = getGenAI();
      if (!ai) {
        return res.status(200).json({
          text: `[AI Generator Preview]: Generated sample content for "${prompt.slice(0, 40)}...". (Attach a valid GEMINI_API_KEY in Secrets for live AI generation).`,
          fallback: true,
        });
      }

      const defaultSystem =
        'You are an expert copywriter, travel consultant, and SEO strategist for SIRFPK (www.sirfpk.com), a premier travel, tours, Azerbaijan visa, TRC residency, and property consultancy connecting Pakistan and Azerbaijan. Write elegant, compelling, and accurate content with sophisticated tone and clear structure.';

      const response = await ai.models.generateContent({
        model: 'gemini-3.7-flash',
        contents: prompt,
        config: {
          systemInstruction: systemInstruction || defaultSystem,
          temperature: 0.7,
        },
      });

      res.json({
        text: response.text || '',
        success: true,
      });
    } catch (error: any) {
      console.error('Gemini generation error:', error);
      res.status(500).json({
        error: error?.message || 'Failed to generate content via Gemini API',
      });
    }
  });

  // Pinterest status endpoint
  app.get('/api/pinterest/status', (req, res) => {
    const isConfigured = Boolean(process.env.PINTEREST_ACCESS_TOKEN);
    res.json({
      configured: isConfigured,
      message: isConfigured
        ? 'Pinterest API is connected and ready for publishing.'
        : 'Pinterest integration is not configured yet. Add your Pinterest API credentials in the server environment.',
    });
  });

  // Pinterest publish endpoint
  app.post('/api/pinterest/publish', async (req, res) => {
    const accessToken = process.env.PINTEREST_ACCESS_TOKEN;
    if (!accessToken) {
      return res.status(400).json({
        success: false,
        message:
          'Pinterest integration is not configured yet. Add your Pinterest API credentials in the server environment.',
      });
    }

    try {
      const { boardId, title, description, link, mediaUrl } = req.body;
      // When token is provided, call Pinterest v5 API
      const pinPayload = {
        board_id: boardId,
        title,
        description,
        link: link || 'https://www.sirfpk.com',
        media_source: {
          source_type: 'image_url',
          url: mediaUrl,
        },
      };

      const response = await fetch('https://api.pinterest.com/v5/pins', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${accessToken}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(pinPayload),
      });

      const data = await response.json();
      if (!response.ok) {
        return res.status(response.status).json({ success: false, data });
      }

      res.json({ success: true, data });
    } catch (error: any) {
      res.status(500).json({ success: false, error: error.message });
    }
  });

  // Inquiries endpoint
  app.post('/api/inquiries', (req, res) => {
    const inquiry = req.body;
    res.json({
      success: true,
      message: 'Inquiry received successfully. Our Azerbaijan advisory team will contact you shortly.',
      inquiryId: 'inq_' + Date.now(),
    });
  });

  // Vite Middleware for development
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`SIRFPK Server running on http://localhost:${PORT}`);
  });
}

startServer();
