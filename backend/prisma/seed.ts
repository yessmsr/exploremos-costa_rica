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
        description:
          "Capital de Costa Rica, ideal para descubrir cultura, museos, gastronomía y naturaleza cercana.",
        imageUrl: "https://images.unsplash.com/photo-1581822261290-991b38693d1b",
      },
    }),
    prisma.province.create({
      data: {
        name: "Alajuela",
        slug: "alajuela",
        description:
          "Provincia reconocida por sus volcanes, cataratas, cafetales y paisajes montañosos.",
        imageUrl: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
      },
    }),
    prisma.province.create({
      data: {
        name: "Cartago",
        slug: "cartago",
        description:
          "Antigua capital del país, reconocida por su historia, templos y el Volcán Irazú.",
        imageUrl: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
      },
    }),
    prisma.province.create({
      data: {
        name: "Heredia",
        slug: "heredia",
        description:
          "Provincia montañosa con cafetales, reservas naturales, clima fresco y vistas al Valle Central.",
        imageUrl: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e",
      },
    }),
    prisma.province.create({
      data: {
        name: "Guanacaste",
        slug: "guanacaste",
        description:
          "Destino famoso por sus playas, cultura sabanera, volcanes y parques nacionales.",
        imageUrl: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
      },
    }),
    prisma.province.create({
      data: {
        name: "Puntarenas",
        slug: "puntarenas",
        description:
          "Provincia costera con playas, islas, bosques nubosos, parques nacionales y gran biodiversidad.",
        imageUrl: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21",
      },
    }),
    prisma.province.create({
      data: {
        name: "Limón",
        slug: "limon",
        description:
          "Provincia caribeña con playas, cultura afrocaribeña, canales, naturaleza y gastronomía única.",
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

  const provinceBySlug = Object.fromEntries(
    provinces.map((province) => [province.slug, province])
  );

  const categoryBySlug = Object.fromEntries(
    categories.map((category) => [category.slug, category])
  );

  await prisma.place.createMany({
    data: [
      {
        name: "Teatro Nacional",
        slug: "teatro-nacional",
        description:
          "Uno de los edificios históricos más emblemáticos del país, ideal para conocer arquitectura, arte y cultura costarricense.",
        imageUrl: "https://images.unsplash.com/photo-1518005020951-eccb494ad742",
        provinceId: provinceBySlug["san-jose"].id,
        categoryId: categoryBySlug["cultura"].id,
      },
      {
        name: "Museo Nacional",
        slug: "museo-nacional",
        description:
          "Espacio cultural ubicado en una antigua fortaleza, con exhibiciones sobre historia, arqueología e identidad nacional.",
        imageUrl: "https://images.unsplash.com/photo-1566127992631-137a642a90f4",
        provinceId: provinceBySlug["san-jose"].id,
        categoryId: categoryBySlug["cultura"].id,
      },
      {
        name: "Mercado Central",
        slug: "mercado-central-san-jose",
        description:
          "Mercado tradicional perfecto para probar comida típica, comprar productos locales y vivir el ambiente josefino.",
        imageUrl: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5",
        provinceId: provinceBySlug["san-jose"].id,
        categoryId: categoryBySlug["restaurante"].id,
      },
      {
        name: "Parque Metropolitano La Sabana",
        slug: "parque-la-sabana",
        description:
          "Principal parque urbano de San José, ideal para caminar, descansar, hacer deporte o visitar museos cercanos.",
        imageUrl: "https://images.unsplash.com/photo-1476231682828-37e571bc172f",
        provinceId: provinceBySlug["san-jose"].id,
        categoryId: categoryBySlug["cultura"].id,
      },

      {
        name: "Parque Nacional Volcán Poás",
        slug: "parque-nacional-volcan-poas",
        description:
          "Uno de los volcanes más visitados del país, conocido por su cráter activo, senderos y paisajes de altura.",
        imageUrl: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
        provinceId: provinceBySlug["alajuela"].id,
        categoryId: categoryBySlug["parque-nacional"].id,
      },
      {
        name: "Catarata La Paz",
        slug: "catarata-la-paz",
        description:
          "Destino natural rodeado de bosque, senderos y caídas de agua, ideal para una escapada de montaña.",
        imageUrl: "https://images.unsplash.com/photo-1432405972618-c60b0225b8f9",
        provinceId: provinceBySlug["alajuela"].id,
        categoryId: categoryBySlug["montana"].id,
      },
      {
        name: "Volcán Arenal",
        slug: "volcan-arenal",
        description:
          "Ícono natural de Costa Rica, rodeado de aguas termales, senderos, miradores y actividades de aventura.",
        imageUrl: "https://images.unsplash.com/photo-1571786256017-aee7a0c009b6",
        provinceId: provinceBySlug["alajuela"].id,
        categoryId: categoryBySlug["volcan"].id,
      },
      {
        name: "Río Celeste",
        slug: "rio-celeste",
        description:
          "Río famoso por su intenso color turquesa, senderos naturales y catarata dentro de un entorno protegido.",
        imageUrl: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429",
        provinceId: provinceBySlug["alajuela"].id,
        categoryId: categoryBySlug["montana"].id,
      },

      {
        name: "Volcán Irazú",
        slug: "volcan-irazu",
        description:
          "El volcán más alto de Costa Rica, famoso por sus cráteres, clima frío y vistas panorámicas en días despejados.",
        imageUrl: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
        provinceId: provinceBySlug["cartago"].id,
        categoryId: categoryBySlug["volcan"].id,
      },
      {
        name: "Basílica de Nuestra Señora de los Ángeles",
        slug: "basilica-de-los-angeles",
        description:
          "Templo religioso e histórico de gran importancia nacional, visitado por miles de personas cada año.",
        imageUrl: "https://images.unsplash.com/photo-1518005020951-eccb494ad742",
        provinceId: provinceBySlug["cartago"].id,
        categoryId: categoryBySlug["cultura"].id,
      },
      {
        name: "Valle de Orosi",
        slug: "valle-de-orosi",
        description:
          "Valle rodeado de montañas, cafetales, ríos y miradores; perfecto para paseos tranquilos y fotografía.",
        imageUrl: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429",
        provinceId: provinceBySlug["cartago"].id,
        categoryId: categoryBySlug["montana"].id,
      },
      {
        name: "Ruinas de Ujarrás",
        slug: "ruinas-de-ujarras",
        description:
          "Sitio histórico con restos coloniales rodeados de jardines, ideal para conocer parte del pasado de Cartago.",
        imageUrl: "https://images.unsplash.com/photo-1518005020951-eccb494ad742",
        provinceId: provinceBySlug["cartago"].id,
        categoryId: categoryBySlug["cultura"].id,
      },

      {
        name: "Café Britt",
        slug: "cafe-britt",
        description:
          "Experiencia turística enfocada en el café costarricense, con recorridos, degustaciones y productos locales.",
        imageUrl: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085",
        provinceId: provinceBySlug["heredia"].id,
        categoryId: categoryBySlug["cafeteria"].id,
      },
      {
        name: "Volcán Barva",
        slug: "volcan-barva",
        description:
          "Sector montañoso ideal para senderismo, bosque nuboso, lagunas volcánicas y contacto con la naturaleza.",
        imageUrl: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e",
        provinceId: provinceBySlug["heredia"].id,
        categoryId: categoryBySlug["volcan"].id,
      },
      {
        name: "Bosque de la Hoja",
        slug: "bosque-de-la-hoja",
        description:
          "Área natural de clima fresco, perfecta para caminatas, picnic y actividades al aire libre.",
        imageUrl: "https://images.unsplash.com/photo-1448375240586-882707db888b",
        provinceId: provinceBySlug["heredia"].id,
        categoryId: categoryBySlug["montana"].id,
      },
      {
        name: "Monte de la Cruz",
        slug: "monte-de-la-cruz",
        description:
          "Mirador y zona recreativa con vistas al Valle Central, senderos y espacios verdes para visitar en familia.",
        imageUrl: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429",
        provinceId: provinceBySlug["heredia"].id,
        categoryId: categoryBySlug["montana"].id,
      },

      {
        name: "Playa Conchal",
        slug: "playa-conchal",
        description:
          "Playa famosa por su arena clara compuesta por pequeñas conchas y aguas ideales para nadar y descansar.",
        imageUrl: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
        provinceId: provinceBySlug["guanacaste"].id,
        categoryId: categoryBySlug["playa"].id,
      },
      {
        name: "Tamarindo",
        slug: "tamarindo",
        description:
          "Destino costero muy popular por el surf, la vida nocturna, restaurantes y atardeceres frente al mar.",
        imageUrl: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
        provinceId: provinceBySlug["guanacaste"].id,
        categoryId: categoryBySlug["playa"].id,
      },
      {
        name: "Parque Nacional Rincón de la Vieja",
        slug: "parque-nacional-rincon-de-la-vieja",
        description:
          "Parque nacional con actividad volcánica, senderos, cataratas, aguas termales y paisajes de bosque seco.",
        imageUrl: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
        provinceId: provinceBySlug["guanacaste"].id,
        categoryId: categoryBySlug["parque-nacional"].id,
      },
      {
        name: "Playa Flamingo",
        slug: "playa-flamingo",
        description:
          "Playa de arena clara y ambiente tranquilo, recomendada para relajarse, ver atardeceres y disfrutar del mar.",
        imageUrl: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
        provinceId: provinceBySlug["guanacaste"].id,
        categoryId: categoryBySlug["playa"].id,
      },

      {
        name: "Parque Nacional Manuel Antonio",
        slug: "parque-nacional-manuel-antonio",
        description:
          "Parque nacional conocido por combinar playas, senderos, miradores y una gran variedad de fauna silvestre.",
        imageUrl: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21",
        provinceId: provinceBySlug["puntarenas"].id,
        categoryId: categoryBySlug["parque-nacional"].id,
      },
      {
        name: "Monteverde",
        slug: "monteverde",
        description:
          "Destino de bosque nuboso reconocido por sus puentes colgantes, senderos, biodiversidad y clima fresco.",
        imageUrl: "https://images.unsplash.com/photo-1448375240586-882707db888b",
        provinceId: provinceBySlug["puntarenas"].id,
        categoryId: categoryBySlug["montana"].id,
      },
      {
        name: "Isla Tortuga",
        slug: "isla-tortuga",
        description:
          "Isla del Pacífico con aguas claras, arena blanca y actividades como snorkel, paseos en bote y descanso.",
        imageUrl: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21",
        provinceId: provinceBySlug["puntarenas"].id,
        categoryId: categoryBySlug["playa"].id,
      },
      {
        name: "Jacó",
        slug: "jaco",
        description:
          "Playa muy visitada por su cercanía al Valle Central, ambiente activo, surf, restaurantes y vida nocturna.",
        imageUrl: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
        provinceId: provinceBySlug["puntarenas"].id,
        categoryId: categoryBySlug["playa"].id,
      },

      {
        name: "Parque Nacional Cahuita",
        slug: "parque-nacional-cahuita",
        description:
          "Parque nacional caribeño con senderos junto al mar, playa, arrecife coralino y biodiversidad tropical.",
        imageUrl: "https://images.unsplash.com/photo-1506953823976-52e1fdc0149a",
        provinceId: provinceBySlug["limon"].id,
        categoryId: categoryBySlug["parque-nacional"].id,
      },
      {
        name: "Puerto Viejo",
        slug: "puerto-viejo",
        description:
          "Destino caribeño con playas, gastronomía, cultura afrocaribeña, ambiente relajado y opciones para surf.",
        imageUrl: "https://images.unsplash.com/photo-1506953823976-52e1fdc0149a",
        provinceId: provinceBySlug["limon"].id,
        categoryId: categoryBySlug["playa"].id,
      },
      {
        name: "Parque Nacional Tortuguero",
        slug: "parque-nacional-tortuguero",
        description:
          "Área protegida famosa por sus canales, humedales, biodiversidad y temporada de anidación de tortugas.",
        imageUrl: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429",
        provinceId: provinceBySlug["limon"].id,
        categoryId: categoryBySlug["parque-nacional"].id,
      },
      {
        name: "Manzanillo",
        slug: "manzanillo",
        description:
          "Zona caribeña de playa y naturaleza, ideal para disfrutar paisajes tranquilos, senderos y ambiente tropical.",
        imageUrl: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
        provinceId: provinceBySlug["limon"].id,
        categoryId: categoryBySlug["playa"].id,
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