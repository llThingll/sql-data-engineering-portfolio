import { ArrowDown, Code2, Network } from 'lucide-react';
import heroDashboard from '../assets/data-engineering-dashboard.png';

function Hero() {
  return (
    <section id="home" className="section-shell grid min-h-[calc(100vh-4rem)] content-center gap-10 py-16">
      <div className="grid items-center gap-10 lg:grid-cols-[1fr_0.84fr]">
        <div className="max-w-4xl">
          <p className="mb-5 inline-flex rounded-md border border-teal-400/25 bg-teal-400/10 px-3 py-1 text-sm font-medium text-teal-200">
            SQL Server · ETL · Reporting · Data Engineering
          </p>
          <h1 className="max-w-4xl text-5xl font-semibold tracking-normal text-white sm:text-6xl lg:text-7xl">
            SQL Server & Data Engineering Portfolio
          </h1>
          <p className="mt-6 max-w-3xl text-xl leading-8 text-slate-300">
            Ejemplos prácticos de SQL Server, ETL, reporterías y modelado de datos.
          </p>
          <p className="mt-4 max-w-3xl text-base leading-7 text-slate-400">
            Portfolio técnico con casos ficticios basados en escenarios reales de análisis,
            transformación y consumo de datos.
          </p>
        </div>

        <div className="relative">
          <div className="absolute inset-3 rounded-lg bg-teal-300/10 blur-2xl" aria-hidden="true" />
          <img
            src={heroDashboard}
            alt="Dashboard ficticio de data engineering con paneles de SQL, ETL y analítica"
            className="relative aspect-[4/3] w-full rounded-lg border border-slate-800 object-cover shadow-2xl"
          />
        </div>
      </div>

      <div className="flex flex-wrap gap-3">
        <a
          href="#sql"
          className="inline-flex items-center gap-2 rounded-md bg-teal-300 px-4 py-3 text-sm font-semibold text-slate-950 transition hover:bg-teal-200"
        >
          Ver técnicas SQL
          <ArrowDown size={17} aria-hidden="true" />
        </a>
        <a
          href="#cases"
          className="inline-flex items-center gap-2 rounded-md border border-slate-700 px-4 py-3 text-sm font-semibold text-white transition hover:border-slate-500 hover:bg-slate-900"
        >
          Ver casos prácticos
        </a>
        <a
          href="https://github.com/llThingll"
          className="inline-flex items-center gap-2 rounded-md border border-slate-700 px-4 py-3 text-sm font-semibold text-slate-200 transition hover:border-slate-500 hover:bg-slate-900"
        >
          <Code2 size={17} aria-hidden="true" />
          GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/marcelo-gamboa-mora-3672a9203/"
          className="inline-flex items-center gap-2 rounded-md border border-slate-700 px-4 py-3 text-sm font-semibold text-slate-200 transition hover:border-slate-500 hover:bg-slate-900"
        >
          <Network size={17} aria-hidden="true" />
          LinkedIn
        </a>
      </div>

      <div className="grid gap-4 border-y border-slate-800 py-6 sm:grid-cols-3">
        {[
          ['9', 'técnicas SQL documentadas'],
          ['4', 'casos prácticos ficticios'],
          ['100%', 'datos no sensibles'],
        ].map(([value, label]) => (
          <div key={label}>
            <p className="text-3xl font-semibold text-white">{value}</p>
            <p className="mt-1 text-sm text-slate-400">{label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Hero;
