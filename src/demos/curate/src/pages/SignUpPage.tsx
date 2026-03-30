import * as React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '../components/ui/Button';
import { Input } from '../components/ui/Input';
import { Card, CardContent } from '../components/ui/Card';
import { curate } from '../lib/paths';

export function SignUpPage() {
  const navigate = useNavigate();

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
          <h2 className="mt-6 text-3xl font-bold tracking-tight text-zinc-900">Create an account</h2>
          <p className="mt-2 text-sm text-zinc-600">
            Already have an account?{' '}
            <Link to={curate('signin')} className="font-medium text-zinc-900 hover:underline">
              Sign in
            </Link>
          </p>
        </div>

        <Card>
          <CardContent className="pt-6">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <Input label="First Name" placeholder="Alex" required />
                <Input label="Last Name" placeholder="Rivera" required />
              </div>
              <Input label="Email address" type="email" placeholder="name@example.com" required />
              <Input label="Password" type="password" placeholder="••••••••" required />
              <p className="text-xs text-zinc-500">
                By signing up, you agree to our Terms of Service and Privacy Policy.
              </p>
              <Button type="submit" className="w-full">
                Create Account
              </Button>
            </form>

            <div className="relative my-8">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-zinc-200"></div>
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-white px-2 text-zinc-500">Or continue with</span>
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
