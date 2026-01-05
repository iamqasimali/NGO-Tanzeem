import { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

const Card = ({ children, className = '', hover = true }: CardProps) => {
  const hoverEffect = hover
    ? 'hover:shadow-2xl hover:transform hover:scale-105 transition-all duration-300'
    : '';

  return (
    <div className={`bg-white rounded-2xl shadow-lg overflow-hidden ${hoverEffect} ${className}`}>
      {children}
    </div>
  );
};

export default Card;
