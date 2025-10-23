"use client";

import { useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import { useAuth } from "@/contexts/auth-context";

interface ProtectedRouteProps {
  children: React.ReactNode;
  requireAuth?: boolean;
  requireOnboarding?: boolean;
  redirectTo?: string;
}

export function ProtectedRoute({
  children,
  requireAuth = true,
  requireOnboarding = false,
  redirectTo,
}: ProtectedRouteProps) {
  const router = useRouter();
  const pathname = usePathname();
  const { user, isAuthenticated, isLoading } = useAuth();

  useEffect(() => {
    if (isLoading) return;

    // Rediriger si l'authentification est requise mais l'utilisateur n'est pas connecté
    if (requireAuth && !isAuthenticated) {
      const destination = redirectTo || `/auth/sign-in?redirect=${pathname}`;
      router.push(destination);
      return;
    }

    // Rediriger si l'onboarding est requis mais pas complété
    if (requireOnboarding && user && !user.hasCompletedOnboarding) {
      router.push("/onboarding/step-1");
      return;
    }

    // Rediriger si l'utilisateur est connecté et essaie d'accéder aux pages d'auth
    if (!requireAuth && isAuthenticated) {
      router.push("/dashboard");
    }
  }, [isAuthenticated, isLoading, requireAuth, requireOnboarding, user, router, pathname, redirectTo]);

  // Afficher un loader pendant la vérification
  if (isLoading) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="text-center">
          <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]" />
          <p className="mt-4 text-white/70">Chargement...</p>
        </div>
      </div>
    );
  }

  // Si authentification requise mais pas connecté, ne rien afficher (redirection en cours)
  if (requireAuth && !isAuthenticated) {
    return null;
  }

  // Si onboarding requis mais pas complété, ne rien afficher (redirection en cours)
  if (requireOnboarding && user && !user.hasCompletedOnboarding) {
    return null;
  }

  return <>{children}</>;
}
