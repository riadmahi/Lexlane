"use client";

import { Clock, MapPin, Users, FileText, ChevronRight, Calendar } from "lucide-react";
import { CalendarEvent } from "@/types/calendar";
import { cn } from "@/lib/utils";

interface EventCardProps {
  event: CalendarEvent;
  onClick?: () => void;
  compact?: boolean;
}

export function EventCard({ event, onClick, compact = false }: EventCardProps) {
  const getEventTypeIcon = () => {
    switch (event.type) {
      case "hearing":
        return "⚖️";
      case "deadline":
        return "⏰";
      case "meeting":
        return "👥";
      case "appointment":
        return "📅";
      default:
        return "📌";
    }
  };

  const getEventTypeLabel = () => {
    switch (event.type) {
      case "hearing":
        return "Audience";
      case "deadline":
        return "Échéance";
      case "meeting":
        return "Réunion";
      case "appointment":
        return "Rendez-vous";
      default:
        return "Événement";
    }
  };

  const getEventColor = () => {
    switch (event.priority) {
      case "high":
        return {
          border: "border-l-red-500",
          bg: "bg-gradient-to-br from-white to-red-50/50",
          hover: "hover:from-red-50/50 hover:to-red-50",
          badge: "bg-red-100 text-red-700 ring-red-200",
          icon: "bg-red-100 text-red-600",
        };
      case "medium":
        return {
          border: "border-l-amber-500",
          bg: "bg-gradient-to-br from-white to-amber-50/50",
          hover: "hover:from-amber-50/50 hover:to-amber-50",
          badge: "bg-amber-100 text-amber-700 ring-amber-200",
          icon: "bg-amber-100 text-amber-600",
        };
      case "low":
        return {
          border: "border-l-zinc-400",
          bg: "bg-gradient-to-br from-white to-zinc-50/50",
          hover: "hover:from-zinc-50/50 hover:to-zinc-50",
          badge: "bg-zinc-200 text-zinc-700 ring-zinc-300",
          icon: "bg-zinc-100 text-zinc-600",
        };
      default:
        return {
          border: "border-l-primary",
          bg: "bg-gradient-to-br from-white to-primary/5",
          hover: "hover:from-primary/5 hover:to-primary/10",
          badge: "bg-primary/10 text-primary ring-primary/20",
          icon: "bg-primary/10 text-primary",
        };
    }
  };

  const colors = getEventColor();

  if (compact) {
    return (
      <button
        onClick={onClick}
        className={cn(
          "w-full text-left px-3 py-2 rounded-lg border-l-4 border border-zinc-200/60 text-xs transition-all mb-1.5 shadow-sm hover:shadow-md",
          colors.border,
          colors.bg,
          colors.hover
        )}
      >
        <div className="flex items-center gap-2">
          <span className="text-lg">{getEventTypeIcon()}</span>
          <span className="font-bold text-zinc-900 truncate flex-1">
            {event.title}
          </span>
        </div>
        <div className="text-[11px] text-zinc-600 mt-1 flex items-center gap-1.5">
          <Clock className="h-3 w-3" />
          {event.startTime}
        </div>
      </button>
    );
  }

  return (
    <button
      onClick={onClick}
      className={cn(
        "w-full text-left p-5 rounded-xl border-l-4 border border-zinc-200/60 transition-all shadow-md hover:shadow-xl group relative overflow-hidden",
        colors.border,
        colors.bg,
        colors.hover
      )}
    >
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none">
        <div 
          className="w-full h-full"
          style={{
            backgroundImage: 'radial-gradient(circle, currentColor 1px, transparent 1px)',
            backgroundSize: '20px 20px'
          }}
        />
      </div>

      {/* Content */}
      <div className="relative">
        {/* Header */}
        <div className="flex items-start justify-between gap-3 mb-4">
          <div className="flex items-start gap-3 flex-1 min-w-0">
            <div className={cn(
              "flex h-12 w-12 items-center justify-center rounded-xl shrink-0 shadow-sm transition-transform group-hover:scale-110",
              colors.icon
            )}>
              <span className="text-2xl">{getEventTypeIcon()}</span>
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-1">
                <span className={cn(
                  "px-2 py-0.5 rounded-md text-[10px] font-bold uppercase tracking-wider ring-1",
                  colors.badge
                )}>
                  {getEventTypeLabel()}
                </span>
              </div>
              <h3 className="font-bold text-zinc-900 mb-1 leading-tight text-base">
                {event.title}
              </h3>
              {event.description && (
                <p className="text-sm text-zinc-600 line-clamp-2 leading-relaxed">
                  {event.description}
                </p>
              )}
            </div>
          </div>
          
          {/* Priority badge */}
          <div className="flex flex-col items-end gap-2 shrink-0">
            <div
              className={cn(
                "px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wide shadow-sm",
                event.priority === "high" && "bg-red-500 text-white",
                event.priority === "medium" && "bg-amber-500 text-white",
                event.priority === "low" && "bg-zinc-400 text-white"
              )}
            >
              {event.priority === "high" && "Urgent"}
              {event.priority === "medium" && "Important"}
              {event.priority === "low" && "Normal"}
            </div>
            <ChevronRight className="h-5 w-5 text-zinc-400 group-hover:text-zinc-600 group-hover:translate-x-1 transition-all" />
          </div>
        </div>

        {/* Details grid */}
        <div className="grid grid-cols-2 gap-3 text-sm text-zinc-600">
          <div className="flex items-center gap-2 bg-white/60 rounded-lg px-3 py-2 shadow-sm">
            <Clock className="h-4 w-4 text-zinc-400 shrink-0" />
            <div className="flex-1 min-w-0">
              <div className="text-[10px] text-zinc-500 font-medium uppercase tracking-wide mb-0.5">
                Horaire
              </div>
              <div className="font-semibold text-zinc-900 truncate">
                {event.startTime} - {event.endTime}
              </div>
            </div>
          </div>

          {event.location && (
            <div className="flex items-center gap-2 bg-white/60 rounded-lg px-3 py-2 shadow-sm">
              <MapPin className="h-4 w-4 text-zinc-400 shrink-0" />
              <div className="flex-1 min-w-0">
                <div className="text-[10px] text-zinc-500 font-medium uppercase tracking-wide mb-0.5">
                  Lieu
                </div>
                <div className="font-semibold text-zinc-900 truncate" title={event.location}>
                  {event.location}
                </div>
              </div>
            </div>
          )}

          {event.caseTitle && (
            <div className="flex items-center gap-2 bg-white/60 rounded-lg px-3 py-2 shadow-sm col-span-2">
              <FileText className="h-4 w-4 text-primary shrink-0" />
              <div className="flex-1 min-w-0">
                <div className="text-[10px] text-zinc-500 font-medium uppercase tracking-wide mb-0.5">
                  Dossier
                </div>
                <div className="font-bold text-primary truncate">
                  {event.caseTitle}
                </div>
              </div>
            </div>
          )}

          {event.attendees && event.attendees.length > 0 && (
            <div className="flex items-center gap-2 bg-white/60 rounded-lg px-3 py-2 shadow-sm col-span-2">
              <Users className="h-4 w-4 text-zinc-400 shrink-0" />
              <div className="flex-1 min-w-0">
                <div className="text-[10px] text-zinc-500 font-medium uppercase tracking-wide mb-0.5">
                  Participants
                </div>
                <div className="font-semibold text-zinc-900">
                  {event.attendees.length} participant{event.attendees.length > 1 ? "s" : ""}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </button>
  );
}
