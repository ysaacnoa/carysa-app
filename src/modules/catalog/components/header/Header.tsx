import * as stylex from '@stylexjs/stylex';
import { Search } from 'lucide-react';
import { Input } from '@/components/ui/input';
import type { HeaderProps } from './header.types';
import { styles } from './header.styles';

export const Header = ({ searchTerm, setSearchTerm }: HeaderProps) => {
  return (
    <header {...stylex.props(styles.header)}>
      {/* Flor Esquina Izquierda */}
      <img
        src="/flores_salmon_izq.png"
        alt=""
        aria-hidden="true"
        {...stylex.props(styles.flowerLeft)}
      />

      {/* Flor Esquina Derecha con contenedor aislado para el espejo */}
      <div {...stylex.props(styles.flowerRightWrap)}>
        <img
          src="/flores_salmon_izq.png"
          alt=""
          aria-hidden="true"
          {...stylex.props(styles.flowerRight)}
        />
      </div>

      <div {...stylex.props(styles.branding)}>
        <h1 {...stylex.props(styles.heading)}>Carysa</h1>
        <p {...stylex.props(styles.caption)}>Boutique Femenina</p>
      </div>

      <div {...stylex.props(styles.searchWrap)}>
        <Search {...stylex.props(styles.searchIcon)} size={14} />
        <Input
          type="text"
          isSearch
          placeholder="Buscar blusas, casacas, telas..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
    </header>
  );
};