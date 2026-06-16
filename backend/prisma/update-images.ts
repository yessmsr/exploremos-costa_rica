import { PrismaClient } from "@prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";

const adapter = new PrismaPg({
  connectionString: process.env.DATABASE_URL!,
});

const prisma = new PrismaClient({
  adapter,
});

async function main() {
  await prisma.place.update({
    where: { slug: "volcan-arenal" },
    data: {
      imageUrl:
        "https://dynamic-media.tacdn.com/media/photo-o/30/33/d3/66/caption.jpg?w=700&h=500&s=1",
    },
  });

  console.log("Imagen de Volcán Arenal actualizada correctamente.");
}

main()
  .catch((error) => {
    console.error(error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });