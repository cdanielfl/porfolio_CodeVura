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

const navItems = [
  { icon: LayoutDashboard, label: 'Dashboard', path: sp() },
  { icon: ShoppingCart, label: 'Orders', path: sp('orders') },
  { icon: Package, label: 'Inventory', path: sp('inventory') },
  { icon: Users, label: 'Customers', path: sp('customers') },
  { icon: BarChart3, label: 'Sales', path: sp('sales') },
  { icon: CheckSquare, label: 'Tasks', path: sp('tasks') },
  { icon: FileText, label: 'Reports', path: sp('reports') },
];

const footerItems = [
  { icon: Settings, label: 'Settings', path: sp('settings') },
  { icon: UserCircle, label: 'Profile', path: sp('profile') },
];

export const Sidebar = () => {
  return (
    <aside className="w-64 border-r border-slate-200 bg-white flex flex-col h-[calc(100vh-1.5rem)] sticky top-6">
      <div className="p-6 flex items-center gap-3">
        <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center text-white shadow-lg shadow-indigo-200">
          <Briefcase size={18} fill="currentColor" />
        </div>
        <span className="font-bold text-xl tracking-tight text-slate-900">Nexus<span className="text-indigo-600">Biz</span></span>
      </div>

      <nav className="flex-1 px-4 py-4 space-y-1">
        <p className="px-2 text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2">Main Menu</p>
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
        <p className="px-2 text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2">System</p>
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
          <span className="text-[10px] font-bold uppercase tracking-wider opacity-70">Pro Plan</span>
        </div>
        <p className="text-xs mb-3 leading-relaxed opacity-80">Unlock advanced AI insights and custom reporting.</p>
        <button className="w-full py-2 bg-white/10 hover:bg-white/20 rounded-lg text-xs font-semibold transition-colors">
          Upgrade Now
        </button>
      </div>
    </aside>
  );
};
