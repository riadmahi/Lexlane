"use client";

import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { useRouter } from "next/navigation";
import type { User, AuthState, LoginCredentials, SignUpData } from "@/types/auth";

interface AuthContextType extends AuthState {
  login: (credentials: LoginCredentials) => Promise<void>;
  signup: (data: SignUpData) => Promise<void>;
  logout: () => void;
  updateUser: (user: Partial<User>) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const router = useRouter();
  const [authState, setAuthState] = useState<AuthState>({
    user: null,
    isAuthenticated: false,
    isLoading: true,
    error: null,
  });

  // Vérifier l'authentification au chargement
  useEffect(() => {
    checkAuth();
  }, []);

  const checkAuth = async () => {
    try {
      // TODO: Vérifier le token JWT ou la session avec votre backend
      const isAuthenticated = localStorage.getItem("isAuthenticated") === "true";
      
      if (isAuthenticated) {
        // TODO: Récupérer les données utilisateur depuis votre backend
        const mockUser: User = {
          id: "1",
          email: "user@example.com",
          firstName: "Jean",
          lastName: "Dupont",
          role: "avocat",
          cabinetName: "Cabinet Dupont",
          hasCompletedOnboarding: localStorage.getItem("needsOnboarding") !== "true",
          createdAt: new Date(),
        };

        setAuthState({
          user: mockUser,
          isAuthenticated: true,
          isLoading: false,
          error: null,
        });
      } else {
        setAuthState({
          user: null,
          isAuthenticated: false,
          isLoading: false,
          error: null,
        });
      }
    } catch (error) {
      setAuthState({
        user: null,
        isAuthenticated: false,
        isLoading: false,
        error: "Erreur lors de la vérification de l'authentification",
      });
    }
  };

  const login = async (credentials: LoginCredentials) => {
    try {
      setAuthState((prev) => ({ ...prev, isLoading: true, error: null }));

      // TODO: Remplacer par votre appel API réel
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Mock de connexion réussie
      const mockUser: User = {
        id: "1",
        email: credentials.email,
        firstName: "Jean",
        lastName: "Dupont",
        role: "avocat",
        cabinetName: "Cabinet Dupont",
        hasCompletedOnboarding: true,
        createdAt: new Date(),
      };

      localStorage.setItem("isAuthenticated", "true");

      setAuthState({
        user: mockUser,
        isAuthenticated: true,
        isLoading: false,
        error: null,
      });

      router.push("/dashboard");
    } catch (error) {
      setAuthState((prev) => ({
        ...prev,
        isLoading: false,
        error: "Email ou mot de passe incorrect",
      }));
      throw error;
    }
  };

  const signup = async (data: SignUpData) => {
    try {
      setAuthState((prev) => ({ ...prev, isLoading: true, error: null }));

      // Validation
      if (data.password !== data.confirmPassword) {
        throw new Error("Les mots de passe ne correspondent pas");
      }

      // TODO: Remplacer par votre appel API réel
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Mock d'inscription réussie
      const mockUser: User = {
        id: "1",
        email: data.email,
        firstName: data.firstName,
        lastName: data.lastName,
        role: "avocat",
        hasCompletedOnboarding: false,
        createdAt: new Date(),
      };

      localStorage.setItem("isAuthenticated", "true");
      localStorage.setItem("needsOnboarding", "true");

      setAuthState({
        user: mockUser,
        isAuthenticated: true,
        isLoading: false,
        error: null,
      });

      router.push("/onboarding/step-1");
    } catch (error) {
      setAuthState((prev) => ({
        ...prev,
        isLoading: false,
        error: error instanceof Error ? error.message : "Erreur lors de l'inscription",
      }));
      throw error;
    }
  };

  const logout = () => {
    localStorage.removeItem("isAuthenticated");
    localStorage.removeItem("needsOnboarding");
    
    setAuthState({
      user: null,
      isAuthenticated: false,
      isLoading: false,
      error: null,
    });

    router.push("/auth/sign-in");
  };

  const updateUser = (updates: Partial<User>) => {
    setAuthState((prev) => ({
      ...prev,
      user: prev.user ? { ...prev.user, ...updates } : null,
    }));
  };

  const value: AuthContextType = {
    ...authState,
    login,
    signup,
    logout,
    updateUser,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
