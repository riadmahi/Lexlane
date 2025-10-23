"use client";

import { useAuth } from "@/contexts/auth-context";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { FadeIn } from "@/components/ui/page-transition";

export default function DashboardPage() {
  const { user, logout } = useAuth();
  const router = useRouter();

  if (!user) {
    //router.push("/auth/sign-in");
    return null;
  }

  return (
    <div className="min-h-screen bg-zinc-50">
      <div className="px-8 py-8">
        {/* Header */}
        <FadeIn className="flex items-center justify-between pb-8 border-b border-zinc-200">
          <div>
            <h1 className="font-rethink-sans text-3xl font-semibold text-zinc-900">
              Bienvenue, {user.firstName} !
            </h1>
            <p className="mt-2 text-zinc-600">
              Voici votre tableau de bord Lexlane
            </p>
          </div>
          <Button
            onClick={logout}
            variant="outline"
          >
            Se déconnecter
          </Button>
        </FadeIn>

        {/* Dashboard Content */}
        <FadeIn className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3" delay={0.1}>
          {/* Card 1 */}
          <div className="rounded-lg border border-zinc-200 bg-white p-6">
            <div className="flex items-center justify-between">
              <h3 className="font-semibold text-zinc-900">Dossiers actifs</h3>
              <div className="rounded-full bg-zinc-100 p-2">
                <svg
                  className="w-5 h-5 text-zinc-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
                  />
                </svg>
              </div>
            </div>
            <div className="mt-4">
              <p className="text-3xl font-bold text-zinc-900">12</p>
              <p className="mt-1 text-sm text-zinc-500">+3 ce mois</p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="rounded-lg border border-zinc-200 bg-white p-6">
            <div className="flex items-center justify-between">
              <h3 className="font-semibold text-zinc-900">Clients</h3>
              <div className="rounded-full bg-zinc-100 p-2">
                <svg
                  className="w-5 h-5 text-zinc-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                </svg>
              </div>
            </div>
            <div className="mt-4">
              <p className="text-3xl font-bold text-zinc-900">45</p>
              <p className="mt-1 text-sm text-zinc-500">+5 ce mois</p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="rounded-lg border border-zinc-200 bg-white p-6">
            <div className="flex items-center justify-between">
              <h3 className="font-semibold text-zinc-900">Tâches en cours</h3>
              <div className="rounded-full bg-zinc-100 p-2">
                <svg
                  className="w-5 h-5 text-zinc-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                  />
                </svg>
              </div>
            </div>
            <div className="mt-4">
              <p className="text-3xl font-bold text-zinc-900">8</p>
              <p className="mt-1 text-sm text-zinc-500">À finaliser cette semaine</p>
            </div>
          </div>
        </FadeIn>

        {/* Recent Activity */}
        <FadeIn className="mt-8" delay={0.2}>
          <h2 className="font-rethink-sans text-2xl font-semibold text-zinc-900 mb-6">
            Activité récente
          </h2>
          <div className="rounded-lg border border-zinc-200 bg-white divide-y divide-zinc-200">
            {[
              {
                title: "Nouveau dossier créé",
                description: "Dossier Dupont vs. Martin",
                time: "Il y a 2 heures",
              },
              {
                title: "Document signé",
                description: "Contrat de prestation - Client ABC",
                time: "Il y a 5 heures",
              },
              {
                title: "Rendez-vous planifié",
                description: "Consultation avec Mme. Laurent",
                time: "Hier",
              },
            ].map((activity, index) => (
              <div key={index} className="p-4 hover:bg-zinc-50 transition-colors">
                <div className="flex items-start justify-between">
                  <div>
                    <h4 className="font-medium text-zinc-900">{activity.title}</h4>
                    <p className="mt-1 text-sm text-zinc-600">
                      {activity.description}
                    </p>
                  </div>
                  <span className="text-xs text-zinc-500 whitespace-nowrap ml-4">
                    {activity.time}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </FadeIn>

        {/* User Info Section */}
        <FadeIn className="mt-8 rounded-lg border border-zinc-200 bg-white p-6" delay={0.3}>
          <h2 className="font-rethink-sans text-2xl font-semibold text-zinc-900 mb-4">
            Vos informations
          </h2>
          <div className="grid gap-4 md:grid-cols-2">
            <div>
              <p className="text-sm text-zinc-500">Email</p>
              <p className="mt-1 font-medium text-zinc-900">{user.email}</p>
            </div>
            <div>
              <p className="text-sm text-zinc-500">Rôle</p>
              <p className="mt-1 font-medium capitalize text-zinc-900">{user.role}</p>
            </div>
            {user.cabinetName && (
              <div>
                <p className="text-sm text-zinc-500">Cabinet</p>
                <p className="mt-1 font-medium text-zinc-900">{user.cabinetName}</p>
              </div>
            )}
            <div>
              <p className="text-sm text-zinc-500">Onboarding complété</p>
              <p className="mt-1 font-medium text-zinc-900">
                {user.hasCompletedOnboarding ? "Oui ✓" : "Non"}
              </p>
            </div>
          </div>
        </FadeIn>
      </div>
    </div>
  );
}
