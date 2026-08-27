import { useState } from 'react';

export default function ProjectCard({ project }) {
  const [showVideo, setShowVideo] = useState(false);

  return (
    <div className="bg-slate-900 rounded-lg overflow-hidden card-shadow">
      <div className="h-40 bg-black/40 flex items-center justify-center overflow-hidden">
        <img src={project.thumbnail} alt={`${project.title} thumbnail`} className="w-full h-full object-cover" />
        {project.youtubeId && (
          <button onClick={() => setShowVideo(true)} aria-label="Play demo" className="absolute p-3 rounded-full bg-white/90 text-black">
            ▶
          </button>
        )}
      </div>

      <div className="p-4">
        <div className="flex items-start justify-between">
          <h4 className="text-lg font-semibold text-white">{project.title}</h4>
          <div className="flex items-center gap-2">
            {project.githubUrl && (
              <a href={project.githubUrl} target="_blank" rel="noreferrer" className="text-slate-300 hover:text-white" title="GitHub">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 .5C5.73.5.75 5.48.75 11.76c0 4.95 3.2 9.15 7.64 10.63.56.1.76-.24.76-.54 0-.27-.01-1-.02-1.96-3.11.68-3.77-1.5-3.77-1.5-.51-1.3-1.25-1.65-1.25-1.65-1.02-.7.08-.69.08-.69 1.13.08 1.73 1.17 1.73 1.17 1 1.73 2.63 1.23 3.27.94.1-.73.39-1.23.71-1.52-2.48-.28-5.09-1.24-5.09-5.53 0-1.22.43-2.22 1.13-3-.11-.28-.49-1.41.1-2.94 0 0 .92-.29 3.02 1.14a10.52 10.52 0 012.75-.37c.93.01 1.87.12 2.75.37 2.1-1.43 3.02-1.14 3.02-1.14.59 1.53.21 2.66.1 2.94.7.79 1.13 1.78 1.13 3 0 4.3-2.62 5.24-5.11 5.52.4.35.76 1.05.76 2.12 0 1.53-.01 2.77-.01 3.15 0 .3.2.65.77.54A11.27 11.27 0 0023.25 11.76C23.25 5.48 18.27.5 12 .5z" fill="currentColor" />
                </svg>
              </a>
            )}
          </div>
        </div>

        <p className="text-slate-300 mt-2 text-sm">{project.description}</p>

        <div className="flex flex-wrap gap-2 mt-3">
          {project.tech && project.tech.map((t) => (
            <span key={t} className="text-xs bg-slate-800 text-slate-300 px-2 py-1 rounded">{t}</span>
          ))}
        </div>

        <div className="mt-4 flex items-center gap-3">
          {project.liveUrl && (
            <a href={project.liveUrl} target="_blank" rel="noreferrer" className="text-sm text-white bg-[color:var(--color-accent)] px-3 py-1 rounded">Live</a>
          )}

          {project.youtubeId && (
            <button onClick={() => setShowVideo(true)} className="text-sm text-slate-200 border border-slate-700 px-3 py-1 rounded">Watch Demo</button>
          )}
        </div>
      </div>

      {showVideo && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4">
          <div className="w-full max-w-3xl aspect-video bg-black rounded">
            <iframe className="w-full h-full rounded" src={`https://www.youtube.com/embed/${project.youtubeId}?autoplay=1`} title="YouTube video" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
          </div>
          <button onClick={() => setShowVideo(false)} className="absolute top-6 right-6 text-white bg-slate-800 p-2 rounded">Close</button>
        </div>
      )}
    </div>
  );
}
