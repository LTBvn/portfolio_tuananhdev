import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { Moon, Sun } from 'lucide-react';
import AboutSection from './sections/AboutSection';
import ContactSection from './sections/ContactSection';
import ExperienceSection from './sections/ExperienceSection';
import HeroSection from './sections/HeroSection';
import ProjectsSection from './sections/ProjectsSection';
import SkillsSection from './sections/SkillsSection';
import Cursor from './components/Cursor';
import Loader from './components/Loader';
import SectionHeading from './components/SectionHeading';
import useDarkMode from './hooks/useDarkMode';
import avatar from './assets/Avatar.jpg';
import devLogo from './assets/Logo_dev.png';

const pageTransition = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] } },
};

function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isDarkMode, setIsDarkMode] = useDarkMode();

  useEffect(() => {
    const timer = window.setTimeout(() => setIsLoaded(true), 1200);
    return () => window.clearTimeout(timer);
  }, []);

  return (
    <div className={`min-h-screen overflow-x-hidden ${isDarkMode ? 'bg-slate-950 text-slate-100' : 'bg-slate-50 text-slate-900'}`}>
      <Cursor />
      <div className="fixed inset-0 pointer-events-none bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.12),_transparent_26%),radial-gradient(circle_at_bottom_right,_rgba(14,165,233,0.08),_transparent_30%)] mix-blend-screen" />
      <div
        className="absolute inset-0 pointer-events-none opacity-10"
        style={{
          backgroundImage:
            "url('data:image/svg+xml,%3Csvg xmlns=\"http://www.w3.org/2000/svg\" width=\"640\" height=\"640\" viewBox=\"0 0 640 640\"%3E%3Cfilter id=\"a\" x=\"0\" y=\"0\" width=\"100%\" height=\"100%\"%3E%3CfeTurbulence type=\"fractalNoise\" baseFrequency=\"0.8\" numOctaves=\"1\" stitchTiles=\"stitch\"/%3E%3C/filter%3E%3Crect width=\"640\" height=\"640\" filter=\"url(%23a)\" opacity=\"0.05\"/%3E%3C/svg%3E')",
        }}
      />
      <AnimatePresence mode="wait">
        {isLoaded ? (
          <motion.main
            key="portfolio"
            variants={pageTransition}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="relative mx-auto flex min-h-screen max-w-7xl flex-col px-6 pb-20 pt-6 lg:px-10"
          >
            <nav className={`z-10 flex flex-wrap items-center justify-between gap-4 rounded-full border px-5 py-3 text-sm backdrop-blur-xl transition ${isDarkMode ? 'border-slate-800 bg-slate-950/95 text-slate-100 shadow-[0_15px_50px_rgba(15,23,42,0.3)]' : 'border-slate-200/80 bg-white/95 text-slate-700 shadow-sm'}`}>
              <div className="flex items-center gap-3 font-semibold text-slate-900 dark:text-white">
                <img src={avatar} alt="Avatar logo" className="h-10 w-10 rounded-2xl bg-white p-1 shadow-sm dark:bg-slate-800" />
                <span className="hidden md:inline">Lê Tuấn Anh</span>
              </div>
              <div className="flex flex-wrap items-center gap-4">
                {['About', 'Skills', 'Experience', 'Projects', 'Contact'].map((label) => (
                  <a
                    key={label}
                    href={`#${label.toLowerCase()}`}
                    className={`transition ${isDarkMode ? 'text-slate-200 hover:text-white' : 'text-slate-600 hover:text-slate-900'}`}
                  >
                    {label}
                  </a>
                ))}
                <button
                  type="button"
                  onClick={() => setIsDarkMode((prev) => !prev)}
                  className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-xs uppercase tracking-[0.3em] shadow-sm transition ${isDarkMode ? 'border-slate-700 bg-slate-900 text-slate-100 hover:bg-slate-800' : 'border-slate-300 bg-white text-slate-900 hover:bg-slate-100'}`}
                >
                  {isDarkMode ? <Sun size={14} /> : <Moon size={14} />}
                  {isDarkMode ? 'Light' : 'Dark'}
                </button>
                <a href="mailto:ltuananh662003@gmail.com" className="rounded-full border border-slate-300 bg-blue-600 px-4 py-2 text-xs uppercase tracking-[0.3em] text-white transition hover:bg-blue-700">
                  Hire me
                </a>
              </div>
            </nav>

            <HeroSection />

            <div className="space-y-28 pt-24">
              <section id="projects">
                <SectionHeading title="Projects" label="Featured work" />
                <ProjectsSection />
              </section>

              <section id="about">
                <SectionHeading title="About" label="Who I am" />
                <AboutSection />
              </section>

              <section id="skills">
                <SectionHeading title="Skills" label="What I build" />
                <SkillsSection />
              </section>

              <section id="experience">
                <SectionHeading title="Experience" label="Career highlights" />
                <ExperienceSection />
              </section>

              <section id="contact">
                <SectionHeading title="Contact" label="Let's connect" />
                <ContactSection />
              </section>
            </div>

            <footer className="mt-16 flex flex-col items-center justify-center gap-3 rounded-3xl border border-slate-200/70 bg-white/80 px-6 py-4 text-sm text-slate-600 shadow-sm backdrop-blur-xl dark:border-slate-700/70 dark:bg-slate-950/80 dark:text-slate-300">
              <div className="flex items-center gap-3">
                <img src={devLogo} alt="Dev logo" className="h-8 w-8 rounded-full bg-slate-100 p-1 dark:bg-slate-800" />
                <p>Website designed by <span className="font-semibold text-slate-900 dark:text-white">LTA</span></p>
              </div>
            </footer>
          </motion.main>
        ) : (
          <Loader />
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
