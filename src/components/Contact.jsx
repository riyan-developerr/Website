import { useState } from 'react';
import { FiMail, FiSend, FiCheck, FiMapPin, FiMessageSquare, FiUser } from 'react-icons/fi';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [formState, setFormState] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState({ loading: false, success: false, error: '' });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('riyan@example.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) {
      setStatus({ loading: false, success: false, error: 'Please fill in all required fields.' });
      return;
    }

    setStatus({ loading: true, success: false, error: '' });

    // Simulate clean async form submit action
    setTimeout(() => {
      setStatus({ loading: false, success: true, error: '' });
      setFormState({ name: '', email: '', subject: '', message: '' });
    }, 1200);
  };

  return (
    <div className="py-12 space-y-12">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/10 border border-teal-500/20 text-xs font-semibold text-teal-300">
          <FiMessageSquare className="w-3.5 h-3.5" />
          <span>Let&apos;s Connect</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          Get In <span className="gradient-text-teal">Touch</span>
        </h2>
        <p className="text-slate-400 text-sm sm:text-base">
          Have a project in mind, want to collaborate, or have questions? Send a message or reach out via socials.
        </p>
      </div>

      <div className="grid lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Direct Info & Social Cards */}
        <div className="lg:col-span-5 space-y-6">
          {/* Quick Info Glass Card */}
          <div className="glass-panel rounded-2xl p-6 space-y-6">
            <h3 className="text-lg font-bold text-white border-b border-white/5 pb-3">Contact Details</h3>

            {/* Email item */}
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-teal-500/10 border border-teal-500/30 flex items-center justify-center text-teal-400 shrink-0">
                <FiMail className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <div className="text-xs text-slate-400 font-medium">Email Address</div>
                <div className="text-sm font-semibold text-white">riyan@example.com</div>
                <button
                  onClick={handleCopyEmail}
                  className="text-xs font-medium text-teal-400 hover:underline flex items-center gap-1 mt-1"
                >
                  {copied ? (
                    <>
                      <FiCheck className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400">Copied to Clipboard!</span>
                    </>
                  ) : (
                    <span>Click to Copy Email</span>
                  )}
                </button>
              </div>
            </div>

            {/* Location item */}
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shrink-0">
                <FiMapPin className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <div className="text-xs text-slate-400 font-medium">Location</div>
                <div className="text-sm font-semibold text-white">Available Remotely Worldwide</div>
              </div>
            </div>
          </div>

          {/* Social Platforms Card */}
          <div className="glass-panel rounded-2xl p-6 space-y-4">
            <h4 className="text-sm font-bold text-white">Connect on Social Platforms</h4>
            <div className="grid grid-cols-2 gap-3">
              <a
                href="https://github.com/riyan-developerr"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 p-3.5 rounded-xl bg-slate-900 border border-white/5 hover:border-teal-500/40 hover:bg-slate-800/80 transition-all duration-200 group"
              >
                <FaGithub className="w-5 h-5 text-slate-300 group-hover:text-teal-300" />
                <div>
                  <div className="text-xs font-bold text-white">GitHub</div>
                  <div className="text-[10px] text-slate-400">@riyan-developerr</div>
                </div>
              </a>

              <a
                href="https://www.linkedin.com/in/riyan-ahmad/"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 p-3.5 rounded-xl bg-slate-900 border border-white/5 hover:border-teal-500/40 hover:bg-slate-800/80 transition-all duration-200 group"
              >
                <FaLinkedin className="w-5 h-5 text-slate-300 group-hover:text-teal-300" />
                <div>
                  <div className="text-xs font-bold text-white">LinkedIn</div>
                  <div className="text-[10px] text-slate-400">Riyan Ahmad</div>
                </div>
              </a>
            </div>
          </div>
        </div>

        {/* Right Column: Interactive Form */}
        <div className="lg:col-span-7 glass-panel rounded-2xl p-6 sm:p-8 space-y-6">
          <h3 className="text-xl font-bold text-white flex items-center gap-2">
            <FiSend className="text-teal-400" />
            Send a Direct Message
          </h3>

          {status.success && (
            <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-sm flex items-center gap-3 animate-fadeInUp">
              <FiCheck className="w-5 h-5 text-emerald-400 shrink-0" />
              <span>Thank you! Your message has been sent successfully. I will get back to you soon.</span>
            </div>
          )}

          {status.error && (
            <div className="p-4 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-300 text-sm animate-fadeInUp">
              {status.error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-slate-300 flex items-center gap-1.5">
                  <FiUser className="text-teal-400" /> Name <span className="text-teal-400">*</span>
                </label>
                <input
                  type="text"
                  placeholder="Your Full Name"
                  value={formState.name}
                  onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-white/10 text-white text-sm focus:outline-none focus:border-teal-500 transition-colors"
                  required
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-slate-300 flex items-center gap-1.5">
                  <FiMail className="text-teal-400" /> Email <span className="text-teal-400">*</span>
                </label>
                <input
                  type="email"
                  placeholder="your.email@example.com"
                  value={formState.email}
                  onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-white/10 text-white text-sm focus:outline-none focus:border-teal-500 transition-colors"
                  required
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-slate-300">Subject</label>
              <input
                type="text"
                placeholder="Project Inquiry / Collaboration"
                value={formState.subject}
                onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-white/10 text-white text-sm focus:outline-none focus:border-teal-500 transition-colors"
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-slate-300 flex items-center gap-1.5">
                <FiMessageSquare className="text-teal-400" /> Message <span className="text-teal-400">*</span>
              </label>
              <textarea
                rows={4}
                placeholder="Write your message here..."
                value={formState.message}
                onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-white/10 text-white text-sm focus:outline-none focus:border-teal-500 transition-colors resize-none"
                required
              />
            </div>

            <button
              type="submit"
              disabled={status.loading}
              className="w-full py-3.5 rounded-xl bg-gradient-to-r from-teal-500 to-emerald-500 text-slate-950 font-bold text-sm hover:shadow-[0_0_25px_rgba(20,184,166,0.4)] hover:scale-[1.01] transition-all duration-200 flex items-center justify-center gap-2 disabled:opacity-50"
            >
              {status.loading ? (
                <span>Sending Message...</span>
              ) : (
                <>
                  <span>Send Message</span>
                  <FiSend className="w-4 h-4" />
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
