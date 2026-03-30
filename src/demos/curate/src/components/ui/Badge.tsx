import * as React from 'react';
import { cn } from '../../lib/utils';

export function Badge({ className, children, variant = 'default' }: { className?: string; children: React.ReactNode; variant?: 'default' | 'outline' | 'success' }) {
  const variants = {
    default: 'bg-zinc-100 text-zinc-800',
    outline: 'border border-zinc-200 text-zinc-600',
    success: 'bg-emerald-50 text-emerald-700 border border-emerald-100',
  };

  return (
    <span className={cn('inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium', variants[variant], className)}>
      {children}
    </span>
  );
}
