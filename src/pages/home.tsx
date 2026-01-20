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
  return (
    <div className="home">
      <section className="hero">
        <p className="heroKicker">Parques nacionales • Playas • Volcanes</p>
        <h1 className="heroTitle">Exploremos Costa Rica</h1>
        <p className="heroSubtitle">
          Descubrí parques nacionales, atractivos y destinos por provincia.
        </p>
      </section>

      <section className="section">
        <div className="sectionHeader">
          <h2 className="sectionTitle">Explorar por provincia</h2>
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
              onClick={() => alert(`Luego abrimos la provincia: ${p.name}`)}
            />
          ))}
        </div>
      </section>
    </div>
  );
}
