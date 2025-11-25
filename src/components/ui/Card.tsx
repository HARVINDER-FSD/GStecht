import { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

export const Card = ({ children, className = '', hover = false }: CardProps) => {
  const hoverStyles = hover ? 'hover:shadow-2xl hover:-translate-y-2 hover:scale-105 cursor-pointer' : '';

  return (
    <div className={`bg-white rounded-xl shadow-lg p-6 transition-all duration-300 border border-gray-100 ${hoverStyles} ${className}`}>
      {children}
    </div>
  );
};
