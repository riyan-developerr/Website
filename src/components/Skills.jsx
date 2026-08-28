import skills from '../data/skills';
import { FiTerminal } from 'react-icons/fi';

export default function Skills() {
  return (
    <div className="glass-panel rounded-2xl p-6 sm:p-8 space-y-4">
      <div className="flex items-center gap-2 text-white font-bold text-lg">
        <FiTerminal className="text-teal-400" />
        <span>Core Skills Matrix</span>
      </div>

      <div className="flex flex-wrap gap-2.5">
        {skills.map((s) => (
          <span
            key={s}
            className="px-3.5 py-2 rounded-xl text-xs font-semibold bg-slate-900/80 border border-white/10 text-slate-200 hover:border-teal-500/40 hover:text-teal-300 transition-all duration-200"
          >
            {s}
          </span>
        ))}
      </div>
    </div>
  );
}
