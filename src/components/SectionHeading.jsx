function SectionHeading({ eyebrow, title, description }) {
  return (
    <div className="mb-8 max-w-3xl">
      <p className="text-sm font-semibold uppercase tracking-[0.16em] text-teal-300">{eyebrow}</p>
      <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">{title}</h2>
      {description ? <p className="mt-4 leading-7 text-slate-400">{description}</p> : null}
    </div>
  );
}

export default SectionHeading;
