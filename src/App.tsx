import * as stylex from '@stylexjs/stylex';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { colors, fonts } from './styles/theme.stylex';
import { CatalogScreen } from './modules/catalog';
import { ScrollToTop } from './shared/components/ScrollToTop';
import { ProductDetailScreen } from './modules/detail';

const styles = stylex.create({
  shell: {
    minHeight: '100vh',
    backgroundColor: colors.neutral100,
    fontFamily: fonts.sans,
    color: colors.textPrimary,
  },
  productRouteWrapper: {
    minHeight: '100vh',
    backgroundColor: colors.bgApp,
    position: 'relative',
    width: '100%',
    maxWidth: {
      default: '448px',
      '@media (min-width: 768px)': '100%',
    },
    marginInline: 'auto',
    boxShadow: {
      default: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
      '@media (min-width: 768px)': 'none',
    },
    borderLeftWidth: {
      default: 1,
      '@media (min-width: 768px)': 0,
    },
    borderRightWidth: {
      default: 1,
      '@media (min-width: 768px)': 0,
    },
    borderLeftColor: 'rgba(239, 167, 155, 0.1)',
    borderRightColor: 'rgba(239, 167, 155, 0.1)',
  },
});

export function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div {...stylex.props(styles.shell)}>
        <Routes>
          <Route path="/" element={<CatalogScreen />} />
          <Route
            path="/product/:id"
            element={
              <div {...stylex.props(styles.productRouteWrapper)}>
                <ProductDetailScreen />
              </div>
            }
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;