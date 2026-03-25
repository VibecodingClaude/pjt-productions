'use client';

import { useState } from 'react';

const PROJECTS = [
  {
    id: 1,
    title: "Clip Cinématographique",
    category: "Clips",
    description: "Production haut de gamme avec direction artistique complète",
    image: "/portfolio-images/proj-008.jpg"
  },
  {
    id: 2,
    title: "Séance Photo Studio",
    category: "Photos",
    description: "Portraits et contenus professionnels en studio",
    image: "/portfolio-images/proj-015.jpg"
  },
  {
    id: 3,
    title: "Production Landscape",
    category: "Vidéos",
    description: "Cinématographie documentaire et paysages",
    image: "/portfolio-images/proj-017.jpg"
  },
  {
    id: 4,
    title: "Clip Artistique",
    category: "Clips",
    description: "Réalisation créative avec effets visuels",
    image: "/portfolio-images/proj-025.jpg"
  },
  {
    id: 5,
    title: "Contenu Social Media",
    category: "Photos",
    description: "Visuels optimisés pour réseaux sociaux",
    image: "/portfolio-images/proj-024.jpg"
  },
  {
    id: 6,
    title: "Reportage Événementiel",
    category: "Vidéos",
    description: "Couverture événementielle professionnelle",
    image: "/portfolio-images/proj-023.jpg"
  },
];

const CATEGORIES = ["Tous", "Clips", "Photos", "Vidéos"];

export default function PortfolioPage() {
  const [selectedCategory, setSelectedCategory] = useState("Tous");

  const filteredProjects =
    selectedCategory === "Tous"
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === selectedCategory);

  return (
    <main className="mx-auto w-full max-w-6xl px-4 py-12">
      {/* HEADER */}
      <section className="relative overflow-hidden rounded-3xl border border-[#c7a85a]/40 bg-gradient-to-br from-[#1a1a1a] via-[#101010] to-[#0d0d0d] p-12 shadow-2xl">
        <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-gradient-to-br from-[#c7a85a]/10 to-transparent blur-3xl"></div>

        <div className="relative">
          <p className="text-xs tracking-[0.4em] font-bold text-[#d4af37]">PORTFOLIO</p>
          <h1 className="mt-4 text-5xl font-bold leading-tight text-[#f5e8c9]">
            Mes réalisations
          </h1>
          <p className="mt-4 max-w-2xl text-lg leading-8 text-[#e0e0e0]">
            Une sélection de projets qui illustrent mon approche créative et ma maîtrise technique.
          </p>
        </div>
      </section>

      {/* FILTRES */}
      <section className="mt-10">
        <div className="flex flex-wrap gap-3">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`rounded-full px-6 py-2 font-semibold transition-all ${
                selectedCategory === cat
                  ? "bg-gradient-to-r from-[#c7a85a] to-[#d4af37] text-black shadow-lg"
                  : "border-2 border-[#c7a85a]/40 text-[#d3d3d3] hover:border-[#d4af37]/60 hover:text-[#f5e8c9]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* GALERIE */}
      <section className="mt-12">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project) => (
            <article
              key={project.id}
              className="group relative overflow-hidden rounded-2xl border border-[#c7a85a]/40 bg-black shadow-xl transition-all hover:border-[#d4af37]/80 hover:shadow-2xl hover:shadow-[#d4af37]/30 hover:-translate-y-2"
            >
              {/* IMAGE */}
              <div className="relative h-72 w-full overflow-hidden bg-black">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-70 transition-opacity group-hover:opacity-50"></div>
              </div>

              {/* CONTENU */}
              <div className="relative p-6">
                <p className="text-xs font-bold text-[#d4af37] tracking-[0.2em] uppercase">
                  {project.category}
                </p>
                <h3 className="mt-3 text-2xl font-bold text-[#f5e8c9]">
                  {project.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-[#d3d3d3]">
                  {project.description}
                </p>

                {/* CTA */}
                <a
                  href="/booking"
                  className="mt-4 inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-[#d4af37] to-[#f5e8c9] px-4 py-2 text-sm font-bold text-black transition-all hover:shadow-lg hover:shadow-[#d4af37]/50"
                >
                  Devis →
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="mt-16 rounded-2xl border border-[#c7a85a]/40 bg-gradient-to-br from-[#1a1a1a] via-[#101010] to-[#0d0d0d] p-8 text-center">
        <h2 className="text-2xl font-bold text-[#f5e8c9]">Intéressé par un projet similaire?</h2>
        <p className="mt-3 text-[#d3d3d3]">Discutons de vos idées et de comment je peux les concrétiser</p>

        <div className="mt-6 flex justify-center gap-4">
          <a
            href="/booking"
            className="rounded-lg bg-gradient-to-r from-[#c7a85a] to-[#d4af37] px-6 py-3 font-semibold text-black transition-all hover:shadow-lg hover:shadow-[#c7a85a]/50"
          >
            Démarrer un projet
          </a>
          <a
            href="/a-propos"
            className="rounded-lg border-2 border-[#c7a85a]/60 px-6 py-3 font-semibold text-[#f5e8c9] transition-all hover:bg-[#c7a85a]/15"
          >
            En savoir plus sur moi
          </a>
        </div>
      </section>
    </main>
  );
}
