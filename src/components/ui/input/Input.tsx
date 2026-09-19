import * as stylex from '@stylexjs/stylex';
import { styles } from './input.styles';
import type { InputProps } from './input.types';

export const Input = ({
  label,
  isSearch = false,
  ...props
}: InputProps) => (
  <div {...stylex.props(styles.wrapper)}>
    {label && <label {...stylex.props(styles.label)}>{label}</label>}
    <input
      {...props}
      {...stylex.props(
        styles.field,
        isSearch && styles.search
      )}
    />
  </div>
);