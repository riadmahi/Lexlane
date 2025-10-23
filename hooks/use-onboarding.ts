"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import type { 
  OnboardingStep1Data, 
  OnboardingStep2Data, 
  OnboardingStep3Data,
  OnboardingStep4Data,
  OnboardingData 
} from "@/types/auth";

export function useOnboarding() {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState(1);
  const [onboardingData, setOnboardingData] = useState<Partial<OnboardingData>>({});
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const saveStep1 = async (data: OnboardingStep1Data) => {
    try {
      setIsLoading(true);
      setError(null);

      // TODO: Sauvegarder les données sur le backend
      await new Promise((resolve) => setTimeout(resolve, 500));

      setOnboardingData((prev) => ({ ...prev, ...data }));
      localStorage.setItem("onboarding_step1", JSON.stringify(data));
      
      setCurrentStep(2);
      router.push("/onboarding/step-2");
    } catch (err) {
      setError("Erreur lors de la sauvegarde des données");
      throw err;
    } finally {
      setIsLoading(false);
    }
  };

  const saveStep2 = async (data: OnboardingStep2Data) => {
    try {
      setIsLoading(true);
      setError(null);

      // TODO: Sauvegarder les données sur le backend
      await new Promise((resolve) => setTimeout(resolve, 500));

      setOnboardingData((prev) => ({ ...prev, ...data }));
      localStorage.setItem("onboarding_step2", JSON.stringify(data));
      
      setCurrentStep(3);
      router.push("/onboarding/step-3");
    } catch (err) {
      setError("Erreur lors de la sauvegarde des données");
      throw err;
    } finally {
      setIsLoading(false);
    }
  };

  const saveStep3 = async (data: OnboardingStep4Data) => {
    try {
      setIsLoading(true);
      setError(null);

      // TODO: Sauvegarder les données sur le backend
      await new Promise((resolve) => setTimeout(resolve, 500));

      setOnboardingData((prev) => ({ ...prev, ...data }));
      localStorage.setItem("onboarding_step3", JSON.stringify(data));
      
      setCurrentStep(4);
      router.push("/onboarding/step-4");
    } catch (err) {
      setError("Erreur lors de la sauvegarde des données");
      throw err;
    } finally {
      setIsLoading(false);
    }
  };

  const saveStep4 = async (data: OnboardingStep3Data) => {
    try {
      setIsLoading(true);
      setError(null);

      const completeData = { ...onboardingData, ...data };

      // TODO: Finaliser l'onboarding sur le backend
      await new Promise((resolve) => setTimeout(resolve, 1000));

      localStorage.setItem("onboarding_step4", JSON.stringify(data));
      localStorage.setItem("needsOnboarding", "false");
      
      router.push("/app/dashboard");
    } catch (err) {
      setError("Erreur lors de la finalisation de l'onboarding");
      throw err;
    } finally {
      setIsLoading(false);
    }
  };

  const skipOnboarding = () => {
    localStorage.setItem("needsOnboarding", "false");
    router.push("/app/dashboard");
  };

  const goToStep = (step: number) => {
    setCurrentStep(step);
    router.push(`/onboarding/step-${step}`);
  };

  const loadSavedData = () => {
    try {
      const step1 = localStorage.getItem("onboarding_step1");
      const step2 = localStorage.getItem("onboarding_step2");
      const step3 = localStorage.getItem("onboarding_step3");
      const step4 = localStorage.getItem("onboarding_step4");

      const savedData: Partial<OnboardingData> = {
        ...(step1 ? JSON.parse(step1) : {}),
        ...(step2 ? JSON.parse(step2) : {}),
        ...(step3 ? JSON.parse(step3) : {}),
        ...(step4 ? JSON.parse(step4) : {}),
      };

      setOnboardingData(savedData);
      return savedData;
    } catch (err) {
      console.error("Erreur lors du chargement des données sauvegardées", err);
      return {};
    }
  };

  return {
    currentStep,
    onboardingData,
    isLoading,
    error,
    saveStep1,
    saveStep2,
    saveStep3,
    saveStep4,
    skipOnboarding,
    goToStep,
    loadSavedData,
  };
}
