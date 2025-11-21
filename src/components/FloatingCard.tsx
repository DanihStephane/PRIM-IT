import React from 'react';

interface FloatingCardProps {
  children: React.ReactNode;
  className?: string;
  hoverScale?: boolean;
}

const FloatingCard: React.FC<FloatingCardProps> = ({ 
  children, 
  className = '',
  hoverScale = true 
}) => {
  return (
    <div className={`floating-card ${hoverScale ? 'floating-card-hover' : ''} ${className}`.trim()}>
      {children}
    </div>
  );
};

export default FloatingCard;