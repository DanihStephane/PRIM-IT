import React from 'react';

interface AnimatedButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  type?: 'button' | 'submit';
  variant?: 'primary' | 'secondary';
  className?: string;
}

const AnimatedButton: React.FC<AnimatedButtonProps> = ({
  children,
  onClick,
  type = 'button',
  variant = 'primary',
  className = 'btn'
}) => {
  const variantClasses = {
    primary: 'btn-brand',
    secondary: 'btn-outline-brand'
  };

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${variantClasses[variant]} ${className}`.trim()}
    >
      {children}
    </button>
  );
};

export default AnimatedButton;