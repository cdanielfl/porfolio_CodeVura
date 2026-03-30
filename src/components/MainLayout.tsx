import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import i18n from '../i18n';
import type { SiteLanguage } from '../routes';

type MainLayoutProps = {
  lang: SiteLanguage;
};

export default function MainLayout({ lang }: MainLayoutProps) {
  const location = useLocation();

  useEffect(() => {
    if (i18n.language !== lang) {
      i18n.changeLanguage(lang);
    }
    document.documentElement.lang = lang;
  }, [lang, location.pathname]);

  return (
    <div className="min-h-screen flex flex-col bg-transparent text-slate-100 font-sans relative isolate">
      <Navbar lang={lang} />
      <main className="flex-grow relative z-10">
        <Outlet />
      </main>
      <Footer lang={lang} />
    </div>
  );
}
