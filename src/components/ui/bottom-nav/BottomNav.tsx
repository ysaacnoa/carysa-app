import * as stylex from '@stylexjs/stylex';
import { Home, MessageSquare } from 'lucide-react';
import type { BottomNavProps } from './bottom-nav.types';
import { styles } from './bottom-nav.styles';

export const BottomNav = ({
  activeTab = 'home',
  onTabChange,
}: BottomNavProps) => {
  const handleContactClick = () => {
    const whatsappNumber =
      import.meta.env.VITE_WHATSAPP_NUMBER || '51999999999';
    window.open(`https://wa.me/${whatsappNumber}`, '_blank');
  };

  return (
    <div {...stylex.props(styles.wrapper)}>
      <nav {...stylex.props(styles.nav)} aria-label="Navegación principal">
        <button
          type="button"
          onClick={() => onTabChange?.('home')}
          {...stylex.props(
            styles.item,
            activeTab === 'home' && styles.itemActive
          )}
        >
          <Home size={20} />
          <span
            {...stylex.props(
              styles.label,
              activeTab === 'home' && styles.labelActive
            )}
          >
            Inicio
          </span>
        </button>


        <button
          type="button"
          onClick={handleContactClick}
          {...stylex.props(
            styles.item,
            activeTab === 'contact' && styles.itemActive
          )}
        >
          <MessageSquare size={20} />
          <span
            {...stylex.props(
              styles.label,
              activeTab === 'contact' && styles.labelActive
            )}
          >
            Contacto
          </span>
        </button>
      </nav>
    </div>
  );
};