"use client";

import { useState } from "react";
import { useParams } from "next/navigation";
import {
  FileText,
  Calendar,
  Users,
  MessageSquare,
  Brain,
  Network,
  Clock,
  Plus,
  Download,
  Sparkles,
  Lightbulb,
  BookOpen,
  Scale,
  TrendingUp,
  Database,
  Search,
  GitBranch,
  Target,
  MoreVertical,
  Check,
  Copy,
  Loader2,
  Paperclip,
  Send,
  Zap,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import {
  CaseHeader,
  CaseTabs,
  DocumentSelector,
  PromptSuggestions,
  ChatHeader,
  ChatMessages,
  ChatInput,
} from "@/components/cases";
import { mockCase } from "@/lib/mock-data";

export default function CaseDetailPage() {
  const params = useParams();
  const [activeTab, setActiveTab] = useState<"overview" | "ai-chat" | "mindmap">("overview");
  const [aiMessage, setAiMessage] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [copiedId, setCopiedId] = useState<number | null>(null);
  const [selectedDocuments, setSelectedDocuments] = useState<number[]>(mockCase.documents.map(d => d.id));
  const [chatMessages, setChatMessages] = useState([
    { 
      id: 1, 
      role: "assistant", 
      content: "Bonjour ! Je suis votre assistant IA spécialisé en droit. Je peux vous aider à :\n\n• Analyser les documents du dossier\n• Rechercher de la jurisprudence pertinente\n• Rédiger des actes juridiques\n• Répondre à vos questions de droit\n\nComment puis-je vous assister sur ce dossier de succession ?",
      timestamp: "Il y a 2 min"
    },
  ]);

  const suggestedPrompts = [
    {
      icon: Scale,
      title: "Analyser le testament",
      description: "Identifier les clauses importantes et points d'attention"
    },
    {
      icon: BookOpen,
      title: "Jurisprudence similaire",
      description: "Rechercher des cas de succession avec conflit familial"
    },
    {
      icon: FileText,
      title: "Rédiger une proposition",
      description: "Proposer un accord amiable de partage"
    },
    {
      icon: Lightbulb,
      title: "Stratégie juridique",
      description: "Conseiller sur les meilleures options pour le client"
    }
  ];

  const tabs = [
    { id: "overview", label: "Vue d'ensemble", icon: FileText },
    { id: "ai-chat", label: "Assistant IA", icon: Brain },
    { id: "mindmap", label: "Mindmap & Recherche", icon: Network },
  ];

  const handleSendMessage = () => {
    if (!aiMessage.trim()) return;
    
    const userMsg = { 
      id: chatMessages.length + 1, 
      role: "user", 
      content: aiMessage,
      timestamp: "À l'instant"
    };
    
    setChatMessages([...chatMessages, userMsg]);
    setAiMessage("");
    setIsTyping(true);
    
    // Simuler une réponse de l'IA
    setTimeout(() => {
      const aiResponse = {
        id: chatMessages.length + 2,
        role: "assistant",
        content: "Je traite votre demande et analyse les documents du dossier...",
        timestamp: "À l'instant"
      };
      setChatMessages(prev => [...prev, aiResponse]);
      setIsTyping(false);
    }, 1500);
  };

  const handleCopyMessage = (messageId: number, content: string) => {
    navigator.clipboard.writeText(content);
    setCopiedId(messageId);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const handleSuggestedPrompt = (prompt: string) => {
    setAiMessage(prompt);
  };

  const toggleDocument = (docId: number) => {
    setSelectedDocuments(prev => 
      prev.includes(docId) 
        ? prev.filter(id => id !== docId)
        : [...prev, docId]
    );
  };

  const toggleAllDocuments = () => {
    setSelectedDocuments(prev => 
      prev.length === mockCase.documents.length 
        ? []
        : mockCase.documents.map(d => d.id)
    );
  };

  return (
    <div className="flex flex-1 flex-col h-full bg-[#F6F6F3]">
      <div className="bg-white border-b">
        <CaseHeader caseData={mockCase} />
        <div className="px-8">
          <CaseTabs
            activeTab={activeTab}
            onTabChange={(tab) => setActiveTab(tab as any)}
            tabs={tabs}
          />
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-auto p-8">
        {activeTab === "overview" && (
          <div className="grid grid-cols-3 gap-6">
            {/* Left Column */}
            <div className="col-span-2 space-y-6">
              {/* Documents */}
              <div className="bg-white rounded-2xl border border-zinc-200/60 p-6 shadow-sm">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-zinc-900">Documents</h3>
                  <Button size="sm" className="gap-2">
                    <Plus className="h-4 w-4" />
                    Ajouter
                  </Button>
                </div>
                <div className="space-y-2">
                  {mockCase.documents.map((doc) => (
                    <div
                      key={doc.id}
                      className="flex items-center justify-between p-3 rounded-lg hover:bg-zinc-50 transition-colors group"
                    >
                      <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-50 border border-blue-200/60">
                          <FileText className="h-5 w-5 text-blue-600" />
                        </div>
                        <div>
                          <p className="text-sm font-medium text-zinc-900">{doc.name}</p>
                          <p className="text-xs text-zinc-500">{doc.size} • {doc.date}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                        <Button variant="ghost" size="icon" className="h-8 w-8">
                          <Download className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="icon" className="h-8 w-8">
                          <MoreVertical className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Timeline */}
              <div className="bg-white rounded-2xl border border-zinc-200/60 p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-zinc-900 mb-4">Chronologie</h3>
                <div className="space-y-4">
                  {mockCase.timeline.map((event, index) => (
                    <div key={event.id} className="flex gap-4">
                      <div className="flex flex-col items-center">
                        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 border-2 border-primary/30">
                          <Clock className="h-4 w-4 text-primary" />
                        </div>
                        {index < mockCase.timeline.length - 1 && (
                          <div className="w-0.5 flex-1 bg-zinc-200 mt-2" />
                        )}
                      </div>
                      <div className="flex-1 pb-4">
                        <p className="text-sm font-medium text-zinc-900">{event.description}</p>
                        <p className="text-xs text-zinc-500 mt-1">
                          {event.date} • {event.user}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-6">
              {/* Notes */}
              <div className="bg-white rounded-2xl border border-zinc-200/60 p-6 shadow-sm">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-zinc-900">Notes</h3>
                  <Button size="sm" variant="outline" className="gap-2">
                    <Plus className="h-4 w-4" />
                  </Button>
                </div>
                <div className="space-y-3">
                  {mockCase.notes.map((note) => (
                    <div key={note.id} className="p-3 bg-amber-50 border border-amber-200/60 rounded-lg">
                      <p className="text-sm text-zinc-900">{note.content}</p>
                      <p className="text-xs text-zinc-500 mt-2">{note.date} • {note.author}</p>
                    </div>
                  ))}
                  <Textarea
                    placeholder="Ajouter une note..."
                    className="min-h-[80px] bg-zinc-50"
                  />
                </div>
              </div>

              {/* Quick Actions */}
              <div className="bg-white rounded-2xl border border-zinc-200/60 p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-zinc-900 mb-4">Actions rapides</h3>
                <div className="space-y-2">
                  <Button variant="outline" className="w-full justify-start gap-2">
                    <Calendar className="h-4 w-4" />
                    Planifier un RDV
                  </Button>
                  <Button variant="outline" className="w-full justify-start gap-2">
                    <MessageSquare className="h-4 w-4" />
                    Envoyer un message
                  </Button>
                  <Button variant="outline" className="w-full justify-start gap-2">
                    <FileText className="h-4 w-4" />
                    Générer un document
                  </Button>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === "ai-chat" && (
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-[280px_1fr] gap-6">
              {/* Sidebar with context */}
              <div className="space-y-4">
                {/* Documents context */}
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
                        {selectedDocuments.length}/{mockCase.documents.length}
                      </span>
                      <button
                        onClick={toggleAllDocuments}
                        className="text-xs font-medium text-primary hover:text-primary/80 transition-colors"
                      >
                        {selectedDocuments.length === mockCase.documents.length ? "Aucun" : "Tout"}
                      </button>
                    </div>
                  </div>
                  <div className="space-y-1.5">
                    {mockCase.documents.map((doc) => {
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
                            onChange={() => toggleDocument(doc.id)}
                            className="rounded border-zinc-300 text-emerald-600 focus:ring-emerald-500 focus:ring-offset-0 transition-all"
                          />
                          <div className={cn(
                            "h-2 w-2 rounded-full transition-all",
                            isSelected 
                              ? "bg-emerald-500 scale-110" 
                              : "bg-zinc-300 group-hover:bg-zinc-400"
                          )}></div>
                          <span className={cn(
                            "text-xs truncate flex-1 transition-colors",
                            isSelected 
                              ? "text-emerald-900 font-medium" 
                              : "text-zinc-700 group-hover:text-zinc-900"
                          )}>
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
                        <span>L'IA utilisera {selectedDocuments.length} document{selectedDocuments.length > 1 ? 's' : ''} pour ses réponses</span>
                      </p>
                    </div>
                  )}
                </div>

                {/* Suggested prompts */}
                <div className="bg-gradient-to-br from-white to-primary/5 rounded-xl border border-zinc-200/60 p-4 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-center gap-2 mb-3">
                    <Sparkles className="h-4 w-4 text-primary" />
                    <h4 className="text-sm font-semibold text-zinc-900">Suggestions</h4>
                  </div>
                  <div className="space-y-2">
                    {suggestedPrompts.map((prompt, idx) => {
                      const Icon = prompt.icon;
                      return (
                        <button
                          key={idx}
                          onClick={() => handleSuggestedPrompt(prompt.description)}
                          className="w-full text-left p-3 rounded-xl border border-zinc-200/60 hover:border-primary/40 hover:bg-white hover:shadow-sm transition-all duration-200 group bg-white/50"
                        >
                          <div className="flex items-start gap-2.5">
                            <div className="p-1.5 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                              <Icon className="h-3.5 w-3.5 text-primary" />
                            </div>
                            <div className="flex-1 min-w-0">
                              <p className="text-xs font-semibold text-zinc-900 group-hover:text-primary transition-colors mb-0.5">
                                {prompt.title}
                              </p>
                              <p className="text-[11px] text-zinc-500 leading-relaxed">{prompt.description}</p>
                            </div>
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* Chat area */}
              <div className="bg-white rounded-2xl border border-zinc-200/60 shadow-lg overflow-hidden flex flex-col">
                {/* Chat Header */}
                <div className="p-5 border-b bg-gradient-to-r from-primary/8 via-primary/5 to-primary/8 backdrop-blur-sm">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="relative flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-primary/80 shadow-lg shadow-primary/20">
                        <Brain className="h-5 w-5 text-white" />
                        <div className="absolute -top-1 -right-1 h-3 w-3 rounded-full bg-emerald-500 border-2 border-white"></div>
                      </div>
                      <div>
                        <h3 className="text-sm font-bold text-zinc-900 flex items-center gap-2">
                          Assistant IA Juridique
                          <span className="px-2 py-0.5 bg-primary/10 text-primary text-[10px] font-semibold rounded-full">BETA</span>
                        </h3>
                        <p className="text-xs text-zinc-600 flex items-center gap-1.5 mt-0.5">
                          <span className="font-medium">{mockCase.title}</span>
                          <span className="text-zinc-400">•</span>
                          <span className={cn(
                            "font-medium transition-colors",
                            selectedDocuments.length > 0 ? "text-emerald-600" : "text-zinc-500"
                          )}>
                            {selectedDocuments.length}/{mockCase.documents.length} documents
                          </span>
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="flex items-center gap-1.5 px-2.5 py-1 bg-emerald-50 rounded-full border border-emerald-200/60">
                        <div className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse"></div>
                        <span className="text-xs font-medium text-emerald-700">En ligne</span>
                      </div>
                      <Button variant="ghost" size="icon" className="h-8 w-8">
                        <MoreVertical className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>

                {/* Chat Messages */}
                <div className="flex-1 overflow-y-auto p-6 space-y-5 bg-gradient-to-b from-zinc-50/30 to-white" style={{ maxHeight: '520px' }}>
                  {chatMessages.map((message) => (
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
                          <p className="text-sm whitespace-pre-wrap leading-relaxed">{message.content}</p>
                        </div>
                        <div className={cn(
                          "flex items-center gap-2.5 px-1",
                          message.role === "user" ? "justify-end" : "justify-start"
                        )}>
                          <span className="text-[11px] text-zinc-500 font-medium">{message.timestamp}</span>
                          {message.role === "assistant" && (
                            <div className="flex items-center gap-1">
                              <button
                                onClick={() => handleCopyMessage(message.id, message.content)}
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
                          {mockCase.assignedLawyer.initials}
                        </div>
                      )}
                    </div>
                  ))}
                  
                  {isTyping && (
                    <div className="flex gap-3 justify-start animate-in fade-in slide-in-from-bottom-2 duration-300">
                      <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-primary/20 via-primary/15 to-primary/10 border border-primary/20 shrink-0 shadow-sm">
                        <Sparkles className="h-4 w-4 text-primary animate-pulse" />
                      </div>
                      <div className="bg-white rounded-2xl p-4 border border-zinc-200/80 shadow-sm">
                        <div className="flex items-center gap-2">
                          <Loader2 className="h-3.5 w-3.5 text-primary animate-spin" />
                          <span className="text-sm text-zinc-600">L'assistant analyse votre demande...</span>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Chat Input */}
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
                        value={aiMessage}
                        onChange={(e) => setAiMessage(e.target.value)}
                        onKeyDown={(e) => e.key === "Enter" && !e.shiftKey && handleSendMessage()}
                        className="bg-white border-zinc-300 focus:border-primary focus:ring-2 focus:ring-primary/20 pr-10 h-10 transition-all"
                      />
                      {aiMessage && (
                        <button
                          onClick={() => setAiMessage("")}
                          className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-400 hover:text-zinc-600"
                        >
                          ×
                        </button>
                      )}
                    </div>
                    <Button 
                      onClick={handleSendMessage} 
                      disabled={!aiMessage.trim() || isTyping}
                      className="gap-2 shrink-0 h-10 px-4 bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary shadow-sm disabled:opacity-50"
                    >
                      <Send className="h-4 w-4" />
                      Envoyer
                    </Button>
                  </div>
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-zinc-500">Appuyez sur <kbd className="px-1.5 py-0.5 bg-zinc-200 rounded text-zinc-700 font-mono">↵</kbd> pour envoyer</span>
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
              </div>
            </div>
          </div>
        )}

        {activeTab === "mindmap" && (
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-[320px_1fr] gap-6">
              {/* Left Sidebar - Search & Filters */}
              <div className="space-y-4">
                {/* Search Section */}
                <div className="bg-gradient-to-br from-white to-primary/5 rounded-xl border border-primary/20 p-5 shadow-sm">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="p-1.5 rounded-lg bg-primary/10">
                      <Search className="h-4 w-4 text-primary" />
                    </div>
                    <h4 className="text-sm font-bold text-zinc-900">Recherche IA</h4>
                  </div>
                  <div className="relative mb-4">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-primary/60" />
                    <Input
                      placeholder="Articles, jurisprudence..."
                      className="pl-10 h-10 bg-white border-primary/20 focus:border-primary focus:ring-2 focus:ring-primary/10"
                    />
                  </div>
                  <div className="space-y-2">
                    <p className="text-xs font-semibold text-zinc-700 mb-2">Suggestions :</p>
                    {["Article 731", "Succession", "Médiation"].map((tag) => (
                      <button
                        key={tag}
                        className="w-full text-left px-3 py-2 bg-white hover:bg-primary/5 text-xs font-medium text-primary rounded-lg border border-primary/20 hover:border-primary/30 transition-all"
                      >
                        {tag}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Filters */}
                <div className="bg-white rounded-xl border border-zinc-200/60 p-5 shadow-sm">
                  <div className="flex items-center gap-2 mb-4">
                    <TrendingUp className="h-4 w-4 text-primary" />
                    <h4 className="text-sm font-bold text-zinc-900">Filtres</h4>
                  </div>
                  <div className="space-y-3">
                    {[
                      { icon: FileText, label: "Documents", count: 3 },
                      { icon: Users, label: "Parties", count: 5 },
                      { icon: Calendar, label: "Événements", count: 8 },
                      { icon: Scale, label: "Articles de loi", count: 12 },
                    ].map((filter) => {
                      const Icon = filter.icon;
                      return (
                        <label key={filter.label} className="flex items-center gap-2.5 p-2 hover:bg-zinc-50 rounded-lg cursor-pointer transition-colors group">
                          <input type="checkbox" className="rounded border-zinc-300 text-primary focus:ring-primary" defaultChecked />
                          <Icon className="h-3.5 w-3.5 text-zinc-500 group-hover:text-primary transition-colors" />
                          <span className="text-xs font-medium text-zinc-700 flex-1">{filter.label}</span>
                          <span className="text-xs font-bold text-zinc-400">{filter.count}</span>
                        </label>
                      );
                    })}
                  </div>
                </div>

                {/* Legend */}
                <div className="bg-zinc-50 rounded-xl border border-zinc-200/60 p-4">
                  <p className="text-xs font-bold text-zinc-900 mb-3">Légende</p>
                  <div className="space-y-2">
                    {[
                      { color: "bg-blue-500", label: "Documents" },
                      { color: "bg-emerald-500", label: "Parties" },
                      { color: "bg-amber-500", label: "Événements" },
                      { color: "bg-primary", label: "Lois" },
                    ].map((item) => (
                      <div key={item.label} className="flex items-center gap-2">
                        <div className={cn("h-2.5 w-2.5 rounded-full", item.color)}></div>
                        <span className="text-xs text-zinc-600">{item.label}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Main Mindmap Area */}
              <div className="bg-white rounded-2xl border border-zinc-200/60 shadow-lg overflow-hidden">
                {/* Header */}
                <div className="p-5 border-b bg-gradient-to-r from-primary/5 via-white to-blue-50/50">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="relative flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-primary/80 shadow-lg shadow-primary/20">
                        <Network className="h-5 w-5 text-white" />
                        <div className="absolute -top-0.5 -right-0.5">
                          <div className="relative">
                            <div className="h-3 w-3 rounded-full bg-emerald-500 border-2 border-white animate-pulse"></div>
                            <div className="absolute inset-0 h-3 w-3 rounded-full bg-emerald-500 animate-ping opacity-75"></div>
                          </div>
                        </div>
                      </div>
                      <div>
                        <h3 className="text-sm font-bold text-zinc-900 flex items-center gap-2">
                          Carte mentale du dossier
                          <span className="px-2 py-0.5 bg-primary/10 text-primary text-[10px] font-bold rounded-full">IA</span>
                        </h3>
                        <p className="text-xs text-zinc-600 mt-0.5">
                          <span className="font-medium">{mockCase.title}</span> • <span className="text-zinc-500">28 connexions</span>
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Button variant="outline" size="sm" className="gap-2 h-9">
                        <Download className="h-3.5 w-3.5" />
                        Exporter
                      </Button>
                      <Button size="sm" className="gap-2 h-9 bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary shadow-sm">
                        <Sparkles className="h-3.5 w-3.5" />
                        Générer
                      </Button>
                    </div>
                  </div>
                </div>

                {/* Mindmap Canvas */}
                <div className="relative h-[600px] bg-gradient-to-br from-zinc-50/50 via-white to-primary/5">
                  {/* Grid Pattern */}
                  <div 
                    className="absolute inset-0 opacity-30"
                    style={{
                      backgroundImage: 'radial-gradient(circle, #d1d5db 1px, transparent 1px)',
                      backgroundSize: '24px 24px'
                    }}
                  ></div>
                  
                  {/* Placeholder Content */}
                  <div className="relative h-full flex items-center justify-center">
                    <div className="text-center max-w-lg px-8">
                      <div className="relative inline-block mb-6">
                        <div className="absolute inset-0 bg-primary/20 blur-3xl"></div>
                        <div className="relative bg-gradient-to-br from-primary/10 to-blue-100 p-6 rounded-2xl border border-primary/20 shadow-xl">
                          <Network className="h-16 w-16 text-primary mx-auto" />
                        </div>
                      </div>
                      <h4 className="text-xl font-bold text-zinc-900 mb-3">
                        Visualisation intelligente
                      </h4>
                      <p className="text-sm text-zinc-600 leading-relaxed mb-6">
                        L'IA va analyser votre dossier et créer une carte mentale interactive montrant les relations entre documents, parties, événements et références juridiques.
                      </p>
                      <div className="flex items-center justify-center gap-4">
                        <Button className="gap-2 bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary shadow-lg shadow-primary/30">
                          <Sparkles className="h-4 w-4" />
                          Générer la Mindmap
                        </Button>
                        <Button variant="outline" className="gap-2">
                          <BookOpen className="h-4 w-4" />
                          En savoir plus
                        </Button>
                      </div>

                      {/* Features List */}
                      <div className="grid grid-cols-2 gap-3 mt-8">
                        {[
                          { icon: GitBranch, text: "Relations automatiques" },
                          { icon: Target, text: "Points clés identifiés" },
                          { icon: Database, text: "Données structurées" },
                          { icon: Zap, text: "Mise à jour en temps réel" },
                        ].map((feature) => {
                          const Icon = feature.icon;
                          return (
                            <div key={feature.text} className="flex items-center gap-2 p-3 bg-white rounded-lg border border-zinc-200/60 shadow-sm">
                              <div className="p-1.5 rounded-lg bg-primary/10">
                                <Icon className="h-3.5 w-3.5 text-primary" />
                              </div>
                              <span className="text-xs font-medium text-zinc-700">{feature.text}</span>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Bottom Toolbar */}
                <div className="p-4 border-t bg-zinc-50/50 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <button className="p-2 hover:bg-white rounded-lg border border-transparent hover:border-zinc-200 transition-all">
                      <Plus className="h-4 w-4 text-zinc-600" />
                    </button>
                    <Separator className="h-4 w-px bg-zinc-300" />
                    <button className="px-3 py-1.5 hover:bg-white rounded-lg text-xs font-medium text-zinc-700 border border-transparent hover:border-zinc-200 transition-all">
                      100%
                    </button>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-zinc-500">
                    <Sparkles className="h-3.5 w-3.5 text-primary" />
                    <span>Propulsé par l'IA</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
