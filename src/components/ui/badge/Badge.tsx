import * as stylex from '@stylexjs/stylex';
import type { BadgeProps } from './badge.types';
import { styles } from './badge.styles';

export const Badge = ({
  children,
  variant = 'secondary',
}: BadgeProps) => (
  <span {...stylex.props(styles.base, styles[variant])}>
    {children}
  </span>
);