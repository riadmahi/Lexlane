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
      <div className="px-6 py-4">
        <div className="flex items-center justify-between gap-6">
          {/* Left side - Date display */}
          <div className="flex items-center gap-4">
            <div className="text-center">
              <div className="text-xs font-semibold text-zinc-500 uppercase tracking-wide">
                {getMonthAbbr()}
              </div>
              <div className="text-2xl font-bold text-zinc-900">
                {currentDate.getDate()}
              </div>
            </div>
            <div>
              <h1 className="text-lg font-bold text-zinc-900 capitalize">
                {getMonthYear()}
              </h1>
              <p className="text-xs text-zinc-500">
                {getDateRange()}
              </p>
            </div>
          </div>

          {/* Center - Navigation */}
          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={onPrevious}
              className="h-8 w-8 text-zinc-600 hover:text-zinc-900 hover:bg-zinc-100"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={onToday}
              className="h-8 px-3 text-xs font-medium"
            >
              Today
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={onNext}
              className="h-8 w-8 text-zinc-600 hover:text-zinc-900 hover:bg-zinc-100"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>

          {/* Right side - View modes and actions */}
          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8 text-zinc-600 hover:text-zinc-900 hover:bg-zinc-100"
            >
              <Search className="h-4 w-4" />
            </Button>

            {/* View mode dropdown */}
            <div className="relative">
              <select
                value={viewMode}
                onChange={(e) => onViewModeChange(e.target.value as any)}
                className="h-8 px-3 pr-8 text-xs font-medium bg-white border border-zinc-200 rounded-lg appearance-none cursor-pointer hover:bg-zinc-50 focus:outline-none focus:ring-2 focus:ring-primary/20"
              >
                <option value="month">Month view</option>
                <option value="week">Week view</option>
                <option value="day">Day view</option>
                <option value="agenda">Agenda view</option>
              </select>
              <ChevronRight className="absolute right-2 top-1/2 -translate-y-1/2 h-3 w-3 text-zinc-400 pointer-events-none rotate-90" />
            </div>

            <Button
              onClick={onNewEvent}
              size="sm"
              className="h-8 gap-1.5 bg-zinc-900 hover:bg-zinc-800 text-white text-xs font-medium px-3"
            >
              <Plus className="h-3.5 w-3.5" />
              Add event
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
