export default function AProposPage() {
  return (
    <main className="mx-auto w-full max-w-6xl px-4 py-12">
      {/* HEADER */}
      <section className="relative overflow-hidden rounded-3xl border border-[#c7a85a]/40 bg-gradient-to-br from-[#1a1a1a] via-[#101010] to-[#0d0d0d] p-12 shadow-2xl">
        <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-gradient-to-br from-[#c7a85a]/10 to-transparent blur-3xl"></div>

        <div className="relative">
          <p className="text-xs tracking-[0.4em] font-bold text-[#d4af37]">À PROPOS</p>
          <h1 className="mt-4 text-5xl font-bold leading-tight text-[#f5e8c9]">
            Mehdi Ouazzani
          </h1>
          <p className="mt-2 text-lg text-[#d4af37]">Réalisateur · Vidéaste · Producteur visuel</p>
        </div>
      </section>

      {/* BIO SECTION */}
      <section className="mt-14 grid gap-8 lg:grid-cols-[1fr_1.2fr]">
        <div className="rounded-2xl border border-[#c7a85a]/30 bg-gradient-to-br from-[#1a1a1a] to-[#101010] p-8 shadow-lg">
          <h2 className="text-2xl font-bold text-[#f5e8c9]">Qui suis-je?</h2>
          <div className="mt-2 h-1 w-12 bg-gradient-to-r from-[#c7a85a] to-[#d4af37]"></div>

          <p className="mt-6 leading-8 text-[#d3d3d3]">
            Je m'appelle <span className="font-semibold text-[#f5e8c9]">Mehdi</span>, réalisateur et vidéaste spécialisé dans la création d'images fortes et modernes.
          </p>

          <p className="mt-4 leading-8 text-[#d3d3d3]">
            Entre cinéma, clips et contenus artistiques, j'aime transformer une idée en visuel percutant, avec une vraie attention à la lumière, au mouvement et à l'esthétique.
          </p>

          <p className="mt-4 leading-8 text-[#d3d3d3]">
            Toujours en évolution, je m'intéresse aux nouvelles technologies, à la 3D, aux VFX et aux innovations qui élèvent la qualité d'un projet.
          </p>

          <p className="mt-4 leading-8 text-[#d3d3d3]">
            <span className="font-semibold text-[#f5e8c9]">Mon objectif :</span> créer des images propres, dynamiques et mémorables, au service de chaque histoire et de chaque artiste.
          </p>
        </div>

        {/* COMPETENCES */}
        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-[#f5e8c9]">Mes compétences</h2>
          <div className="h-1 w-12 bg-gradient-to-r from-[#c7a85a] to-[#d4af37]"></div>

          {[
            {
              title: "Sens artistique développé",
              icon: "✨",
            },
            {
              title: "Maîtrise de la prise de vue",
              icon: "📷",
            },
            {
              title: "Post-traitement professionnel (Adobe Premiere)",
              icon: "🎬",
            },
            {
              title: "Maîtrise des réglages manuels",
              icon: "⚙️",
            },
          ].map((skill) => (
            <article
              key={skill.title}
              className="group relative overflow-hidden rounded-2xl border border-[#c7a85a]/30 bg-gradient-to-br from-[#1a1a1a] to-[#101010] p-6 shadow-lg transition-all hover:border-[#d4af37]/60 hover:shadow-xl hover:-translate-y-1"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#c7a85a]/5 to-transparent opacity-0 transition-opacity group-hover:opacity-100"></div>

              <div className="relative flex items-start gap-3">
                <span className="text-2xl">{skill.icon}</span>
                <p className="text-lg font-semibold text-[#f5e8c9]">{skill.title}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* APPROCHE */}
      <section className="mt-14 rounded-2xl border border-[#c7a85a]/30 bg-gradient-to-br from-[#1a1a1a] to-[#101010] p-8 shadow-lg">
        <h2 className="text-3xl font-bold text-[#f5e8c9]">Mon approche</h2>
        <div className="mt-2 h-1 w-16 bg-gradient-to-r from-[#c7a85a] to-[#d4af37]"></div>

        <p className="mt-6 leading-8 text-[#d3d3d3]">
          Chaque projet est unique. Je combine <span className="font-semibold text-[#f5e8c9]">direction artistique, technique maîtrisée et storytelling puissant</span> pour transformer votre vision en réalité visuelle exceptionnelle. De la prise de vue à la post-production, je garantis une qualité cinématographique et une créativité sans limites.
        </p>
      </section>

      {/* CTA */}
      <section className="mt-14 rounded-2xl border border-[#c7a85a]/40 bg-gradient-to-br from-[#1a1a1a] via-[#101010] to-[#0d0d0d] p-8 text-center">
        <h2 className="text-2xl font-bold text-[#f5e8c9]">Prêt pour votre projet?</h2>
        <p className="mt-3 text-[#d3d3d3]">Explorez mes réalisations et discutons de vos idées</p>

        <div className="mt-6 flex justify-center gap-4">
          <a
            href="/portfolio"
            className="group relative rounded-lg bg-gradient-to-r from-[#c7a85a] to-[#d4af37] px-6 py-3 font-semibold text-black transition-all hover:shadow-lg hover:shadow-[#c7a85a]/50"
          >
            Voir mes projets
          </a>
          <a
            href="/booking"
            className="rounded-lg border-2 border-[#c7a85a]/60 px-6 py-3 font-semibold text-[#f5e8c9] transition-all hover:bg-[#c7a85a]/15"
          >
            Faire une demande
          </a>
        </div>
      </section>
    </main>
  );
}
