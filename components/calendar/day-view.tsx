"use client";

import { CalendarEvent } from "@/types/calendar";
import { TimelineHours } from "./timeline-hours";
import { cn } from "@/lib/utils";

interface DayViewProps {
  currentDate: Date;
  events: CalendarEvent[];
  onEventClick: (event: CalendarEvent) => void;
  onTimeSlotClick?: (hour: number, minute: number) => void;
}

export function DayView({ 
  currentDate, 
  events, 
  onEventClick,
  onTimeSlotClick 
}: DayViewProps) {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const isToday = currentDate.getTime() === today.getTime();

  const getEventColor = (type: CalendarEvent["type"]) => {
    switch (type) {
      case "hearing": return "bg-blue-100 border-blue-200 text-blue-900";
      case "deadline": return "bg-fuchsia-100 border-fuchsia-200 text-fuchsia-900";
      case "meeting": return "bg-emerald-100 border-emerald-200 text-emerald-900";
      case "appointment": return "bg-amber-100 border-amber-200 text-amber-900";
      default: return "bg-zinc-100 border-zinc-200 text-zinc-900";
    }
  };

  const dayEvents = events
    .filter((event) => {
      const eventDate = new Date(event.date);
      return (
        eventDate.getDate() === currentDate.getDate() &&
        eventDate.getMonth() === currentDate.getMonth() &&
        eventDate.getFullYear() === currentDate.getFullYear()
      );
    })
    .sort((a, b) => a.startTime.localeCompare(b.startTime));

  const parseTime = (time: string) => {
    const [hours, minutes] = time.split(':').map(Number);
    return hours + minutes / 60;
  };

  const getEventPosition = (event: CalendarEvent) => {
    const startHour = parseTime(event.startTime);
    const endHour = parseTime(event.endTime);
    const startOffset = (startHour - 7) * 80; // 80px per hour for day view
    const duration = endHour - startHour;
    const height = duration * 80;
    
    return { top: startOffset, height: Math.max(height, 60) };
  };

  // Generate 15-minute time slots
  const timeSlots = Array.from({ length: 14 * 4 }, (_, i) => {
    const totalMinutes = (7 * 60) + (i * 15);
    const hour = Math.floor(totalMinutes / 60);
    const minute = totalMinutes % 60;
    return { hour, minute };
  });

  return (
    <div className="bg-white border border-zinc-200 overflow-hidden">
      {/* Day header */}
      <div className="p-4 border-b border-zinc-200">
        <div className="flex items-center gap-3">
          <div
            className={cn(
              "inline-flex h-10 w-10 items-center justify-center rounded-full text-lg font-medium",
              isToday
                ? "bg-black text-white"
                : "bg-zinc-100 text-zinc-900"
            )}
          >
            {currentDate.getDate()}
          </div>
          <div>
            <div className="text-sm text-zinc-500">
              {currentDate.toLocaleDateString("fr-FR", { weekday: "long" })}
            </div>
            <div className="font-semibold text-zinc-900">
              {currentDate.toLocaleDateString("fr-FR", { 
                month: "long", 
                year: "numeric" 
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Timeline */}
      <div className="relative overflow-auto" style={{ maxHeight: "600px" }}>
        <div className="grid grid-cols-[80px_1fr]">
          {/* Hours column */}
          <div className="border-r border-zinc-200 bg-zinc-50">
            {Array.from({ length: 14 }, (_, i) => (
              <div key={i} className="h-20 relative">
                <div className="absolute -top-2.5 right-3 text-xs text-zinc-500">
                  {(7 + i).toString().padStart(2, "0")}:00
                </div>
              </div>
            ))}
          </div>

          {/* Events column */}
          <div className="relative">
            {/* Time slot grid */}
            {timeSlots.map((slot, i) => (
              <div
                key={i}
                className={cn(
                  "h-5 border-b transition-colors cursor-pointer hover:bg-zinc-50",
                  slot.minute === 0 ? "border-zinc-200" : "border-zinc-100"
                )}
                onClick={() => onTimeSlotClick?.(slot.hour, slot.minute)}
              />
            ))}

            {/* Events */}
            <div className="absolute inset-0 px-2 pointer-events-none">
              {dayEvents.map((event, index) => {
                const { top, height } = getEventPosition(event);
                return (
                  <button
                    key={event.id}
                    onClick={() => onEventClick(event)}
                    className={cn(
                      "absolute left-2 right-2 rounded-md border px-3 py-2 pointer-events-auto hover:shadow-sm transition-shadow",
                      getEventColor(event.type)
                    )}
                    style={{ top: `${top}px`, height: `${height}px`, zIndex: dayEvents.length - index }}
                  >
                    <div className="font-medium text-sm leading-tight mb-1">
                      {event.title}
                    </div>
                    <div className="text-xs opacity-70">
                      {event.startTime} - {event.endTime}
                    </div>
                    {height > 80 && event.location && (
                      <div className="text-xs opacity-70 mt-1 truncate">
                        📍 {event.location}
                      </div>
                    )}
                  </button>
                );
              })}
            </div>

            {/* Current time indicator */}
            {isToday && (() => {
              const now = new Date();
              const currentHour = now.getHours() + now.getMinutes() / 60;
              if (currentHour >= 7 && currentHour <= 20) {
                const offset = (currentHour - 7) * 80;
                return (
                  <div
                    className="absolute left-0 right-0 pointer-events-none z-20"
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
        </div>
      </div>
    </div>
  );
}
