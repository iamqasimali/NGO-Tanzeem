import type { ReactNode } from 'react';
import { Link } from 'react-router-dom';

interface ButtonProps {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  onClick?: () => void;
  href?: string;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
}

const focusRing =
  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-500 focus-visible:ring-offset-2';

const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  onClick,
  href,
  className = '',
  type = 'button',
}: ButtonProps) => {
  const baseStyles = `inline-flex cursor-pointer items-center justify-center font-semibold rounded-lg transition-colors duration-200 ${focusRing}`;

  const variantStyles = {
    primary: 'bg-accent-500 text-white hover:bg-accent-600 shadow-lg hover:shadow-xl',
    secondary: 'bg-primary-500 text-white hover:bg-primary-600 shadow-lg hover:shadow-xl',
    outline: 'border-2 border-white text-white hover:bg-white hover:text-primary-500',
  };

  const sizeStyles = {
    sm: 'min-h-[44px] px-4 py-2 text-sm',
    md: 'min-h-[44px] px-6 py-3 text-base',
    lg: 'min-h-[48px] px-8 py-4 text-lg',
  };

  const classes = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`;

  if (href) {
    const isInternal = href.startsWith('/') && !href.startsWith('//');
    if (isInternal) {
      return (
        <Link to={href} className={classes}>
          {children}
        </Link>
      );
    }
    return (
      <a href={href} className={classes} rel="noopener noreferrer" target="_blank">
        {children}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {children}
    </button>
  );
};

export default Button;
