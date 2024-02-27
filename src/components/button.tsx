"use client"

import { ReactNode } from 'react';

type ButtonProps = {
  children: string | ReactNode;
  color?: string;
  className?: string;
} & (
  | { onClick: () => void; type?: 'button' }
  | { onClick?: () => void; type: 'submit' }
);

const Button = ({ onClick, children, color = 'blue', type = 'button', className = '' }: ButtonProps) => (
  <button
    type={type}
    onClick={() => onClick && onClick() || undefined}
    className={`bg-${color}-400 hover:bg-${color}-700 active:bg-${color}-700 border border-gray-400 text-center inline-flex items-center px-5 py-2 text-white ${className}`}>
    {children}
  </button>
);

export default Button;
