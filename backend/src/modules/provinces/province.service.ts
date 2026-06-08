import { prisma } from "../../shared/database/prisma.js";

export const getProvinces = async () => {
  return prisma.province.findMany({
    orderBy: {
      name: "asc",
    },
  });
};

export const getProvinceBySlug = async (slug: string) => {
  return prisma.province.findUnique({
    where: {
      slug,
    },
    include: {
      places: {
        include: {
          category: true,
        },
        orderBy: {
          name: "asc",
        },
      },
    },
  });
};