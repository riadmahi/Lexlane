"use client";

import { FileText, Brain, Network } from "lucide-react";
import { cn } from "@/lib/utils";

interface Tab {
  id: string;
  label: string;
  icon: typeof FileText;
}

interface CaseTabsProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
  tabs: Tab[];
}

export function CaseTabs({ activeTab, onTabChange, tabs }: CaseTabsProps) {
  return (
    <div className="flex items-center gap-1">
      {tabs.map((tab) => {
        const Icon = tab.icon;
        return (
          <button
            key={tab.id}
            onClick={() => onTabChange(tab.id)}
            className={cn(
              "px-4 py-3 text-sm font-medium transition-all duration-200 relative flex items-center gap-2",
              activeTab === tab.id
                ? "text-zinc-900"
                : "text-zinc-600 hover:text-zinc-900"
            )}
          >
            <Icon className="h-4 w-4" />
            {tab.label}
            {activeTab === tab.id && (
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary" />
            )}
          </button>
        );
      })}
    </div>
  );
}
