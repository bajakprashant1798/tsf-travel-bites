export type TravelType = "train" | "flight" | "road" | "picnic";

export interface TravelPackage {
  id: TravelType;
  title: string;
  subtitle: string;
  description: string;
  itemIds: string[];
}

export const packages: TravelPackage[] = [
  {
    id: "train",
    title: "Train Journey",
    subtitle: "The Train Special",
    description: "Sturdy, mess-free classics that stay fresh through long overnight rides.",
    itemIds: ["methi-thepla", "suki-bhel", "masala-bhakhri", "sada-shakarpara"],
  },
  {
    id: "flight",
    title: "International Flight",
    subtitle: "The Long-Haul Box",
    description: "Dry, leak-proof and customs-friendly bites for 8+ hour flights.",
    itemIds: ["sada-thepla", "makhana-chevdo", "farsi-puri", "namkeen-shakarpara"],
  },
  {
    id: "road",
    title: "Road Trip",
    subtitle: "The Highway Hamper",
    description: "Snackable, shareable favourites for the whole car.",
    itemIds: ["palak-thepla", "papad-chevdo", "chakri", "sweet-shakarpara"],
  },
  {
    id: "picnic",
    title: "Weekend Picnic",
    subtitle: "The Picnic Platter",
    description: "Fresh, hearty bites perfect for a day out with family.",
    itemIds: ["dhokla", "handvo", "bhungla-bateta", "kala-chana-chaat"],
  },
];
