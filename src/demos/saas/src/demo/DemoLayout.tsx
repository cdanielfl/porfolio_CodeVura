import { Outlet, NavLink, useLocation } from 'react-router-dom';
import { LayoutDashboard, ShoppingCart, Package, Users, MoreHorizontal } from 'lucide-react';
import { Sidebar } from './components/Sidebar';
import { Topbar } from './components/Topbar';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from './lib/utils';
import { sp } from './lib/paths';
import { resolveDemoLanguage } from '../../../../utils/demoLanguage';

export const DemoLayout = () => {
  const location = useLocation();
  const lang = resolveDemoLanguage(location.search);
  const routeKey = `${location.pathname}${location.search}`;
  const mobileItems = lang === 'pt'
    ? [
        { icon: LayoutDashboard, label: 'Inicio', path: sp() },
        { icon: ShoppingCart, label: 'Pedidos', path: sp('orders') },
        { icon: Package, label: 'Estoque', path: sp('inventory') },
        { icon: Users, label: 'Clientes', path: sp('customers') },
        { icon: MoreHorizontal, label: 'Mais', path: sp('reports') },
      ]
    : [
        { icon: LayoutDashboard, label: 'Home', path: sp() },
        { icon: ShoppingCart, label: 'Orders', path: sp('orders') },
        { icon: Package, label: 'Stock', path: sp('inventory') },
        { icon: Users, label: 'Clients', path: sp('customers') },
        { icon: MoreHorizontal, label: 'More', path: sp('reports') },
      ];

  return (
    <div className="flex min-h-screen bg-bg font-sans text-ink selection:bg-accent selection:text-white overflow-hidden">
      <Sidebar />
      <div className="flex-1 flex flex-col min-w-0 h-screen overflow-hidden">
        <Topbar />
        <main className="flex-1 overflow-y-auto bg-bg grid-pattern">
          <div className="p-3 pb-24 sm:p-6 sm:pb-24 lg:p-10 lg:pb-12">
            <AnimatePresence initial={false} mode="sync">
              <motion.div
                key={routeKey}
                initial={{ opacity: 0.98, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0.99, y: -4 }}
                transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
              >
                <Outlet />
              </motion.div>
            </AnimatePresence>
          </div>
        </main>

        <nav className="fixed inset-x-0 bottom-0 z-[80] border-t border-slate-200 bg-white/95 px-2 py-2 backdrop-blur-md lg:hidden">
          <div className="mx-auto flex max-w-md items-center justify-between">
            {mobileItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  cn(
                    'flex min-w-[64px] flex-col items-center gap-1 rounded-lg px-2 py-2 text-[10px] font-semibold',
                    isActive ? 'text-indigo-600' : 'text-slate-500'
                  )
                }
              >
                <item.icon size={16} />
                <span>{item.label}</span>
              </NavLink>
            ))}
          </div>
        </nav>
      </div>
    </div>
  );
};

