import { useState, useMemo } from 'react';
import productsData from '../data/products.json';
import type { CatalogItem } from '../types/catalog.types';

export function useCatalog() {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('Todos');

  const categories = useMemo(() => {
    const cats = Array.from(new Set(productsData.map((p) => p.category)));
    return ['Todos', ...cats];
  }, []);

  const filteredProducts = useMemo(() => {
    return (productsData as CatalogItem[]).filter((product) => {
      const matchesCategory = activeCategory === 'Todos' || product.category === activeCategory;
      const matchesSearch =
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.fabric.toLowerCase().includes(searchTerm.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [searchTerm, activeCategory]);

  return {
    products: filteredProducts,
    categories,
    searchTerm,
    setSearchTerm,
    activeCategory,
    setActiveCategory,
  };
}