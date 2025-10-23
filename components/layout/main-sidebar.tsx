"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  RotateCcw,
  Play,
  Pause,
  BookOpen,
  ChevronRight,
  Link as LinkIcon,
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
import { cn } from "@/lib/utils";

const navigation = [
  {
    title: "Activité",
    items: [
      { href: "/home", label: "Accueil", icon: "/assets/icons/home.svg" },
      { href: "/calendar", label: "Agenda", icon: "/assets/icons/calendar.svg" },
      { href: "/cases", label: "Dossiers", icon: "/assets/icons/folder-open.svg" },
      { href: "/assistant", label: "Assistant juridique", icon: "/assets/icons/ai.svg" },
    ],
  },
  {
    title: "Cabinet",
    items: [
      { href: "/clients", label: "Clientèle", icon: "/assets/icons/users.svg" },
      { href: "/billing", label: "Facturation", icon: "/assets/icons/receipt-item.svg" },
      { href: "/accounting", label: "Comptabilité", icon: "/assets/icons/wallet.svg" },
      { href: "/team", label: "Collaborateurs & Gestion temps", icon: "/assets/icons/user-group.svg" },
      { href: "/shared-space", label: "Espace de partage", icon: "/assets/icons/folder-transfer.svg" },
    ],
  },
  {
    title: "Configuration",
    items: [
      { href: "/settings", label: "Paramètres", icon: "/assets/icons/setting-2.svg" },
      { href: "/help", label: "Aide & Support", icon: "/assets/icons/help.svg" },
    ],
  },
];

