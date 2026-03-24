"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import type { User } from "@supabase/supabase-js";
import { supabase } from "@/src/lib/supabase";
import BookingForm from "@/src/components/booking-form";

type Project = {
  id: number;
  name: string | null;
  email: string | null;
  type_prestation: string | null;
  date_tournage: string | null;
  message: string | null;
  statut: string | null;
};

const STATUS_OPTIONS = ["nouveau", "en_cours", "termine", "annule"];

export default function DashboardPage() {
  const router = useRouter();
  const [authChecking, setAuthChecking] = useState(true);
  const [user, setUser] = useState<User | null>(null);
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const isAdmin = useMemo(() => {
    if (!user) {
      return false;
    }
    const role = user.user_metadata?.role ?? user.app_metadata?.role;
    return role === "admin";
  }, [user]);

  const loadProjects = useCallback(
    async (connectedUser: User | null) => {
      if (!connectedUser) {
        setProjects([]);
        setLoading(false);
        return;
      }

      setLoading(true);
      setErrorMessage(null);

      let query = supabase
        .from("projects")
        .select("id, name, email, type_prestation, date_tournage, message, statut")
        .order("date_tournage", { ascending: true });

      const role = connectedUser.user_metadata?.role ?? connectedUser.app_metadata?.role;
      if (role !== "admin" && connectedUser.email) {
        query = query.eq("email", connectedUser.email);
      }

      const { data, error } = await query;

      if (error) {
        setErrorMessage(error.message);
        setProjects([]);
        setLoading(false);
        return;
      }

      setProjects((data as Project[]) ?? []);
      setLoading(false);
    },
    []
  );

  useEffect(() => {
    let mounted = true;

    async function verifySession() {
      const { data } = await supabase.auth.getSession();
      if (!mounted) {
        return;
      }
      if (!data.session) {
        router.replace("/auth");
        return;
      }
      const sessionUser = data.session.user;
      setUser(sessionUser);
      await loadProjects(sessionUser);
      setAuthChecking(false);
    }

    verifySession();

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange(async (_event, session) => {
      if (!mounted) {
        return;
      }
      if (!session) {
        setUser(null);
        router.replace("/auth");
        return;
      }
      const sessionUser = session.user;
      setUser(sessionUser);
      await loadProjects(sessionUser);
      setAuthChecking(false);
    });

    return () => {
      mounted = false;
      subscription.unsubscribe();
    };
  }, [loadProjects, router]);

  async function updateStatut(projectId: number, statut: string) {
    const previous = projects;

    setProjects((current) =>
      current.map((project) =>
        project.id === projectId ? { ...project, statut } : project
      )
    );

    const { error } = await supabase
      .from("projects")
      .update({ statut })
      .eq("id", projectId);

    if (error) {
      setProjects(previous);
      setErrorMessage(error.message);
    }
  }

  if (authChecking) {
    return (
      <main className="flex min-h-[60vh] flex-col items-center justify-center bg-[#090909] px-4 py-16">
        <p className="text-xs tracking-[0.3em] text-[#c7a85a]">PJT PRODUCTIONS</p>
        <p className="mt-4 text-lg font-medium text-[#f5e8c9]">
          Verification de la session...
        </p>
        <p className="mt-2 text-sm text-[#d3d3d3]">Veuillez patienter.</p>
      </main>
    );
  }

  return (
    <main className="mx-auto w-full max-w-6xl px-4 py-10">
      <header className="mb-8 rounded-2xl border border-[#c7a85a]/35 bg-[#101010] p-6">
        <p className="text-xs tracking-[0.3em] text-[#c7a85a]">PJT PRODUCTIONS</p>
        <h1 className="mt-2 text-3xl font-semibold text-[#f5e8c9]">Dashboard</h1>
        <p className="mt-2 text-sm text-[#d3d3d3]">
          {isAdmin
            ? "Vue admin: toutes les demandes sont affichees."
            : "Suivez vos demandes et creez de nouvelles reservations."}
        </p>

        <div className="mt-5 flex flex-wrap gap-3 text-sm">
          <a
            href="#reservation"
            className="rounded-md border border-[#c7a85a]/40 px-3 py-1.5 text-[#f5e8c9] transition hover:bg-[#c7a85a]/15"
          >
            Reservation
          </a>
          <a
            href="#demandes"
            className="rounded-md border border-[#c7a85a]/40 px-3 py-1.5 text-[#f5e8c9] transition hover:bg-[#c7a85a]/15"
          >
            Mes demandes
          </a>
        </div>
      </header>

      {user ? (
        <div className="grid gap-8 lg:grid-cols-[1.1fr_1fr]">
          <section id="reservation">
            <BookingForm
              defaultEmail={user.email ?? ""}
              defaultName={user.user_metadata?.full_name ?? ""}
              onSuccess={() => loadProjects(user)}
            />
          </section>

          <section id="demandes">
            <div className="rounded-2xl border border-[#c7a85a]/35 bg-[#101010] p-6">
              <h2 className="text-2xl font-semibold text-[#f5e8c9]">Mes demandes</h2>
              <p className="mt-2 text-sm text-[#d3d3d3]">
                Nombre total: {projects.length}
              </p>

              {errorMessage ? (
                <p className="mt-4 rounded-lg border border-red-500/40 bg-red-500/10 px-3 py-2 text-sm text-red-200">
                  {errorMessage}
                </p>
              ) : null}

              <div className="mt-5 space-y-4">
                {loading ? (
                  <p className="text-sm text-[#d3d3d3]">Chargement...</p>
                ) : projects.length === 0 ? (
                  <p className="text-sm text-[#d3d3d3]">
                    Aucune demande trouvee pour le moment.
                  </p>
                ) : (
                  projects.map((project) => (
                    <article
                      key={project.id}
                      className="rounded-lg border border-[#c7a85a]/20 bg-[#121212] p-4"
                    >
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <p className="text-sm font-semibold text-[#f5e8c9]">
                            {project.name || "Client"}
                          </p>
                          <p className="text-xs text-[#cfcfcf]">
                            {project.email || "email non renseigne"}
                          </p>
                        </div>
                        <span className="rounded-full border border-[#c7a85a]/35 px-2.5 py-1 text-xs text-[#e9d7a7]">
                          {project.type_prestation || "autre"}
                        </span>
                      </div>

                      <p className="mt-3 text-sm text-[#d3d3d3]">
                        <span className="text-[#e9d7a7]">Date:</span>{" "}
                        {project.date_tournage || "-"}
                      </p>
                      <p className="mt-1 text-sm text-[#d3d3d3]">
                        <span className="text-[#e9d7a7]">Message:</span>{" "}
                        {project.message || "-"}
                      </p>

                      <div className="mt-3">
                        {isAdmin ? (
                          <select
                            value={project.statut ?? "nouveau"}
                            onChange={(event) =>
                              updateStatut(project.id, event.target.value)
                            }
                            className="rounded-md border border-[#c7a85a]/35 bg-[#171717] px-2 py-1 text-sm text-[#f7f2e8] outline-none transition focus:border-[#d6b76a] focus:ring-2 focus:ring-[#c7a85a]/30"
                          >
                            {STATUS_OPTIONS.map((status) => (
                              <option key={status} value={status}>
                                {status}
                              </option>
                            ))}
                          </select>
                        ) : (
                          <p className="text-sm text-[#d3d3d3]">
                            <span className="text-[#e9d7a7]">Statut:</span>{" "}
                            {project.statut || "nouveau"}
                          </p>
                        )}
                      </div>
                    </article>
                  ))
                )}
              </div>
            </div>
          </section>
        </div>
      ) : null}
    </main>
  );
}
