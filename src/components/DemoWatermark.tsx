import { useLocation } from 'react-router-dom';
import logo from '../assets/codevura-navbar-transparent.png';

export default function DemoWatermark() {
  const { pathname } = useLocation();
  const isDemoRoute = pathname.startsWith('/demo/');

  if (!isDemoRoute) return null;

  return (
    <div className="pointer-events-none fixed left-3 top-[52px] z-[60] md:bottom-4 md:left-auto md:right-4 md:top-auto">
      <div className="flex items-center gap-1.5 rounded-full border border-white/20 bg-slate-950/60 px-2.5 py-1.5 backdrop-blur-md md:gap-2 md:px-3 md:py-2">
        <img src={logo} alt="Codevura" className="h-4 w-auto opacity-85 md:h-5" />
        <span className="text-[10px] font-semibold uppercase tracking-[0.12em] text-slate-100/85 md:text-[11px] md:tracking-[0.14em]">
          Codevura
        </span>
      </div>
    </div>
  );
}
