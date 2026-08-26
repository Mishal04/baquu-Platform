import React, { useState, useEffect } from 'react';
import {
  Sparkles,
  Share2,
  FileText,
  Building,
  Compass,
  MessageSquare,
  Settings,
  Plus,
  Trash2,
  Edit2,
  CheckCircle,
  ExternalLink,
  Send,
  Lock,
  RefreshCw,
  Copy,
  Check,
  LogOut,
  KeyRound,
  UserCog,
} from 'lucide-react';
import {
  TourPackage,
  PropertyListing,
  BlogPost,
  ContactInquiry,
  AffiliatePartner,
  SiteSettings,
  PageRoute,
} from '../../types';
import { StorageService } from '../../services/storage';

interface AdminPanelProps {
  onNavigate: (route: PageRoute) => void;
  siteSettings: SiteSettings;
  onUpdateSiteSettings: (settings: SiteSettings) => void;
  onLogout: () => void;
}

export const AdminPanel: React.FC<AdminPanelProps> = ({
  onNavigate,
  siteSettings,
  onUpdateSiteSettings,
  onLogout,
}) => {
  const [activeTab, setActiveTab] = useState<
    'ai-generator' | 'pinterest' | 'inquiries' | 'affiliates' | 'tours' | 'properties' | 'settings'
  >('ai-generator');

  // AI Content Generator State
  const [aiPrompt, setAiPrompt] = useState('');
  const [aiSystemPrompt, setAiSystemPrompt] = useState(
    'You are the lead travel & consultancy content writer for SIRFPK (www.sirfpk.com), the premier portal connecting Pakistan and Azerbaijan. Create high-converting, professional, accurate content.'
  );
  const [aiResult, setAiResult] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [copied, setCopied] = useState(false);

  // Inquiries State
  const [inquiries, setInquiries] = useState<ContactInquiry[]>([]);

  // Affiliate Partners State
  const [affiliates, setAffiliates] = useState<AffiliatePartner[]>([]);

  // Pinterest State
  const [pinTitle, setPinTitle] = useState('Explore Baku & Shahdag Ski Resort');
  const [pinDescription, setPinDescription] = useState(
    'Discover premier Azerbaijan tour packages, VIP transfers & luxury hotels with SIRFPK (www.sirfpk.com).'
  );
  const [pinLink, setPinLink] = useState('https://www.sirfpk.com/tours');
  const [pinImageUrl, setPinImageUrl] = useState(
    'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Flame_towers_from_Baku_boulevard.JPG/1280px-Flame_towers_from_Baku_boulevard.JPG'
  );
  const [pinBoardId, setPinBoardId] = useState('azerbaijan-travel');
  const [pinStatus, setPinStatus] = useState<string | null>(null);

  // Settings State
  const [settingsForm, setSettingsForm] = useState<SiteSettings>(siteSettings);

  useEffect(() => {
    setInquiries(StorageService.getInquiries());
    setAffiliates(StorageService.getAffiliatePartners());
    setSettingsForm(StorageService.getSettings());
  }, []);

  // Gemini AI Generator Handler
  const handleGenerateAI = async () => {
    if (!aiPrompt) return;
    setIsGenerating(true);
    setAiResult('');
    try {
      const response = await fetch('/api/gemini/generate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          prompt: aiPrompt,
          systemInstruction: aiSystemPrompt,
        }),
      });
      const data = await response.json();
      if (data.text) {
        setAiResult(data.text);
      } else {
        setAiResult('Error generating content. Please check server logs or verify your prompt.');
      }
    } catch (err: any) {
      setAiResult(`Error: ${err.message || 'Failed to call Gemini API'}`);
    } finally {
      setIsGenerating(false);
    }
  };

  const handleCopyAI = () => {
    navigator.clipboard.writeText(aiResult);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Pinterest Publish Handler
  const handlePublishPinterest = async (e: React.FormEvent) => {
    e.preventDefault();
    setPinStatus('Publishing Pin via Server API...');
    try {
      const response = await fetch('/api/pinterest/publish', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          title: pinTitle,
          description: `${pinDescription} | www.sirfpk.com`,
          link: pinLink,
          imageUrl: pinImageUrl,
          boardId: pinBoardId,
        }),
      });
      const resData = await response.json();
      if (resData.success) {
        setPinStatus(`Success! Pin published with ID: ${resData.pinId}`);
      } else {
        setPinStatus(`Notice: ${resData.message || 'Pinterest API simulated response'}`);
      }
    } catch (err: any) {
      setPinStatus(`Error publishing: ${err.message}`);
    }
  };

  // Inquiries Status Toggle
  const handleToggleInquiryStatus = (id: string, currentStatus: string) => {
    const nextStatus = currentStatus === 'pending' ? 'contacted' : 'pending';
    StorageService.updateInquiryStatus(id, nextStatus as any);
    setInquiries(StorageService.getInquiries());
  };

  // Save Affiliate Link
  const handleSaveAffiliateLink = (id: string, newUrl: string) => {
    const list = StorageService.getAffiliatePartners();
    const partner = list.find((p) => p.id === id);
    if (partner) {
      partner.affiliateUrl = newUrl;
      StorageService.saveAffiliatePartner(partner);
    }
    setAffiliates(StorageService.getAffiliatePartners());
    alert('Affiliate link updated successfully!');
  };

  // Save Settings
  const handleSaveSettings = (e: React.FormEvent) => {
    e.preventDefault();
    StorageService.saveSettings(settingsForm);
    onUpdateSiteSettings(settingsForm);
    alert('Site settings saved successfully!');
  };

  // Logout
  const handleLogout = () => {
    if (window.confirm('Are you sure you want to log out of the Admin Console?')) {
      StorageService.clearAdminToken();
      onLogout();
    }
  };

  return (
    <div className="min-h-screen bg-[#07132B] text-slate-200 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Top Admin Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-6 rounded-2xl bg-slate-900 border border-slate-700/80 shadow-xl">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-amber-500/20 border border-amber-500/40 text-amber-400 flex items-center justify-center">
              <Lock className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h1 className="text-xl font-bold text-white font-serif">SIRFPK Admin Console</h1>
                <span className="text-[10px] px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 font-mono font-bold">
                  LIVE
                </span>
              </div>
              <p className="text-xs text-slate-400">
                Manage AI Content, Pinterest Automation, Client Inquiries, Affiliate URLs & System Settings
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => onNavigate('home')}
              className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-amber-300 text-xs font-bold transition-colors cursor-pointer border border-slate-700"
            >
              ← View Live Website
            </button>
            <button
              onClick={handleLogout}
              className="px-4 py-2 rounded-xl bg-red-900/40 hover:bg-red-800/60 text-red-300 text-xs font-bold transition-colors cursor-pointer border border-red-800/50 flex items-center gap-1.5"
              title="Logout from Admin Console"
            >
              <LogOut className="w-3.5 h-3.5" />
              Logout
            </button>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap items-center gap-2 border-b border-slate-800 pb-3">
          {[
            { id: 'ai-generator', label: 'AI Gemini Content Hub', icon: <Sparkles className="w-4 h-4 text-amber-400" /> },
            { id: 'pinterest', label: 'Pinterest Marketing', icon: <Share2 className="w-4 h-4 text-rose-400" /> },
            { id: 'inquiries', label: `Client Inquiries (${inquiries.length})`, icon: <MessageSquare className="w-4 h-4 text-sky-400" /> },
            { id: 'affiliates', label: 'Affiliate URL Manager', icon: <ExternalLink className="w-4 h-4 text-emerald-400" /> },
            { id: 'settings', label: 'Phone & Site Settings', icon: <Settings className="w-4 h-4 text-purple-400" /> },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                activeTab === tab.id
                  ? 'bg-amber-500 text-slate-950 shadow-lg shadow-amber-500/20'
                  : 'bg-slate-900 text-slate-300 hover:text-white border border-slate-800'
              }`}
            >
              {tab.icon}
              <span>{tab.label}</span>
            </button>
          ))}
        </div>

        {/* TAB 1: Gemini AI Content Generator */}
        {activeTab === 'ai-generator' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-6 space-y-4">
              <div className="p-6 rounded-2xl bg-slate-900 border border-slate-700 space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-base font-bold text-white font-serif flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-amber-400" />
                    Gemini 2.5 Flash Content Creator
                  </h3>
                  <span className="text-[10px] px-2 py-0.5 rounded bg-sky-500/20 text-sky-300 font-mono">
                    Server-Side AI
                  </span>
                </div>

                <p className="text-xs text-slate-300 leading-relaxed">
                  Generate SEO articles, tour itineraries, Pinterest captions with hashtags, or property descriptions instantly.
                </p>

                {/* Prompt Presets */}
                <div className="space-y-1.5">
                  <span className="text-[11px] font-semibold text-slate-400">Quick Prompt Templates:</span>
                  <div className="flex flex-wrap gap-1.5">
                    {[
                      'Create 5-Day Baku & Shahdag Ski Luxury Itinerary',
                      'Write SEO Article on Buying Property in Baku White City',
                      'Generate Pinterest Captions & Hashtags for Gabala Tour',
                      'Explain Azerbaijan MMC Company Registration Checklist',
                    ].map((tpl, i) => (
                      <button
                        key={i}
                        type="button"
                        onClick={() => setAiPrompt(tpl)}
                        className="text-[10px] px-2.5 py-1 rounded bg-slate-800 text-amber-300 hover:bg-slate-700 transition-colors"
                      >
                        {tpl}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    Your Content Prompt:
                  </label>
                  <textarea
                    rows={4}
                    value={aiPrompt}
                    onChange={(e) => setAiPrompt(e.target.value)}
                    placeholder="Enter what you want Gemini to write..."
                    className="w-full px-3 py-2 rounded-xl bg-slate-800 border border-slate-700 text-white placeholder-slate-500 text-xs focus:outline-none focus:border-amber-400"
                  />
                </div>

                <button
                  onClick={handleGenerateAI}
                  disabled={isGenerating || !aiPrompt}
                  className="w-full py-3 rounded-xl bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 hover:from-amber-300 hover:to-amber-500 text-slate-950 font-bold text-xs shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>{isGenerating ? 'Generating with Gemini...' : 'Generate AI Content'}</span>
                </button>
              </div>
            </div>

            {/* AI Result Box */}
            <div className="lg:col-span-6 space-y-4">
              <div className="p-6 rounded-2xl bg-slate-900 border border-slate-700 space-y-4 flex flex-col justify-between min-h-[400px]">
                <div className="space-y-2">
                  <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                    <h3 className="text-sm font-bold text-white">Generated Content Output</h3>
                    {aiResult && (
                      <button
                        onClick={handleCopyAI}
                        className="flex items-center gap-1 text-xs text-amber-400 hover:text-amber-300"
                      >
                        {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                        <span>{copied ? 'Copied!' : 'Copy to Clipboard'}</span>
                      </button>
                    )}
                  </div>

                  {aiResult ? (
                    <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800 max-h-[420px] overflow-y-auto text-xs text-slate-300 whitespace-pre-wrap leading-relaxed">
                      {aiResult}
                    </div>
                  ) : (
                    <div className="py-20 text-center text-xs text-slate-500 space-y-2">
                      <Sparkles className="w-8 h-8 mx-auto text-slate-700" />
                      <p>Enter a prompt and click Generate to produce content with Gemini 2.5 Flash.</p>
                    </div>
                  )}
                </div>

                <div className="text-[11px] text-slate-400 text-center border-t border-slate-800 pt-3">
                  Watermark & Brand Signature: <strong>SIRFPK (www.sirfpk.com)</strong>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: Pinterest Automation */}
        {activeTab === 'pinterest' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-7">
              <form onSubmit={handlePublishPinterest} className="p-6 rounded-2xl bg-slate-900 border border-slate-700 space-y-4 text-xs">
                <div className="border-b border-slate-800 pb-3">
                  <h3 className="text-base font-bold text-white font-serif flex items-center gap-2">
                    <Share2 className="w-4 h-4 text-rose-400" />
                    Pinterest Marketing Publisher
                  </h3>
                  <p className="text-xs text-slate-400 mt-0.5">
                    Publish rich image pins linking directly back to www.sirfpk.com pages.
                  </p>
                </div>

                <div>
                  <label className="block text-slate-300 font-semibold mb-1">Pin Title</label>
                  <input
                    type="text"
                    required
                    value={pinTitle}
                    onChange={(e) => setPinTitle(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl bg-slate-800 border border-slate-700 text-white text-xs focus:outline-none focus:border-rose-400"
                  />
                </div>

                <div>
                  <label className="block text-slate-300 font-semibold mb-1">Pin Description</label>
                  <textarea
                    rows={3}
                    required
                    value={pinDescription}
                    onChange={(e) => setPinDescription(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl bg-slate-800 border border-slate-700 text-white text-xs focus:outline-none focus:border-rose-400"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-slate-300 font-semibold mb-1">Destination URL</label>
                    <input
                      type="url"
                      required
                      value={pinLink}
                      onChange={(e) => setPinLink(e.target.value)}
                      className="w-full px-3 py-2 rounded-xl bg-slate-800 border border-slate-700 text-white text-xs focus:outline-none focus:border-rose-400"
                    />
                  </div>

                  <div>
                    <label className="block text-slate-300 font-semibold mb-1">Pinterest Board ID</label>
                    <input
                      type="text"
                      required
                      value={pinBoardId}
                      onChange={(e) => setPinBoardId(e.target.value)}
                      className="w-full px-3 py-2 rounded-xl bg-slate-800 border border-slate-700 text-white text-xs focus:outline-none focus:border-rose-400"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-slate-300 font-semibold mb-1">Image URL (with SIRFPK watermark)</label>
                  <input
                    type="url"
                    required
                    value={pinImageUrl}
                    onChange={(e) => setPinImageUrl(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl bg-slate-800 border border-slate-700 text-white text-xs focus:outline-none focus:border-rose-400"
                  />
                </div>

                {pinStatus && (
                  <div className="p-3 rounded-xl bg-slate-800 border border-rose-500/30 text-rose-300 text-xs">
                    {pinStatus}
                  </div>
                )}

                <button
                  type="submit"
                  className="w-full py-3 rounded-xl bg-rose-600 hover:bg-rose-500 text-white font-bold text-xs transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-rose-600/20"
                >
                  <Share2 className="w-4 h-4" />
                  <span>Publish Pin via Server API</span>
                </button>
              </form>
            </div>

            <div className="lg:col-span-5 space-y-4">
              <div className="p-6 rounded-2xl bg-slate-900 border border-slate-700 text-xs text-slate-300 space-y-3">
                <h4 className="font-bold text-white text-sm">Pin Live Preview</h4>
                <div className="rounded-xl overflow-hidden border border-slate-700 relative">
                  <img src={pinImageUrl} alt={pinTitle} className="w-full h-52 object-cover" />
                  <div className="absolute bottom-2 right-2 px-2 py-0.5 rounded bg-slate-950/80 text-[10px] text-amber-300 font-mono">
                    www.sirfpk.com
                  </div>
                </div>
                <div>
                  <h5 className="font-bold text-white text-sm">{pinTitle}</h5>
                  <p className="text-[11px] text-slate-400 mt-1">{pinDescription}</p>
                  <span className="text-[10px] text-amber-400 block mt-1 font-mono">{pinLink}</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 3: Client Inquiries Lead Manager */}
        {activeTab === 'inquiries' && (
          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 rounded-xl bg-slate-900 border border-slate-800">
              <div>
                <h3 className="text-base font-bold text-white font-serif">
                  Client Consultation Inquiries ({inquiries.length})
                </h3>
                <p className="text-xs text-slate-400">
                  Real-time leads submitted across tour packages, visa, TRC, and property forms.
                </p>
              </div>
            </div>

            <div className="space-y-3">
              {inquiries.map((inq) => (
                <div
                  key={inq.id}
                  className="p-5 rounded-2xl bg-slate-900 border border-slate-800 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4"
                >
                  <div className="space-y-1.5 flex-1">
                    <div className="flex items-center gap-3">
                      <h4 className="text-sm font-bold text-white">{inq.fullName}</h4>
                      <span className="text-[10px] px-2 py-0.5 rounded bg-slate-800 text-slate-300 border border-slate-700">
                        {inq.country}
                      </span>
                      <span
                        className={`text-[10px] px-2 py-0.5 rounded font-bold uppercase ${
                          inq.status === 'contacted'
                            ? 'bg-emerald-500/20 text-emerald-300'
                            : 'bg-amber-500/20 text-amber-300'
                        }`}
                      >
                        {inq.status}
                      </span>
                    </div>

                    <div className="text-xs text-amber-400 font-semibold">
                      Service: {inq.serviceRequired}
                    </div>

                    <div className="text-xs text-slate-300">
                      <strong>WhatsApp:</strong> <span className="font-mono">{inq.whatsappNumber}</span> •{' '}
                      <strong>Email:</strong> {inq.email} • <strong>Travelers:</strong> {inq.numberOfTravelers}
                    </div>

                    {inq.message && (
                      <p className="text-xs text-slate-400 italic bg-slate-950/60 p-2.5 rounded-lg border border-slate-800 mt-1">
                        "{inq.message}"
                      </p>
                    )}

                    <div className="text-[10px] text-slate-500">
                      Submitted: {new Date(inq.createdAt).toLocaleString()}
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center gap-2 w-full lg:w-auto">
                    <a
                      href={`https://wa.me/${inq.whatsappNumber.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(
                        `Hello ${inq.fullName}! Thank you for your inquiry on SIRFPK regarding ${inq.serviceRequired}. How can we assist you today?`
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3.5 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs flex items-center gap-1.5 transition-colors"
                    >
                      <MessageSquare className="w-3.5 h-3.5" />
                      <span>WhatsApp Client</span>
                    </a>

                    <button
                      onClick={() => handleToggleInquiryStatus(inq.id, inq.status)}
                      className="px-3.5 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-bold transition-colors border border-slate-700"
                    >
                      Mark as {inq.status === 'new' ? 'Contacted' : 'Completed'}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 4: Affiliate Links Manager */}
        {activeTab === 'affiliates' && (
          <div className="space-y-4">
            <div className="p-4 rounded-xl bg-slate-900 border border-slate-800">
              <h3 className="text-base font-bold text-white font-serif">
                Affiliate Partner Redirect URLs
              </h3>
              <p className="text-xs text-slate-400">
                Update your active affiliate IDs & URLs for Airalo, Trip.com, Booking.com, and others.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {affiliates.map((aff) => (
                <div key={aff.id} className="p-5 rounded-2xl bg-slate-900 border border-slate-800 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-white text-sm">{aff.name}</span>
                    <span className="text-[10px] uppercase font-bold text-amber-400 font-mono">
                      {aff.category}
                    </span>
                  </div>

                  <div>
                    <label className="block text-[11px] text-slate-400 mb-1">Affiliate Destination Link:</label>
                    <input
                      type="url"
                      defaultValue={aff.affiliateUrl}
                      onBlur={(e) => handleSaveAffiliateLink(aff.id, e.target.value)}
                      className="w-full px-3 py-1.5 rounded-lg bg-slate-800 border border-slate-700 text-white font-mono text-xs focus:outline-none focus:border-amber-400"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 5: Settings */}
        {activeTab === 'settings' && (
          <form onSubmit={handleSaveSettings} className="p-6 rounded-2xl bg-slate-900 border border-slate-700 space-y-6 text-xs max-w-4xl">
            <div className="border-b border-slate-800 pb-3">
              <h3 className="text-base font-bold text-white font-serif">
                Official Phone Numbers & Global Disclaimers
              </h3>
              <p className="text-xs text-slate-400 mt-0.5">
                Ensure all 4 numbers reflect current support desks across Pakistan, the UK, and Azerbaijan.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-slate-300 font-semibold mb-1">UK Phone (+447462273257)</label>
                <input
                  type="text"
                  value={settingsForm.phoneNumbers.uk}
                  onChange={(e) =>
                    setSettingsForm({
                      ...settingsForm,
                      phoneNumbers: { ...settingsForm.phoneNumbers, uk: e.target.value },
                    })
                  }
                  className="w-full px-3 py-2 rounded-xl bg-slate-800 border border-slate-700 text-white text-xs"
                />
              </div>

              <div>
                <label className="block text-slate-300 font-semibold mb-1">Pakistan Phone (+923009111130)</label>
                <input
                  type="text"
                  value={settingsForm.phoneNumbers.pk}
                  onChange={(e) =>
                    setSettingsForm({
                      ...settingsForm,
                      phoneNumbers: { ...settingsForm.phoneNumbers, pk: e.target.value },
                    })
                  }
                  className="w-full px-3 py-2 rounded-xl bg-slate-800 border border-slate-700 text-white text-xs"
                />
              </div>

              <div>
                <label className="block text-slate-300 font-semibold mb-1">Azerbaijan Phone 1 (+994504517493)</label>
                <input
                  type="text"
                  value={settingsForm.phoneNumbers.aze1}
                  onChange={(e) =>
                    setSettingsForm({
                      ...settingsForm,
                      phoneNumbers: { ...settingsForm.phoneNumbers, aze1: e.target.value },
                    })
                  }
                  className="w-full px-3 py-2 rounded-xl bg-slate-800 border border-slate-700 text-white text-xs"
                />
              </div>

              <div>
                <label className="block text-slate-300 font-semibold mb-1">Azerbaijan Phone 2 (+9940509209003)</label>
                <input
                  type="text"
                  value={settingsForm.phoneNumbers.aze2}
                  onChange={(e) =>
                    setSettingsForm({
                      ...settingsForm,
                      phoneNumbers: { ...settingsForm.phoneNumbers, aze2: e.target.value },
                    })
                  }
                  className="w-full px-3 py-2 rounded-xl bg-slate-800 border border-slate-700 text-white text-xs"
                />
              </div>
            </div>

            <button
              type="submit"
              className="px-6 py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs transition-colors cursor-pointer"
            >
              Save Site Settings
            </button>
          </form>
        )}

        {/* Admin Account & Security Section — server-side notice */}
        {activeTab === 'settings' && (
          <div className="p-6 rounded-2xl bg-slate-900 border border-slate-700 space-y-4 text-xs max-w-4xl mt-4">
            <div className="border-b border-slate-800 pb-3 flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-purple-500/20 border border-purple-500/30 flex items-center justify-center">
                <UserCog className="w-4 h-4 text-purple-400" />
              </div>
              <div>
                <h3 className="text-base font-bold text-white font-serif">Admin Account &amp; Security</h3>
                <p className="text-xs text-slate-400 mt-0.5">Login credentials are managed server-side only.</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 rounded-xl bg-emerald-500/5 border border-emerald-500/20 text-emerald-300">
              <Lock className="w-4 h-4 mt-0.5 shrink-0 text-emerald-400" />
              <div className="space-y-1">
                <p className="font-semibold text-emerald-200">Credentials are stored securely on the server</p>
                <p className="text-slate-400 leading-relaxed">
                  Your admin email and password are stored only in the server's <code className="text-amber-300 bg-slate-800 px-1 rounded">.env</code> file — never in the browser or JavaScript bundle. To change them, update <code className="text-amber-300 bg-slate-800 px-1 rounded">ADMIN_EMAIL</code> and <code className="text-amber-300 bg-slate-800 px-1 rounded">ADMIN_PASSWORD</code> in your <code className="text-amber-300 bg-slate-800 px-1 rounded">.env</code> file and restart the server.
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
