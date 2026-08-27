import { FiMail } from 'react-icons/fi';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

export default function Contact() {
  return (
    <div className="text-center">
      <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">Contact</h3>
      <p className="text-slate-400 mb-8">Feel free to reach out — email or connect on GitHub / LinkedIn.</p>

      <div className="flex items-center justify-center gap-6">
        <a href="mailto:riyan@example.com" className="w-12 h-12 inline-flex items-center justify-center rounded-full border border-white/6 text-slate-200 hover:bg-[color:var(--color-accent)] hover:text-black transition" aria-label="Email">
          <FiMail />
        </a>

        <a href="https://github.com/riyan-developerr" target="_blank" rel="noreferrer" className="w-12 h-12 inline-flex items-center justify-center rounded-full border border-white/6 text-slate-200 hover:bg-[color:var(--color-accent)] hover:text-black transition" aria-label="GitHub">
          <FaGithub />
        </a>

        <a href="https://www.linkedin.com/in/riyan-ahmad/" target="_blank" rel="noreferrer" className="w-12 h-12 inline-flex items-center justify-center rounded-full border border-white/6 text-slate-200 hover:bg-[color:var(--color-accent)] hover:text-black transition" aria-label="LinkedIn">
          <FaLinkedin />
        </a>
      </div>
    </div>
  );
}
