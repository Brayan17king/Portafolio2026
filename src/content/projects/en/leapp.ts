import leapp0 from "../../../assets/images/projects/leapp/leapp-0.webp";
import leapp1 from "../../../assets/images/projects/leapp/leapp-1.webp";
import type { ProjectContent } from "../../types";

export default {
  title: "LE App",
  theme: "dark",
  tags: ["flutter", "dotnet", "firebase", "sqlserver"],
  videoBorder: false,
  description:
    "LE App is the official mobile app for the Liceos del Ejército Nacional (a Colombian school network), built in Flutter for administrative staff and students: institutional news, push-notification announcements, a digital ID card with a QR code, a virtual assistant, and user profile management.<br/><br/>I built the entire app with a Feature-First + Clean Architecture approach (Riverpod, GoRouter, GetIt), consuming a C#/.NET and SQL Server backend, with end-to-end push notifications via Firebase Cloud Messaging, Google and credential-based authentication, and a full security and accessibility hardening pass across the app.",
  components: [
    // TODO(Brayan): swap these for real app screenshots and a walkthrough
    // video — these placeholders only show the app's visual identity.
    // Just overwrite these same files (same name/path):
    //   src/assets/images/projects/leapp/leapp-0.webp
    //   src/assets/images/projects/leapp/leapp-1.webp
    // and add a video at src/assets/videos/leapp.mp4 as the first component
    // (same pattern as cubewar.ts) if you want one leading the gallery.
    {
      type: "media",
      props: {
        type: "image",
        src: leapp0,
        alt: "LE App icon",
        caption: "Visual identity",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: leapp1,
        alt: "LE App logo",
        caption: "LE App",
      },
    },
  ],
} as const satisfies ProjectContent;
