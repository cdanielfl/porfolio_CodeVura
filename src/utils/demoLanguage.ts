import i18n from '../i18n';
import type { SiteLanguage } from '../routes';

export const normalizeLanguage = (value?: string | null): SiteLanguage =>
  value?.startsWith('en') ? 'en' : 'pt';

export const getLanguageFromSearch = (search: string): SiteLanguage | null => {
  const lang = new URLSearchParams(search).get('lang');
  if (lang === 'pt' || lang === 'en') {
    return lang;
  }
  return null;
};

export const resolveDemoLanguage = (search: string): SiteLanguage => {
  const fromSearch = getLanguageFromSearch(search);
  if (fromSearch) {
    return fromSearch;
  }
  return normalizeLanguage(i18n.resolvedLanguage ?? i18n.language);
};

export const syncDemoLanguage = async (search: string) => {
  const lang = getLanguageFromSearch(search);
  if (!lang) {
    return;
  }
  const current = normalizeLanguage(i18n.resolvedLanguage ?? i18n.language);
  if (current !== lang) {
    await i18n.changeLanguage(lang);
  }
};

export const withDemoLanguage = (path: string, lang: SiteLanguage) => {
  const separator = path.includes('?') ? '&' : '?';
  return `${path}${separator}lang=${lang}`;
};

