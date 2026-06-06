import { PrismaClient } from "@prisma/client";

let instance: PrismaClient | null = null;

export function getPrisma(): PrismaClient {
  if (instance === null) {
    instance = new PrismaClient();
  }
  return instance;
}

// Crear un proxy que instancie lazily
export const prisma = new Proxy({} as PrismaClient, {
  get: (_, prop) => {
    if (prop === Symbol.toStringTag) {
      return "PrismaClient";
    }
    return (getPrisma() as any)[prop];
  },
});