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
      {/* HERO SECTION - SPECTACULAIRE */}
      <section className="relative -mx-4 mb-16 overflow-hidden rounded-3xl border-2 border-[#FF006E] bg-gradient-to-br from-[#0a0a0a] via-[#1a0a15] to-[#0a1a1a] shadow-2xl shadow-[#FF006E]/30">
        {/* Animated Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#FF006E]/20 via-transparent to-[#00D9FF]/20 animate-pulse"></div>

        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/portfolio-images/proj-017.jpg')",
            opacity: 0.25,
          }}
        ></div>

        {/* Overlay Gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent"></div>

        {/* Animated Blobs */}
        <div className="absolute -left-40 -top-40 h-96 w-96 rounded-full bg-gradient-to-br from-[#FF006E] to-transparent blur-3xl opacity-30 animate-blob"></div>
        <div className="absolute -right-40 -bottom-40 h-96 w-96 rounded-full bg-gradient-to-br from-[#00D9FF] to-transparent blur-3xl opacity-30 animate-blob animation-delay-2000"></div>

        {/* Content */}
        <div className="relative px-12 py-24 md:py-40">
          <div className="max-w-4xl">
            <p className="text-sm tracking-[0.6em] font-black text-[#00D9FF] animate-pulse">
              ✨ PJT PRODUCTIONS ✨
            </p>
            <h1 className="mt-8 text-7xl md:text-8xl font-black leading-tight">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF006E] via-white to-[#00D9FF]">
                Créativité<br />Spectaculaire
              </span>
            </h1>
            <p className="mt-8 max-w-3xl text-2xl leading-10 font-semibold text-[#E0E0E0]">
              Clips cinématographiques, photos professionnelles et vidéos qui transforment vos idées en chef-d'œuvre visuel.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/booking"
                className="group relative rounded-full bg-gradient-to-r from-[#FF006E] to-[#00D9FF] px-10 py-4 font-black text-black text-lg transition-all hover:shadow-2xl hover:shadow-[#FF006E]/70 hover:scale-110 hover:-translate-y-2"
              >
                Démarrer →
                <span className="absolute inset-0 rounded-full bg-white/20 opacity-0 transition-opacity group-hover:opacity-100"></span>
              </Link>
              <Link
                href="/portfolio"
                className="group rounded-full border-3 border-[#00D9FF] px-10 py-4 font-black text-[#00D9FF] text-lg transition-all hover:bg-[#00D9FF]/10 hover:shadow-lg hover:shadow-[#00D9FF]/50"
              >
                Portfolio →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* OFFRES RAPIDES */}
      <section className="mt-16">
        <div className="mb-8">
          <h2 className="text-4xl font-black text-white">Offres principales</h2>
          <div className="mt-2 h-1.5 w-32 bg-gradient-to-r from-[#FF006E] via-[#00D9FF] to-[#FF006E]"></div>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {HOME_OFFERS.map((offer) => (
            <article
              key={offer.name}
              className="group relative overflow-hidden rounded-2xl border-2 border-[#FF006E]/50 bg-gradient-to-br from-[#0a0a0a] to-[#1a0515] p-8 shadow-xl transition-all hover:border-[#00D9FF] hover:shadow-2xl hover:shadow-[#FF006E]/40 hover:-translate-y-2"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#FF006E]/10 to-[#00D9FF]/10 opacity-0 transition-opacity group-hover:opacity-100"></div>

              <div className="relative">
                <h3 className="text-2xl font-black text-white">{offer.name}</h3>
                <p className="mt-4 text-xl font-bold bg-gradient-to-r from-[#FF006E] to-[#00D9FF] bg-clip-text text-transparent">{offer.price}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* FORMULAIRE + À PROPOS */}
      <section className="mt-14 grid gap-8 lg:grid-cols-[1.2fr_1fr]">
        <BookingForm />

        <aside className="relative overflow-hidden rounded-2xl border-2 border-[#00D9FF]/50 bg-gradient-to-br from-[#0a1a1a] to-[#0a0a1a] p-8 shadow-xl">
          <div className="absolute -right-20 -top-20 h-40 w-40 rounded-full bg-gradient-to-br from-[#00D9FF]/20 to-transparent blur-3xl"></div>

          <div className="relative">
            <h2 className="text-2xl font-black text-white">À propos</h2>
            <div className="mt-2 h-1.5 w-16 bg-gradient-to-r from-[#00D9FF] to-[#FF006E]"></div>

            <p className="mt-6 leading-8 text-[#E0E0E0]">
              <span className="font-black text-[#FF006E]">Mehdi</span> et son équipe de PJT Productions créent des contenus photo et vidéo au style cinématographique. Direction artistique, technique maîtrisée et storytelling puissant pour transformer votre vision.
            </p>

            <ul className="mt-6 space-y-3 text-sm text-[#E0E0E0]">
              <li className="flex items-center gap-3">
                <span className="h-3 w-3 rounded-full bg-gradient-to-r from-[#FF006E] to-[#00D9FF]"></span>
                Disponible 7j/7
              </li>
              <li className="flex items-center gap-3">
                <span className="h-3 w-3 rounded-full bg-gradient-to-r from-[#FF006E] to-[#00D9FF]"></span>
                Devis gratuit
              </li>
              <li className="flex items-center gap-3">
                <span className="h-3 w-3 rounded-full bg-gradient-to-r from-[#FF006E] to-[#00D9FF]"></span>
                Livraisons rapides
              </li>
            </ul>
          </div>
        </aside>
      </section>
    </main>
  );
}
