import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Train, Plane, Car, TreePine, Send, Plus, CheckCircle, Navigation } from "lucide-react";
import { packages, type TravelType } from "@/data/packages";
import { findItem } from "@/data/menu";
import { useTravelBox, TSF_WHATSAPP } from "@/context/TravelBoxContext";
import { VegDot } from "@/components/VegDot";

export const Route = createFileRoute("/travel-hub")({
  head: () => ({
    meta: [
      { title: "Travel Hub — Curated Food Packages for Every Journey" },
      {
        name: "description",
        content:
          "Pick your journey type — train, flight, road trip or picnic — and get a curated TSF food package recommendation.",
      },
      { property: "og:title", content: "TSF Travel Hub — Journey Planner" },
      { property: "og:description", content: "Curated combos for every kind of trip." },
    ],
  }),
  component: TravelHub,
});

const icons: Record<TravelType, typeof Train> = {
  train: Train,
  flight: Plane,
  road: Car,
  picnic: TreePine,
};

const bgColors: Record<TravelType, string> = {
  train: "bg-cream",
  flight: "bg-[#FDF8E8]",
  road: "bg-[#FEF3E8]",
  picnic: "bg-[#EBF5E8]",
};

const accents: Record<TravelType, string> = {
  train: "text-brand-green-dark border-brand-green/40 bg-brand-green/10",
  flight: "text-[#B8860B] border-[#D4A017]/40 bg-[#FDF8E8]",
  road: "text-warm-orange border-warm-orange/40 bg-[#FEF3E8]",
  picnic: "text-brand-green border-brand-green/30 bg-[#EBF5E8]",
};

