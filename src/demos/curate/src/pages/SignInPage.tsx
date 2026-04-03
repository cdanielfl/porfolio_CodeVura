import * as React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Button } from '../components/ui/Button';
import { Input } from '../components/ui/Input';
import { Card, CardContent } from '../components/ui/Card';
import { curate } from '../lib/paths';
import { resolveDemoLanguage } from '../../../../utils/demoLanguage';

export function SignInPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const lang = resolveDemoLanguage(location.search);

  const text = lang === 'pt'
    ? {
        welcome: 'Bem-vindo de volta',
        noAccount: 'Nao tem conta?',
        signUp: 'Criar conta gratis',
        email: 'Email',
        password: 'Senha',
        forgot: 'Esqueceu a senha?',
        signIn: 'Entrar',
        orContinue: 'Ou continue com',
      }
    : {
        welcome: 'Welcome back',
        noAccount: "Don't have an account?",
        signUp: 'Sign up for free',
        email: 'Email address',
        password: 'Password',
        forgot: 'Forgot password?',
        signIn: 'Sign In',
        orContinue: 'Or continue with',
      };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate(curate('dashboard'));
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 px-4 py-12 sm:px-6 lg:px-8">
      <div className="w-full max-w-md">
        <div className="mb-8 text-center">
          <Link to={curate()} className="inline-flex items-center space-x-2">
            <div className="h-10 w-10 rounded-xl bg-zinc-900 flex items-center justify-center">
              <span className="text-white font-bold text-2xl">C</span>
            </div>
            <span className="text-2xl font-bold tracking-tight">Curate</span>
          </Link>
          <h2 className="mt-6 text-3xl font-bold tracking-tight text-zinc-900">{text.welcome}</h2>
          <p className="mt-2 text-sm text-zinc-600">
            {text.noAccount}{' '}
            <Link to={curate('signup')} className="font-medium text-zinc-900 hover:underline">
              {text.signUp}
            </Link>
          </p>
        </div>

        <Card>
          <CardContent className="pt-6">
            <form onSubmit={handleSubmit} className="space-y-6">
              <Input label={text.email} type="email" placeholder="name@example.com" required />
              <div className="space-y-1">
                <Input label={text.password} type="password" placeholder="********" required />
                <div className="flex justify-end">
                  <button type="button" className="text-xs font-medium text-zinc-500 hover:text-zinc-900">
                    {text.forgot}
                  </button>
                </div>
              </div>
              <Button type="submit" className="w-full">
                {text.signIn}
              </Button>
            </form>

            <div className="relative my-8">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-zinc-200"></div>
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-white px-2 text-zinc-500">{text.orContinue}</span>
              </div>
            </div>

            <Button variant="outline" className="w-full">
              <img src="https://www.google.com/favicon.ico" alt="Google" className="mr-2 h-4 w-4" />
              Google
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
