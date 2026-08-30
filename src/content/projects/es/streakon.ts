import streakon0 from "../../../assets/images/projects/streakon/streakon-0.webp";
import streakon1 from "../../../assets/images/projects/streakon/streakon-1.webp";
import streakon2 from "../../../assets/images/projects/streakon/streakon-2.webp";
import streakon3 from "../../../assets/images/projects/streakon/streakon-3.webp";
import type { ProjectContent } from "../../types";

export default {
  title: "StreakOn",
  theme: "dark",
  tags: ["next", "node", "postgresql", "redis"],
  videoBorder: false,
  live: "https://www.streakon.app",
  description:
    "StreakOn ayuda a grupos pequeños a mantener la constancia en hábitos diarios mediante rachas compartidas y check-ins simples.<br/><br/>La app fue diseñada priorizando interacciones de baja fricción, usabilidad móvil y funciones sociales livianas, usando Next.js, Node.js, PostgreSQL y Redis.",
  components: [
    {
      type: "media",
      props: {
        type: "image",
        src: streakon0,
        alt: "Rachas individuales y en grupo",
        caption: "Rachas individuales y en grupo",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: streakon1,
        alt: "Progreso de la racha",
        caption: "Progreso de la racha",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: streakon2,
        alt: "Anima a tus amigos",
        caption: "Anima a tus amigos",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: streakon3,
        alt: "Flujo de invitación",
        caption: "Flujo de invitación",
      },
    },
  ],
} as const satisfies ProjectContent;