<script setup lang="ts">
import { computed, onMounted, onUnmounted, ref } from "vue";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Banner from "../../../components/Banner.vue";
import { t } from "../../../i18n/utils/translate";
import { locale } from "../../../i18n/store";
import { LOCALE_DEFAULT } from "../../../i18n/constants";
import { experience } from "../../../content/experience";

const currentLocale = computed(() => locale.value ?? LOCALE_DEFAULT);

const items = computed(() =>
  experience.map((entry) => {
    const loc = currentLocale.value;

    return {
      role: entry.role[loc],
      company: entry.company,
      companyUrl: entry.companyUrl,
      companyLogo: entry.companyLogo,
      logoTone: entry.logoTone,
      period: entry.period[loc],
      description: entry.description[loc],
      isProject: entry.type === "project",
      current: entry.current,
    };
  }),
);

const listRef = ref<HTMLDivElement | null>(null);
let batchTriggers: ScrollTrigger[] = [];

onMounted(() => {
  if (!listRef.value) return;

  const itemEls = Array.from(listRef.value.querySelectorAll<HTMLElement>(".experience-item"));

  batchTriggers = ScrollTrigger.batch(itemEls, {
    start: "top 85%",
    onEnter: (batch) => {
      gsap.to(batch, {
        opacity: 1,
        y: 0,
        duration: 0.5,
        stagger: 0.12,
        ease: "power2.out",
      });
    },
    once: true,
  });
});

onUnmounted(() => {
  batchTriggers.forEach((trigger) => trigger.kill());
  batchTriggers = [];
});
</script>

