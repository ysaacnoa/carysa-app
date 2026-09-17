export interface ColorOption {
  name: string;
  hex: string;
}

export interface ProductDetail {
  id: string;
  fabricDetails: string;
  sizes: string[];
  colors: ColorOption[];
  images: string[];
  description: string;
}

// Tipo Diccionario indexado por el ID del producto
export type ProductDetailsMap = Record<string, ProductDetail>;