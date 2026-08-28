import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import ProjectsSection from './components/ProjectsSection';
import Contact from './components/Contact';
import { FiArrowUp, FiHeart } from 'react-icons/fi';

export default function App() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#0b0f17] text-slate-300 relative selection:bg-teal-500/30 selection:text-teal-200">
      {/* Background Ambient Grid Grid Pattern */}
      <div className="fixed inset-0 bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:32px_32px] opacity-25 pointer-events-none" />

      {/* Glassmorphic Navbar Header */}
      <Navbar />

      {/* Main Container */}
      <main className="relative pt-16">
        {/* Section 1: Home */}
        <section id="home" className="scroll-mt-24">
          <div className="max-w-6xl mx-auto px-6">
            <Hero />
          </div>
        </section>

        {/* Section Divider */}
        <div className="max-w-6xl mx-auto px-6">
          <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        </div>

        {/* Section 2: About Me */}
        <section id="about" className="scroll-mt-24">
          <div className="max-w-6xl mx-auto px-6">
            <About />
          </div>
        </section>

        {/* Section Divider */}
        <div className="max-w-6xl mx-auto px-6">
          <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        </div>

        {/* Section 3: Projects */}
        <section id="projects" className="scroll-mt-24">
          <div className="max-w-6xl mx-auto px-6">
            <ProjectsSection />
          </div>
        </section>

        {/* Section Divider */}
        <div className="max-w-6xl mx-auto px-6">
          <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        </div>

        {/* Section 4: Contact */}
        <section id="contact" className="scroll-mt-24">
          <div className="max-w-6xl mx-auto px-6">
            <Contact />
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="relative z-10 border-t border-white/5 py-8 mt-12 bg-slate-950/60 backdrop-blur-md">
        <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            © {new Date().getFullYear()} <span className="text-white font-semibold">Riyan Ahmed</span>. All rights reserved.
          </div>
          <div className="flex items-center gap-1 text-slate-400">
            <span>Built with passion & precision for AI Engineering</span>
            <FiHeart className="text-rose-500 w-3.5 h-3.5 inline ml-1" />
          </div>
        </div>
      </footer>

      {/* Scroll To Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-40 p-3 rounded-full bg-slate-900/90 border border-teal-500/40 text-teal-300 shadow-xl hover:bg-teal-500 hover:text-slate-950 transition-all duration-300 focus:outline-none animate-fadeInUp"
          aria-label="Scroll to top"
        >
          <FiArrowUp className="w-5 h-5" />
        </button>
      )}
    </div>
  );
}
