import { Link } from 'react-router-dom';
import { Code2, Github, Linkedin, Twitter, Mail } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-6">
              <div className="bg-indigo-600 p-2 rounded-lg">
                <Code2 className="text-white w-6 h-6" />
              </div>
              <span className="font-bold text-xl tracking-tight text-white">DevPortfolio</span>
            </Link>
            <p className="text-slate-400 max-w-md mb-6">
              Transformando ideias em experiências digitais de alto impacto. Especialista em desenvolvimento fullstack moderno e focado em resultados.
            </p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-indigo-400 transition-colors" aria-label="Github"><Github className="w-5 h-5" /></a>
              <a href="#" className="hover:text-indigo-400 transition-colors" aria-label="Linkedin"><Linkedin className="w-5 h-5" /></a>
              <a href="#" className="hover:text-indigo-400 transition-colors" aria-label="Twitter"><Twitter className="w-5 h-5" /></a>
              <a href="mailto:contato@exemplo.com" className="hover:text-indigo-400 transition-colors" aria-label="Email"><Mail className="w-5 h-5" /></a>
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-6">Navegação</h3>
            <ul className="space-y-4">
              <li><Link to="/" className="hover:text-indigo-400 transition-colors">Home</Link></li>
              <li><Link to="/portfolio" className="hover:text-indigo-400 transition-colors">Portfólio</Link></li>
              <li><Link to="/contato" className="hover:text-indigo-400 transition-colors">Contato</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-6">Demos</h3>
            <ul className="space-y-4">
              <li><Link to="/demo/mecanica" className="hover:text-indigo-400 transition-colors">Mecânica</Link></li>
              <li><Link to="/demo/restaurante" className="hover:text-indigo-400 transition-colors">Restaurante</Link></li>
              <li><Link to="/demo/clinica" className="hover:text-indigo-400 transition-colors">Clínica</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
          <p>© {currentYear} DevPortfolio. Todos os direitos reservados.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-slate-300">Privacidade</a>
            <a href="#" className="hover:text-slate-300">Termos</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
