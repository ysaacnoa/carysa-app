import * as stylex from '@stylexjs/stylex';
import {
  colors,
  fontSizes,
  radius,
  shadows,
  spacing,
  weights,
} from '@/styles/theme.stylex';

export const styles = stylex.create({
  card: {
    backgroundColor: colors.bgSurfaceTranslucent,
    backdropFilter: 'blur(4px)',
    padding: spacing.md,
    borderRadius: radius.xl,
    borderWidth: '1px',
    borderStyle: 'solid',
    borderColor: colors.borderSubtle,
    boxShadow: shadows.subtle,
    display: 'flex',
    flexDirection: 'column',
    gap: spacing.xxs,
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    gap: spacing.xxs,
    color: colors.textBrand,
    fontSize: fontSizes.xs,
    fontWeight: weights.semibold,
  },
  fabric: {
    fontSize: fontSizes.xs,
    fontWeight: weights.medium,
    color: colors.textPrimary,
    margin: 0,
  },
  details: {
    fontSize: fontSizes.caption,
    color: colors.textSecondary,
    lineHeight: 1.6,
    margin: 0,
  },
});