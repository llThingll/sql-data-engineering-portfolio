import CodeBlock from './CodeBlock.jsx';

function CaseStudyCard({ study }) {
  return (
    <article className="rounded-lg border border-slate-800 bg-slate-900/55 p-5">
      <p className="text-sm font-semibold text-teal-300">{study.label}</p>
      <h3 className="mt-2 text-xl font-semibold text-white">{study.title}</h3>
      <p className="mt-3 leading-7 text-slate-400">{study.description}</p>
      <div className="mt-5">
        <CodeBlock code={study.code} />
      </div>
      <div className="mt-5 grid gap-3 sm:grid-cols-3">
        {study.highlights.map((highlight) => (
          <div key={highlight} className="rounded-md border border-slate-800 bg-slate-950/70 p-3 text-sm text-slate-300">
            {highlight}
          </div>
        ))}
      </div>
    </article>
  );
}

export default CaseStudyCard;
