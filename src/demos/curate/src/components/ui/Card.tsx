import * as React from 'react';
import { cn } from '../../lib/utils';

export function Card({ className, children, ...props }: { className?: string; children: React.ReactNode; [key: string]: any }) {
  return (
    <div className={cn('rounded-xl border border-zinc-200 bg-white shadow-sm overflow-hidden', className)} {...props}>
      {children}
    </div>
  );
}

export function CardHeader({ className, children }: { className?: string; children: React.ReactNode }) {
  return <div className={cn('p-6 border-bottom border-zinc-100', className)}>{children}</div>;
}

export function CardContent({ className, children }: { className?: string; children: React.ReactNode }) {
  return <div className={cn('p-6', className)}>{children}</div>;
}

export function CardFooter({ className, children }: { className?: string; children: React.ReactNode }) {
  return <div className={cn('p-6 bg-zinc-50/50 border-top border-zinc-100', className)}>{children}</div>;
}
