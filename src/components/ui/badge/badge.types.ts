import type { ReactNode } from 'react';

export type BadgeVariant = 'primary' | 'secondary' | 'dark' | 'outline';

export interface BadgeProps {
  children: ReactNode;
  variant?: BadgeVariant;
}