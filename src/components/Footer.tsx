import { Link } from "@tanstack/react-router";
import { Phone, MessageCircle, MapPin } from "lucide-react";
import logo from "@/assets/tsf-logo.jpeg";
import { TSF_PHONE, TSF_WHATSAPP } from "@/context/TravelBoxContext";

export function Footer() {
  return (
    <footer className="mt-20 border-t border-[--color-brand-green]/15 bg-[--color-brand-green-dark] text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 md:grid-cols-4">
        <div className="space-y-4">
          <img src={logo} alt="TSF" className="h-16 w-auto rounded-lg bg-white p-1" />
          <p className="font-display text-lg italic text-[--color-warm-yellow]">
            Swaad Ghar Jaisa, Safar Ke Sath
          </p>
          <p className="text-sm text-white/70">
            Homemade Gujarati travel food, made fresh for your journey.
          </p>
        </div>

        <div>
          <h4 className="mb-3 font-display text-base font-bold">Explore</h4>
          <ul className="space-y-2 text-sm text-white/80">
            <li><Link to="/" className="hover:text-[--color-warm-orange]">Home</Link></li>
            <li><Link to="/about" className="hover:text-[--color-warm-orange]">About Us</Link></li>
            <li><Link to="/menu" className="hover:text-[--color-warm-orange]">Interactive Menu</Link></li>
            <li><Link to="/travel-hub" className="hover:text-[--color-warm-orange]">Travel Hub</Link></li>
            <li><Link to="/contact" className="hover:text-[--color-warm-orange]">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="mb-3 font-display text-base font-bold">Order</h4>
          <ul className="space-y-2 text-sm text-white/80">
            <li className="flex items-center gap-2">
              <Phone className="h-4 w-4 text-[--color-warm-orange]" />
              <a href={`tel:${TSF_PHONE}`} className="hover:text-white">{TSF_PHONE}</a>
            </li>
            <li className="flex items-center gap-2">
              <MessageCircle className="h-4 w-4 text-[--color-warm-orange]" />
              <a href={`https://wa.me/${TSF_WHATSAPP}`} className="hover:text-white">WhatsApp Order</a>
            </li>
            <li className="text-xs text-white/60">Please order 24–48 hrs before travel.</li>
          </ul>
        </div>

        <div>
          <h4 className="mb-3 font-display text-base font-bold">Pickup</h4>
          <p className="flex items-start gap-2 text-sm text-white/80">
            <MapPin className="mt-0.5 h-4 w-4 text-[--color-warm-orange]" />
            Dennandan Desire
          </p>
        </div>
      </div>
      <div className="border-t border-white/10 py-4 text-center text-xs text-white/60">
        © {new Date().getFullYear()} TSF — Travel Special Food. All rights reserved.
      </div>
    </footer>
  );
}
