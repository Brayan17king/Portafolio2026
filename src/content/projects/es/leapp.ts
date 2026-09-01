import leapp0 from "../../../assets/images/projects/leapp/leapp-0.webp";
import leapp1 from "../../../assets/images/projects/leapp/leapp-1.webp";
import type { ProjectContent } from "../../types";

export default {
  title: "LE App",
  theme: "dark",
  tags: ["flutter", "dotnet", "firebase", "sqlserver"],
  videoBorder: false,
  description:
    "LE App es la aplicación móvil oficial de los Liceos del Ejército Nacional, construida en Flutter para personal administrativo y estudiantes: noticias institucionales, avisos con notificaciones push, carnet digital con código QR, un asistente virtual y perfil de usuario.<br/><br/>Desarrollé la app completa con arquitectura Feature-First + Clean Architecture (Riverpod, GoRouter, GetIt), consumiendo un backend en C#/.NET y SQL Server, con notificaciones push de punta a punta vía Firebase Cloud Messaging, autenticación con Google y credenciales, y un endurecimiento de seguridad y accesibilidad sobre toda la aplicación.",
  components: [
    // TODO(Brayan): reemplazar por capturas reales de la app y un video del
    // flujo principal — estos placeholders solo muestran la identidad visual.
    // Basta con sobrescribir estos mismos archivos (mismo nombre/ruta):
    //   src/assets/images/projects/leapp/leapp-0.webp
    //   src/assets/images/projects/leapp/leapp-1.webp
    // y añadir un video en src/assets/videos/leapp.mp4 como primer componente
    // (mismo patrón que cubewar.ts) si quieres uno al inicio de la galería.
    {
      type: "media",
      props: {
        type: "image",
        src: leapp0,
        alt: "Ícono de LE App",
        caption: "Identidad visual",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: leapp1,
        alt: "Logotipo de LE App",
        caption: "LE App",
      },
    },
  ],
} as const satisfies ProjectContent;
