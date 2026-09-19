import * as stylex from '@stylexjs/stylex';
import {
  colors,
  fonts,
  fontSizes,
  spacing,
  weights,
} from '@/styles/theme.stylex';

export const styles = stylex.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
  },
  row: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'baseline',
    gap: spacing.md,
  },
  name: {
    fontFamily: fonts.serif,
    fontSize: fontSizes.xl2,
    fontWeight: weights.bold,
    color: colors.textPrimary,
    margin: 0,
    lineHeight: 1.2,
  },
  price: {
    fontFamily: fonts.sans,
    fontSize: fontSizes.xl,
    fontWeight: weights.bold,
    color: colors.textPrimary,
    whiteSpace: 'nowrap',
  },
  description: {
    fontFamily: fonts.sans,
    fontSize: fontSizes.xs,
    color: colors.textSecondary,
    marginTop: spacing.xs,
    marginBottom: 0,
    lineHeight: 1.6,
  },
});