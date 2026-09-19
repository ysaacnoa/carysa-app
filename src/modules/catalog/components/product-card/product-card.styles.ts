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
  card: {
    backgroundColor: colors.bgSurfaceTranslucent,
    backdropFilter: 'blur(8px)',
    borderRadius: radius['2xl'],
    borderWidth: '1px',
    borderStyle: 'solid',
    borderColor: colors.borderSubtle,
    boxShadow: shadows.subtle,
    overflow: 'hidden',
    cursor: 'pointer',
    userSelect: 'none',
    touchAction: 'manipulation',
    WebkitTapHighlightColor: 'transparent',
    transition: 'transform 0.2s ease, box-shadow 0.2s ease',

    ':hover': {
      boxShadow: shadows.float,
    },
    ':active': {
      transform: 'scale(0.98)',
    },
  },
  imageWrap: {
    position: 'relative',
    aspectRatio: '4 / 5',
    width: '100%',
    backgroundColor: colors.neutral100,
    overflow: 'hidden',

    // Aplica zoom a la imagen cuando el contenedor card recibe hover
    ':hover img': {
      transform: 'scale(1.05)',
    },
  },
  image: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    objectPosition: 'top',
    transition: 'transform 300ms ease-out',
  },
  badgePosition: {
    position: 'absolute',
    top: spacing.xs,
    left: spacing.xs,
    zIndex: '1',
  },
  info: {
    padding: '14px',
    '@media (min-width: 640px)': {
      padding: spacing.md,
    },
  },
  name: {
    fontFamily: fonts.serif,
    fontSize: fontSizes.sm,
    fontWeight: weights.semibold,
    color: colors.textPrimary,
    lineHeight: 1.375,
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    margin: 0,
    '@media (min-width: 640px)': {
      fontSize: fontSizes.base,
    },
  },
  fabric: {
    fontFamily: fonts.sans,
    fontSize: fontSizes.xs,
    fontWeight: weights.regular,
    color: colors.textSecondary,
    lineHeight: 1.5,
    marginTop: spacing.xxs,
    marginBottom: 0,
  },
  fabricHighlight: {
    fontWeight: weights.medium,
    color: colors.textPrimary,
  },
  priceRow: {
    marginTop: spacing.xs,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: spacing.xs,
  },
  price: {
    fontSize: fontSizes.base,
    fontWeight: weights.bold,
    color: colors.textPrimary,
    whiteSpace: 'nowrap',
    '@media (min-width: 640px)': {
      fontSize: fontSizes.lg,
    },
  },
  actionText: {
    display: 'none',
    alignItems: 'center',
    fontSize: fontSizes.xs,
    fontWeight: weights.semibold,
    color: colors.textBrand,
    transition: 'color 0.2s ease',
    '@media (min-width: 640px)': {
      display: 'inline-flex',
    },
  },
});