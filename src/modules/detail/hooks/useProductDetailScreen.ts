import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useProductDetail } from './useProductDetail';
import { buildWhatsAppUrl } from '../../../shared/utils/whatsapp';

export function useProductDetailScreen() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const product = useProductDetail(id);

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [selectedSize, setSelectedSize] = useState<string>('');
  const [selectedColor, setSelectedColor] = useState<string>('');

  // Sincroniza los estados iniciales cuando se resuelve el producto
  useEffect(() => {
    if (product) {
      if (product.sizes?.length > 0) {
        setSelectedSize(product.sizes[0]);
      }
      if (product.colors && product.colors.length > 0) {
        setSelectedColor(product.colors[0].name);
      }
    }
  }, [product]);

  const imagesList = product
    ? product.images && product.images.length > 0
      ? product.images
      : [product.mainImage]
    : [];

  const handleOrder = () => {
    if (!product) return;
    const details = `${product.name}${selectedColor ? ` (Color: ${selectedColor})` : ''}`;
    const url = buildWhatsAppUrl(details, product.fabric, selectedSize, product.price);
    window.open(url, '_blank');
  };

  const handleGoBack = () => navigate('/');

  return {
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
  };
}