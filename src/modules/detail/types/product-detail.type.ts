export interface ColorVariant {
  name: string;
  hex: string;
  poses: string[];
}

export interface ProductDetail {
  id: string;
  name: string;
  price: number;
  wholesalePrice: number;
  fabricDetails: string;
  sizes: string[];
  colors: ColorVariant[];
  description: string;
}

export type ProductDetailsMap = Record<string, ProductDetail>;