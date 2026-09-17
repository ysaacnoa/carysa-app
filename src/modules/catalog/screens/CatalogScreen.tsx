import { Header } from '../../../components/Header';
import { BottomNav } from '../../../components/BottomNav';
import { CategoryFilter } from '../components/CategoryFilter';
import { ProductGrid } from '../components/ProductGrid';
import { useCatalog } from '../hooks/useCatalog';

export const CatalogScreen = () => {
  const { products, categories, searchTerm, setSearchTerm, activeCategory, setActiveCategory } = useCatalog();

  return (
    <div className="min-h-screen pb-20 max-w-md mx-auto bg-carysa-cream shadow-2xl relative border-x border-carysa-salmon/10">
      <Header searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

      <main className="p-4">
        <CategoryFilter
          categories={categories}
          activeCategory={activeCategory}
          onSelectCategory={setActiveCategory}
        />

        <div className="mt-3">
          <ProductGrid products={products} />
        </div>
      </main>

      <BottomNav />
    </div>
  );
};