import { motion } from 'framer-motion';
import { AtSign, Github, MapPin, Phone } from 'lucide-react';
import { contact } from '../data/siteData';

function ContactSection() {
  return (
    <div className="grid gap-10 lg:grid-cols-[1fr_0.9fr]">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.75, ease: 'easeOut' }}
        className="glass-card rounded-[2rem] border border-slate-200/80 p-8 dark:border-white/10"
      >
        <p className="text-sm uppercase tracking-[0.3em] text-accent">Contact details</p>
        <h3 className="mt-4 text-3xl font-semibold text-slate-900 dark:text-white">Let’s build the next interface together.</h3>
        <p className="mt-5 leading-8 text-slate-700 dark:text-slate-300">
          I’m available for frontend and mobile roles that value thoughtful design, clean code, and polished product execution.
        </p>
        <div className="mt-8 space-y-4 text-slate-900 dark:text-slate-300">
          <div className="flex items-center gap-3 rounded-3xl border border-slate-200/80 bg-slate-100/80 px-5 py-4 dark:border-white/10 dark:bg-white/5">
            <MapPin className="text-accent" />
            <span className="text-slate-900 dark:text-slate-300">{contact.location}</span>
          </div>
          <div className="flex items-center gap-3 rounded-3xl border border-slate-200/80 bg-slate-100/80 px-5 py-4 dark:border-white/10 dark:bg-white/5">
            <AtSign className="text-accent" />
            <a href={`mailto:${contact.email}`} className="text-slate-900 transition hover:text-accent dark:text-white">
              {contact.email}
            </a>
          </div>
          <div className="flex items-center gap-3 rounded-3xl border border-slate-200/80 bg-slate-100/80 px-5 py-4 dark:border-white/10 dark:bg-white/5">
            <Phone className="text-accent" />
            <a href={`tel:${contact.phone}`} className="text-slate-900 transition hover:text-accent dark:text-white">
              {contact.phone}
            </a>
          </div>
          <div className="flex items-center gap-3 rounded-3xl border border-slate-200/80 bg-slate-100/80 px-5 py-4 dark:border-white/10 dark:bg-white/5">
            <Github className="text-accent" />
            <a href={contact.github} target="_blank" rel="noreferrer" className="text-slate-900 transition hover:text-accent dark:text-white">
              {contact.github}
            </a>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ delay: 0.15, duration: 0.75, ease: 'easeOut' }}
        className="flex items-center justify-center rounded-[2rem] border border-slate-200/80 bg-white/95 p-8 shadow-soft transition duration-500 dark:border-white/10 dark:bg-[#11131C]/80"
      >
        <div className="space-y-6 text-center">
          <p className="text-sm uppercase tracking-[0.32em] text-accent">Ready to connect</p>
          <h3 className="text-3xl font-semibold text-slate-900 dark:text-white">Share your brief, or simply say hi.</h3>
          <a
            href={`mailto:${contact.email}`}
            className="inline-flex items-center justify-center rounded-full bg-glow px-8 py-4 text-sm font-semibold uppercase tracking-[0.25em] text-surface transition hover:-translate-y-1"
          >
            Contact me
          </a>
        </div>
      </motion.div>
    </div>
  );
}

export default ContactSection;
