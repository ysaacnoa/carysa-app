import { useProductDetailScreen } from '../hooks/useProductDetailScreen';
import { NotFoundState } from '../components/NotFoundState';
import { DetailHeader } from '../components/DetailHeader';
import { ProductInfo } from '../components/ProductInfo';
import { ImageCarousel } from '../components/ImageCarousel';
import { ColorSelector } from '../components/ColorSelector';
import { SizeSelector } from '../components/SizeSelector';
import { MaterialInfoCard } from '../components/MaterialInfoCard';
import { OrderButton } from '../components/OrderButton';

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
    <div className="min-h-screen bg-carysa-cream flex flex-col pb-28 animate-in fade-in duration-200 relative">
      <DetailHeader onGoBack={handleGoBack} />

      <main className="flex-1">
        <ImageCarousel
          images={imagesList}
          productName={product.name}
          category={product.category}
          currentIndex={currentImageIndex}
          onIndexChange={setCurrentImageIndex}
        />

        <div className="p-5 space-y-6">
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

          <MaterialInfoCard
            fabric={product.fabric}
            fabricDetails={product.fabricDetails}
          />
        </div>
      </main>

      <OrderButton selectedSize={selectedSize} onOrder={handleOrder} />
    </div>
  );
};