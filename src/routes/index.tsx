import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  Leaf, Clock, Heart, Package, Phone, ChefHat, ArrowRight, Plane,
} from "lucide-react";
import { categories } from "@/data/menu";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "TSF — Travel Special Food | Homemade Gujarati Travel Snacks" },
      { name: "description", content: "Your perfect travel food companion. Homemade Gujarati breakfast, ready-to-eat snacks & dry snacks packed for journeys." },
      { property: "og:title", content: "TSF — Travel Special Food" },
      { property: "og:description", content: "Swaad Ghar Jaisa, Safar Ke Sath." },
    ],
  }),
  component: Home,
});

const usps = [
  { icon: Leaf, title: "100% Vegetarian", body: "Pure veg kitchen. No exceptions, ever." },
  { icon: Clock, title: "Long Shelf-Life", body: "Stays fresh for trains, flights & road trips." },
  { icon: Heart, title: "Pure Homemade Taste", body: "Recipes from our family kitchen to yours." },
  { icon: Package, title: "Hygienic Travel Packs", body: "Leak-proof, sealed, journey-ready packing." },
];

const steps = [
  { n: 1, icon: ChefHat, title: "Explore Menu", body: "Browse our homemade Gujarati travel menu." },
  { n: 2, icon: Phone, title: "Call / WhatsApp", body: "Share your order 24–48 hrs before travel." },
  { n: 3, icon: Plane, title: "Pickup or Delivery", body: "Get it fresh, just before your journey starts." },
];

