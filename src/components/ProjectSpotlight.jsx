import { useState, useEffect } from 'react';
import { FaGithub } from 'react-icons/fa';
import {
  FiStar,
  FiCheckCircle,
  FiAlertCircle,
  FiChevronRight,
  FiBookOpen,
  FiMaximize2,
  FiX,
  FiVideo,
  FiExternalLink
} from 'react-icons/fi';

// A wide, case-study style card for a flagship project (projects with `spotlight: true`).
export default function ProjectSpotlight({ project }) {
  const [showImage, setShowImage] = useState(false);
  const [showVideo, setShowVideo] = useState(false);

  // Close the open modal on Escape
  useEffect(() => {
    if (!showImage && !showVideo) return undefined;
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setShowImage(false);
        setShowVideo(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [showImage, showVideo]);

  return (
    <article className="relative group">
      {/* Glow ring */}
      <div className="absolute -inset-px rounded-3xl bg-gradient-to-br from-teal-500/40 via-emerald-500/10 to-cyan-500/30 opacity-60 blur-sm group-hover:opacity-90 transition duration-500 pointer-events-none" />

      <div className="relative glass-panel rounded-3xl overflow-hidden p-5 sm:p-8 space-y-8">
        {/* Badges */}
        <div className="flex flex-wrap items-center gap-2">
          {project.badge && (
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-semibold">
              <FiStar className="w-3.5 h-3.5" />
              {project.badge}
            </span>
          )}
          <span className="px-3 py-1 rounded-full bg-slate-950/60 border border-white/10 text-teal-300 text-xs font-semibold">
            {project.category}
          </span>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 items-start">
          {/* Screenshot + pipeline */}
          <div className="lg:col-span-7 space-y-5">
            <button
              type="button"
              onClick={() => setShowImage(true)}
              className="relative block w-full overflow-hidden rounded-2xl border border-white/10 bg-slate-950 shadow-2xl focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-400"
              aria-label={`View ${project.title} screenshot full size`}
            >
              <img
                src={project.thumbnail}
                alt={project.thumbnailAlt || `${project.title} screenshot`}
                width="1600"
                height="1100"
                loading="lazy"
                className="w-full h-auto group-hover:scale-[1.02] transition-transform duration-700"
              />
              <span className="absolute bottom-3 right-3 inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-slate-950/80 backdrop-blur-md border border-white/10 text-[11px] font-semibold text-slate-200">
                <FiMaximize2 className="w-3 h-3" /> Enlarge
              </span>
            </button>

            {project.pipeline && (
              <div className="space-y-2">
                <div className="text-[11px] uppercase tracking-wider font-semibold text-slate-400">How it works</div>
                <div className="flex flex-wrap items-center gap-1.5">
                  {project.pipeline.map((step, i) => (
                    <span key={step} className="inline-flex items-center gap-1.5">
                      <span className="text-[11px] font-mono px-2.5 py-1 rounded-md bg-teal-500/10 border border-teal-500/20 text-teal-200">
                        {step}
                      </span>
                      {i < project.pipeline.length - 1 && <FiChevronRight className="w-3.5 h-3.5 text-slate-500" />}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Story + stats */}
          <div className="lg:col-span-5 space-y-6">
            <div className="space-y-3">
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight leading-tight">
                {project.title}
              </h3>
              {project.tagline && <p className="gradient-text-teal font-semibold">{project.tagline}</p>}
              <p className="text-slate-400 text-sm leading-relaxed">{project.description}</p>
            </div>

            {project.stats && (
              <div className="grid grid-cols-2 gap-3">
                {project.stats.map((s) => (
                  <div key={s.label} className="rounded-xl bg-slate-900/70 border border-white/5 px-4 py-3">
                    <div className="text-2xl font-extrabold text-white">{s.value}</div>
                    <div className="text-[11px] text-slate-400 font-medium">{s.label}</div>
                  </div>
                ))}
              </div>
            )}

            {project.highlights && (
              <ul className="space-y-2">
                {project.highlights.map((h) => (
                  <li key={h} className="flex items-start gap-2 text-xs text-slate-300 leading-relaxed">
                    <FiCheckCircle className="text-teal-400 shrink-0 mt-0.5" />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>

        {/* Pros / limitations */}
        {(project.pros || project.limitations) && (
          <div className="grid sm:grid-cols-2 gap-4">
            {project.pros && (
              <div className="rounded-2xl bg-emerald-500/5 border border-emerald-500/20 p-4 space-y-2">
                <div className="text-xs font-bold text-emerald-300 uppercase tracking-wider">Strengths</div>
                {project.pros.map((p) => (
                  <div key={p} className="flex items-start gap-2 text-xs text-slate-300">
                    <FiCheckCircle className="text-emerald-400 shrink-0 mt-0.5" />
                    <span>{p}</span>
                  </div>
                ))}
              </div>
            )}
            {project.limitations && (
              <div className="rounded-2xl bg-amber-500/5 border border-amber-500/20 p-4 space-y-2">
                <div className="text-xs font-bold text-amber-300 uppercase tracking-wider">Known limitations</div>
                {project.limitations.map((l) => (
                  <div key={l} className="flex items-start gap-2 text-xs text-slate-300">
                    <FiAlertCircle className="text-amber-400 shrink-0 mt-0.5" />
                    <span>{l}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* Tech + actions */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-5 pt-6 border-t border-white/5">
          <div className="flex flex-wrap gap-1.5">
            {project.tech.map((t) => (
              <span
                key={t}
                className="text-[11px] font-mono bg-slate-900 border border-white/5 text-slate-300 px-2.5 py-1 rounded-md"
              >
                {t}
              </span>
            ))}
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-teal-500 to-emerald-500 text-slate-950 text-xs font-bold hover:shadow-[0_0_25px_rgba(20,184,166,0.4)] transition-all"
              >
                <FaGithub className="w-4 h-4" /> View Code
              </a>
            )}
            {project.docsUrl && (
              <a
                href={project.docsUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-900 border border-white/10 text-xs font-semibold text-slate-200 hover:text-teal-300 hover:border-teal-500/40 transition-colors"
              >
                <FiBookOpen className="w-4 h-4" /> Setup Guide
              </a>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-teal-500/10 border border-teal-500/30 text-xs font-semibold text-teal-300 hover:bg-teal-500/20 transition-colors"
              >
                <FiExternalLink className="w-4 h-4" /> Live Demo
              </a>
            )}
            {project.youtubeId && (
              <button
                type="button"
                onClick={() => setShowVideo(true)}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-amber-500/10 border border-amber-500/30 text-xs font-semibold text-amber-300 hover:bg-amber-500/20 transition-colors"
              >
                <FiVideo className="w-4 h-4" /> Watch Demo
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Full-size screenshot */}
      {showImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/90 backdrop-blur-md p-4 fade-in-up"
          onClick={() => setShowImage(false)}
          role="dialog"
          aria-modal="true"
          aria-label={`${project.title} screenshot`}
        >
          <button
            type="button"
            onClick={() => setShowImage(false)}
            className="absolute top-4 right-4 p-2 rounded-lg bg-slate-900 border border-white/10 text-slate-300 hover:text-white transition-colors"
            aria-label="Close"
          >
            <FiX className="w-5 h-5" />
          </button>
          <img
            src={project.thumbnail}
            alt={project.thumbnailAlt || `${project.title} screenshot`}
            className="max-w-full max-h-[90vh] rounded-2xl border border-white/10 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}

      {/* Video demo */}
      {showVideo && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/80 backdrop-blur-md p-4 fade-in-up"
          onClick={() => setShowVideo(false)}
        >
          <div
            className="relative w-full max-w-4xl glass-panel rounded-2xl overflow-hidden border border-white/10 p-2 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between p-4 border-b border-white/10">
              <h5 className="text-base font-bold text-white flex items-center gap-2">
                <FiVideo className="text-amber-400" /> {project.title} — Video Demo
              </h5>
              <button
                type="button"
                onClick={() => setShowVideo(false)}
                className="p-2 rounded-lg bg-slate-900 border border-white/10 text-slate-400 hover:text-white transition-colors"
                aria-label="Close video"
              >
                <FiX className="w-5 h-5" />
              </button>
            </div>
            <div className="w-full aspect-video bg-black rounded-xl overflow-hidden">
              <iframe
                className="w-full h-full"
                src={`https://www.youtube.com/embed/${project.youtubeId}?autoplay=1`}
                title={`${project.title} Video Demo`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      )}
    </article>
  );
}
