export type Category = "breakfast" | "ready-to-eat" | "dry-snacks";
export type Tag = "spicy" | "sweet" | "long-shelf-life";

export interface MenuItem {
  id: string;
  name: string;
  price: number;
  unit: string;
  category: Category;
  tags: Tag[];
}

export const categories: { id: Category; label: string; blurb: string }[] = [
  { id: "breakfast", label: "Breakfast", blurb: "Bhakhri, thepla & morning classics" },
  { id: "ready-to-eat", label: "Ready To Eat", blurb: "Chevdo, shakarpara, crisps & more" },
  { id: "dry-snacks", label: "Dry Snacks", blurb: "Dhokla, handvo, idli & savouries" },
];

export const menu: MenuItem[] = [
  // Breakfast
  { id: "normal-bhakhri", name: "Normal Bhakhri", price: 25, unit: "/Pc.", category: "breakfast", tags: ["long-shelf-life"] },
  { id: "masala-bhakhri", name: "Masala Bhakhri", price: 30, unit: "/Pc.", category: "breakfast", tags: ["spicy", "long-shelf-life"] },
  { id: "ragi-bhakhri", name: "Ragi Bhakhri", price: 50, unit: "/Pc.", category: "breakfast", tags: ["long-shelf-life"] },
  { id: "multigrain-bhakhri", name: "Multigrain Bhakhri", price: 50, unit: "/Pc.", category: "breakfast", tags: ["long-shelf-life"] },
  { id: "methi-thepla", name: "Methi Thepla", price: 100, unit: "/5 Pc.", category: "breakfast", tags: ["long-shelf-life"] },
  { id: "sada-thepla", name: "Sada Thepla", price: 100, unit: "/6 Pc.", category: "breakfast", tags: ["long-shelf-life"] },
  { id: "palak-thepla", name: "Palak Thepla", price: 100, unit: "/5 Pc.", category: "breakfast", tags: ["long-shelf-life"] },
  { id: "methi-vada", name: "Methi Vada", price: 100, unit: "/5 Pc.", category: "breakfast", tags: ["spicy", "long-shelf-life"] },
  { id: "bateta-pauva", name: "Bateta Pauva", price: 50, unit: "", category: "breakfast", tags: [] },
  { id: "upma", name: "Upma", price: 80, unit: "", category: "breakfast", tags: [] },
  { id: "soji-besan-chilla", name: "Soji / Besan Chilla", price: 80, unit: "/Pc.", category: "breakfast", tags: [] },

  // Ready to Eat
  { id: "makai-chevdo", name: "Makai Chevdo", price: 120, unit: "", category: "ready-to-eat", tags: ["long-shelf-life"] },
  { id: "nylon-pauva-chevdo", name: "Nylon Pauva Chevdo (Sweet & Salty)", price: 250, unit: "", category: "ready-to-eat", tags: ["sweet", "long-shelf-life"] },
  { id: "sado-chevdo", name: "Sado Chevdo", price: 110, unit: "", category: "ready-to-eat", tags: ["long-shelf-life"] },
  { id: "papad-chevdo", name: "Papad Chevdo", price: 200, unit: "", category: "ready-to-eat", tags: ["spicy", "long-shelf-life"] },
  { id: "makhana-chevdo", name: "Makhana Chevdo", price: 300, unit: "", category: "ready-to-eat", tags: ["long-shelf-life"] },
  { id: "sada-shakarpara", name: "Sada Shakarpara", price: 100, unit: "", category: "ready-to-eat", tags: ["long-shelf-life"] },
  { id: "namkeen-shakarpara", name: "Namkeen Shakarpara", price: 110, unit: "", category: "ready-to-eat", tags: ["long-shelf-life"] },
  { id: "sweet-shakarpara", name: "Sweet Shakarpara", price: 150, unit: "", category: "ready-to-eat", tags: ["sweet", "long-shelf-life"] },
  { id: "farsi-puri", name: "Farsi Puri", price: 200, unit: "", category: "ready-to-eat", tags: ["long-shelf-life"] },
  { id: "soji-puri", name: "Soji Puri", price: 200, unit: "", category: "ready-to-eat", tags: ["long-shelf-life"] },
  { id: "chakri", name: "Chakri", price: 170, unit: "", category: "ready-to-eat", tags: ["spicy", "long-shelf-life"] },
  { id: "suki-bhel", name: "Suki Bhel", price: 100, unit: "", category: "ready-to-eat", tags: ["spicy", "long-shelf-life"] },
  { id: "bhungla-bateta", name: "Bhungla Bateta", price: 80, unit: "/Plate", category: "ready-to-eat", tags: ["spicy"] },

  // Dry Snacks
  { id: "dhokla", name: "Dhokla (Soji / Rice)", price: 90, unit: "", category: "dry-snacks", tags: [] },
  { id: "handvo", name: "Handvo", price: 120, unit: "", category: "dry-snacks", tags: [] },
  { id: "patra", name: "Patra", price: 180, unit: "", category: "dry-snacks", tags: [] },
  { id: "doodhi-muthiya", name: "Doodhi Na Muthiya", price: 80, unit: "", category: "dry-snacks", tags: [] },
  { id: "vagharel-chana", name: "Vagharel Chana / Chole", price: 80, unit: "", category: "dry-snacks", tags: ["spicy"] },
  { id: "kala-chana-chaat", name: "Kala Chana Chaat", price: 150, unit: "", category: "dry-snacks", tags: ["spicy"] },
  { id: "idli-chutney", name: "Idli with Chutney", price: 50, unit: "/3 Pc.", category: "dry-snacks", tags: [] },
  { id: "upam-chutney", name: "Upam with Chutney", price: 50, unit: "/5 Pc.", category: "dry-snacks", tags: [] },
  { id: "uttapam", name: "Uttapam", price: 120, unit: "", category: "dry-snacks", tags: [] },
];

export const findItem = (id: string) => menu.find((m) => m.id === id);
