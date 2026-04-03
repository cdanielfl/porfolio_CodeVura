import React from 'react';
import { cn } from '../lib/utils';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: string;
  subtitle?: string;
  noPadding?: boolean;
  variant?: 'default' | 'accent' | 'dark';
}

export const Card: React.FC<CardProps> = ({ 
  children, 
  title, 
  subtitle, 
  className, 
  noPadding, 
  variant = 'default',
  ...props 
}) => {
  const variants = {
    default: "bg-white border-slate-200",
    accent: "bg-indigo-600 text-white border-indigo-600",
    dark: "bg-slate-900 text-white border-slate-900"
  };

  return (
    <div 
      className={cn(
        "border rounded-xl transition-all duration-500 group",
        variants[variant],
        className
      )} 
      {...props}
    >
      {(title || subtitle) && (
        <div className="flex items-end justify-between border-b border-slate-100 px-4 py-3 sm:px-6 sm:py-4">
          <div>
            {title && <h3 className="text-lg sm:text-xl font-semibold leading-none text-slate-900">{title}</h3>}
            {subtitle && <p className="mt-2 text-[10px] font-semibold uppercase tracking-widest text-slate-500">{subtitle}</p>}
          </div>
          <div className="h-2 w-2 rounded-full bg-indigo-200 transition-colors group-hover:bg-indigo-500" />
        </div>
      )}
      <div className={cn(noPadding ? "" : "p-4 sm:p-6")}>
        {children}
      </div>
    </div>
  );
};

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'outline' | 'danger';
  size?: 'sm' | 'md' | 'lg' | 'icon';
}

export const Button: React.FC<ButtonProps> = ({ 
  variant = 'primary', 
  size = 'md', 
  className, 
  children, 
  ...props 
}) => {
  const variants = {
    primary: "bg-indigo-600 text-white hover:bg-indigo-700 transition-all duration-300",
    secondary: "bg-white border border-slate-200 text-slate-900 hover:bg-slate-50",
    ghost: "bg-transparent text-slate-500 hover:text-slate-900 hover:bg-slate-100",
    outline: "bg-transparent border border-slate-300 text-slate-700 hover:bg-slate-900 hover:text-white",
    danger: "bg-red-500 text-white hover:bg-red-600"
  };

  const sizes = {
    sm: "px-3 py-1 text-[10px] font-semibold uppercase tracking-widest",
    md: "px-4 sm:px-5 py-2 text-[11px] sm:text-xs font-semibold uppercase tracking-widest",
    lg: "px-6 sm:px-8 py-3 text-xs sm:text-sm font-semibold uppercase tracking-widest",
    icon: "p-2"
  };

  return (
    <button 
      className={cn(
        "inline-flex items-center justify-center transition-all focus:outline-none disabled:opacity-50 disabled:pointer-events-none",
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export const Badge: React.FC<{ children: React.ReactNode, variant?: 'neutral' | 'success' | 'warning' | 'error' | 'info' }> = ({ children, variant = 'neutral' }) => {
  const variants = {
    neutral: "border-slate-300 text-slate-600 bg-slate-50",
    success: "border-emerald-200 text-emerald-700 bg-emerald-50",
    warning: "border-amber-200 text-amber-700 bg-amber-50",
    error: "border-red-200 text-red-700 bg-red-50",
    info: "border-indigo-200 text-indigo-700 bg-indigo-50"
  };

  return (
    <span className={cn("px-2 py-0.5 border text-[9px] font-semibold uppercase tracking-tighter", variants[variant])}>
      {children}
    </span>
  );
};

