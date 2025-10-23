"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { OnboardingLayout } from "@/components/layout";
import { useOnboarding } from "@/hooks/use-onboarding";
import { Clock } from "lucide-react";

const DAYS = [
  { key: "monday", label: "Lundi" },
  { key: "tuesday", label: "Mardi" },
  { key: "wednesday", label: "Mercredi" },
  { key: "thursday", label: "Jeudi" },
  { key: "friday", label: "Vendredi" },
  { key: "saturday", label: "Samedi" },
  { key: "sunday", label: "Dimanche" },
];

const DEFAULT_HOURS = {
  open: "09:00",
  close: "18:00",
  closed: false,
};

export default function OnboardingStep3Page() {
  const router = useRouter();
  const { saveStep3 } = useOnboarding();
  const [hours, setHours] = useState<{
    [key: string]: { open: string; close: string; closed: boolean };
  }>({
    monday: { ...DEFAULT_HOURS },
    tuesday: { ...DEFAULT_HOURS },
    wednesday: { ...DEFAULT_HOURS },
    thursday: { ...DEFAULT_HOURS },
    friday: { ...DEFAULT_HOURS },
    saturday: { ...DEFAULT_HOURS, closed: true },
    sunday: { ...DEFAULT_HOURS, closed: true },
  });
  const [appointmentDuration, setAppointmentDuration] = useState(30);

  const toggleDay = (day: string) => {
    setHours((prev) => ({
      ...prev,
      [day]: { ...prev[day], closed: !prev[day].closed },
    }));
  };

  const updateHours = (day: string, field: "open" | "close", value: string) => {
    setHours((prev) => ({
      ...prev,
      [day]: { ...prev[day], [field]: value },
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    saveStep3({ openingHours: hours, appointmentDuration });
    router.push("/onboarding/step-4");
  };

  const handleSkip = () => {
    router.push("/onboarding/step-4");
  };

  return (
    <OnboardingLayout
      currentStep={3}
      onSkip={handleSkip}
      skipLabel="Passer cette étape"
    >
      <div className="space-y-2">
        <h1 className="font-rethink-sans text-3xl font-semibold text-zinc-900">
          Horaires du cabinet
        </h1>
        <p className="font-inter text-sm text-zinc-600">
          Configurez vos horaires d'ouverture (optionnel)
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-4">
          <div className="space-y-3">
            <Label className="text-zinc-900 flex items-center gap-2">
              <Clock className="w-4 h-4" />
              Durée des rendez-vous par défaut
            </Label>
            <Select
              value={appointmentDuration.toString()}
              onValueChange={(value) => setAppointmentDuration(Number(value))}
            >
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Sélectionnez une durée" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="15">15 minutes</SelectItem>
                <SelectItem value="30">30 minutes</SelectItem>
                <SelectItem value="45">45 minutes</SelectItem>
                <SelectItem value="60">1 heure</SelectItem>
                <SelectItem value="90">1h30</SelectItem>
                <SelectItem value="120">2 heures</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <Label className="text-zinc-900">Horaires d'ouverture</Label>
              <Badge variant="secondary" className="text-xs">
                {Object.values(hours).filter(h => !h.closed).length} jours ouverts
              </Badge>
            </div>
            <div className="h-64 overflow-y-auto space-y-2 pr-2">
              {DAYS.map((day) => (
                <Card
                  key={day.key}
                  className={`transition-all ${
                    hours[day.key].closed 
                      ? "bg-zinc-50 border-zinc-200" 
                      : "bg-white border-zinc-300 shadow-sm"
                  }`}
                >
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between mb-3">
                      <span className="font-medium text-zinc-900">{day.label}</span>
                      <div className="flex items-center gap-2">
                        <span className="text-xs text-zinc-500">
                          {hours[day.key].closed ? "Fermé" : "Ouvert"}
                        </span>
                        <Switch
                          checked={!hours[day.key].closed}
                          onCheckedChange={() => toggleDay(day.key)}
                        />
                      </div>
                    </div>

                    {!hours[day.key].closed && (
                      <div className="grid grid-cols-2 gap-3">
                        <div className="space-y-1.5">
                          <label className="text-xs font-medium text-zinc-600">
                            Ouverture
                          </label>
                          <input
                            type="time"
                            value={hours[day.key].open}
                            onChange={(e) =>
                              updateHours(day.key, "open", e.target.value)
                            }
                            className="w-full rounded-md border border-zinc-200 bg-white px-3 py-2 text-sm text-zinc-900 focus:outline-none focus:ring-2 focus:ring-zinc-900 focus:border-transparent"
                          />
                        </div>
                        <div className="space-y-1.5">
                          <label className="text-xs font-medium text-zinc-600">
                            Fermeture
                          </label>
                          <input
                            type="time"
                            value={hours[day.key].close}
                            onChange={(e) =>
                              updateHours(day.key, "close", e.target.value)
                            }
                            className="w-full rounded-md border border-zinc-200 bg-white px-3 py-2 text-sm text-zinc-900 focus:outline-none focus:ring-2 focus:ring-zinc-900 focus:border-transparent"
                          />
                        </div>
                      </div>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

        <div className="flex gap-3">
          <Button
            type="button"
            variant="outline"
            onClick={() => router.push("/onboarding/step-2")}
            className="flex-1 border-zinc-200 text-zinc-900 hover:bg-zinc-50"
            size="lg"
          >
            Retour
          </Button>
          <Button
            type="submit"
            className="flex-1"
            size="lg"
          >
            Continuer
          </Button>
        </div>
      </form>
    </OnboardingLayout>
  );
}
