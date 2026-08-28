import { useState, useEffect } from 'react';
import { FaGithub } from 'react-icons/fa';
import { FiExternalLink, FiVideo, FiX, FiCheckCircle, FiFolder } from 'react-icons/fi';

export default function ProjectCard({ project }) {
  const [showVideo, setShowVideo] = useState(false);
  const [imgError, setImgError] = useState(false);

  // Close modal on Escape key press
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setShowVideo(false);
    };
    if (showVideo) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [showVideo]);

  return (
    <div className="glass-panel glass-panel-hover rounded-2xl overflow-hidden flex flex-col justify-between group h-full">
      {/* Thumbnail Section */}
      <div>
        <div className="relative w-full h-48 sm:h-52 overflow-hidden bg-slate-900">
          {!imgError ? (
            <img
              src={project.thumbnail}
              alt={`${project.title} thumbnail`}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              onError={() => setImgError(true)}
            />
          ) : (
            <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-slate-900 to-slate-800 text-slate-500 p-4">
              <FiFolder className="w-12 h-12 text-teal-500/40 mb-2" />
              <span className="text-xs font-mono font-medium">{project.title}</span>
            </div>
          )}

          {/* Category Badge Overlay */}
          <div className="absolute top-3 left-3 z-10">
            <span className="px-3 py-1 rounded-full bg-slate-950/80 backdrop-blur-md border border-white/10 text-teal-300 text-xs font-semibold">
              {project.category || 'Software'}
            </span>
          </div>

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent opacity-80" />
        </div>

        {/* Project Content */}
        <div className="p-6 space-y-4">
          <h4 className="text-xl font-bold text-white group-hover:text-teal-300 transition-colors">
            {project.title}
          </h4>

          <p className="text-slate-400 text-sm leading-relaxed line-clamp-3">
            {project.description}
          </p>

          {/* Highlights */}
          {project.highlights && project.highlights.length > 0 && (
            <div className="space-y-1.5 pt-2 border-t border-white/5">
              {project.highlights.map((h, i) => (
                <div key={i} className="flex items-start gap-2 text-xs text-slate-300">
                  <FiCheckCircle className="text-teal-400 shrink-0 mt-0.5" />
                  <span>{h}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Footer Section: Tech Stack & Action Links */}
      <div className="p-6 pt-0 space-y-4">
        {/* Tech Stack Pills */}
        <div className="flex flex-wrap gap-1.5">
          {project.tech &&
            project.tech.map((t) => (
              <span
                key={t}
                className="text-[11px] font-mono bg-slate-900 border border-white/5 text-slate-300 px-2.5 py-1 rounded-md"
              >
                {t}
              </span>
            ))}
        </div>

        {/* Action Bar */}
        <div className="flex items-center justify-between pt-4 border-t border-white/5">
          <div className="flex items-center gap-3">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-slate-900 border border-white/10 text-xs font-semibold text-slate-200 hover:text-teal-300 hover:border-teal-500/40 transition-colors"
                title="View Source Code on GitHub"
              >
                <FaGithub className="w-3.5 h-3.5" />
                <span>Code</span>
              </a>
            )}

            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-teal-500/10 border border-teal-500/30 text-xs font-semibold text-teal-300 hover:bg-teal-500/20 transition-colors"
                title="Open Live Preview"
              >
                <FiExternalLink className="w-3.5 h-3.5" />
                <span>Live Demo</span>
              </a>
            )}
          </div>

          {project.youtubeId && (
            <button
              onClick={() => setShowVideo(true)}
              className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-amber-500/10 border border-amber-500/30 text-xs font-semibold text-amber-300 hover:bg-amber-500/20 transition-colors"
            >
              <FiVideo className="w-3.5 h-3.5" />
              <span>Watch Video</span>
            </button>
          )}
        </div>
      </div>

      {/* Video Preview Modal */}
      {showVideo && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/80 backdrop-blur-md p-4 animate-fadeInUp"
          onClick={() => setShowVideo(false)}
        >
          <div
            className="relative w-full max-w-4xl glass-panel rounded-2xl overflow-hidden border border-white/10 p-2 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between p-4 border-b border-white/10">
              <h5 className="text-base font-bold text-white flex items-center gap-2">
                <FiVideo className="text-amber-400" /> {project.title} — Video Demo
              </h5>
              <button
                onClick={() => setShowVideo(false)}
                className="p-2 rounded-lg bg-slate-900 border border-white/10 text-slate-400 hover:text-white transition-colors"
                aria-label="Close modal"
              >
                <FiX className="w-5 h-5" />
              </button>
            </div>

            {/* Video Iframe Container */}
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
    </div>
  );
}
