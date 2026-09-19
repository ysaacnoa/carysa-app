import * as stylex from '@stylexjs/stylex';
import { MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import type { OrderButtonProps } from './order-button.types';
import { styles } from './order-button.styles';

export const OrderButton = ({ selectedSize, onOrder }: OrderButtonProps) => {
  return (
    <div {...stylex.props(styles.container)}>
      <Button
        type="button"
        variant="primary"
        fullWidth
        onClick={onOrder}
      >
        <span {...stylex.props(styles.content)}>
          <MessageCircle size={20} />
          <span>PEDIR TALLA {selectedSize} POR WHATSAPP</span>
        </span>
      </Button>
    </div>
  );
};