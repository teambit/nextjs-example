import React, { ReactNode, ButtonHTMLAttributes } from 'react';

export type ButtonProps = {
  children?: ReactNode;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export function Button({ children, ...rest }: ButtonProps) {
  return (
    <button {...rest}>
      {children}
    </button>
  );
}
