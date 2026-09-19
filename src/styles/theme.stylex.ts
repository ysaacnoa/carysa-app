// src/styles/theme.stylex.ts
import * as stylex from '@stylexjs/stylex';

export const colors = stylex.defineVars({
  brandSalmon: '#EFA79B',
  brandSalmonLight: '#F9DDD7',
  brandSalmonDark: '#D98A7E',
  brandCream: '#FAF7F5',
  brandDark: '#2C2828',
  brandGray: '#736B69',

  bgApp: '#FAF7F5',
  bgSurface: '#FFFFFF',
  bgSurfaceTranslucent: 'rgba(255, 255, 255, 0.85)',

  textPrimary: '#2C2828',
  textSecondary: '#736B69',
  textBrand: '#EFA79B',
  textInverse: '#FFFFFF',

  borderSubtle: '#F0ECE9',
  borderMedium: '#E2DDD9',
  borderActive: '#EFA79B',

  neutral100: '#F5F5F5',
  neutral200: '#E5E5E5',
  neutral500: '#737373',
  neutral600: '#525252',
});

export const spacing = stylex.defineVars({
  none: '0',
  xxs: '0.25rem',
  xs: '0.5rem',
  sm: '0.75rem',
  md: '1rem',
  lg: '1.25rem',
  xl: '1.5rem',
});

// Corregido: Todos los radios ahora llevan 'px' explícito
export const radius = stylex.defineVars({
  xs: '6px',
  sm: '8px',
  md: '12px',
  lg: '16px',
  xl: '20px',
  '2xl': '24px',
  full: '9999px',
});

export const shadows = stylex.defineVars({
  subtle: '0 2px 8px rgba(44, 40, 40, 0.04)',
  card: '0 4px 16px rgba(44, 40, 40, 0.06)',
  float: '0 8px 24px rgba(44, 40, 40, 0.12)',
  glowSalmon: '0 4px 14px rgba(239, 167, 155, 0.35)',
  ringSalmon: '0 0 0 4px rgba(255, 255, 255, 1), 0 0 0 6px #EFA79B',
  phone: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
});

export const fonts = stylex.defineVars({
  serif: "'Playfair Display', serif",
  sans: "'Inter', sans-serif",
});

// Corregido: Se agregaron unidades 'px' (o 'rem') para que el navegador aplique los tamaños
export const fontSizes = stylex.defineVars({
  caption: '10px',
  xs: '12px',
  sm: '14px',
  base: '16px',
  lg: '18px',
  xl: '20px',
  xl2: '24px',
  xl3: '30px',
});

// Corregido: Convertidos a string para garantizar validez en reglas CSS compiladas
export const weights = stylex.defineVars({
  regular: '400',
  medium: '500',
  semibold: '600',
  bold: '700',
});

// Corregido: Convertidos a string para compatibilidad de tipos
export const zIndex = stylex.defineVars({
  sticky: '10',
  nav: '30',
  header: '40',
  modal: '50',
});