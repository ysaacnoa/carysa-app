import * as stylex from '@stylexjs/stylex';
import {
  colors,
  radius,
  shadows,
  spacing,
  zIndex,
} from '@/styles/theme.stylex';

export const styles = stylex.create({
  root: {
    position: 'relative',
    width: '100%',
    backgroundColor: colors.neutral100,
    overflow: 'hidden',
  },
  badgePosition: {
    position: 'absolute',
    top: spacing.md,
    right: spacing.md,
    zIndex: zIndex.sticky,
  },
  slider: {
    display: 'flex',
    width: '100%',
    alignItems: 'flex-start',
    transition: 'transform 300ms ease-out',
  },
  image: {
    width: '100%',
    height: 'auto',
    display: 'block',
    flexShrink: 0,
    objectFit: 'contain',
  },
  dots: {
    position: 'absolute',
    bottom: spacing.md,
    left: 0,
    right: 0,
    zIndex: zIndex.sticky,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: spacing.xxs,
  },
  dot: {
    height: '6px',
    width: '6px',
    borderRadius: radius.full,
    borderWidth: 0,
    padding: spacing.none,
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    transition: 'all 0.2s ease',
    cursor: 'pointer',
    outline: 'none',
    boxShadow: shadows.subtle,
  },
  dotActive: {
    width: '24px',
    backgroundColor: colors.brandSalmon,
  },
});