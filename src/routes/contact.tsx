import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { z } from "zod";
import { Phone, MessageCircle, MapPin, AlertCircle, Send } from "lucide-react";
import { TSF_PHONE, TSF_WHATSAPP } from "@/context/TravelBoxContext";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact & Order — TSF Travel Special Food" },
      { name: "description", content: "Place your TSF travel food order. Call, WhatsApp, or fill in our form. Pickup at Dennandan Desire." },
      { property: "og:title", content: "Order Your TSF Travel Box" },
      { property: "og:description", content: "Order 24–48 hours before travel for the freshest experience." },
    ],
  }),
  component: Contact,
});

const formSchema = z.object({
  name: z.string().trim().min(2, "Please share your name").max(80),
  phone: z.string().trim().regex(/^[0-9+\-\s]{7,15}$/, "Enter a valid phone number"),
  travelDate: z.string().min(1, "Pick your travel date"),
  message: z.string().trim().min(5, "Tell us a bit about your order").max(800),
});

function Contact() {
  const [form, setForm] = useState({ name: "", phone: "", travelDate: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const res = formSchema.safeParse(form);
    if (!res.success) {
      const errs: Record<string, string> = {};
      res.error.issues.forEach((i) => { errs[String(i.path[0])] = i.message; });
      setErrors(errs);
      return;
    }
    setErrors({});
    const txt = `Hello TSF! I'd like to place a travel order.\n\nName: ${res.data.name}\nPhone: ${res.data.phone}\nTravel Date: ${res.data.travelDate}\n\n${res.data.message}`;
    window.open(`https://wa.me/${TSF_WHATSAPP}?text=${encodeURIComponent(txt)}`, "_blank");
  };

  return (
    <div className="bg-paper">
      <section className="mx-auto max-w-7xl px-4 py-16">
        <div className="text-center">
          <span className="inline-block rounded-full bg-[--color-warm-yellow] px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-[--color-brand-green-dark]">
            Contact & Ordering
          </span>
          <h1 className="mt-4 font-display text-5xl font-bold text-[--color-brand-green-dark]">
            Let's Pack Your <span className="text-[--color-warm-orange]">Journey</span>
          </h1>
        </div>

        <div className="mx-auto mt-8 max-w-3xl rounded-2xl border-l-4 border-[--color-warm-orange] bg-white p-5 shadow-sm">
          <div className="flex items-start gap-3">
            <AlertCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-[--color-warm-orange]" />
            <p className="text-sm text-[--color-brand-green-dark]">
              <strong>Please place your order 24–48 hours before travel.</strong> This lets us prepare
              your food fresh and pack it perfectly for your journey.
            </p>
          </div>
        </div>

        <div className="mt-10 grid gap-8 lg:grid-cols-[1.1fr_1fr]">
          {/* Form */}
          <form onSubmit={submit} className="rounded-3xl bg-white p-8 shadow-md">
            <h2 className="font-display text-2xl font-bold text-[--color-brand-green-dark]">Order Inquiry</h2>
            <p className="mt-1 text-sm text-muted-foreground">Submit this form and we'll continue on WhatsApp.</p>

            <div className="mt-6 grid gap-4">
              {[
                { id: "name", label: "Your Name", type: "text", placeholder: "Priya Patel" },
                { id: "phone", label: "Phone Number", type: "tel", placeholder: "+91 99999 99999" },
                { id: "travelDate", label: "Travel Date", type: "date", placeholder: "" },
              ].map((f) => (
                <div key={f.id}>
                  <label className="text-xs font-bold uppercase tracking-wide text-[--color-brand-green-dark]">
                    {f.label}
                  </label>
                  <input
                    type={f.type}
                    value={(form as any)[f.id]}
                    onChange={(e) => setForm({ ...form, [f.id]: e.target.value })}
                    placeholder={f.placeholder}
                    className="mt-1.5 w-full rounded-xl border border-[--color-brand-green]/20 bg-white px-4 py-3 outline-none focus:border-[--color-brand-green] focus:ring-2 focus:ring-[--color-brand-green]/20"
                  />
                  {errors[f.id] && <p className="mt-1 text-xs text-red-600">{errors[f.id]}</p>}
                </div>
              ))}
              <div>
                <label className="text-xs font-bold uppercase tracking-wide text-[--color-brand-green-dark]">
                  Message / Order Details
                </label>
                <textarea
                  rows={4}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder="e.g. 5 Methi Thepla, 1 Makai Chevdo, picking up at 6pm…"
                  className="mt-1.5 w-full rounded-xl border border-[--color-brand-green]/20 bg-white px-4 py-3 outline-none focus:border-[--color-brand-green] focus:ring-2 focus:ring-[--color-brand-green]/20"
                />
                {errors.message && <p className="mt-1 text-xs text-red-600">{errors.message}</p>}
              </div>
            </div>

            <button
              type="submit"
              className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[--color-warm-orange] px-6 py-3.5 font-bold text-white shadow-lg shadow-[--color-warm-orange]/30 hover:scale-[1.01] transition"
            >
              <Send className="h-4 w-4" /> Send Inquiry on WhatsApp
            </button>
          </form>

          {/* Sidebar */}
          <div className="space-y-5">
            <a
              href={`tel:${TSF_PHONE}`}
              className="flex items-center gap-4 rounded-2xl bg-white p-5 shadow-md transition hover:-translate-y-0.5"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[--color-brand-green] text-white">
                <Phone className="h-5 w-5" />
              </div>
              <div>
                <div className="text-xs uppercase tracking-wider text-muted-foreground">Call Direct</div>
                <div className="font-display text-lg font-bold text-[--color-brand-green-dark]">{TSF_PHONE}</div>
              </div>
            </a>

            <a
              href={`https://wa.me/${TSF_WHATSAPP}`}
              target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-4 rounded-2xl bg-white p-5 shadow-md transition hover:-translate-y-0.5"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#25D366] text-white">
                <MessageCircle className="h-5 w-5" />
              </div>
              <div>
                <div className="text-xs uppercase tracking-wider text-muted-foreground">WhatsApp</div>
                <div className="font-display text-lg font-bold text-[--color-brand-green-dark]">Chat to Order</div>
              </div>
            </a>

            <div className="overflow-hidden rounded-2xl bg-white shadow-md">
              <div className="flex items-center gap-3 p-5">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[--color-warm-orange] text-white">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-wider text-muted-foreground">Pickup Location</div>
                  <div className="font-display text-lg font-bold text-[--color-brand-green-dark]">Dennandan Desire</div>
                </div>
              </div>
              <iframe
                title="TSF pickup location"
                src={`https://www.google.com/maps?q=${encodeURIComponent("Dennandan Desire")}&output=embed`}
                className="h-64 w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
