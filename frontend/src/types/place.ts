export interface Place {
  id: string;
  name: string;
  slug: string;
  description: string;
  imageUrl: string;
  address?: string;
  latitude?: number;
  longitude?: number;
}