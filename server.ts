import express from 'express';
import path from 'path';
import { createServer as createViteServer } from 'vite';
import { GoogleGenAI } from '@google/genai';

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json({ limit: '10mb' }));

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
