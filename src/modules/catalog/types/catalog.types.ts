export interface CatalogItem {
  id: string;
  name: string;
  category: string;
  price: number;
  coverImage: string;
}

export type Category = 'Todos' | 'Blusas' | 'Pantalones' | 'Vestidos' | 'Casacas' | 'Polos';