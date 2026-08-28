import { useState } from 'react';
import aboutStats from '../data/aboutStats';
import { skillCategories } from '../data/skills';
import { FiUser, FiCpu, FiDatabase, FiTool, FiCheckCircle, FiAward, FiBookOpen, FiLayers } from 'react-icons/fi';

export default function About() {
  const [activeTab, setActiveTab] = useState(skillCategories[0].category);

  return (
    <div className="py-12 space-y-16">
      {/* Section Title */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/10 border border-teal-500/20 text-xs font-semibold text-teal-300">
          <FiUser className="w-3.5 h-3.5" />
          <span>Get To Know Me</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          About <span className="gradient-text-teal">Me</span>
        </h2>
        <p className="text-slate-400 text-sm sm:text-base">
          Driven by curiosity in artificial intelligence, backend scalability, and data engineering.
        </p>
      </div>

      {/* Grid: Bio Story + Key Metric Cards */}
      <div className="grid lg:grid-cols-12 gap-8 items-stretch">
        {/* Left Column: Narrative Card */}
        <div className="lg:col-span-7 glass-panel rounded-2xl p-6 sm:p-8 flex flex-col justify-between space-y-6">
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white flex items-center gap-2">
              <span className="w-2 h-6 bg-gradient-to-b from-teal-400 to-emerald-500 rounded-full" />
              Software & AI Developer
            </h3>
            <p className="text-slate-300 text-base leading-relaxed">
              Hi — I&apos;m <strong className="text-teal-300">Riyan Ahmed</strong>, an AI Engineering student entering my 2nd year. I build AI and data-driven applications, production-ready backend services, and automated data dashboards.
            </p>
            <p className="text-slate-400 text-sm leading-relaxed">
              My focus is on understanding deep backend mechanics, writing clean relational schemas with PostgreSQL and SQLAlchemy, creating async microservices with FastAPI, and transforming complex raw data into actionable insights.
            </p>
          </div>

          {/* Bulleted Core Principles */}
          <div className="grid sm:grid-cols-2 gap-3 pt-4 border-t border-white/5">
            {[
              'Backend API Architecture',
              'Data Visualization & Analytics',
              'Clean & Maintainable Code',
              'Continuous Skill Building'
            ].map((principle) => (
              <div key={principle} className="flex items-center gap-2 text-xs font-medium text-slate-300">
                <FiCheckCircle className="text-teal-400 shrink-0" />
                <span>{principle}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Key Stats Display */}
        <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-4">
          <div className="glass-panel glass-panel-hover rounded-2xl p-6 flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-teal-500/10 border border-teal-500/30 flex items-center justify-center text-teal-400 text-2xl font-bold">
              <FiLayers />
            </div>
            <div>
              <div className="text-3xl font-extrabold text-white">{aboutStats.projectsCompleted}+</div>
              <div className="text-xs text-slate-400 font-medium mt-0.5">Projects Completed</div>
            </div>
          </div>

          <div className="glass-panel glass-panel-hover rounded-2xl p-6 flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 text-2xl font-bold">
              <FiBookOpen />
            </div>
            <div>
              <div className="text-3xl font-extrabold text-white">{aboutStats.yearsLearning}nd Year</div>
              <div className="text-xs text-slate-400 font-medium mt-0.5">AI Engineering Student</div>
            </div>
          </div>

          <div className="glass-panel glass-panel-hover rounded-2xl p-6 flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 text-2xl font-bold">
              <FiAward />
            </div>
            <div>
              <div className="text-3xl font-extrabold text-white">{aboutStats.technologies}+</div>
              <div className="text-xs text-slate-400 font-medium mt-0.5">Core Tools & Skills</div>
            </div>
          </div>
        </div>
      </div>

      {/* Skills Showcase Section */}
      <div className="glass-panel rounded-2xl p-6 sm:p-8 space-y-6">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-white/5 pb-6">
          <div>
            <h3 className="text-xl font-bold text-white flex items-center gap-2">
              <FiCpu className="text-teal-400" />
              Technical Skills & Ecosystem
            </h3>
            <p className="text-xs text-slate-400 mt-1">Tools and frameworks I utilize in project developments</p>
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap gap-2">
            {skillCategories.map((cat) => (
              <button
                key={cat.category}
                onClick={() => setActiveTab(cat.category)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all duration-200 ${
                  activeTab === cat.category
                    ? 'bg-gradient-to-r from-teal-500 to-emerald-500 text-slate-950 shadow-md'
                    : 'bg-slate-900 border border-white/10 text-slate-300 hover:border-teal-500/40'
                }`}
              >
                {cat.category}
              </button>
            ))}
          </div>
        </div>

        {/* Tab Content Display */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {skillCategories
            .find((c) => c.category === activeTab)
            ?.skills.map((skill) => (
              <div
                key={skill.name}
                className="group bg-slate-900/60 border border-white/5 rounded-xl p-4 hover:border-teal-500/40 hover:bg-slate-800/80 transition-all duration-200 flex flex-col justify-between space-y-3"
              >
                <div className="flex items-center justify-between">
                  <span className="text-sm font-semibold text-white group-hover:text-teal-300 transition-colors">
                    {skill.name}
                  </span>
                  {getCategoryIcon(activeTab)}
                </div>
                <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden">
                  <div className="bg-gradient-to-r from-teal-500 to-emerald-400 h-full rounded-full w-4/5 group-hover:w-full transition-all duration-500" />
                </div>
                <div className="flex justify-between items-center text-[10px] text-slate-400">
                  <span>Level</span>
                  <span className="text-teal-400 font-mono font-medium">{skill.level}</span>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

function getCategoryIcon(cat) {
  if (cat.includes('AI')) return <FiCpu className="text-teal-400 w-4 h-4" />;
  if (cat.includes('Data')) return <FiDatabase className="text-emerald-400 w-4 h-4" />;
  return <FiTool className="text-cyan-400 w-4 h-4" />;
}
