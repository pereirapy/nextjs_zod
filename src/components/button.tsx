'use client';

import { cn } from '@/utils/cn';
import { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from 'react';

type ButtonProps = DetailedHTMLProps<
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'onClick'>,
  HTMLButtonElement
> & {
  children: string | ReactNode;
  color?: string;
  className?: string;
  onClick?: () => void | undefined;
};

const Button = ({
  onClick,
  children,
  color = 'blue',
  className = '',
  ...rest
}: ButtonProps) => (
  <button
    {...rest}
    onClick={() => (onClick && onClick()) || undefined}
    className={cn(
      `bg-${color}-400 hover:bg-${color}-700 active:bg-${color}-700 border border-gray-400 text-center inline-flex items-center px-5 py-2 text-white`,
      className,
    )}>
    {children}
  </button>
);

export default Button;
