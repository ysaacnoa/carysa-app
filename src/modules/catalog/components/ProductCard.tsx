import { useNavigate } from 'react-router-dom';
import type { CatalogItem } from '../types/catalog.types';

export const ProductCard = ({ product }: { product: CatalogItem }) => {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/product/${product.id}`)}
      className="group bg-white rounded-2xl overflow-hidden border border-carysa-salmon/15 shadow-sm cursor-pointer transition-all duration-200 hover:shadow-md active:scale-[0.98] select-none touch-manipulation"
      style={{ WebkitTapHighlightColor: 'transparent' }}
    >
      <div className="relative aspect-4/5 w-full bg-neutral-100 overflow-hidden">
        <img
          src={product.mainImage}
          alt={product.name}
          className="w-full h-full object-cover object-top transition-transform duration-300 group-hover:scale-105"
          loading="lazy"
        />
        <span className="absolute top-3 left-3 bg-white/95 backdrop-blur-sm text-carysa-dark text-10px font-semibold px-2.5 py-1 rounded-full uppercase tracking-wider shadow-xs">
          {product.category}
        </span>
      </div>

      <div className="p-3.5 sm:p-4">
        <h3 className="text-sm sm:text-base font-semibold text-carysa-dark leading-snug line-clamp-1">
          {product.name}
        </h3>
        <p className="text-xs text-carysa-gray mt-1">
          Tela: <span className="font-medium">{product.fabric}</span>
        </p>

        <div className="mt-3 flex items-center justify-between gap-2">
          <span className="text-base sm:text-lg font-bold text-carysa-dark whitespace-nowrap">
            S/.{product.price.toFixed(2)}
          </span>

          <span className="hidden sm:inline-flex text-xs font-semibold text-carysa-salmon bg-carysa-cream px-3 py-1.5 rounded-full group-hover:bg-carysa-salmon group-hover:text-white transition-colors">
            Ver detalle
          </span>
        </div>
      </div>
    </div>
  );
};