import type { CatalogItem } from '../types/catalog.types';
import { ProductCard } from './ProductCard';

interface ProductGridProps {
  products: CatalogItem[];
}

export const ProductGrid = ({ products }: ProductGridProps) => {
  if (products.length === 0) {
    return (
      <div className="text-center py-12 text-carysa-gray text-xs">
        No encontramos prendas que coincidan con tu búsqueda.
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-5">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};