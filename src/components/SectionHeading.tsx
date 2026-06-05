type SectionHeadingProps = {
  title: string;
  label: string;
};

function SectionHeading({ title, label }: SectionHeadingProps) {
  return (
    <div className="mb-10 max-w-3xl space-y-3">
      <p className="text-sm uppercase tracking-[0.3em] text-slate-500 dark:text-slate-400">{label}</p>
      <h2 className="text-3xl font-semibold tracking-tight text-slate-900 dark:text-white sm:text-4xl">{title}</h2>
    </div>
  );
}

export default SectionHeading;
