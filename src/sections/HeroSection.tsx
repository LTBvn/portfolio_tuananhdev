import { motion } from 'framer-motion';
import { ArrowRight, Code2, Download, Github, Layers, Linkedin, Mail, Sparkles, User2, Zap } from 'lucide-react';
import { contact, hero } from '../data/siteData';
import avatar from '../assets/Avatar.jpg';

function HeroSection() {
  const nameWords = hero.name.toUpperCase().split(' ');

  return (
    <section className="relative isolate mx-auto max-w-6xl min-h-[32rem] overflow-hidden rounded-[2.5rem] bg-white text-slate-900 shadow-[0_40px_120px_-40px_rgba(15,23,42,0.06)] ring-1 ring-slate-200/60 dark:bg-[#05070E] dark:text-white dark:shadow-[0_40px_120px_-40px_rgba(15,23,42,0.6)] dark:ring-white/10 px-6 py-24 sm:px-10 sm:py-28 lg:min-h-[38rem] lg:px-14">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.22),_transparent_22%),radial-gradient(circle_at_bottom_right,_rgba(14,165,233,0.18),_transparent_30%)] opacity-90" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.04),_transparent_38%)]" />
      <div className="absolute right-12 top-10 h-36 w-36 rounded-full bg-cyan-500/15 blur-3xl" />
      <div className="absolute left-10 top-44 h-36 w-36 rounded-full bg-blue-500/15 blur-3xl" />
      <motion.div
        aria-hidden="true"
        initial={{ opacity: 0, y: 10, scale: 0.9 }}
        animate={{ opacity: [0.35, 1, 0.35], y: [0, -26, 0], scale: [0.9, 1.05, 0.9] }}
        transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute left-8 top-24 flex h-14 w-14 items-center justify-center rounded-full bg-slate-950/90 text-cyan-300 shadow-[0_24px_60px_-30px_rgba(0,0,0,0.7)] ring-1 ring-white/10"
      >
        <Sparkles size={22} />
      </motion.div>
      <motion.div
        aria-hidden="true"
        initial={{ opacity: 0, x: -10, scale: 0.95 }}
        animate={{ opacity: [0.4, 1, 0.4], x: [0, 18, 0], scale: [0.95, 1.05, 0.95] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute right-14 top-32 flex h-14 w-14 items-center justify-center rounded-full bg-slate-950/90 text-cyan-300 shadow-[0_24px_60px_-30px_rgba(0,0,0,0.7)] ring-1 ring-white/10"
      >
        <Code2 size={22} />
      </motion.div>
      <motion.div
        aria-hidden="true"
        initial={{ opacity: 0, y: 10, rotate: -8 }}
        animate={{ opacity: [0.35, 1, 0.35], y: [0, -20, 0], rotate: [0, 16, 0] }}
        transition={{ duration: 5.8, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute left-1/2 top-10 flex h-14 w-14 -translate-x-1/2 items-center justify-center rounded-full bg-slate-950/90 text-cyan-300 shadow-[0_24px_60px_-30px_rgba(0,0,0,0.7)] ring-1 ring-white/10"
      >
        <Zap size={22} />
      </motion.div>
      <motion.div
        aria-hidden="true"
        initial={{ opacity: 0, x: 10, scale: 0.9 }}
        animate={{ opacity: [0.4, 1, 0.4], x: [0, -18, 0], scale: [0.9, 1.05, 0.9] }}
        transition={{ duration: 5.2, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute right-20 bottom-20 flex h-14 w-14 items-center justify-center rounded-full bg-slate-950/90 text-cyan-300 shadow-[0_24px_60px_-30px_rgba(0,0,0,0.7)] ring-1 ring-white/10"
      >
        <Layers size={22} />
      </motion.div>
      <motion.div
        aria-hidden="true"
        initial={{ opacity: 0, scale: 0.85 }}
        animate={{ opacity: [0.4, 1, 0.4], scale: [0.85, 1.1, 0.85] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute left-1/4 bottom-16 flex h-14 w-14 items-center justify-center rounded-full bg-slate-950/90 text-cyan-300 shadow-[0_24px_60px_-30px_rgba(0,0,0,0.7)] ring-1 ring-white/10"
      >
        <User2 size={22} />
      </motion.div>
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            "url('data:image/svg+xml,%3Csvg xmlns=\"http://www.w3.org/2000/svg\" width=\"400\" height=\"400\" viewBox=\"0 0 400 400\"%3E%3Ccircle cx=\"50\" cy=\"50\" r=\"2\" fill=\"rgba(255,255,255,0.08)\"/%3E%3Ccircle cx=\"200\" cy=\"100\" r=\"1.5\" fill=\"rgba(255,255,255,0.08)\"/%3E%3Ccircle cx=\"300\" cy=\"320\" r=\"1.5\" fill=\"rgba(255,255,255,0.08)\"/%3E%3Ccircle cx=\"100\" cy=\"300\" r=\"1.5\" fill=\"rgba(255,255,255,0.08)\"/%3E%3C/svg%3E')",
        }}
      />
      <div className="relative z-10 grid gap-10 lg:grid-cols-[1.2fr_0.95fr] items-center">
        <div className="space-y-8">
          <div className="space-y-4">
            <p className="text-xs uppercase tracking-[0.35em] text-slate-400">{hero.title.toUpperCase()}</p>
            <p className="text-sm uppercase tracking-[0.3em] text-slate-500">{hero.subtitle}</p>
          </div>

          <div className="space-y-5">
            <h1 className="max-w-4xl text-4xl font-black tracking-[-0.03em] text-slate-950 dark:text-white sm:text-5xl lg:text-6xl">
              {nameWords.map((word, index) => (
                <motion.span
                  key={`${word}-${index}`}
                  initial={{ opacity: 0, y: 28 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.06 * index, duration: 0.45, ease: 'easeOut' }}
                  className="inline-block mr-4"
                >
                  {word}
                </motion.span>
              ))}
            </h1>
            <p className="max-w-3xl text-base leading-8 text-slate-700 dark:text-slate-300 sm:text-lg">
              {hero.tagline}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 text-sm font-medium text-slate-300">
            <a
              href={contact.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-slate-700/80 bg-slate-950/80 px-4 py-2 text-slate-200 transition hover:border-cyan-400 hover:text-white"
            >
              <Github size={16} /> GitHub
            </a>
            <a
              href={contact.linkedin}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-slate-700/80 bg-slate-950/80 px-4 py-2 text-slate-200 transition hover:border-cyan-400 hover:text-white"
            >
              <Linkedin size={16} /> LinkedIn
            </a>
            <a
              href={`mailto:${contact.email}`}
              className="inline-flex items-center gap-2 rounded-full border border-slate-700/80 bg-slate-950/80 px-4 py-2 text-slate-200 transition hover:border-cyan-400 hover:text-white"
            >
              <Mail size={16} /> Email
            </a>
          </div>

          <div className="flex flex-wrap items-center gap-4 pt-2">
            <a
              href="/CV_Le_Tuan_Anh_SoftwareEngineer.pdf"
              download="CV_Le_Tuan_Anh_SoftwareEngineer.pdf"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-cyan-500 px-8 py-3 text-sm font-semibold text-slate-950 transition duration-200 hover:bg-cyan-400"
            >
              <Download size={16} />
              Download CV
            </a>
            <a
              href="#projects"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-700 bg-slate-900 px-8 py-3 text-sm font-semibold text-slate-200 transition duration-200 hover:border-cyan-400 hover:text-white"
            >
              View Projects
              <ArrowRight size={16} />
            </a>
          </div>
        </div>

        <div className="hidden md:block">
          <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-slate-950/90 p-6 shadow-[0_30px_90px_-30px_rgba(15,23,42,0.9)] ring-1 ring-white/10">
            <div className="absolute -left-16 top-8 h-40 w-40 rounded-full bg-cyan-500/15 blur-3xl" />
            <div className="absolute -right-16 bottom-10 h-40 w-40 rounded-full bg-blue-500/20 blur-3xl" />
            <div className="relative z-10">
              <motion.img
                src={avatar}
                alt="Lê Tuấn Anh"
                initial={{ y: 0, rotate: 0 }}
                animate={{ y: [0, -10, 0], rotate: [0, 2, -2, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                className="mx-auto h-56 w-56 rounded-[2rem] object-cover shadow-xl ring-1 ring-white/10"
              />
              <div className="mt-8 space-y-3 text-center">
                <p className="text-xs uppercase tracking-[0.32em] text-cyan-300/80">Creative Frontend Engineer</p>
                <h3 className="text-2xl font-semibold text-white">Polished web & mobile UI</h3>
                <p className="mx-auto max-w-xs text-sm leading-7 text-slate-400">
                  Blending modern motion, clean React code, and polished product design.
                </p>
              </div>
              <div className="mt-6 flex flex-wrap justify-center gap-2">
                <span className="rounded-full border border-slate-700/80 bg-slate-900 px-3 py-2 text-xs text-slate-300">React</span>
                <span className="rounded-full border border-slate-700/80 bg-slate-900 px-3 py-2 text-xs text-slate-300">TypeScript</span>
                <span className="rounded-full border border-slate-700/80 bg-slate-900 px-3 py-2 text-xs text-slate-300">Tailwind</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
