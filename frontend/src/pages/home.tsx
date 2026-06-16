import { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import ProvinceCard from "../shared/ProvinceCard";
import { getProvinces } from "../services/provinceService";
import type { Province } from "../types/province";

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
import sanJoseImg from "../assets/carousel/sanJose.jpg";

export default function Home() {
  const navigate = useNavigate();

  const [provinces, setProvinces] = useState<Province[]>([]);
  const [loading, setLoading] = useState(true);

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

  const provinceIcons: Record<string, React.ReactNode> = {
    "San José": <Building2 size={26} />,
    Limón: <Palmtree size={26} />,
    Cartago: <Church size={26} />,
    Alajuela: <Mountain size={26} />,
    Heredia: <Leaf size={26} />,
    Puntarenas: <Ship size={26} />,
    Guanacaste: <Compass size={26} />,
  };

  const [active, setActive] = useState(0);

  useEffect(() => {
    const id = window.setInterval(() => {
      setActive((i) => (i + 1) % images.length);
    }, 3000);

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
    <div className="home">
      <section className="hero">
        <h1 className="heroTitle">Exploremos Costa Rica</h1>
        <p className="heroSubtitle">
          Descubrí parques nacionales, atractivos y destinos por provincia.
        </p>
      </section>

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

      <section className="section">
        <div className="sectionHeader">
          <p className="sectionSubtitle">
            Elegí una provincia para ver lugares recomendados.
          </p>
        </div>

        {loading ? (
          <p>Cargando provincias...</p>
        ) : (
          <div className="provinceGrid">
            {provinces.map((province) => (
              <ProvinceCard
                key={province.id}
                title={province.name}
                icon={
                  provinceIcons[province.name] ?? <Compass size={26} />
                }
                onClick={() =>
                  navigate(`/provincias/${province.slug}`)
                }
              />
            ))}
          </div>
        )}
      </section>
    </div>
  );
}