import { Leaf } from "lucide-react";
import logo from "../assets/logo.png";

export default function AppFooter() {
  return (
    <footer className="relative overflow-hidden bg-gradient-to-r from-[#0a3f1e] via-[#07331b] to-[#041c11] text-white">
      <div className="pointer-events-none absolute -left-20 top-8 opacity-10">
        <Leaf size={260} strokeWidth={1.2} />
      </div>
      <div className="pointer-events-none absolute -right-20 bottom-12 opacity-10">
        <Leaf size={260} strokeWidth={1.2} />
      </div>

      <div className="mx-auto flex max-w-[1180px] flex-col gap-12 px-6 py-16 sm:px-8 lg:flex-row lg:items-start lg:justify-between">
        <div className="max-w-[500px] space-y-5">
          <div className="flex items-center gap-3">
            <img src={logo} alt="Exploremos Costa Rica" className="h-14 w-auto" />
            <span className="text-sm uppercase tracking-[0.35em] text-white/70">
              Exploremos
            </span>
          </div>

          <p className="max-w-[420px] text-sm leading-relaxed text-white/70">
            Descubre los mejores lugares de Costa Rica: parques nacionales,
            playas, volcanes, cultura y cafeterías en una sola experiencia.
          </p>

          <div className="flex flex-wrap gap-4 text-sm text-white/70">
            <a href="#" className="hover:text-white">
              Inicio
            </a>
            <a href="#provincias" className="hover:text-white">
              Provincias
            </a>
            <a href="#" className="hover:text-white">
              Lugares
            </a>
            <a href="#" className="hover:text-white">
              Categorías
            </a>
          </div>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:w-[420px]">
          <div>
            <h3 className="text-sm font-black uppercase tracking-[0.2em] text-white/80">
              Contáctanos
            </h3>
            <p className="mt-4 text-sm text-white/70">
              hola@exploremoscr.com
            </p>
            <p className="mt-2 text-sm text-white/70">
              Paseo por Costa Rica, San José
            </p>
          </div>

          <div>
            <h3 className="text-sm font-black uppercase tracking-[0.2em] text-white/80">
              Síguenos
            </h3>
            <div className="mt-4 space-y-3 text-sm text-white/70">
              <p>Instagram</p>
              <p>Facebook</p>
              <p>TikTok</p>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 px-6 py-5 text-center text-sm text-white/50 sm:px-8">
        © 2026 Exploremos Costa Rica. Todos los derechos reservados.
      </div>
    </footer>
  );
}
