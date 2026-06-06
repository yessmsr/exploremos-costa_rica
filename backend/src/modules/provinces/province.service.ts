import { prisma } from "../../shared/database/prisma.js";

export const getProvinces = async () => {
  return prisma.province.findMany({
    include: {
      places: true,
    },
    orderBy: {
      name: "asc",
    },
  });
};