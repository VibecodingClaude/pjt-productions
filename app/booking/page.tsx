"use client";

import { FormEvent, useState } from "react";
import { supabase } from "@/src/lib/supabase";

type ServiceType = "clip" | "photo" | "autre";

export default function BookingPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [serviceType, setServiceType] = useState<ServiceType>("clip");
  const [dateTournage, setDateTournage] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);
    setSuccess(false);
    setErrorMessage(null);

    const { error } = await supabase.from("projects").insert([
      {
        name,
        email,
        type_prestation: serviceType,
        date_tournage: dateTournage,
        message,
        statut: "nouveau",
      },
    ]);

    if (error) {
      setErrorMessage(error.message);
      setLoading(false);
      return;
    }

    setSuccess(true);
    setName("");
    setEmail("");
    setServiceType("clip");
    setDateTournage("");
    setMessage("");
    setLoading(false);
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-[#090909] px-4 py-10">
      <section className="w-full max-w-2xl rounded-2xl border border-[#c7a85a]/40 bg-[#101010] p-8 shadow-[0_0_40px_rgba(199,168,90,0.15)]">
        <p className="text-xs tracking-[0.3em] text-[#c7a85a]">PJT PRODUCTIONS</p>
        <h1 className="mt-2 text-3xl font-semibold text-[#f5e8c9]">
          Demande de reservation
        </h1>
        <p className="mt-2 text-sm text-[#d3d3d3]">
          Envoyez votre demande photo/video, nous vous recontacterons rapidement.
        </p>

        <form onSubmit={handleSubmit} className="mt-8 space-y-5">
          <div>
            <label htmlFor="name" className="mb-1 block text-sm text-[#e9d7a7]">
              Nom
            </label>
            <input
              id="name"
              required
              value={name}
              onChange={(event) => setName(event.target.value)}
              className="w-full rounded-lg border border-[#c7a85a]/35 bg-[#171717] px-3 py-2 text-[#f7f2e8] outline-none transition focus:border-[#d6b76a] focus:ring-2 focus:ring-[#c7a85a]/30"
              placeholder="Votre nom"
            />
          </div>

          <div>
            <label htmlFor="email" className="mb-1 block text-sm text-[#e9d7a7]">
              Email
            </label>
            <input
              id="email"
              type="email"
              required
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              className="w-full rounded-lg border border-[#c7a85a]/35 bg-[#171717] px-3 py-2 text-[#f7f2e8] outline-none transition focus:border-[#d6b76a] focus:ring-2 focus:ring-[#c7a85a]/30"
              placeholder="votre@email.com"
            />
          </div>

          <div>
            <label
              htmlFor="type_prestation"
              className="mb-1 block text-sm text-[#e9d7a7]"
            >
              Type de prestation
            </label>
            <select
              id="type_prestation"
              name="type_prestation"
              value={serviceType}
              onChange={(event) => setServiceType(event.target.value as ServiceType)}
              className="w-full rounded-lg border border-[#c7a85a]/35 bg-[#171717] px-3 py-2 text-[#f7f2e8] outline-none transition focus:border-[#d6b76a] focus:ring-2 focus:ring-[#c7a85a]/30"
            >
              <option value="clip">Clip</option>
              <option value="photo">Photo</option>
              <option value="autre">Autre</option>
            </select>
          </div>

          <div>
            <label
              htmlFor="date_tournage"
              className="mb-1 block text-sm text-[#e9d7a7]"
            >
              Date souhaitee
            </label>
            <input
              id="date_tournage"
              name="date_tournage"
              type="date"
              required
              value={dateTournage}
              onChange={(event) => setDateTournage(event.target.value)}
              className="w-full rounded-lg border border-[#c7a85a]/35 bg-[#171717] px-3 py-2 text-[#f7f2e8] outline-none transition focus:border-[#d6b76a] focus:ring-2 focus:ring-[#c7a85a]/30"
            />
          </div>

          <div>
            <label htmlFor="message" className="mb-1 block text-sm text-[#e9d7a7]">
              Message
            </label>
            <textarea
              id="message"
              required
              rows={5}
              value={message}
              onChange={(event) => setMessage(event.target.value)}
              className="w-full rounded-lg border border-[#c7a85a]/35 bg-[#171717] px-3 py-2 text-[#f7f2e8] outline-none transition focus:border-[#d6b76a] focus:ring-2 focus:ring-[#c7a85a]/30"
              placeholder="Decrivez votre besoin..."
            />
          </div>

          {errorMessage ? (
            <p className="rounded-lg border border-red-500/40 bg-red-500/10 px-3 py-2 text-sm text-red-200">
              {errorMessage}
            </p>
          ) : null}

          {success ? (
            <p className="rounded-lg border border-emerald-500/40 bg-emerald-500/10 px-3 py-2 text-sm text-emerald-200">
              Votre demande a bien ete envoyee.
            </p>
          ) : null}

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-lg bg-[#c7a85a] px-4 py-2.5 font-medium text-black transition hover:bg-[#d5ba75] disabled:cursor-not-allowed disabled:opacity-65"
          >
            {loading ? "Envoi..." : "Envoyer la demande"}
          </button>
        </form>
      </section>
    </main>
  );
}
