import { Sparkles } from 'lucide-react';

interface MaterialInfoCardProps {
  fabric?: string;
  fabricDetails?: string;
}

export const MaterialInfoCard = ({ fabric, fabricDetails }: MaterialInfoCardProps) => {
  if (!fabric && !fabricDetails) return null;

  return (
    <div className="bg-white/80 backdrop-blur-sm p-4 rounded-2xl border border-neutral-100 shadow-sm space-y-1.5">
      <div className="flex items-center gap-1.5 text-carysa-salmon text-xs font-semibold">
        <Sparkles size={14} />
        <span>Material & Detalle</span>
      </div>
      {fabric && <p className="text-xs font-medium text-carysa-dark">{fabric}</p>}
      {fabricDetails && (
        <p className="text-[11px] text-neutral-500 leading-relaxed">{fabricDetails}</p>
      )}
    </div>
  );
};