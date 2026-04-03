import { useEffect } from 'react';
import { Outlet, useLocation, Link } from 'react-router-dom';
import { FolderOpen } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import Navbar from './Navbar';
import Footer from './Footer';
import i18n from '../i18n';
import { routes } from '../routes';
import type { SiteLanguage } from '../routes';

type MainLayoutProps = {
  lang: SiteLanguage;
};

export default function MainLayout({ lang }: MainLayoutProps) {
  const location = useLocation();
  const { t } = useTranslation();
  const portfolioPath = location.pathname.startsWith('/en') ? routes.en.portfolio : routes.pt.portfolio;

  useEffect(() => {
    if (i18n.language !== lang) {
      i18n.changeLanguage(lang);
    }
    document.documentElement.lang = lang;
  }, [lang, location.pathname]);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const isMobile = window.matchMedia('(max-width: 767px)').matches;
    if (!isMobile) return;

    // Warm up critical route chunks on mobile to avoid white flashes between pages.
    void import('../pages/Portfolio');
    void import('../pages/Contact');
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-transparent text-slate-100 font-sans relative isolate">
      <Navbar lang={lang} />
      <Link
        to={portfolioPath}
        className="fixed bottom-5 right-4 z-50 inline-flex items-center gap-2.5 rounded-full border border-violet-200/40 bg-gradient-to-r from-indigo-500 to-violet-500 px-4 py-3 text-xs font-semibold text-white shadow-[0_20px_45px_-16px_rgba(99,102,241,0.95)] transition-all hover:-translate-y-0.5 hover:from-indigo-400 hover:to-violet-400 sm:bottom-6 sm:right-6 sm:px-5 sm:text-sm"
        aria-label={t('nav.quickPortfolio')}
      >
        <span className="absolute inset-0 rounded-full bg-white/20 blur-md" aria-hidden />
        <span className="relative inline-flex items-center gap-2">
          <FolderOpen className="h-4 w-4" />
          {t('nav.quickPortfolio')}
        </span>
      </Link>
      <main className="flex-grow relative z-10">
        <Outlet />
      </main>
      <Footer lang={lang} />
    </div>
  );
}
