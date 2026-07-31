<script setup lang="ts">
import { computed, onBeforeUnmount, ref, watchEffect } from "vue";
import gsap from "gsap";
import { locale } from "../../../i18n/store";
import { t } from "../../../i18n/utils/translate";
import { BREAKPOINTS } from "../../../utils/sizes";
import { Vector3 } from "three";
import ProjectedElement from "../../../components/ProjectedElement.vue";
import TechIcon from "../../../components/icons/TechIcon.vue";

const point = new Vector3(0.75, 2.75, 6.75);

const wrapperRef = ref<HTMLDivElement | null>(null);
let matchMedia: gsap.MatchMedia | null = null;

const emit = defineEmits<{
  "timeline:created": [timeline: gsap.core.Timeline];
}>();

watchEffect((onInvalidate) => {
  const wrapperEl = wrapperRef.value;
  if (!wrapperEl) return;

  if (matchMedia) {
    matchMedia.revert();
    matchMedia = null;
  }

  matchMedia = gsap.matchMedia();

  matchMedia.add(
    {
      isMobile: `(max-width: ${BREAKPOINTS.md - 1}px)`,
      isDesktop: `(min-width: ${BREAKPOINTS.md}px)`,
    },
    (context) => {
      const { conditions } = context;
      const { isMobile } = conditions as { isMobile: boolean; isDesktop: boolean };

      const tl = gsap.timeline({ paused: true });

      if (!isMobile) {
        tl.fromTo(
          wrapperEl,
          { clipPath: "inset(0% 100% 0% 0%)" },
          { clipPath: "inset(0% 0% 0% 0%)", duration: 0.4, ease: "none" },
          0,
        );
      } else {
        gsap.set(wrapperEl, { clipPath: "inset(0% 0% 0% 0%)" });
      }

      emit("timeline:created", tl);

      return () => {
        tl.kill();
      };
    },
  );

  onInvalidate(() => {
    if (matchMedia) {
      matchMedia.revert();
      matchMedia = null;
    }
  });
});

onBeforeUnmount(() => {
  if (matchMedia) {
    matchMedia.revert();
  }
});

interface TechItem {
  name: string;
  icon: string;
}

interface TechCategory {
  category: string;
  items: TechItem[];
}

const CATEGORIES_EN: TechCategory[] = [
  {
    category: "Frontend",
    items: [
      { name: "JavaScript", icon: "javascript" },
      { name: "TypeScript", icon: "typescript" },
      { name: "Vue", icon: "vuedotjs" },
    ],
  },
  {
    category: "Backend",
    items: [
      { name: "C#", icon: "csharp" },
      { name: ".NET Core", icon: "dotnet" },
      { name: "Node.js", icon: "nodedotjs" },
      { name: "Python", icon: "python" },
    ],
  },
  {
    category: "Mobile",
    items: [
      { name: "Flutter", icon: "flutter" },
      { name: "Dart", icon: "dart" },
      { name: "Android Studio", icon: "androidstudio" },
    ],
  },
  {
    category: "Data",
    items: [
      { name: "SQL Server", icon: "sqlserver" },
      { name: "PostgreSQL", icon: "postgresql" },
      { name: "MongoDB", icon: "mongodb" },
    ],
  },
  {
    category: "DevOps",
    items: [
      { name: "Git", icon: "git" },
      { name: "GitHub", icon: "github" },
      { name: "GitLab", icon: "gitlab" },
      { name: "Linux", icon: "linux" },
    ],
  },
];

const CATEGORIES_ES: TechCategory[] = [
  {
    category: "Frontend",
    items: [
      { name: "JavaScript", icon: "javascript" },
      { name: "TypeScript", icon: "typescript" },
      { name: "Vue", icon: "vuedotjs" },
    ],
  },
  {
    category: "Backend",
    items: [
      { name: "C#", icon: "csharp" },
      { name: ".NET Core", icon: "dotnet" },
      { name: "Node.js", icon: "nodedotjs" },
      { name: "Python", icon: "python" },
    ],
  },
  {
    category: "Móvil",
    items: [
      { name: "Flutter", icon: "flutter" },
      { name: "Dart", icon: "dart" },
      { name: "Android Studio", icon: "androidstudio" },
    ],
  },
  {
    category: "Datos",
    items: [
      { name: "SQL Server", icon: "sqlserver" },
      { name: "PostgreSQL", icon: "postgresql" },
      { name: "MongoDB", icon: "mongodb" },
    ],
  },
  {
    category: "DevOps",
    items: [
      { name: "Git", icon: "git" },
      { name: "GitHub", icon: "github" },
      { name: "GitLab", icon: "gitlab" },
      { name: "Linux", icon: "linux" },
    ],
  },
];

