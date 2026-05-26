import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  Leaf,
  Clock,
  Heart,
  Package,
  Phone,
  ChefHat,
  ArrowRight,
  Plane,
  Box,
  UtensilsCrossed,
  CheckCircle2,
  ChevronRight,
} from "lucide-react";
import { categories } from "@/data/menu";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "TSF — Travel Special Food | Homemade Gujarati Travel Snacks" },
      {
        name: "description",
        content:
          "Your perfect travel food companion. Homemade Gujarati breakfast, ready-to-eat snacks & dry snacks packed for journeys.",
      },
      { property: "og:title", content: "TSF — Travel Special Food" },
      { property: "og:description", content: "Swaad Ghar Jaisa, Safar Ke Sath." },
    ],
  }),
  component: Home,
});

const usps = [
  {
    icon: Leaf,
    title: "100% Vegetarian",
    body: "Every item is purely vegetarian, marked with the green dot of purity.",
  },
  {
    icon: Clock,
    title: "Long Shelf Life",
    body: "Specially prepared to stay fresh on trains, flights & road trips without preservatives.",
  },
  {
    icon: Heart,
    title: "Pure Homemade Taste",
    body: "Recipes passed down generations. No shortcuts, only pure love and authentic spices.",
  },
  {
    icon: Package,
    title: "Hygienic Packaging",
    body: "Sealed, leak-proof travel-grade packaging to keep food fresh and clean.",
  },
];

const steps = [
  {
    n: 1,
    icon: ChefHat,
    title: "Explore Menu",
    body: "Browse our full catalog of Gujarati travel breakfast & snacks.",
  },
  {
    n: 2,
    icon: Phone,
    title: "Call / WhatsApp",
    body: "Place your order 24–48 hours before travel so we prepare it fresh.",
  },
  {
    n: 3,
    icon: Plane,
    title: "Pickup or Delivery",
    body: "Collect fresh from our kitchen or have it delivered right before you travel.",
  },
];

const heroCards = [
  { emoji: "🫓", label: "Methi Thepla", sub: "Stays soft 3-4 days", color: "bg-cream" },
  { emoji: "🥗", label: "Makai Chevdo", sub: "Perfect crunchy snack", color: "bg-[#FEF3E8]" },
  {
    emoji: "🫔",
    label: "Multigrain Bhakhri",
    sub: "Healthy, diet-friendly",
    color: "bg-[#FDF8E8]",
  },
  { emoji: "🍱", label: "Custom Travel Box", sub: "Curate your favorites", color: "bg-[#EBF5E8]" },
];

