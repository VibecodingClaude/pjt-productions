import Link from "next/link";
import BookingForm from "@/src/components/booking-form";

const HOME_OFFERS = [
  { name: "Clips", price: "A partir de 450 EUR" },
  { name: "Photos evenement", price: "A partir de 250 EUR" },
  { name: "Portraits / contenus", price: "A partir de 180 EUR" },
];

export default function Home() {
  return (
    <main className="mx-auto w-full max-w-6xl px-4 py-12">
      {/* HERO SECTION - CINEMATIC */}
      <section className="relative -mx-4 mb-14 overflow-hidden rounded-3xl border-b-4 border-[#c7a85a] bg-black">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/portfolio-images/proj-017.jpg')",
            opacity: 0.3,
          }}
        ></div>

        {/* Overlay Gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent"></div>

        {/* Content */}
        <div className="relative px-12 py-20 md:py-32">
          <div className="max-w-3xl">
            <p className="text-sm tracking-[0.5em] font-bold text-[#d4af37] animate-pulse">
              ★ PJT PRODUCTIONS
            </p>
            <h1 className="mt-6 text-6xl md:text-7xl font-black leading-tight text-white">
              Production <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#d4af37] to-[#f5e8c9]">Cinématographique</span>
            </h1>
            <p className="mt-6 max-w-2xl text-xl leading-8 text-[#e0e0e0]">
              Clips, photos et vidéos professionnelles qui transforment votre vision en réalité visuelle exceptionnelle.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/booking"
                className="group relative rounded-lg bg-gradient-to-r from-[#d4af37] to-[#f5e8c9] px-8 py-4 font-bold text-black transition-all hover:shadow-2xl hover:shadow-[#d4af37]/50 hover:scale-110 hover:-translate-y-1"
              >
                Démarrer un projet
                <span className="absolute inset-0 rounded-lg bg-white/30 opacity-0 transition-opacity group-hover:opacity-100"></span>
              </Link>
              <Link
                href="/portfolio"
                className="group rounded-lg border-2 border-[#d4af37] px-8 py-4 font-bold text-[#d4af37] transition-all hover:bg-[#d4af37]/10 hover:shadow-lg"
              >
                Voir portfolio →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* OFFRES RAPIDES */}
      <section className="mt-14">
        <div className="mb-6">
          <h2 className="text-3xl font-bold text-[#f5e8c9]">Offres principales</h2>
          <div className="mt-1 h-1 w-16 bg-gradient-to-r from-[#c7a85a] to-[#d4af37]"></div>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {HOME_OFFERS.map((offer) => (
            <article
              key={offer.name}
              className="group relative overflow-hidden rounded-2xl border border-[#c7a85a]/30 bg-gradient-to-br from-[#1a1a1a] to-[#101010] p-6 shadow-lg transition-all hover:border-[#d4af37]/60 hover:shadow-xl hover:shadow-[#c7a85a]/20 hover:-translate-y-1"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#c7a85a]/5 to-transparent opacity-0 transition-opacity group-hover:opacity-100"></div>

              <div className="relative">
                <h3 className="text-xl font-bold text-[#f5e8c9]">{offer.name}</h3>
                <p className="mt-3 text-lg font-semibold text-[#d4af37]">{offer.price}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* FORMULAIRE + À PROPOS */}
      <section className="mt-14 grid gap-8 lg:grid-cols-[1.2fr_1fr]">
        <BookingForm />

        <aside className="relative overflow-hidden rounded-2xl border border-[#c7a85a]/30 bg-gradient-to-br from-[#1a1a1a] to-[#101010] p-8 shadow-lg">
          <div className="absolute -right-20 -top-20 h-40 w-40 rounded-full bg-gradient-to-br from-[#c7a85a]/10 to-transparent blur-3xl"></div>

          <div className="relative">
            <h2 className="text-2xl font-bold text-[#f5e8c9]">A propos</h2>
            <div className="mt-2 h-1 w-12 bg-gradient-to-r from-[#c7a85a] to-[#d4af37]"></div>

            <p className="mt-5 leading-8 text-[#d3d3d3]">
              <span className="font-semibold text-[#f5e8c9]">Mehdi</span> et son equipe de PJT Productions creent des contenus photo et video au style cinematographique. Direction artistique, precision technique et storytelling puissant pour valoriser votre marque.
            </p>

            <ul className="mt-6 space-y-2 text-sm text-[#d3d3d3]">
              <li className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-[#c7a85a]"></span>
                Disponible 7j/7
              </li>
              <li className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-[#c7a85a]"></span>
                Devis gratuit
              </li>
              <li className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-[#c7a85a]"></span>
                Livraisons rapides
              </li>
            </ul>
          </div>
        </aside>
      </section>
    </main>
  );
}
