"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Brand from "@/assets/images/brand.svg";
import { SlideIn } from "@/components/ui/page-transition";

interface OnboardingLayoutProps {
  children: React.ReactNode;
  currentStep: 1 | 2 | 3 | 4;
  onSkip?: () => void;
  skipLabel?: string;
}

const LEGAL_IMAGES = [
  "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
  "https://images.unsplash.com/photo-1505664194779-8beaceb93744?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
  "https://images.unsplash.com/photo-1479142506502-19b3a3b7ff33?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
  "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
  "https://images.unsplash.com/photo-1507679799987-c73779587ccf?ixlib=rb-4.0.3&auto=format&fit=crop&w=1471&q=80",
];

export function OnboardingLayout({ 
  children, 
  currentStep,
  onSkip,
  skipLabel = "Passer",
}: OnboardingLayoutProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % LEGAL_IMAGES.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);
  return (
    <div className="min-h-screen bg-white">
      <div className="grid min-h-[calc(100vh)] lg:grid-cols-2">
        {/* Left side - Form */}
        <div className="flex items-center justify-center p-8">
          <SlideIn direction="right" className="w-full max-w-md space-y-8">
            {/* Progress */}
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <div className={`h-1 flex-1 rounded-full ${currentStep >= 1 ? 'bg-zinc-900' : 'bg-zinc-200'}`} />
                <div className={`h-1 flex-1 rounded-full ${currentStep >= 2 ? 'bg-zinc-900' : 'bg-zinc-200'}`} />
                <div className={`h-1 flex-1 rounded-full ${currentStep >= 3 ? 'bg-zinc-900' : 'bg-zinc-200'}`} />
                <div className={`h-1 flex-1 rounded-full ${currentStep >= 4 ? 'bg-zinc-900' : 'bg-zinc-200'}`} />
              </div>
              <p className="text-xs text-zinc-500">Étape {currentStep} sur 4</p>
            </div>

            {children}
          </SlideIn>
        </div>

        {/* Right side - Image Carousel */}
        <div className="hidden lg:block relative overflow-hidden">
          {LEGAL_IMAGES.map((image, index) => (
            <div
              key={image}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentImageIndex ? "opacity-100" : "opacity-0"
              }`}
            >
              <Image
                src={image}
                alt={`Cabinet d'avocat ${index + 1}`}
                fill
                className="object-cover"
                priority={index === 0}
              />
            </div>
          ))}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-black/20" />
          
          {/* Carousel indicators */}
          <div className="absolute bottom-8 left-0 right-0 flex justify-center gap-2">
            {LEGAL_IMAGES.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentImageIndex(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentImageIndex
                    ? "bg-white w-8"
                    : "bg-white/50 hover:bg-white/75"
                }`}
                aria-label={`Image ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
