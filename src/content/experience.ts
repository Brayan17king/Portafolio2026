import dataglobalLogo from "../assets/images/companies/dataglobal.avif";
import quiborwebLogo from "../assets/images/companies/quiborweb.png";
import campuslandsLogo from "../assets/images/companies/campuslands.svg";

export interface LocalizedText {
  en: string;
  es: string;
}

export interface ExperienceEntry {
  role: LocalizedText;
  company: string;
  companyUrl: string;
  companyLogo: string;
  // The logo's own color — picks a chip background with real contrast
  // instead of guessing. "light" logos (white marks) sit on a dark chip,
  // "dark" logos sit on a white chip.
  logoTone: "light" | "dark";
  period: LocalizedText;
  description: LocalizedText;
  // Languages/technologies used in the role, rendered as separate badges in
  // each tech's own brand color. `icon` keys into TECH_ICONS (src/utils/techIcons.ts);
  // when a tech has no brand icon there (e.g. VB.NET), `hex` sets the badge
  // color directly and no icon is drawn.
  stack: { name: string; icon?: string; hex?: string }[];
  // "project" marks training/academic work (e.g. a bootcamp project) rather
  // than a paid role, so it can be tagged differently in the UI.
  type: "job" | "project";
  // Marks the role Brayan is in right now — highlighted differently in the UI.
  current: boolean;
}

// Sourced directly from Brayan's CV — keep in sync with it, do not embellish.
export const experience: ExperienceEntry[] = [
  {
    role: { es: "Desarrollador Senior", en: "Senior Developer" },
    company: "DataGlobal SAS",
    companyUrl: "https://dataglobal.com.co/",
    companyLogo: dataglobalLogo,
    logoTone: "light",
    period: { es: "Actualidad", en: "Present" },
    description: {
      es: "Desarrollo Full Stack de aplicaciones web y móviles para una consultora de soluciones digitales: diseño de interfaz, nuevas funcionalidades, integración de APIs y también refactorización y modernización de sistemas y páginas antiguas ya existentes.",
      en: "Full stack development of web and mobile applications for a digital solutions consultancy: interface design, new features, API integration, and also refactoring and modernizing existing legacy systems and pages.",
    },
    stack: [
      { name: "Vue", icon: "vuedotjs" },
      { name: "TypeScript", icon: "typescript" },
      { name: ".NET Core", icon: "dotnet" },
      { name: "C#", icon: "csharp" },
      { name: "VB.NET", hex: "1E5AA8" },
      { name: "Bootstrap", icon: "bootstrap" },
      { name: "SQL Server", icon: "sqlserver" },
      { name: "Flutter", icon: "flutter" },
    ],
    type: "job",
    current: true,
  },
  {
    role: { es: "Desarrollador Junior .NET", en: "Junior .NET Developer" },
    company: "Quibor Web SAS",
    companyUrl: "https://www.quiborweb.com/",
    companyLogo: quiborwebLogo,
    logoTone: "dark",
    period: { es: "Enero 2024 – Julio 2025", en: "January 2024 – July 2025" },
    description: {
      es: "Desarrollo y mantenimiento de sistemas para una empresa especializada en software de facturación electrónica, incluyendo un ERP contable construido con ASP.NET WebForms.",
      en: "Development and maintenance of systems for a company specialized in electronic invoicing software, including an accounting ERP built with ASP.NET WebForms.",
    },
    stack: [
      { name: "C#", icon: "csharp" },
      { name: ".NET", icon: "dotnet" },
      { name: "ASP.NET WebForms", icon: "dotnet" },
      { name: "SQL Server", icon: "sqlserver" },
    ],
    type: "job",
    current: false,
  },
  {
    role: { es: "Proyecto Full Stack", en: "Full Stack Project" },
    company: "CampusLands",
    companyUrl: "https://campuslands.com/",
    companyLogo: campuslandsLogo,
    logoTone: "light",
    period: { es: "Noviembre 2023", en: "November 2023" },
    description: {
      es: "Formación intensiva en programación desde cero en una fábrica de talento TI, cubriendo desde los fundamentos hasta el desarrollo de un dashboard administrativo completo para una empresa de jardinería.",
      en: "Intensive programming training from the ground up at a tech talent bootcamp, covering everything from the fundamentals to building a complete administrative dashboard for a gardening company.",
    },
    stack: [
      { name: ".NET", icon: "dotnet" },
      { name: "HTML", icon: "html5" },
      { name: "CSS", icon: "css" },
      { name: "JavaScript", icon: "javascript" },
      { name: "MySQL", icon: "mysql" },
      { name: "JWT", icon: "jsonwebtokens" },
    ],
    type: "project",
    current: false,
  },
];
