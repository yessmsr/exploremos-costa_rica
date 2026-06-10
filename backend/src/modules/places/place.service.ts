import { prisma } from "../../shared/database/prisma.js";

export const getPlaces = async () => {
  return prisma.place.findMany({
    include: {
      province: true,
      category: true,
    },
    orderBy: {
      name: "asc",
    },
  });
};

export const getPlaceBySlug = async (slug: string) => {
  return prisma.place.findUnique({
    where: {
      slug,
    },
    include: {
      province: true,
      category: true,
    },
  });
};