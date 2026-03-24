"use client";

import { FormEvent, useState } from "react";
import { supabase } from "@/src/lib/supabase";

type ServiceType = "clip" | "photo" | "autre";

type BookingFormProps = {
  defaultName?: string;
  defaultEmail?: string;
  onSuccess?: () => void;
};

export default function BookingForm({
  defaultName = "",
  defaultEmail = "",
  onSuccess,
}: BookingFormProps) {
  const [name, setName] = useState(defaultName);
  const [email, setEmail] = useState(defaultEmail);
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
    setServiceType("clip");
    setDateTournage("");
    setMessage("");
    setLoading(false);
    onSuccess?.();
  }

  return (
    <section className="rounded-2xl border border-[#c7a85a]/35 bg-[#101010] p-6 shadow-[0_0_35px_rgba(199,168,90,0.12)]">
      <h2 className="text-2xl font-semibold text-[#f5e8c9]">Reserver une prestation</h2>
      <p className="mt-2 text-sm text-[#cfcfcf]">
        Remplissez ce formulaire pour envoyer votre demande a PJT Productions.
      </p>

      <form onSubmit={handleSubmit} className="mt-6 space-y-4">
        <div className="grid gap-4 md:grid-cols-2">
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
        </div>

        <div className="grid gap-4 md:grid-cols-2">
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
  );
}
