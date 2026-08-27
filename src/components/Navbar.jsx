import { useState } from 'react';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <header className="sticky top-0 z-50">
      <nav className="w-full backdrop-blur-sm bg-[rgba(13,17,23,0.6)] border-b border-slate-800">
        <div className="max-w-[1200px] mx-auto px-4 py-3 flex items-center justify-between">
          <a href="#home" className="text-white font-semibold text-lg">
            Riyan Ahmed
          </a>

          <div className="hidden md:flex items-center gap-6">
            {links.map((l) => (
              <a key={l.href} href={l.href} className="text-slate-300 hover:text-white">
                {l.name}
              </a>
            ))}
          </div>

          <div className="md:hidden">
            <button
              aria-label="Toggle menu"
              onClick={() => setOpen((v) => !v)}
              className="p-2 rounded-md text-slate-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d={open ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {open && (
          <div className="md:hidden">
            <div className="px-4 pt-2 pb-4 space-y-2">
              {links.map((l) => (
                <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="block text-slate-300 py-2">
                  {l.name}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
