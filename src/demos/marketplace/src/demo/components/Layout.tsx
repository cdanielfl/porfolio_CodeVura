import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingCart, Menu, Search, User, ChevronDown } from 'lucide-react';
import { cn } from '../lib/utils';
import { mp } from '../lib/paths';

export const Navbar = () => {
  const location = useLocation();
  const [isScrolled, setIsScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Catalog', path: mp('marketplace') },
    { name: 'Production', path: mp('categories') },
    { name: 'Logistics', path: mp('wholesale') },
    { name: 'Standards', path: mp('standards') },
  ];

  return (
    <nav className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-500 px-6",
      isScrolled ? "py-4" : "py-8"
    )}>
      <div className={cn(
        "max-w-7xl mx-auto flex items-center justify-between px-10 py-5 transition-all duration-500",
        isScrolled ? "glass-nav rounded-full shadow-lg" : "bg-transparent"
      )}>
        <Link to={mp()} className="flex items-center gap-4">
          <div className="w-10 h-10 bg-oxblood flex items-center justify-center text-white font-serif text-2xl font-bold">V</div>
          <div className="flex flex-col leading-none">
            <span className="text-xl font-serif font-bold tracking-tight text-charcoal uppercase">VANTAGE_PROTEIN_NODE</span>
            <span className="text-[9px] tracking-[0.3em] font-sans font-semibold uppercase text-oxblood/60">Industrial Excellence</span>
          </div>
        </Link>

        <div className="hidden md:flex items-center gap-12">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={cn(
                "text-[11px] font-sans font-bold uppercase tracking-[0.2em] transition-all hover:text-oxblood relative group",
                location.pathname === link.path ? "text-oxblood" : "text-charcoal/60"
              )}
            >
              {link.name}
              <span className={cn(
                "absolute -bottom-1 left-1/2 -translate-x-1/2 w-0 h-[1.5px] bg-oxblood transition-all duration-300 group-hover:w-full",
                location.pathname === link.path && "w-full"
              )}></span>
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-8">
          <Link to={mp('login')} className="hidden md:flex items-center gap-2 text-[11px] font-sans font-bold uppercase tracking-[0.2em] text-charcoal/60 hover:text-oxblood transition-colors">
            <User size={16} strokeWidth={1.5} />
            Login
          </Link>
          <Link to={mp('cart')} className="relative p-2 text-charcoal/60 hover:text-oxblood transition-colors">
            <ShoppingCart size={20} strokeWidth={1.5} />
            <span className="absolute -top-1 -right-1 w-4 h-4 bg-oxblood text-white text-[9px] flex items-center justify-center font-sans font-bold rounded-full">2</span>
          </Link>
          <button className="p-2 text-charcoal/60 hover:text-oxblood transition-colors md:hidden">
            <Menu size={24} strokeWidth={1.5} />
          </button>
        </div>
      </div>
    </nav>
  );
};

export const Footer = () => {
  return (
    <footer className="bg-white text-charcoal pt-32 pb-16 px-6 border-t border-border relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-32">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-4 mb-10">
              <div className="w-12 h-12 bg-oxblood flex items-center justify-center text-white font-serif text-3xl font-bold">V</div>
              <span className="text-2xl font-serif font-bold tracking-tight uppercase">VANTAGE_PROTEIN_NODE</span>
            </div>
            <p className="text-charcoal/50 text-base font-serif italic leading-relaxed max-w-md mb-10">
              A legacy of industrial excellence. We combine traditional craft with modern precision to deliver the world's finest meat selections.
            </p>
            <div className="flex gap-8">
              {['INSTAGRAM', 'LINKEDIN', 'TWITTER'].map(item => (
                <a key={item} href="#" className="text-[11px] font-sans font-bold tracking-[0.2em] text-charcoal/40 hover:text-oxblood transition-colors">
                  {item}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-serif text-sm font-bold text-oxblood italic mb-8">Facility_Map</h4>
            <ul className="space-y-4 text-[12px] font-sans text-charcoal/60 tracking-wide">
              <li><Link to={mp('marketplace')} className="hover:text-oxblood transition-colors">Product Catalog</Link></li>
              <li><Link to={mp('categories')} className="hover:text-oxblood transition-colors">Processing Lines</Link></li>
              <li><Link to={mp('wholesale')} className="hover:text-oxblood transition-colors">Bulk Orders</Link></li>
              <li><Link to={mp('standards')} className="hover:text-oxblood transition-colors">Quality Assurance</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-sm font-bold text-oxblood italic mb-8">Account</h4>
            <ul className="space-y-4 text-[12px] font-sans text-charcoal/60 tracking-wide">
              <li><Link to={mp('login')} className="hover:text-oxblood transition-colors">Authorize Access</Link></li>
              <li><Link to={mp('register')} className="hover:text-oxblood transition-colors">Request Node</Link></li>
              <li><Link to={mp('about')} className="hover:text-oxblood transition-colors">Our Heritage</Link></li>
              <li><span className="text-charcoal/30 italic">Est. 1984</span></li>
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-border flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-[10px] font-sans text-charcoal/30 uppercase tracking-[0.3em]">© 2026 VANTAGE PROTEIN GLOBAL // ALL RIGHTS RESERVED</p>
          <div className="flex gap-10">
            <a href="#" className="text-[10px] font-sans text-charcoal/30 hover:text-oxblood uppercase tracking-widest">Privacy</a>
            <a href="#" className="text-[10px] font-sans text-charcoal/30 hover:text-oxblood uppercase tracking-widest">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
