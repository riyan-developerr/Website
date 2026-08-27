import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import ProjectsSection from './components/ProjectsSection';
import Contact from './components/Contact';

export default function App() {
  return (
    <div>
      <Navbar />

      <main className="space-y-20 mt-6">
        <section id="home" className="pt-8">
          <Hero />
        </section>

        <section id="skills" className="pt-8">
          <Skills />
        </section>

        <section id="about" className="pt-8">
          <About />
        </section>

        <section id="projects" className="pt-8">
          <ProjectsSection />
        </section>

        <section id="contact" className="pt-8">
          <Contact />
        </section>
      </main>

      <footer className="py-8 text-center text-sm text-slate-500">
        © {new Date().getFullYear()} Riyan Ahmed. All rights reserved.
      </footer>
    </div>
  );
}
