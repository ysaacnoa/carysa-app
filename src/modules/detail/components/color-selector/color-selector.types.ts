import type { ColorOption } from "../../types/product-detail.type";

export interface ColorSelectorProps {
  colors?: ColorOption[];
  selectedColor: string;
  onSelectColor: (colorName: string) => void;
}