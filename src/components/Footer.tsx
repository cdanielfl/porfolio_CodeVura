import { Link } from 'react-router-dom';
import { ArrowUpRight, Github, Linkedin, Mail, Twitter } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { routes } from '../routes';
import type { SiteLanguage } from '../routes';
import logo from '../assets/codevura-navbar-transparent.png';

type FooterProps = {
  lang: SiteLanguage;
};

export default function Footer({ lang }: FooterProps) {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-24 border-t border-white/10 bg-slate-950/70 pb-8 pt-16 text-slate-200 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 grid grid-cols-1 gap-10 md:grid-cols-4">
          <div className="md:col-span-2">
            <Link to={routes[lang].home} className="mb-5 flex items-center gap-2.5">
              <img src={logo} alt="Codevura" className="h-auto w-10 object-contain" />
              <span className="text-xl font-semibold tracking-tight text-white">Codevura</span>
            </Link>
            <p className="mb-6 max-w-lg leading-relaxed text-slate-400">{t('footer.description')}</p>
            <div className="flex gap-4">
              <a href="#" className="rounded-lg border border-white/10 p-2.5 transition-colors hover:border-violet-300/40 hover:text-violet-300" aria-label="Github"><Github className="w-4 h-4" /></a>
              <a href="#" className="rounded-lg border border-white/10 p-2.5 transition-colors hover:border-violet-300/40 hover:text-violet-300" aria-label="Linkedin"><Linkedin className="w-4 h-4" /></a>
              <a href="#" className="rounded-lg border border-white/10 p-2.5 transition-colors hover:border-violet-300/40 hover:text-violet-300" aria-label="Twitter"><Twitter className="w-4 h-4" /></a>
              <a href="mailto:contato@exemplo.com" className="rounded-lg border border-white/10 p-2.5 transition-colors hover:border-violet-300/40 hover:text-violet-300" aria-label="Email"><Mail className="w-4 h-4" /></a>
            </div>
          </div>

          <div>
            <h3 className="mb-5 text-sm font-semibold uppercase tracking-[0.14em] text-slate-300">{t('footer.navigation')}</h3>
            <ul className="space-y-3 text-sm">
              <li><Link to={routes[lang].home} className="inline-flex items-center gap-1 text-slate-300 transition-colors hover:text-white">{t('nav.home')}<ArrowUpRight className="h-3.5 w-3.5" /></Link></li>
              <li><Link to={routes[lang].portfolio} className="inline-flex items-center gap-1 text-slate-300 transition-colors hover:text-white">{t('nav.portfolio')}<ArrowUpRight className="h-3.5 w-3.5" /></Link></li>
              <li><Link to={routes[lang].contact} className="inline-flex items-center gap-1 text-slate-300 transition-colors hover:text-white">{t('nav.contact')}<ArrowUpRight className="h-3.5 w-3.5" /></Link></li>
            </ul>
          </div>

          <div>
            <h3 className="mb-5 text-sm font-semibold uppercase tracking-[0.14em] text-slate-300">{t('footer.demos')}</h3>
            <ul className="space-y-3 text-sm">
              <li><Link to="/demo/mecanica" className="text-slate-300 transition-colors hover:text-white">{t('footer.demoLabels.mechanic')}</Link></li>
              <li><Link to="/demo/restaurante" className="text-slate-300 transition-colors hover:text-white">{t('footer.demoLabels.restaurant')}</Link></li>
              <li><Link to="/demo/clinica" className="text-slate-300 transition-colors hover:text-white">{t('footer.demoLabels.clinic')}</Link></li>
              <li><Link to="/demo/marketplace" className="text-slate-300 transition-colors hover:text-white">{t('footer.demoLabels.marketplace')}</Link></li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-sm text-slate-500 md:flex-row">
          <p>© {currentYear} Codevura. {t('footer.rights')}</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-slate-300 transition-colors">{t('footer.privacy')}</a>
            <a href="#" className="hover:text-slate-300 transition-colors">{t('footer.terms')}</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
