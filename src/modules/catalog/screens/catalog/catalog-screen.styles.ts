import { colors, shadows, spacing } from '@/styles/theme.stylex';
import * as stylex from '@stylexjs/stylex';

export const styles = stylex.create({
  screen: {
    minHeight: '100vh',
    paddingBottom: '80px',
    width: '100%',
    marginInline: 'auto',
    backgroundColor: colors.bgApp,
    position: 'relative',
    transition: 'max-width 0.3s ease, box-shadow 0.3s ease',

    // En pantallas grandes se expande fluido hasta un contenedor amplio
    '@media (min-width: 640px)': {
      maxWidth: '1200px',
      boxShadow: shadows.phone,
      borderLeftWidth: '1px',
      borderRightWidth: '1px',
      borderLeftStyle: 'solid',
      borderRightStyle: 'solid',
      borderLeftColor: 'rgba(239, 167, 155, 0.1)',
      borderRightColor: 'rgba(239, 167, 155, 0.1)',
    },
  },
  main: {
    marginTop: '124px',
    padding: spacing.md,
    '@media (min-width: 640px)': {
      padding: spacing.lg,
    },
  },
});