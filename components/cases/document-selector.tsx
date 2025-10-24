"use client";

import { FileText, Check, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

interface Document {
  id: number;
  name: string;
  date: string;
  size: string;
}

interface DocumentSelectorProps {
  documents: Document[];
  selectedDocuments: number[];
  onToggleDocument: (docId: number) => void;
  onToggleAll: () => void;
}

export function DocumentSelector({
  documents,
  selectedDocuments,
  onToggleDocument,
  onToggleAll,
}: DocumentSelectorProps) {
  return (
    <div className="bg-white rounded-xl border border-zinc-200/60 p-4 shadow-sm hover:shadow-md transition-shadow">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <div className="p-1.5 rounded-lg bg-primary/10">
            <FileText className="h-3.5 w-3.5 text-primary" />
          </div>
          <h4 className="text-sm font-semibold text-zinc-900">Documents</h4>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-xs font-medium text-emerald-600">
            {selectedDocuments.length}/{documents.length}
          </span>
          <button
            onClick={onToggleAll}
            className="text-xs font-medium text-primary hover:text-primary/80 transition-colors"
          >
            {selectedDocuments.length === documents.length ? "Aucun" : "Tout"}
          </button>
        </div>
      </div>
      <div className="space-y-1.5">
        {documents.map((doc) => {
          const isSelected = selectedDocuments.includes(doc.id);
          return (
            <label
              key={doc.id}
              className={cn(
                "flex items-center gap-2.5 p-2.5 rounded-lg transition-all cursor-pointer group border",
                isSelected
                  ? "bg-gradient-to-r from-emerald-50 to-emerald-50/30 border-emerald-200/60 hover:border-emerald-300"
                  : "bg-gradient-to-r from-zinc-50 to-transparent border-transparent hover:border-zinc-200 hover:from-zinc-100"
              )}
            >
              <input
                type="checkbox"
                checked={isSelected}
                onChange={() => onToggleDocument(doc.id)}
                className="rounded border-zinc-300 text-emerald-600 focus:ring-emerald-500 focus:ring-offset-0 transition-all"
              />
              <div
                className={cn(
                  "h-2 w-2 rounded-full transition-all",
                  isSelected
                    ? "bg-emerald-500 scale-110"
                    : "bg-zinc-300 group-hover:bg-zinc-400"
                )}
              ></div>
              <span
                className={cn(
                  "text-xs truncate flex-1 transition-colors",
                  isSelected
                    ? "text-emerald-900 font-medium"
                    : "text-zinc-700 group-hover:text-zinc-900"
                )}
              >
                {doc.name}
              </span>
              {isSelected && (
                <Check className="h-3 w-3 text-emerald-600 shrink-0" />
              )}
            </label>
          );
        })}
      </div>
      {selectedDocuments.length > 0 && (
        <div className="mt-3 pt-3 border-t border-zinc-200/60">
          <p className="text-[11px] text-zinc-600 flex items-center gap-1.5">
            <Sparkles className="h-3 w-3 text-emerald-500" />
            <span>
              L'IA utilisera {selectedDocuments.length} document
              {selectedDocuments.length > 1 ? "s" : ""} pour ses réponses
            </span>
          </p>
        </div>
      )}
    </div>
  );
}
