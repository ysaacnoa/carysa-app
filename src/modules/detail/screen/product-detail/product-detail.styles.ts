import * as stylex from '@stylexjs/stylex';
import { colors, spacing } from '@/styles/theme.stylex';

const fadeIn = stylex.keyframes({
  from: { opacity: 0 },
  to: { opacity: 1 },
});

export const styles = stylex.create({
  screen: {
    minHeight: '100vh',
    backgroundColor: colors.bgApp,
    display: 'flex',
    flexDirection: 'column',
    paddingBottom: {
      default: '112px',
      '@media (min-width: 768px)': spacing.xl,
    },
    position: 'relative',
    animationName: fadeIn,
    animationDuration: '200ms',
    animationTimingFunction: 'ease-out',
  },
  
  main: {
    flex: 1,
    width: '100%',
    maxWidth: '1200px',
    marginInline: 'auto',
    padding: {
      default: spacing.md,
      '@media (min-width: 768px)': spacing.xl,
    },
    display: {
      default: 'flex',
      '@media (min-width: 768px)': 'grid',
    },
    flexDirection: 'column',
    gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
    gap: {
      default: spacing.xl,
      '@media (min-width: 768px)': '48px',
    },
    alignItems: 'start',
  },

  content: {
    display: 'flex',
    flexDirection: 'column',
    gap: spacing.xl,
    '@media (min-width: 768px)': {
      backgroundColor: colors.bgSurface,
      padding: spacing.xl,
      borderRadius: '24px',
      borderWidth: '1px',
      borderStyle: 'solid',
      borderColor: colors.borderActive,
      boxShadow: '0 4px 20px rgba(0, 0, 0, 0.03)',
    },
  },
});