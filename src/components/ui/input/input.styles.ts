import {
  colors,
  fonts,
  fontSizes,
  radius,
  shadows,
  spacing,
  weights,
} from '@/styles/theme.stylex';
import * as stylex from '@stylexjs/stylex';

export const styles = stylex.create({
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    gap: spacing.xxs,
    width: '100%',
  },
  label: {
    fontFamily: fonts.sans,
    fontSize: fontSizes.caption,
    fontWeight: weights.bold,
    textTransform: 'uppercase',
    letterSpacing: '0.05em',
    color: colors.textSecondary,
  },
  field: {
    width: '100%',
    boxSizing: 'border-box',
    fontFamily: fonts.sans,
    fontSize: fontSizes.xs,
    color: colors.textPrimary,
    backgroundColor: colors.bgSurface,
    // Borde ligero por defecto
    borderWidth: '2px',
    borderStyle: 'solid',
    borderColor: colors.borderMedium,
    borderRadius: radius.lg,
    paddingBlock: spacing.sm,
    paddingInline: spacing.md,
    outline: 'none',
    transition: 'border-color 0.2s ease, box-shadow 0.2s ease',

    ':focus': {
      borderColor: colors.brandSalmon,
    },
  },
  search: {
    borderRadius: radius.lg,
    paddingBlock: spacing.xs,
    paddingLeft: '2.25rem',
    paddingRight: spacing.md,
    boxShadow: shadows.subtle,

    '::placeholder': {
      color: colors.textSecondary,
      opacity: 0.7,
    },

    ':focus': {
      borderColor: colors.brandSalmon,
      boxShadow: shadows.glowSalmon,
    },
  },
});