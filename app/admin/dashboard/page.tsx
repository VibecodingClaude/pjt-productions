"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/src/lib/supabase";

type Project = {
  id: number;
  client_id: string | null;
  type_prestation: string | null;
  date_tournage: string | null;
  statut: string | null;
};

const STATUT_OPTIONS = ["nouveau", "en_cours", "termine", "annule"];

export default function AdminDashboardPage() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  async function loadProjects() {
    setLoading(true);
    setErrorMessage(null);

    const { data, error } = await supabase
      .from("projects")
      .select(
        "id, client_id, type_prestation, date_tournage, statut"
      )
      .order("date_tournage", { ascending: true });

    if (error) {
      setErrorMessage(error.message);
      setProjects([]);
      setLoading(false);
      return;
    }

    setProjects((data as Project[]) ?? []);
    setLoading(false);
  }

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

  useEffect(() => {
    loadProjects();
  }, []);

  return (
    <main className="min-h-screen bg-[#090909] px-4 py-10">
      <section className="mx-auto w-full max-w-6xl rounded-2xl border border-[#c7a85a]/40 bg-[#101010] p-8 shadow-[0_0_40px_rgba(199,168,90,0.15)]">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-xs tracking-[0.3em] text-[#c7a85a]">PJT PRODUCTIONS</p>
            <h1 className="mt-2 text-3xl font-semibold text-[#f5e8c9]">
              Dashboard Admin
            </h1>
            <p className="mt-2 text-sm text-[#d3d3d3]">
              Nombre total de demandes :{" "}
              <span className="font-semibold text-[#f5e8c9]">{projects.length}</span>
            </p>
          </div>
        </div>

        {errorMessage ? (
          <p className="mt-6 rounded-lg border border-red-500/40 bg-red-500/10 px-3 py-2 text-sm text-red-200">
            {errorMessage}
          </p>
        ) : null}

        <div className="mt-6 overflow-x-auto rounded-xl border border-[#c7a85a]/30">
          <table className="min-w-full divide-y divide-[#c7a85a]/20">
            <thead className="bg-[#151515]">
              <tr>
                <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-[#e9d7a7]">
                  Client (id)
                </th>
                <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-[#e9d7a7]">
                  Type de prestation
                </th>
                <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-[#e9d7a7]">
                  Date tournage
                </th>
                <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-[#e9d7a7]">
                  Statut
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#c7a85a]/10 bg-[#0f0f0f]">
              {loading ? (
                <tr>
                  <td
                    colSpan={4}
                    className="px-4 py-5 text-center text-sm text-[#d3d3d3]"
                  >
                    Chargement des projets...
                  </td>
                </tr>
              ) : projects.length === 0 ? (
                <tr>
                  <td
                    colSpan={4}
                    className="px-4 py-5 text-center text-sm text-[#d3d3d3]"
                  >
                    Aucune demande pour le moment.
                  </td>
                </tr>
              ) : (
                projects.map((project) => (
                  <tr key={project.id}>
                    <td className="px-4 py-3 text-sm text-[#f7f2e8]">
                      {project.client_id ?? "-"}
                    </td>
                    <td className="px-4 py-3 text-sm capitalize text-[#d3d3d3]">
                      {project.type_prestation ?? "-"}
                    </td>
                    <td className="px-4 py-3 text-sm text-[#d3d3d3]">
                      {project.date_tournage ?? "-"}
                    </td>
                    <td className="px-4 py-3 text-sm">
                      <select
                        value={project.statut ?? "nouveau"}
                        onChange={(event) =>
                          updateStatut(project.id, event.target.value)
                        }
                        className="rounded-md border border-[#c7a85a]/35 bg-[#171717] px-2 py-1 text-[#f7f2e8] outline-none transition focus:border-[#d6b76a] focus:ring-2 focus:ring-[#c7a85a]/30"
                      >
                        {STATUT_OPTIONS.map((statut) => (
                          <option key={statut} value={statut}>
                            {statut}
                          </option>
                        ))}
                      </select>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </section>
    </main>
  );
}
