import { useState, useEffect, type ChangeEvent } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useTranslation } from 'react-i18next';
import { routes, routeMap, getRouteKeyByPath } from '../routes';
import type { SiteLanguage } from '../routes';
import logo from '../assets/codevura-navbar-transparent.png';

type NavbarProps = {
  lang: SiteLanguage;
};

export default function Navbar({ lang }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { t } = useTranslation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: t('nav.home'), path: routes[lang].home },
    { name: t('nav.portfolio'), path: routes[lang].portfolio },
    { name: t('nav.contact'), path: routes[lang].contact },
  ];

  const ctaButtonClasses =
    'rounded-xl bg-gradient-to-r from-indigo-500 to-violet-500 px-4 py-2.5 text-sm font-semibold text-white shadow-[0_12px_28px_-10px_rgba(99,102,241,0.9)] transition-all hover:-translate-y-0.5 hover:from-indigo-400 hover:to-violet-400';

  const handleLanguageChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const nextLang = event.target.value as SiteLanguage;
    if (nextLang === lang) {
      return;
    }

    const currentRouteKey = getRouteKeyByPath(lang, location.pathname);
    const currentRoute = routeMap.find((route) => route.key === currentRouteKey);
    const nextPath = currentRoute ? currentRoute[nextLang] : routes[nextLang].home;
    navigate(nextPath);
  };

  return (
    <nav aria-label={t('nav.ariaLabel')} className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-6">
      <div
        className={`mx-auto max-w-7xl rounded-2xl border transition-all duration-300 ${
          scrolled
            ? 'border-white/15 bg-slate-950/86 shadow-[0_16px_45px_-20px_rgba(15,23,42,0.95)] backdrop-blur-2xl'
            : 'border-white/10 bg-slate-950/65 backdrop-blur-xl'
        }`}
      >
        <div className="flex items-center justify-between px-4 py-3 sm:px-6">
          <Link to={routes[lang].home} className="group flex items-center gap-2.5">
            <img src={logo} alt="Codevura" className="h-auto w-10 object-contain" />
            <span className="text-lg font-semibold tracking-tight text-white">Codevura</span>
          </Link>

          <div className="hidden items-center gap-2 md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`rounded-lg px-4 py-2 text-sm font-medium transition-colors ${
                  location.pathname === link.path ? 'bg-white/10 text-white' : 'text-slate-300 hover:text-white'
                }`}
              >
                {link.name}
              </Link>
            ))}

            <Link to={routes[lang].contact} className={ctaButtonClasses}>
              {t('nav.cta')}
            </Link>

            <label className="sr-only" htmlFor="language-select-desktop">
              {t('nav.languageLabel')}
            </label>
            <select
              id="language-select-desktop"
              value={lang}
              onChange={handleLanguageChange}
              className="rounded-lg border border-slate-700 bg-slate-900 px-3 py-2 text-sm font-medium text-slate-100 [color-scheme:dark] transition-colors hover:border-slate-500"
              aria-label={t('nav.languageLabel')}
            >
              <option value="pt">{t('nav.languagePt')}</option>
              <option value="en">{t('nav.languageEn')}</option>
            </select>
          </div>

          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="rounded-lg border border-white/15 bg-white/5 p-2 text-white transition-colors hover:bg-white/10"
              aria-label="Toggle menu"
              aria-expanded={isOpen}
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="overflow-hidden border-t border-white/10 md:hidden"
            >
              <div className="space-y-2 px-4 pb-5 pt-3">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={() => setIsOpen(false)}
                    className={`block rounded-lg px-3 py-3.5 text-sm font-medium transition-colors ${
                      location.pathname === link.path
                        ? 'bg-indigo-500/15 text-indigo-200'
                        : 'text-slate-200 hover:bg-white/10'
                    }`}
                  >
                    {link.name}
                  </Link>
                ))}

                <Link
                  to={routes[lang].contact}
                  onClick={() => setIsOpen(false)}
                  className={`block w-full text-center ${ctaButtonClasses}`}
                >
                  {t('nav.cta')}
                </Link>

                <label className="sr-only" htmlFor="language-select-mobile">
                  {t('nav.languageLabel')}
                </label>
                <select
                  id="language-select-mobile"
                  value={lang}
                  onChange={handleLanguageChange}
                  className="w-full rounded-lg border border-slate-700 bg-slate-900 px-3 py-3 text-sm font-medium text-slate-100 [color-scheme:dark] transition-colors hover:border-slate-500"
                >
                  <option value="pt">{t('nav.languagePt')}</option>
                  <option value="en">{t('nav.languageEn')}</option>
                </select>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}
