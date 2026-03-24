import Link from "next/link";
import BookingForm from "@/src/components/booking-form";

const HOME_OFFERS = [
  { name: "Clips", price: "A partir de 450 EUR" },
  { name: "Photos evenement", price: "A partir de 250 EUR" },
  { name: "Portraits / contenus", price: "A partir de 180 EUR" },
];

export default function Home() {
  return (
    <main className="mx-auto w-full max-w-6xl px-4 py-10">
      <section className="rounded-2xl border border-[#c7a85a]/35 bg-[#101010] p-8">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div>
            <p className="text-xs tracking-[0.3em] text-[#c7a85a]">PJT PRODUCTIONS</p>
            <h1 className="mt-3 text-4xl font-semibold text-[#f5e8c9]">
              Photo, video et production visuelle
            </h1>
            <p className="mt-3 max-w-2xl text-[#d3d3d3]">
              PJT Productions accompagne artistes, marques et evenements avec une
              image forte et une execution haut de gamme.
            </p>
          </div>

          <Link
            href="/auth"
            className="rounded-lg bg-[#c7a85a] px-4 py-2 text-sm font-medium text-black transition hover:bg-[#d5ba75]"
          >
            Se connecter
          </Link>
        </div>
      </section>

      <section className="mt-8">
        <h2 className="text-2xl font-semibold text-[#f5e8c9]">Tarifs</h2>
        <div className="mt-4 grid gap-4 md:grid-cols-3">
          {HOME_OFFERS.map((offer) => (
            <article
              key={offer.name}
              className="rounded-xl border border-[#c7a85a]/30 bg-[#101010] p-5"
            >
              <h3 className="text-lg font-semibold text-[#f5e8c9]">{offer.name}</h3>
              <p className="mt-2 text-[#c7a85a]">{offer.price}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-8 grid gap-8 lg:grid-cols-[1.2fr_1fr]">
        <BookingForm />

        <aside className="rounded-2xl border border-[#c7a85a]/30 bg-[#101010] p-6">
          <h2 className="text-2xl font-semibold text-[#f5e8c9]">A propos</h2>
          <p className="mt-3 text-sm leading-7 text-[#d3d3d3]">
            PJT Productions, dirige par Mehdi, realise des contenus photo et
            video au style cinematographique. Notre approche combine direction
            artistique, precision technique et storytelling pour valoriser votre
            image de marque.
          </p>
          <p className="mt-3 text-sm leading-7 text-[#d3d3d3]">
            Utilisez le formulaire pour envoyer votre demande, puis suivez son
            statut depuis votre dashboard.
          </p>
        </aside>
      </section>
    </main>
  );
}
