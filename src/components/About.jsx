import { useEffect, useRef } from 'react';
import aboutStats from '../data/aboutStats';

export default function About() {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div ref={ref} className="fade-in py-20">
      <div className="grid md:grid-cols-2 gap-10 items-start">
        <div>
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">About Me</h3>
          <p className="text-slate-400 max-w-2xl leading-relaxed">Hi — I&apos;m Riyan Ahmed, an AI Engineering student entering my 2nd year. I enjoy building AI and data-driven applications, learning production-ready backend technologies, and creating dashboard visualizations. (Placeholder — edit this text to suit your bio.)</p>
        </div>

        <div className="bg-white/5 border border-white/6 rounded-xl p-1">
          <div className="flex">
            <div className="flex-1 text-center py-6 px-8">
              <div className="text-3xl font-extrabold text-[color:var(--color-accent)]">{aboutStats.projectsCompleted}</div>
              <div className="text-sm text-slate-400 mt-1">Projects Completed</div>
            </div>

            <div className="w-px bg-white/6" />

            <div className="flex-1 text-center py-6 px-8">
              <div className="text-3xl font-extrabold text-[color:var(--color-accent)]">{aboutStats.yearsLearning}</div>
              <div className="text-sm text-slate-400 mt-1">Years Learning</div>
            </div>

            <div className="w-px bg-white/6" />

            <div className="flex-1 text-center py-6 px-8">
              <div className="text-3xl font-extrabold text-[color:var(--color-accent)]">{aboutStats.technologies}</div>
              <div className="text-sm text-slate-400 mt-1">Technologies</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Stat({ label, value }) {
  return (
    <div className="bg-slate-800 rounded-lg p-4 text-center card-shadow">
      <div className="text-2xl font-extrabold text-white">{value}</div>
      <div className="text-sm text-slate-400">{label}</div>
    </div>
  );
}
