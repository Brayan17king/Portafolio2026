<script setup lang="ts">
import { computed, onMounted, onUnmounted, ref } from "vue";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Banner from "../../../components/Banner.vue";
import { t } from "../../../i18n/utils/translate";
import { locale } from "../../../i18n/store";
import { LOCALE_DEFAULT } from "../../../i18n/constants";
import { experience } from "../../../content/experience";
import { TECH_ICONS } from "../../../utils/techIcons";
import TechIcon from "../../../components/icons/TechIcon.vue";

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
      stack: entry.stack,
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
      <div class="experience-list" ref="listRef">
        <div class="experience-item" v-for="(item, index) in items" :key="index">
          <div class="experience-item-rail">
            <span class="experience-item-dot" :class="{ 'experience-item-dot-current': item.current }"></span>
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
            <ul class="experience-item-stack" v-if="item.stack.length">
              <li
                class="experience-item-stack-tag"
                v-for="tech in item.stack"
                :key="tech.name"
                :style="{ '--tech-color': `#${TECH_ICONS[tech.icon]?.hex ?? '5f5646'}` }"
              >
                <TechIcon :name="tech.icon" :size="13" />
                {{ tech.name }}
              </li>
            </ul>
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

  &-list {
    grid-column: 1 / 13;
    margin-top: var(--space-xxl);
    display: flex;
    flex-direction: column;

    @include mixins.mq("md") {
      grid-column: 1 / 10;
    }

    @include mixins.mq("lg") {
      grid-column: 3 / 11;
    }
  }

  &-item {
    display: grid;
    grid-template-columns: 24px 1fr;
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
      padding-top: 6px;

      &::after {
        content: "";
        position: absolute;
        top: 22px;
        bottom: calc(var(--space-xl) * -1);
        left: 50%;
        width: 2px;
        transform: translateX(-50%);
        background-color: var(--color-grayscale-500);
      }
    }

    &:last-child &-rail::after {
      display: none;
    }

    &-dot {
      width: 12px;
      height: 12px;
      border-radius: 50%;
      background-color: var(--color-orange-400);
      box-shadow: 0 0 0 4px var(--color-beige-400);
      z-index: 1;

      &-current {
        box-shadow:
          0 0 0 4px var(--color-beige-400),
          0 0 0 7px rgba(255, 132, 0, 0.25);
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
      color: var(--color-text-400);
    }

    &-tag {
      font-size: var(--font-size-xs);
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.06em;
      padding: 2px var(--space-xs);
      border-radius: var(--radius-sm);
      border: var(--stroke-sm) solid var(--color-grayscale-500);
      color: var(--color-text-300);
    }

    &-company {
      margin-top: var(--space-xs);
      display: flex;
      align-items: center;
      gap: var(--space-sm);
    }

    &-logo {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 28px;
      padding: 4px var(--space-sm);
      border-radius: var(--radius-sm);
      flex-shrink: 0;
      transition: transform 0.15s ease-in-out;

      // The logo's own color decides the chip: a dark (colored/black) mark
      // needs a light chip; a light (white) mark needs a dark one.
      &-dark {
        background-color: var(--color-white-400);
        border: var(--stroke-sm) solid var(--color-grayscale-500);
      }

      &-light {
        background-color: var(--color-black-400);
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
      color: var(--color-orange-400);
    }

    &-description {
      margin-top: var(--space-xs);
      font-size: var(--font-size-md);
      color: var(--color-text-300);
      line-height: 1.6;
      max-width: 42rem;
    }

    &-stack {
      display: flex;
      flex-wrap: wrap;
      gap: var(--space-xs);
      margin-top: var(--space-sm);
      list-style: none;

      &-tag {
        display: inline-flex;
        align-items: center;
        gap: 5px;
        font-size: var(--font-size-xs);
        font-weight: 700;
        letter-spacing: 0.01em;
        padding: 3px var(--space-sm);
        border-radius: var(--radius-sm);
        color: var(--tech-color);
        background-color: color-mix(in srgb, var(--tech-color) 10%, var(--color-beige-400));
        border: var(--stroke-sm) solid color-mix(in srgb, var(--tech-color) 35%, transparent);
      }
    }
  }
}
</style>
