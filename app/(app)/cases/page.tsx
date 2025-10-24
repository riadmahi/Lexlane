"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Search, Plus, Filter, MoreVertical, Calendar, User, Clock, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

const mockCases = [
  {
    id: 1,
    number: "2024-001",
    title: "Succession Martin",
    client: "Marie Martin",
    assignedLawyer: {
      name: "Me Sophie Dubois",
      initials: "SD",
      color: "emerald",
    },
    type: "Droit de la famille",
    status: "En cours",
    priority: "Haute",
    deadline: "2024-12-15",
    lastUpdate: "Il y a 2 jours",
    color: "blue",
  },
  {
    id: 2,
    number: "2024-002",
    title: "Contentieux commercial SAS Dupont",
    client: "SAS Dupont & Fils",
    assignedLawyer: {
      name: "Me Martin Dupond",
      initials: "MD",
      color: "blue",
    },
    type: "Droit commercial",
    status: "En attente",
    priority: "Moyenne",
    deadline: "2025-01-20",
    lastUpdate: "Il y a 5 jours",
    color: "purple",
  },
  {
    id: 3,
    number: "2023-145",
    title: "Litige immobilier résidence Les Pins",
    client: "Copropriété Les Pins",
    assignedLawyer: {
      name: "Me Claire Bernard",
      initials: "CB",
      color: "primary",
    },
    type: "Droit immobilier",
    status: "Clos",
    priority: "Basse",
    deadline: "2024-10-10",
    lastUpdate: "Il y a 2 semaines",
    color: "zinc",
  },
];

const tabs = [
  { id: "all", label: "Tous", count: 24 },
  { id: "active", label: "En cours", count: 12 },
  { id: "pending", label: "En attente", count: 8 },
  { id: "closed", label: "Clos", count: 4 },
];

