import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingCart, Menu, User, X } from 'lucide-react';
import { cn } from '../lib/utils';
import { mp } from '../lib/paths';
import { resolveDemoLanguage } from '../../../../../utils/demoLanguage';
import { useMarketplaceCart } from '../context/CartContext';

export const Navbar = () => {
  const location = useLocation();
  const lang = resolveDemoLanguage(location.search);
  const text = lang === 'pt'
    ? {
        catalog: 'Catalogo',
        production: 'Producao',
        logistics: 'Logistica',
        standards: 'Padroes',
        login: 'Entrar',
        industrial: 'Excelencia Industrial',
        navigation: 'Navegacao',
      }
    : {
        catalog: 'Catalog',
        production: 'Production',
        logistics: 'Logistics',
        standards: 'Standards',
        login: 'Login',
        industrial: 'Industrial Excellence',
        navigation: 'Navigation',
      };

  const [isScrolled, setIsScrolled] = React.useState(false);
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const { lineCount } = useMarketplaceCart();

  React.useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  React.useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  React.useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = '';
      };
    }
    document.body.style.overflow = '';
  }, [isMenuOpen]);

  const navLinks = [
    { name: text.catalog, path: mp('marketplace') },
    { name: text.production, path: mp('categories') },
    { name: text.logistics, path: mp('wholesale') },
    { name: text.standards, path: mp('standards') },
  ];

  return (
    <nav
      className={cn(
        'fixed top-6 left-0 right-0 z-50 transition-all duration-500 px-3 md:px-6',
        isScrolled ? 'py-4' : 'py-8'
      )}
    >
      <div
        className={cn(
          'max-w-7xl mx-auto flex items-center justify-between px-4 py-4 md:px-10 md:py-5 transition-all duration-500',
          isScrolled ? 'rounded-2xl shadow-lg bg-charcoal/95 border border-white/10 backdrop-blur-md' : 'bg-charcoal/85 rounded-2xl border border-white/10'
        )}
      >
        <Link to={mp()} className="flex items-center gap-4">
          <div className="w-10 h-10 rounded-lg bg-oxblood flex items-center justify-center text-white font-serif text-2xl font-bold">V</div>
          <div className="flex flex-col leading-none">
            <span className="text-[11px] font-serif font-bold tracking-tight text-white uppercase sm:text-sm md:text-xl">VANTAGE_PROTEIN_NODE</span>
            <span className="text-[9px] tracking-[0.3em] font-sans font-semibold uppercase text-amber-200/80">{text.industrial}</span>
          </div>
        </Link>

        <div className="hidden md:flex items-center gap-12">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={cn(
                'text-[11px] font-sans font-bold uppercase tracking-[0.2em] transition-all hover:text-oxblood relative group',
                location.pathname === link.path ? 'text-amber-200' : 'text-white/70'
              )}
            >
              {link.name}
              <span
                className={cn(
                  'absolute -bottom-1 left-1/2 -translate-x-1/2 w-0 h-[1.5px] bg-amber-200 transition-all duration-300 group-hover:w-full',
                  location.pathname === link.path && 'w-full'
                )}
              />
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-3 sm:gap-5 md:gap-8">
          <Link to={mp('login')} className="hidden md:flex items-center gap-2 text-[11px] font-sans font-bold uppercase tracking-[0.2em] text-white/70 hover:text-amber-200 transition-colors">
            <User size={16} strokeWidth={1.5} />
            {text.login}
          </Link>
          <Link to={mp('cart')} className="relative inline-flex min-h-11 min-w-11 items-center justify-center rounded-lg p-2 text-white/70 hover:bg-white/10 hover:text-amber-200 transition-colors">
            <ShoppingCart size={20} strokeWidth={1.5} />
            <span className="absolute -top-1 -right-1 min-w-4 h-4 px-1 bg-oxblood text-white text-[9px] flex items-center justify-center font-sans font-bold rounded-full">{lineCount}</span>
          </Link>
          <button
            className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-lg p-2 text-white/70 hover:bg-white/10 hover:text-amber-200 transition-colors md:hidden"
            onClick={() => setIsMenuOpen((prev) => !prev)}
            aria-label="Toggle navigation menu"
          >
            {isMenuOpen ? <X size={24} strokeWidth={1.5} /> : <Menu size={24} strokeWidth={1.5} />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="fixed inset-0 z-[60] bg-surface/98 px-6 pb-10 pt-24 md:hidden">
          <div className="mx-auto flex h-full max-w-md flex-col">
            <div className="mb-5 flex items-center justify-between">
              <span className="text-xs font-bold uppercase tracking-[0.18em] text-charcoal/50">{text.navigation}</span>
              <button
                onClick={() => setIsMenuOpen(false)}
                className="rounded-lg p-2 text-charcoal/60 hover:bg-charcoal/5"
                aria-label="Close navigation menu"
              >
                <X size={18} />
              </button>
            </div>
            <div className="space-y-2 overflow-y-auto pb-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={cn(
                    'block rounded-xl px-4 py-3 text-sm font-semibold',
                    location.pathname === link.path ? 'bg-oxblood/10 text-oxblood' : 'bg-surface-2 text-charcoal/80 border border-charcoal/20'
                  )}
                >
                  {link.name}
                </Link>
              ))}
              <Link to={mp('login')} className="mt-3 block rounded-xl border border-charcoal/20 bg-surface-2 px-4 py-3 text-sm font-semibold text-charcoal/80">
                {text.login}
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export const Footer = () => {
  const location = useLocation();
  const lang = resolveDemoLanguage(location.search);
  const text = lang === 'pt'
    ? {
        desc: 'Legado de excelencia industrial. Combinamos tradicao e precisao moderna para entregar selecoes premium.',
        map: 'Mapa da Operacao',
        productCatalog: 'Catalogo de produtos',
        processing: 'Linhas de processamento',
        bulk: 'Pedidos em lote',
        quality: 'Garantia de qualidade',
        account: 'Conta',
        access: 'Autorizar acesso',
        request: 'Solicitar cadastro',
        heritage: 'Nossa historia',
        rights: 'TODOS OS DIREITOS RESERVADOS',
        privacy: 'Privacidade',
        terms: 'Termos',
      }
    : {
        desc:
          "A legacy of industrial excellence. We combine traditional craft with modern precision to deliver the world's finest meat selections.",
        map: 'Facility_Map',
        productCatalog: 'Product Catalog',
        processing: 'Processing Lines',
        bulk: 'Bulk Orders',
        quality: 'Quality Assurance',
        account: 'Account',
        access: 'Authorize Access',
        request: 'Request Node',
        heritage: 'Our Heritage',
        rights: 'ALL RIGHTS RESERVED',
        privacy: 'Privacy',
        terms: 'Terms',
      };

  return (
    <footer className="bg-charcoal text-white pt-20 pb-14 px-4 sm:px-6 border-t border-white/10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-16 mb-16 md:mb-24">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-3 mb-7">
              <div className="w-11 h-11 rounded-lg bg-oxblood flex items-center justify-center text-white font-serif text-2xl font-bold">V</div>
              <span className="text-lg sm:text-2xl font-serif font-bold tracking-tight uppercase text-white">VANTAGE_PROTEIN_NODE</span>
            </div>
            <p className="text-white/70 text-base font-serif italic leading-relaxed max-w-md mb-7">{text.desc}</p>
            <div className="flex flex-wrap gap-3 sm:gap-4">
              {['INSTAGRAM', 'LINKEDIN', 'TWITTER'].map((item) => (
                <a key={item} href="#" className="inline-flex items-center justify-center rounded-full border border-white/20 px-4 py-2 text-[10px] font-sans font-bold tracking-[0.18em] text-white/70 hover:text-amber-200 transition-colors">
                  {item}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-serif text-sm font-bold text-amber-200 italic mb-8">{text.map}</h4>
            <ul className="space-y-4 text-[12px] font-sans text-white/70 tracking-wide">
              <li><Link to={mp('marketplace')} className="hover:text-amber-200 transition-colors">{text.productCatalog}</Link></li>
              <li><Link to={mp('categories')} className="hover:text-amber-200 transition-colors">{text.processing}</Link></li>
              <li><Link to={mp('wholesale')} className="hover:text-amber-200 transition-colors">{text.bulk}</Link></li>
              <li><Link to={mp('standards')} className="hover:text-amber-200 transition-colors">{text.quality}</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-sm font-bold text-amber-200 italic mb-8">{text.account}</h4>
            <ul className="space-y-4 text-[12px] font-sans text-white/70 tracking-wide">
              <li><Link to={mp('login')} className="hover:text-amber-200 transition-colors">{text.access}</Link></li>
              <li><Link to={mp('register')} className="hover:text-amber-200 transition-colors">{text.request}</Link></li>
              <li><Link to={mp('about')} className="hover:text-amber-200 transition-colors">{text.heritage}</Link></li>
              <li><span className="text-white/40 italic">Est. 1984</span></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-5">
          <p className="text-[10px] font-sans text-white/50 uppercase tracking-[0.2em] text-center md:text-left">(c) 2026 VANTAGE PROTEIN GLOBAL // {text.rights}</p>
          <div className="flex gap-6 sm:gap-10">
            <a href="#" className="text-[10px] font-sans text-white/50 hover:text-amber-200 uppercase tracking-widest">{text.privacy}</a>
            <a href="#" className="text-[10px] font-sans text-white/50 hover:text-amber-200 uppercase tracking-widest">{text.terms}</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

