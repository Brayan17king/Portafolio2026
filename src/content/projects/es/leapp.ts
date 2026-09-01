import leapp0 from "../../../assets/images/projects/leapp/leapp-0.webp";
import leapp1 from "../../../assets/images/projects/leapp/leapp-1.webp";
import leapp2 from "../../../assets/images/projects/leapp/leapp-2.webp";
import leapp3 from "../../../assets/images/projects/leapp/leapp-3.webp";
import leapp4 from "../../../assets/images/projects/leapp/leapp-4.webp";
import leapp5 from "../../../assets/images/projects/leapp/leapp-5.webp";
import type { ProjectContent } from "../../types";

export default {
  title: "LE App",
  theme: "dark",
  tags: ["flutter", "dotnet", "firebase", "sqlserver"],
  videoBorder: false,
  description:
    "LE App es la aplicación móvil oficial de los Liceos del Ejército Nacional, construida en Flutter para personal administrativo y estudiantes: noticias institucionales, avisos con notificaciones push, carnet digital con código QR, un asistente virtual y perfil de usuario.<br/><br/>Desarrollé la app completa con arquitectura Feature-First + Clean Architecture (Riverpod, GoRouter, GetIt), consumiendo un backend en C#/.NET y SQL Server, con notificaciones push de punta a punta vía Firebase Cloud Messaging, autenticación con Google y credenciales, y un endurecimiento de seguridad y accesibilidad sobre toda la aplicación.",
  components: [
    {
      type: "media",
      props: {
        type: "image",
        src: leapp0,
        alt: "Presentación de LE App",
        caption: "Nuestra app institucional",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: leapp1,
        alt: "Inicio de sesión de LE App",
        caption: "Inicio de sesión",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: leapp2,
        alt: "Feed de noticias institucionales",
        caption: "Noticias institucionales",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: leapp3,
        alt: "Carnet digital con código QR",
        caption: "Carnet digital con QR",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: leapp4,
        alt: "Chat con el asistente virtual Emily",
        caption: "Asistente virtual",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: leapp5,
        alt: "Perfil de usuario",
        caption: "Perfil de usuario",
      },
    },
  ],
} as const satisfies ProjectContent;
