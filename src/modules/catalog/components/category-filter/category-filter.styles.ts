import { spacing } from '@/styles/theme.stylex';
import * as stylex from '@stylexjs/stylex';


export const styles = stylex.create({
  nav: {
    display: 'flex',
    gap: spacing.xs,
    overflowX: 'auto',
    paddingBottom: spacing.sm,
    
    // Ocultar scrollbar de forma nativa en StyleX
    scrollbarWidth: 'none', // Firefox
    '::-webkit-scrollbar': {
      display: 'none', // Chrome, Safari, Edge
    },
  },
  
  // Ajuste para que el Button actúe como Chip compacto en el scroll
  chipButton: {
    whiteSpace: 'nowrap',
    flexShrink: 0,
    borderRadius: '9999px',
    paddingBlock: spacing.xs,
  },
});