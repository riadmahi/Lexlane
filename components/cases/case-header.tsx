"use client";

import { useRouter } from "next/navigation";
import { ArrowLeft, Edit, MoreVertical, Share2, Users, Calendar, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";

interface CaseHeaderProps {
  caseData: {
    title: string;
    number: string;
    status: string;
    description: string;
    client: {
      name: string;
      email: string;
      phone: string;
    };
    deadline: string;
    assignedLawyer: {
      name: string;
      initials: string;
      color: string;
    };
    type: string;
    priority?: string;
  };
}

export function CaseHeader({ caseData }: CaseHeaderProps) {
  const router = useRouter();

  return (
    <div className="bg-white px-8 py-6">
      <div className="flex items-start justify-between mb-6">
        <div className="flex items-start gap-4">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => router.back()}
            className="mt-1"
          >
            <ArrowLeft className="h-5 w-5" />
          </Button>
          <div>
            <div className="flex items-center gap-3 mb-2">
              <h1 className="text-3xl font-bold text-zinc-900 font-rethink-sans tracking-tight">
                {caseData.title}
              </h1>
              <span className="text-xs text-zinc-500 font-mono px-2.5 py-1 bg-zinc-100 rounded-lg">
                #{caseData.number}
              </span>
              <span className="px-3 py-1 rounded-lg text-xs font-medium bg-emerald-50 text-emerald-700 border border-emerald-200/60">
                {caseData.status}
              </span>
            </div>
            <p className="text-sm text-zinc-600">{caseData.description}</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="icon">
            <Share2 className="h-4 w-4" />
          </Button>
          <Button variant="outline" size="icon">
            <MoreVertical className="h-4 w-4" />
          </Button>
          <Button className="gap-2">
            <Edit className="h-4 w-4" />
            Modifier
          </Button>
        </div>
      </div>

      {/* Info Cards */}
      <div className="grid grid-cols-4 gap-4">
        <div className="bg-[#F6F6F3] rounded-xl p-4 border border-zinc-200/40">
          <div className="flex items-center gap-2 text-xs text-zinc-600 mb-1">
            <Users className="h-3.5 w-3.5" />
            <span>Client</span>
          </div>
          <p className="font-semibold text-zinc-900">{caseData.client.name}</p>
          <p className="text-xs text-zinc-500 mt-0.5">{caseData.client.email}</p>
        </div>
        
        <div className="bg-[#F6F6F3] rounded-xl p-4 border border-zinc-200/40">
          <div className="flex items-center gap-2 text-xs text-zinc-600 mb-1">
            <Calendar className="h-3.5 w-3.5" />
            <span>Échéance</span>
          </div>
          <p className="font-semibold text-zinc-900">
            {new Date(caseData.deadline).toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' })}
          </p>
          <p className="text-xs text-amber-600 mt-0.5">Dans 23 jours</p>
        </div>
        
        <div className="bg-[#F6F6F3] rounded-xl p-4 border border-zinc-200/40">
          <div className="flex items-center gap-2 text-xs text-zinc-600 mb-1">
            <Users className="h-3.5 w-3.5" />
            <span>Avocat assigné</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-500 text-white text-[10px] font-semibold">
              {caseData.assignedLawyer.initials}
            </div>
            <p className="font-semibold text-zinc-900 text-sm">{caseData.assignedLawyer.name}</p>
          </div>
        </div>
        
        <div className="bg-[#F6F6F3] rounded-xl p-4 border border-zinc-200/40">
          <div className="flex items-center gap-2 text-xs text-zinc-600 mb-1">
            <FileText className="h-3.5 w-3.5" />
            <span>Type</span>
          </div>
          <p className="font-semibold text-zinc-900">{caseData.type}</p>
          <p className="text-xs text-zinc-500 mt-0.5">Priorité: {caseData.priority || "Haute"}</p>
        </div>
      </div>
    </div>
  );
}
