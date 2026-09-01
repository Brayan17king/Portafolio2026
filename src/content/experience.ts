export interface LocalizedText {
  en: string;
  es: string;
}

export interface ExperienceEntry {
  role: LocalizedText;
  company: string;
  period: LocalizedText;
  description: LocalizedText;
  // "project" marks training/academic work (e.g. a bootcamp project) rather
  // than a paid role, so it can be tagged differently in the UI.
  type: "job" | "project";
}

// Sourced directly from Brayan's CV — keep in sync with it, do not embellish.
export const experience: ExperienceEntry[] = [
  {
    role: { es: "Desarrollador Senior", en: "Senior Developer" },
    company: "DataGlobal SAS",
    period: { es: "Actualidad", en: "Present" },
    description: {
      es: "Desarrollo Full Stack de aplicaciones web y móviles, incluyendo diseño y funcionalidades.",
      en: "Full stack development of web and mobile applications, including design and functionality.",
    },
    type: "job",
  },
  {
    role: { es: "Desarrollador Junior .NET", en: "Junior .NET Developer" },
    company: "Quibor Web SAS",
    period: { es: "Enero 2024 – Julio 2025", en: "January 2024 – July 2025" },
    description: {
      es: "Desarrollo y mantenimiento de sistemas, ERP contable con WebForms.",
      en: "Development and maintenance of systems, including an accounting ERP built with WebForms.",
    },
    type: "job",
  },
  {
    role: { es: "Proyecto Full Stack", en: "Full Stack Project" },
    company: "CampusLands",
    period: { es: "Noviembre 2023", en: "November 2023" },
    description: {
      es: "Dashboard para una empresa de jardinería. Stack: .NET, HTML, CSS, JavaScript, MySQL, JWT.",
      en: "Dashboard for a gardening company. Stack: .NET, HTML, CSS, JavaScript, MySQL, JWT.",
    },
    type: "project",
  },
  {
    role: { es: "Analista Help Desk", en: "Help Desk Analyst" },
    company: "Accedo Colombia",
    period: { es: "Septiembre 2022 – Febrero 2023", en: "September 2022 – February 2023" },
    description: {
      es: "Instalación y mantenimiento de software, redes y hardware empresarial.",
      en: "Installation and maintenance of enterprise software, networks, and hardware.",
    },
    type: "job",
  },
];
