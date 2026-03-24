export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#090909] px-4">
      <section className="w-full max-w-2xl rounded-2xl border border-[#c7a85a]/40 bg-[#101010] p-8 text-center">
        <p className="text-xs tracking-[0.3em] text-[#c7a85a]">PJT PRODUCTIONS</p>
        <h1 className="mt-3 text-3xl font-semibold text-[#f5e8c9]">
          Photo, video et evenements
        </h1>
        <p className="mt-3 text-[#d3d3d3]">
          Espace client pour reserver une prestation et suivre vos projets.
        </p>
        <a
          href="/auth"
          className="mt-8 inline-flex rounded-lg bg-[#c7a85a] px-5 py-2.5 font-medium text-black transition hover:bg-[#d5ba75]"
        >
          Acceder a l&apos;authentification
        </a>
      </section>
    </main>
  );
}