<template>
  <section class="experience">
    <div class="grid">
      <div class="experience-title">
        <Banner class="experience-title-banner" :copy="t('selected')" size="sm" />
        <h2 class="experience-title-copy">{{ t("experience") }}</h2>
        <p class="experience-title-description">{{ t("experience-copy") }}</p>
      </div>
    </div>

    <div class="grid">
      <div class="experience-screen">
        <span class="experience-screen-corner experience-screen-corner-tl"></span>
        <span class="experience-screen-corner experience-screen-corner-tr"></span>
        <span class="experience-screen-corner experience-screen-corner-bl"></span>
        <span class="experience-screen-corner experience-screen-corner-br"></span>

        <div class="experience-list" ref="listRef">
          <div class="experience-item" :class="{ 'experience-item-current': item.current }" v-for="(item, index) in items" :key="index">
            <div class="experience-item-rail">
              <span class="experience-item-node">{{ String(index + 1).padStart(2, "0") }}</span>
            </div>
            <div class="experience-item-card">
              <div class="experience-item-header">
                <p class="experience-item-role">{{ item.role }}</p>
                <span class="experience-item-tag" v-if="item.isProject">{{ t("experience-project") }}</span>
              </div>
              <div class="experience-item-company">
                <a
                  class="experience-item-logo"
                  :class="`experience-item-logo-${item.logoTone}`"
                  :href="item.companyUrl"
                  target="_blank"
                  rel="noopener noreferrer"
                  :aria-label="`${t('go-to')} ${item.company}`"
                  data-cursor="arrow-external"
                  data-sound="click"
                  data-hoversound="hover"
                >
                  <img :src="item.companyLogo" :alt="item.company" loading="lazy" />
                </a>
                <span class="experience-item-meta">{{ item.company }} · {{ item.period }}</span>
              </div>
              <p class="experience-item-description">{{ item.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.experience {
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: var(--color-beige-400);
  padding-top: var(--space-xl);
  padding-bottom: var(--space-xl);

  @include mixins.mq("md") {
    padding-top: var(--space-xxl);
    padding-bottom: var(--space-xxl);
  }

  &-title {
    grid-column: 1 / 13;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: var(--space-sm);

    @include mixins.mq("md") {
      grid-column: 1 / 10;
    }

    @include mixins.mq("lg") {
      grid-column: 3 / 11;
    }

    &-banner {
      margin-bottom: var(--space-xs);
    }

    &-copy {
      font-weight: 900;
      letter-spacing: 0.02em;
      font-size: var(--font-size-title-md);

      @include mixins.mq("sm") {
        font-size: var(--font-size-title-lg);
      }
    }

    &-description {
      max-width: 42rem;
      font-size: var(--font-size-md);
      color: var(--color-text-300);
      line-height: 1.6;
    }
  }

  &-screen {
    grid-column: 1 / 13;
    position: relative;
    margin-top: var(--space-xxl);
    background: linear-gradient(165deg, #0a1f33 0%, #071018 100%);
    border: var(--stroke-sm) solid rgba(52, 191, 255, 0.35);
    border-radius: var(--radius-lg);
    padding: var(--space-xl) var(--space-md);
    overflow: hidden;

    @include mixins.mq("sm") {
      padding: var(--space-xl);
    }

    @include mixins.mq("md") {
      grid-column: 1 / 10;
    }

    @include mixins.mq("lg") {
      grid-column: 3 / 11;
      padding: var(--space-xxl);
    }

    &::before {
      content: "";
      position: absolute;
      inset: 0;
      background: repeating-linear-gradient(to bottom, rgba(255, 255, 255, 0.025) 0px, rgba(255, 255, 255, 0.025) 1px, transparent 1px, transparent 3px);
      pointer-events: none;
    }

    &-corner {
      position: absolute;
      width: 16px;
      height: 16px;
      border: 2px solid var(--color-cyan-400);
      opacity: 0.7;

      &-tl {
        top: 10px;
        left: 10px;
        border-right: none;
        border-bottom: none;
      }

      &-tr {
        top: 10px;
        right: 10px;
        border-left: none;
        border-bottom: none;
      }

      &-bl {
        bottom: 10px;
        left: 10px;
        border-right: none;
        border-top: none;
      }

      &-br {
        bottom: 10px;
        right: 10px;
        border-left: none;
        border-top: none;
      }
    }
  }

  &-list {
    position: relative;
    display: flex;
    flex-direction: column;
  }

  &-item {
    display: grid;
    grid-template-columns: 36px 1fr;
    gap: var(--space-md);
    opacity: 0;
    transform: translateY(24px);

    @include mixins.mq("md") {
      gap: var(--space-lg);
    }

    &:not(:last-child) {
      padding-bottom: var(--space-xl);
    }

    &-rail {
      position: relative;
      display: flex;
      justify-content: center;
    }

    &-rail::after {
      content: "";
      position: absolute;
      top: 40px;
      bottom: calc(var(--space-xl) * -1);
      left: 50%;
      width: 0;
      border-left: 2px dashed rgba(52, 191, 255, 0.35);
      transform: translateX(-50%);
    }

    &:last-child &-rail::after {
      display: none;
    }

    &-node {
      position: relative;
      width: 36px;
      height: 36px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: #0a1f33;
      border: 2px solid var(--color-text-cyan-300);
      color: var(--color-text-cyan-400);
      font-family: "ProFontWindows", monospace;
      font-size: 11px;
      z-index: 1;
    }

    &-current &-node {
      border-color: var(--color-orange-400);
      color: #fff2e2;
      background-color: #2a1500;
      box-shadow:
        0 0 0 4px rgba(255, 132, 0, 0.18),
        0 0 14px rgba(255, 132, 0, 0.45);

      @media (prefers-reduced-motion: no-preference) {
        animation: experience-pulse 2.2s ease-in-out infinite;
      }
    }

    &-card {
      padding-bottom: var(--space-sm);
    }

    &-header {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      gap: var(--space-sm);
    }

    &-role {
      font-weight: 900;
      font-size: var(--font-size-lg);
      color: var(--color-white-400);
    }

    &-tag {
      font-family: "ProFontWindows", monospace;
      font-size: 9px;
      letter-spacing: 0.04em;
      text-transform: uppercase;
      padding: 3px var(--space-xs);
      border-radius: var(--radius-sm);
      color: var(--color-hologram-top);
      background-color: var(--color-text-cyan-300);
    }

    &-company {
      margin-top: var(--space-xs);
      display: flex;
      align-items: center;
      gap: var(--space-xs);
    }

    &-logo {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 30px;
      padding: 4px var(--space-sm);
      border-radius: var(--radius-sm);
      flex-shrink: 0;
      transition: transform 0.15s ease-in-out;

      // The logo's own color decides the chip: a dark (colored/black) mark
      // needs a light chip; a light (white) mark needs a dark one.
      &-dark {
        background-color: var(--color-white-400);
      }

      &-light {
        background-color: #071018;
        border: var(--stroke-sm) solid rgba(52, 191, 255, 0.3);
      }

      img {
        height: 100%;
        width: auto;
        object-fit: contain;
      }

      &:hover {
        transform: translateY(-1px);
      }
    }

    &-meta {
      font-size: var(--font-size-sm);
      font-weight: 700;
      color: var(--color-text-cyan-300);
    }

    &-description {
      margin-top: var(--space-xs);
      font-size: var(--font-size-md);
      color: rgba(225, 245, 255, 0.72);
      line-height: 1.6;
      max-width: 42rem;
    }
  }
}

@keyframes experience-pulse {
  0%,
  100% {
    box-shadow:
      0 0 0 4px rgba(255, 132, 0, 0.18),
      0 0 14px rgba(255, 132, 0, 0.45);
  }

  50% {
    box-shadow:
      0 0 0 7px rgba(255, 132, 0, 0.1),
      0 0 24px rgba(255, 132, 0, 0.7);
  }
}
</style>