const categories = computed(() => {
  return locale.value === "en" ? CATEGORIES_EN : CATEGORIES_ES;
});
</script>

<template>
  <ProjectedElement :point="point">
    <div ref="wrapperRef" class="box-services">
      <div class="box-services-content">
        <p class="box-services-title">{{ t('services') }}</p>
        <div class="box-services-categories">
          <div
            class="box-services-category"
            v-for="cat in categories"
            :key="cat.category"
          >
            <p class="box-services-category-title">{{ cat.category }}</p>
            <div class="box-services-category-grid">
              <div
                class="box-services-item"
                v-for="item in cat.items"
                :key="item.name"
              >
                <div class="box-services-item-icon">
                  <TechIcon :name="item.icon" :size="16" />
                </div>
                <p class="box-services-item-name">{{ item.name }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </ProjectedElement>
</template>

<style scoped lang="scss">
.box-services {
  --line-length: min(48px, calc(var(--svw) * 5));

  position: absolute;
  bottom: var(--count-height);
  width: calc(100% - var(--space-outer) * 2);
  left: var(--space-outer);

  @include mixins.landscape {
    width: 480px;
    max-width: calc(var(--svw) * 37);
    padding-left: var(--line-length);
    position: relative;
    left: 0;
    bottom: 0;
    padding-top: 3px;
    transform: translate(0, -50%);
  }

  @include mixins.landscape-large {
    width: 420px;
    max-width: calc(var(--svw) * 36);
  }

  &::after,
  &::before {
    display: none;

    @include mixins.landscape {
      display: block;
    }
  }

  &::after {
    content: "";
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 0;
    width: 11px;
    height: 11px;
    background-color: var(--color-cyan-400);
    border-radius: 50%;
  }

  &::before {
    content: "";
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 0;
    height: 0;
    border-top: var(--stroke-sm) solid var(--color-cyan-400);

    @include mixins.landscape {
      width: var(--line-length);
    }
  }

  &-content {
    border: var(--stroke-sm) solid var(--color-cyan-400);
    border-radius: var(--radius-md);
    background: linear-gradient(to bottom, var(--color-hologram-top) 0%, var(--color-hologram-bottom) 100%);
    display: flex;
    flex-direction: column;
    gap: var(--space-xs);
    padding: var(--space-sm) var(--space-md);

    @include mixins.landscape {
      padding: var(--space-xs) var(--space-sm);
    }

    @include mixins.mq("md") {
      padding: var(--space-sm) var(--space-md);
    }
  }

  &-title {
    font-size: 11px;
    font-weight: 700;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    opacity: 0.88;

    @include mixins.landscape {
      font-size: var(--font-size-title-xxs);
    }

    @include mixins.landscape-large {
      font-size: var(--font-size-title-xs);
    }
  }

  &-categories {
    display: flex;
    flex-direction: column;
    gap: var(--space-xs);
  }

  &-category {
    display: flex;
    flex-direction: column;
    gap: 6px;

    &-title {
      font-size: 8px;
      text-transform: uppercase;
      letter-spacing: 0.12em;
      opacity: 0.62;

      @include mixins.mq("md") {
        font-size: 11px;
      }
    }

    &-grid {
      display: grid;
      grid-template-columns: repeat(2, minmax(0, 1fr));
      gap: 4px;

      @include mixins.mq("md") {
        grid-template-columns: repeat(3, minmax(0, 1fr));
      }
    }
  }

  &-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 4px;
    min-height: 56px;
      background: rgba(255, 255, 255, 0.025);
      border: 1px solid rgba(92, 224, 255, 0.12);
    border-radius: 11px;
    padding: 5px 4px 4px;
    transition: transform 0.2s ease, background 0.2s ease, border-color 0.2s ease;

    &:hover {
      transform: translateY(-1px);
        background: rgba(92, 224, 255, 0.06);
        border-color: rgba(92, 224, 255, 0.18);
    }

    &-icon {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 22px;
      height: 22px;
      border-radius: 8px;
        background: rgba(92, 224, 255, 0.06);
        border: 1px solid rgba(92, 224, 255, 0.1);
        box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.04);
    }

    &-name {
      font-size: 8px;
      line-height: 1.1;
      text-align: center;
      opacity: 0.82;
      white-space: normal;
      min-height: 2.2em;

      @include mixins.mq("md") {
        font-size: 11px;
      }
    }
  }
}
</style>