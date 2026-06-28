import SectionHeading from './SectionHeading.jsx';

function About() {
  return (
    <section id="about" className="border-t border-slate-900 py-20">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Sobre mí"
          title="Trabajo técnico orientado a procesos de datos y reporterías"
          description="Soy Marcelo Gamboa, trabajo en el área de datos con experiencia en SQL Server, procedimientos almacenados, ETL, Power BI, Grafana, Azure y Microsoft Fabric. Este sitio reúne ejemplos técnicos creados para demostrar lógica SQL, modelado de datos, transformación y buenas prácticas de desarrollo orientadas a reporterías y procesos de datos."
        />
      </div>
    </section>
  );
}

export default About;
