'use client';

import Link from "next/link";
import BookingForm from "@/src/components/booking-form";
import { useGsapAnimations } from '@/src/hooks/useGsapAnimations';
import { useCustomCursor } from '@/src/hooks/useCustomCursor';

const HOME_OFFERS = [
  { name: "Clips", price: "A partir de 450 EUR" },
  { name: "Photos evenement", price: "A partir de 250 EUR" },
  { name: "Portraits / contenus", price: "A partir de 180 EUR" },
];

export default function Home() {
  const containerRef = useGsapAnimations();
  useCustomCursor();

  return (
    <main ref={containerRef} className="mx-auto w-full max-w-6xl px-4 py-12">
      {/* HERO SECTION - CHIARA LUZZANA STYLE */}
      <section className="relative -mx-4 mb-16 overflow-hidden bg-[#E5E3DC] py-32 md:py-48">
        {/* Background Image Subtle */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/portfolio-images/proj-017.jpg')",
            opacity: 0.08,
          }}
        ></div>

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#E5E3DC] via-[#E5E3DC]/95 to-[#E5E3DC]"></div>

        {/* Content */}
        <div className="relative mx-auto max-w-6xl px-4">
          <div className="max-w-5xl">
            <p className="text-sm tracking-[0.4em] font-semibold text-[#0A0A0A] uppercase">
              Production Visuelle
            </p>
            <h1 className="mt-8 text-7xl md:text-8xl font-black leading-tight text-[#0A0A0A]">
              Créativité<br />Spectaculaire
            </h1>
            <p className="mt-8 max-w-3xl text-2xl leading-10 font-light text-[#2a2a2a]">
              Clips cinématographiques, photos professionnelles et vidéos qui transforment vos idées en chef-d'œuvre visuel.
            </p>

            <div className="mt-12 flex flex-wrap gap-6">
              <Link
                href="/booking"
                className="group relative px-10 py-4 font-bold text-lg text-[#0A0A0A] transition-all"
              >
                <span className="relative z-10">Démarrer un projet</span>
                <div className="absolute inset-0 border-2 border-[#0A0A0A] rounded-none transition-all group-hover:border-[#0A0A0A]/50"></div>
                <div className="absolute inset-0 bg-[#0A0A0A] rounded-none opacity-0 transition-opacity group-hover:opacity-5"></div>
              </Link>
              <Link
                href="/portfolio"
                className="px-10 py-4 font-bold text-lg text-[#0A0A0A] border-b-2 border-[#0A0A0A] transition-all hover:border-[#0A0A0A]/50"
              >
                Voir portfolio
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* OFFRES RAPIDES */}
      <section className="mt-20 py-20 bg-white border-t border-b border-[#0A0A0A]/10">
        <div className="mx-auto max-w-6xl px-4">
          <div className="mb-12">
            <h2 className="text-5xl font-black text-[#0A0A0A]">Offres</h2>
            <div className="mt-4 h-0.5 w-12 bg-[#0A0A0A]"></div>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {HOME_OFFERS.map((offer) => (
              <article
                key={offer.name}
                className="group relative border-l-4 border-[#0A0A0A] pl-6 transition-all hover:border-[#0A0A0A]/50 hover:translate-x-2"
              >
                <h3 className="text-2xl font-bold text-[#0A0A0A]">{offer.name}</h3>
                <p className="mt-4 text-lg font-semibold text-[#4a4a4a]">{offer.price}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* FORMULAIRE + À PROPOS */}
      <section className="mt-14 grid gap-8 lg:grid-cols-[1.2fr_1fr]">
        <BookingForm />

        <aside className="relative rounded-none border-l-4 border-[#0A0A0A] bg-white p-8 pl-8">
          <div className="relative">
            <h2 className="text-3xl font-black text-[#0A0A0A]">À propos</h2>
            <div className="mt-3 h-0.5 w-12 bg-[#0A0A0A]"></div>

            <p className="mt-8 leading-8 text-[#2a2a2a]">
              <span className="font-bold text-[#0A0A0A]">Mehdi</span> et son équipe de PJT Productions créent des contenus photo et vidéo au style cinématographique. Direction artistique, technique maîtrisée et storytelling puissant pour transformer votre vision.
            </p>

            <ul className="mt-8 space-y-3 text-sm text-[#2a2a2a]">
              <li className="flex items-center gap-3">
                <span className="h-1 w-1 rounded-full bg-[#0A0A0A]"></span>
                Disponible 7j/7
              </li>
              <li className="flex items-center gap-3">
                <span className="h-1 w-1 rounded-full bg-[#0A0A0A]"></span>
                Devis gratuit
              </li>
              <li className="flex items-center gap-3">
                <span className="h-1 w-1 rounded-full bg-[#0A0A0A]"></span>
                Livraisons rapides
              </li>
            </ul>
          </div>
        </aside>
      </section>
    </main>
  );
}