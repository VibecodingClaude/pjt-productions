export default function TarifsPage() {
  return (
    <main className="mx-auto w-full max-w-6xl px-4 py-12 bg-white">
      <section className="py-12 border-b border-[#0A0A0A]/10">
        <p className="text-xs tracking-[0.4em] font-semibold text-[#0A0A0A] uppercase">Grille tarifaire</p>
        <h1 className="mt-4 text-5xl font-black text-[#0A0A0A]">Tarifs</h1>
        <p className="mt-3 text-lg text-[#4a4a4a]">
          Tarifs complets · Artistes & Entreprises
        </p>
      </section>

      {/* ARTISTES */}
      <section className="mt-10">
        <h2 className="text-2xl font-semibold text-[#f5e8c9]">ARTISTES & CRÉATEURS</h2>
        <p className="mt-1 text-sm text-[#d3d3d3]">Musiciens · Rappeurs · Chanteurs · Influenceurs</p>

        {/* Clips */}
        <div className="mt-6">
          <h3 className="text-lg font-semibold text-[#c7a85a]">Clip Vidéo</h3>
          <div className="mt-4 grid gap-4 md:grid-cols-3">
            {[
              {
                title: "Clip Standard",
                price: "350€",
                details: [
                  "4h · 2 lieux max",
                  "2-3 min",
                  "Montage + étalonnage",
                  "1 retour inclus",
                  "Livraison 7j",
                ],
              },
              {
                title: "Clip Prestige",
                price: "650€",
                details: [
                  "8h · 4 lieux max",
                  "3-5 min",
                  "Effets & transitions",
                  "5 retours inclus",
                  "Livraison 14j",
                ],
              },
              {
                title: "Clip Ultime",
                price: "1 200€",
                details: [
                  "10h · Lieux illimités",
                  "Storytelling + VFX",
                  "10 retours inclus",
                  "Livraison 21j",
                ],
              },
            ].map((offer) => (
              <article
                key={offer.title}
                className="rounded-xl border border-[#c7a85a]/35 bg-[#101010] p-6"
              >
                <h4 className="text-lg font-semibold text-[#f5e8c9]">{offer.title}</h4>
                <p className="mt-2 text-xl font-bold text-[#c7a85a]">{offer.price}</p>
                <ul className="mt-4 space-y-1 text-sm text-[#d3d3d3]">
                  {offer.details.map((detail, idx) => (
                    <li key={idx}>• {detail}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>

        {/* Shooting Photo */}
        <div className="mt-8">
          <h3 className="text-lg font-semibold text-[#c7a85a]">Shooting Photo</h3>
          <div className="mt-4 grid gap-4 md:grid-cols-3">
            {[
              {
                title: "Session Rapide",
                price: "150€",
                details: ["1h · 1 lieu", "15 photos retouchées"],
              },
              {
                title: "Session Complète",
                price: "280€",
                details: ["2h · 2 lieux", "30 photos retouchées"],
              },
              {
                title: "Session Premium",
                price: "450€",
                details: ["4h · 4 lieux max", "50 photos retouchées"],
              },
            ].map((offer) => (
              <article
                key={offer.title}
                className="rounded-xl border border-[#c7a85a]/35 bg-[#101010] p-6"
              >
                <h4 className="text-lg font-semibold text-[#f5e8c9]">{offer.title}</h4>
                <p className="mt-2 text-xl font-bold text-[#c7a85a]">{offer.price}</p>
                <ul className="mt-4 space-y-1 text-sm text-[#d3d3d3]">
                  {offer.details.map((detail, idx) => (
                    <li key={idx}>• {detail}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* PROFESSIONNELS */}
      <section className="mt-12">
        <h2 className="text-2xl font-semibold text-[#f5e8c9]">PROS & ENTREPRISES</h2>
        <p className="mt-1 text-sm text-[#d3d3d3]">Agences immo · Hôtels · Marques · Événements</p>

        {/* Hôtellerie */}
        <div className="mt-6">
          <h3 className="text-lg font-semibold text-[#c7a85a]">Hôtellerie & Tourisme</h3>
          <div className="mt-4 grid gap-4 md:grid-cols-3">
            {[
              {
                title: "Photo + Vidéo Chambre",
                price: "250€",
                details: ["1h · 5 photos HDR", "1 vidéo Reels/site"],
              },
              {
                title: "Photo + Vidéo Suite",
                price: "450€",
                details: ["2h · 10 photos HDR", "2 vidéos livrées"],
              },
              {
                title: "Reportage Hôtel*",
                price: "1 200€",
                details: ["8h · 15 espaces", "Photos + vidéos inclus"],
              },
            ].map((offer) => (
              <article
                key={offer.title}
                className="rounded-xl border border-[#c7a85a]/35 bg-[#101010] p-6"
              >
                <h4 className="text-lg font-semibold text-[#f5e8c9]">{offer.title}</h4>
                <p className="mt-2 text-xl font-bold text-[#c7a85a]">{offer.price}</p>
                <ul className="mt-4 space-y-1 text-sm text-[#d3d3d3]">
                  {offer.details.map((detail, idx) => (
                    <li key={idx}>• {detail}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>

        {/* Photo Professionnelle */}
        <div className="mt-8">
          <h3 className="text-lg font-semibold text-[#c7a85a]">Shooting Photo Professionnel</h3>
          <div className="mt-4 grid gap-4 md:grid-cols-3">
            {[
              {
                title: "Photo Produit",
                price: "350€",
                details: ["2h · 20 produits", "30 photos retouchées"],
              },
              {
                title: "Photo d'Équipe",
                price: "500€",
                details: ["3h · Portraits + groupe", "50 photos retouchées"],
              },
              {
                title: "Photo de Bien Immo",
                price: "280€",
                details: ["1h30 · Grand angle", "20 photos HDR · 48h"],
              },
            ].map((offer) => (
              <article
                key={offer.title}
                className="rounded-xl border border-[#c7a85a]/35 bg-[#101010] p-6"
              >
                <h4 className="text-lg font-semibold text-[#f5e8c9]">{offer.title}</h4>
                <p className="mt-2 text-xl font-bold text-[#c7a85a]">{offer.price}</p>
                <ul className="mt-4 space-y-1 text-sm text-[#d3d3d3]">
                  {offer.details.map((detail, idx) => (
                    <li key={idx}>• {detail}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <section className="mt-12 rounded-xl border border-[#c7a85a]/25 bg-[#101010] p-6 text-center">
        <p className="text-[#d3d3d3]">
          PJT Productions · Disponible 7j/7 · Devis gratuit sur demande
        </p>
        <p className="mt-2 text-sm text-[#c7a85a]">
          Consultez nos{" "}
          <a href="/conditions" className="underline hover:text-[#f5e8c9]">
            conditions générales
          </a>
        </p>
      </section>
    </main>
  );
}
