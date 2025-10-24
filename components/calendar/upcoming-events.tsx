"use client";

import { CalendarEvent } from "@/types/calendar";
import { EventCard } from "./event-card";
import { Filter, Calendar as CalendarIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

interface UpcomingEventsProps {
  events: CalendarEvent[];
  onEventClick: (event: CalendarEvent) => void;
  onFilterClick?: () => void;
}

export function UpcomingEvents({ events, onEventClick, onFilterClick }: UpcomingEventsProps) {
  // Group events by date
  const groupedEvents = events.reduce((acc, event) => {
    const date = new Date(event.date).toLocaleDateString("fr-FR", {
      weekday: "long",
      day: "numeric",
      month: "long",
    });
    if (!acc[date]) {
      acc[date] = [];
    }
    acc[date].push(event);
    return acc;
  }, {} as Record<string, CalendarEvent[]>);

  // Check if date is today or tomorrow
  const getDateLabel = (dateString: string) => {
    const eventDate = events.find(e => 
      new Date(e.date).toLocaleDateString("fr-FR", {
        weekday: "long",
        day: "numeric",
        month: "long",
      }) === dateString
    );
    
    if (!eventDate) return null;
    
    const date = new Date(eventDate.date);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);
    
    date.setHours(0, 0, 0, 0);
    
    if (date.getTime() === today.getTime()) {
      return { label: "Aujourd'hui", color: "bg-primary text-white" };
    } else if (date.getTime() === tomorrow.getTime()) {
      return { label: "Demain", color: "bg-amber-500 text-white" };
    }
    return null;
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-bold text-zinc-900 flex items-center gap-2">
            <CalendarIcon className="h-5 w-5 text-primary" />
            Événements à venir
          </h2>
          <p className="text-sm text-zinc-600 mt-1">
            {events.length} événement{events.length > 1 ? "s" : ""} planifié{events.length > 1 ? "s" : ""}
          </p>
        </div>
        {onFilterClick && (
          <Button
            variant="outline"
            size="sm"
            onClick={onFilterClick}
            className="gap-2 hover:bg-primary/5 hover:border-primary/30"
          >
            <Filter className="h-3.5 w-3.5" />
            Filtrer
          </Button>
        )}
      </div>

      {/* Events grouped by date */}
      <div className="space-y-8">
        {Object.entries(groupedEvents).map(([date, dateEvents], index) => {
          const dateLabel = getDateLabel(date);
          
          return (
            <div key={date} className="animate-in fade-in slide-in-from-bottom-4 duration-500" style={{ animationDelay: `${index * 100}ms` }}>
              {/* Date header with sticky behavior */}
              <div className="sticky top-0 z-10 mb-4 -mx-6 px-6 py-3 bg-gradient-to-r from-zinc-50 via-white to-zinc-50 backdrop-blur-sm border-b border-zinc-200/60">
                <div className="flex items-center justify-between">
                  <h3 className="text-base font-bold text-zinc-900 capitalize flex items-center gap-3">
                    <div className="h-1 w-1 rounded-full bg-primary"></div>
                    {date}
                    {dateLabel && (
                      <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider shadow-sm ${dateLabel.color}`}>
                        {dateLabel.label}
                      </span>
                    )}
                  </h3>
                  <span className="text-sm font-semibold text-zinc-600">
                    {dateEvents.length} événement{dateEvents.length > 1 ? "s" : ""}
                  </span>
                </div>
              </div>
              
              {/* Events list */}
              <div className="space-y-4">
                {dateEvents.map((event, eventIndex) => (
                  <div 
                    key={event.id}
                    className="animate-in fade-in slide-in-from-left-2 duration-300"
                    style={{ animationDelay: `${(index * 100) + (eventIndex * 50)}ms` }}
                  >
                    <EventCard
                      event={event}
                      onClick={() => onEventClick(event)}
                    />
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      {events.length === 0 && (
        <div className="text-center py-16">
          <div className="inline-flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-zinc-100 to-zinc-200 mb-5 shadow-inner">
            <span className="text-4xl">📅</span>
          </div>
          <h3 className="text-base font-bold text-zinc-900 mb-2">
            Aucun événement à venir
          </h3>
          <p className="text-sm text-zinc-600 max-w-xs mx-auto">
            Créez un nouvel événement pour organiser votre planning
          </p>
        </div>
      )}
    </div>
  );
}
