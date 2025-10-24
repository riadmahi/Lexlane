export type EventType = "hearing" | "deadline" | "meeting" | "appointment";
export type EventPriority = "high" | "medium" | "low";

export interface CalendarEvent {
  id: number;
  title: string;
  description?: string;
  date: string;
  startTime: string;
  endTime: string;
  type: EventType;
  priority: EventPriority;
  location?: string;
  caseId?: number;
  caseTitle?: string;
  clientName?: string;
  associatedLawyer?: string;
  attendees?: string[];
  color?: string;
}

export interface CalendarDay {
  date: Date;
  day: number;
  isCurrentMonth: boolean;
  isToday: boolean;
  events: CalendarEvent[];
}

export interface CalendarViewMode {
  type: "month" | "week" | "day" | "agenda";
}
