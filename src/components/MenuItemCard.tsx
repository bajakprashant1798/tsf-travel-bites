import { Check, Plus } from "lucide-react";
import type { MenuItem } from "@/data/menu";
import { useTravelBox } from "@/context/TravelBoxContext";
import { VegDot } from "./VegDot";

const tagStyles: Record<string, string> = {
  spicy: "bg-red-100 text-red-700",
  sweet: "bg-amber-100 text-amber-800",
  "long-shelf-life": "bg-[--color-brand-green]/10 text-[--color-brand-green-dark]",
};
const tagLabels: Record<string, string> = {
  spicy: "Spicy",
  sweet: "Sweet",
  "long-shelf-life": "Long Shelf Life",
};

export function MenuItemCard({ item }: { item: MenuItem }) {
  const box = useTravelBox();
  const added = box.has(item.id);

  return (
    <div className="group flex flex-col gap-3 rounded-2xl border border-[--color-brand-green]/15 bg-white p-4 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
      <div className="flex items-start justify-between gap-3">
        <div>
          <div className="flex items-center gap-2">
            <VegDot />
            <h3 className="font-display text-lg font-semibold text-[--color-brand-green-dark]">
              {item.name}
            </h3>
          </div>
          {item.tags.length > 0 && (
            <div className="mt-2 flex flex-wrap gap-1.5">
              {item.tags.map((t) => (
                <span key={t} className={`rounded-full px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide ${tagStyles[t]}`}>
                  {tagLabels[t]}
                </span>
              ))}
            </div>
          )}
        </div>
        <div className="text-right">
          <div className="font-display text-xl font-bold text-[--color-warm-orange]">₹{item.price}</div>
          {item.unit && <div className="text-xs text-muted-foreground">{item.unit}</div>}
        </div>
      </div>

      <button
        onClick={() => (added ? box.remove(item.id) : box.add(item.id))}
        className={`mt-1 inline-flex items-center justify-center gap-2 rounded-full px-4 py-2 text-sm font-bold transition ${
          added
            ? "bg-[--color-brand-green] text-white hover:bg-[--color-brand-green-dark]"
            : "bg-[--color-warm-orange] text-white hover:bg-[--color-warm-orange]/90"
        }`}
      >
        {added ? <><Check className="h-4 w-4" /> In Travel Box</> : <><Plus className="h-4 w-4" /> Add to Travel Box</>}
      </button>
    </div>
  );
}
