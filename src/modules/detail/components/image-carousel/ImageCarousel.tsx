import { useState } from 'react';
import * as stylex from '@stylexjs/stylex';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import type { ImageCarouselProps } from './image-carousel.types';
import { styles } from './image-carousel.styles';

export const ImageCarousel = ({
  images,
  productName,
  category,
  currentIndex,
  onIndexChange,
}: ImageCarouselProps) => {
  const [touchStart, setTouchStart] = useState<number | null>(null);

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (touchStart === null) return;
    const touchEnd = e.targetTouches[0].clientX;
    const diff = touchStart - touchEnd;

    if (diff > 50) {
      if (currentIndex < images.length - 1) {
        onIndexChange(currentIndex + 1);
      }
      setTouchStart(null);
    } else if (diff < -50) {
      if (currentIndex > 0) {
        onIndexChange(currentIndex - 1);
      }
      setTouchStart(null);
    }
  };

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (currentIndex > 0) {
      onIndexChange(currentIndex - 1);
    } else {
      onIndexChange(images.length - 1); // Ciclo al final opcional
    }
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (currentIndex < images.length - 1) {
      onIndexChange(currentIndex + 1);
    } else {
      onIndexChange(0); // Vuelve al inicio opcional
    }
  };

  return (
    <div {...stylex.props(styles.root)}>
      {category && (
        <div {...stylex.props(styles.badgePosition)}>
          <Badge variant="secondary">{category}</Badge>
        </div>
      )}

      {/* Botón Anterior (Desktop / Click) */}
      {images.length > 1 && (
        <button
          type="button"
          onClick={handlePrev}
          aria-label="Imagen anterior"
          {...stylex.props(styles.navButton, styles.prevButton)}
        >
          <ChevronLeft size={20} />
        </button>
      )}

      <div
        {...stylex.props(styles.slider)}
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
      >
        {images.map((img, idx) => (
          <img
            key={idx}
            src={img}
            alt={`${productName} - Vista ${idx + 1}`}
            {...stylex.props(styles.image)}
          />
        ))}
      </div>

      {images.length > 1 && (
        <button
          type="button"
          onClick={handleNext}
          aria-label="Imagen siguiente"
          {...stylex.props(styles.navButton, styles.nextButton)}
        >
          <ChevronRight size={20} />
        </button>
      )}

      {images.length > 1 && (
        <div {...stylex.props(styles.dots)}>
          {images.map((_, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => onIndexChange(idx)}
              aria-label={`Ver imagen ${idx + 1}`}
              {...stylex.props(styles.dot, currentIndex === idx && styles.dotActive)}
            />
          ))}
        </div>
      )}
    </div>
  );
};