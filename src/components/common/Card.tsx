import type { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

const Card = ({ children, className = '', hover = true }: CardProps) => {
  const hoverEffect = hover
    ? 'cursor-pointer hover:shadow-2xl transition-shadow duration-200'
    : '';

  return (
    <div className={`bg-white rounded-2xl shadow-lg overflow-hidden ${hoverEffect} ${className}`}>
      {children}
    </div>
  );
};

export default Card;
