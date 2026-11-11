import type { ColorVariant } from "../../types/product-detail.type";

export interface ColorSelectorProps {
  colors?: ColorVariant[];
  selectedColor: string;
  onSelectColor: (colorName: string) => void;
}