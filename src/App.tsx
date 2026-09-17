import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { CatalogScreen } from './modules/catalog';
import { ScrollToTop } from './shared/components/ScrollToTop';
import { ProductDetailScreen } from './modules/detail';

export function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="bg-neutral-100 min-h-screen">
        <Routes>
          <Route path="/" element={<CatalogScreen />} />
          <Route
            path="/product/:id"
            element={
              <div className="max-w-md mx-auto bg-carysa-cream shadow-2xl relative border-x border-carysa-salmon/10">
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