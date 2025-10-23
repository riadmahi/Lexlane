"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { OnboardingLayout } from "@/components/layout";
import { useOnboarding } from "@/hooks/use-onboarding";
import { Building, Users, MapPin, CheckCircle2 } from "lucide-react";

const PRACTICE_AREAS = [
  "Droit des affaires",
  "Droit administratif",
  "Droit bancaire",
  "Droit commercial",
  "Droit de la concurrence",
  "Droit de la consommation",
  "Droit de la construction",
  "Droit de la famille",
  "Droit de la propriété intellectuelle",
  "Droit de la santé",
  "Droit des assurances",
  "Droit des sociétés",
  "Droit du numérique et RGPD",
  "Droit du sport",
  "Droit du travail",
  "Droit fiscal",
  "Droit immobilier",
  "Droit international",
  "Droit maritime",
  "Droit pénal",
  "Droit public",
  "Droit rural",
  "Droit social",
  "Droit de l'environnement",
  "Droit de l'urbanisme",
  "Droit des étrangers",
  "Droit des successions",
  "Droit des transports",
  "Médiation et arbitrage",
  "Recouvrement de créances",
];

export default function OnboardingStep2Page() {
  const router = useRouter();
  const { saveStep2, onboardingData } = useOnboarding();
  const [formData, setFormData] = useState({
    hasExistingCabinet: onboardingData?.hasExistingCabinet ?? true,
    cabinetSize: onboardingData?.cabinetSize ?? "",
    practiceAreas: onboardingData?.practiceAreas ?? [],
    address: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    saveStep2({
      ...formData,
      cabinetSize: formData.cabinetSize as "solo" | "2-5" | "6-20" | "21+",
    });
    router.push("/onboarding/step-3");
  };

  const togglePracticeArea = (area: string) => {
    setFormData(prev => ({
      ...prev,
      practiceAreas: prev.practiceAreas.includes(area)
        ? prev.practiceAreas.filter((a: string) => a !== area)
        : [...prev.practiceAreas, area]
    }));
  };

  return (
    <OnboardingLayout
      currentStep={2}
      onSkip={() => router.push("/onboarding/step-3")}
    >
      <div className="space-y-2">
        <h1 className="font-rethink-sans text-3xl font-semibold text-zinc-900">
          Les informations de votre cabinet
        </h1>
        <p className="font-inter text-sm text-zinc-600">
          Parlez-nous de votre structure
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-4">
          <div className="space-y-3">
            <Label className="text-zinc-900">Possédez-vous déjà un cabinet ?</Label>
            <div className="grid grid-cols-2 gap-3">
              <button
                type="button"
                onClick={() => setFormData({ ...formData, hasExistingCabinet: true })}
                className={`rounded-lg border p-4 text-left transition-all ${
                  formData.hasExistingCabinet
                    ? "border-zinc-900 bg-zinc-900 text-white"
                    : "border-zinc-200 bg-white text-zinc-900 hover:border-zinc-300"
                }`}
              >
                <div className="font-medium">Oui</div>
                <div className="text-sm mt-1 opacity-80">
                  Structure établie
                </div>
              </button>
              <button
                type="button"
                onClick={() => setFormData({ ...formData, hasExistingCabinet: false })}
                className={`rounded-lg border p-4 text-left transition-all ${
                  !formData.hasExistingCabinet
                    ? "border-zinc-900 bg-zinc-900 text-white"
                    : "border-zinc-200 bg-white text-zinc-900 hover:border-zinc-300"
                }`}
              >
                <div className="font-medium">Non</div>
                <div className="text-sm mt-1 opacity-80">
                  En création
                </div>
              </button>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="cabinetSize" className="text-zinc-900">Taille du cabinet</Label>
            <Select
              value={formData.cabinetSize}
              onValueChange={(value) => setFormData({ ...formData, cabinetSize: value })}
              required
            >
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Sélectionnez la taille" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="solo">Solo (1 personne)</SelectItem>
                <SelectItem value="2-5">Petite structure (2-5 personnes)</SelectItem>
                <SelectItem value="6-20">Structure moyenne (6-20 personnes)</SelectItem>
                <SelectItem value="21+">Grande structure (21+ personnes)</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label className="text-zinc-900">Domaines de pratique</Label>
            <p className="text-xs text-zinc-500">
              Sélectionnez vos domaines d'expertise
            </p>
            <div className="h-48 overflow-y-auto border border-zinc-200 rounded-lg p-3 mt-3 bg-zinc-50">
              <div className="grid grid-cols-2 gap-2">
                {PRACTICE_AREAS.map((area) => (
                  <button
                    key={area}
                    type="button"
                    onClick={() => togglePracticeArea(area)}
                    className={`text-left text-sm px-3 py-2 rounded-md transition-all ${
                      formData.practiceAreas.includes(area)
                        ? "bg-zinc-900 text-white"
                        : "bg-white text-zinc-900 hover:bg-zinc-100 border border-zinc-200"
                    }`}
                  >
                    {area}
                  </button>
                ))}
              </div>
            </div>
            {formData.practiceAreas.length > 0 && (
              <div className="text-xs text-zinc-600 mt-2">
                ✓ {formData.practiceAreas.length} domaine(s) sélectionné(s)
              </div>
            )}
          </div>
        </div>

        <div className="flex gap-3">
          <Button
            type="button"
            variant="outline"
            onClick={() => router.push("/onboarding/step-1")}
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
