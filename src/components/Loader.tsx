import { motion } from 'framer-motion';

const loaderDots = [0, 1, 2];

function Loader() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-surface text-slate-900">
      <div className="relative flex items-center gap-4 rounded-3xl border border-slate-200 bg-white px-10 py-8 shadow-soft">
        <div className="space-y-3 text-center">
          <p className="text-sm uppercase tracking-[0.35em] text-slate-500">Loading portfolio</p>
          <div className="flex items-center justify-center gap-3">
            {loaderDots.map((index) => (
              <motion.span
                key={index}
                animate={{ y: ['0%', '-40%', '0%'] }}
                transition={{ duration: 0.8, repeat: Infinity, delay: index * 0.12 }}
                className="block h-3 w-3 rounded-full bg-accent"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Loader;
