export interface SizeSelectorProps {
  sizes?: string[];
  selectedSize: string;
  onSelectSize: (size: string) => void;
  onOpenSizeGuide?: () => void;
}