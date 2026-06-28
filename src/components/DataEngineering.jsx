import { Boxes, ChartNoAxesCombined, DatabaseZap, GitBranch, ShieldCheck, Timer } from 'lucide-react';
import SectionHeading from './SectionHeading.jsx';

const topics = [
  {
    icon: DatabaseZap,
    title: 'ETL',
    text: 'Extracción, transformación y carga con controles de calidad, logs y reglas de negocio explícitas.',
  },
  {
    icon: Boxes,
    title: 'Staging',
    text: 'Tablas temporales de aterrizaje para validar datos antes de publicar información final.',
  },
  {
    icon: GitBranch,
    title: 'Dimensional y fact tables',
    text: 'Modelos orientados a análisis: dimensiones descriptivas y hechos medibles por período o evento.',
  },
  {
    icon: ShieldCheck,
    title: 'Validacion de datos',
    text: 'Conteos, duplicados, llaves, nulos y diferencias antes de ejecutar inserciones o actualizaciones.',
  },
  {
    icon: Timer,
    title: 'Procesos batch',
    text: 'Cargas programadas, idempotencia y manejo de ventanas de reproceso para mantener consistencia.',
  },
  {
    icon: ChartNoAxesCombined,
    title: 'Power BI, Grafana y Fabric',
    text: 'Preparacion de datasets para visualizacion, monitoreo y posibles arquitecturas lakehouse.',
  },
];

function DataEngineering() {
  return (
    <section id="engineering" className="py-20">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Data Engineering"
          title="Conceptos que conectan SQL con consumo analítico"
          description="Una base de datos para reportería necesita reglas claras, trazabilidad y estructuras pensadas para consulta, no solo para almacenamiento."
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {topics.map((topic) => {
            const Icon = topic.icon;
            return (
              <article key={topic.title} className="rounded-lg border border-slate-800 bg-slate-900/55 p-5">
                <div className="grid size-10 place-items-center rounded-md bg-slate-950 text-teal-300">
                  <Icon size={19} aria-hidden="true" />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-white">{topic.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-400">{topic.text}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default DataEngineering;
