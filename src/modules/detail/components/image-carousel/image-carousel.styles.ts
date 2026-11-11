import * as stylex from '@stylexjs/stylex';
import {
  colors,
  radius,
  shadows,
  spacing,
} from '@/styles/theme.stylex';

export const styles = stylex.create({
  root: {
    position: 'relative', // Obligatorio para que los absolute hijos se posicionen aquí
    width: '100%',
    backgroundColor: colors.neutral100,
    overflow: 'hidden',
    borderRadius: '20px',
  },
  badgePosition: {
    position: 'absolute',
    top: spacing.md,
    right: spacing.md,
    zIndex: 10,
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
  
  // Botones de navegación laterales optimizados
  navButton: {
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
    zIndex: 20, // Aseguramos que estén por encima de la imagen y el slider
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    color: colors.textPrimary,
    borderWidth: 0,
    borderRadius: radius.full,
    width: '40px',
    height: '40px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    boxShadow: shadows.subtle,
    backdropFilter: 'blur(4px)',
    transition: 'all 0.2s ease',
    ':hover': {
      backgroundColor: colors.bgSurface,
      transform: 'translateY(-50%) scale(1.08)',
    },
  },
  prevButton: {
    left: spacing.md,
  },
  nextButton: {
    right: spacing.md,
  },

  dots: {
    position: 'absolute',
    bottom: spacing.md,
    left: 0,
    right: 0,
    zIndex: 10,
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