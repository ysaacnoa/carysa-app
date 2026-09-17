interface ProductInfoProps {
  name: string;
  price: number;
  description?: string;
}

export const ProductInfo = ({ name, price, description }: ProductInfoProps) => {
  return (
    <div>
      <div className="flex justify-between items-start">
        <h1 className="text-2xl font-bold text-carysa-dark">{name}</h1>
        <span className="text-2xl font-bold text-carysa-dark whitespace-nowrap">
          S/.{price.toFixed(2)}
        </span>
      </div>
      {description && (
        <p className="text-xs text-neutral-600 mt-2 leading-relaxed">{description}</p>
      )}
    </div>
  );
};