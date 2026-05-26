import { Link, useRouterState } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/tsf-logo.jpeg";
import { VegDot } from "./VegDot";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About Us" },
  { to: "/menu", label: "Menu" },
  { to: "/travel-hub", label: "Travel Hub" },
  { to: "/contact", label: "Contact" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  const [logoError, setLogoError] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  return (
    <header className="sticky top-0 z-40 border-b border-brand-green/15 bg-white/90 backdrop-blur-md transition-all duration-300">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 md:py-4">
        <Link
          to="/"
          className="flex items-center gap-3 select-none hover:opacity-95 transition-opacity"
        >
          {!logoError && (
            <img
              src={logo}
              alt="TSF"
              className="h-10 w-auto md:h-12 rounded-xl object-contain bg-white p-0.5 shadow-sm"
              onError={() => setLogoError(true)}
            />
          )}
          <div className="flex items-center gap-2">
            <div className="flex h-10 w-10 md:h-11 md:w-11 items-center justify-center rounded-xl bg-gradient-to-br from-brand-green to-brand-green-dark font-display text-sm md:text-base font-black tracking-wider text-white shadow-md shadow-brand-green/25">
              TSF
            </div>
            <div className="text-left leading-none">
              <div className="font-display text-sm md:text-base font-black tracking-wide text-brand-green-dark leading-tight">
                Travel Special Food
              </div>
              <div className="text-[9px] md:text-[10px] font-bold italic tracking-wide text-brand-green mt-0.5">
                Swaad Ghar Jaisa, Safar Ke Sath
              </div>
            </div>
          </div>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {links.map((l) => {
            const active = l.to === "/" ? pathname === "/" : pathname.startsWith(l.to);
            return (
              <Link
                key={l.to}
                to={l.to}
                className={`rounded-full px-4 py-2 text-sm font-semibold transition-all duration-200 ${
                  active
                    ? "bg-brand-green text-white shadow-md shadow-brand-green/25"
                    : "text-brand-green-dark hover:bg-brand-green/10"
                }`}
              >
                {l.label}
              </Link>
            );
          })}
          <span className="ml-2 inline-flex items-center gap-1.5 rounded-full bg-white border border-brand-green/15 px-3 py-1.5 text-xs font-bold text-brand-green-dark shadow-sm select-none">
            <VegDot /> 100% Veg
          </span>
        </nav>

        <button
          className="rounded-full border border-brand-green/30 p-2 text-brand-green-dark md:hidden transition hover:bg-brand-green/5"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-brand-green/15 bg-white/95 backdrop-blur-md md:hidden animate-in fade-in slide-in-from-top-4 duration-200">
          <nav className="mx-auto flex flex-col gap-1 px-4 py-3">
            {links.map((l) => {
              const active = l.to === "/" ? pathname === "/" : pathname.startsWith(l.to);
              return (
                <Link
                  key={l.to}
                  to={l.to}
                  onClick={() => setOpen(false)}
                  className={`rounded-lg px-4 py-2.5 text-base font-semibold transition ${
                    active
                      ? "bg-brand-green text-white"
                      : "text-brand-green-dark hover:bg-brand-green/10"
                  }`}
                >
                  {l.label}
                </Link>
              );
            })}
            <div className="mt-2 inline-flex w-fit items-center gap-1.5 rounded-full bg-brand-green/10 px-3 py-1.5 text-xs font-bold text-brand-green-dark">
              <VegDot /> 100% Veg
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
