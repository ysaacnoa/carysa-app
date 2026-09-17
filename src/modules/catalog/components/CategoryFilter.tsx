interface CategoryFilterProps {
  categories: string[];
  activeCategory: string;
  onSelectCategory: (category: string) => void;
}

export const CategoryFilter = ({ categories, activeCategory, onSelectCategory }: CategoryFilterProps) => {
  return (
    <div className="flex gap-2 overflow-x-auto py-2 px-4 no-scrollbar my-2">
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => onSelectCategory(cat)}
          className={`px-4 py-1.5 rounded-full text-xs font-medium whitespace-nowrap transition-all ${
            activeCategory === cat
              ? 'bg-carysa-salmon text-white shadow-sm'
              : 'bg-white text-carysa-gray border border-gray-200 hover:border-carysa-salmon'
          }`}
        >
          {cat}
        </button>
      ))}
    </div>
  );
};