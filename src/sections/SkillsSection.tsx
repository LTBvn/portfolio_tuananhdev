import { motion } from 'framer-motion';
import { skills } from '../data/siteData';

function SkillsSection() {
  return (
    <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
      <motion.div
        className="glass-card p-8"
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7 }}
      >
        <p className="text-sm uppercase tracking-[0.3em] text-accent">Technical stack</p>
        <h3 className="mt-4 text-3xl font-semibold text-slate-900 dark:text-white">Tools I use to build beautiful products.</h3>
        <p className="mt-5 leading-8 text-slate-700 dark:text-slate-300">
          From polished UI systems to mobile-first experiences, I combine React and TypeScript with animation and component design to create projects that feel premium.
        </p>
      </motion.div>

      <motion.div
        className="grid gap-4"
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ delay: 0.14, duration: 0.7 }}
      >
        <div className="grid gap-4 rounded-[2rem] border border-slate-200/80 bg-slate-100/80 p-6 shadow-soft backdrop-blur-xl transition duration-500 dark:border-white/10 dark:bg-slate-900/80">
          {skills.map((skill, index) => (
            <motion.span
              key={skill}
              whileHover={{ scale: 1.05, y: -4 }}
              className="inline-flex cursor-pointer rounded-full border border-slate-200/70 bg-white/95 px-4 py-3 text-sm font-medium text-slate-900 shadow-sm transition duration-200 hover:border-cyan-400 hover:bg-cyan-500 hover:text-white dark:border-white/10 dark:bg-slate-800 dark:text-slate-100 dark:hover:border-cyan-400 dark:hover:bg-cyan-500 dark:hover:text-white"
              style={{ animationDelay: `${index * 0.04}s` }}
            >
              {skill}
            </motion.span>
          ))}
        </div>
        <div className="rounded-[2rem] border border-slate-200/80 bg-white/90 p-6 shadow-soft backdrop-blur-xl dark:border-white/10 dark:bg-slate-900/95">
          <p className="text-sm uppercase tracking-[0.3em] text-accent">Skill cloud</p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {skills.slice(0, 6).map((skill) => (
              <div key={skill} className="rounded-3xl border border-slate-200/80 bg-surface/70 p-5 text-slate-900 shadow-soft dark:border-white/10 dark:bg-slate-800/90 dark:text-slate-100">
                <p className="text-lg font-semibold text-slate-900 dark:text-white">{skill}</p>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default SkillsSection;
