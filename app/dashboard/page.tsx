export default function DashboardPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#090909] px-4">
      <section className="w-full max-w-2xl rounded-2xl border border-[#c7a85a]/40 bg-[#101010] p-8">
        <p className="text-xs tracking-[0.3em] text-[#c7a85a]">PJT PRODUCTIONS</p>
        <h1 className="mt-2 text-3xl font-semibold text-[#f5e8c9]">
          Dashboard Mehdi
        </h1>
        <p className="mt-3 text-[#d3d3d3]">
          Authentification reussie. Cette page servira a gerer les projets et
          demandes de reservation.
        </p>
      </section>
    </main>
  );
}
