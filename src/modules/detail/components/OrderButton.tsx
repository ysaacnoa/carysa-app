import { MessageCircle } from 'lucide-react';

interface OrderButtonProps {
  selectedSize: string;
  onOrder: () => void;
}

export const OrderButton = ({ selectedSize, onOrder }: OrderButtonProps) => {
  return (
    <div className="fixed bottom-0 left-0 right-0 max-w-md mx-auto p-4 bg-white/95 backdrop-blur-md border-t border-neutral-100 z-30">
      <button
        onClick={onOrder}
        className="w-full bg-carysa-salmon hover:bg-carysa-salmon-dark text-white text-sm font-bold py-3.5 rounded-xl flex items-center justify-center gap-2 shadow-lg transition-all active:scale-[0.98]"
      >
        <MessageCircle size={20} />
        <span>PEDIR TALLA {selectedSize} POR WHATSAPP</span>
      </button>
    </div>
  );
};