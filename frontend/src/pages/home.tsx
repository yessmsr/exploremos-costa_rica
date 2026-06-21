import { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Building2,
  Church,
  Compass,
  HeartHandshake,
  Landmark,
  Leaf,
  MapPin,
  Mountain,
  Palmtree,
  Search,
  Ship,
  Trees,
} from "lucide-react";

import { getProvinces } from "../services/provinceService";
import type { Province } from "../types/province";
import logo from "../assets/logo.png";

import alajuelaImg from "../assets/carousel/alajuela.jpg";
import cartagoImg from "../assets/carousel/cartago.jpg";
import guanacasteImg from "../assets/carousel/guanacaste.jpg";
import herediaImg from "../assets/carousel/heredia.jpg";
import limonImg from "../assets/carousel/limon.jpg";
import puntarenasImg from "../assets/carousel/puntarenas.jpg";
import sanJoseImg from "../assets/carousel/sanJose.jpg";

const provinceIcons: Record<string, React.ReactNode> = {
  "San José": <Building2 size={22} />,
  Limón: <Palmtree size={22} />,
  Cartago: <Church size={22} />,
  Alajuela: <Mountain size={22} />,
  Heredia: <Leaf size={22} />,
  Puntarenas: <Ship size={22} />,
  Guanacaste: <Compass size={22} />,
};

const provinceImages: Record<string, string> = {
  "San José": sanJoseImg,
  Limón: limonImg,
  Cartago: cartagoImg,
  Alajuela: alajuelaImg,
  Heredia: herediaImg,
  Puntarenas: puntarenasImg,
  Guanacaste: guanacasteImg,
};

const reasons = [
  {
    icon: Trees,
    title: "Naturaleza única",
    text: "Biodiversidad increíble en cada rincón.",
  },
  {
    icon: Landmark,
    title: "Cultura vibrante",
    text: "Tradiciones e historia que nos representan.",
  },
  {
    icon: Mountain,
    title: "Aventura",
    text: "Actividades para todos los gustos.",
  },
  {
    icon: HeartHandshake,
    title: "Pura Vida",
    text: "La calidez de nuestra gente te espera.",
  },
];

