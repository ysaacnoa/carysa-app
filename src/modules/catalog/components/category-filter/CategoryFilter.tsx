import * as stylex from '@stylexjs/stylex';

import type { CategoryFilterProps } from './category-filter.types';
import { styles } from './category-filter.styles';
import { Button } from '@/components/ui/button';

export const CategoryFilter = ({
  categories,
  activeCategory,
  onSelectCategory,
}: CategoryFilterProps) => (
  <nav {...stylex.props(styles.nav)}>
    {categories.map((category) => {
      const isSelected = activeCategory === category;

      return (
        <Button
          key={category}
          type="button"
          variant={isSelected ? 'primary' : 'outline'}
          aria-pressed={isSelected}
          onClick={() => onSelectCategory(category)}
        >
          {category}
        </Button>
      );
    })}
  </nav>
);