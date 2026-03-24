"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/src/lib/supabase";

type AuthMode = "signup" | "signin";

export default function AuthPage() {
  const router = useRouter();
  const [mode, setMode] = useState<AuthMode>("signup");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const isSignup = mode === "signup";

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);
    setErrorMessage(null);

    try {
      if (isSignup) {
        const { error } = await supabase.auth.signUp({
          email,
          password,
        });

        if (error) {
          throw error;
        }
      } else {
        const { error } = await supabase.auth.signInWithPassword({
          email,
          password,
        });

        if (error) {
          throw error;
        }
      }

      router.push("/dashboard");
    } catch (error: unknown) {
      const message =
        error instanceof Error ? error.message : "Une erreur est survenue.";
      setErrorMessage(message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-[#090909] px-4 py-10">
      <section className="w-full max-w-md rounded-2xl border border-[#c7a85a]/40 bg-[#101010] p-7 shadow-[0_0_40px_rgba(199,168,90,0.15)]">
        <div className="mb-7">
          <p className="text-xs tracking-[0.3em] text-[#c7a85a]">PJT PRODUCTIONS</p>
          <h1 className="mt-2 text-2xl font-semibold text-[#f5e8c9]">
            {isSignup ? "Creer votre compte" : "Connexion client"}
          </h1>
          <p className="mt-1 text-sm text-[#d3d3d3]">
            Soumettez vos demandes photo/video et suivez vos projets.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="mb-1 block text-sm text-[#e9d7a7]" htmlFor="email">
              Email
            </label>
            <input
              id="email"
              type="email"
              required
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              className="w-full rounded-lg border border-[#c7a85a]/35 bg-[#171717] px-3 py-2 text-[#f7f2e8] outline-none transition focus:border-[#d6b76a] focus:ring-2 focus:ring-[#c7a85a]/30"
              placeholder="client@email.com"
            />
          </div>

          <div>
            <label className="mb-1 block text-sm text-[#e9d7a7]" htmlFor="password">
              Mot de passe
            </label>
            <input
              id="password"
              type="password"
              required
              minLength={6}
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              className="w-full rounded-lg border border-[#c7a85a]/35 bg-[#171717] px-3 py-2 text-[#f7f2e8] outline-none transition focus:border-[#d6b76a] focus:ring-2 focus:ring-[#c7a85a]/30"
              placeholder="••••••••"
            />
          </div>

          {errorMessage ? (
            <p className="rounded-lg border border-red-500/40 bg-red-500/10 px-3 py-2 text-sm text-red-200">
              {errorMessage}
            </p>
          ) : null}

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-lg bg-[#c7a85a] px-4 py-2.5 font-medium text-black transition hover:bg-[#d5ba75] disabled:cursor-not-allowed disabled:opacity-65"
          >
            {loading ? "Chargement..." : isSignup ? "S'inscrire" : "Se connecter"}
          </button>
        </form>

        <div className="mt-6 text-center text-sm text-[#cecece]">
          {isSignup ? "Deja un compte ?" : "Pas encore de compte ?"}{" "}
          <button
            type="button"
            onClick={() => setMode(isSignup ? "signin" : "signup")}
            className="font-medium text-[#d6b76a] underline-offset-4 hover:underline"
          >
            {isSignup ? "Se connecter" : "Creer un compte"}
          </button>
        </div>
      </section>
    </main>
  );
}
