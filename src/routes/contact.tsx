import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { z } from "zod";
import { Phone, MessageCircle, MapPin, AlertCircle, Send, Clock, Mail } from "lucide-react";
import { TSF_PHONE, TSF_WHATSAPP } from "@/context/TravelBoxContext";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact & Order — TSF Travel Special Food" },
      {
        name: "description",
        content:
          "Place your TSF travel food order. Call, WhatsApp, or fill in our form. Pickup at Dennandan Desire.",
      },
      { property: "og:title", content: "Order Your TSF Travel Box" },
      {
        property: "og:description",
        content: "Order 24–48 hours before travel for the freshest experience.",
      },
    ],
  }),
  component: Contact,
});

const formSchema = z.object({
  name: z.string().trim().min(2, "Please share your name").max(80),
  phone: z
    .string()
    .trim()
    .regex(/^[0-9+\-\s]{7,15}$/, "Enter a valid phone number"),
  travelDate: z.string().min(1, "Pick your travel date"),
  message: z.string().trim().min(5, "Tell us a bit about your order").max(800),
});

function Contact() {
  const [form, setForm] = useState<Record<string, string>>({
    name: "",
    phone: "",
    travelDate: "",
    message: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [success, setSuccess] = useState(false);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const res = formSchema.safeParse(form);
    if (!res.success) {
      const errs: Record<string, string> = {};
      res.error.issues.forEach((i) => {
        errs[String(i.path[0])] = i.message;
      });
      setErrors(errs);
      return;
    }
    setErrors({});
    const txt = `Hello TSF! I'd like to place a travel order.\n\nName: ${res.data.name}\nPhone: ${res.data.phone}\nTravel Date: ${res.data.travelDate}\n\nOrder Inquiry Details:\n${res.data.message}`;
    window.open(`https://wa.me/${TSF_WHATSAPP}?text=${encodeURIComponent(txt)}`, "_blank");
    setSuccess(true);
  };

  return (
    <div className="bg-paper min-h-screen">
      <section className="mx-auto max-w-7xl px-4 py-16">
        <div className="text-center space-y-3">
          <span className="inline-block rounded-full bg-warm-yellow/20 border border-warm-yellow/40 px-4 py-1 text-xs font-bold uppercase tracking-wider text-brand-green-dark select-none">
            Contact & Ordering
          </span>
          <h1 className="font-display text-5xl font-black text-brand-green-dark">
            Let's Pack Your <span className="text-warm-orange">Journey</span>
          </h1>
        </div>

        {/* Timely warning callout */}
        <div className="mx-auto mt-10 max-w-4xl rounded-3xl border-l-[6px] border-warm-orange bg-white p-6 shadow-sm shadow-warm-orange/5 flex items-start gap-4">
          <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-warm-orange/10 text-warm-orange flex-shrink-0">
            <AlertCircle className="h-5 w-5 stroke-[2.5px]" />
          </div>
          <div className="space-y-1">
            <h3 className="font-display text-base font-extrabold text-brand-green-dark">
              Important Order Notice
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              <strong>Please place your order 24–48 hours before travel.</strong> This lets us
              source fresh ingredients, roll and prepare your food fresh on the day of travel, and
              pack it perfectly for your journey.
            </p>
          </div>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-[1.1fr_1fr] max-w-4xl mx-auto items-start">
          {/* Inquiry Form */}
          <div className="rounded-3xl border border-brand-green/10 bg-white p-8 shadow-sm">
            <h2 className="font-display text-2xl font-bold text-brand-green-dark">
              Order Inquiry Form
            </h2>
            <p className="text-xs text-muted-foreground mt-1">
              Submit your details and we will instantly transfer you to WhatsApp to confirm.
            </p>

            {success ? (
              <div className="mt-8 text-center p-8 bg-cream/50 border border-brand-green/15 rounded-2xl space-y-4 animate-in fade-in zoom-in duration-300">
                <div className="text-4xl">✅</div>
                <h3 className="font-display text-lg font-bold text-brand-green-dark">
                  Redirected to WhatsApp!
                </h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Your order details were compiled. Please click send in your WhatsApp chat window
                  to finalize your booking.
                </p>
                <button
                  onClick={() => {
                    setForm({ name: "", phone: "", travelDate: "", message: "" });
                    setSuccess(false);
                  }}
                  className="rounded-full bg-brand-green text-white px-5 py-2.5 text-xs font-bold uppercase tracking-wider"
                >
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={submit} className="mt-6 space-y-4">
                {[
                  {
                    id: "name",
                    label: "Your Name *",
                    type: "text",
                    placeholder: "e.g. Priya Patel",
                  },
                  {
                    id: "phone",
                    label: "Phone Number *",
                    type: "tel",
                    placeholder: "e.g. +91 99999 99999",
                  },
                  { id: "travelDate", label: "Travel Date *", type: "date", placeholder: "" },
                ].map((f) => (
                  <div key={f.id} className="space-y-1.5">
                    <label className="text-xs font-bold uppercase tracking-wider text-brand-green-dark">
                      {f.label}
                    </label>
                    <input
                      type={f.type}
                      value={form[f.id]}
                      onChange={(e) => setForm({ ...form, [f.id]: e.target.value })}
                      placeholder={f.placeholder}
                      className="w-full rounded-xl border border-brand-green/25 bg-white px-4 py-3 text-sm outline-none focus:border-brand-green focus:ring-2 focus:ring-brand-green/15 transition-all"
                    />
                    {errors[f.id] && (
                      <p className="text-[11px] font-bold text-red-600 mt-1">{errors[f.id]}</p>
                    )}
                  </div>
                ))}

                <div className="space-y-1.5">
                  <label className="text-xs font-bold uppercase tracking-wider text-brand-green-dark">
                    Order Details *
                  </label>
                  <textarea
                    rows={4}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="e.g. 5 Methi Thepla, 1 Makhana Chevdo, picking up at 6:00 PM..."
                    className="w-full rounded-xl border border-brand-green/25 bg-white px-4 py-3 text-sm outline-none focus:border-brand-green focus:ring-2 focus:ring-brand-green/15 transition-all resize-none"
                  />
                  {errors.message && (
                    <p className="text-[11px] font-bold text-red-600 mt-1">{errors.message}</p>
                  )}
                </div>

                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-warm-orange py-4 text-xs font-extrabold uppercase tracking-wider text-white shadow-lg shadow-warm-orange/20 hover:scale-[1.01] hover:shadow-xl hover:shadow-warm-orange/30 transition-all duration-200"
                >
                  <Send className="h-4.5 w-4.5 stroke-[2.5px]" /> Send Details via WhatsApp
                </button>
              </form>
            )}
          </div>

          {/* Direct Channels & Details */}
          <div className="space-y-5">
            <h2 className="font-display text-2.5xl font-extrabold text-brand-green-dark leading-none mb-2">
              Direct Channels
            </h2>

            {[
              {
                icon: Phone,
                color: "bg-brand-green text-white",
                label: "Call Us Direct",
                val: TSF_PHONE,
                href: `tel:${TSF_PHONE}`,
              },
              {
                icon: MessageCircle,
                color: "bg-[#25D366] text-white shadow-md shadow-[#25D366]/15",
                label: "WhatsApp Chat",
                val: "Chat to Place Order",
                href: `https://wa.me/${TSF_WHATSAPP}`,
              },
              {
                icon: Mail,
                color: "bg-warm-yellow text-brand-green-dark",
                label: "Email Address",
                val: "tsf.food@gmail.com",
                href: "mailto:tsf.food@gmail.com",
              },
              {
                icon: Clock,
                color: "bg-cream text-brand-green-dark border border-brand-green/15",
                label: "Working Hours",
                val: "6:00 AM – 9:00 PM Daily",
                href: null,
              },
            ].map((c) => {
              const cardMarkup = (
                <div className="flex items-center gap-4 rounded-2xl border border-brand-green/10 bg-white p-5 shadow-sm transition hover:shadow duration-200">
                  <div
                    className={`flex h-12 w-12 items-center justify-center rounded-xl flex-shrink-0 ${c.color}`}
                  >
                    <c.icon className="h-5.5 w-5.5 stroke-[2.2px]" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-[10px] uppercase font-extrabold tracking-wider text-muted-foreground">
                      {c.label}
                    </div>
                    <div className="font-display text-lg font-black text-brand-green-dark truncate">
                      {c.val}
                    </div>
                  </div>
                </div>
              );
              return c.href ? (
                <a
                  key={c.label}
                  href={c.href}
                  className="block transition-transform hover:-translate-y-0.5"
                  target={c.href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                >
                  {cardMarkup}
                </a>
              ) : (
                <div key={c.label}>{cardMarkup}</div>
              );
            })}

            {/* Interactive Pickup Location */}
            <div className="overflow-hidden rounded-3xl border border-brand-green/10 bg-white shadow-sm">
              <div className="flex items-center gap-3.5 p-5 border-b border-brand-green/5">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-warm-orange/10 text-warm-orange flex-shrink-0">
                  <MapPin className="h-5.5 w-5.5 stroke-[2.2px]" />
                </div>
                <div>
                  <div className="text-[10px] uppercase font-extrabold tracking-wider text-muted-foreground">
                    Kitchen Location
                  </div>
                  <div className="font-display text-lg font-black text-brand-green-dark">
                    Dennandan Desire, Ahmedabad
                  </div>
                </div>
              </div>
              <iframe
                title="TSF pickup location"
                src={`https://www.google.com/maps?q=${encodeURIComponent("Dennandan Desire, Ahmedabad")}&output=embed`}
                className="h-56 w-full border-0 grayscale hover:grayscale-0 transition-all duration-300"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              <div className="p-4 bg-cream/35 text-center text-xs font-bold text-muted-foreground uppercase tracking-wider border-t border-brand-green/5">
                📦 Pickup available daily | 🚗 Home delivery on request
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