export default function CasesPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeTab, setActiveTab] = useState("all");

  const getStatusColor = (status: string) => {
    switch (status) {
      case "En cours":
        return "bg-emerald-50 text-emerald-700 border-emerald-200/60";
      case "En attente":
        return "bg-amber-50 text-amber-700 border-amber-200/60";
      case "Clos":
        return "bg-zinc-100 text-zinc-600 border-zinc-200/60";
      default:
        return "bg-zinc-100 text-zinc-600 border-zinc-200/60";
    }
  };

  const getPriorityDot = (priority: string) => {
    switch (priority) {
      case "Haute":
        return "bg-red-500";
      case "Moyenne":
        return "bg-orange-500";
      case "Basse":
        return "bg-green-500";
      default:
        return "bg-zinc-400";
    }
  };

  const getColorClass = (color: string) => {
    const colors: Record<string, string> = {
      blue: "from-blue-500/10 to-blue-600/5 border-blue-200/40",
      purple: "from-purple-500/10 to-purple-600/5 border-purple-200/40",
      zinc: "from-zinc-500/10 to-zinc-600/5 border-zinc-200/40",
    };
    return colors[color] || colors.zinc;
  };

  const router = useRouter();

  return (
    <div className="flex flex-1 flex-col h-full bg-[#F6F6F3]">
      {/* Header */}
      <div className="border-b bg-white px-8 py-6">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-3xl font-bold text-zinc-900 font-rethink-sans tracking-tight">Dossiers</h1>
            <p className="text-sm text-zinc-600 mt-1.5">Gérez tous vos dossiers juridiques en un seul endroit</p>
          </div>
          <Button className="gap-2 shadow-sm h-10 px-4">
            <Plus className="h-4 w-4" />
            Nouveau dossier
          </Button>
        </div>

        {/* Tabs */}
        <div className="flex items-center gap-1 mb-5 border-b border-zinc-200/60">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={cn(
                "px-4 py-2.5 text-sm font-medium transition-all duration-200 relative",
                activeTab === tab.id
                  ? "text-zinc-900"
                  : "text-zinc-600 hover:text-zinc-900"
              )}
            >
              <span className="flex items-center gap-2">
                {tab.label}
                <span className={cn(
                  "px-2 py-0.5 rounded-full text-xs font-semibold",
                  activeTab === tab.id
                    ? "bg-primary/10 text-primary"
                    : "bg-zinc-100 text-zinc-600"
                )}>
                  {tab.count}
                </span>
              </span>
              {activeTab === tab.id && (
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary" />
              )}
            </button>
          ))}
        </div>

        {/* Search and Filters */}
        <div className="flex gap-3">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-zinc-400" />
            <Input
              placeholder="Rechercher un dossier, client, numéro..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 h-10 bg-white border-zinc-200/60 shadow-sm"
            />
          </div>
          <Button variant="outline" className="gap-2 h-10 shadow-sm">
            <Filter className="h-4 w-4" />
            Filtres
            <ChevronDown className="h-3.5 w-3.5 ml-0.5 text-zinc-400" />
          </Button>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-auto p-8">
        <div className="bg-white rounded-md border border-zinc-200/60 shadow-sm overflow-hidden">
          <Table>
            <TableHeader>
              <TableRow className="bg-zinc-50 hover:bg-zinc-50 border-b border-zinc-200">
                <TableHead className="font-semibold text-zinc-900 w-[50px]">#</TableHead>
                <TableHead className="font-semibold text-zinc-900">Dossier</TableHead>
                <TableHead className="font-semibold text-zinc-900">Client</TableHead>
                <TableHead className="font-semibold text-zinc-900">Avocat assigné</TableHead>
                <TableHead className="font-semibold text-zinc-900">Type</TableHead>
                <TableHead className="font-semibold text-zinc-900">Statut</TableHead>
                <TableHead className="font-semibold text-zinc-900">Priorité</TableHead>
                <TableHead className="font-semibold text-zinc-900">Échéance</TableHead>
                <TableHead className="text-right font-semibold text-zinc-900">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {mockCases.map((caseItem) => (
                <TableRow 
                  key={caseItem.id}
                  onClick={() => router.push(`/cases/${caseItem.id}`)}
                  className="cursor-pointer hover:bg-zinc-50/50 border-b border-zinc-100"
                >
                  <TableCell className="font-mono text-xs text-zinc-500">
                    #{caseItem.number}
                  </TableCell>
                  <TableCell>
                    <div>
                      <div className="font-semibold text-zinc-900 mb-1">
                        {caseItem.title}
                      </div>
                      <div className="flex items-center gap-2 text-xs text-zinc-500">
                        <Clock className="h-3 w-3" strokeWidth={2} />
                        {caseItem.lastUpdate}
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2 text-sm text-zinc-700">
                      <User className="h-4 w-4 text-zinc-400" strokeWidth={2} />
                      {caseItem.client}
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <div className={cn(
                        "flex h-8 w-8 items-center justify-center rounded-full text-xs font-semibold text-white shrink-0",
                        caseItem.assignedLawyer.color === "emerald" && "bg-emerald-500",
                        caseItem.assignedLawyer.color === "blue" && "bg-blue-500",
                        caseItem.assignedLawyer.color === "primary" && "bg-primary"
                      )}>
                        {caseItem.assignedLawyer.initials}
                      </div>
                      <span className="text-sm text-zinc-700">{caseItem.assignedLawyer.name}</span>
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge variant="outline" className="bg-zinc-50 text-zinc-700 border-zinc-200">
                      {caseItem.type}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <Badge className={cn("border", getStatusColor(caseItem.status))}>
                      {caseItem.status}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <div className={cn("h-2 w-2 rounded-full", getPriorityDot(caseItem.priority))} />
                      <span className="text-sm text-zinc-700">{caseItem.priority}</span>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2 text-sm text-zinc-700">
                      <Calendar className="h-4 w-4 text-zinc-400" strokeWidth={2} />
                      {new Date(caseItem.deadline).toLocaleDateString('fr-FR', { 
                        day: 'numeric', 
                        month: 'short', 
                        year: 'numeric' 
                      })}
                    </div>
                  </TableCell>
                  <TableCell className="text-right">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild onClick={(e) => e.stopPropagation()}>
                        <Button variant="ghost" className="h-8 w-8 p-0 hover:bg-zinc-100">
                          <MoreVertical className="h-4 w-4 text-zinc-600" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end" className="w-48">
                        <DropdownMenuItem onClick={(e) => e.stopPropagation()}>
                          Voir le dossier
                        </DropdownMenuItem>
                        <DropdownMenuItem onClick={(e) => e.stopPropagation()}>
                          Modifier
                        </DropdownMenuItem>
                        <DropdownMenuItem onClick={(e) => e.stopPropagation()}>
                          Partager
                        </DropdownMenuItem>
                        <DropdownMenuItem 
                          onClick={(e) => e.stopPropagation()}
                          className="text-red-600"
                        >
                          Supprimer
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
}
