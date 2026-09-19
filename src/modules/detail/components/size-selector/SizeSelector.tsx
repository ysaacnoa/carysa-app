import * as stylex from '@stylexjs/stylex';
import { styles } from './size-selector.styles';
import type { SizeSelectorProps } from './size-selector.types';

export const SizeSelector = ({
  sizes,
  selectedSize,
  onSelectSize,
  onOpenSizeGuide,
}: SizeSelectorProps) => {
  if (!sizes || sizes.length === 0) return null;

  return (
    <div {...stylex.props(styles.container)}>
      <div {...stylex.props(styles.row)}>
        <span {...stylex.props(styles.label)}>Talla</span>
        <button
          type="button"
          onClick={onOpenSizeGuide}
          {...stylex.props(styles.guide)}
        >
          Guía de tallas
        </button>
      </div>

      <div {...stylex.props(styles.options)}>
        {sizes.map((size) => {
          const isSelected = selectedSize === size;

          return (
            <button
              key={size}
              type="button"
              onClick={() => onSelectSize(size)}
              aria-pressed={isSelected}
              aria-label={`Talla ${size}`}
              {...stylex.props(
                styles.option,
                isSelected && styles.optionSelected
              )}
            >
              {size}
            </button>
          );
        })}
      </div>
    </div>
  );
};