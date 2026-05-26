import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Sparkles, Droplet, Shield, Package, Train, Plane, Car, Leaf } from "lucide-react";
import { VegDot } from "@/components/VegDot";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About TSF — Our Story & Quality Promise" },
      {
        name: "description",
        content:
          "Bringing the comfort of home-cooked Gujarati food to travelers. Minimal oil, no preservatives, travel-ready packing.",
      },
      { property: "og:title", content: "About TSF — Travel Special Food" },
      {
        property: "og:description",
        content: "Our story, our quality promise, and travel food tips.",
      },
    ],
  }),
  component: About,
});

function About() {
  return (
    <div className="bg-paper min-h-screen">
      {/* Header */}
      <section className="mx-auto max-w-5xl px-4 py-20 text-center space-y-6">
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="inline-block rounded-full bg-warm-yellow/20 border border-warm-yellow/40 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-brand-green-dark select-none"
        >
          Our Story
        </motion.span>
        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="font-display text-5xl font-extrabold leading-tight text-brand-green-dark md:text-6xl"
        >
          From Our Kitchen <br />
          to Your <span className="text-warm-orange">Journey</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.25, duration: 0.6 }}
          className="mx-auto max-w-2xl text-lg md:text-xl text-muted-foreground leading-relaxed italic font-display"
        >
          "We started TSF because every traveler deserves the warmth of authentic, home-cooked food,
          no matter how far they roam."
        </motion.p>
      </section>

      {/* Vision and Image Showcase */}
      <section className="mx-auto max-w-6xl px-4 pb-20">
        <div className="grid items-center gap-12 rounded-[2.5rem] border border-brand-green/10 bg-white p-8 shadow-sm md:grid-cols-2 md:p-12 relative overflow-hidden">
          <div className="space-y-6 relative z-10">
            <span className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-green-dark bg-cream border border-brand-green/15 px-3 py-1.5 rounded-full">
              <VegDot /> 100% Pure Vegetarian
            </span>
            <h2 className="font-display text-3.5xl font-extrabold text-brand-green-dark">
              The Vision of TSF
            </h2>
            <p className="text-muted-foreground text-sm leading-relaxed">
              TSF – Travel Special Food was born from a simple truth: traveling gets infinitely
              better when you eat well. We noticed that most train journeys, road trips, and flights
              left food lovers disappointed with stale, unhealthy, or unfamiliar options.
            </p>
            <p className="text-muted-foreground text-sm leading-relaxed">
              So we set out to solve this with authentic, traditional Gujarati family recipes — the
              kind passed down from generations. We bring the taste of <em>dadi's kitchen</em> right
              into your travel bag, freshly prepared and packed with absolute care.
            </p>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Our promise is simple: Every traveler, whether flying internationally or catching the
              local train, deserves real, wholesome, homemade food.
            </p>
          </div>

          <div className="relative aspect-video md:aspect-[4/3] w-full rounded-3xl overflow-hidden shadow-md">
            <img
              src="https://images.unsplash.com/photo-1631292784640-2b24be784d5d?w=900&q=80"
              alt="Hand-rolling theplas in a home kitchen"
              className="h-full w-full object-cover transition-transform duration-500 hover:scale-103"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />
            <div className="absolute bottom-4 left-5 text-white">
              <div className="text-[10px] uppercase font-extrabold tracking-wider text-white/80">
                Traditional Kitchen
              </div>
              <div className="font-display text-lg font-bold leading-none">
                Generations of Flavor
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Expanded Quality Promise */}
      <section className="mx-auto max-w-6xl px-4 py-16 bg-white border-y border-brand-green/10 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-cream/30 to-transparent pointer-events-none" />
        <div className="relative z-10 max-w-4xl mx-auto">
          <h2 className="mb-12 text-center font-display text-4xl font-extrabold text-brand-green-dark">
            Our Quality Promise
          </h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: Droplet,
                title: "Minimal Oil",
                body: "We use the least possible oil — keeping your food light and easy to digest, perfect for long travel days.",
              },
              {
                icon: Shield,
                title: "No Preservatives",
                body: "Our food is 100% free from synthetic additives. Freshness comes from proper traditional technique, not chemicals.",
              },
              {
                icon: Package,
                title: "Travel Packaging",
                body: "Every item is sealed in hygienic, food-safe packaging specifically chosen to maintain freshness during rail, road, and air travel.",
              },
              {
                icon: Leaf,
                title: "Fresh Ingredients",
                body: "We source fresh vegetables and premium spices daily. No frozen shortcuts or pre-mixes. Real Gujarati flavors the authentic way.",
              },
            ].map((q, i) => (
              <motion.div
                key={q.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="rounded-2xl border border-brand-green/15 bg-white p-5 shadow-sm space-y-4 hover:shadow-md transition-shadow duration-200"
              >
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-brand-green/10 text-brand-green-dark">
                  <q.icon className="h-5.5 w-5.5 stroke-[2.2px]" />
                </div>
                <h3 className="font-display text-lg font-bold text-brand-green-dark">{q.title}</h3>
                <p className="text-xs leading-relaxed text-muted-foreground">{q.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Travel Tips Showcase */}
      <section className="mx-auto max-w-6xl px-4 py-20">
        <div className="rounded-[2.5rem] bg-brand-green-dark p-8 text-white md:p-12 shadow-xl relative overflow-hidden">
          <div className="absolute inset-0 bg-paper opacity-5 mix-blend-overlay pointer-events-none" />
          <div className="relative z-10 space-y-4">
            <div className="flex items-center gap-3">
              <Sparkles className="h-6 w-6 text-warm-yellow" />
              <h2 className="font-display text-3xl font-extrabold">Travel Food Tips from TSF</h2>
            </div>
            <p className="text-white/70 text-sm leading-relaxed max-w-md">
              Get the absolute most out of your travel meal boxes on any journey.
            </p>

            <div className="grid gap-6 md:grid-cols-3 pt-6">
              {[
                {
                  icon: Train,
                  title: "On the Train",
                  body: "Pack theplas and bhakhris separately in foil. They stay soft for 36–48 hours. Eat fresh Muthiya within the first day, and keep dry snacks for intermediate munching.",
                },
                {
                  icon: Plane,
                  title: "On a Flight",
                  body: "Choose only dry, sealed items: multigrain bhakhris, chevdo, shakarpara, farsi puri. They are TSA-compliant for cabin luggage, mess-free, and customs-friendly.",
                },
                {
                  icon: Car,
                  title: "On a Road Trip",
                  body: "A small cooler bag works wonders for Dhokla and Patra on short road trips. For longer drives, stick to dry packs. Bhungla Bateta makes a great roadside tea stop combo!",
                },
              ].map((t) => (
                <div
                  key={t.title}
                  className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm space-y-4 hover:bg-white/10 transition-colors duration-200"
                >
                  <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-white/10 text-warm-orange shadow">
                    <t.icon className="h-6 w-6 stroke-[2px]" />
                  </div>
                  <h3 className="font-display text-lg font-bold text-warm-yellow">{t.title}</h3>
                  <p className="text-xs leading-relaxed text-white/75">{t.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
