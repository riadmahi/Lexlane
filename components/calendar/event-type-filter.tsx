"use client";

import { cn } from "@/lib/utils";
import { Check } from "lucide-react";

interface EventTypeFilterProps {
  selectedTypes: string[];
  onToggle: (type: string) => void;
}

export function EventTypeFilter({ selectedTypes, onToggle }: EventTypeFilterProps) {
  const eventTypes = [
    { 
      id: "hearing", 
      label: "Audiences", 
      icon: "⚖️", 
      color: "red",
      gradient: "from-red-500 to-red-600",
      lightBg: "bg-red-50",
      darkText: "text-red-700",
      border: "border-red-200",
      ring: "ring-red-500/20"
    },
    { 
      id: "deadline", 
      label: "Échéances", 
      icon: "⏰", 
      color: "amber",
      gradient: "from-amber-500 to-amber-600",
      lightBg: "bg-amber-50",
      darkText: "text-amber-700",
      border: "border-amber-200",
      ring: "ring-amber-500/20"
    },
    { 
      id: "meeting", 
      label: "Réunions", 
      icon: "👥", 
      color: "emerald",
      gradient: "from-emerald-500 to-emerald-600",
      lightBg: "bg-emerald-50",
      darkText: "text-emerald-700",
      border: "border-emerald-200",
      ring: "ring-emerald-500/20"
    },
    { 
      id: "appointment", 
      label: "Rendez-vous", 
      icon: "📅", 
      color: "blue",
      gradient: "from-blue-500 to-blue-600",
      lightBg: "bg-blue-50",
      darkText: "text-blue-700",
      border: "border-blue-200",
      ring: "ring-blue-500/20"
    },
  ];

  const allSelected = selectedTypes.length === eventTypes.length;
  const noneSelected = selectedTypes.length === 0;

  return (
    <div className="bg-white rounded-xl border border-zinc-200/60 shadow-sm overflow-hidden">
      <div className="p-5 border-b border-zinc-200/60 bg-gradient-to-r from-zinc-50 to-white">
        <h3 className="text-sm font-bold text-zinc-900 mb-1">
          Filtrer par type
        </h3>
        <p className="text-xs text-zinc-600">
          {selectedTypes.length} type{selectedTypes.length > 1 ? "s" : ""} sélectionné{selectedTypes.length > 1 ? "s" : ""}
        </p>
      </div>

      <div className="p-4 space-y-2">
        {eventTypes.map((type) => {
          const isSelected = selectedTypes.includes(type.id);
          return (
            <button
              key={type.id}
              onClick={() => onToggle(type.id)}
              className={cn(
                "w-full flex items-center gap-3 px-4 py-3 rounded-xl border-2 transition-all relative overflow-hidden group",
                isSelected
                  ? `${type.lightBg} ${type.darkText} ${type.border} shadow-md ring-2 ${type.ring}`
                  : "bg-white border-zinc-200/60 text-zinc-600 hover:border-zinc-300 hover:bg-zinc-50/50"
              )}
            >
              {/* Background gradient on hover */}
              {isSelected && (
                <div className={cn(
                  "absolute inset-0 bg-gradient-to-r opacity-[0.03]",
                  type.gradient
                )}></div>
              )}

              {/* Icon */}
              <div className={cn(
                "flex h-10 w-10 items-center justify-center rounded-lg shrink-0 text-xl transition-all",
                isSelected 
                  ? `bg-gradient-to-br ${type.gradient} shadow-md`
                  : "bg-zinc-100 group-hover:bg-zinc-200"
              )}>
                {isSelected ? (
                  <span className="text-white">✓</span>
                ) : (
                  <span>{type.icon}</span>
                )}
              </div>

              {/* Label */}
              <span className={cn(
                "text-sm font-semibold flex-1 text-left transition-all",
                isSelected && "translate-x-1"
              )}>
                {type.label}
              </span>

              {/* Checkmark */}
              {isSelected && (
                <div className={cn(
                  "h-6 w-6 rounded-full flex items-center justify-center bg-gradient-to-br shadow-sm",
                  type.gradient
                )}>
                  <Check className="h-3.5 w-3.5 text-white" strokeWidth={3} />
                </div>
              )}
            </button>
          );
        })}
      </div>

      {/* Quick actions */}
      <div className="p-4 border-t border-zinc-200/60 bg-zinc-50/50 flex gap-2">
        <button
          onClick={() => {
            if (allSelected) {
              eventTypes.forEach(t => {
                if (selectedTypes.includes(t.id)) onToggle(t.id);
              });
            } else {
              eventTypes.forEach(t => {
                if (!selectedTypes.includes(t.id)) onToggle(t.id);
              });
            }
          }}
          className="flex-1 px-3 py-2 text-xs font-semibold rounded-lg bg-white border border-zinc-200 hover:bg-zinc-50 hover:border-zinc-300 transition-all text-zinc-700"
        >
          {allSelected ? "Tout désélectionner" : "Tout sélectionner"}
        </button>
      </div>
    </div>
  );
}
