export type SiteLanguage = 'pt' | 'en';

export const routes = {
  pt: {
    home: '/pt',
    portfolio: '/pt/portfolio',
    contact: '/pt/contato',
  },
  en: {
    home: '/en',
    portfolio: '/en/portfolio',
    contact: '/en/contact',
  },
} as const;

export const routeMap = [
  { key: 'home', pt: routes.pt.home, en: routes.en.home },
  { key: 'portfolio', pt: routes.pt.portfolio, en: routes.en.portfolio },
  { key: 'contact', pt: routes.pt.contact, en: routes.en.contact },
];

export type RouteKey = 'home' | 'portfolio' | 'contact';

export const getRouteKeyByPath = (lang: SiteLanguage, pathname: string) =>
  routeMap.find((route) => route[lang] === pathname)?.key;
