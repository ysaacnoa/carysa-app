import * as stylex from '@stylexjs/stylex';
import { styles } from './swatch.styles';
import type { SwatchProps } from './swatch.types';

export const Swatch = ({
  colorHex = '#E5E5E5',
  label,
  isSelected = false,
  onClick,
}: SwatchProps) => {
  return (
    <button
      type="button"
      onClick={onClick}
      title={label}
      aria-label={`Color ${label}`}
      aria-pressed={isSelected}
      {...stylex.props(styles.button, isSelected && styles.selected)}
    >
      <span
        {...stylex.props(styles.fill)}
        style={{ backgroundColor: colorHex }}
      />
    </button>
  );
};