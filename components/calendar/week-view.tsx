"use client";

import { CalendarEvent } from "@/types/calendar";
import { TimelineHours } from "./timeline-hours";
import { cn } from "@/lib/utils";

interface WeekViewProps {
  currentDate: Date;
  events: CalendarEvent[];
  onEventClick: (event: CalendarEvent) => void;
  onTimeSlotClick?: (date: Date, hour: number) => void;
}

export function WeekView({ 
  currentDate, 
  events, 
  onEventClick,
  onTimeSlotClick 
}: WeekViewProps) {
  // Get the week start (Monday)
  const getWeekStart = (date: Date) => {
    const d = new Date(date);
    const day = d.getDay();
    const diff = d.getDate() - day + (day === 0 ? -6 : 1);
    return new Date(d.setDate(diff));
  };

  const weekStart = getWeekStart(currentDate);
  const weekDays = Array.from({ length: 7 }, (_, i) => {
    const date = new Date(weekStart);
    date.setDate(date.getDate() + i);
    return date;
  });

  const today = new Date();
  today.setHours(0, 0, 0, 0);
  
  // Normalize currentDate for comparison
  const normalizedCurrentDate = new Date(currentDate);
  normalizedCurrentDate.setHours(0, 0, 0, 0);

  const getEventColor = (type: CalendarEvent["type"]) => {
    switch (type) {
      case "hearing": return "bg-blue-100 border-blue-200 text-blue-900";
      case "deadline": return "bg-fuchsia-100 border-fuchsia-200 text-fuchsia-900";
      case "meeting": return "bg-emerald-100 border-emerald-200 text-emerald-900";
      case "appointment": return "bg-amber-100 border-amber-200 text-amber-900";
      default: return "bg-zinc-100 border-zinc-200 text-zinc-900";
    }
  };

  const getEventsForDay = (date: Date) => {
    return events.filter((event) => {
      const eventDate = new Date(event.date);
      return (
        eventDate.getDate() === date.getDate() &&
        eventDate.getMonth() === date.getMonth() &&
        eventDate.getFullYear() === date.getFullYear()
      );
    });
  };

  const parseTime = (time: string) => {
    const [hours, minutes] = time.split(':').map(Number);
    return hours + minutes / 60;
  };

  const getEventPosition = (event: CalendarEvent) => {
    const startHour = parseTime(event.startTime);
    const endHour = parseTime(event.endTime);
    const startOffset = (startHour - 7) * 64; // 64px per hour
    const duration = endHour - startHour;
    const height = duration * 64;
    
    return { top: startOffset, height: Math.max(height, 48) };
  };

  return (
    <div className="bg-white border border-zinc-200 overflow-hidden">
      {/* Week header */}
      <div className="grid grid-cols-[60px_repeat(7,1fr)] border-b border-zinc-200">
        <div className="p-3"></div>
        {weekDays.map((day, index) => {
          const isToday = day.getTime() === today.getTime();
          const isCurrentDate = day.getTime() === normalizedCurrentDate.getTime();
          return (
            <div
              key={index}
              className={cn(
                "p-3 text-center border-l border-zinc-200",
                isCurrentDate && "bg-blue-50/30"
              )}
            >
              <div className={cn(
                "text-xs mb-1 font-medium uppercase tracking-wide",
                isCurrentDate ? "text-blue-600" : "text-zinc-500"
              )}>
                {day.toLocaleDateString("fr-FR", { weekday: "short" })}
              </div>
              <div
                className={cn(
                  "inline-flex h-8 w-8 items-center justify-center rounded-full text-base font-semibold transition-all",
                  isCurrentDate
                    ? "bg-blue-600 text-white ring-4 ring-blue-100"
                    : "text-zinc-900 hover:bg-zinc-100"
                )}
              >
                {day.getDate()}
              </div>
            </div>
          );
        })}
      </div>

      {/* Timeline grid */}
      <div className="relative overflow-auto" style={{ maxHeight: "600px" }}>
        <div className="grid grid-cols-[60px_repeat(7,1fr)]">
          {/* Hours column */}
          <div className="border-r border-zinc-200 bg-zinc-50">
            <TimelineHours />
          </div>

          {/* Days columns */}
          {weekDays.map((day, dayIndex) => {
            const dayEvents = getEventsForDay(day);
            const isToday = day.getTime() === today.getTime();
            const isCurrentDate = day.getTime() === normalizedCurrentDate.getTime();

            return (
              <div
                key={dayIndex}
                className={cn(
                  "relative border-l border-zinc-200",
                  isCurrentDate && "bg-blue-50/20 border-l-2 border-l-blue-400"
                )}
              >
                {/* Hour grid lines */}
                {Array.from({ length: 14 }, (_, i) => (
                  <div
                    key={i}
                    className="h-16 border-b border-zinc-100 hover:bg-zinc-50 transition-colors cursor-pointer"
                    onClick={() => onTimeSlotClick?.(day, 7 + i)}
                  />
                ))}

                {/* Events */}
                <div className="absolute inset-0 pointer-events-none">
                  {dayEvents.map((event) => {
                    const { top, height } = getEventPosition(event);
                    return (
                      <button
                        key={event.id}
                        onClick={() => onEventClick(event)}
                        className={cn(
                          "absolute left-1 right-1 rounded-md border px-2 py-1.5 pointer-events-auto hover:shadow-sm transition-shadow",
                          getEventColor(event.type)
                        )}
                        style={{ top: `${top}px`, height: `${height}px` }}
                      >
                        <div className="font-medium text-xs leading-tight truncate">
                          {event.title}
                        </div>
                        <div className="text-[10px] opacity-70 mt-0.5">
                          {event.startTime}
                        </div>
                      </button>
                    );
                  })}
                </div>

                {/* Current time indicator */}
                {isToday && (() => {
                  const now = new Date();
                  const currentHour = now.getHours() + now.getMinutes() / 60;
                  if (currentHour >= 7 && currentHour <= 20) {
                    const offset = (currentHour - 7) * 64;
                    return (
                      <div
                        className="absolute left-0 right-0 pointer-events-none z-10"
                        style={{ top: `${offset}px` }}
                      >
                        <div className="flex items-center">
                          <div className="h-2 w-2 rounded-full bg-red-500 -ml-1" />
                          <div className="flex-1 h-[2px] bg-red-500" />
                        </div>
                      </div>
                    );
                  }
                  return null;
                })()}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
