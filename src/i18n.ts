import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import pt from './locales/pt.json';
import en from './locales/en.json';

const STORAGE_KEY = 'site_language';

const getInitialLanguage = () => {
  if (typeof window === 'undefined') {
    return 'pt';
  }

  const saved = localStorage.getItem(STORAGE_KEY);
  if (saved === 'pt' || saved === 'en') {
    return saved;
  }

  const browserLang = (navigator.language || '').toLowerCase();
  return browserLang.startsWith('pt') ? 'pt' : 'en';
};

i18n
  .use(initReactI18next)
  .init({
    resources: {
      pt: { translation: pt },
      en: { translation: en },
    },
    lng: getInitialLanguage(),
    fallbackLng: 'pt',
    interpolation: {
      escapeValue: false,
    },
  });

i18n.on('languageChanged', (lng) => {
  if (typeof document !== 'undefined') {
    document.documentElement.lang = lng;
  }
  if (typeof localStorage !== 'undefined') {
    localStorage.setItem(STORAGE_KEY, lng);
  }
});

export default i18n;