function Home() {
  return (
    <div className="bg-paper">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute -top-20 -right-20 h-96 w-96 rounded-full bg-[--color-warm-yellow]/40 blur-3xl" />
        <div className="absolute -bottom-32 -left-20 h-96 w-96 rounded-full bg-[--color-brand-green]/15 blur-3xl" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-4 py-20 md:grid-cols-2 md:py-28">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-[--color-brand-green-dark] shadow-sm">
              <span className="inline-block h-2 w-2 rounded-full bg-[--color-brand-green]" />
              Homemade • Travel-Ready
            </span>
            <h1 className="mt-5 font-display text-5xl font-bold leading-[1.05] text-[--color-brand-green-dark] md:text-6xl">
              Your Perfect <span className="text-[--color-warm-orange]">Travel Food</span> Companion
            </h1>
            <p className="mt-4 font-display text-2xl italic text-[--color-brand-green]">
              Swaad Ghar Jaisa, Safar Ke Sath.
            </p>
            <p className="mt-4 max-w-lg text-base text-muted-foreground">
              Authentic Gujarati breakfast, chevdo, theplas, dhokla and more — freshly made and packed to stay perfect on every train, flight, road trip or picnic.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
                <Link
                  to="/menu"
                  className="group inline-flex items-center gap-2 rounded-full bg-[--color-warm-orange] px-7 py-3.5 font-bold text-white shadow-lg shadow-[--color-warm-orange]/30"
                >
                  Explore Our Travel Menu
                  <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                </Link>
              </motion.div>
              <Link
                to="/travel-hub"
                className="inline-flex items-center gap-2 rounded-full border-2 border-[--color-brand-green] px-6 py-3 font-bold text-[--color-brand-green-dark] hover:bg-[--color-brand-green]/10"
              >
                Plan My Travel Box
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="relative aspect-square w-full max-w-md justify-self-center"
          >
            <div className="absolute inset-0 rounded-[3rem] bg-gradient-to-br from-[--color-brand-green]/20 to-[--color-warm-orange]/20" />
            <div className="absolute inset-4 overflow-hidden rounded-[2.5rem] bg-white shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1601050690597-df0568f70950?w=900&q=80"
                alt="Homemade Gujarati travel food"
                className="h-full w-full object-cover"
                loading="eager"
              />
            </div>
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute -right-2 top-6 rounded-2xl bg-white px-4 py-3 shadow-xl"
            >
              <div className="flex items-center gap-2">
                <span className="inline-flex h-5 w-5 items-center justify-center border-2 border-[--color-brand-green] bg-white">
                  <span className="h-2.5 w-2.5 rounded-full bg-[--color-brand-green]" />
                </span>
                <span className="text-xs font-bold text-[--color-brand-green-dark]">100% Pure Veg</span>
              </div>
            </motion.div>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
              className="absolute -left-3 bottom-10 rounded-2xl bg-[--color-warm-orange] px-4 py-3 text-white shadow-xl"
            >
              <div className="text-[10px] uppercase tracking-wider">Made</div>
              <div className="font-display text-lg font-bold leading-none">Home Fresh</div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Categories */}
      <section className="mx-auto max-w-7xl px-4 py-16">
        <div className="mb-10 text-center">
          <h2 className="font-display text-4xl font-bold text-[--color-brand-green-dark]">Explore Our Kitchen</h2>
          <p className="mt-2 text-muted-foreground">Three categories. One unforgettable taste of home.</p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {categories.map((c, i) => {
            const imgs: Record<string, string> = {
              breakfast: "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=800&q=80",
              "ready-to-eat": "https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=800&q=80",
              "dry-snacks": "https://images.unsplash.com/photo-1601314167099-fb6c6b6bdf69?w=800&q=80",
            };
            return (
              <motion.div
                key={c.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group overflow-hidden rounded-3xl bg-white shadow-md transition hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="relative h-56 overflow-hidden">
                  <img src={imgs[c.id]} alt={c.label} className="h-full w-full object-cover transition duration-500 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[--color-brand-green-dark]/70 to-transparent" />
                  <h3 className="absolute bottom-4 left-5 font-display text-3xl font-bold text-white">{c.label}</h3>
                </div>
                <div className="p-5">
                  <p className="text-sm text-muted-foreground">{c.blurb}</p>
                  <Link
                    to="/menu"
                    search={{ category: c.id }}
                    className="mt-4 inline-flex items-center gap-1 font-bold text-[--color-warm-orange] hover:gap-2"
                  >
                    View Details <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* USPs */}
      <section className="bg-[--color-brand-green-dark] py-16 text-white">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mb-10 text-center">
            <h2 className="font-display text-4xl font-bold">Why Travelers Choose TSF</h2>
            <p className="mt-2 text-white/70">Every box, packed with these promises.</p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {usps.map((u, i) => (
              <motion.div
                key={u.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur transition hover:bg-white/10"
              >
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[--color-warm-orange]">
                  <u.icon className="h-6 w-6" />
                </div>
                <h3 className="font-display text-xl font-bold">{u.title}</h3>
                <p className="mt-2 text-sm text-white/70">{u.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="mx-auto max-w-7xl px-4 py-20">
        <div className="mb-12 text-center">
          <h2 className="font-display text-4xl font-bold text-[--color-brand-green-dark]">How It Works</h2>
          <p className="mt-2 text-muted-foreground">From craving to journey — in 3 simple steps.</p>
        </div>
        <div className="relative grid gap-8 md:grid-cols-3">
          <div className="absolute left-0 right-0 top-12 hidden h-0.5 bg-dashed md:block" style={{ backgroundImage: "repeating-linear-gradient(90deg, var(--color-brand-green) 0 8px, transparent 8px 16px)" }} />
          {steps.map((s, i) => (
            <motion.div
              key={s.n}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="relative flex flex-col items-center rounded-3xl bg-white p-7 text-center shadow-md"
            >
              <div className="relative z-10 mb-4 flex h-24 w-24 items-center justify-center rounded-full bg-[--color-warm-yellow] ring-8 ring-[--color-cream]">
                <s.icon className="h-10 w-10 text-[--color-brand-green-dark]" />
                <span className="absolute -right-1 -top-1 flex h-8 w-8 items-center justify-center rounded-full bg-[--color-warm-orange] font-display text-sm font-bold text-white">
                  {s.n}
                </span>
              </div>
              <h3 className="font-display text-xl font-bold text-[--color-brand-green-dark]">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.body}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
