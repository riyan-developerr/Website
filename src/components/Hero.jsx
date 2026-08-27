import { useEffect, useRef } from 'react';

export default function Hero() {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div ref={ref} className="fade-in max-w-6xl mx-auto flex flex-col-reverse md:flex-row items-center gap-8 py-12">
      <div className="md:w-2/3 text-center md:text-left">
        <p className="text-xl">Hello <span aria-hidden>👋</span></p>
        <h1 className="text-4xl md:text-5xl font-extrabold mt-2">I&apos;m <span className="text-accent">Riyan Ahmed</span></h1>
        <h2 className="text-2xl md:text-3xl font-bold mt-2 text-white">AI Engineer</h2>
        <p className="mt-4 text-slate-300 max-w-xl">Building AI & software projects that solve real problems — focusing on data-driven, production-ready systems.</p>

        <div className="mt-6 flex flex-wrap gap-3 justify-center md:justify-start">
          <a href="#projects" className="inline-flex items-center px-4 py-2 rounded-md bg-[color:var(--color-accent)] text-black font-semibold hover:brightness-95">View Projects</a>
          <a href="#contact" className="inline-flex items-center px-4 py-2 rounded-md border border-slate-700 text-slate-200 hover:border-slate-500">Contact Me</a>
        </div>
      </div>

      <div className="md:w-1/3 flex justify-center md:justify-end">
        <div className="w-44 h-44 md:w-56 md:h-56 rounded-full overflow-hidden ring-1 ring-slate-700 card-shadow">
          <img src="/assets/riyan.jpg" alt="Riyan Ahmed" className="w-full h-full object-cover" onError={(e) => { e.currentTarget.src = '/assets/avatar-placeholder.svg'; }} />
        </div>
      </div>
    </div>
  );
}
