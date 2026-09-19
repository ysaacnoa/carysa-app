import { radius, shadows } from '@/styles/theme.stylex';
import * as stylex from '@stylexjs/stylex';

export const styles = stylex.create({
  button: {
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '2px',
    borderRadius: radius.full,
    borderWidth: 0,
    backgroundColor: 'transparent',
    transition: 'transform 0.2s ease, box-shadow 0.2s ease',
    cursor: 'pointer',
    outline: 'none',

    ':hover': {
      transform: 'scale(1.08)',
    },
  },
  selected: {
    boxShadow: shadows.ringSalmon,
    ':hover': {
      transform: 'none',
    },
  },
  fill: {
    display: 'block',
    width: '28px',
    height: '28px',
    borderRadius: radius.full,
    borderWidth: '1px',
    borderStyle: 'solid',
    borderColor: 'rgba(0, 0, 0, 0.1)',
    boxShadow: 'inset 0 2px 4px rgba(0, 0, 0, 0.06)',
  },
});