"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { OnboardingLayout } from "@/components/layout";
import { useOnboarding } from "@/hooks/use-onboarding";

export default function OnboardingStep3Page() {
  const router = useRouter();
  const { saveStep3, skipOnboarding } = useOnboarding();
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
    saveStep3({ inviteEmails: validEmails });
    router.push("/dashboard");
  };

  const handleSkip = () => {
    skipOnboarding();
    router.push("/dashboard");
  };

  return (
    <OnboardingLayout
      currentStep={3}
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
          <div className="rounded-md bg-blue-500/10 border border-blue-500/50 p-4">
            <div className="flex items-start gap-3">
              <svg
                className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <div className="text-sm text-blue-900">
                <p className="font-medium mb-1">Invitation par email</p>
                <p className="text-blue-800">
                  Les collaborateurs recevront un email d'invitation pour rejoindre votre cabinet sur Lexlane.
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-3">
            <Label className="text-zinc-900">Emails des collaborateurs</Label>
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
                    onClick={() => removeEmailField(index)}
                    className="border-red-200 text-red-600 hover:bg-red-50"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </Button>
                )}
              </div>
            ))}
          </div>

          <Button
            type="button"
            variant="outline"
            onClick={addEmailField}
            className="w-full border-zinc-200 text-zinc-900 hover:bg-zinc-50"
          >
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
            </svg>
            Ajouter un collaborateur
          </Button>
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
