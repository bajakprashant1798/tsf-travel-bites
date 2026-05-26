import { Minus, Plus, Trash2, Send, ShoppingBasket } from "lucide-react";
import { useState } from "react";
import { useTravelBox } from "@/context/TravelBoxContext";
import { findItem } from "@/data/menu";

export function TravelBoxPanel() {
  const box = useTravelBox();
  const [openMobile, setOpenMobile] = useState(false);

  const PanelInner = (
    <div className="flex h-full flex-col rounded-2xl border border-[--color-brand-green]/20 bg-white p-5 shadow-md">
      <div className="mb-4 flex items-center justify-between">
        <h3 className="font-display text-xl font-bold text-[--color-brand-green-dark]">
          My Travel Box
        </h3>
        <span className="rounded-full bg-[--color-warm-yellow] px-2.5 py-0.5 text-xs font-bold text-[--color-brand-green-dark]">
          {box.count} items
        </span>
      </div>

      {box.items.length === 0 ? (
        <div className="flex flex-1 flex-col items-center justify-center py-10 text-center text-sm text-muted-foreground">
          <ShoppingBasket className="mb-3 h-10 w-10 text-[--color-brand-green]/40" />
          Your travel box is empty.
          <br />Tap "Add to Travel Box" on any item.
        </div>
      ) : (
        <ul className="flex-1 space-y-2 overflow-auto pr-1">
          {box.items.map((e) => {
            const it = findItem(e.id);
            if (!it) return null;
            return (
              <li key={e.id} className="flex items-center gap-3 rounded-xl bg-[--color-cream] p-2.5">
                <div className="flex-1 min-w-0">
                  <div className="truncate text-sm font-semibold text-[--color-brand-green-dark]">{it.name}</div>
                  <div className="text-xs text-muted-foreground">₹{it.price} {it.unit}</div>
                </div>
                <div className="flex items-center gap-1">
                  <button onClick={() => box.setQty(e.id, e.qty - 1)} className="rounded-full bg-white p-1 text-[--color-brand-green-dark] shadow-sm">
                    <Minus className="h-3.5 w-3.5" />
                  </button>
                  <span className="w-6 text-center text-sm font-bold">{e.qty}</span>
                  <button onClick={() => box.setQty(e.id, e.qty + 1)} className="rounded-full bg-white p-1 text-[--color-brand-green-dark] shadow-sm">
                    <Plus className="h-3.5 w-3.5" />
                  </button>
                </div>
                <button onClick={() => box.remove(e.id)} className="rounded-full p-1 text-red-500 hover:bg-red-50">
                  <Trash2 className="h-4 w-4" />
                </button>
              </li>
            );
          })}
        </ul>
      )}

      <div className="mt-4 border-t border-dashed border-[--color-brand-green]/20 pt-4">
        <div className="mb-3 flex items-center justify-between">
          <span className="text-sm text-muted-foreground">Estimated Total</span>
          <span className="font-display text-2xl font-bold text-[--color-warm-orange]">₹{box.total}</span>
        </div>
        <a
          href={box.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={`flex w-full items-center justify-center gap-2 rounded-full bg-[#25D366] px-4 py-3 font-bold text-white shadow transition hover:scale-[1.02] ${
            box.items.length === 0 ? "pointer-events-none opacity-40" : ""
          }`}
        >
          <Send className="h-4 w-4" /> Send Order on WhatsApp
        </a>
        {box.items.length > 0 && (
          <button onClick={box.clear} className="mt-2 w-full text-xs font-semibold text-muted-foreground hover:text-red-600">
            Clear box
          </button>
        )}
      </div>
    </div>
  );

  return (
    <>
      {/* Desktop */}
      <aside className="sticky top-24 hidden h-[calc(100vh-7rem)] lg:block">{PanelInner}</aside>

      {/* Mobile floating button + sheet */}
      <button
        onClick={() => setOpenMobile(true)}
        className="fixed bottom-24 right-6 z-40 flex items-center gap-2 rounded-full bg-[--color-brand-green] px-4 py-3 font-bold text-white shadow-xl lg:hidden"
      >
        <ShoppingBasket className="h-5 w-5" />
        Box ({box.count})
      </button>
      {openMobile && (
        <div className="fixed inset-0 z-50 flex items-end bg-black/40 lg:hidden" onClick={() => setOpenMobile(false)}>
          <div className="h-[85vh] w-full" onClick={(e) => e.stopPropagation()}>{PanelInner}</div>
        </div>
      )}
    </>
  );
}
