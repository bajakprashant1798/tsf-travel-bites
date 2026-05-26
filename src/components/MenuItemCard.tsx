import { Check, Plus } from "lucide-react";
import type { MenuItem } from "@/data/menu";
import { useTravelBox } from "@/context/TravelBoxContext";
import { VegDot } from "./VegDot";

const tagStyles: Record<string, string> = {
  spicy: "bg-red-50 text-red-700 border border-red-200",
  sweet: "bg-amber-50 text-amber-800 border border-amber-200",
  "long-shelf-life": "bg-brand-green/5 text-brand-green-dark border border-brand-green/15",
  healthy: "bg-emerald-50 text-emerald-800 border border-emerald-200",
};
const tagLabels: Record<string, string> = {
  spicy: "🌶️ Spicy",
  sweet: "🍯 Sweet",
  "long-shelf-life": "⏱️ Long Shelf Life",
  healthy: "🌿 Healthy",
};

export function MenuItemCard({ item }: { item: MenuItem }) {
  const box = useTravelBox();
  const added = box.has(item.id);

  return (
    <div
      className={`group flex flex-col gap-3 rounded-2xl border bg-white p-4 shadow-sm transition-all duration-300 ${
        added
          ? "border-brand-green bg-cream/30 shadow-md shadow-brand-green/5"
          : "border-brand-green/15 hover:-translate-y-0.5 hover:shadow-md"
      }`}
    >
      <div className="flex items-start justify-between gap-3">
        <div className="space-y-1.5">
          <div className="flex items-center gap-2">
            <VegDot />
            <h3 className="font-display text-[17px] font-bold text-brand-green-dark tracking-wide">
              {item.name}
            </h3>
          </div>
          {item.tags.length > 0 && (
            <div className="flex flex-wrap gap-1.5 pt-0.5">
              {item.tags.map((t) => (
                <span
                  key={t}
                  className={`rounded-full px-2.5 py-0.5 text-[9px] font-bold uppercase tracking-wide ${tagStyles[t]}`}
                >
                  {tagLabels[t]}
                </span>
              ))}
            </div>
          )}
        </div>
        <div className="text-right">
          <div className="font-display text-2xl font-black text-warm-orange">₹{item.price}</div>
          {item.unit && (
            <div className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider mt-0.5">
              {item.unit}
            </div>
          )}
        </div>
      </div>

      <button
        onClick={() => (added ? box.remove(item.id) : box.add(item.id))}
        className={`mt-1.5 inline-flex items-center justify-center gap-2 rounded-full px-4 py-2.5 text-xs font-bold uppercase tracking-wider transition-all duration-200 ${
          added
            ? "bg-brand-green text-white shadow-md shadow-brand-green/25 hover:bg-brand-green-dark"
            : "bg-warm-orange text-white shadow hover:bg-warm-orange/90"
        }`}
      >
        {added ? (
          <>
            <Check className="h-4 w-4 stroke-[3px]" /> In Travel Box
          </>
        ) : (
          <>
            <Plus className="h-4 w-4 stroke-[3px]" /> Add to Travel Box
          </>
        )}
      </button>
    </div>
  );
}
