import { useEffect, useMemo, useState } from "react";
import ProvinceCard from "../shared/ProvinceCard";
import {
  Building2,
  Palmtree,
  Church,
  Mountain,
  Leaf,
  Ship,
  Compass,
} from "lucide-react";

import alajuelaImg from "../assets/carousel/alajuela.jpg";
import cartagoImg from "../assets/carousel/cartago.jpg";
import guanacasteImg from "../assets/carousel/guanacaste.jpg";
import herediaImg from "../assets/carousel/heredia.jpg";
import limonImg from "../assets/carousel/limon.jpg";
import puntarenasImg from "../assets/carousel/puntarenas.jpg";
import sanJoseImg from "../assets/carousel/sanjose.jpg";

const provinces = [
  { name: "San José", icon: <Building2 size={26} /> },
  { name: "Limón", icon: <Palmtree size={26} /> },
  { name: "Cartago", icon: <Church size={26} /> },
  { name: "Alajuela", icon: <Mountain size={26} /> },
  { name: "Heredia", icon: <Leaf size={26} /> },
  { name: "Puntarenas", icon: <Ship size={26} /> },
  { name: "Guanacaste", icon: <Compass size={26} /> },
];

export default function Home() {
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

  const [active, setActive] = useState(0);

  // Autoplay cada 3s
  useEffect(() => {
    const id = window.setInterval(() => {
      setActive((i) => (i + 1) % images.length);
    }, 3000);

    return () => window.clearInterval(id);
  }, [images.length]);

  return (
    <div className="home">
      <section className="hero">
        <h1 className="heroTitle">Exploremos Costa Rica</h1>
        <p className="heroSubtitle">
          Descubrí parques nacionales, atractivos y destinos por provincia.
        </p>
      </section>

      {/* CARRUSEL */}
      <section className="carousel">
        <div className="carouselFrame">
          <img className="carouselImg" src={images[active]} alt="Costa Rica" />
        </div>
        <div className="carouselDots">
          {images.map((_, idx) => (
            <button
              key={idx}
              className={`dot ${idx === active ? "dotActive" : ""}`}
              onClick={() => setActive(idx)}
              type="button"
              aria-label={`Slide ${idx + 1}`}
            />
          ))}
        </div>
      </section>

      {/* PROVINCIAS */}
      <section className="section">
        <div className="sectionHeader">
          <p className="sectionSubtitle">
            Elegí una provincia para ver lugares recomendados.
          </p>
        </div>

        <div className="provinceGrid">
          {provinces.map((p) => (
            <ProvinceCard
              key={p.name}
              title={p.name}
              icon={p.icon}
              onClick={() => alert(` ${p.name}`)}
            />
          ))}
        </div>
      </section>
    </div>
  );
}
