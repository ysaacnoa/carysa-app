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
  base: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: fonts.sans,
    fontSize: fontSizes.caption,
    fontWeight: weights.bold,
    textTransform: 'uppercase',
    letterSpacing: '0.05em',
    borderRadius: radius.full,
    paddingBlock: spacing.xxs,
    paddingInline: spacing.sm,
    lineHeight: 1,
    whiteSpace: 'nowrap',
    userSelect: 'none',
  },

  // Variantes alineadas al Design System
  primary: {
    backgroundColor: colors.brandSalmonLight,
    color: colors.brandSalmonDark,
  },

  secondary: {
    backgroundColor: colors.bgSurfaceTranslucent,
    color: colors.textPrimary,
    boxShadow: shadows.subtle,
    borderWidth: '1px',
    borderStyle: 'solid',
    borderColor: colors.borderSubtle,
    backdropFilter: 'blur(4px)',
  },

  dark: {
    backgroundColor: colors.brandDark,
    color: colors.textInverse,
  },

  outline: {
    backgroundColor: 'transparent',
    color: colors.textPrimary,
    borderWidth: '1px',
    borderStyle: 'solid',
    borderColor: colors.borderMedium,
  },
});