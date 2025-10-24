"use client";

import { CalendarEvent } from "@/types/calendar";
import { cn } from "@/lib/utils";

interface CalendarDay {
  date: Date;
  day: number;
  isCurrentMonth: boolean;
  isToday: boolean;
  events: CalendarEvent[];
}

interface CalendarGridProps {
  days: CalendarDay[];
  onDayClick: (date: Date) => void;
  onEventClick: (event: CalendarEvent) => void;
}

export function CalendarGrid({ days, onDayClick, onEventClick }: CalendarGridProps) {
  const weekDays = ["Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi", "Dimanche"];

  const getEventColor = (priority: CalendarEvent["priority"], type: CalendarEvent["type"]) => {
    // Match the colors from the reference image
    if (type === "meeting" || priority === "low") {
      return "bg-emerald-100 text-emerald-700 border-emerald-200";
    }
    if (type === "deadline" || priority === "high") {
      return "bg-fuchsia-100 text-fuchsia-700 border-fuchsia-200";
    }
    if (type === "appointment") {
      return "bg-amber-100 text-amber-700 border-amber-200";
    }
    return "bg-blue-100 text-blue-700 border-blue-200";
  };

  const getEventDot = (priority: CalendarEvent["priority"], type: CalendarEvent["type"]) => {
    if (type === "meeting" || priority === "low") return "bg-emerald-500";
    if (type === "deadline" || priority === "high") return "bg-fuchsia-500";
    if (type === "appointment") return "bg-amber-500";
    return "bg-blue-500";
  };

  return (
    <div className="bg-white border border-zinc-200 overflow-hidden">
      {/* Week day headers */}
      <div className="grid grid-cols-7 border-b border-zinc-200">
        {weekDays.map((day) => (
          <div
            key={day}
            className="px-2 py-3 text-left text-xs font-medium text-zinc-600"
          >
            {day}
          </div>
        ))}
      </div>

      {/* Calendar days grid */}
      <div className="grid grid-cols-7">
        {days.map((day, index) => {
          const isWeekend = index % 7 >= 5;
          
          return (
            <button
              key={index}
              onClick={() => onDayClick(day.date)}
              className={cn(
                "min-h-[120px] p-2 text-left transition-colors relative group border-r border-b border-zinc-100 last:border-r-0",
                !day.isCurrentMonth && "bg-zinc-50/50",
                day.isCurrentMonth && "bg-white hover:bg-zinc-50/50",
                day.isToday && "bg-zinc-100",
                index >= 35 && "border-b-0"
              )}
            >
              {/* Day number */}
              <div className="mb-1">
                <span
                  className={cn(
                    "inline-flex h-6 w-6 items-center justify-center rounded-full text-xs font-medium",
                    day.isToday && "bg-zinc-900 text-white",
                    !day.isToday && day.isCurrentMonth && "text-zinc-900",
                    !day.isToday && !day.isCurrentMonth && "text-zinc-400"
                  )}
                >
                  {day.day}
                </span>
              </div>

              {/* Events for this day */}
              <div className="space-y-1">
                {day.events.slice(0, 4).map((event) => (
                  <button
                    key={event.id}
                    onClick={(e) => {
                      e.stopPropagation();
                      onEventClick(event);
                    }}
                    className={cn(
                      "w-full text-left px-2 py-0.5 rounded text-[11px] font-medium transition-colors flex items-center gap-1.5 border",
                      getEventColor(event.priority, event.type),
                      "hover:opacity-80"
                    )}
                  >
                    <span className={cn("h-1.5 w-1.5 rounded-full shrink-0", getEventDot(event.priority, event.type))}></span>
                    <span className="truncate flex-1">{event.title}</span>
                    <span className="text-[10px] shrink-0 opacity-70">
                      {event.startTime.substring(0, event.startTime.length - 3)}
                    </span>
                  </button>
                ))}
                {day.events.length > 4 && (
                  <div className="text-[11px] text-zinc-500 font-medium px-2">
                    {day.events.length - 4} more...
                  </div>
                )}
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}
