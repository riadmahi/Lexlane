"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { OnboardingLayout } from "@/components/layout";
import { useOnboarding } from "@/hooks/use-onboarding";
import { Mail, UserPlus, X, Info } from "lucide-react";

export default function OnboardingStep4Page() {
  const router = useRouter();
  const { saveStep4, skipOnboarding } = useOnboarding();
  const [emails, setEmails] = useState<string[]>([""]);

  const addEmailField = () => {
    setEmails([...emails, ""]);
  };

  const removeEmailField = (index: number) => {
    setEmails(emails.filter((_, i) => i !== index));
  };

  const updateEmail = (index: number, value: string) => {
    const newEmails = [...emails];
    newEmails[index] = value;
    setEmails(newEmails);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const validEmails = emails.filter(email => email.trim() !== "");
    saveStep4({ inviteEmails: validEmails });
    router.push("/app/dashboard");
  };

  const handleSkip = () => {
    skipOnboarding();
    router.push("/app/dashboard");
  };

  return (
    <OnboardingLayout
      currentStep={4}
      onSkip={handleSkip}
      skipLabel="Passer cette étape"
    >
      <div className="space-y-2">
        <h1 className="font-rethink-sans text-3xl font-semibold text-zinc-900">
          Inviter des collaborateurs
        </h1>
        <p className="font-inter text-sm text-zinc-600">
          Ajoutez les membres de votre équipe (optionnel)
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-4">
          <Card className="bg-blue-50 border-blue-200">
            <CardContent className="p-4">
              <div className="flex items-start gap-3">
                <Info className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                <div className="text-sm text-blue-900">
                  <p className="font-medium mb-1">Invitation par email</p>
                  <p className="text-blue-800">
                    Les collaborateurs recevront un email d'invitation pour rejoindre votre cabinet sur Lexlane.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <Label className="text-zinc-900 flex items-center gap-2">
                <Mail className="w-4 h-4" />
                Emails des collaborateurs
              </Label>
              {emails.filter(e => e.trim()).length > 0 && (
                <Badge variant="secondary">
                  {emails.filter(e => e.trim()).length} invité(s)
                </Badge>
              )}
            </div>
            <div className="space-y-2">
              {emails.map((email, index) => (
                <div key={index} className="flex gap-2">
                  <Input
                    type="email"
                    placeholder="collaborateur@exemple.fr"
                    value={email}
                    onChange={(e) => updateEmail(index, e.target.value)}
                    className="flex-1"
                  />
                  {emails.length > 1 && (
                    <Button
                      type="button"
                      variant="outline"
                      size="icon"
                      onClick={() => removeEmailField(index)}
                      className="border-red-200 text-red-600 hover:bg-red-50 hover:text-red-700"
                    >
                      <X className="w-4 h-4" />
                    </Button>
                  )}
                </div>
              ))}
            </div>
          </div>

          <Button
            type="button"
            variant="outline"
            onClick={addEmailField}
            className="w-full border-zinc-300 hover:border-zinc-400"
          >
            <UserPlus className="w-4 h-4 mr-2" />
            Ajouter un collaborateur
          </Button>
        </div>

        <div className="flex gap-3">
          <Button
            type="button"
            variant="outline"
            onClick={() => router.push("/onboarding/step-3")}
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
            Terminer
          </Button>
        </div>
      </form>
    </OnboardingLayout>
  );
}
