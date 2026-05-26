import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Sparkles, Droplet, Shield, Package, Train, Plane, Car } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About TSF — Our Story & Quality Promise" },
      { name: "description", content: "Bringing the comfort of home-cooked Gujarati food to travelers. Minimal oil, no preservatives, travel-ready packing." },
      { property: "og:title", content: "About TSF — Travel Special Food" },
      { property: "og:description", content: "Our story, our quality promise, and travel food tips." },
    ],
  }),
  component: About,
});

function About() {
  return (
    <div className="bg-paper">
      <section className="mx-auto max-w-5xl px-4 py-20 text-center">
        <motion.span
          initial={{ opacity: 0 }} animate={{ opacity: 1 }}
          className="inline-block rounded-full bg-[--color-warm-yellow] px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-[--color-brand-green-dark]"
        >Our Story</motion.span>
        <motion.h1
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
          className="mt-4 font-display text-5xl font-bold leading-tight text-[--color-brand-green-dark] md:text-6xl"
        >
          The taste of <span className="text-[--color-warm-orange]">home</span>, wherever you go.
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.25 }}
          className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground"
        >
          TSF — Travel Special Food was born from a simple craving: the warmth of a Gujarati home-cooked
          meal, on every long journey. Whether you're boarding a train at midnight or flying halfway
          across the world, we believe you deserve real, fresh, lovingly made food — never compromise
          packets.
        </motion.p>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-16">
        <div className="grid items-center gap-10 rounded-3xl bg-white p-8 shadow-md md:grid-cols-2 md:p-12">
          <div>
            <h2 className="font-display text-3xl font-bold text-[--color-brand-green-dark]">Our Vision</h2>
            <p className="mt-4 text-muted-foreground">
              We want every Gujarati family — and every traveler with a love for our cuisine — to carry
              the taste of a freshly made bhakhri, thepla, or dhokla into their journey. No matter how
              far. No matter how long. Just open the box and you're home.
            </p>
            <p className="mt-4 text-muted-foreground">
              Each recipe in our kitchen comes from generations of family cooking — refined over the
              years to travel beautifully without losing a single note of flavour.
            </p>
          </div>
          <div className="overflow-hidden rounded-2xl">
            <img
              src="https://images.unsplash.com/photo-1631292784640-2b24be784d5d?w=900&q=80"
              alt="Hand-rolling theplas in a home kitchen"
              className="h-80 w-full object-cover"
            />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-10">
        <h2 className="mb-8 text-center font-display text-4xl font-bold text-[--color-brand-green-dark]">
          Our Quality Promise
        </h2>
        <div className="grid gap-6 md:grid-cols-3">
          {[
            { icon: Droplet, title: "Minimal Oil", body: "Light, easy on the stomach, perfect for long travel days." },
            { icon: Shield, title: "No Preservatives", body: "Zero artificial chemicals. Only natural ingredients you can pronounce." },
            { icon: Package, title: "Travel-Grade Packing", body: "Leak-proof, food-safe packaging tested for trains, flights & road trips." },
          ].map((q, i) => (
            <motion.div
              key={q.title}
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="rounded-2xl border border-[--color-brand-green]/15 bg-white p-6 shadow-sm"
            >
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-[--color-brand-green] text-white">
                <q.icon className="h-6 w-6" />
              </div>
              <h3 className="font-display text-xl font-bold text-[--color-brand-green-dark]">{q.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{q.body}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16">
        <div className="rounded-3xl bg-[--color-brand-green-dark] p-8 text-white md:p-12">
          <div className="flex items-center gap-3">
            <Sparkles className="h-6 w-6 text-[--color-warm-yellow]" />
            <h2 className="font-display text-3xl font-bold">Travel Food Tips</h2>
          </div>
          <p className="mt-3 text-white/70">Get the most out of your TSF box on any journey.</p>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {[
              { icon: Train, title: "On the Train", body: "Keep theplas & bhakhri at room temp — they stay perfect for 36–48 hours. Eat dhokla & handvo within the first day." },
              { icon: Plane, title: "On a Flight", body: "Choose dry items: chevdo, shakarpara, farsi puri. They're cabin-friendly, mess-free, and customs-safe." },
              { icon: Car, title: "Road Trip", body: "Mix dry snacks with theplas & pickle. Store in a cool spot in the car, away from direct sun." },
            ].map((t) => (
              <div key={t.title} className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <t.icon className="h-7 w-7 text-[--color-warm-orange]" />
                <h3 className="mt-3 font-display text-lg font-bold">{t.title}</h3>
                <p className="mt-2 text-sm text-white/75">{t.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
