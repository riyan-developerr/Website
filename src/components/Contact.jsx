export default function Contact() {
  return (
    <div className="max-w-6xl mx-auto py-8">
      <h3 className="text-2xl font-bold text-white mb-4">Contact</h3>
      <p className="text-slate-300 mb-6">Feel free to reach out — email or connect on GitHub / LinkedIn.</p>

      <div className="flex items-center justify-center gap-6">
        <a href="mailto:riyan@example.com" className="text-slate-300 hover:text-white">📧 Email</a>
        <a href="https://github.com/riyan-username" target="_blank" rel="noreferrer" className="text-slate-300 hover:text-white">🐙 GitHub</a>
        <a href="https://www.linkedin.com/in/riyan-username" target="_blank" rel="noreferrer" className="text-slate-300 hover:text-white">💼 LinkedIn</a>
      </div>
    </div>
  );
}
