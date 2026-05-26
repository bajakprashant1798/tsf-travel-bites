import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Train, Plane, Car, TreePine, Send, Plus } from "lucide-react";
import { packages, type TravelType } from "@/data/packages";
import { findItem } from "@/data/menu";
import { useTravelBox, TSF_WHATSAPP } from "@/context/TravelBoxContext";

export const Route = createFileRoute("/travel-hub")({
  head: () => ({
    meta: [
      { title: "Travel Hub — Curated Food Packages for Every Journey" },
      { name: "description", content: "Pick your journey type — train, flight, road trip or picnic — and get a curated TSF food package recommendation." },
      { property: "og:title", content: "TSF Travel Hub — Journey Planner" },
      { property: "og:description", content: "Curated combos for every kind of trip." },
    ],
  }),
  component: TravelHub,
});

const icons: Record<TravelType, typeof Train> = {
  train: Train, flight: Plane, road: Car, picnic: TreePine,
};

function TravelHub() {
  const [selected, setSelected] = useState<TravelType>("train");
  const box = useTravelBox();
  const pkg = packages.find((p) => p.id === selected)!;
  const items = pkg.itemIds.map(findItem).filter(Boolean) as NonNullable<ReturnType<typeof findItem>>[];
  const total = items.reduce((s, it) => s + it.price, 0);

  const addAll = () => items.forEach((it) => box.add(it.id));

  const msg = `Hello TSF! I'd like to order the *${pkg.subtitle}* (${pkg.title}):\n\n${items
    .map((it) => `• ${it.name} — ₹${it.price}`).join("\n")}\n\nTotal: ₹${total}`;
  const waUrl = `https://wa.me/${TSF_WHATSAPP}?text=${encodeURIComponent(msg)}`;

  return (
    <div className="bg-paper">
      <section className="mx-auto max-w-7xl px-4 py-16">
        <div className="text-center">
          <span className="inline-block rounded-full bg-[--color-warm-yellow] px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-[--color-brand-green-dark]">
            Journey Planner
          </span>
          <h1 className="mt-4 font-display text-5xl font-bold text-[--color-brand-green-dark]">
            Where are you <span className="text-[--color-warm-orange]">heading?</span>
          </h1>
          <p className="mt-3 text-muted-foreground">We'll curate the perfect TSF box for your journey.</p>
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {packages.map((p) => {
            const Icon = icons[p.id];
            const active = p.id === selected;
            return (
              <motion.button
                key={p.id}
                whileHover={{ y: -4 }}
                onClick={() => setSelected(p.id)}
                className={`rounded-3xl border-2 p-6 text-left transition ${
                  active
                    ? "border-[--color-warm-orange] bg-white shadow-xl"
                    : "border-transparent bg-white/70 shadow-sm hover:bg-white"
                }`}
              >
                <div className={`mb-4 inline-flex h-14 w-14 items-center justify-center rounded-2xl ${active ? "bg-[--color-warm-orange] text-white" : "bg-[--color-brand-green]/10 text-[--color-brand-green-dark]"}`}>
                  <Icon className="h-7 w-7" />
                </div>
                <h3 className="font-display text-xl font-bold text-[--color-brand-green-dark]">{p.title}</h3>
                <p className="mt-1 text-xs text-muted-foreground">{p.subtitle}</p>
              </motion.button>
            );
          })}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={pkg.id}
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.35 }}
            className="mt-10 overflow-hidden rounded-3xl bg-white shadow-xl"
          >
            <div className="grid md:grid-cols-[1.1fr_1fr]">
              <div className="bg-[--color-brand-green-dark] p-8 text-white md:p-12">
                <span className="inline-block rounded-full bg-[--color-warm-orange] px-3 py-1 text-xs font-bold uppercase tracking-wider">
                  Recommended
                </span>
                <h2 className="mt-4 font-display text-4xl font-bold leading-tight">{pkg.subtitle}</h2>
                <p className="mt-3 text-white/80">{pkg.description}</p>
                <div className="mt-6 flex items-baseline gap-2">
                  <span className="text-sm text-white/60">Combo total</span>
                  <span className="font-display text-4xl font-bold text-[--color-warm-yellow]">₹{total}</span>
                </div>
                <div className="mt-6 flex flex-wrap gap-3">
                  <button
                    onClick={addAll}
                    className="inline-flex items-center gap-2 rounded-full bg-[--color-warm-orange] px-5 py-3 font-bold text-white hover:scale-105 transition"
                  >
                    <Plus className="h-4 w-4" /> Add Package to Travel Box
                  </button>
                  <a
                    href={waUrl}
                    target="_blank" rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-5 py-3 font-bold text-white hover:scale-105 transition"
                  >
                    <Send className="h-4 w-4" /> Order on WhatsApp
                  </a>
                </div>
              </div>

              <div className="p-8 md:p-12">
                <h3 className="font-display text-lg font-bold text-[--color-brand-green-dark]">Inside this box</h3>
                <ul className="mt-4 divide-y divide-[--color-brand-green]/10">
                  {items.map((it) => (
                    <li key={it.id} className="flex items-center justify-between py-3">
                      <div className="flex items-center gap-3">
                        <span className="inline-flex h-4 w-4 items-center justify-center border-2 border-[--color-brand-green] bg-white">
                          <span className="h-2 w-2 rounded-full bg-[--color-brand-green]" />
                        </span>
                        <span className="font-semibold text-[--color-brand-green-dark]">{it.name}</span>
                      </div>
                      <span className="font-bold text-[--color-warm-orange]">₹{it.price}</span>
                    </li>
                  ))}
                </ul>
                <Link to="/menu" className="mt-6 inline-block text-sm font-bold text-[--color-brand-green-dark] underline">
                  Or build your own custom box →
                </Link>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </section>
    </div>
  );
}
