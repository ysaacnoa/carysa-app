interface SizeSelectorProps {
  sizes?: string[];
  selectedSize: string;
  onSelectSize: (size: string) => void;
}

export const SizeSelector = ({
  sizes,
  selectedSize,
  onSelectSize,
}: SizeSelectorProps) => {
  if (!sizes || sizes.length === 0) return null;

  return (
    <div className="space-y-2.5">
      <div className="flex items-center justify-between text-xs">
        <span className="font-semibold text-carysa-dark">Talla</span>
        <button 
          type="button" 
          className="text-carysa-salmon hover:underline font-medium cursor-pointer"
        >
          Guía de tallas
        </button>
      </div>

      <div className="flex flex-wrap gap-2.5">
        {sizes.map((size) => {
          const isSelected = selectedSize === size;

          return (
            <button
              key={size}
              type="button"
              onClick={() => onSelectSize(size)}
              className={`min-w-11 h-11 px-4 rounded-2xl text-xs font-bold border transition-all duration-200 cursor-pointer flex items-center justify-center active:scale-95 ${
                isSelected
                  ? 'bg-carysa-salmon text-white border-carysa-salmon shadow-md shadow-carysa-salmon/20'
                  : 'bg-white text-carysa-dark border-neutral-200 hover:border-carysa-salmon/50 hover:text-carysa-salmon'
              }`}
            >
              {size}
            </button>
          );
        })}
      </div>
    </div>
  );
};