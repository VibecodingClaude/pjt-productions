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
      {/* HERO SECTION */}
      <section className="relative overflow-hidden rounded-3xl border border-[#c7a85a]/40 bg-gradient-to-br from-[#1a1a1a] via-[#101010] to-[#0d0d0d] p-12 shadow-2xl">
        <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-gradient-to-br from-[#c7a85a]/10 to-transparent blur-3xl"></div>

        <div className="relative flex flex-wrap items-start justify-between gap-6">
          <div className="flex-1 min-w-0">
            <p className="text-xs tracking-[0.4em] font-bold text-[#d4af37]">PJT PRODUCTIONS</p>
            <h1 className="mt-4 text-5xl font-bold leading-tight text-[#f5e8c9]">
              Production visuelle de prestige
            </h1>
            <p className="mt-4 max-w-2xl text-lg leading-8 text-[#e0e0e0]">
              Clips cinematographiques, photographie professionnelle et contenu premium pour artistes, marques et evenements.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href="/booking"
                className="group relative rounded-lg bg-gradient-to-r from-[#c7a85a] to-[#d4af37] px-6 py-3 font-semibold text-black transition-all hover:shadow-lg hover:shadow-[#c7a85a]/50 hover:scale-105"
              >
                Faire une demande
                <span className="absolute inset-0 rounded-lg bg-white/20 opacity-0 transition-opacity group-hover:opacity-100"></span>
              </Link>
              <Link
                href="/tarifs"
                className="rounded-lg border-2 border-[#c7a85a]/60 px-6 py-3 font-semibold text-[#f5e8c9] transition-all hover:bg-[#c7a85a]/15 hover:border-[#d4af37]"
              >
                Voir tarifs
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
