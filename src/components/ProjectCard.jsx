import { useState } from 'react';
import { FaGithub } from 'react-icons/fa';
import { FiExternalLink } from 'react-icons/fi';

export default function ProjectCard({ project }) {
  const [showVideo, setShowVideo] = useState(false);

  return (
    <div className="transform hover:-translate-y-1 transition-all rounded-xl border border-white/6 bg-white/5 overflow-hidden">
      <div className="w-full h-44 overflow-hidden">
        <img src={project.thumbnail} alt={`${project.title} thumbnail`} className="w-full h-full object-cover" />
      </div>

      <div className="p-5">
        <div className="flex items-start justify-between gap-4">
          <h4 className="text-lg font-semibold text-white">{project.title}</h4>
          <div className="flex items-center gap-2">
            {project.githubUrl && (
              <a href={project.githubUrl} target="_blank" rel="noreferrer" className="p-2 rounded-md border border-white/6 text-slate-200 hover:bg-[color:var(--color-accent)] hover:text-black transition" title="GitHub">
                <FaGithub />
              </a>
            )}
            {project.liveUrl && (
              <a href={project.liveUrl} target="_blank" rel="noreferrer" className="p-2 rounded-md border border-white/6 text-slate-200 hover:bg-[color:var(--color-accent)] hover:text-black transition" title="Live">
                <FiExternalLink />
              </a>
            )}
          </div>
        </div>

        <p className="text-slate-400 mt-3 text-sm">{project.description}</p>

        <div className="flex flex-wrap gap-2 mt-4">
          {project.tech && project.tech.map((t) => (
            <span key={t} className="text-xs bg-white/3 text-slate-200 px-3 py-1 rounded-full">{t}</span>
          ))}
        </div>

        {project.youtubeId && (
          <div className="mt-4">
            <button onClick={() => setShowVideo(true)} className="text-sm text-slate-200 border border-white/6 px-3 py-1 rounded">Watch Demo</button>
          </div>
        )}
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
