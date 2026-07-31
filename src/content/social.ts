export const social = [
  //{ url: "xbrayansneyder@gmail.com", name: "mail" },
  { url: "https://github.com/Brayan17king", name: "github" },
  { url: "https://www.linkedin.com/in/brayan17/", name: "linkedin" },
  //{ url: "https://x.com/DavidHckh", name: "x" },
  { url: "https://www.instagram.com/xbrayansneyder/", name: "instagram" },
] as const satisfies { url: string; name: "mail" | "github" | "instagram" | "linkedin" | "x" }[];