export function MainSidebar() {
  const pathname = usePathname();
  const [timer, setTimer] = useState({ hours: 0, minutes: 0, seconds: 0 });
  const [isRunning, setIsRunning] = useState(false);

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
    return mins + " min " + secs.toString().padStart(2, "0") + "s";
  };

  const resetTimer = () => {
    setTimer({ hours: 0, minutes: 0, seconds: 0 });
    setIsRunning(false);
  };

  const toggleTimer = () => {
    setIsRunning(!isRunning);
  };

  return (
    <Sidebar className="border-r-0">
      <SidebarHeader className="border-b-0 px-6 py-6">
        <div className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-primary/80 shrink-0 shadow-sm">
            <BookOpen className="h-5 w-5 text-white" strokeWidth={2} />
          </div>
          <div className="flex-1 min-w-0">
            <h2 className="font-rethink-sans text-base font-semibold text-zinc-900 truncate tracking-tight">
              Cabinet Arturio
            </h2>
            <p className="text-xs text-zinc-500 font-medium">Formule LexCab</p>
          </div>
        </div>
      </SidebarHeader>

      <SidebarContent className="px-3 py-2">
        {navigation.map((section, idx) => (
          <SidebarGroup key={section.title} className={cn("px-0", idx > 0 && "mt-6")}>
            <SidebarGroupLabel className="font-rethink-sans px-3 text-[11px] font-semibold text-zinc-900 uppercase tracking-wide mb-2 h-auto">
              {section.title}
            </SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu className="space-y-0.5">
                {section.items.map((item) => {
                  const isActive = pathname === item.href;
                  return (
                    <SidebarMenuItem key={item.href}>
                      <SidebarMenuButton asChild>
                        <Link
                          href={item.href}
                          className={cn(
                            "h-10 px-3 rounded-lg group relative",
                            "transition-all duration-200 ease-in-out",
                            isActive
                              ? "bg-[#F6F6F3] text-zinc-900 ring-primary/25 ring-inset"
                              : "text-zinc-600 hover:text-zinc-900 hover:bg-zinc-50 hover:ring-1 hover:ring-zinc-200/50 hover:ring-inset active:ring-2 active:ring-primary/30 active:ring-inset active:bg-zinc-100/80"
                          )}
                        >
                          <img
                            src={item.icon}
                            alt=""
                            className={cn(
                              "h-[18px] w-[18px] transition-opacity duration-200 relative z-10",
                              isActive ? "opacity-100" : "opacity-70 group-hover:opacity-90"
                            )} 
                          />
                          <span className={cn(
                            "font-rethink-sans text-sm relative z-10 transition-all duration-200",
                            isActive ? "font-medium" : "font-normal"
                          )}>
                            {item.label}
                          </span>
                        </Link>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  );
                })}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ))}
      </SidebarContent>

      <SidebarFooter className="border-t-0 px-4 pb-4">
        <div className="space-y-3">
          <div className="rounded-xl bg-gradient-to-br from-zinc-50 to-zinc-100/50 border border-zinc-200/60 p-4 shadow-sm">
            <div className="text-center mb-3">
              <div className="text-2xl font-bold text-zinc-900 tabular-nums tracking-tight inline-flex items-baseline gap-1" style={{ perspective: '400px' }}>
                <div className="inline-flex flex-col items-center relative h-8 overflow-hidden" style={{ transformStyle: 'preserve-3d' }}>
                  <span 
                    key={`min-${timer.hours * 60 + timer.minutes}`}
                    className="animate-[flipIn_0.5s_cubic-bezier(0.16,1,0.3,1)_both]"
                    style={{ transformOrigin: '50% 50%' }}
                  >
                    {timer.hours * 60 + timer.minutes}
                  </span>
                </div>
                <span className="text-sm text-zinc-500 font-medium">min</span>
                <div className="inline-flex" style={{ transformStyle: 'preserve-3d' }}>
                  <div className="inline-flex flex-col items-center relative h-8 w-4 overflow-hidden">
                    <span 
                      key={`sec-tens-${Math.floor(timer.seconds / 10)}`}
                      className="animate-[flipIn_0.5s_cubic-bezier(0.16,1,0.3,1)_both]"
                      style={{ transformOrigin: '50% 50%' }}
                    >
                      {Math.floor(timer.seconds / 10)}
                    </span>
                  </div>
                  <div className="inline-flex flex-col items-center relative h-8 w-4 overflow-hidden">
                    <span 
                      key={`sec-ones-${timer.seconds % 10}`}
                      className="animate-[flipIn_0.5s_cubic-bezier(0.16,1,0.3,1)_both]"
                      style={{ transformOrigin: '50% 50%' }}
                    >
                      {timer.seconds % 10}
                    </span>
                  </div>
                </div>
                <span className="text-sm text-zinc-500 font-medium">s</span>
              </div>
            </div>
            <button
              type="button"
              className="flex items-center justify-center gap-1.5 text-xs text-zinc-600 hover:text-zinc-900 transition-colors w-full mb-3 py-1"
            >
              <LinkIcon className="h-3 w-3" strokeWidth={2} />
              <span className="font-medium">Lier à un dossier</span>
            </button>
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={resetTimer}
                className="flex h-9 w-9 items-center justify-center rounded-lg hover:bg-white/80 border border-zinc-200/60 transition-all hover:shadow-sm active:scale-95"
                title="Réinitialiser"
              >
                <RotateCcw className="h-3.5 w-3.5 text-zinc-700" strokeWidth={2} />
              </button>
              <button
                type="button"
                onClick={toggleTimer}
                className="flex-1 flex items-center justify-center gap-2 h-9 rounded-lg bg-gradient-to-b from-primary to-primary/90 text-white hover:from-primary/90 hover:to-primary/80 transition-all font-medium text-sm shadow-sm hover:shadow active:scale-[0.98]"
              >
                {isRunning ? (
                  <Pause className="h-3.5 w-3.5 fill-white" strokeWidth={0} />
                ) : (
                  <Play className="h-3.5 w-3.5 fill-white" strokeWidth={0} />
                )}
              </button>
            </div>
          </div>

          <Separator className="bg-zinc-200/60" />

          <div className="flex items-center gap-3 px-2 py-1">
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-primary to-primary/80 text-white text-xs font-bold shrink-0 shadow-sm">
              MD
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-semibold text-zinc-900 truncate tracking-tight">Me Martin Dupond</p>
              <p className="text-[11px] text-zinc-500 font-medium">Associé</p>
            </div>
          </div>
        </div>
      </SidebarFooter>
    </Sidebar>
  );
}
