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
      className={`text-sm font-medium transition-all ${
        isActive
          ? "text-[#0A0A0A] font-bold border-b-2 border-[#0A0A0A]"
          : "text-[#4a4a4a] hover:text-[#0A0A0A]"
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
    <header className="sticky top-0 z-50 border-b border-[#0A0A0A]/10 bg-[#E5E3DC] backdrop-blur-sm">
      <nav className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-4">
        <Link href="/" className="text-lg font-black tracking-[0.3em] text-[#0A0A0A]">
          PJT
        </Link>

        <div className="flex items-center gap-4">
          <NavLink href="/" label="Accueil" />
          <NavLink href="/tarifs" label="Tarifs" />
          <NavLink href="/portfolio" label="Portfolio" />
          <NavLink href="/a-propos" label="A propos" />
          <NavLink href="/booking" label="Reserver" />
          <NavLink href="/conditions" label="Conditions" />

          {authState.isAuthenticated ? (
            <>
              <NavLink href="/dashboard" label="Dashboard" />
              <button
                type="button"
                onClick={handleLogout}
                disabled={loadingLogout}
                className="rounded-md border border-[#0A0A0A] px-3 py-1.5 text-sm text-[#0A0A0A] font-semibold transition hover:bg-[#0A0A0A] hover:text-[#E5E3DC] disabled:opacity-60"
              >
                {loadingLogout ? "..." : "Logout"}
              </button>
            </>
          ) : (
            <Link
              href="/auth"
              className="rounded-md bg-[#0A0A0A] px-4 py-2 text-sm font-bold text-[#E5E3DC] transition hover:shadow-lg hover:shadow-[#0A0A0A]/50"
            >
              Se connecter
            </Link>
          )}
        </div>
      </nav>
    </header>
  );
}
