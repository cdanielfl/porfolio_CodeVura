import { useLocation } from 'react-router-dom';
import logo from '../assets/codevura-navbar-transparent.png';

export default function DemoWatermark() {
  const { pathname } = useLocation();
  const isDemoRoute = pathname.startsWith('/demo/');

  if (!isDemoRoute) return null;

  return (
    <div className="pointer-events-none fixed right-3 top-10 z-[60] md:bottom-4 md:right-4 md:top-auto">
      <div className="flex items-center gap-2 rounded-full border border-white/20 bg-slate-950/70 px-3 py-2 backdrop-blur-md">
        <img src={logo} alt="Codevura" className="h-5 w-auto opacity-90" />
        <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-slate-100/90">
          Codevura
        </span>
      </div>
    </div>
  );
}