export default function Home() {
  const navigate = useNavigate();

  const [provinces, setProvinces] = useState<Province[]>([]);
  const [loading, setLoading] = useState(true);
  const [active, setActive] = useState(0);

  const images = useMemo(
    () => [
      sanJoseImg,
      limonImg,
      cartagoImg,
      alajuelaImg,
      herediaImg,
      puntarenasImg,
      guanacasteImg,
    ],
    []
  );

  useEffect(() => {
    const id = window.setInterval(() => {
      setActive((index) => (index + 1) % images.length);
    }, 4500);

    return () => window.clearInterval(id);
  }, [images.length]);

  useEffect(() => {
    const loadProvinces = async () => {
      try {
        const data = await getProvinces();
        setProvinces(data);
      } catch (error) {
        console.error("Error loading provinces:", error);
      } finally {
        setLoading(false);
      }
    };

    loadProvinces();
  }, []);

  return (
    <main className="min-h-screen overflow-x-hidden bg-[#f7faf5] text-[#102018]">
      <section
        className="relative min-h-[92vh] w-full overflow-hidden bg-cover bg-center text-white"
        style={{
          backgroundImage: `linear-gradient(90deg, rgba(4,38,22,0.92), rgba(4,38,22,0.52), rgba(4,38,22,0.2)), url(${images[active]})`,
        }}
      >
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.05),rgba(5,34,20,0.76))]" />

        <header className="relative z-10 flex items-center justify-between px-8 py-5 md:px-14">
          <div className="flex items-center gap-4">
            <img
              src={logo}
              alt="Exploremos Costa Rica"
              className="h-32 w-auto object-contain"
            />
           
          </div>

          <nav className="hidden rounded-full bg-white/15 p-2 backdrop-blur-md md:flex">
            <button className="rounded-full px-5 py-2 text-sm font-bold hover:bg-white/15">
              Inicio
            </button>
            <button
              className="rounded-full px-5 py-2 text-sm font-bold hover:bg-white/15"
              onClick={() =>
                document
                  .getElementById("provincias")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Provincias
            </button>
            <button className="rounded-full px-5 py-2 text-sm font-bold hover:bg-white/15">
              Lugares
            </button>
            <button className="rounded-full px-5 py-2 text-sm font-bold hover:bg-white/15">
              Categorías
            </button>
          </nav>
        </header>

        <div className="toucan-flight absolute left-[-120px] top-[160px] z-20 text-[82px] drop-shadow-2xl">
          🦜
        </div>

        <div className="relative z-10 max-w-[760px] px-8 pt-24 md:px-20">
          <p className="mb-6 inline-flex rounded-full border border-white/20 bg-white/15 px-5 py-3 font-extrabold backdrop-blur-md">
            Pura vida • Naturaleza • Aventura
          </p>

          <h1 className="m-0 text-[52px] font-black leading-[0.94] tracking-[-3px] text-white drop-shadow-[0_16px_28px_rgba(0,0,0,0.28)] md:text-[88px]">
            Exploremos
            <span className="block italic text-[#78ff99]">Costa Rica</span>
          </h1>

          <p className="mt-7 max-w-[580px] text-lg font-semibold leading-relaxed text-white/90 md:text-xl">
            Explorá provincias, parques nacionales, playas, volcanes,
            cafeterías y rincones únicos del país.
          </p>

          <div className="mt-8">
            <button
              className="rounded-full bg-[#24d477] px-8 py-4 font-black text-white shadow-[0_18px_38px_rgba(36,212,119,0.34)]"
              onClick={() =>
                document
                  .getElementById("provincias")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Explorar lugares →
            </button>
          </div>
        </div>

        <div className="absolute bottom-28 right-12 z-10 hidden gap-4 rounded-[28px] border border-white/15 bg-[#082b19]/70 p-5 backdrop-blur-xl lg:flex">
          <div className="min-w-[120px] p-2">
            <MapPin className="text-[#7cff9b]" />
            <strong className="mt-2 block text-3xl">+28</strong>
            <span className="text-sm text-white/80">Lugares</span>
          </div>

          <div className="min-w-[120px] p-2">
            <Compass className="text-[#7cff9b]" />
            <strong className="mt-2 block text-3xl">7</strong>
            <span className="text-sm text-white/80">Provincias</span>
          </div>

          <div className="min-w-[120px] p-2">
            <Leaf className="text-[#7cff9b]" />
            <strong className="mt-2 block text-3xl">100%</strong>
            <span className="text-sm text-white/80">Pura vida</span>
          </div>
        </div>
      </section>

      <section className="relative z-20 mx-auto -mt-10 mb-24 flex w-[calc(100%-40px)] max-w-[1120px] flex-col gap-5 rounded-[34px] bg-white p-6 shadow-[0_28px_70px_rgba(13,79,43,0.16)] lg:flex-row lg:items-center">
        <div className="flex min-w-0 h-14 flex-1 items-center gap-3 rounded-full bg-[#f1f5f0] px-6 text-[#143d25]">
          <Search size={19} />
          <input
            className="w-full min-w-0 bg-transparent text-sm outline-none placeholder:text-[#5d7d62]"
            placeholder="Buscar lugares, parques, playas..."
          />
        </div>

        <div className="flex flex-wrap gap-3 justify-end">
          {[
            "Todas",
            "Parques",
            "Playas",
            "Volcanes",
            "Cultura",
            "Cafeterías",
          ].map((filter, index) => (
            <button
              key={filter}
              className={`rounded-full px-5 py-3 font-black ${
                index === 0
                  ? "bg-[#0d9a4c] text-white"
                  : "bg-[#edf5ee] text-[#123e23]"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>
      </section>

      <section
        id="provincias"
        className="mx-auto mb-14 w-[calc(100%-40px)] max-w-[1180px]"
      >
        <div className="mb-8 text-center">
          
          <h2 className="m-0 text-[36px] font-black leading-none tracking-[-2px] text-[#071f13] md:text-[52px]">
            Descubrí lo mejor de cada provincia
          </h2>

          <p className="mx-auto mt-4 max-w-[640px] text-lg leading-relaxed text-[#526158]">
            Elegí una provincia para explorar sus lugares turísticos,
            cafeterías, parques y rincones recomendados.
          </p>
        </div>

        {loading ? (
          <p className="text-center font-bold text-[#526158]">
            Cargando provincias...
          </p>
        ) : (
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
            {provinces.map((province) => (
              <button
                key={province.id}
                className="group overflow-hidden rounded-[30px] border border-[#0a321b]/10 bg-white text-left shadow-[0_18px_45px_rgba(10,59,32,0.08)] transition hover:-translate-y-1 hover:shadow-[0_28px_60px_rgba(10,59,32,0.16)]"
                onClick={() => navigate(`/provincias/${province.slug}`)}
              >
                <div
                  className="relative h-[230px] bg-cover bg-center"
                  style={{
                    backgroundImage: `linear-gradient(180deg, rgba(0,0,0,0.05), rgba(5,34,20,0.72)), url(${
                      provinceImages[province.name]
                    })`,
                  }}
                >
                  <span className="absolute right-5 top-5 grid h-12 w-12 place-items-center rounded-full bg-white/95 text-[#0d572b] shadow-md transition group-hover:bg-[#0d9a4c] group-hover:text-white">
                    {provinceIcons[province.name] ?? <Compass size={22} />}
                  </span>

                  <div className="absolute bottom-5 left-5 right-5">
                    <h3 className="text-3xl font-black text-white drop-shadow">
                      {province.name}
                    </h3>
                  </div>
                </div>

                <div className="p-6">
                  <p className="mb-5 text-base leading-relaxed text-[#526158]">
                    {province.description}
                  </p>

                  <div className="flex items-center justify-between">
                    <span className="font-black text-[#0d9a4c]">
                      Ver lugares
                    </span>

                    <span className="grid h-10 w-10 place-items-center rounded-full bg-[#edf5ee] text-[#0d572b] transition group-hover:bg-[#0d9a4c] group-hover:text-white">
                      →
                    </span>
                  </div>
                </div>
              </button>
            ))}
          </div>
        )}
      </section>

      <section className="relative overflow-hidden bg-gradient-to-r from-[#0a3f1e] via-[#0b5128] to-[#073d1d] px-8 py-16 text-white">
        <div className="pointer-events-none absolute -left-20 top-2 opacity-10">
          <Leaf size={260} strokeWidth={1.3} />
        </div>

        <div className="pointer-events-none absolute -right-20 bottom-0 opacity-10">
          <Leaf size={260} strokeWidth={1.3} />
        </div>

        <div className="mx-auto max-w-[1180px]">
          <h2 className="text-center text-3xl font-black tracking-[-1px] md:text-4xl">
            ¿Por qué explorar Costa Rica?
          </h2>

          <div className="mt-14 grid gap-10 md:grid-cols-4">
            {reasons.map((item) => {
              const Icon = item.icon;

              return (
                <article key={item.title} className="text-center">
                  <div className="mx-auto grid h-18 w-18 place-items-center rounded-full border border-white/15 bg-white/10 backdrop-blur-md">
                    <Icon size={32} strokeWidth={1.6} className="text-white" />
                  </div>

                  <h3 className="mt-5 text-lg font-black text-white">
                    {item.title}
                  </h3>

                  <p className="mx-auto mt-2 max-w-[210px] text-sm leading-relaxed text-white/75">
                    {item.text}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}