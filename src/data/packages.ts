export type TravelType = "train" | "flight" | "road" | "picnic";

export interface TravelPackage {
  id: TravelType;
  title: string;
  subtitle: string;
  description: string;
  itemIds: string[];
  tips: string[];
}

export const packages: TravelPackage[] = [
  {
    id: "train",
    title: "Train Journey Special",
    subtitle: "Perfect for long rail journeys",
    description: "Sturdy, mess-free classics that stay fresh through long overnight rides.",
    itemIds: ["methi-thepla", "suki-bhel", "masala-bhakhri", "namkeen-shakarpara"],
    tips: [
      "Pack in airtight containers",
      "Theplas stay fresh 3–4 days",
      "Dry snacks for in-between munching",
    ],
  },
  {
    id: "flight",
    title: "International Flight Pack",
    subtitle: "TSA-friendly, long-lasting bites",
    description:
      "Dry, leak-proof, and airline-friendly healthy snacks perfect for long-haul travel.",
    itemIds: ["multigrain-bhakhri", "makhana-chevdo", "farsi-puri", "sweet-shakarpara"],
    tips: [
      "Dry items only — no liquids/wet food",
      "Makhana is healthy & airline-friendly",
      "Keeps fresh 5–7 days",
    ],
  },
  {
    id: "road",
    title: "Road Trip Bundle",
    subtitle: "Easy to eat on the move",
    description: "Snackable, shareable favourites perfect for highway stops and quick bites.",
    itemIds: ["makai-chevdo", "ragi-bhakhri", "chakri", "bateta-pauva"],
    tips: ["Great for highway stops", "Share pack easily", "No mess, no fuss snacking"],
  },
  {
    id: "picnic",
    title: "Weekend Picnic Pack",
    subtitle: "Spread out and enjoy",
    description: "A colourful, delicious spread ideal for group outings and family picnics.",
    itemIds: ["patra", "kala-chana-chaat", "nylon-pauva-chevdo", "soji-puri"],
    tips: ["Perfect for group picnics", "Serve on leaf plates", "Colourful spread guaranteed"],
  },
];
