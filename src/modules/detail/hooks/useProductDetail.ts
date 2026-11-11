import { useState, useEffect } from 'react';
import type { CatalogItem } from '../../catalog/types/catalog.types';
import type { ProductDetail } from '../types/product-detail.type';

export interface FullProductDetail extends CatalogItem, ProductDetail {}

export function useProductDetail(id?: string): FullProductDetail | null {
  const [fullProduct, setFullProduct] = useState<FullProductDetail | null>(null);

  useEffect(() => {
    if (!id) return;

    Promise.all([
      fetch('/catalog/data/products.json').then((res) => res.json()),
      fetch(`/detail/data/${id}.json`).then((res) => {
        if (!res.ok) throw new Error(`No se encontró el detalle para ${id}`);
        return res.json();
      })
    ])
      .then(([catalogData, detailProduct]) => {
        const baseProduct = (catalogData as CatalogItem[]).find((p) => p.id === id);

        if (!baseProduct) {
          setFullProduct(null);
          return;
        }
        
        setFullProduct({
          ...baseProduct,
          ...detailProduct,
        });
      })
      .catch((err) => {
        console.error('Error al cargar el micromanejo del detalle:', err);
        setFullProduct(null);
      });
  }, [id]);

  return fullProduct;
}