function TravelHub() {
  const [selected, setSelected] = useState<TravelType>("train");
  const box = useTravelBox();
  const pkg = packages.find((p) => p.id === selected)!;
  const items = pkg.itemIds.map(findItem).filter(Boolean) as NonNullable<
    ReturnType<typeof findItem>
  >[];
  const total = items.reduce((s, it) => s + it.price, 0);

  const addAll = () => {
    items.forEach((it) => box.add(it.id));
  };

  const msg = `Hello TSF! I'd like to order the curated *${pkg.title}* combo:\n\n${items
    .map((it) => `• ${it.name} — ₹${it.price}`)
    .join("\n")}\n\nTotal Combo Cost: ₹${total}\n\nPlease confirm availability for my journey.`;
  const waUrl = `https://wa.me/${TSF_WHATSAPP}?text=${encodeURIComponent(msg)}`;

  return (
    <div className="bg-paper min-h-screen">
      <section className="mx-auto max-w-7xl px-4 py-16">
        <div className="text-center space-y-3">
          <span className="inline-block rounded-full bg-warm-yellow/20 border border-warm-yellow/40 px-4 py-1 text-xs font-bold uppercase tracking-wider text-brand-green-dark select-none">
            Journey Planner
          </span>
          <h1 className="font-display text-5xl font-black text-brand-green-dark">
            Where are you <span className="text-warm-orange">heading?</span>
          </h1>
          <p className="max-w-lg mx-auto text-sm text-muted-foreground leading-relaxed">
            Select your type of travel below. We've curated the perfect combinations of dry snacks
            and fresh breakfast to stay soft, delicious, and convenient.
          </p>
        </div>

        {/* 4 Journey selector boxes */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {packages.map((p) => {
            const Icon = icons[p.id];
            const active = p.id === selected;
            return (
              <motion.button
                key={p.id}
                whileHover={{ y: -6, boxShadow: "0 12px 24px rgba(0,0,0,0.06)" }}
                onClick={() => setSelected(p.id)}
                className={`rounded-3xl border-2 p-6 text-left transition-all duration-300 relative overflow-hidden ${
                  active
                    ? "border-warm-orange bg-white shadow-xl"
                    : "border-brand-green/10 bg-white/70 shadow-sm hover:bg-white"
                }`}
              >
                <div
                  className={`mb-4 inline-flex h-14 w-14 items-center justify-center rounded-2xl transition-colors duration-300 ${
                    active
                      ? "bg-warm-orange text-white shadow-md shadow-warm-orange/25"
                      : "bg-brand-green/10 text-brand-green-dark"
                  }`}
                >
                  <Icon className="h-7 w-7 stroke-[2.2px]" />
                </div>
                <h3 className="font-display text-xl font-bold text-brand-green-dark">{p.title}</h3>
                <p className="mt-1.5 text-xs font-medium text-muted-foreground leading-relaxed">
                  {p.subtitle}
                </p>
                {/* Decorative subtle background icon */}
                <Icon
                  className={`absolute -right-4 -bottom-4 h-20 w-20 stroke-[0.5px] pointer-events-none opacity-[0.03] transition-colors duration-300 ${
                    active ? "text-warm-orange" : "text-gray-400"
                  }`}
                />
              </motion.button>
            );
          })}
        </div>

        {/* Curator details area */}
        <AnimatePresence mode="wait">
          <motion.div
            key={pkg.id}
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className={`mt-10 overflow-hidden rounded-3xl border border-brand-green/10 shadow-xl bg-white`}
          >
            <div className="grid md:grid-cols-[1.1fr_1fr]">
              {/* Left Column: Combo Summary */}
              <div className="bg-brand-green-dark p-8 text-white md:p-12 space-y-6 flex flex-col justify-between">
                <div className="space-y-4">
                  <span className="inline-block rounded-full bg-warm-orange px-3.5 py-1 text-xs font-bold uppercase tracking-wider shadow">
                    Recommended Package
                  </span>
                  <h2 className="font-display text-4xl font-extrabold leading-tight text-warm-yellow">
                    {pkg.subtitle}
                  </h2>
                  <p className="text-white/80 text-sm leading-relaxed max-w-md">
                    {pkg.description}
                  </p>

                  {/* Estimated Package Cost Block */}
                  <div className="mt-6 inline-flex items-center gap-3 rounded-2xl bg-white/10 border border-white/10 px-5 py-4 w-full sm:w-fit shadow-inner">
                    <span className="text-xs uppercase font-extrabold tracking-wider text-white/70 leading-none">
                      Combo Total:
                    </span>
                    <span className="font-display text-4xl font-black text-warm-yellow leading-none">
                      ₹{total}
                    </span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-3.5 pt-4">
                  <motion.button
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    onClick={addAll}
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3.5 text-xs uppercase tracking-wider font-extrabold text-brand-green-dark shadow-lg hover:bg-cream transition-all duration-200"
                  >
                    <Plus className="h-4 w-4 stroke-[3px]" /> Add Combo to Box
                  </motion.button>
                  <motion.a
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    href={waUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-[#25D366] px-6 py-3.5 text-xs uppercase tracking-wider font-extrabold text-white shadow-lg shadow-[#25D366]/20 transition-all duration-200"
                  >
                    <Send className="h-4 w-4 stroke-[3px]" /> Order via WhatsApp
                  </motion.a>
                </div>
              </div>

              {/* Right Column: Combo Contents & Checklist Tips */}
              <div className="p-8 md:p-12 space-y-8 flex flex-col justify-between">
                <div>
                  <h3 className="font-display text-lg font-bold text-brand-green-dark border-b border-brand-green/10 pb-3 flex items-center gap-2">
                    <VegDot /> Curated Box Contents
                  </h3>
                  <ul className="mt-4 divide-y divide-brand-green/10">
                    {items.map((it) => (
                      <li key={it.id} className="flex items-center justify-between py-3.5">
                        <div className="flex items-center gap-3">
                          <VegDot />
                          <span className="font-semibold text-sm text-brand-green-dark">
                            {it.name}
                          </span>
                        </div>
                        <span className="font-extrabold text-sm text-warm-orange">₹{it.price}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-4">
                  <h4 className="font-display text-base font-bold text-brand-green-dark tracking-wide">
                    💡 Important Journey Tips
                  </h4>
                  <div className="space-y-3">
                    {pkg.tips.map((tip) => (
                      <div key={tip} className="flex gap-2.5 items-start">
                        <CheckCircle className="h-5 w-5 stroke-[2.5px] text-brand-green flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-muted-foreground leading-relaxed">{tip}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-2 text-center sm:text-left">
                  <Link
                    to="/menu"
                    className="inline-flex items-center gap-1 text-xs uppercase tracking-wider font-black text-brand-green-dark hover:text-warm-orange transition-colors"
                  >
                    Or Customize and build your own Box{" "}
                    <Navigation className="h-3 w-3 stroke-[2.5px] rotate-90" />
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </section>
    </div>
  );
}
