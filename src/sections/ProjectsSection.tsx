import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import { projects } from '../data/siteData';

function ProjectsSection() {
  return (
    <div className="grid gap-6 lg:grid-cols-2">
      {projects.map((project, index) => (
        <motion.article
          key={project.title}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ delay: index * 0.08, duration: 0.75, ease: 'easeOut' }}
          className="group relative overflow-hidden rounded-[2rem] border border-slate-200/80 bg-white/95 p-6 shadow-soft backdrop-blur-xl transition duration-500 dark:border-white/10 dark:bg-slate-950/90"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-cyan-500/10 opacity-70 transition duration-500 group-hover:scale-105" />
          <div className="relative z-10 flex h-full flex-col justify-between gap-6">
            <div>
              <p className="text-xs uppercase tracking-[0.32em] text-accent">{project.type}</p>
              <h3 className="mt-4 text-2xl font-semibold text-slate-900 dark:text-white">{project.title}</h3>
              <p className="mt-4 leading-7 text-slate-700 dark:text-slate-300">{project.description}</p>
            </div>
            <div className="flex flex-wrap items-center gap-2 text-xs text-slate-600 dark:text-slate-300">
              {project.tech.map((tech) => (
                <span key={`${project.title}-${tech}`} className="rounded-full border border-slate-200/80 bg-slate-100/80 px-3 py-2 dark:border-white/10 dark:bg-white/5 dark:text-slate-200">
                  {tech}
                </span>
              ))}
            </div>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-slate-200/80 bg-slate-100/80 px-4 py-3 text-sm font-medium text-slate-900 transition hover:border-accent hover:text-accent dark:border-white/10 dark:bg-slate-900/70 dark:text-slate-100 dark:hover:text-white"
              >
                <Github size={16} />
                GitHub
              </a>
              <span className="inline-flex items-center gap-2 rounded-full border border-slate-200/80 bg-slate-100/80 px-4 py-3 text-sm text-slate-600 dark:border-white/10 dark:bg-white/5 dark:text-slate-300">
                <ExternalLink size={16} />
                Live preview
              </span>
            </div>
          </div>
        </motion.article>
      ))}
    </div>
  );
}

export default ProjectsSection;
