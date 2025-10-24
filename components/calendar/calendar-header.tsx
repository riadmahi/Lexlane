"use client";

import { ChevronLeft, ChevronRight, Search, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";

interface CalendarHeaderProps {
  currentDate: Date;
  viewMode: "month" | "week" | "day" | "agenda";
  onPrevious: () => void;
  onNext: () => void;
  onToday: () => void;
  onViewModeChange: (mode: "month" | "week" | "day" | "agenda") => void;
  onNewEvent: () => void;
}

export function CalendarHeader({
  currentDate,
  viewMode,
  onPrevious,
  onNext,
  onToday,
  onViewModeChange,
  onNewEvent,
}: CalendarHeaderProps) {
  const getMonthYear = () => {
    return currentDate.toLocaleDateString("fr-FR", {
      month: "long",
      year: "numeric",
    });
  };

  const getDateRange = () => {
    const month = currentDate.toLocaleDateString("fr-FR", { month: "short" });
    const day = currentDate.getDate();
    const year = currentDate.getFullYear();
    
    // Get the last day of the current month
    const lastDay = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate();
    
    return `${month.charAt(0).toUpperCase() + month.slice(1)} ${day}, ${year} - ${month.charAt(0).toUpperCase() + month.slice(1)} ${lastDay}, ${year}`;
  };

  const getMonthAbbr = () => {
    return currentDate.toLocaleDateString("fr-FR", { month: "short" }).toUpperCase();
  };

  return (
    <div className="bg-white border-b border-zinc-200">
      <div className="px-8 py-5">
        <div className="flex items-center justify-between gap-8">
          {/* Left side - Date display */}
          <div className="flex items-center gap-5">
            <div className="flex flex-col items-center justify-center min-w-[60px]">
              <div className="text-sm font-bold text-zinc-400 uppercase tracking-tight">
                {getMonthAbbr()}
              </div>
              <div className="text-4xl font-bold text-zinc-900 leading-none mt-1">
                {currentDate.getDate()}
              </div>
            </div>
            <div className="border-l border-zinc-200 pl-5">
              <h1 className="text-xl font-bold text-zinc-900 capitalize mb-0.5">
                {getMonthYear()}
              </h1>
              <p className="text-sm text-zinc-500">
                {getDateRange()}
              </p>
            </div>
          </div>

          {/* Center - Navigation */}
          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              size="icon"
              onClick={onPrevious}
              className="h-9 w-9"
            >
              <ChevronLeft className="h-4 w-4" />
              <span className="sr-only">Précédent</span>
            </Button>
            <Button
              variant="outline"
              onClick={onToday}
              className="h-9 px-4 text-sm font-medium"
            >
              Aujourd'hui
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={onNext}
              className="h-9 w-9"
            >
              <ChevronRight className="h-4 w-4" />
              <span className="sr-only">Suivant</span>
            </Button>
          </div>

          {/* Right side - View modes and actions */}
          <div className="flex items-center gap-3">
            <Button
              variant="outline"
              size="icon"
              className="h-9 w-9"
            >
              <Search className="h-4 w-4" />
              <span className="sr-only">Rechercher</span>
            </Button>

            {/* View mode buttons */}
            <div className="flex items-center gap-1 border border-zinc-200 rounded-lg p-1">
              <Button
                variant={viewMode === "month" ? "secondary" : "ghost"}
                size="sm"
                onClick={() => onViewModeChange("month")}
                className="h-7 px-3 text-xs font-medium"
              >
                Mois
              </Button>
              <Button
                variant={viewMode === "week" ? "secondary" : "ghost"}
                size="sm"
                onClick={() => onViewModeChange("week")}
                className="h-7 px-3 text-xs font-medium"
              >
                Semaine
              </Button>
              <Button
                variant={viewMode === "day" ? "secondary" : "ghost"}
                size="sm"
                onClick={() => onViewModeChange("day")}
                className="h-7 px-3 text-xs font-medium"
              >
                Jour
              </Button>
              <Button
                variant={viewMode === "agenda" ? "secondary" : "ghost"}
                size="sm"
                onClick={() => onViewModeChange("agenda")}
                className="h-7 px-3 text-xs font-medium"
              >
                Agenda
              </Button>
            </div>

            <Button
              onClick={onNewEvent}
              className="h-9 gap-2 text-sm font-medium px-4"
            >
              <Plus className="h-4 w-4" />
              Nouvel événement
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
