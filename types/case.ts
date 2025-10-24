export interface Document {
  id: number;
  name: string;
  date: string;
  size: string;
}

export interface ChatMessage {
  id: number;
  role: "user" | "assistant";
  content: string;
  timestamp: string;
}

export interface CaseData {
  id: number;
  number: string;
  title: string;
  client: {
    name: string;
    email: string;
    phone: string;
  };
  assignedLawyer: {
    name: string;
    initials: string;
    color: string;
  };
  type: string;
  status: string;
  priority: string;
  deadline: string;
  createdAt: string;
  description: string;
  documents: Document[];
  timeline: TimelineEvent[];
  notes: Note[];
}

export interface TimelineEvent {
  id: number;
  type: string;
  date: string;
  user: string;
  description: string;
}

export interface Note {
  id: number;
  content: string;
  date: string;
  author: string;
}
