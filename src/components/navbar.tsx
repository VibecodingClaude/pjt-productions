"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { supabase } from "@/src/lib/supabase";

type AuthState = {
  isAuthenticated: boolean;
};

function NavLink({ href, label }: { href: string; label: string }) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={`text-sm transition ${
        isActive ? "text-[#f5e8c9]" : "text-[#d3d3d3] hover:text-[#f5e8c9]"
      }`}
    >
      {label}
    </Link>
  );
}

export default function Navbar() {
  const router = useRouter();
  const [authState, setAuthState] = useState<AuthState>({ isAuthenticated: false });
  const [loadingLogout, setLoadingLogout] = useState(false);

  useEffect(() => {
    let mounted = true;

    async function loadSession() {
      const { data } = await supabase.auth.getSession();
      if (!mounted) {
        return;
      }
      setAuthState({ isAuthenticated: Boolean(data.session) });
    }

    loadSession();

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setAuthState({ isAuthenticated: Boolean(session) });
    });

    return () => {
      mounted = false;
      subscription.unsubscribe();
    };
  }, []);

  async function handleLogout() {
    setLoadingLogout(true);
    await supabase.auth.signOut();
    setLoadingLogout(false);
    router.push("/");
    router.refresh();
  }

  return (
    <header className="sticky top-0 z-50 border-b border-[#c7a85a]/25 bg-[#0d0d0d]/95 backdrop-blur">
      <nav className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-3">
        <Link href="/" className="text-sm tracking-[0.28em] text-[#c7a85a]">
          PJT PRODUCTIONS
        </Link>

        <div className="flex items-center gap-4">
          <NavLink href="/" label="Accueil" />
          <NavLink href="/tarifs" label="Tarifs" />
          <NavLink href="/booking" label="Reserver" />
          <NavLink href="/conditions" label="Conditions" />

          {authState.isAuthenticated ? (
            <>
              <NavLink href="/dashboard" label="Dashboard" />
              <button
                type="button"
                onClick={handleLogout}
                disabled={loadingLogout}
                className="rounded-md border border-[#c7a85a]/40 px-3 py-1.5 text-sm text-[#f5e8c9] transition hover:bg-[#c7a85a]/15 disabled:opacity-60"
              >
                {loadingLogout ? "..." : "Logout"}
              </button>
            </>
          ) : (
            <Link
              href="/auth"
              className="rounded-md bg-[#c7a85a] px-3 py-1.5 text-sm font-medium text-black transition hover:bg-[#d5ba75]"
            >
              Se connecter
            </Link>
          )}
        </div>
      </nav>
    </header>
  );
}
