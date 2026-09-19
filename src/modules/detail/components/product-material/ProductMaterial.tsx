import * as stylex from '@stylexjs/stylex';
import { Sparkles } from 'lucide-react';
import type { ProductMaterialProps } from './product-material.types';
import { styles } from './product-material.styles';

export const ProductMaterial = ({
  fabric,
  fabricDetails,
}: ProductMaterialProps) => {
  if (!fabric && !fabricDetails) return null;

  return (
    <div {...stylex.props(styles.card)}>
      <div {...stylex.props(styles.header)}>
        <Sparkles size={14} />
        <span>Material & Detalle</span>
      </div>
      {fabric && <p {...stylex.props(styles.fabric)}>{fabric}</p>}
      {fabricDetails && (
        <p {...stylex.props(styles.details)}>{fabricDetails}</p>
      )}
    </div>
  );
};