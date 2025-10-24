"use client";

interface TimelineHoursProps {
  startHour?: number;
  endHour?: number;
  compact?: boolean;
}

export function TimelineHours({ 
  startHour = 7, 
  endHour = 20,
  compact = false 
}: TimelineHoursProps) {
  const hours = Array.from(
    { length: endHour - startHour + 1 },
    (_, i) => startHour + i
  );

  return (
    <div className="flex flex-col">
      {hours.map((hour) => (
        <div
          key={hour}
          className={compact ? "h-12" : "h-16"}
          style={{ position: "relative" }}
        >
          <div className="absolute -top-2 right-0 pr-3 text-xs text-zinc-500">
            {hour.toString().padStart(2, "0")}:00
          </div>
        </div>
      ))}
    </div>
  );
}
