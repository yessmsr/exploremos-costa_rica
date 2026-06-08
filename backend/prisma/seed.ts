import { PrismaClient } from "@prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";

const adapter = new PrismaPg({
  connectionString: process.env.DATABASE_URL!,
});

const prisma = new PrismaClient({
  adapter,
});

async function main() {
  await prisma.place.deleteMany();
  await prisma.category.deleteMany();
  await prisma.province.deleteMany();

  const provinces = await Promise.all([
    prisma.province.create({
      data: {
        name: "San José",
        slug: "san-jose",
        description: "Capital de Costa Rica, con museos, cultura, gastronomía y naturaleza cercana.",
        imageUrl: "https://images.unsplash.com/photo-1581822261290-991b38693d1b",
      },
    }),
    prisma.province.create({
      data: {
        name: "Alajuela",
        slug: "alajuela",
        description: "Provincia conocida por volcanes, cataratas, café y paisajes montañosos.",
        imageUrl: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
      },
    }),
    prisma.province.create({
      data: {
        name: "Cartago",
        slug: "cartago",
        description: "Antigua capital del país, reconocida por su historia, templos y el Volcán Irazú.",
        imageUrl: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
      },
    }),
    prisma.province.create({
      data: {
        name: "Heredia",
        slug: "heredia",
        description: "Provincia montañosa con cafetales, reservas naturales y clima fresco.",
        imageUrl: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e",
      },
    }),
    prisma.province.create({
      data: {
        name: "Guanacaste",
        slug: "guanacaste",
        description: "Destino turístico famoso por sus playas, cultura sabanera y parques nacionales.",
        imageUrl: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
      },
    }),
    prisma.province.create({
      data: {
        name: "Puntarenas",
        slug: "puntarenas",
        description: "Provincia costera con playas, islas, parques nacionales y gran biodiversidad.",
        imageUrl: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21",
      },
    }),
    prisma.province.create({
      data: {
        name: "Limón",
        slug: "limon",
        description: "Provincia caribeña con cultura afrocaribeña, playas, naturaleza y gastronomía.",
        imageUrl: "https://images.unsplash.com/photo-1506953823976-52e1fdc0149a",
      },
    }),
  ]);

  const categories = await Promise.all([
    prisma.category.create({ data: { name: "Parque Nacional", slug: "parque-nacional" } }),
    prisma.category.create({ data: { name: "Cafetería", slug: "cafeteria" } }),
    prisma.category.create({ data: { name: "Playa", slug: "playa" } }),
    prisma.category.create({ data: { name: "Volcán", slug: "volcan" } }),
    prisma.category.create({ data: { name: "Cultura", slug: "cultura" } }),
    prisma.category.create({ data: { name: "Montaña", slug: "montana" } }),
    prisma.category.create({ data: { name: "Restaurante", slug: "restaurante" } }),
  ]);

  const provinceBySlug = Object.fromEntries(provinces.map((p) => [p.slug, p]));
  const categoryBySlug = Object.fromEntries(categories.map((c) => [c.slug, c]));

  await prisma.place.createMany({
    data: [
      {
        name: "Teatro Nacional",
        slug: "teatro-nacional",
        description: "Uno de los edificios históricos más importantes de Costa Rica.",
        imageUrl: "https://images.unsplash.com/photo-1518005020951-eccb494ad742",
        provinceId: provinceBySlug["san-jose"].id,
        categoryId: categoryBySlug["cultura"].id,
      },
      {
        name: "Parque Nacional Volcán Poás",
        slug: "parque-nacional-volcan-poas",
        description: "Parque nacional con uno de los cráteres volcánicos más visitados del país.",
        imageUrl: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
        provinceId: provinceBySlug["alajuela"].id,
        categoryId: categoryBySlug["parque-nacional"].id,
      },
      {
        name: "Volcán Irazú",
        slug: "volcan-irazu",
        description: "El volcán más alto de Costa Rica, ubicado en la provincia de Cartago.",
        imageUrl: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
        provinceId: provinceBySlug["cartago"].id,
        categoryId: categoryBySlug["volcan"].id,
      },
      {
        name: "Café Britt",
        slug: "cafe-britt",
        description: "Experiencia turística relacionada con el café costarricense.",
        imageUrl: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085",
        provinceId: provinceBySlug["heredia"].id,
        categoryId: categoryBySlug["cafeteria"].id,
      },
      {
        name: "Playa Conchal",
        slug: "playa-conchal",
        description: "Playa famosa por su arena clara y aguas turquesas.",
        imageUrl: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
        provinceId: provinceBySlug["guanacaste"].id,
        categoryId: categoryBySlug["playa"].id,
      },
      {
        name: "Parque Nacional Manuel Antonio",
        slug: "parque-nacional-manuel-antonio",
        description: "Parque nacional con playas, senderos y gran biodiversidad.",
        imageUrl: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21",
        provinceId: provinceBySlug["puntarenas"].id,
        categoryId: categoryBySlug["parque-nacional"].id,
      },
      {
        name: "Parque Nacional Cahuita",
        slug: "parque-nacional-cahuita",
        description: "Parque nacional caribeño con playa, arrecife y senderos naturales.",
        imageUrl: "https://images.unsplash.com/photo-1506953823976-52e1fdc0149a",
        provinceId: provinceBySlug["limon"].id,
        categoryId: categoryBySlug["parque-nacional"].id,
      },
    ],
  });

  console.log("Seed ejecutado correctamente.");
}

main()
  .catch((error) => {
    console.error(error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });