import { ArrowLeft } from 'lucide-react';

interface DetailHeaderProps {
  onGoBack: () => void;
}

export const DetailHeader = ({ onGoBack }: DetailHeaderProps) => (
  <button
    onClick={onGoBack}
    className="fixed top-4 left-4 z-40 w-10 h-10 rounded-full bg-white/80 backdrop-blur-md text-carysa-dark flex items-center justify-center shadow-lg active:scale-95 transition-all touch-manipulation cursor-pointer"
    aria-label="Volver al catálogo"
    style={{ WebkitTapHighlightColor: 'transparent' }}
  >
    <ArrowLeft size={20} />
  </button>
);