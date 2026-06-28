import { caseStudies } from '../data/caseStudies.js';
import CaseStudyCard from './CaseStudyCard.jsx';
import SectionHeading from './SectionHeading.jsx';

function CaseStudies() {
  return (
    <section id="cases" className="border-y border-slate-900 bg-slate-950/70 py-20">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Casos prácticos"
          title="Escenarios ficticios inspirados en procesos reales"
          description="Los casos muestran cómo organizar consultas para consumo mensual, ratios, cobertura de stock y validación ETL antes de sincronizar una tabla final."
        />
        <div className="grid gap-5">
          {caseStudies.map((study) => (
            <CaseStudyCard key={study.title} study={study} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default CaseStudies;
