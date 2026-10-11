import { useState, useEffect } from 'react';
import { FaGithub } from 'react-icons/fa';
import {
  FiStar,
  FiMaximize2,
  FiX,
  FiBookOpen,
  FiCheckCircle,
  FiAlertTriangle,
  FiMic,
  FiMessageSquare,
  FiCpu,
  FiShield,
  FiVolume2,
  FiChevronRight,
} from 'react-icons/fi';

const STEP_ICONS = [FiMic, FiMessageSquare, FiCpu, FiShield, FiVolume2];

export default function ProjectSpotlight({ project }) {
  const [zoomed, setZoomed] = useState(false);

  // Close the enlarged screenshot on Escape
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setZoomed(false);
    };
    if (zoomed) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [zoomed]);

  const { screenshot } = project;

  return (
    <article
      id={project.id}
      className="relative glass-panel rounded-3xl overflow-hidden scroll-mt-28"
      aria-labelledby={`${project.id}-title`}
    >
      {/* Ambient glow */}
      <div className="absolute -top-24 -left-24 w-72 h-72 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -right-24 w-72 h-72 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative grid lg:grid-cols-12 gap-8 p-6 sm:p-8">
        {/* Screenshot */}
        <div className="lg:col-span-7">
          <button
            type="button"
            onClick={() => setZoomed(true)}
            className="group relative block w-full rounded-2xl overflow-hidden border border-white/10 bg-[#070b14] shadow-2xl focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-400"
            aria-label={`Enlarge screenshot of ${project.title}`}
          >
            <picture>
              <source srcSet={screenshot.webp} type="image/webp" />
              <img
                src={screenshot.src}
                alt={screenshot.alt}
                width={screenshot.width}
                height={screenshot.height}
                loading="lazy"
                className="w-full h-auto group-hover:scale-[1.02] transition-transform duration-500"
              />
            </picture>
            <span className="absolute bottom-3 right-3 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-950/80 backdrop-blur-md border border-white/10 text-xs font-semibold text-slate-200 opacity-90 group-hover:opacity-100 group-hover:text-teal-300 transition">
              <FiMaximize2 className="w-3.5 h-3.5" />
              View full size
            </span>
          </button>
          {screenshot.caption && (
            <p className="mt-3 text-xs text-slate-500 text-center">{screenshot.caption}</p>
          )}
        </div>

        {/* Summary */}
        <div className="lg:col-span-5 flex flex-col gap-6">
          <div className="space-y-4">
            <div className="flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-xs font-semibold text-amber-300">
                <FiStar className="w-3.5 h-3.5" />
                {project.badge}
              </span>
              <span className="px-3 py-1 rounded-full bg-slate-950/60 border border-white/10 text-xs font-semibold text-teal-300">
                {project.category}
              </span>
            </div>

            <h3 id={`${project.id}-title`} className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              {project.title}
              <span className="block mt-1 text-lg sm:text-xl font-semibold text-slate-300">{project.tagline}</span>
            </h3>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">{project.description}</p>
          </div>

          {/* Key numbers */}
          <dl className="grid grid-cols-2 gap-3">
            {project.stats.map((s) => (
              <div key={s.label} className="rounded-xl bg-slate-900/70 border border-white/5 p-4">
                <dt className="sr-only">{s.label}</dt>
                <dd>
                  <div className="text-xl sm:text-2xl font-extrabold gradient-text-teal whitespace-nowrap">{s.value}</div>
                  <div className="text-xs text-slate-400 mt-1 leading-snug">{s.label}</div>
                </dd>
              </div>
            ))}
          </dl>

          {/* Links */}
          <div className="flex flex-wrap gap-3 mt-auto">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-teal-500 to-emerald-500 text-slate-950 font-bold text-sm hover:shadow-[0_0_25px_rgba(20,184,166,0.4)] transition-all duration-200"
            >
              <FaGithub className="w-4 h-4" />
              View Code
            </a>
            <a
              href={project.docsUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-slate-900 border border-white/10 text-sm font-semibold text-slate-200 hover:text-teal-300 hover:border-teal-500/40 transition-colors"
            >
              <FiBookOpen className="w-4 h-4" />
              Install Guide
            </a>
          </div>
        </div>
      </div>

      {/* How it works */}
      <div className="relative border-t border-white/5 px-6 sm:px-8 py-8 space-y-5">
        <h4 className="text-sm font-bold uppercase tracking-wider text-slate-400">How it works</h4>
        <ol className="grid sm:grid-cols-2 lg:grid-cols-5 gap-3">
          {project.pipeline.map((step, i) => {
            const Icon = STEP_ICONS[i % STEP_ICONS.length];
            return (
              <li key={step.title} className="relative rounded-xl bg-slate-900/60 border border-white/5 p-4">
                <div className="flex items-center gap-2 text-white font-semibold text-sm">
                  <span className="w-8 h-8 rounded-lg bg-teal-500/10 border border-teal-500/30 flex items-center justify-center text-teal-300 shrink-0">
                    <Icon className="w-4 h-4" />
                  </span>
                  {step.title}
                </div>
                <p className="text-xs text-slate-400 mt-2 leading-relaxed">{step.detail}</p>
                {i < project.pipeline.length - 1 && (
                  <FiChevronRight
                    aria-hidden="true"
                    className="hidden lg:block absolute top-1/2 -right-3 -translate-y-1/2 w-4 h-4 text-teal-500/60 z-10"
                  />
                )}
              </li>
            );
          })}
        </ol>
      </div>

      {/* Highlights and limitations */}
      <div className="relative border-t border-white/5 px-6 sm:px-8 py-8 grid md:grid-cols-2 gap-8">
        <div className="space-y-3">
          <h4 className="text-sm font-bold uppercase tracking-wider text-slate-400">What I built</h4>
          <ul className="space-y-2.5">
            {project.highlights.map((h) => (
              <li key={h} className="flex items-start gap-2.5 text-sm text-slate-300">
                <FiCheckCircle className="text-teal-400 shrink-0 mt-0.5" />
                <span>{h}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="space-y-3">
          <h4 className="text-sm font-bold uppercase tracking-wider text-slate-400">Good to know</h4>
          <ul className="space-y-2.5">
            {project.limitations.map((l) => (
              <li key={l} className="flex items-start gap-2.5 text-sm text-slate-300">
                <FiAlertTriangle className="text-amber-400 shrink-0 mt-0.5" />
                <span>{l}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Tech stack */}
      <div className="relative border-t border-white/5 px-6 sm:px-8 py-6 flex flex-wrap items-center gap-1.5">
        {project.tech.map((t) => (
          <span
            key={t}
            className="text-[11px] font-mono bg-slate-900 border border-white/5 text-slate-300 px-2.5 py-1 rounded-md"
          >
            {t}
          </span>
        ))}
        {project.credit && <p className="basis-full mt-3 text-xs text-slate-500">{project.credit}</p>}
      </div>

      {/* Full-size screenshot */}
      {zoomed && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/90 backdrop-blur-md p-4 fade-in-up"
          onClick={() => setZoomed(false)}
          role="dialog"
          aria-modal="true"
          aria-label={`${project.title} screenshot`}
        >
          <button
            type="button"
            onClick={() => setZoomed(false)}
            className="absolute top-4 right-4 p-2 rounded-lg bg-slate-900 border border-white/10 text-slate-300 hover:text-white transition-colors"
            aria-label="Close screenshot"
          >
            <FiX className="w-5 h-5" />
          </button>
          <picture onClick={(e) => e.stopPropagation()}>
            <source srcSet={screenshot.webp} type="image/webp" />
            <img
              src={screenshot.src}
              alt={screenshot.alt}
              className="max-w-full max-h-[90vh] rounded-2xl border border-white/10 shadow-2xl"
            />
          </picture>
        </div>
      )}
    </article>
  );
}
