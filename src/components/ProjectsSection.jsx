import { useState } from 'react';
import projects from '../data/projects';
import ProjectCard from './ProjectCard';
import ProjectSpotlight from './ProjectSpotlight';
import { FiFolder, FiGrid } from 'react-icons/fi';

export default function ProjectsSection() {
  const [filter, setFilter] = useState('All');

  const spotlight = projects.filter((p) => p.spotlight);
  const gridProjects = projects.filter((p) => !p.spotlight);

  const categories = ['All', ...Array.from(new Set(gridProjects.map((p) => p.category).filter(Boolean)))];

  const filteredProjects = filter === 'All' ? gridProjects : gridProjects.filter((p) => p.category === filter);

  return (
    <div className="py-12 space-y-10">
      {/* Header */}
      <div className="space-y-3 border-b border-white/5 pb-8">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/10 border border-teal-500/20 text-xs font-semibold text-teal-300">
          <FiFolder className="w-3.5 h-3.5" />
          <span>Featured Portfolio Work</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          Featured <span className="gradient-text-teal">Projects</span>
        </h2>
        <p className="text-slate-400 text-sm sm:text-base max-w-xl">
          From a voice-controlled AI assistant for Windows to production-ready REST APIs and data dashboards.
        </p>
      </div>

      {/* Spotlight: personal projects shown in full */}
      {spotlight.map((project) => (
        <ProjectSpotlight key={project.id} project={project} />
      ))}

      {/* More projects */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pt-4">
        <h3 className="text-xl font-bold text-white">More Projects</h3>

        {/* Filter Tabs */}
        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all duration-200 flex items-center gap-2 ${
                filter === cat
                  ? 'bg-gradient-to-r from-teal-500 to-emerald-500 text-slate-950 shadow-md'
                  : 'bg-slate-900 border border-white/10 text-slate-300 hover:border-teal-500/40'
              }`}
            >
              <FiGrid className="w-3.5 h-3.5" />
              <span>{cat}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
        {filteredProjects.map((project) => (
          <ProjectCard key={project.id || project.title} project={project} />
        ))}
      </div>
    </div>
  );
}
