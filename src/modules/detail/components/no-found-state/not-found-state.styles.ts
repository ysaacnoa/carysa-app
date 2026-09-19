import * as stylex from '@stylexjs/stylex';
import { colors, fonts, fontSizes, spacing } from '@/styles/theme.stylex';

export const styles = stylex.create({
  container: {
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: spacing.md,
    textAlign: 'center',
    backgroundColor: colors.bgApp,
    gap: spacing.md,
  },
  message: {
    fontFamily: fonts.sans,
    fontSize: fontSizes.sm,
    color: colors.textSecondary,
    margin: 0,
    maxWidth: '320px',
    lineHeight: 1.5,
  },
});