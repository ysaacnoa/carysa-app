import * as stylex from '@stylexjs/stylex';
import { Button } from '@/components/ui/button';
import type { NotFoundStateProps } from './not-found-state.types';
import { styles } from './not-found-state.styles';

export const NotFoundState = ({ onGoBack }: NotFoundStateProps) => (
  <div {...stylex.props(styles.container)}>
    <p {...stylex.props(styles.message)}>
      El producto no existe o no se encuentra disponible.
    </p>
    <Button type="button" variant="primary" onClick={onGoBack}>
      Volver al catálogo
    </Button>
  </div>
);