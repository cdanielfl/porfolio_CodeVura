import * as React from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { 
  LayoutDashboard, 
  FileText, 
  Palette, 
  User, 
  Settings, 
  LogOut,
  Plus,
  Bell,
  Sparkles
} from 'lucide-react';
import { cn } from '../lib/utils';
import { Button } from '../components/ui/Button';
import { curate } from '../lib/paths';

export function DashboardLayout() {
  const location = useLocation();

  const navItems = [
    { icon: LayoutDashboard, label: 'Overview', path: curate('dashboard') },
    { icon: FileText, label: 'My Resumes', path: curate('resumes') },
    { icon: Sparkles, label: 'AI Builder', path: curate('ai-onboarding') },
    { icon: Palette, label: 'Templates', path: curate('templates') },
    { icon: User, label: 'Profile', path: curate('profile') },
    { icon: Settings, label: 'Settings', path: curate('settings') },
  ];

  return (
    <div className="flex min-h-screen bg-zinc-50 font-sans text-zinc-900">
      {/* Sidebar */}
      <aside className="fixed left-0 top-6 z-40 h-[calc(100vh-1.5rem)] w-64 border-r border-zinc-200 bg-white hidden lg:block">
        <div className="flex h-full flex-col px-4 py-6">
          <Link to={curate('dashboard')} className="flex items-center space-x-2 px-2 mb-10">
            <div className="h-8 w-8 rounded-lg bg-zinc-900 flex items-center justify-center">
              <span className="text-white font-bold text-xl">C</span>
            </div>
            <span className="text-xl font-bold tracking-tight">Curate</span>
          </Link>

          <nav className="flex-1 space-y-1">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={cn(
                  'flex items-center space-x-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors',
                  location.pathname === item.path
                    ? 'bg-zinc-100 text-zinc-900'
                    : 'text-zinc-500 hover:bg-zinc-50 hover:text-zinc-900'
                )}
              >
                <item.icon className="h-4 w-4" />
                <span>{item.label}</span>
              </Link>
            ))}
          </nav>

          <div className="mt-auto pt-6 border-t border-zinc-100">
            <Link to={curate('signin')} className="flex items-center space-x-3 rounded-lg px-3 py-2 text-sm font-medium text-zinc-500 hover:bg-zinc-50 hover:text-zinc-900 transition-colors">
              <LogOut className="h-4 w-4" />
              <span>Sign Out</span>
            </Link>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 lg:pl-64">
        <header className="sticky top-6 z-30 flex h-16 items-center justify-between border-b border-zinc-200 bg-white/80 px-4 backdrop-blur-md sm:px-6 lg:px-8">
          <div className="flex items-center lg:hidden">
             <Link to={curate('dashboard')} className="flex items-center space-x-2">
                <div className="h-6 w-6 rounded bg-zinc-900 flex items-center justify-center">
                  <span className="text-white font-bold text-sm">C</span>
                </div>
              </Link>
          </div>
          
          <div className="flex flex-1 items-center justify-end space-x-4">
            <Button variant="ghost" size="icon" className="text-zinc-500">
              <Bell className="h-5 w-5" />
            </Button>
            <div className="h-8 w-8 rounded-full bg-zinc-200 border border-zinc-300 overflow-hidden">
              <img src="https://picsum.photos/seed/user/32/32" alt="Avatar" referrerPolicy="no-referrer" />
            </div>
          </div>
        </header>

        <main className="p-4 sm:p-6 lg:p-8">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
