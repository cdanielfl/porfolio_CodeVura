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
    <footer className="mt-16 border-t border-white/10 bg-slate-950/70 pb-6 pt-10 text-slate-200 backdrop-blur-md sm:mt-24 sm:pb-8 sm:pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8 grid grid-cols-1 gap-7 sm:mb-12 sm:gap-10 md:grid-cols-4">
          <div className="md:col-span-2">
            <Link to={routes[lang].home} className="mb-4 flex items-center gap-2 sm:mb-5 sm:gap-2.5">
              <img src={logo} alt="Codevura" className="h-auto w-8 object-contain sm:w-10" />
              <span className="text-lg font-semibold tracking-tight text-white sm:text-xl">Codevura</span>
            </Link>
            <p className="mb-4 max-w-lg text-sm leading-relaxed text-slate-400 sm:mb-6 sm:text-base">{t('footer.description')}</p>
            <div className="flex gap-3 sm:gap-4">
              <a href="#" className="rounded-lg border border-white/10 p-2 transition-colors hover:border-violet-300/40 hover:text-violet-300 sm:p-2.5" aria-label="Github"><Github className="h-4 w-4" /></a>
              <a href="#" className="rounded-lg border border-white/10 p-2 transition-colors hover:border-violet-300/40 hover:text-violet-300 sm:p-2.5" aria-label="Linkedin"><Linkedin className="h-4 w-4" /></a>
              <a href="#" className="rounded-lg border border-white/10 p-2 transition-colors hover:border-violet-300/40 hover:text-violet-300 sm:p-2.5" aria-label="Twitter"><Twitter className="h-4 w-4" /></a>
              <a href="mailto:contato@exemplo.com" className="rounded-lg border border-white/10 p-2 transition-colors hover:border-violet-300/40 hover:text-violet-300 sm:p-2.5" aria-label="Email"><Mail className="h-4 w-4" /></a>
            </div>
          </div>

          <div>
            <h3 className="mb-3 text-xs font-semibold uppercase tracking-[0.14em] text-slate-300 sm:mb-5 sm:text-sm">{t('footer.navigation')}</h3>
            <ul className="space-y-2 text-sm sm:space-y-3">
              <li><Link to={routes[lang].home} className="inline-flex items-center gap-1 text-slate-300 transition-colors hover:text-white">{t('nav.home')}<ArrowUpRight className="h-3.5 w-3.5" /></Link></li>
              <li><Link to={routes[lang].portfolio} className="inline-flex items-center gap-1 text-slate-300 transition-colors hover:text-white">{t('nav.portfolio')}<ArrowUpRight className="h-3.5 w-3.5" /></Link></li>
              <li><Link to={routes[lang].contact} className="inline-flex items-center gap-1 text-slate-300 transition-colors hover:text-white">{t('nav.contact')}<ArrowUpRight className="h-3.5 w-3.5" /></Link></li>
            </ul>
          </div>

          <div>
            <h3 className="mb-3 text-xs font-semibold uppercase tracking-[0.14em] text-slate-300 sm:mb-5 sm:text-sm">{t('footer.demos')}</h3>
            <ul className="grid grid-cols-2 gap-x-3 gap-y-2 text-xs sm:block sm:space-y-3 sm:text-sm">
              <li><Link to="/demo/mecanica" className="text-slate-300 transition-colors hover:text-white">{t('footer.demoLabels.mechanic')}</Link></li>
              <li><Link to="/demo/restaurante" className="text-slate-300 transition-colors hover:text-white">{t('footer.demoLabels.restaurant')}</Link></li>
              <li><Link to="/demo/clinica" className="text-slate-300 transition-colors hover:text-white">{t('footer.demoLabels.clinic')}</Link></li>
              <li><Link to="/demo/marketplace" className="text-slate-300 transition-colors hover:text-white">{t('footer.demoLabels.marketplace')}</Link></li>
              <li><Link to="/demo/saas" className="text-slate-300 transition-colors hover:text-white">{t('footer.demoLabels.saas')}</Link></li>
              <li><Link to="/demo/curate" className="text-slate-300 transition-colors hover:text-white">{t('footer.demoLabels.curate')}</Link></li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-5 text-xs text-slate-500 sm:gap-4 sm:pt-8 sm:text-sm md:flex-row">
          <p>(c) {currentYear} Codevura. {t('footer.rights')}</p>
          <div className="flex gap-5 sm:gap-8">
            <a href="#" className="transition-colors hover:text-slate-300">{t('footer.privacy')}</a>
            <a href="#" className="transition-colors hover:text-slate-300">{t('footer.terms')}</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
