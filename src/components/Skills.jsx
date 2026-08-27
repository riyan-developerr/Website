import { useEffect, useRef } from 'react';
import skills from '../data/skills';

export default function Skills() {
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
    <div ref={ref} className="fade-in max-w-6xl mx-auto py-6">
      <h3 className="text-xl font-semibold text-white mb-4">Skills</h3>

      <div className="flex gap-3 overflow-x-auto py-2 px-1">
        {skills.map((s) => (
          <span key={s} className="flex-shrink-0 bg-slate-800 text-slate-100 px-4 py-2 rounded-full text-sm font-medium border border-slate-700">
            {s}
          </span>
        ))}
      </div>
    </div>
  );
}
