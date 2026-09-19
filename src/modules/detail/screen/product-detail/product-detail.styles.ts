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
    paddingBottom: '112px',
    position: 'relative',
    animationName: fadeIn,
    animationDuration: '200ms',
    animationTimingFunction: 'ease-out',
  },
  main: {
    flex: 1,
  },
  content: {
    padding: spacing.lg,
    display: 'flex',
    flexDirection: 'column',
    gap: spacing.xl,
  },
});