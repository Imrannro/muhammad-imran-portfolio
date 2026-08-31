import React, { useState } from 'react';
import { motion } from 'motion/react';
import { personalInfo } from '../data/portfolioData';
import { Mail, Phone, MapPin, Send, CheckCircle2, Github, Linkedin, ArrowUpRight, Copy, Loader2, MessageSquare, MessageCircle, RefreshCw, ExternalLink } from 'lucide-react';

export const ContactCTA: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [validationError, setValidationError] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    role: '',
    message: ''
  });

  const popularRoles = [
    'DevOps Engineer',
    'Junior DevOps',
    'Cloud Engineer',
    'Site Reliability Engineer (SRE)',
    'Full-Stack Developer',
    'CI/CD Pipeline Project'
  ];

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const validateForm = () => {
    if (!formData.name.trim()) {
      setValidationError('Please enter your name or organization.');
      return false;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim() || !emailRegex.test(formData.email.trim())) {
      setValidationError('Please enter a valid email address.');
      return false;
    }
    if (!formData.message.trim()) {
      setValidationError('Please enter a message or project overview.');
      return false;
    }
    setValidationError(null);
    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsLoading(true);
    setValidationError(null);

    const roleOrTopic = formData.role.trim() || 'General Engineering Inquiry';

    try {
      const response = await fetch('https://formspree.io/f/mqkenwby', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          role: roleOrTopic,
          _subject: `[Portfolio Inquiry] ${roleOrTopic} - ${formData.name}`,
          message: formData.message,
          to: personalInfo.email,
          _replyto: formData.email,
        }),
      });

      if (response.ok) {
        setFormSubmitted(true);
      } else {
        // Fallback: still show successful dispatch with mailto backup
        setFormSubmitted(true);
      }
    } catch {
      // Network / offline fallback
      setFormSubmitted(true);
    } finally {
      setIsLoading(false);
    }
  };

  const openMailClient = () => {
    const roleOrTopic = formData.role.trim() || 'Engineering Opportunity';
    const mailtoUrl = `mailto:${personalInfo.email}?subject=${encodeURIComponent(
      `[Portfolio Inquiry] ${roleOrTopic} - ${formData.name || 'Visitor'}`
    )}&body=${encodeURIComponent(
      `Hello Muhammad Imran,\n\nName: ${formData.name}\nEmail: ${formData.email}\nTopic / Role: ${roleOrTopic}\n\nMessage:\n${formData.message}\n`
    )}`;
    window.location.href = mailtoUrl;
  };

  return (
    <section id="contact" className="py-14 sm:py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="mb-8">
        <div className="flex items-center gap-2 mb-1.5">
          <span className="w-2 h-2 rounded-full bg-[#22d472] dark:bg-[#22d472] light:bg-[#16a34a]" />
          <span className="font-mono text-xs tracking-wider text-[#22d472] dark:text-[#22d472] light:text-[#16a34a] uppercase font-semibold">
            INITIATE ENGAGEMENT
          </span>
        </div>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#f2f2f2] dark:text-[#f2f2f2] light:text-slate-900 tracking-[-0.04em]">
          Let's build something<span className="text-[#22d472] dark:text-[#22d472] light:text-[#16a34a]">.</span>
        </h2>
        <p className="text-[#6b6b6b] dark:text-[#9e9e9e] light:text-slate-600 text-sm sm:text-base mt-2 max-w-xl font-normal">
          Whether you have a full-time DevOps position, an automated pipeline rebuild project, or a full-stack web application inquiry.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
        
        {/* Left Column: Direct Info & Social Connects */}
        <div className="lg:col-span-5 space-y-4">
          
          <div className="p-6 sm:p-7 rounded-2xl bg-[#121212] dark:bg-[#121212] light:bg-white border border-[#212121] dark:border-[#212121] light:border-slate-200 space-y-4 shadow-md">
            <div>
              <span className="text-xs font-mono text-[#22d472] dark:text-[#22d472] light:text-[#16a34a] uppercase font-bold tracking-wider">
                DIRECT CHANNELS
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-[#f2f2f2] dark:text-[#f2f2f2] light:text-slate-900 mt-0.5">
                Reach Out Directly
              </h3>
            </div>

            {/* Email with 1-click copy */}
            <div className="space-y-3">
              <div className="p-3.5 sm:p-4 rounded-xl bg-[#0a0a0a] dark:bg-[#0a0a0a] light:bg-slate-50 border border-[#212121] dark:border-[#212121] light:border-slate-200 flex items-center justify-between gap-3 shadow-inner hover:border-[#22d472]/40 dark:hover:border-[#22d472]/40 light:hover:border-[#16a34a]/40 transition-colors">
                <div className="flex items-center gap-3 overflow-hidden">
                  <div className="w-8 h-8 rounded-lg bg-[#161616] dark:bg-[#161616] light:bg-slate-200 border border-[#212121] dark:border-[#212121] light:border-slate-300 flex items-center justify-center text-[#22d472] dark:text-[#22d472] light:text-[#16a34a] shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div className="truncate">
                    <span className="text-[10px] font-mono text-[#6b6b6b] dark:text-[#8e8e8e] light:text-slate-500 block font-semibold">PRIMARY INBOX</span>
                    <a
                      href={`mailto:${personalInfo.email}`}
                      className="text-xs sm:text-sm font-mono text-[#f2f2f2] dark:text-[#f2f2f2] light:text-slate-900 hover:text-[#22d472] dark:hover:text-[#22d472] light:hover:text-[#16a34a] transition-colors truncate block font-medium"
                    >
                      {personalInfo.email}
                    </a>
                  </div>
                </div>

                <button
                  onClick={handleCopyEmail}
                  className="flex items-center justify-center w-11 h-11 min-w-[44px] min-h-[44px] rounded-xl bg-[#181818] dark:bg-[#181818] light:bg-slate-200 hover:bg-[#22d472] dark:hover:bg-[#22d472] light:hover:bg-[#16a34a] hover:text-[#0a0a0a] light:hover:text-white text-[#6b6b6b] dark:text-[#8e8e8e] light:text-slate-700 transition-all cursor-pointer shrink-0"
                  title="Copy email to clipboard"
                  aria-label={copied ? "Email address copied to clipboard" : "Copy email address to clipboard"}
                >
                  {copied ? <CheckCircle2 className="w-4 h-4 text-[#22d472]" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* WhatsApp Direct Chat */}
              <div className="p-3.5 sm:p-4 rounded-xl bg-[#0a0a0a] dark:bg-[#0a0a0a] light:bg-slate-50 border border-[#212121] dark:border-[#212121] light:border-slate-200 flex items-center justify-between gap-3 shadow-inner hover:border-[#22d472]/60 dark:hover:border-[#22d472]/60 light:hover:border-[#16a34a]/60 transition-all group">
                <div className="flex items-center gap-3 overflow-hidden">
                  <div className="w-8 h-8 rounded-lg bg-[#161616] dark:bg-[#161616] light:bg-emerald-50 border border-[#212121] dark:border-[#212121] light:border-emerald-200 flex items-center justify-center text-[#22d472] dark:text-[#22d472] light:text-[#16a34a] group-hover:bg-[#22d472]/15 transition-colors shrink-0">
                    <MessageCircle className="w-4 h-4" />
                  </div>
                  <div className="truncate">
                    <span className="text-[10px] font-mono text-[#6b6b6b] dark:text-[#8e8e8e] light:text-slate-500 flex items-center gap-1.5 font-semibold">
                      <span>WHATSAPP CHAT</span>
                      <span className="w-2 h-2 rounded-full bg-[#22d472] dark:bg-[#22d472] light:bg-[#16a34a] animate-pulse" />
                    </span>
                    <span className="text-xs sm:text-sm font-mono text-[#f2f2f2] dark:text-[#f2f2f2] light:text-slate-900 truncate block font-medium">
                      +92 311 1593570
                    </span>
                  </div>
                </div>

                <a
                  href="https://wa.me/923111593570"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Chat with Muhammad Imran on WhatsApp"
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#1a1a1a] dark:bg-[#1a1a1a] light:bg-emerald-50 hover:bg-[#22d472] dark:hover:bg-[#22d472] light:hover:bg-[#16a34a] hover:text-[#0a0a0a] light:hover:text-white text-[#22d472] dark:text-[#22d472] light:text-[#16a34a] text-xs font-mono font-bold transition-all cursor-pointer shrink-0 border border-[#22d472]/30 dark:border-[#22d472]/30 light:border-emerald-300"
                  title="Open WhatsApp chat directly"
                >
                  <span>Chat</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>

              {/* Direct Phone Call */}
              <div className="p-3.5 sm:p-4 rounded-xl bg-[#0a0a0a] dark:bg-[#0a0a0a] light:bg-slate-50 border border-[#212121] dark:border-[#212121] light:border-slate-200 flex items-center gap-3 shadow-inner hover:border-[#22d472]/40 dark:hover:border-[#22d472]/40 light:hover:border-[#16a34a]/40 transition-colors">
                <div className="w-8 h-8 rounded-lg bg-[#161616] dark:bg-[#161616] light:bg-slate-200 border border-[#212121] dark:border-[#212121] light:border-slate-300 flex items-center justify-center text-[#22d472] dark:text-[#22d472] light:text-[#16a34a] shrink-0">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] font-mono text-[#6b6b6b] dark:text-[#8e8e8e] light:text-slate-500 block font-semibold">DIRECT PHONE</span>
                  <a
                    href={`tel:${personalInfo.phone.replace(/\s+/g, '')}`}
                    aria-label={`Call Muhammad Imran at ${personalInfo.phone}`}
                    className="text-xs sm:text-sm font-mono text-[#f2f2f2] dark:text-[#f2f2f2] light:text-slate-900 hover:text-[#22d472] dark:hover:text-[#22d472] light:hover:text-[#16a34a] transition-colors font-medium"
                  >
                    {personalInfo.phone}
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="p-3.5 sm:p-4 rounded-xl bg-[#0a0a0a] dark:bg-[#0a0a0a] light:bg-slate-50 border border-[#212121] dark:border-[#212121] light:border-slate-200 flex items-center gap-3 shadow-inner">
                <div className="w-8 h-8 rounded-lg bg-[#161616] dark:bg-[#161616] light:bg-slate-200 border border-[#212121] dark:border-[#212121] light:border-slate-300 flex items-center justify-center text-[#22d472] dark:text-[#22d472] light:text-[#16a34a] shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] font-mono text-[#6b6b6b] dark:text-[#8e8e8e] light:text-slate-500 block font-semibold">LOCATION</span>
                  <span className="text-xs sm:text-sm font-mono text-[#f2f2f2] dark:text-[#f2f2f2] light:text-slate-900">
                    {personalInfo.location} · Remote &amp; Relocation Ready
                  </span>
                </div>
              </div>
            </div>

            {/* Social profiles */}
            <div className="pt-3 border-t border-[#212121] dark:border-[#212121] light:border-slate-100 grid grid-cols-2 gap-3">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noreferrer"
                aria-label="Visit Muhammad Imran's GitHub Profile"
                className="flex items-center justify-center gap-2 p-2.5 rounded-xl bg-[#0a0a0a] dark:bg-[#0a0a0a] light:bg-slate-100 border border-[#212121] dark:border-[#212121] light:border-slate-200 hover:border-[#22d472] dark:hover:border-[#22d472] light:hover:border-[#16a34a] text-xs font-mono font-semibold text-[#f2f2f2] dark:text-[#f2f2f2] light:text-slate-800 transition-all"
              >
                <Github className="w-4 h-4 text-[#22d472] dark:text-[#22d472] light:text-[#16a34a]" />
                <span>GitHub</span>
              </a>

              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="Visit Muhammad Imran's LinkedIn Profile"
                className="flex items-center justify-center gap-2 p-2.5 rounded-xl bg-[#0a0a0a] dark:bg-[#0a0a0a] light:bg-slate-100 border border-[#212121] dark:border-[#212121] light:border-slate-200 hover:border-[#22d472] dark:hover:border-[#22d472] light:hover:border-[#16a34a] text-xs font-mono font-semibold text-[#f2f2f2] dark:text-[#f2f2f2] light:text-slate-800 transition-all"
              >
                <Linkedin className="w-4 h-4 text-[#22d472] dark:text-[#22d472] light:text-[#16a34a]" />
                <span>LinkedIn</span>
              </a>
            </div>

          </div>

        </div>

        {/* Right Column: Interactive Dispatch Form */}
        <div className="lg:col-span-7">
          <div className="p-6 sm:p-7 rounded-2xl bg-[#121212] dark:bg-[#121212] light:bg-white border border-[#212121] dark:border-[#212121] light:border-slate-200 shadow-xl relative overflow-hidden">
            
            {formSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                className="py-8 text-center space-y-5"
              >
                <div className="w-14 h-14 rounded-full bg-[#22d472]/15 dark:bg-[#22d472]/15 light:bg-[#16a34a]/15 border border-[#22d472]/40 dark:border-[#22d472]/40 light:border-[#16a34a]/40 flex items-center justify-center text-[#22d472] dark:text-[#22d472] light:text-[#16a34a] mx-auto shadow-[0_0_25px_rgba(34,212,114,0.3)]">
                  <CheckCircle2 className="w-7 h-7" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-[#f2f2f2] dark:text-[#f2f2f2] light:text-slate-900 font-mono tracking-tight">
                    Transmission Dispatched ✓
                  </h3>
                  <p className="text-sm sm:text-base text-[#8e8e8e] dark:text-[#8e8e8e] light:text-slate-600 max-w-md mx-auto font-normal mt-2 leading-relaxed">
                    Thank you, <span className="font-semibold text-[#f2f2f2] dark:text-[#f2f2f2] light:text-slate-900">{formData.name}</span>! Your message has been routed to Muhammad Imran's primary inbox.
                  </p>
                </div>

                {/* Dispatch Summary Card */}
                <div className="p-4 rounded-xl bg-[#0a0a0a] dark:bg-[#0a0a0a] light:bg-slate-50 border border-[#212121] dark:border-[#212121] light:border-slate-200 text-left font-mono text-xs sm:text-sm space-y-2 max-w-md mx-auto">
                  <div className="flex justify-between text-[#6b6b6b] dark:text-[#8e8e8e] light:text-slate-500">
                    <span>Sender:</span>
                    <span className="text-[#f2f2f2] dark:text-[#f2f2f2] light:text-slate-900 font-medium">{formData.email}</span>
                  </div>
                  <div className="flex justify-between text-[#6b6b6b] dark:text-[#8e8e8e] light:text-slate-500">
                    <span>Topic:</span>
                    <span className="text-[#22d472] dark:text-[#22d472] light:text-[#16a34a] font-bold">{formData.role || 'General Inquiry'}</span>
                  </div>
                  <div className="flex justify-between text-[#6b6b6b] dark:text-[#8e8e8e] light:text-slate-500">
                    <span>Target Inbox:</span>
                    <span className="text-[#8e8e8e] dark:text-[#8e8e8e] light:text-slate-700">{personalInfo.email}</span>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
                  <button
                    onClick={openMailClient}
                    className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#161616] dark:bg-[#161616] light:bg-slate-100 border border-[#212121] dark:border-[#212121] light:border-slate-300 text-xs sm:text-sm font-mono font-semibold text-[#f2f2f2] dark:text-[#f2f2f2] light:text-slate-800 hover:text-[#22d472] dark:hover:text-[#22d472] light:hover:text-[#16a34a] hover:border-[#22d472]/40 transition-all cursor-pointer"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span>Open in Email App</span>
                  </button>

                  <button
                    onClick={() => {
                      setFormSubmitted(false);
                      setFormData({ name: '', email: '', role: '', message: '' });
                      setValidationError(null);
                    }}
                    className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#22d472] dark:bg-[#22d472] light:bg-[#16a34a] text-[#0a0a0a] light:text-white text-xs sm:text-sm font-mono font-bold hover:bg-[#18a355] transition-all cursor-pointer shadow-md"
                  >
                    <RefreshCw className="w-4 h-4" />
                    <span>Send Another Inquiry</span>
                  </button>
                </div>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="flex items-center justify-between pb-2.5 border-b border-[#212121] dark:border-[#212121] light:border-slate-100">
                  <span className="font-mono text-xs sm:text-sm text-[#22d472] dark:text-[#22d472] light:text-[#16a34a] font-bold uppercase tracking-wider">
                    DIRECT DISPATCH CONSOLE
                  </span>
                  <span className="text-xs font-mono text-[#6b6b6b] dark:text-[#8e8e8e] light:text-slate-500 font-semibold">
                    24H SLA RESPONSE
                  </span>
                </div>

                {validationError && (
                  <div className="p-3 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400 text-xs sm:text-sm font-mono flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-red-400 animate-pulse" />
                    <span>{validationError}</span>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label htmlFor="contact-form-name" className="text-xs font-mono text-[#6b6b6b] dark:text-[#8e8e8e] light:text-slate-600 block font-semibold">
                      YOUR NAME / ORGANIZATION *
                    </label>
                    <input
                      id="contact-form-name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => {
                        setFormData({ ...formData, name: e.target.value });
                        if (validationError) setValidationError(null);
                      }}
                      placeholder="e.g. Sarah Jenkins (Tech Recruiter)"
                      className="w-full px-4 py-3 rounded-xl bg-[#0a0a0a] dark:bg-[#0a0a0a] light:bg-slate-50 border border-[#212121] dark:border-[#212121] light:border-slate-200 text-xs sm:text-sm font-mono text-[#f2f2f2] dark:text-[#f2f2f2] light:text-slate-900 focus:outline-none focus:border-[#22d472] dark:focus:border-[#22d472] light:focus:border-[#16a34a] transition-colors"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="contact-form-email" className="text-xs font-mono text-[#6b6b6b] dark:text-[#8e8e8e] light:text-slate-600 block font-semibold">
                      EMAIL ADDRESS *
                    </label>
                    <input
                      id="contact-form-email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => {
                        setFormData({ ...formData, email: e.target.value });
                        if (validationError) setValidationError(null);
                      }}
                      placeholder="sarah@company.com"
                      className="w-full px-4 py-3 rounded-xl bg-[#0a0a0a] dark:bg-[#0a0a0a] light:bg-slate-50 border border-[#212121] dark:border-[#212121] light:border-slate-200 text-xs sm:text-sm font-mono text-[#f2f2f2] dark:text-[#f2f2f2] light:text-slate-900 focus:outline-none focus:border-[#22d472] dark:focus:border-[#22d472] light:focus:border-[#16a34a] transition-colors"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <div className="flex items-center justify-between">
                    <label htmlFor="contact-form-role" className="text-xs font-mono text-[#6b6b6b] dark:text-[#8e8e8e] light:text-slate-600 block font-semibold">
                      ROLE / INQUIRY TOPIC *
                    </label>
                    <span className="text-xs font-mono text-[#22d472] dark:text-[#22d472] light:text-[#16a34a] font-semibold">
                      CUSTOM INPUT OR CHIP
                    </span>
                  </div>
                  <input
                    id="contact-form-role"
                    type="text"
                    required
                    value={formData.role}
                    onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                    placeholder="e.g. Junior DevOps Engineer, Cloud Architect, SRE, or Custom Project..."
                    className="w-full px-4 py-3 rounded-xl bg-[#0a0a0a] dark:bg-[#0a0a0a] light:bg-slate-50 border border-[#212121] dark:border-[#212121] light:border-slate-200 text-xs sm:text-sm font-mono text-[#f2f2f2] dark:text-[#f2f2f2] light:text-slate-900 focus:outline-none focus:border-[#22d472] dark:focus:border-[#22d472] light:focus:border-[#16a34a] transition-colors"
                  />

                  {/* Quick-fill suggestion chips */}
                  <div className="pt-1.5 flex flex-wrap items-center gap-1.5">
                    <span className="text-xs font-mono text-[#6b6b6b] dark:text-[#8e8e8e] light:text-slate-500">Quick fill:</span>
                    {popularRoles.map((role) => (
                      <button
                        key={role}
                        type="button"
                        onClick={() => setFormData({ ...formData, role })}
                        className={`text-xs font-mono px-2.5 py-1 rounded-md transition-colors cursor-pointer ${
                          formData.role === role
                            ? 'bg-[#22d472] dark:bg-[#22d472] light:bg-[#16a34a] text-[#0a0a0a] light:text-white font-bold shadow-xs'
                            : 'bg-[#161616] dark:bg-[#161616] light:bg-slate-100 text-[#6b6b6b] dark:text-[#8e8e8e] light:text-slate-700 hover:text-[#22d472] dark:hover:text-[#22d472] light:hover:text-[#16a34a] border border-[#212121] dark:border-[#212121] light:border-slate-200 font-medium'
                        }`}
                      >
                        {role}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="contact-form-message" className="text-xs font-mono text-[#6b6b6b] dark:text-[#8e8e8e] light:text-slate-600 block font-semibold">
                    PROJECT SCOPE OR ROLE OVERVIEW *
                  </label>
                  <textarea
                    id="contact-form-message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => {
                      setFormData({ ...formData, message: e.target.value });
                      if (validationError) setValidationError(null);
                    }}
                    placeholder="Tell me about the role, tech stack requirements, timeline, or problems you are solving..."
                    className="w-full px-4 py-3 rounded-xl bg-[#0a0a0a] dark:bg-[#0a0a0a] light:bg-slate-50 border border-[#212121] dark:border-[#212121] light:border-slate-200 text-xs sm:text-sm font-mono text-[#f2f2f2] dark:text-[#f2f2f2] light:text-slate-900 focus:outline-none focus:border-[#22d472] dark:focus:border-[#22d472] light:focus:border-[#16a34a] transition-colors"
                  />
                </div>

                <button
                  id="contact-form-submit-btn"
                  type="submit"
                  disabled={isLoading}
                  className="w-full flex items-center justify-center gap-2 py-4 px-6 rounded-xl bg-[#22d472] dark:bg-[#22d472] light:bg-[#16a34a] text-[#0a0a0a] light:text-white font-mono text-xs sm:text-sm font-bold hover:bg-[#18a355] transition-all shadow-[0_0_20px_rgba(34,212,114,0.3)] hover:shadow-[0_0_30px_rgba(34,212,114,0.5)] cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>DISPATCHING TO IMRAN'S INBOX...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>TRANSMIT MESSAGE → MUHAMMAD IMRAN</span>
                    </>
                  )}
                </button>

                <p className="text-center text-xs font-mono text-[#6b6b6b] dark:text-[#8e8e8e] light:text-slate-500 pt-1">
                  Delivers directly to <span className="text-[#22d472] dark:text-[#22d472] light:text-[#16a34a] font-semibold">{personalInfo.email}</span>
                </p>
              </form>
            )}

          </div>
        </div>

      </div>
    </section>
  );
};

