export interface User {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  role: "avocat" | "juriste" | "notaire" | "autre";
  cabinetName?: string;
  phone?: string;
  hasCompletedOnboarding: boolean;
  createdAt: Date;
}

export interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  error: string | null;
}

export interface LoginCredentials {
  email: string;
  password: string;
}

export interface SignUpData {
  email: string;
  password: string;
  confirmPassword: string;
  firstName: string;
  lastName: string;
}

export interface ForgotPasswordData {
  email: string;
}

export interface ResetPasswordData {
  password: string;
  confirmPassword: string;
  token: string;
}

export interface OnboardingStep1Data {
  activityType: "avocat" | "juriste" | "notaire" | "autre";
  cabinetName: string;
  siret?: string;
  address?: string;
}

export interface OnboardingStep2Data {
  hasExistingCabinet: boolean;
  cabinetSize?: "solo" | "2-5" | "6-20" | "21+";
  practiceAreas?: string[];
}

export interface OnboardingStep3Data {
  inviteEmails?: string[];
  skipInvitation?: boolean;
}

export interface OnboardingStep4Data {
  openingHours?: {
    [key: string]: { open: string; close: string; closed: boolean };
  };
  appointmentDuration?: number;
}

export type OnboardingData = OnboardingStep1Data & 
  OnboardingStep2Data & 
  OnboardingStep3Data &
  OnboardingStep4Data;
