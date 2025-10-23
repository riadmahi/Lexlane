"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { OnboardingLayout } from "@/components/layout";
import { useOnboarding } from "@/hooks/use-onboarding";
import { Building2, FileText, MapPin, Briefcase } from "lucide-react";

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
            <div className="space-y-2">
              <Label htmlFor="activityType" className="text-zinc-900 flex items-center gap-2">
                <Briefcase className="w-4 h-4" />
                Type d'activité
              </Label>
              <Select
                value={formData.activityType}
                onValueChange={(value) => setFormData({ ...formData, activityType: value as any })}
                required
              >
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Sélectionnez votre activité" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="avocat">Avocat</SelectItem>
                  <SelectItem value="juriste">Juriste</SelectItem>
                  <SelectItem value="notaire">Notaire</SelectItem>
                  <SelectItem value="autre">Autre</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="cabinetName" className="text-zinc-900 flex items-center gap-2">
                <Building2 className="w-4 h-4" />
                Nom du cabinet
              </Label>
              <Input
                id="cabinetName"
                placeholder="Cabinet Martin & Associés"
                value={formData.cabinetName}
                onChange={(e) => setFormData({ ...formData, cabinetName: e.target.value })}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="siret" className="text-zinc-900 flex items-center gap-2">
                <FileText className="w-4 h-4" />
                SIRET <span className="text-zinc-500 font-normal">(optionnel)</span>
              </Label>
              <Input
                id="siret"
                placeholder="123 456 789 00012"
                value={formData.siret}
                onChange={(e) => setFormData({ ...formData, siret: e.target.value })}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="address" className="text-zinc-900 flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                Adresse <span className="text-zinc-500 font-normal">(optionnel)</span>
              </Label>
              <Input
                id="address"
                placeholder="123 Avenue des Champs-Élysées, 75008 Paris"
                value={formData.address}
                onChange={(e) => setFormData({ ...formData, address: e.target.value })}
              />
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
