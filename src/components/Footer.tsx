import { Link } from "@tanstack/react-router";
import { Phone, MessageCircle, MapPin } from "lucide-react";
import logo from "@/assets/tsf-logo.jpeg";
import { TSF_PHONE, TSF_WHATSAPP } from "@/context/TravelBoxContext";
import { VegDot } from "./VegDot";
import { useState } from "react";

export function Footer() {
  const [logoError, setLogoError] = useState(false);

  return (
    <footer className="mt-20 border-t border-brand-green/15 bg-white/70 py-12 text-slate-700">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:grid-cols-2 md:grid-cols-4">
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            {!logoError && (
              <img
                src={logo}
                alt="TSF"
                className="h-11 w-auto rounded-lg bg-white p-0.5 shadow-sm"
                onError={() => setLogoError(true)}
              />
            )}
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-brand-green to-brand-green-dark font-display text-sm font-black tracking-wider text-white shadow-sm">
              TSF
            </div>
          </div>
          <p className="font-display text-base italic text-brand-green font-medium">
            Swaad Ghar Jaisa, Safar Ke Sath
          </p>
          <p className="text-sm text-slate-500 leading-relaxed">
            Homemade Gujarati travel food, prepared fresh and packed with love for your journey.
          </p>
          <div className="flex items-center gap-2 text-xs font-bold text-brand-green-dark select-none">
            <VegDot /> 100% Pure Vegetarian
          </div>
        </div>

        <div>
          <h4 className="mb-3.5 font-display text-base font-bold text-brand-green-dark uppercase tracking-wider text-xs">
            Explore
          </h4>
          <ul className="space-y-2.5 text-sm">
            <li>
              <Link to="/" className="hover:text-brand-green transition-colors font-medium">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-brand-green transition-colors font-medium">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/menu" className="hover:text-brand-green transition-colors font-medium">
                Interactive Menu
              </Link>
            </li>
            <li>
              <Link
                to="/travel-hub"
                className="hover:text-brand-green transition-colors font-medium"
              >
                Travel Hub
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-brand-green transition-colors font-medium">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="mb-3.5 font-display text-base font-bold text-brand-green-dark uppercase tracking-wider text-xs">
            Order Channels
          </h4>
          <ul className="space-y-2.5 text-sm">
            <li className="flex items-center gap-2">
              <Phone className="h-4 w-4 text-warm-orange stroke-[2.2px]" />
              <a
                href={`tel:${TSF_PHONE}`}
                className="hover:text-brand-green transition-colors font-medium"
              >
                {TSF_PHONE}
              </a>
            </li>
            <li className="flex items-center gap-2">
              <MessageCircle className="h-4 w-4 text-[#25D366] stroke-[2.2px]" />
              <a
                href={`https://wa.me/${TSF_WHATSAPP}`}
                className="hover:text-brand-green transition-colors font-medium"
              >
                WhatsApp Order
              </a>
            </li>
            <li className="text-xs text-slate-400 pt-1 leading-relaxed">
              Please order 24–48 hrs before your journey.
            </li>
          </ul>
        </div>

        <div>
          <h4 className="mb-3.5 font-display text-base font-bold text-brand-green-dark uppercase tracking-wider text-xs">
            Kitchen Pickup
          </h4>
          <p className="flex items-start gap-2 text-sm text-slate-500 leading-relaxed font-medium">
            <MapPin className="mt-1 h-4 w-4 flex-shrink-0 text-warm-orange stroke-[2.2px]" />
            Dennandan Desire,
            <br />
            Ahmedabad, Gujarat
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 mt-12 pt-6 border-t border-slate-200/50 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400 font-medium">
        <div>© {new Date().getFullYear()} TSF — Travel Special Food. All rights reserved.</div>
        <div>Made with ❤️ for all travelers</div>
      </div>
    </footer>
  );
}
