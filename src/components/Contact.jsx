import { Code2, Mail, Network } from 'lucide-react';

function Contact() {
  return (
    <footer id="contact" className="py-20">
      <div className="section-shell">
        <div className="rounded-lg border border-slate-800 bg-slate-900/65 p-6 sm:p-8">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-teal-300">Contacto</p>
          <h2 className="mt-3 text-3xl font-semibold text-white">Marcelo Gamboa</h2>
          <p className="mt-3 text-lg text-slate-300">Data Engineer / SQL Server Developer</p>
          <p className="mt-4 max-w-2xl leading-7 text-slate-400">
            Disponible para compartir proyectos técnicos, repositorios de práctica y casos de
            aprendizaje orientados a SQL Server, ETL y reporterías.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <a
              href="https://www.linkedin.com/in/marcelo-gamboa-mora-3672a9203/"
              className="inline-flex items-center gap-2 rounded-md bg-teal-300 px-4 py-3 text-sm font-semibold text-slate-950 transition hover:bg-teal-200"
            >
              <Network size={17} aria-hidden="true" />
              LinkedIn
            </a>
            <a
              href="https://github.com/llThingll"
              className="inline-flex items-center gap-2 rounded-md border border-slate-700 px-4 py-3 text-sm font-semibold text-white transition hover:border-slate-500 hover:bg-slate-950"
            >
              <Code2 size={17} aria-hidden="true" />
              GitHub
            </a>
            <a
              href="mailto:magm.1204@gmail.com"
              className="inline-flex items-center gap-2 rounded-md border border-slate-700 px-4 py-3 text-sm font-semibold text-white transition hover:border-slate-500 hover:bg-slate-950"
            >
              <Mail size={17} aria-hidden="true" />
              Email
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Contact;