function Home() {
  return (
    <div className="bg-paper min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-12 pb-20 md:pt-20 md:pb-28">
        <div className="absolute -top-20 -right-20 h-[500px] w-[500px] rounded-full bg-warm-yellow/20 blur-3xl" />
        <div className="absolute -bottom-32 -left-20 h-[500px] w-[500px] rounded-full bg-brand-green/10 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-4 grid gap-12 items-center md:grid-cols-12">
          {/* Hero Left Column */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="md:col-span-6 space-y-6"
          >
            <span className="inline-flex items-center gap-2 rounded-full bg-white border border-brand-green/15 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-brand-green-dark shadow-sm select-none">
              <span className="inline-block h-2 w-2 rounded-full bg-brand-green animate-pulse" />
              100% Pure Veg • Traditional Homemade
            </span>

            <h1 className="font-display text-5xl sm:text-6xl font-black leading-[1.05] text-brand-green-dark">
              Your Perfect <br />
              <span className="text-warm-orange relative inline-block">
                Travel Food
                <span className="absolute bottom-1 left-0 w-full h-[6px] bg-warm-yellow/45 -z-10 rounded-full" />
              </span>{" "}
              Companion
            </h1>

            <p className="font-display text-2xl md:text-3xl italic text-brand-green font-medium leading-relaxed">
              "Swaad Ghar Jaisa, Safar Ke Sath"
            </p>

            <p className="max-w-lg text-base leading-relaxed text-muted-foreground">
              Authentic Gujarati homemade snacks and fresh breakfast, lovingly prepared and sealed
              in specialized travel packaging. Enjoy the comforting flavors of home on every train,
              flight, road trip, or family picnic.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
                <Link
                  to="/menu"
                  className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-warm-orange to-orange-500 px-8 py-4 font-bold text-white shadow-lg shadow-warm-orange/25 hover:shadow-xl hover:shadow-warm-orange/35 transition-all duration-300"
                >
                  Explore Our Travel Menu
                  <ArrowRight className="h-4.5 w-4.5 transition group-hover:translate-x-1" />
                </Link>
              </motion.div>

              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
                <Link
                  to="/travel-hub"
                  className="inline-flex items-center gap-2 rounded-full border-2 border-brand-green bg-white/70 px-7 py-3.5 font-bold text-brand-green-dark hover:bg-brand-green hover:text-white transition-all duration-300"
                >
                  Plan My Journey Box
                </Link>
              </motion.div>
            </div>
          </motion.div>

          {/* Hero Right Column - Signature Cards Grid */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="md:col-span-6 grid grid-cols-2 gap-4 sm:gap-6 relative"
          >
            {heroCards.map((card, idx) => (
              <motion.div
                key={card.label}
                whileHover={{ y: -8, boxShadow: "0 20px 40px rgba(0,0,0,0.06)" }}
                className={`rounded-3xl border border-brand-green/10 bg-white p-5 sm:p-6 shadow-sm transition-all duration-300 ${
                  idx % 2 === 1 ? "mt-4 sm:mt-6" : ""
                }`}
              >
                <div className="text-4xl sm:text-5xl mb-3 select-none">{card.emoji}</div>
                <h3 className="font-display text-base sm:text-lg font-bold text-brand-green-dark">
                  {card.label}
                </h3>
                <p className="text-xs sm:text-sm text-muted-foreground mt-1 leading-snug">
                  {card.sub}
                </p>
                <Link
                  to="/menu"
                  className="inline-flex items-center gap-1 text-[11px] font-bold text-warm-orange mt-3 hover:underline"
                >
                  View Details <ChevronRight className="h-3 w-3" />
                </Link>
              </motion.div>
            ))}
            {/* Background decorative ring */}
            <div className="absolute inset-0 border-[3px] border-dashed border-brand-green/10 rounded-[3rem] -z-20 pointer-events-none transform scale-95" />
          </motion.div>
        </div>
      </section>

      {/* Visual Categories Section */}
      <section className="mx-auto max-w-7xl px-4 py-16">
        <div className="mb-12 text-center max-w-xl mx-auto space-y-3">
          <span className="inline-block rounded-full bg-warm-yellow/20 border border-warm-yellow/40 px-4 py-1 text-xs font-bold uppercase tracking-wider text-brand-green-dark">
            Our Specialties
          </span>
          <h2 className="font-display text-4xl font-extrabold text-brand-green-dark">
            Explore Our Traditional Kitchen
          </h2>
          <p className="text-muted-foreground">
            Authentic recipes made fresh daily. Select a category below to browse items and start
            packing.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {categories.map((c, i) => {
            const imgs: Record<string, string> = {
              breakfast: "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=800&q=80",
              "ready-to-eat":
                "https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=800&q=80",
              "dry-snacks":
                "https://images.unsplash.com/photo-1601314167099-fb6c6b6bdf69?w=800&q=80",
            };
            return (
              <motion.div
                key={c.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group flex flex-col overflow-hidden rounded-3xl bg-white border border-brand-green/10 shadow-sm transition hover:shadow-xl hover:-translate-y-1 duration-300"
              >
                <Link
                  to="/menu"
                  search={{ category: c.id }}
                  className="flex flex-col h-full text-inherit hover:text-inherit"
                >
                  <div className="relative h-60 overflow-hidden">
                    <img
                      src={imgs[c.id]}
                      alt={c.label}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-green-dark/80 via-brand-green-dark/20 to-transparent" />
                    <div className="absolute bottom-4 left-5 flex items-center gap-2">
                      <span className="inline-block h-3.5 w-3.5 border-2 border-white rounded-sm bg-transparent flex items-center justify-center flex-shrink-0">
                        <span className="h-1.5 w-1.5 bg-white rounded-full" />
                      </span>
                      <h3 className="font-display text-2xl font-extrabold text-white tracking-wide">
                        {c.label}
                      </h3>
                    </div>
                  </div>
                  <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                    <p className="text-sm text-muted-foreground leading-relaxed">{c.blurb}</p>
                    <span className="inline-flex items-center gap-1.5 font-extrabold text-warm-orange group-hover:gap-2.5 transition-all text-sm w-fit">
                      View Selection <ArrowRight className="h-4 w-4" />
                    </span>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Brand USPs Section */}
      <section className="bg-gradient-to-b from-brand-green-dark to-brand-green-dark/95 py-20 text-white relative">
        <div className="absolute inset-0 bg-paper opacity-5 mix-blend-overlay pointer-events-none" />
        <div className="mx-auto max-w-7xl px-4 relative z-10">
          <div className="mb-14 text-center max-w-xl mx-auto space-y-3">
            <h2 className="font-display text-4xl font-extrabold">Why Travelers Trust TSF</h2>
            <p className="text-white/70 text-base leading-relaxed">
              Every single meal package is prepared with these core kitchen standards in mind.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {usps.map((u, i) => (
              <motion.div
                key={u.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md transition hover:bg-white/10 duration-200"
              >
                <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-warm-orange shadow-md shadow-warm-orange/20">
                  <u.icon className="h-6 w-6" />
                </div>
                <h3 className="font-display text-lg font-bold text-warm-yellow">{u.title}</h3>
                <p className="mt-2.5 text-sm text-white/75 leading-relaxed">{u.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="mx-auto max-w-7xl px-4 py-20">
        <div className="mb-14 text-center max-w-xl mx-auto space-y-3">
          <span className="inline-block rounded-full bg-brand-green/10 px-4 py-1 text-xs font-bold uppercase tracking-wider text-brand-green-dark">
            Ordering Process
          </span>
          <h2 className="font-display text-4xl font-extrabold text-brand-green-dark">
            How It Works
          </h2>
          <p className="text-muted-foreground">
            Get fresh, delicious homemade Gujarati meals packed for your journey in 3 simple steps.
          </p>
        </div>

        <div className="relative grid gap-8 md:grid-cols-3">
          {steps.map((s, i) => (
            <motion.div
              key={s.n}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="relative flex flex-col items-center rounded-3xl bg-white border border-brand-green/10 p-8 text-center shadow-sm hover:shadow-md transition duration-300"
            >
              <div className="relative z-10 mb-5 flex h-20 w-20 items-center justify-center rounded-full bg-warm-yellow/20 border border-warm-yellow/30 shadow-inner">
                <s.icon className="h-9 w-9 text-brand-green-dark" />
                <span className="absolute -right-1 -top-1 flex h-7 w-7 items-center justify-center rounded-full bg-warm-orange font-display text-xs font-bold text-white shadow">
                  {s.n}
                </span>
              </div>
              <h3 className="font-display text-lg font-bold text-brand-green-dark">{s.title}</h3>
              <p className="mt-2.5 text-sm text-muted-foreground leading-relaxed">{s.body}</p>
            </motion.div>
          ))}
          {/* Connector line for large screens */}
          <div className="absolute left-[15%] right-[15%] top-16 hidden h-0.5 border-t border-dashed border-brand-green/20 md:block -z-10" />
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-brand-green-dark to-brand-green py-16 text-white text-center relative overflow-hidden">
        <div className="absolute -top-12 -right-12 h-44 w-44 rounded-full bg-white/5 blur-xl pointer-events-none" />
        <div className="absolute -bottom-12 -left-12 h-44 w-44 rounded-full bg-white/5 blur-xl pointer-events-none" />
        <div className="relative z-10 max-w-2xl mx-auto px-4 space-y-6">
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-warm-yellow">
            Ready to Build Your Travel Box?
          </h2>
          <p className="text-white/80 max-w-md mx-auto text-sm leading-relaxed">
            Please place your order 24–48 hours before departure. This guarantees that your meals
            are rolled, baked, and packed fresh on the day of your journey!
          </p>
          <div className="flex flex-wrap gap-4 justify-center pt-2">
            <Link
              to="/menu"
              className="inline-block rounded-full bg-white px-7 py-3.5 font-bold text-brand-green-dark shadow hover:bg-cream transition-all hover:scale-103"
            >
              Build My Travel Box
            </Link>
            <Link
              to="/contact"
              className="inline-block rounded-full border border-white bg-white/10 px-7 py-3.5 font-bold text-white hover:bg-white/20 transition-all hover:scale-103"
            >
              Order via Inquiry Form
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
