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
    <div ref={ref} className="fade-in flex flex-col-reverse md:flex-row items-center gap-10 py-6 md:py-0">
      <div className="md:flex-1 text-center md:text-left">
        <p className="text-sm text-slate-400">Hello <span aria-hidden>👋</span></p>
        <h1 className="mt-3 text-3xl md:text-5xl font-extrabold text-white leading-tight">I&apos;m <span className="text-[color:var(--color-accent)]">Riyan Ahmed</span></h1>
        <h2 className="mt-2 text-xl md:text-2xl font-medium text-[color:var(--color-accent)]">AI Engineer</h2>
        <p className="mt-4 text-slate-400 max-w-2xl leading-relaxed">Building AI & software projects that solve real problems — focusing on data-driven, production-ready systems.</p>

        <div className="mt-8 flex flex-wrap gap-3 justify-center md:justify-start">
          <a href="#projects" className="inline-flex items-center px-5 py-3 rounded-lg bg-[color:var(--color-accent)] text-black font-semibold no-underline hover:brightness-110 transition">View Projects</a>
          <a href="#contact" className="inline-flex items-center px-5 py-3 rounded-lg border border-[color:var(--color-accent)] text-[color:var(--color-accent)] bg-transparent no-underline hover:bg-[rgba(255,107,74,0.06)] transition">Contact Me</a>
        </div>
      </div>

      <div className="md:w-56 flex justify-center md:justify-end">
        <div className="w-36 h-36 md:w-56 md:h-56 rounded-full overflow-hidden ring-2 ring-[color:var(--color-accent)] shadow-[0_24px_48px_rgba(255,107,74,0.06)]">
          <img src="/assets/riyan.jpg" alt="Riyan Ahmed" className="w-full h-full object-cover" onError={(e) => { e.currentTarget.src = '/assets/avatar-placeholder.svg'; }} />
        </div>
      </div>
    </div>
  );
}
