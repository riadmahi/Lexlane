"use client";

import { Send, Paperclip, Sparkles, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface ChatInputProps {
  message: string;
  isTyping: boolean;
  onChange: (value: string) => void;
  onSend: () => void;
  onClear: () => void;
}

export function ChatInput({
  message,
  isTyping,
  onChange,
  onSend,
  onClear,
}: ChatInputProps) {
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      onSend();
    }
  };

  return (
    <div className="p-4 border-t bg-gradient-to-b from-white to-zinc-50/50">
      <div className="flex gap-2 mb-3">
        <Button
          variant="ghost"
          size="icon"
          className="h-10 w-10 shrink-0 hover:bg-primary/10 hover:text-primary transition-all"
        >
          <Paperclip className="h-4 w-4" />
        </Button>
        <div className="flex-1 relative">
          <Input
            placeholder="Posez une question ou demandez une analyse..."
            value={message}
            onChange={(e) => onChange(e.target.value)}
            onKeyDown={handleKeyDown}
            className="bg-white border-zinc-300 focus:border-primary focus:ring-2 focus:ring-primary/20 pr-10 h-10 transition-all"
          />
          {message && (
            <button
              onClick={onClear}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-400 hover:text-zinc-600"
            >
              ×
            </button>
          )}
        </div>
        <Button
          onClick={onSend}
          disabled={!message.trim() || isTyping}
          className="gap-2 shrink-0 h-10 px-4 bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary shadow-sm disabled:opacity-50"
        >
          <Send className="h-4 w-4" />
          Envoyer
        </Button>
      </div>
      <div className="flex items-center justify-between text-xs">
        <span className="text-zinc-500">
          Appuyez sur{" "}
          <kbd className="px-1.5 py-0.5 bg-zinc-200 rounded text-zinc-700 font-mono">
            ↵
          </kbd>{" "}
          pour envoyer
        </span>
        <span className="flex items-center gap-1.5 text-zinc-500">
          <div className="flex items-center gap-0.5">
            <Sparkles className="h-3 w-3 text-primary" />
            <Zap className="h-3 w-3 text-amber-500" />
          </div>
          <span className="font-medium text-primary">
            Propulsé par IA
          </span>
        </span>
      </div>
    </div>
  );
}
