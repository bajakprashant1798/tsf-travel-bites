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
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  return (
    <header className="sticky top-0 z-40 border-b border-[--color-brand-green]/15 bg-[--color-cream]/85 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 md:py-4">
        <Link to="/" className="flex items-center gap-3">
          <img src={logo} alt="TSF — Travel Special Food" className="h-12 w-auto md:h-14" />
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {links.map((l) => {
            const active = l.to === "/" ? pathname === "/" : pathname.startsWith(l.to);
            return (
              <Link
                key={l.to}
                to={l.to}
                className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                  active
                    ? "bg-[--color-brand-green] text-white"
                    : "text-[--color-brand-green-dark] hover:bg-[--color-brand-green]/10"
                }`}
              >
                {l.label}
              </Link>
            );
          })}
          <span className="ml-2 inline-flex items-center gap-2 rounded-full bg-white px-3 py-1.5 text-xs font-bold text-[--color-brand-green-dark] shadow-sm">
            <VegDot /> 100% Veg
          </span>
        </nav>

        <button
          className="rounded-full border border-[--color-brand-green]/30 p-2 text-[--color-brand-green-dark] md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-[--color-brand-green]/15 bg-white md:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-3">
            {links.map((l) => {
              const active = l.to === "/" ? pathname === "/" : pathname.startsWith(l.to);
              return (
                <Link
                  key={l.to}
                  to={l.to}
                  onClick={() => setOpen(false)}
                  className={`rounded-lg px-4 py-2 text-base font-semibold ${
                    active
                      ? "bg-[--color-brand-green] text-white"
                      : "text-[--color-brand-green-dark] hover:bg-[--color-brand-green]/10"
                  }`}
                >
                  {l.label}
                </Link>
              );
            })}
            <div className="mt-2 inline-flex w-fit items-center gap-2 rounded-full bg-[--color-brand-green]/10 px-3 py-1.5 text-xs font-bold text-[--color-brand-green-dark]">
              <VegDot /> 100% Veg
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
