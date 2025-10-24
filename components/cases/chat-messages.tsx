"use client";

import { Brain, MoreVertical, Sparkles, Copy, Check, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface ChatMessage {
  id: number;
  role: "user" | "assistant";
  content: string;
  timestamp: string;
}

interface ChatMessagesProps {
  messages: ChatMessage[];
  isTyping: boolean;
  copiedId: number | null;
  onCopy: (id: number, content: string) => void;
  lawyerInitials: string;
}

export function ChatMessages({
  messages,
  isTyping,
  copiedId,
  onCopy,
  lawyerInitials,
}: ChatMessagesProps) {
  return (
    <div
      className="flex-1 overflow-y-auto p-6 space-y-5 bg-gradient-to-b from-zinc-50/30 to-white"
      style={{ maxHeight: "520px" }}
    >
      {messages.map((message) => (
        <div
          key={message.id}
          className={cn(
            "flex gap-3 group animate-in fade-in slide-in-from-bottom-2 duration-300",
            message.role === "user" ? "justify-end" : "justify-start"
          )}
        >
          {message.role === "assistant" && (
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-primary/20 via-primary/15 to-primary/10 border border-primary/20 shrink-0 shadow-sm">
              <Sparkles className="h-4 w-4 text-primary" />
            </div>
          )}
          <div className="flex flex-col gap-2 max-w-[80%]">
            <div
              className={cn(
                "rounded-2xl p-4 shadow-sm transition-all",
                message.role === "user"
                  ? "bg-gradient-to-br from-primary to-primary/90 text-white shadow-primary/20"
                  : "bg-white text-zinc-900 border border-zinc-200/80 hover:border-zinc-300/80 hover:shadow-md"
              )}
            >
              <p className="text-sm whitespace-pre-wrap leading-relaxed">
                {message.content}
              </p>
            </div>
            <div
              className={cn(
                "flex items-center gap-2.5 px-1",
                message.role === "user" ? "justify-end" : "justify-start"
              )}
            >
              <span className="text-[11px] text-zinc-500 font-medium">
                {message.timestamp}
              </span>
              {message.role === "assistant" && (
                <div className="flex items-center gap-1">
                  <button
                    onClick={() => onCopy(message.id, message.content)}
                    className="opacity-0 group-hover:opacity-100 transition-all p-1.5 hover:bg-zinc-100 rounded-lg"
                  >
                    {copiedId === message.id ? (
                      <Check className="h-3 w-3 text-emerald-600" />
                    ) : (
                      <Copy className="h-3 w-3 text-zinc-500" />
                    )}
                  </button>
                </div>
              )}
            </div>
          </div>
          {message.role === "user" && (
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-500 to-emerald-600 text-white shrink-0 text-xs font-bold shadow-lg shadow-emerald-500/20">
              {lawyerInitials}
            </div>
          )}
        </div>
      ))}

      {isTyping && (
        <div className="flex items-start gap-3 animate-in fade-in duration-300">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-primary/20 via-primary/15 to-primary/10 border border-primary/20 shrink-0 shadow-sm">
            <Sparkles className="h-4 w-4 text-primary" />
          </div>
          <div className="flex-1">
            <div className="bg-white rounded-2xl p-4 border border-zinc-200/80 shadow-sm">
              <div className="flex items-center gap-2">
                <div className="flex gap-1">
                  <span className="h-2 w-2 bg-zinc-400 rounded-full animate-bounce [animation-delay:-0.3s]"></span>
                  <span className="h-2 w-2 bg-zinc-400 rounded-full animate-bounce [animation-delay:-0.15s]"></span>
                  <span className="h-2 w-2 bg-zinc-400 rounded-full animate-bounce"></span>
                </div>
                <span className="text-xs text-zinc-500">Assistant en train d'écrire...</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
