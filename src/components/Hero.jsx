import { useState } from 'react';
import { FiArrowRight, FiMail, FiCheck, FiCode, FiTerminal } from 'react-icons/fi';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

export default function Hero() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('riyan.ahmed.khan.10@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="relative pt-12 pb-16 md:py-20 overflow-hidden">
      {/* Background Glow Lights */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-72 h-72 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 grid md:grid-cols-12 gap-12 items-center">
        {/* Left Column: Hero Details */}
        <div className="md:col-span-7 text-center md:text-left space-y-6">
          {/* Availability Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/80 border border-teal-500/30 backdrop-blur-md text-xs font-medium text-teal-300">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-teal-500"></span>
            </span>
            Available for AI & Software Projects
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.15]">
            Hi, I&apos;m <span className="gradient-text-teal">Riyan Ahmed</span>
          </h1>

          <h2 className="text-xl sm:text-2xl font-semibold text-slate-300 flex items-center justify-center md:justify-start gap-2">
            <FiCode className="text-teal-400" />
            <span>AI Engineer & Backend Developer</span>
          </h2>

          <p className="text-slate-400 text-base sm:text-lg max-w-xl leading-relaxed mx-auto md:mx-0">
            Passionate 2nd-year AI Engineering student crafting data-driven applications, production-ready REST APIs, and automated analytics dashboards.
          </p>

          {/* Action Buttons */}
          <div className="pt-2 flex flex-wrap items-center justify-center md:justify-start gap-4">
            <a
              href="#projects"
              className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-teal-500 to-emerald-500 text-slate-950 font-bold text-sm hover:shadow-[0_0_25px_rgba(20,184,166,0.4)] hover:scale-[1.02] transition-all duration-200 flex items-center gap-2"
            >
              View Projects
              <FiArrowRight className="w-4 h-4" />
            </a>

            <button
              onClick={handleCopyEmail}
              className="px-5 py-3.5 rounded-xl bg-slate-900/90 border border-white/10 text-slate-200 font-medium text-sm hover:border-teal-500/40 hover:bg-slate-800/80 transition-all duration-200 flex items-center gap-2 relative"
            >
              {copied ? (
                <>
                  <FiCheck className="w-4 h-4 text-emerald-400" />
                  <span className="text-emerald-400">Email Copied!</span>
                </>
              ) : (
                <>
                  <FiMail className="w-4 h-4 text-teal-400" />
                  <span>Copy Email</span>
                </>
              )}
            </button>
          </div>

          {/* Tech Quick Pill Ticker */}
          <div className="pt-6 border-t border-white/5 flex flex-wrap items-center justify-center md:justify-start gap-2 text-xs text-slate-400">
            <span className="font-semibold text-slate-300 flex items-center gap-1">
              <FiTerminal className="text-teal-400" /> Core Tech:
            </span>
            {['Python', 'FastAPI', 'PostgreSQL', 'Excel Analytics', 'SQLAlchemy'].map((t) => (
              <span key={t} className="px-2.5 py-1 rounded-md bg-white/5 border border-white/5 text-slate-300 font-mono">
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Right Column: Hero Profile Picture & Card Frame */}
        <div className="md:col-span-5 flex justify-center">
          <div className="relative group">
            {/* Outer Decorative Gradient Ring */}
            <div className="absolute -inset-1 rounded-3xl bg-gradient-to-tr from-teal-500 via-emerald-500 to-cyan-500 opacity-40 blur-lg group-hover:opacity-75 transition duration-500"></div>

            {/* Profile Card Container */}
            <div className="relative glass-panel rounded-3xl p-4 border border-white/10 flex flex-col items-center">
              <div className="w-56 h-56 sm:w-64 sm:h-64 rounded-2xl overflow-hidden relative shadow-2xl">
                <img
                  src="/assets/riyan.jpg"
                  alt="Riyan Ahmed Profile"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  onError={(e) => {
                    e.currentTarget.src = '/assets/avatar-placeholder.svg';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />
              </div>

              {/* Bottom Card Meta & Socials */}
              <div className="w-full mt-4 flex items-center justify-between px-2">
                <div className="text-left">
                  <div className="text-xs text-slate-400 font-medium">Based in</div>
                  <div className="text-sm text-white font-semibold flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-emerald-400" /> Remote / India
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <a
                    href="https://github.com/riyan-developerr"
                    target="_blank"
                    rel="noreferrer"
                    className="p-2 rounded-lg bg-slate-900 border border-white/10 text-slate-300 hover:text-teal-300 hover:border-teal-500/40 transition-colors"
                    aria-label="GitHub Profile"
                  >
                    <FaGithub className="w-4 h-4" />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/riyan-ahmad/"
                    target="_blank"
                    rel="noreferrer"
                    className="p-2 rounded-lg bg-slate-900 border border-white/10 text-slate-300 hover:text-teal-300 hover:border-teal-500/40 transition-colors"
                    aria-label="LinkedIn Profile"
                  >
                    <FaLinkedin className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
