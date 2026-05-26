import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from "react";
import { findItem } from "@/data/menu";

export interface BoxEntry {
  id: string;
  qty: number;
}

interface Ctx {
  items: BoxEntry[];
  add: (id: string, qty?: number) => void;
  remove: (id: string) => void;
  setQty: (id: string, qty: number) => void;
  clear: () => void;
  has: (id: string) => boolean;
  total: number;
  count: number;
  whatsappUrl: string;
}

const TravelBoxContext = createContext<Ctx | null>(null);
const STORAGE_KEY = "tsf-travel-box";
const WHATSAPP_NUMBER = "919999999999";

export function TravelBoxProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<BoxEntry[]>([]);

  useEffect(() => {
    try {
      const raw = typeof window !== "undefined" ? localStorage.getItem(STORAGE_KEY) : null;
      if (raw) setItems(JSON.parse(raw));
    } catch {}
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    }
  }, [items]);

  const api = useMemo<Ctx>(() => {
    const total = items.reduce((sum, e) => {
      const it = findItem(e.id);
      return it ? sum + it.price * e.qty : sum;
    }, 0);
    const count = items.reduce((s, e) => s + e.qty, 0);

    const lines = items.map((e) => {
      const it = findItem(e.id);
      if (!it) return "";
      return `• ${it.name} x${e.qty} — ₹${it.price * e.qty}`;
    }).filter(Boolean).join("\n");

    const msg = items.length
      ? `Hello TSF! I'd like to order my Travel Box:\n\n${lines}\n\nTotal: ₹${total}\n\nPlease confirm pickup/delivery.`
      : `Hello TSF! I'd like to place an order.`;

    return {
      items,
      add: (id, qty = 1) =>
        setItems((prev) => {
          const e = prev.find((x) => x.id === id);
          if (e) return prev.map((x) => (x.id === id ? { ...x, qty: x.qty + qty } : x));
          return [...prev, { id, qty }];
        }),
      remove: (id) => setItems((prev) => prev.filter((x) => x.id !== id)),
      setQty: (id, qty) =>
        setItems((prev) =>
          qty <= 0
            ? prev.filter((x) => x.id !== id)
            : prev.map((x) => (x.id === id ? { ...x, qty } : x)),
        ),
      clear: () => setItems([]),
      has: (id) => items.some((x) => x.id === id),
      total,
      count,
      whatsappUrl: `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`,
    };
  }, [items]);

  return <TravelBoxContext.Provider value={api}>{children}</TravelBoxContext.Provider>;
}

export function useTravelBox() {
  const ctx = useContext(TravelBoxContext);
  if (!ctx) throw new Error("useTravelBox must be used within TravelBoxProvider");
  return ctx;
}

export const TSF_PHONE = "+919999999999";
export const TSF_WHATSAPP = WHATSAPP_NUMBER;
