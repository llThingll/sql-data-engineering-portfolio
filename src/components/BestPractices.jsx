import { CheckCircle2 } from 'lucide-react';
import SectionHeading from './SectionHeading.jsx';

const practices = [
  'Usar SET NOCOUNT ON en procedimientos almacenados.',
  'Evitar SELECT * y declarar solo las columnas necesarias.',
  'Controlar valores NULL con COALESCE o reglas explícitas.',
  'Cuidar conversiones implícitas de fecha y número.',
  'Usar nombres claros para columnas, tablas y alias.',
  'Separar lógica compleja en CTEs o tablas temporales.',
  'Validar conteos antes de hacer INSERT o UPDATE.',
  'Documentar reglas de negocio y supuestos de calculo.',
];

function BestPractices() {
  return (
    <section id="practices" className="border-y border-slate-900 bg-slate-950/70 py-20">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Buenas prácticas"
          title="Checklist para consultas mantenibles"
          description="Pequeños hábitos que reducen errores, mejoran rendimiento y hacen que una solución sea más fácil de auditar."
        />
        <div className="grid gap-3 sm:grid-cols-2">
          {practices.map((practice) => (
            <div key={practice} className="flex gap-3 rounded-md border border-slate-800 bg-slate-900/55 p-4">
              <CheckCircle2 className="mt-0.5 shrink-0 text-teal-300" size={18} aria-hidden="true" />
              <p className="text-sm leading-6 text-slate-300">{practice}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default BestPractices;
