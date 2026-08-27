import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import ProjectsSection from './components/ProjectsSection';
import Contact from './components/Contact';

export default function App() {
  return (
    <div className="min-h-screen bg-[color:var(--color-bg)] text-slate-400">
      <Navbar />

      <main className="pt-6">
        <section id="home" className="py-16 md:py-24">
          <div className="max-w-6xl mx-auto px-6">
            <Hero />
          </div>
        </section>

        <section id="skills" className="py-16 md:py-24">
          <div className="max-w-6xl mx-auto px-6">
            <Skills />
          </div>
        </section>

        <section id="about" className="py-16 md:py-24">
          <div className="max-w-6xl mx-auto px-6">
            <About />
          </div>
        </section>

        <section id="projects" className="py-16 md:py-24">
          <div className="max-w-6xl mx-auto px-6">
            <ProjectsSection />
          </div>
        </section>

        <section id="contact" className="py-16 md:py-24">
          <div className="max-w-6xl mx-auto px-6">
            <Contact />
          </div>
        </section>
      </main>

      <footer className="py-8 text-center text-sm text-slate-500">
        © {new Date().getFullYear()} Riyan Ahmed. All rights reserved.
      </footer>
    </div>
  );
}
