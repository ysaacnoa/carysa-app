interface NotFoundStateProps {
  onGoBack: () => void;
}

export const NotFoundState = ({ onGoBack }: NotFoundStateProps) => (
  <div className="min-h-screen flex flex-col items-center justify-center p-4 text-center bg-carysa-cream">
    <p className="text-sm text-carysa-gray">El producto no existe o no se encuentra disponible.</p>
    <button
      onClick={onGoBack}
      className="mt-4 text-xs font-semibold text-carysa-salmon underline cursor-pointer"
    >
      Volver al catálogo
    </button>
  </div>
);