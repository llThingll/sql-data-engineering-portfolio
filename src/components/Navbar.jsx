import { Code2, Database, Network } from 'lucide-react';

const links = [
  { href: '#about', label: 'Sobre mí' },
  { href: '#sql', label: 'SQL' },
  { href: '#cases', label: 'Casos' },
  { href: '#engineering', label: 'Data Engineering' },
  { href: '#contact', label: 'Contacto' },
];

function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-800/80 bg-slate-950/88 backdrop-blur-xl">
      <nav className="section-shell flex min-h-16 items-center justify-between gap-4 py-3">
        <a href="#home" className="flex items-center gap-3 text-sm font-semibold text-white">
          <span className="grid size-9 place-items-center rounded-md border border-teal-400/25 bg-teal-400/10 text-teal-200">
            <Database size={18} aria-hidden="true" />
          </span>
          <span className="hidden sm:inline">Marcelo Gamboa</span>
        </a>

        <div className="hidden items-center gap-1 lg:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-md px-3 py-2 text-sm text-slate-300 transition hover:bg-slate-900 hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <a
            href="https://github.com/llThingll"
            className="grid size-9 place-items-center rounded-md border border-slate-700 text-slate-300 transition hover:border-teal-300/60 hover:text-white"
            aria-label="GitHub"
          >
            <Code2 size={17} aria-hidden="true" />
          </a>
          <a
            href="https://www.linkedin.com/in/marcelo-gamboa-mora-3672a9203/"
            className="grid size-9 place-items-center rounded-md border border-slate-700 text-slate-300 transition hover:border-sky-300/60 hover:text-white"
            aria-label="LinkedIn"
          >
            <Network size={17} aria-hidden="true" />
          </a>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
