"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { AuthLayout } from "@/components/layout";

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    await new Promise((resolve) => setTimeout(resolve, 1000));
    
    setIsSubmitted(true);
    setIsLoading(false);
  };

  if (isSubmitted) {
    return (
      <AuthLayout>
        <div className="space-y-4 text-center">
          <div className="mx-auto w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center">
            <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>

          <h1 className="font-rethink-sans text-3xl font-semibold text-zinc-900">
            Email envoyé !
          </h1>
          
          <p className="font-inter text-sm text-zinc-600">
            Si un compte existe pour <strong>{email}</strong>, vous recevrez un email
            avec les instructions pour réinitialiser votre mot de passe.
          </p>

          <p className="font-inter text-xs text-zinc-500">
            Vérifiez également vos spams si vous ne voyez pas l'email.
          </p>
        </div>

        <div className="space-y-4">
          <Button
            onClick={() => setIsSubmitted(false)}
            variant="secondary"
            className="w-full"
            size="lg"
          >
            Renvoyer l'email
          </Button>

          <div className="text-center">
            <Link
              href="/auth/sign-in"
              className="text-sm text-zinc-600 hover:text-zinc-900 transition-colors"
            >
              ← Retour à la connexion
            </Link>
          </div>
        </div>
      </AuthLayout>
    );
  }

  return (
    <AuthLayout>
      <div className="space-y-2">
        <h1 className="font-rethink-sans text-3xl font-semibold text-zinc-900">
          Mot de passe oublié ?
        </h1>
        <p className="font-inter text-sm text-zinc-600">
          Entrez votre email et nous vous enverrons les instructions pour réinitialiser votre mot de passe
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-2">
          <Label htmlFor="email" className="text-zinc-900">Email</Label>
          <Input
            id="email"
            type="email"
            placeholder="nom@exemple.fr"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <Button
          type="submit"
          className="w-full"
          size="lg"
          disabled={isLoading}
        >
          {isLoading ? "Envoi en cours..." : "Réinitialiser le mot de passe"}
        </Button>
      </form>

      <div className="text-center">
        <Link
          href="/auth/sign-in"
          className="text-sm text-zinc-600 hover:text-zinc-900 transition-colors"
        >
          ← Retour à la connexion
        </Link>
      </div>
    </AuthLayout>
  );
}
