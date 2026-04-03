import { NavLink } from 'react-router-dom';
import { 
  LayoutDashboard, 
  ShoppingCart, 
  Package, 
  Users, 
  BarChart3, 
  CheckSquare, 
  FileText, 
  Settings, 
  UserCircle,
  Briefcase,
  ChevronRight
} from 'lucide-react';
import { cn } from '../lib/utils';
import { sp } from '../lib/paths';
import { useLocation } from 'react-router-dom';
import { resolveDemoLanguage } from '../../../../../utils/demoLanguage';

export const Sidebar = () => {
  const location = useLocation();
  const lang = resolveDemoLanguage(location.search);
  const text = lang === 'pt'
    ? {
        dashboard: 'Painel',
        orders: 'Pedidos',
        inventory: 'Estoque',
        customers: 'Clientes',
        sales: 'Vendas',
        tasks: 'Tarefas',
        reports: 'Relatorios',
        settings: 'Configuracoes',
        profile: 'Perfil',
        mainMenu: 'Menu principal',
        system: 'Sistema',
        proPlan: 'Plano Pro',
        proDesc: 'Desbloqueie insights de IA e relatorios personalizados.',
        upgrade: 'Fazer upgrade',
      }
    : {
        dashboard: 'Dashboard',
        orders: 'Orders',
        inventory: 'Inventory',
        customers: 'Customers',
        sales: 'Sales',
        tasks: 'Tasks',
        reports: 'Reports',
        settings: 'Settings',
        profile: 'Profile',
        mainMenu: 'Main Menu',
        system: 'System',
        proPlan: 'Pro Plan',
        proDesc: 'Unlock advanced AI insights and custom reporting.',
        upgrade: 'Upgrade Now',
      };

  const navItems = [
    { icon: LayoutDashboard, label: text.dashboard, path: sp() },
    { icon: ShoppingCart, label: text.orders, path: sp('orders') },
    { icon: Package, label: text.inventory, path: sp('inventory') },
    { icon: Users, label: text.customers, path: sp('customers') },
    { icon: BarChart3, label: text.sales, path: sp('sales') },
    { icon: CheckSquare, label: text.tasks, path: sp('tasks') },
    { icon: FileText, label: text.reports, path: sp('reports') },
  ];

  const footerItems = [
    { icon: Settings, label: text.settings, path: sp('settings') },
    { icon: UserCircle, label: text.profile, path: sp('profile') },
  ];

  return (
    <aside className="hidden h-[calc(100vh-1.5rem)] w-64 flex-col border-r border-slate-200 bg-white lg:sticky lg:top-6 lg:flex">
      <div className="p-6 flex items-center gap-3">
        <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center text-white shadow-lg shadow-indigo-200">
          <Briefcase size={18} fill="currentColor" />
        </div>
        <span className="font-bold text-xl tracking-tight text-slate-900">Nexus<span className="text-indigo-600">Biz</span></span>
      </div>

      <nav className="flex-1 px-4 py-4 space-y-1">
        <p className="px-2 text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2">{text.mainMenu}</p>
        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) => cn(
              "flex items-center justify-between px-3 py-2 rounded-lg text-sm transition-all group",
              isActive 
                ? "bg-indigo-50 text-indigo-700 font-medium" 
                : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
            )}
          >
            <div className="flex items-center gap-3">
              <item.icon size={18} className={cn("transition-colors", "group-hover:text-indigo-600")} />
              <span>{item.label}</span>
            </div>
            <ChevronRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
          </NavLink>
        ))}
      </nav>

      <div className="px-4 py-6 border-t border-slate-100 space-y-1">
        <p className="px-2 text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2">{text.system}</p>
        {footerItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) => cn(
              "flex items-center gap-3 px-3 py-2 rounded-lg text-sm transition-all",
              isActive 
                ? "bg-indigo-50 text-indigo-700 font-medium" 
                : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
            )}
          >
            <item.icon size={18} />
            <span>{item.label}</span>
          </NavLink>
        ))}
      </div>

      <div className="p-4 m-4 bg-slate-900 rounded-xl text-white">
        <div className="flex items-center gap-2 mb-2">
          <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
          <span className="text-[10px] font-bold uppercase tracking-wider opacity-70">{text.proPlan}</span>
        </div>
        <p className="text-xs mb-3 leading-relaxed opacity-80">{text.proDesc}</p>
        <button className="w-full py-2 bg-white/10 hover:bg-white/20 rounded-lg text-xs font-semibold transition-colors">
          {text.upgrade}
        </button>
      </div>
    </aside>
  );
};
