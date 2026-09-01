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
    "LE App is the official mobile app for the Liceos del Ejército Nacional (a Colombian school network), built in Flutter for administrative staff and students: institutional news, push-notification announcements, a digital ID card with a QR code, a virtual assistant, and user profile management.<br/><br/>I built the entire app with a Feature-First + Clean Architecture approach (Riverpod, GoRouter, GetIt), consuming a C#/.NET and SQL Server backend, with end-to-end push notifications via Firebase Cloud Messaging, Google and credential-based authentication, and a full security and accessibility hardening pass across the app.",
  components: [
    {
      type: "media",
      props: {
        type: "image",
        src: leapp0,
        alt: "LE App overview",
        caption: "Our institutional app",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: leapp1,
        alt: "LE App login screen",
        caption: "Login",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: leapp2,
        alt: "Institutional news feed",
        caption: "Institutional news",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: leapp3,
        alt: "Digital ID card with QR code",
        caption: "Digital ID card with QR",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: leapp4,
        alt: "Chat with Emily, the virtual assistant",
        caption: "Virtual assistant",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: leapp5,
        alt: "User profile",
        caption: "User profile",
      },
    },
  ],
} as const satisfies ProjectContent;
