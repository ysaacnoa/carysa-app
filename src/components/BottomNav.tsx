import { Home, Grid, MessageSquare } from 'lucide-react';

export const BottomNav = () => {
  return (
    <nav className="fixed bottom-0 left-0 right-0 max-w-md mx-auto bg-white/95 backdrop-blur-md border-t border-carysa-salmon/20 py-2.5 px-6 flex justify-around items-center z-30">
      <button className="flex flex-col items-center text-carysa-salmon">
        <Home size={18} />
        <span className="text-[10px] font-medium mt-1">Inicio</span>
      </button>
      <button className="flex flex-col items-center text-carysa-gray hover:text-carysa-salmon transition-colors">
        <Grid size={18} />
        <span className="text-[10px] font-medium mt-1">Colección</span>
      </button>
      <button 
        onClick={() => window.open(`https://wa.me/${import.meta.env.VITE_WHATSAPP_NUMBER || '51999999999'}`, '_blank')}
        className="flex flex-col items-center text-carysa-gray hover:text-carysa-salmon transition-colors"
      >
        <MessageSquare size={18} />
        <span className="text-[10px] font-medium mt-1">Contacto</span>
      </button>
    </nav>
  );
};