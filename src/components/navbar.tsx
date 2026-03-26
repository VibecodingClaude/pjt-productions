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
          ? "text-[#00D9FF] font-bold"
          : "text-[#E0E0E0] hover:text-[#FF006E] hover:font-semibold"
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
    <header className="sticky top-0 z-50 border-b border-gradient-to-r from-[#FF006E] via-[#00D9FF] to-[#FF006E] bg-gradient-to-b from-[#0a0a0a] to-[#0a0a0a]/80 backdrop-blur-lg shadow-2xl">
      <nav className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-4">
        <Link href="/" className="text-lg font-black tracking-[0.3em] bg-gradient-to-r from-[#FF006E] to-[#00D9FF] bg-clip-text text-transparent">
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
                className="rounded-md border-2 border-[#FF006E] px-3 py-1.5 text-sm text-[#FF006E] font-semibold transition hover:bg-[#FF006E] hover:text-black disabled:opacity-60"
              >
                {loadingLogout ? "..." : "Logout"}
              </button>
            </>
          ) : (
            <Link
              href="/auth"
              className="rounded-md bg-gradient-to-r from-[#FF006E] to-[#00D9FF] px-4 py-2 text-sm font-bold text-black transition hover:shadow-lg hover:shadow-[#FF006E]/50"
            >
              Se connecter
            </Link>
          )}
        </div>
      </nav>
    </header>
  );
}
