import * as stylex from '@stylexjs/stylex';
import type { ProductInfoProps } from './product-info.types';
import { styles } from './product-info.styles';

export const ProductInfo = ({ name, price, description }: ProductInfoProps) => {
  return (
    <div {...stylex.props(styles.container)}>
      <div {...stylex.props(styles.row)}>
        <h1 {...stylex.props(styles.name)}>{name}</h1>
        <span {...stylex.props(styles.price)}>S/ {price.toFixed(2)}</span>
      </div>
      {description && (
        <p {...stylex.props(styles.description)}>{description}</p>
      )}
    </div>
  );
};