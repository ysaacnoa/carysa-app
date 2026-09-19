import {
  colors,
  fonts,
  fontSizes,
  radius,
  shadows,
  spacing,
  weights,
  zIndex,
} from '@/styles/theme.stylex';
import * as stylex from '@stylexjs/stylex';

export const buttonStyles = stylex.create({
  base: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: fonts.sans,
    fontWeight: weights.bold,
    transition: 'transform 0.15s ease, background-color 0.2s ease, box-shadow 0.2s ease',
    cursor: 'pointer',
    userSelect: 'none',
    borderWidth: 0,
    borderStyle: 'none',
    outline: 'none',
    ':active': {
      transform: 'scale(0.98)',
    },
  },

  primary: {
    backgroundColor: colors.brandSalmon,
    color: colors.textInverse,
    paddingBlock: spacing.sm,
    paddingInline: spacing.md,
    fontSize: fontSizes.sm,
    borderRadius: radius.xl,
    boxShadow: shadows.glowSalmon,
  },

  secondary: {
    backgroundColor: colors.brandDark,
    color: colors.textInverse,
    paddingBlock: spacing.sm,
    paddingInline: spacing.md,
    fontSize: fontSizes.sm,
    borderRadius: radius.xl,
  },

  outline: {
    backgroundColor: 'transparent',
    borderWidth: '1px',
    borderStyle: 'solid',
    borderColor: colors.borderMedium,
    color: colors.textPrimary,
    paddingBlock: spacing.sm,
    paddingInline: spacing.md,
    fontSize: fontSizes.xs,
    borderRadius: radius.xl,
  },

  floating: {
    position: 'fixed',
    top: spacing.md,
    left: spacing.md,
    zIndex: zIndex.header,
    width: '40px',
    height: '40px',
    minWidth: '40px',
    minHeight: '40px',
    aspectRatio: '1/1',
    flexShrink: spacing.none,
    borderRadius: radius.full,
    backgroundColor: colors.bgSurfaceTranslucent,
    backdropFilter: 'blur(12px)',
    color: colors.textPrimary,
    boxShadow: shadows.float,
    padding: spacing.none,
  },

  fullWidth: {
    width: '100%',
  },
  
  autoWidth: {
    width: 'auto',
  },
});

export type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'floating';