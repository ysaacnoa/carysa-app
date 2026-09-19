import * as stylex from '@stylexjs/stylex';
import { colors, spacing, zIndex } from '@/styles/theme.stylex';

export const styles = stylex.create({
  container: {
    position: 'fixed',
    bottom: 0,
    left: 0,
    right: 0,
    maxWidth: '448px',
    marginInline: 'auto',
    padding: spacing.md,
    backgroundColor: colors.bgSurfaceTranslucent,
    backdropFilter: 'blur(12px)',
    borderTopWidth: '1px',
    borderTopStyle: 'solid',
    borderTopColor: colors.borderSubtle,
    zIndex: zIndex.nav,
  },
  content: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: spacing.xs,
  },
});