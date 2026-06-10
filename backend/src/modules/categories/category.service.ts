import { prisma } from "../../shared/database/prisma.js";

export const getCategories = async () => {
  return prisma.category.findMany({
    orderBy: {
      name: "asc",
    },
  });
};