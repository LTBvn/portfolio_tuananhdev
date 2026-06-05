import { motion } from 'framer-motion';
import { experiences } from '../data/siteData';

function ExperienceSection() {
  return (
    <div className="space-y-8">
      {experiences.map((item, index) => (
        <motion.article
          key={item.company}
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ delay: index * 0.1, duration: 0.7, ease: 'easeOut' }}
          className="glass-card overflow-hidden rounded-[2rem] border border-white/10 p-6 shadow-soft"
        >
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-accent">{item.period}</p>
              <h3 className="mt-3 text-2xl font-semibold text-slate-900 dark:text-white">{item.role}</h3>
              <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">{item.company}</p>
            </div>
            <div className="rounded-3xl bg-slate-100/80 px-4 py-3 text-sm font-medium text-slate-900 dark:bg-white/5 dark:text-slate-200">
              {item.highlights.join(' • ')}
            </div>
          </div>
          <ul className="mt-6 space-y-3 text-slate-700 dark:text-slate-300">
            {item.bullets.map((bullet) => (
              <li key={bullet} className="flex gap-3">
                <span className="mt-1 h-2.5 w-2.5 rounded-full bg-accent" />
                <span>{bullet}</span>
              </li>
            ))}
          </ul>
        </motion.article>
      ))}
    </div>
  );
}

export default ExperienceSection;
