import React from 'react';
import { cn } from '@/lib/utils';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ 
  variant = 'primary', 
  size = 'md', 
  className, 
  children, 
  ...props 
}) => {
  const baseClasses = "inline-flex items-center justify-center gap-3.5 font-semibold text-center rounded-[50px] transition-all duration-200 hover:shadow-lg";
  
  const variants = {
    primary: "bg-[#197B55] text-white shadow-[0_6px_18px_0_rgba(0,0,0,0.08)] hover:bg-[#156B4A]",
    secondary: "bg-white text-[#197B55] border-2 border-[#197B55] hover:bg-[#197B55] hover:text-white"
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-[34px] py-3 text-base",
    lg: "px-8 py-4 text-lg"
  };

  return (
    <button 
      className={cn(baseClasses, variants[variant], sizes[size], className)}
      {...props}
    >
      {children}
    </button>
  );
};
