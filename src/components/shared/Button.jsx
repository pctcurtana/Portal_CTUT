import React from 'react';
import { ArrowRightIcon } from '@heroicons/react/24/outline';

export const Button = ({ 
  children, 
  variant = 'primary',
  className = '', 
  icon = false,
  ...props 
}) => {
  const baseStyles = "inline-flex items-center font-medium rounded-full transition-colors";
  const variants = {
    primary: "bg-[rgb(36,67,128)] hover:bg-[rgb(56,92,165)] text-white",
    login: "bg-white text-[#244380] hover:bg-white/80", 
    secondary: "bg-[rgb(56,92,165)] hover:bg-white hover:text-[rgb(36,67,128)]",
    outline: "border-2 border-[rgb(36,67,128)] text-[rgb(36,67,128)] hover:bg-[rgb(36,67,128)] hover:text-white"
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
      {icon && <ArrowRightIcon className="h-4 w-4 ml-2" />}
    </button>
  );
};