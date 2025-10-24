"use client";

import { useState, useMemo } from "react";
import {
  CalendarHeader,
  CalendarGrid,
  UpcomingEvents,
  EventTypeFilter,
  WeekView,
  DayView,
} from "@/components/calendar";
import { CalendarEvent } from "@/types/calendar";
import { mockEvents } from "@/lib/mock-calendar-data";

type ViewMode = "month" | "week" | "day" | "agenda";

interface CalendarDay {
  date: Date;
  day: number;
  isCurrentMonth: boolean;
  isToday: boolean;
  events: CalendarEvent[];
}

export default function CalendarPage() {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [viewMode, setViewMode] = useState<ViewMode>("month");
  const [selectedEventTypes, setSelectedEventTypes] = useState<string[]>([
    "hearing",
    "deadline",
    "meeting",
    "appointment",
  ]);

  // Generate calendar days for the current month
  const calendarDays = useMemo(() => {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    
    // First day of the month
    const firstDay = new Date(year, month, 1);
    // Last day of the month
    const lastDay = new Date(year, month + 1, 0);
    
    // Get the day of week (0 = Sunday, 1 = Monday, etc.)
    // Convert to Monday = 0
    const firstDayOfWeek = (firstDay.getDay() + 6) % 7;
    
    // Start from the Monday before the first day
    const startDate = new Date(firstDay);
    startDate.setDate(startDate.getDate() - firstDayOfWeek);
    
    // Generate 42 days (6 weeks)
    const days: CalendarDay[] = [];
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    
    for (let i = 0; i < 42; i++) {
      const date = new Date(startDate);
      date.setDate(date.getDate() + i);
      
      const dayEvents = mockEvents.filter((event) => {
        const eventDate = new Date(event.date);
        return (
          eventDate.getDate() === date.getDate() &&
          eventDate.getMonth() === date.getMonth() &&
          eventDate.getFullYear() === date.getFullYear() &&
          selectedEventTypes.includes(event.type)
        );
      });
      
      days.push({
        date,
        day: date.getDate(),
        isCurrentMonth: date.getMonth() === month,
        isToday: date.getTime() === today.getTime(),
        events: dayEvents,
      });
    }
    
    return days;
  }, [currentDate, selectedEventTypes]);

  // Get upcoming events (sorted by date and time)
  const upcomingEvents = useMemo(() => {
    const now = new Date();
    return mockEvents
      .filter((event) => {
        const eventDate = new Date(event.date);
        return eventDate >= now && selectedEventTypes.includes(event.type);
      })
      .sort((a, b) => {
        const dateCompare = new Date(a.date).getTime() - new Date(b.date).getTime();
        if (dateCompare !== 0) return dateCompare;
        return a.startTime.localeCompare(b.startTime);
      })
      .slice(0, 10);
  }, [selectedEventTypes]);

  // Get filtered events for week/day views
  const filteredEvents = useMemo(() => {
    return mockEvents.filter((event) => selectedEventTypes.includes(event.type));
  }, [selectedEventTypes]);

  const handlePrevious = () => {
    const newDate = new Date(currentDate);
    if (viewMode === "month") {
      newDate.setMonth(newDate.getMonth() - 1);
    } else if (viewMode === "week") {
      newDate.setDate(newDate.getDate() - 7);
    } else {
      newDate.setDate(newDate.getDate() - 1);
    }
    setCurrentDate(newDate);
  };

  const handleNext = () => {
    const newDate = new Date(currentDate);
    if (viewMode === "month") {
      newDate.setMonth(newDate.getMonth() + 1);
    } else if (viewMode === "week") {
      newDate.setDate(newDate.getDate() + 7);
    } else {
      newDate.setDate(newDate.getDate() + 1);
    }
    setCurrentDate(newDate);
  };

  const handleToday = () => {
    setCurrentDate(new Date());
  };

  const handleDayClick = (date: Date) => {
    console.log("Day clicked:", date);
    setCurrentDate(date);
    setViewMode("day");
  };

  const handleEventClick = (event: CalendarEvent) => {
    console.log("Event clicked:", event);
    // TODO: Open event details modal
  };

  const handleNewEvent = () => {
    console.log("New event");
    // TODO: Open event creation modal
  };

  const handleTimeSlotClick = (date: Date, hour: number) => {
    console.log("Time slot clicked:", date, hour);
    // TODO: Open event creation modal with pre-filled date and time
  };

  const handleDayTimeSlotClick = (hour: number, minute: number) => {
    console.log("Day time slot clicked:", hour, minute);
    // TODO: Open event creation modal with pre-filled time
  };

  const handleToggleEventType = (type: string) => {
    setSelectedEventTypes((prev) =>
      prev.includes(type)
        ? prev.filter((t) => t !== type)
        : [...prev, type]
    );
  };

  return (
    <div className="flex flex-1 flex-col bg-zinc-50">
      {/* Header */}
      <CalendarHeader
        currentDate={currentDate}
        viewMode={viewMode}
        onPrevious={handlePrevious}
        onNext={handleNext}
        onToday={handleToday}
        onViewModeChange={setViewMode}
        onNewEvent={handleNewEvent}
      />

      {/* Main content */}
      <div className="flex-1 overflow-auto">
        <div className="max-w-[1400px] mx-auto p-6">
          {viewMode === "month" && (
            <CalendarGrid
              days={calendarDays}
              onDayClick={handleDayClick}
              onEventClick={handleEventClick}
            />
          )}

          {viewMode === "agenda" && (
            <div className="max-w-3xl mx-auto">
              <div className="bg-white border border-zinc-200 p-6">
                <UpcomingEvents
                  events={upcomingEvents}
                  onEventClick={handleEventClick}
                />
              </div>
            </div>
          )}

          {viewMode === "week" && (
            <WeekView
              currentDate={currentDate}
              events={filteredEvents}
              onEventClick={handleEventClick}
              onTimeSlotClick={handleTimeSlotClick}
            />
          )}

          {viewMode === "day" && (
            <DayView
              currentDate={currentDate}
              events={filteredEvents}
              onEventClick={handleEventClick}
              onTimeSlotClick={handleDayTimeSlotClick}
            />
          )}
        </div>
      </div>
    </div>
  );
}
