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
    <div ref={ref} className="fade-in">
      <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">Skills</h3>

      <div className="flex flex-wrap gap-3">
        {skills.map((s) => (
          <span key={s} className="px-4 py-2 rounded-full text-sm font-medium bg-white/5 border border-white/6 text-slate-200">{s}</span>
        ))}
      </div>
    </div>
  );
}
