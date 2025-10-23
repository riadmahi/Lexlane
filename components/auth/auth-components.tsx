"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface AuthLayoutProps {
  children: React.ReactNode;
  title: string;
  description: string;
  imageSrc?: string;
  testimonial?: {
    quote: string;
    author: string;
    role: string;
  };
}

export function AuthLayout({
  children,
  title,
  description,
  imageSrc = "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
  testimonial,
}: AuthLayoutProps) {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="grid min-h-screen lg:grid-cols-2">
        {/* Left side - Content */}
        <div className="flex items-center justify-center p-8">
          <div className="w-full max-w-md space-y-8">
            <div className="space-y-2">
              <h1 className="font-rethink-sans text-3xl font-semibold">{title}</h1>
              <p className="font-inter text-sm text-white/70">{description}</p>
            </div>
            {children}
          </div>
        </div>

        {/* Right side - Image */}
        <div className="hidden lg:block relative">
          <img
            src={imageSrc}
            alt="Cabinet d'avocat"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-black/20" />
          {testimonial && (
            <div className="absolute bottom-0 left-0 right-0 p-12">
              <blockquote className="space-y-4">
                <p className="font-rethink-sans text-2xl font-medium">
                  "{testimonial.quote}"
                </p>
                <footer className="text-white/70">
                  <div className="font-medium text-white">{testimonial.author}</div>
                  <div className="text-sm">{testimonial.role}</div>
                </footer>
              </blockquote>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

interface FormFieldProps {
  label: string;
  error?: string;
  required?: boolean;
  children: React.ReactNode;
}

export function FormField({ label, error, required, children }: FormFieldProps) {
  return (
    <div className="space-y-2">
      <label className="text-sm font-medium text-white">
        {label}
        {required && <span className="text-red-500 ml-1">*</span>}
      </label>
      {children}
      {error && <p className="text-sm text-red-500">{error}</p>}
    </div>
  );
}

interface ProgressStepsProps {
  currentStep: number;
  totalSteps: number;
}

export function ProgressSteps({ currentStep, totalSteps }: ProgressStepsProps) {
  return (
    <div className="space-y-2">
      <div className="flex items-center gap-2">
        {Array.from({ length: totalSteps }).map((_, index) => (
          <div
            key={index}
            className={cn(
              "h-1 flex-1 rounded-full transition-all",
              index < currentStep ? "bg-white" : "bg-white/20"
            )}
          />
        ))}
      </div>
      <p className="text-xs text-white/60">
        Étape {currentStep} sur {totalSteps}
      </p>
    </div>
  );
}

interface ErrorMessageProps {
  message: string;
}

export function ErrorMessage({ message }: ErrorMessageProps) {
  return (
    <div className="rounded-md bg-red-500/10 border border-red-500/50 p-3 text-sm text-red-500">
      {message}
    </div>
  );
}

interface SuccessMessageProps {
  message: string;
}

export function SuccessMessage({ message }: SuccessMessageProps) {
  return (
    <div className="rounded-md bg-green-500/10 border border-green-500/50 p-3 text-sm text-green-500">
      {message}
    </div>
  );
}
