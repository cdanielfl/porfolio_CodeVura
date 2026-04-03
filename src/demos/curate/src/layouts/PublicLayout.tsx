import * as React from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { Button } from '../components/ui/Button';
import { curate } from '../lib/paths';
import { resolveDemoLanguage } from '../../../../utils/demoLanguage';

export function PublicLayout() {
  const location = useLocation();
  const lang = resolveDemoLanguage(location.search);
  const text = lang === 'pt'
    ? {
        features: 'Recursos',
        templates: 'Modelos',
        pricing: 'Precos',
        signIn: 'Entrar',
        getStarted: 'Comecar',
        description: 'A plataforma profissional para criar curriculos de alta qualidade.',
        product: 'Produto',
        builder: 'Editor',
        examples: 'Exemplos',
        company: 'Empresa',
        about: 'Sobre',
        privacy: 'Privacidade',
        terms: 'Termos',
        rights: 'Todos os direitos reservados.',
      }
    : {
        features: 'Features',
        templates: 'Templates',
        pricing: 'Pricing',
        signIn: 'Sign In',
        getStarted: 'Get Started',
        description: 'The professional platform for crafting high-fidelity resumes that get you hired.',
        product: 'Product',
        builder: 'Builder',
        examples: 'Examples',
        company: 'Company',
        about: 'About',
        privacy: 'Privacy',
        terms: 'Terms',
        rights: 'All rights reserved.',
      };
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
              <a href={`${curate()}#features`} className="hover:text-zinc-900 transition-colors">{text.features}</a>
              <a href={`${curate()}#templates`} className="hover:text-zinc-900 transition-colors">{text.templates}</a>
              <a href={`${curate()}#pricing`} className="hover:text-zinc-900 transition-colors">{text.pricing}</a>
            </nav>
            <div className="flex items-center space-x-4">
              <Link to={curate('signin')}>
                <Button variant="ghost" size="sm">{text.signIn}</Button>
              </Link>
              <Link to={curate('signup')}>
                <Button size="sm">{text.getStarted}</Button>
              </Link>
            </div>
          </div>
          <div className="border-t border-zinc-100 px-4 py-2 md:hidden">
            <nav className="mx-auto flex max-w-md items-center justify-between text-xs font-semibold text-zinc-600">
              <a href={`${curate()}#features`} className="hover:text-zinc-900 transition-colors">{text.features}</a>
              <a href={`${curate()}#templates`} className="hover:text-zinc-900 transition-colors">{text.templates}</a>
              <a href={`${curate()}#pricing`} className="hover:text-zinc-900 transition-colors">{text.pricing}</a>
            </nav>
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
                <p className="text-sm text-zinc-500 max-w-xs">{text.description}</p>
              </div>
              <div>
                <h4 className="text-xs font-bold uppercase tracking-widest text-zinc-400 mb-4">{text.product}</h4>
                <ul className="space-y-2 text-sm text-zinc-600">
                  <li><Link to={curate()} className="hover:text-zinc-900">{text.templates}</Link></li>
                  <li><Link to={curate()} className="hover:text-zinc-900">{text.builder}</Link></li>
                  <li><Link to={curate()} className="hover:text-zinc-900">{text.examples}</Link></li>
                </ul>
              </div>
              <div>
                <h4 className="text-xs font-bold uppercase tracking-widest text-zinc-400 mb-4">{text.company}</h4>
                <ul className="space-y-2 text-sm text-zinc-600">
                  <li><Link to={curate()} className="hover:text-zinc-900">{text.about}</Link></li>
                  <li><Link to={curate()} className="hover:text-zinc-900">{text.privacy}</Link></li>
                  <li><Link to={curate()} className="hover:text-zinc-900">{text.terms}</Link></li>
                </ul>
              </div>
            </div>
            <div className="mt-12 pt-8 border-t border-zinc-200 text-center text-xs text-zinc-400">
              © 2024 Curate Inc. {text.rights}
            </div>
          </div>
        </footer>
      )}
    </div>
  );
}
