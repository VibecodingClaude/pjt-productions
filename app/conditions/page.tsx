export default function ConditionsPage() {
  return (
    <main className="mx-auto w-full max-w-6xl px-4 py-10">
      <section>
        <p className="text-xs tracking-[0.3em] text-[#c7a85a]">PJT PRODUCTIONS</p>
        <h1 className="mt-2 text-3xl font-semibold text-[#f5e8c9]">Conditions Générales</h1>
        <p className="mt-2 text-[#d3d3d3]">
          Conditions d'utilisation et d'engagement pour tous nos services
        </p>
      </section>

      <section className="mt-10 space-y-8">
        {/* ACOMPTE & PAIEMENT */}
        <article className="rounded-xl border border-[#c7a85a]/35 bg-[#101010] p-6">
          <h2 className="text-xl font-semibold text-[#c7a85a]">ACOMPTE & PAIEMENT</h2>
          <ul className="mt-4 space-y-2 text-[#d3d3d3]">
            <li>• 50% d'acompte exigé à la réservation pour confirmer la date.</li>
            <li>• L'acompte est non remboursable en cas d'annulation.</li>
            <li>• Le solde de 50% est dû à la livraison des fichiers finaux.</li>
          </ul>
        </article>

        {/* RETOURS & MODIFICATIONS */}
        <article className="rounded-xl border border-[#c7a85a]/35 bg-[#101010] p-6">
          <h2 className="text-xl font-semibold text-[#c7a85a]">RETOURS & MODIFICATIONS</h2>
          <ul className="mt-4 space-y-2 text-[#d3d3d3]">
            <li>• Chaque retour doit être transmis en une seule fois (liste complète).</li>
            <li>• Tout retour supplémentaire au-delà du forfait est facturé 30€.</li>
            <li>
              • Sans réponse du client sous 30 jours, le projet est considéré comme validé.
            </li>
          </ul>
        </article>

        {/* DÉPLACEMENTS */}
        <article className="rounded-xl border border-[#c7a85a]/35 bg-[#101010] p-6">
          <h2 className="text-xl font-semibold text-[#c7a85a]">DÉPLACEMENTS</h2>
          <ul className="mt-4 space-y-2 text-[#d3d3d3]">
            <li>• Les prestations sont réalisées à Bruxelles et en Région Bruxelloise.</li>
            <li>• Tout déplacement hors Bruxelles est facturé en supplément.</li>
            <li>• Les frais de déplacement sont communiqués avant confirmation.</li>
          </ul>
        </article>

        {/* FICHIERS & LIVRAISON */}
        <article className="rounded-xl border border-[#c7a85a]/35 bg-[#101010] p-6">
          <h2 className="text-xl font-semibold text-[#c7a85a]">FICHIERS & LIVRAISON</h2>
          <ul className="mt-4 space-y-2 text-[#d3d3d3]">
            <li>
              • Les fichiers bruts (RAW, rushes) ne sont pas livrés sauf mention contraire.
            </li>
            <li>• Les délais de livraison indiqués courent à partir de la date de tournage.</li>
            <li>• Les fichiers sont livrés via lien de téléchargement (WeTransfer ou similaire).</li>
          </ul>
        </article>

        {/* FISCALITÉ */}
        <article className="rounded-xl border border-[#c7a85a]/35 bg-[#101010] p-6">
          <h2 className="text-xl font-semibold text-[#c7a85a]">FISCALITÉ</h2>
          <ul className="mt-4 space-y-2 text-[#d3d3d3]">
            <li>• TVA non applicable — article 56bis du Code TVA belge.</li>
          </ul>
        </article>

        {/* DÉFINITIONS */}
        <article className="rounded-xl border border-[#c7a85a]/35 bg-[#101010] p-6">
          <h2 className="text-xl font-semibold text-[#c7a85a]">DÉFINITIONS</h2>
          <div className="mt-4 space-y-3 text-[#d3d3d3]">
            <p>
              <span className="font-semibold text-[#f5e8c9]">Reportage :</span> prestation journée
              complète (8h) couvrant jusqu'à 15 espaces (chambres, suites, lobby, restaurant,
              extérieurs...). Inclut photos + vidéos, montage, étalonnage, livraison sous 5 jours
              ouvrables.
            </p>
          </div>
        </article>
      </section>

      {/* Footer */}
      <section className="mt-12 rounded-xl border border-[#c7a85a]/25 bg-[#101010] p-6 text-center">
        <p className="text-[#d3d3d3]">
          PJT Productions · Disponible 7j/7 · Devis gratuit sur demande
        </p>
      </section>
    </main>
  );
}
