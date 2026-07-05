import { ButtonHTMLAttributes, ElementType } from 'react';
import clsx from 'clsx';

interface IconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon: ElementType;
  variant?: 'primary' | 'secondary' | 'ghost';
  'aria-label': string;
}

export const IconButton = ({ icon: Icon, variant = 'primary', className, ...props }: IconButtonProps) => {
  const baseClasses = 'flex items-center justify-center p-2.5 rounded-full transition-all duration-300 focus:outline-none focus:ring-1 focus:ring-zinc-500 disabled:opacity-50 disabled:cursor-not-allowed shrink-0';
  
  const variantClasses = {
    primary: 'bg-zinc-100 text-zinc-900 hover:bg-white hover:scale-105 shadow-sm',
    secondary: 'bg-zinc-800 text-zinc-300 hover:bg-zinc-700 hover:text-white',
    ghost: 'bg-transparent text-zinc-500 hover:text-zinc-200 hover:bg-zinc-800/50',
  };

  return (
    <button className={clsx(baseClasses, variantClasses[variant], className)} {...props}>
      <Icon size={18} strokeWidth={2.5} />
    </button>
  );
};
