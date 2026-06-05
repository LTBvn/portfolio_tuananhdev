import { motion } from 'framer-motion';

const stats = [
  { label: 'Years of focus', value: '2+' },
  { label: 'Projects delivered', value: '12+' },
  { label: 'Client satisfaction', value: '100%' },
];

function AboutSection() {
  return (
    <div className="grid gap-10 lg:grid-cols-[1.3fr_0.9fr]">
      <motion.div
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="glass-card p-8"
      >
        <p className="text-sm uppercase tracking-[0.3em] text-accent">Personal summary</p>
        <h3 className="mt-4 text-3xl font-semibold text-slate-900 dark:text-white">Crafting polished digital experiences with modern web architecture.</h3>
        <p className="mt-6 leading-8 text-slate-700 dark:text-slate-300">
          Final-year Software Engineering student with more than one year of hands-on experience building modern web and mobile applications. I work on public GitHub projects and private production app code on a company GitLab repo, delivering polished user experiences and maintainable interfaces.
        </p>
        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          {stats.map((item) => (
            <div key={item.label} className="rounded-3xl border border-white/10 bg-white/5 p-5 dark:border-white/10 dark:bg-slate-950/90">
              <p className="text-3xl font-semibold text-slate-900 dark:text-white">{item.value}</p>
              <p className="mt-2 text-sm uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">{item.label}</p>
            </div>
          ))}
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ delay: 0.15, duration: 0.8, ease: 'easeOut' }}
        className="grid gap-6"
      >
        <div className="glass-card p-8">
          <p className="text-sm uppercase tracking-[0.3em] text-accent">Core strengths</p>
          <ul className="mt-6 space-y-3 text-slate-700 dark:text-slate-300">
            <li>• Modern component-driven architecture with TypeScript and React.</li>
            <li>• Responsive UI systems designed for mobile-first web and app experiences.</li>
            <li>• Production app delivery experience using GitHub and private GitLab workflows.</li>
          </ul>
        </div>
        <div className="glass-card p-8">
          <p className="text-sm uppercase tracking-[0.3em] text-accent">Why hire me</p>
          <p className="mt-4 leading-7 text-slate-700 dark:text-slate-300">
            I build interfaces that communicate clearly and move teams faster. I am passionate about learning new tools, shipping reliably, and improving every iteration.
          </p>
        </div>
      </motion.div>
    </div>
  );
}

export default AboutSection;
