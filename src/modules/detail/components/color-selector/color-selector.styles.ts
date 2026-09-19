import { colors, fontSizes, spacing, weights } from '@/styles/theme.stylex';
import * as stylex from '@stylexjs/stylex';

export const styles = stylex.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    gap: spacing.xs,
  },
  row: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    fontSize: fontSizes.xs,
  },
  label: {
    fontWeight: weights.semibold,
    color: colors.textPrimary,
  },
  value: {
    color: colors.neutral500,
    fontWeight: weights.medium,
  },
  options: {
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
    gap: spacing.sm,
  },
});