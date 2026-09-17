import { useMemo } from 'react';
import catalogData from '../../catalog/data/products.json';
import productDetailsData from '../data/productDetails.json';
import type { CatalogItem } from '../../catalog/types/catalog.types';
import type { ProductDetail, ProductDetailsMap } from '../types/product-detail.type';


export interface FullProductDetail extends CatalogItem, ProductDetail {}

export function useProductDetail(id?: string): FullProductDetail | null {
  return useMemo(() => {
    if (!id) return null;

    // Búsqueda del elemento base en el catálogo
    const baseProduct = (catalogData as CatalogItem[]).find((p) => p.id === id);
    // Búsqueda O(1) del detalle extendido en el mapa
    const detailProduct = (productDetailsData as ProductDetailsMap)[id];

    if (!baseProduct || !detailProduct) return null;

    return {
      ...baseProduct,
      ...detailProduct,
    };
  }, [id]);
}