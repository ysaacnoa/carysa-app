import { Search } from 'lucide-react';

interface HeaderProps {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
}

export const Header = ({ searchTerm, setSearchTerm }: HeaderProps) => {
  return (
    <header className="sticky top-0 z-20 bg-carysa-cream/95 backdrop-blur-md border-b border-carysa-salmon/20 px-4 py-3">
      <div className="text-center mb-3">
        <h1 className="font-serif text-3xl font-bold text-carysa-salmon tracking-wider">Carysa</h1>
        <p className="text-[10px] tracking-widest uppercase text-carysa-gray font-medium">Boutique Femenina</p>
      </div>

      <div className="relative max-w-sm mx-auto">
        <input
          type="text"
          placeholder="Buscar blusas, casacas, telas..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full bg-white border border-carysa-salmon/30 rounded-full py-2 pl-9 pr-4 text-xs text-carysa-dark placeholder-carysa-gray/60 focus:outline-none focus:border-carysa-salmon transition-colors shadow-sm"
        />
        <Search className="absolute left-3 top-2.5 text-carysa-gray/70" size={14} />
      </div>
    </header>
  );
};