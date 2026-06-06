export type PlaceCategory =
  | "national_park"
  | "beach"
  | "restaurant"
  | "cafe"
  | "viewpoint"
  | "museum"
  | "waterfall"
  | "other";

export type Place = {
  id: string;
  name: string;
  slug: string;
  description: string;
  category: PlaceCategory;
  location: string;
  imageUrl?: string;
  rating?: number;
  isFeatured?: boolean;
};