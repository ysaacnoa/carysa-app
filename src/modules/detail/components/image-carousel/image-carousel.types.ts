export interface ImageCarouselProps {
  images: string[];
  productName: string;
  category?: string;
  currentIndex: number;
  onIndexChange: (index: number) => void;
}