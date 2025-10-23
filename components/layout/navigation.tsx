"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import BrandWhite from "@/assets/images/brand-white.svg";

export function Navigation() {
  const [activeSection, setActiveSection] = useState<string>("");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["solution", "features", "faq"];
      const scrollPosition = window.scrollY + 150; // Offset for better UX

      for (const sectionId of sections) {
        const section = document.getElementById(sectionId);
        if (section) {
          const { offsetTop, offsetHeight } = section;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(sectionId);
            break;
          }
        }
      }

      // If at top of page, clear active section
      if (window.scrollY < 100) {
        setActiveSection("");
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Call once on mount

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const getLinkClasses = (sectionId: string) => {
    const isActive = activeSection === sectionId;
    return `group relative font-rethink-sans text-m font-medium transition-all duration-300 ${
      isActive ? "text-white" : "text-white/60 hover:text-white"
    }`;
  };

  const getUnderlineClasses = (sectionId: string) => {
    const isActive = activeSection === sectionId;
    return `absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-white to-white/50 transition-all duration-300 ${
      isActive ? "w-full" : "w-0 group-hover:w-full"
    }`;
  };

  return (
    <nav className="fixed top-0 z-50 w-full border-b border-white/10 bg-black/80 backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <a href="/" className="flex items-center gap-2">
            <Image src={BrandWhite} alt="Lexlane" className="h-12" />
          </a>
          <div className="hidden items-center gap-10 md:flex">
            <a href="#solution" className={getLinkClasses("solution")}>
              La solution
              <span className={getUnderlineClasses("solution")}></span>
            </a>
            <a href="#features" className={getLinkClasses("features")}>
              Fonctionnalités
              <span className={getUnderlineClasses("features")}></span>
            </a>
            <a href="#faq" className={getLinkClasses("faq")}>
              FAQ
              <span className={getUnderlineClasses("faq")}></span>
            </a>
          </div>
          <Button
            variant="outline"
            className="relative overflow-hidden border-white/20 bg-transparent text-white backdrop-blur-sm transition-all duration-300 hover:border-white hover:bg-white hover:text-black hover:shadow-[0_0_20px_rgba(255,255,255,0.3)]"
          >
            Se connecter
          </Button>
        </div>
      </div>
    </nav>
  );
}
