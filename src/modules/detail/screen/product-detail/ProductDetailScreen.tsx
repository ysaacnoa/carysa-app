import * as stylex from '@stylexjs/stylex';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';

import { ColorSelector } from '../../components/color-selector';
import { ImageCarousel } from '../../components/image-carousel';
import { NotFoundState } from '../../components/no-found-state';
import { OrderButton } from '../../components/order-button';
import { ProductInfo } from '../../components/product-info';
import { ProductMaterial } from '../../components/product-material';
import { SizeSelector } from '../../components/size-selector';

import { useProductDetailScreen } from '../../hooks/useProductDetailScreen';
import { styles } from './product-detail.styles';

export const ProductDetailScreen = () => {
  const {
    product,
    imagesList,
    currentImageIndex,
    setCurrentImageIndex,
    selectedSize,
    setSelectedSize,
    selectedColor,
    setSelectedColor,
    handleOrder,
    handleGoBack,
  } = useProductDetailScreen();

  if (!product) {
    return <NotFoundState onGoBack={handleGoBack} />;
  }

  return (
    <div {...stylex.props(styles.screen)}>
      <Button
        type="button"
        variant="floating"
        aria-label="Volver al catálogo"
        onClick={handleGoBack}
      >
        <ArrowLeft size={20} />
      </Button>

      <main {...stylex.props(styles.main)}>
        <ImageCarousel
          images={imagesList}
          productName={product.name}
          category={product.category}
          currentIndex={currentImageIndex}
          onIndexChange={setCurrentImageIndex}
        />

        <div {...stylex.props(styles.content)}>
          <ProductInfo
            name={product.name}
            price={product.price}
            description={product.description}
          />

          <ColorSelector
            colors={product.colors}
            selectedColor={selectedColor}
            onSelectColor={setSelectedColor}
          />

          <SizeSelector
            sizes={product.sizes}
            selectedSize={selectedSize}
            onSelectSize={setSelectedSize}
          />

          <ProductMaterial
            fabric={product.fabric}
            fabricDetails={product.fabricDetails}
          />
        </div>
      </main>

      <OrderButton selectedSize={selectedSize} onOrder={handleOrder} />
    </div>
  );
};