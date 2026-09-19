import type { ButtonHTMLAttributes, ReactNode } from 'react';
import type { ButtonVariant } from './button.styles';

export interface ButtonProps
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'className'> {
  variant?: ButtonVariant;
  fullWidth?: boolean;
  children?: ReactNode;
}