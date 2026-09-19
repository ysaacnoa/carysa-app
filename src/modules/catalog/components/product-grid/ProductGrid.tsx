import * as stylex from '@stylexjs/stylex';

import type { ProductGridProps } from './product-grid.types';
import { styles } from './product-grid.styles';
import { ProductCard } from '../product-card';

export const ProductGrid = ({ products }: ProductGridProps) => {
  if (products.length === 0) {
    return (
      <p {...stylex.props(styles.empty)}>
        No encontramos prendas que coincidan con tu búsqueda.
      </p>
    );
  }

  return (
    <div {...stylex.props(styles.grid)}>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};