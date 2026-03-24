import BookingForm from "@/src/components/booking-form";

export default function BookingPage() {
  return (
    <main className="mx-auto w-full max-w-6xl px-4 py-10">
      <section className="mb-8">
        <p className="text-xs tracking-[0.3em] text-[#c7a85a]">PJT PRODUCTIONS</p>
        <h1 className="mt-2 text-3xl font-semibold text-[#f5e8c9]">
          Demande de reservation
        </h1>
      </section>
      <section className="max-w-3xl">
        <BookingForm />
      </section>
    </main>
  );
}
