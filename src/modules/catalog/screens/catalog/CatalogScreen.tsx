import { BottomNav } from '@/components/ui/bottom-nav';
import * as stylex from '@stylexjs/stylex';
import { CategoryFilter } from '../../components/category-filter';
import { Header } from '../../components/header';
import { ProductGrid } from '../../components/product-grid';
import { useCatalog } from '../../hooks/useCatalog';
import { styles } from './catalog-screen.styles';

export const CatalogScreen = () => {
  const {
    products,
    categories,
    searchTerm,
    setSearchTerm,
    activeCategory,
    setActiveCategory,
  } = useCatalog();

  return (
    <div {...stylex.props(styles.screen)}>
      <Header searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

      <main {...stylex.props(styles.main)}>
        <CategoryFilter
          categories={categories}
          activeCategory={activeCategory}
          onSelectCategory={setActiveCategory}
        />
        <ProductGrid products={products} />
      </main>

      <BottomNav />
    </div>
  );
};