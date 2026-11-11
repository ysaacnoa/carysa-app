import { useState, useEffect, useMemo } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useProductDetail } from './useProductDetail';
import { buildWhatsAppUrl } from '../../../shared/utils/whatsapp';

export function useProductDetailScreen() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { product, isLoading } = useProductDetail(id);

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [selectedSize, setSelectedSize] = useState<string>('');
  const [selectedColor, setSelectedColor] = useState<string>('');

  useEffect(() => {
    if (product) {
      if (product.sizes && product.sizes.length > 0) {
        setSelectedSize(product.sizes[0]);
      }
      if (product.colors && product.colors.length > 0) {
        setSelectedColor(product.colors[0].name);
      }
    }
  }, [product]);

  const selectedColorObj = useMemo(() => {
    if (!product || !product.colors || product.colors.length === 0) return null;
    return product.colors.find((c) => c.name === selectedColor) || product.colors[0];
  }, [product, selectedColor]);

  const imagesList = useMemo(() => {
    if (!product) return [];
    if (selectedColorObj && selectedColorObj.poses && selectedColorObj.poses.length > 0) {
      return selectedColorObj.poses;
    }
    return product.coverImage ? [product.coverImage] : [];
  }, [product, selectedColorObj]);

  const handleSelectColor = (colorName: string) => {
    setSelectedColor(colorName);
    setCurrentImageIndex(0);
  };

  const handleOrder = () => {
    if (!product) return;
    const details = `${product.name}${selectedColor ? ` (Color: ${selectedColor})` : ''}`;
    const url = buildWhatsAppUrl(details, product.fabricDetails, selectedSize, product.price);
    window.open(url, '_blank');
  };

  const handleGoBack = () => navigate('/');

  return {
    product,
    isLoading,
    imagesList,
    currentImageIndex,
    setCurrentImageIndex,
    selectedSize,
    setSelectedSize,
    selectedColor,
    setSelectedColor: handleSelectColor,
    handleOrder,
    handleGoBack,
  };
}