import { useState } from 'react';

interface ImageCarouselProps {
  images: string[];
  productName: string;
  category?: string;
  currentIndex: number;
  onIndexChange: (index: number) => void;
}

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

    const newLocal = "absolute top-4 right-4 z-20 bg-white/90 backdrop-blur-md text-carysa-dark text-[10px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-full shadow-sm";
  return (
    <div className="relative w-full bg-neutral-100 overflow-hidden">
      {category && (
        <span className={newLocal}>
          {category}
        </span>
      )}

      {/* Slider Container - Usa items-start para que el slider tome la altura de la imagen actual */}
      <div
        className="flex w-full items-start transition-transform duration-300 ease-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
      >
        {images.map((img, idx) => (
          <img
            key={idx}
            src={img}
            alt={`${productName} - Vista ${idx + 1}`}
            className="w-full h-auto block shrink-0 object-contain"
          />
        ))}
      </div>

      {/* Indicadores / Dots */}
      {images.length > 1 && (
        <div className="absolute bottom-4 left-0 right-0 z-20 flex justify-center items-center gap-1.5">
          {images.map((_, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => onIndexChange(idx)}
              aria-label={`Ver imagen ${idx + 1}`}
              className={`h-1.5 rounded-full transition-all cursor-pointer ${
                currentIndex === idx ? 'w-6 bg-carysa-salmon' : 'w-1.5 bg-white/70'
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
};