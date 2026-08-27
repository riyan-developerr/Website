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
    <div ref={ref} className="fade-in max-w-6xl mx-auto py-8">
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h3 className="text-2xl font-bold text-white mb-3">About Me</h3>
          <p className="text-slate-300">Hi — I&apos;m Riyan Ahmed, an AI Engineering student entering my 2nd year. I enjoy building AI and data-driven applications, learning production-ready backend technologies, and creating dashboard visualizations. (Placeholder — edit this text to suit your bio.)</p>
        </div>

        <div className="grid grid-cols-3 gap-4">
          <Stat label="Projects Completed" value={aboutStats.projectsCompleted} />
          <Stat label="Years Learning" value={aboutStats.yearsLearning} />
          <Stat label="Technologies" value={aboutStats.technologies} />
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
