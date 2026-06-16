import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getProvinceBySlug } from "../services/provinceService";

type Category = {
  id: string;
  name: string;
  slug: string;
};

type Place = {
  id: string;
  name: string;
  slug: string;
  description: string;
  imageUrl: string;
  category: Category;
};

type ProvinceDetail = {
  id: string;
  name: string;
  slug: string;
  description: string;
  imageUrl: string;
  places: Place[];
};

export default function ProvinceDetailPage() {
  const { slug } = useParams();
  const navigate = useNavigate();

  const [province, setProvince] = useState<ProvinceDetail | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadProvince = async () => {
      if (!slug) return;

      try {
        const data = await getProvinceBySlug(slug);
        setProvince(data);
      } catch (error) {
        console.error("Error loading province:", error);
      } finally {
        setLoading(false);
      }
    };

    loadProvince();
  }, [slug]);

  if (loading) return <p className="home">Cargando provincia...</p>;

  if (!province) return <p className="home">No se encontró la provincia.</p>;

  return (
    <main className="home">
      <button
        type="button"
        className="backButton"
        onClick={() => navigate("/")}
      >
        ← Volver
      </button>

      <section className="hero">
        <h1 className="heroTitle">{province.name}</h1>
        <p className="heroSubtitle">{province.description}</p>
      </section>

      <section className="carousel">
        <div className="carouselFrame">
          <img
            className="carouselImg"
            src={province.imageUrl}
            alt={province.name}
          />
        </div>
      </section>

      <section className="section">
        <div className="sectionHeader">
          <h2 className="sectionTitle">Lugares recomendados</h2>
          <p className="sectionSubtitle">
            Explorá atractivos, parques, cafeterías y destinos de esta provincia.
          </p>
        </div>

        {province.places.length === 0 ? (
          <p>No hay lugares registrados para esta provincia.</p>
        ) : (
          <div className="placeGrid">
            {province.places.map((place) => (
              <button
                key={place.id}
                type="button"
                className="placeCard"
                onClick={() => navigate(`/lugares/${place.slug}`)}
              >
                <img
                  src={place.imageUrl}
                  alt={place.name}
                  className="placeCardImage"
                />

                <div className="placeCardContent">
                  <span className="placeCategory">{place.category.name}</span>
                  <h3>{place.name}</h3>
                  <p>{place.description}</p>
                </div>
              </button>
            ))}
          </div>
        )}
      </section>
    </main>
  );
}