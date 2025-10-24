import { CaseData } from "@/types/case";

export const mockCase: CaseData = {
  id: 1,
  number: "2024-001",
  title: "Succession Martin",
  client: {
    name: "Marie Martin",
    email: "marie.martin@email.com",
    phone: "+33 6 12 34 56 78",
  },
  assignedLawyer: {
    name: "Me Sophie Dubois",
    initials: "SD",
    color: "emerald",
  },
  type: "Droit de la famille",
  status: "En cours",
  priority: "Haute",
  deadline: "2024-12-15",
  createdAt: "2024-10-01",
  description:
    "Dossier de succession concernant les biens de feu M. Jacques Martin. Plusieurs héritiers en conflit sur la répartition des biens immobiliers.",

  documents: [
    {
      id: 1,
      name: "Testament M. Martin.pdf",
      date: "2024-10-05",
      size: "2.4 MB",
    },
    {
      id: 2,
      name: "Acte de propriété.pdf",
      date: "2024-10-08",
      size: "1.8 MB",
    },
    {
      id: 3,
      name: "Rapport d'expertise.pdf",
      date: "2024-10-15",
      size: "3.2 MB",
    },
  ],

  timeline: [
    {
      id: 1,
      type: "created",
      date: "2024-10-01",
      user: "Me Sophie Dubois",
      description: "Dossier créé",
    },
    {
      id: 2,
      type: "document",
      date: "2024-10-05",
      user: "Me Sophie Dubois",
      description: "Testament ajouté",
    },
    {
      id: 3,
      type: "meeting",
      date: "2024-10-10",
      user: "Me Sophie Dubois",
      description: "Réunion avec le client",
    },
    {
      id: 4,
      type: "note",
      date: "2024-10-15",
      user: "Me Sophie Dubois",
      description: "Rapport d'expertise reçu",
    },
  ],

  notes: [
    {
      id: 1,
      content: "Le client souhaite privilégier une solution amiable",
      date: "Il y a 3 jours",
      author: "Me Sophie Dubois",
    },
    {
      id: 2,
      content: "Prévoir une médiation familiale avant fin novembre",
      date: "Il y a 1 semaine",
      author: "Me Sophie Dubois",
    },
  ],
};
