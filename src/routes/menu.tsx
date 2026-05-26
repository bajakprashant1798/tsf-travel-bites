import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { Search, Flame, Candy, Clock, Leaf } from "lucide-react";
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
      {
        name: "description",
        content:
          "Browse our full homemade Gujarati menu: bhakhri, thepla, chevdo, dhokla & more. Build your Travel Box and order on WhatsApp.",
      },
      { property: "og:title", content: "TSF Menu — Build Your Travel Box" },
      {
        property: "og:description",
        content: "Search, filter, and plan your perfect travel food box.",
      },
    ],
  }),
  component: MenuPage,
});

const filterTags: { id: Tag; label: string; icon: typeof Flame }[] = [
  { id: "spicy", label: "Spicy", icon: Flame },
  { id: "sweet", label: "Sweet", icon: Candy },
  { id: "long-shelf-life", label: "Long Shelf Life", icon: Clock },
  { id: "healthy", label: "Healthy", icon: Leaf },
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
    <div className="bg-paper min-h-screen">
      <section className="mx-auto max-w-7xl px-4 py-12">
        <div className="text-center space-y-3">
          <span className="inline-block rounded-full bg-warm-yellow/20 border border-warm-yellow/40 px-4 py-1 text-xs font-bold uppercase tracking-wider text-brand-green-dark select-none">
            Interactive Menu
          </span>
          <h1 className="font-display text-5xl font-black text-brand-green-dark">
            Build Your <span className="text-warm-orange">Travel Box</span>
          </h1>
          <p className="max-w-lg mx-auto text-sm text-muted-foreground leading-relaxed">
            Select items to customize your perfect travel hamper. When finished, send your final
            list directly to us on WhatsApp!
          </p>
        </div>

        <div className="mt-10 grid gap-8 lg:grid-cols-[1fr_360px]">
          <div>
            {/* Search & Filters */}
            <div className="sticky top-20 z-20 -mx-2 rounded-3xl border border-brand-green/10 bg-white/90 p-4 shadow-sm backdrop-blur-md">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
                <input
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value.slice(0, 60))}
                  placeholder="Search dishes (e.g. Thepla, Chevdo)…"
                  className="w-full rounded-full border border-brand-green/20 bg-white py-3 pl-12 pr-4 text-sm outline-none focus:border-brand-green focus:ring-2 focus:ring-brand-green/15 transition-all"
                />
              </div>

              {/* Filter chips */}
              <div className="mt-3 flex flex-wrap gap-2 pt-1">
                {filterTags.map((f) => {
                  const active = tagFilters.includes(f.id);
                  return (
                    <button
                      key={f.id}
                      onClick={() => toggleTag(f.id)}
                      className={`inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-xs font-bold transition-all duration-200 ${
                        active
                          ? "bg-brand-green text-white shadow shadow-brand-green/25"
                          : "border border-brand-green/25 bg-white text-brand-green-dark hover:bg-brand-green/5"
                      }`}
                    >
                      <f.icon className="h-3.5 w-3.5 stroke-[2.5px]" /> {f.label}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Category tabs - hidden when searching */}
            {!query && (
              <div className="mt-6 flex flex-wrap gap-2">
                {categories.map((c) => {
                  const active = c.id === activeCategory;
                  return (
                    <button
                      key={c.id}
                      onClick={() => navigate({ search: { category: c.id } })}
                      className={`rounded-full px-6 py-3 text-sm font-extrabold transition-all duration-200 uppercase tracking-wide ${
                        active
                          ? "bg-warm-orange text-white shadow-md shadow-warm-orange/20"
                          : "bg-white text-brand-green-dark border border-brand-green/10 hover:bg-warm-orange/10 hover:border-transparent"
                      }`}
                    >
                      {c.label}
                    </button>
                  );
                })}
              </div>
            )}

            {query && (
              <div className="mt-6 text-sm font-bold text-muted-foreground">
                Found {items.length} dishes matching "{query}"
              </div>
            )}

            <div className="mt-6">
              {items.length === 0 ? (
                <div className="rounded-3xl border border-dashed border-brand-green/25 bg-white p-12 text-center text-sm text-muted-foreground leading-relaxed shadow-inner">
                  No dishes match your active filters or keyword. <br />
                  Try clearing filters or search for another item!
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
