"use client";

import { Brain, MoreVertical } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface ChatHeaderProps {
  title: string;
  selectedDocCount: number;
  totalDocCount: number;
}

export function ChatHeader({ title, selectedDocCount, totalDocCount }: ChatHeaderProps) {
  return (
    <div className="p-5 border-b bg-gradient-to-r from-primary/8 via-primary/5 to-primary/8 backdrop-blur-sm">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="relative flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-primary/80 shadow-lg shadow-primary/20">
            <Brain className="h-5 w-5 text-white" />
            <div className="absolute -top-1 -right-1 h-3 w-3 rounded-full bg-emerald-500 border-2 border-white"></div>
          </div>
          <div>
            <h3 className="text-sm font-bold text-zinc-900 flex items-center gap-2">
              Assistant IA Juridique
              <span className="px-2 py-0.5 bg-primary/10 text-primary text-[10px] font-semibold rounded-full">
                BETA
              </span>
            </h3>
            <p className="text-xs text-zinc-600 flex items-center gap-1.5 mt-0.5">
              <span className="font-medium">{title}</span>
              <span className="text-zinc-400">•</span>
              <span
                className={cn(
                  "font-medium transition-colors",
                  selectedDocCount > 0 ? "text-emerald-600" : "text-zinc-500"
                )}
              >
                {selectedDocCount}/{totalDocCount} documents
              </span>
            </p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5 px-2.5 py-1 bg-emerald-50 rounded-full border border-emerald-200/60">
            <div className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse"></div>
            <span className="text-xs font-medium text-emerald-700">En ligne</span>
          </div>
          <Button variant="ghost" size="icon" className="h-8 w-8">
            <MoreVertical className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}
