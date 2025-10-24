"use client";

import { Sparkles } from "lucide-react";
import { LucideIcon } from "lucide-react";

interface SuggestedPrompt {
  icon: LucideIcon;
  title: string;
  description: string;
}

interface PromptSuggestionsProps {
  prompts: SuggestedPrompt[];
  onSelect: (description: string) => void;
}

export function PromptSuggestions({ prompts, onSelect }: PromptSuggestionsProps) {
  return (
    <div className="bg-gradient-to-br from-white to-primary/5 rounded-xl border border-zinc-200/60 p-4 shadow-sm hover:shadow-md transition-shadow">
      <div className="flex items-center gap-2 mb-3">
        <Sparkles className="h-4 w-4 text-primary" />
        <h4 className="text-sm font-semibold text-zinc-900">Suggestions</h4>
      </div>
      <div className="space-y-2">
        {prompts.map((prompt, idx) => {
          const Icon = prompt.icon;
          return (
            <button
              key={idx}
              onClick={() => onSelect(prompt.description)}
              className="w-full text-left p-3 rounded-xl border border-zinc-200/60 hover:border-primary/40 hover:bg-white hover:shadow-sm transition-all duration-200 group bg-white/50"
            >
              <div className="flex items-start gap-2.5">
                <div className="p-1.5 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <Icon className="h-3.5 w-3.5 text-primary" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-xs font-semibold text-zinc-900 group-hover:text-primary transition-colors mb-0.5">
                    {prompt.title}
                  </p>
                  <p className="text-[11px] text-zinc-500 leading-relaxed">
                    {prompt.description}
                  </p>
                </div>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}
