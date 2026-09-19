import * as stylex from '@stylexjs/stylex';
import { buttonStyles } from './button.styles';
import type { ButtonProps } from './button.types';

export const Button = ({
  variant = 'primary',
  fullWidth = false,
  children,
  ...props
}: ButtonProps) => {
  return (
    <button
      {...props}
      {...stylex.props(
        buttonStyles.base,
        buttonStyles[variant],
        fullWidth ? buttonStyles.fullWidth : buttonStyles.autoWidth,
      )}
    >
      {children}
    </button>
  );
};