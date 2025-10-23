"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { OnboardingLayout } from "@/components/layout";
import { useOnboarding } from "@/hooks/use-onboarding";

export default function OnboardingStep1Page() {
  const router = useRouter();
  const { saveStep1 } = useOnboarding();
  const [formData, setFormData] = useState<{
    activityType: "avocat" | "juriste" | "notaire" | "autre" | "";
    cabinetName: string;
    siret?: string;
    address?: string;
  }>({
    activityType: "",
    cabinetName: "",
    siret: "",
    address: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.activityType) {
      saveStep1({
        ...formData,
        activityType: formData.activityType as "avocat" | "juriste" | "notaire" | "autre"
      });
      router.push("/onboarding/step-2");
    }
  };

  return (
    <OnboardingLayout
      currentStep={1}
      onSkip={() => router.push("/onboarding/step-2")}
    >
      <div className="space-y-2">
        <h1 className="font-rethink-sans text-3xl font-semibold text-zinc-900">
          Les informations générales de votre activité
        </h1>
        <p className="font-inter text-sm text-zinc-600">
          Quelques informations pour personnaliser votre expérience
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="activityType" className="text-zinc-900">Type d'activité</Label>
            <select
              id="activityType"
              value={formData.activityType}
              onChange={(e) => setFormData({ ...formData, activityType: e.target.value as any })}
              required
              className="flex h-11 w-full rounded-md border border-zinc-200 bg-white px-3 py-2 text-sm text-zinc-900 placeholder:text-zinc-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-900 focus-visible:ring-offset-2"
            >
              <option value="">Sélectionnez votre activité</option>
              <option value="avocat">Avocat</option>
              <option value="juriste">Juriste</option>
              <option value="notaire">Notaire</option>
              <option value="autre">Autre</option>
            </select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="cabinetName" className="text-zinc-900">Nom du cabinet</Label>
            <Input
              id="cabinetName"
              placeholder="Cabinet Martin & Associés"
              value={formData.cabinetName}
              onChange={(e) => setFormData({ ...formData, cabinetName: e.target.value })}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="siret" className="text-zinc-900">SIRET (optionnel)</Label>
            <Input
              id="siret"
              placeholder="123 456 789 00012"
              value={formData.siret}
              onChange={(e) => setFormData({ ...formData, siret: e.target.value })}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="address" className="text-zinc-900">Adresse (optionnel)</Label>
            <Input
              id="address"
              placeholder="123 Avenue des Champs-Élysées, 75008 Paris"
              value={formData.address}
              onChange={(e) => setFormData({ ...formData, address: e.target.value })}
            />
          </div>
        </div>

        <div className="flex gap-3">
          <Button
            type="button"
            variant="outline"
            onClick={() => router.push("/")}
            className="flex-1 border-zinc-200 text-zinc-900 hover:bg-zinc-50"
            size="lg"
          >
            Retour
          </Button>
          <Button
            type="submit"
            className="flex-1 bg-zinc-900 text-white hover:bg-zinc-800"
            size="lg"
          >
            Continuer
          </Button>
        </div>
      </form>
    </OnboardingLayout>
  );
}
