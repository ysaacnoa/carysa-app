import { Swatch } from '@/components/ui/swatch';
import * as stylex from '@stylexjs/stylex';
import { styles } from './color-selector.styles';
import type { ColorSelectorProps } from './color-selector.types';

export const ColorSelector = ({
  colors: colorOptions,
  selectedColor,
  onSelectColor,
}: ColorSelectorProps) => {
  if (!colorOptions || colorOptions.length === 0) return null;

  return (
    <div {...stylex.props(styles.container)}>
      <div {...stylex.props(styles.row)}>
        <span {...stylex.props(styles.label)}>Color</span>
        <span {...stylex.props(styles.value)}>{selectedColor}</span>
      </div>

      <div {...stylex.props(styles.options)}>
        {colorOptions.map((color) => (
          <Swatch
            key={color.name}
            label={color.name}
            colorHex={color.hex}
            isSelected={selectedColor === color.name}
            onClick={() => onSelectColor(color.name)}
          />
        ))}
      </div>
    </div>
  );
};