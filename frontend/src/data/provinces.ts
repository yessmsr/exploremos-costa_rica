import type { Province } from "../types/province";

export const provinces: Province[] = [
  {
    id: "san-jose",
    name: "San José",
    slug: "san-jose",
    region: "Valle Central",
    imageUrl: "/images/provinces/san-jose.jpg",
    description:
      "Capital de Costa Rica, con museos, parques urbanos, gastronomía y acceso a montañas cercanas.",
    places: [
      {
        id: "teatro-nacional",
        name: "Teatro Nacional",
        slug: "teatro-nacional",
        description: "Uno de los edificios históricos más importantes del país.",
        category: "museum",
        location: "San José centro",
        isFeatured: true,
      },
    ],
  },
];