export interface CatalogItem {
  id: string;
  name: string;
  category: string;
  fabric: string;
  price: number;
  mainImage: string;
}

export type Category = 'Todos' | 'Blusas' | 'Pantalones' | 'Vestidos' | 'Casacas' | 'Polos';