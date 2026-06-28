import { sqlTechniques } from '../data/sqlTechniques.js';
import SectionHeading from './SectionHeading.jsx';
import SkillCard from './SkillCard.jsx';

function SqlTechniqueSection() {
  return (
    <section id="sql" className="py-20">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Técnicas SQL"
          title="Patrones utiles para SQL Server"
          description="Cada ejemplo usa nombres y datos ficticios, pero está escrito para parecerse a problemas reales de integración, análisis y reporterías."
        />
        <div className="grid gap-5">
          {sqlTechniques.map((technique) => (
            <SkillCard key={technique.title} technique={technique} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default SqlTechniqueSection;
