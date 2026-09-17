export function buildWhatsAppUrl(productName: string, fabric: string, size: string, price: number): string {
  const phone = import.meta.env.VITE_WHATSAPP_NUMBER || '51999999999';
  const storeName = import.meta.env.VITE_STORE_NAME || 'Carysa Boutique';
  
  const message = `¡Hola ${storeName}! 🌸 Me interesa comprar la siguiente prenda:\n\n` +
    `• *Producto:* ${productName}\n` +
    `• *Tela:* ${fabric}\n` +
    `• *Talla:* ${size}\n` +
    `• *Precio:* S/ ${price.toFixed(2)}\n\n` +
    `¿Tienen disponibilidad para envío?`;

  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
}