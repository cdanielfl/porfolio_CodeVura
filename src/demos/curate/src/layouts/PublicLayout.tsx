import * as React from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { Button } from '../components/ui/Button';
import { curate } from '../lib/paths';

export function PublicLayout() {
  const location = useLocation();
  const isAuthPage = [curate('signin'), curate('signup')].includes(location.pathname);

  return (
    <div className="min-h-screen bg-white font-sans text-zinc-900">
      {!isAuthPage && (
        <header className="sticky top-6 z-50 w-full border-b border-zinc-100 bg-white/80 backdrop-blur-md">
          <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
            <Link to={curate()} className="flex items-center space-x-2">
              <div className="h-8 w-8 rounded-lg bg-zinc-900 flex items-center justify-center">
                <span className="text-white font-bold text-xl">C</span>
              </div>
              <span className="text-xl font-bold tracking-tight">Curate</span>
            </Link>
            <nav className="hidden md:flex items-center space-x-8 text-sm font-medium text-zinc-600">
              <a href={`${curate()}#features`} className="hover:text-zinc-900 transition-colors">Features</a>
              <a href={`${curate()}#templates`} className="hover:text-zinc-900 transition-colors">Templates</a>
              <a href={`${curate()}#pricing`} className="hover:text-zinc-900 transition-colors">Pricing</a>
            </nav>
            <div className="flex items-center space-x-4">
              <Link to={curate('signin')}>
                <Button variant="ghost" size="sm">Sign In</Button>
              </Link>
              <Link to={curate('signup')}>
                <Button size="sm">Get Started</Button>
              </Link>
            </div>
          </div>
        </header>
      )}
      <main>
        <Outlet />
      </main>
      {!isAuthPage && (
        <footer className="border-t border-zinc-100 bg-zinc-50 py-12">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="col-span-2">
                <Link to={curate()} className="flex items-center space-x-2 mb-4">
                  <div className="h-6 w-6 rounded bg-zinc-900 flex items-center justify-center">
                    <span className="text-white font-bold text-sm">C</span>
                  </div>
                  <span className="text-lg font-bold tracking-tight">Curate</span>
                </Link>
                <p className="text-sm text-zinc-500 max-w-xs">
                  The professional platform for crafting high-fidelity resumes that get you hired.
                </p>
              </div>
              <div>
                <h4 className="text-xs font-bold uppercase tracking-widest text-zinc-400 mb-4">Product</h4>
                <ul className="space-y-2 text-sm text-zinc-600">
                  <li><Link to={curate()} className="hover:text-zinc-900">Templates</Link></li>
                  <li><Link to={curate()} className="hover:text-zinc-900">Builder</Link></li>
                  <li><Link to={curate()} className="hover:text-zinc-900">Examples</Link></li>
                </ul>
              </div>
              <div>
                <h4 className="text-xs font-bold uppercase tracking-widest text-zinc-400 mb-4">Company</h4>
                <ul className="space-y-2 text-sm text-zinc-600">
                  <li><Link to={curate()} className="hover:text-zinc-900">About</Link></li>
                  <li><Link to={curate()} className="hover:text-zinc-900">Privacy</Link></li>
                  <li><Link to={curate()} className="hover:text-zinc-900">Terms</Link></li>
                </ul>
              </div>
            </div>
            <div className="mt-12 pt-8 border-t border-zinc-200 text-center text-xs text-zinc-400">
              © 2024 Curate Inc. All rights reserved.
            </div>
          </div>
        </footer>
      )}
    </div>
  );
}
