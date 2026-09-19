// product-grid.styles.ts
import * as stylex from '@stylexjs/stylex';
import { colors, fontSizes, spacing } from '@/styles/theme.stylex';

export const styles = stylex.create({
  empty: {
    textAlign: 'center',
    paddingBlock: '48px',
    color: colors.brandGray,
    fontSize: fontSizes.sm,
  },
  grid: {
    display: 'grid',
    // Mobile por defecto: 1 sola columna para resaltar la prenda
    gridTemplateColumns: 'minmax(0, 1fr)',
    gap: spacing.md,

    // Adaptación progresiva si el contenedor crece en tablets o desktop
    '@media (min-width: 640px)': {
      gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
      gap: spacing.lg,
    },
    '@media (min-width: 1024px)': {
      gridTemplateColumns: 'repeat(3, minmax(0, 1fr))',
    },
    '@media (min-width: 1280px)': {
      gridTemplateColumns: 'repeat(4, minmax(0, 1fr))',
    },
  },
});