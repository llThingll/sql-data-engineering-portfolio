import CodeBlock from './CodeBlock.jsx';

function SkillCard({ technique }) {
  return (
    <article className="rounded-lg border border-slate-800 bg-slate-900/55 p-5">
      <div className="mb-4">
        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-teal-300">
          {technique.category}
        </p>
        <h3 className="mt-2 text-xl font-semibold text-white">{technique.title}</h3>
        <p className="mt-3 leading-7 text-slate-400">{technique.description}</p>
      </div>
      <CodeBlock code={technique.code} />
      <div className="mt-5 grid gap-4 md:grid-cols-2">
        <div>
          <h4 className="text-sm font-semibold text-slate-100">Cuando usarlo</h4>
          <p className="mt-2 text-sm leading-6 text-slate-400">{technique.whenToUse}</p>
        </div>
        <div>
          <h4 className="text-sm font-semibold text-slate-100">Buenas prácticas</h4>
          <ul className="mt-2 space-y-2 text-sm leading-6 text-slate-400">
            {technique.bestPractices.map((practice) => (
              <li key={practice}>- {practice}</li>
            ))}
          </ul>
        </div>
      </div>
    </article>
  );
}

export default SkillCard;
