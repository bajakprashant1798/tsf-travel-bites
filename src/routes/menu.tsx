import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { Search, Flame, Candy, Clock } from "lucide-react";
import { z } from "zod";
import { categories, menu, type Category, type Tag } from "@/data/menu";
import { MenuItemCard } from "@/components/MenuItemCard";
import { TravelBoxPanel } from "@/components/TravelBoxPanel";

const searchSchema = z.object({
  category: z.enum(["breakfast", "ready-to-eat", "dry-snacks"]).optional(),
});

export const Route = createFileRoute("/menu")({
  validateSearch: searchSchema,
  head: () => ({
    meta: [
      { title: "Interactive Menu — TSF Travel Special Food" },
      { name: "description", content: "Browse our full homemade Gujarati menu: bhakhri, thepla, chevdo, dhokla & more. Build your Travel Box and order on WhatsApp." },
      { property: "og:title", content: "TSF Menu — Build Your Travel Box" },
      { property: "og:description", content: "Search, filter, and plan your perfect travel food box." },
    ],
  }),
  component: MenuPage,
});

const filterTags: { id: Tag; label: string; icon: typeof Flame }[] = [
  { id: "spicy", label: "Spicy", icon: Flame },
  { id: "sweet", label: "Sweet", icon: Candy },
  { id: "long-shelf-life", label: "Long Shelf Life", icon: Clock },
];

function MenuPage() {
  const search = Route.useSearch();
  const navigate = useNavigate({ from: "/menu" });
  const activeCategory: Category = search.category ?? "breakfast";

  const [query, setQuery] = useState("");
  const [tagFilters, setTagFilters] = useState<Tag[]>([]);

  const toggleTag = (t: Tag) =>
    setTagFilters((prev) => (prev.includes(t) ? prev.filter((x) => x !== t) : [...prev, t]));

  const items = useMemo(() => {
    const q = query.trim().toLowerCase();
    return menu.filter((m) => {
      if (q) {
        if (!m.name.toLowerCase().includes(q)) return false;
        return tagFilters.every((t) => m.tags.includes(t));
      }
      if (m.category !== activeCategory) return false;
      if (tagFilters.length && !tagFilters.every((t) => m.tags.includes(t))) return false;
      return true;
    });
  }, [query, activeCategory, tagFilters]);

  return (
    <div className="bg-paper">
      <section className="mx-auto max-w-7xl px-4 py-12">
        <div className="text-center">
          <span className="inline-block rounded-full bg-[--color-warm-yellow] px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-[--color-brand-green-dark]">
            Interactive Menu
          </span>
          <h1 className="mt-4 font-display text-5xl font-bold text-[--color-brand-green-dark]">
            Build Your <span className="text-[--color-warm-orange]">Travel Box</span>
          </h1>
          <p className="mt-3 text-muted-foreground">
            Search, filter, and add items. Send your final list to us on WhatsApp.
          </p>
        </div>

        <div className="mt-10 grid gap-8 lg:grid-cols-[1fr_360px]">
          <div>
            {/* Search */}
            <div className="sticky top-20 z-20 -mx-2 rounded-2xl bg-white/80 p-3 backdrop-blur">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
                <input
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value.slice(0, 60))}
                  placeholder="Search dishes (e.g. Thepla, Dhokla)…"
                  className="w-full rounded-full border border-[--color-brand-green]/20 bg-white py-3 pl-12 pr-4 text-base outline-none focus:border-[--color-brand-green] focus:ring-2 focus:ring-[--color-brand-green]/20"
                />
              </div>

              {/* Filter chips */}
              <div className="mt-3 flex flex-wrap gap-2">
                {filterTags.map((f) => {
                  const active = tagFilters.includes(f.id);
                  return (
                    <button
                      key={f.id}
                      onClick={() => toggleTag(f.id)}
                      className={`inline-flex items-center gap-1.5 rounded-full px-3.5 py-1.5 text-xs font-bold transition ${
                        active
                          ? "bg-[--color-brand-green] text-white"
                          : "border border-[--color-brand-green]/30 text-[--color-brand-green-dark] hover:bg-[--color-brand-green]/10"
                      }`}
                    >
                      <f.icon className="h-3.5 w-3.5" /> {f.label}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Category tabs - hidden when searching */}
            {!query && (
              <div className="mt-5 flex flex-wrap gap-2">
                {categories.map((c) => {
                  const active = c.id === activeCategory;
                  return (
                    <button
                      key={c.id}
                      onClick={() => navigate({ search: { category: c.id } })}
                      className={`rounded-full px-5 py-2.5 text-sm font-bold transition ${
                        active
                          ? "bg-[--color-warm-orange] text-white shadow"
                          : "bg-white text-[--color-brand-green-dark] hover:bg-[--color-warm-orange]/10"
                      }`}
                    >
                      {c.label}
                    </button>
                  );
                })}
              </div>
            )}

            <div className="mt-6">
              {items.length === 0 ? (
                <div className="rounded-2xl border border-dashed border-[--color-brand-green]/30 bg-white p-10 text-center text-muted-foreground">
                  No dishes match your search. Try a different keyword.
                </div>
              ) : (
                <div className="grid gap-4 sm:grid-cols-2">
                  {items.map((it) => (
                    <MenuItemCard key={it.id} item={it} />
                  ))}
                </div>
              )}
            </div>
          </div>

          <TravelBoxPanel />
        </div>
      </section>
    </div>
  );
}
