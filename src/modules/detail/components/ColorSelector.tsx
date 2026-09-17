export interface ColorOption {
  name: string;
  hex?: string;
}

interface ColorSelectorProps {
  colors?: ColorOption[];
  selectedColor: string;
  onSelectColor: (colorName: string) => void;
}

export const ColorSelector = ({
  colors,
  selectedColor,
  onSelectColor,
}: ColorSelectorProps) => {
  if (!colors || colors.length === 0) return null;

  return (
    <div className="space-y-2.5">
      <div className="flex items-center justify-between text-xs">
        <span className="font-semibold text-carysa-dark">Color</span>
        <span className="text-neutral-500 font-medium">{selectedColor}</span>
      </div>

      <div className="flex flex-wrap gap-3 items-center">
        {colors.map((color) => {
          const isSelected = selectedColor === color.name;

          return (
            <button
              key={color.name}
              onClick={() => onSelectColor(color.name)}
              className={`group relative flex items-center justify-center p-0.5 rounded-full transition-all cursor-pointer ${
                isSelected ? 'ring-2 ring-carysa-salmon ring-offset-2' : 'hover:scale-105'
              }`}
              title={color.name}
            >
              <span
                className="w-7 h-7 rounded-full border border-black/10 shadow-inner block"
                style={{ backgroundColor: color.hex || '#E5E5E5' }}
              />
            </button>
          );
        })}
      </div>
    </div>
  );
};