import {
  colors,
  fontSizes,
  radius,
  shadows,
  spacing,
  weights,
} from '@/styles/theme.stylex';
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
  guide: {
    backgroundColor: 'transparent',
    borderWidth: 0,
    padding: 0,
    color: colors.textBrand,
    fontWeight: weights.medium,
    cursor: 'pointer',
    fontFamily: 'inherit',
    fontSize: 'inherit',
    ':hover': {
      textDecoration: 'underline',
    },
  },
  options: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: spacing.xs,
  },
  option: {
    minWidth: '44px',
    height: '44px',
    paddingInline: spacing.md,
    borderRadius: radius['2xl'],
    fontSize: fontSizes.xs,
    fontWeight: weights.bold,
    borderWidth: '1px',
    borderStyle: 'solid',
    borderColor: colors.borderMedium,
    backgroundColor: colors.bgSurface,
    color: colors.textPrimary,
    transition: 'all 0.2s ease',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    outline: 'none',
    ':hover': {
      borderColor: colors.brandSalmon,
      color: colors.textBrand,
    },
    ':active': {
      transform: 'scale(0.95)',
    },
  },
  optionSelected: {
    backgroundColor: colors.brandSalmon,
    color: colors.textInverse,
    borderColor: colors.brandSalmon,
    boxShadow: shadows.glowSalmon,
    ':hover': {
      color: colors.textInverse,
    },
  },
});