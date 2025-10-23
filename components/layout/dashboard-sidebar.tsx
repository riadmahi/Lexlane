"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import {
  Home,
  Calendar,
  FolderOpen,
  Sparkles,
  Users,
  Receipt,
  DollarSign,
  UserCog,
  FolderClosed,
  Settings,
  HelpCircle,
  Link as LinkIcon,
  RotateCcw,
  Play,
  BookOpen,
} from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { Separator } from "@/components/ui/separator";

const navigation = [
  {
    title: "Activité",
    items: [
      { href: "/app/dashboard", label: "Accueil", icon: Home },
      { href: "/app/dashboard/agenda", label: "Agenda", icon: Calendar },
      { href: "/app/dashboard/dossiers", label: "Dossiers", icon: FolderOpen },
      { href: "/app/dashboard/assistant", label: "Assistant juridique", icon: Sparkles },
    ],
  },
  {
    title: "Cabinet",
    items: [
      { href: "/app/dashboard/clientele", label: "Clientèle", icon: Users },
      { href: "/app/dashboard/facturation", label: "Facturation", icon: Receipt },
      { href: "/app/dashboard/comptabilite", label: "Comptabilité", icon: DollarSign },
      { href: "/app/dashboard/collaborateurs", label: "Collaborateurs & Gestion temps", icon: UserCog },
      { href: "/app/dashboard/partage", label: "Espace de partage", icon: FolderClosed },
    ],
  },
  {
    title: "Configuration",
    items: [
      { href: "/app/dashboard/parametres", label: "Paramètres", icon: Settings },
      { href: "/app/dashboard/aide", label: "Aide & Support", icon: HelpCircle },
    ],
  },
];

export function DashboardSidebar() {
  const [timer, setTimer] = useState({ hours: 0, minutes: 0, seconds: 0 });
  const [isRunning, setIsRunning] = useState(false);

  // Timer logic
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isRunning) {
      interval = setInterval(() => {
        setTimer((prev) => {
          let { hours, minutes, seconds } = prev;
          seconds++;
          if (seconds >= 60) {
            seconds = 0;
            minutes++;
          }
          if (minutes >= 60) {
            minutes = 0;
            hours++;
          }
          return { hours, minutes, seconds };
        });
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isRunning]);

  const formatTime = () => {
    const mins = timer.hours * 60 + timer.minutes;
    const secs = timer.seconds;
    return `${mins} min ${secs.toString().padStart(2, "0")}s`;
  };

  const resetTimer = () => {
    setTimer({ hours: 0, minutes: 0, seconds: 0 });
    setIsRunning(false);
  };

  const toggleTimer = () => {
    setIsRunning(!isRunning);
  };

  return (
    <Sidebar>
      <SidebarHeader className="border-b">
        <div className="flex items-center gap-3 px-2 py-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-zinc-900 shrink-0">
            <BookOpen className="h-5 w-5 text-white" />
          </div>
          <div className="flex-1 min-w-0">
            <h2 className="font-rethink-sans text-base font-semibold text-zinc-900 truncate">
              Cabinet Arturio
            </h2>
            <p className="text-xs text-zinc-500">Formule LexCab</p>
          </div>
        </div>
      </SidebarHeader>

      <SidebarContent>
        {navigation.map((section) => (
          <SidebarGroup key={section.title}>
            <SidebarGroupLabel>{section.title}</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {section.items.map((item) => (
                  <SidebarMenuItem key={item.href}>
                    <SidebarMenuButton asChild>
                      <Link href={item.href}>
                        <item.icon />
                        <span>{item.label}</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ))}
      </SidebarContent>

      <SidebarFooter className="border-t">
        <div className="p-3 space-y-3">
          {/* Timer */}
          <div className="rounded-lg bg-zinc-50 border border-zinc-200 p-3">
            <div className="text-center mb-2">
              <div className="text-xl font-semibold text-zinc-900">{formatTime()}</div>
            </div>
            <div className="flex items-center gap-2 mb-2">
              <button
                type="button"
                className="flex items-center gap-1.5 text-xs text-zinc-600 hover:text-zinc-900 transition-colors"
              >
                <LinkIcon className="h-3 w-3" />
                <span>Lier à un dossier</span>
              </button>
            </div>
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={resetTimer}
                className="flex h-7 w-7 items-center justify-center rounded-md hover:bg-zinc-200 transition-colors"
                title="Réinitialiser"
              >
                <RotateCcw className="h-3.5 w-3.5 text-zinc-600" />
              </button>
              <button
                type="button"
                onClick={toggleTimer}
                className="flex-1 flex items-center justify-center gap-2 h-7 rounded-md bg-zinc-900 text-white hover:bg-zinc-800 transition-colors text-sm"
              >
                <Play className="h-3 w-3" />
              </button>
            </div>
          </div>

          <Separator />

          {/* User */}
          <div className="flex items-center gap-2 px-1">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-zinc-900 text-white text-xs font-semibold shrink-0">
              MD
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-zinc-900 truncate">Me Martin Dupond</p>
              <p className="text-xs text-zinc-500">Associé</p>
            </div>
          </div>
        </div>
      </SidebarFooter>
    </Sidebar>
  );
}
