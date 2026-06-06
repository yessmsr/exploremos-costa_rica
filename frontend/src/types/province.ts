import type { Place } from "./place";

export type Province = {
  id: string;
  name: string;
  slug: string;
  description: string;
  region: string;
  imageUrl: string;
  places: Place[];
};