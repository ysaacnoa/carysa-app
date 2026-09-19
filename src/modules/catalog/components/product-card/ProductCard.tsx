import { Badge } from '@/components/ui/badge';
import * as stylex from '@stylexjs/stylex';
import { useNavigate } from 'react-router-dom';
import { styles } from './product-card.styles';
import type { ProductCardProps } from './product-card.types';

export const ProductCard = ({ product }: ProductCardProps) => {
  const navigate = useNavigate();

  return (
    <article
      onClick={() => navigate(`/product/${product.id}`)}
      {...stylex.props(styles.card)}
    >
      <div {...stylex.props(styles.imageWrap)}>
        <img
          src={product.mainImage}
          alt={product.name}
          loading="lazy"
          {...stylex.props(styles.image)}
        />
        <div {...stylex.props(styles.badgePosition)}>
          <Badge variant="secondary">{product.category}</Badge>
        </div>
      </div>

      <div {...stylex.props(styles.info)}>
        <h3 {...stylex.props(styles.name)}>{product.name}</h3>

        <p {...stylex.props(styles.fabric)}>
          Tela: <span {...stylex.props(styles.fabricHighlight)}>{product.fabric}</span>
        </p>

        <div {...stylex.props(styles.priceRow)}>
          <span {...stylex.props(styles.price)}>S/.{product.price.toFixed(2)}</span>
          <span {...stylex.props(styles.actionText)}>Ver detalle</span>
        </div>
      </div>
    </article>
  );
};