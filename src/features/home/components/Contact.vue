<script setup lang="ts">
import { computed, onMounted, onUnmounted, ref } from "vue";
import { transitions } from "../../../animations";
import { t } from "../../../i18n/utils/translate";
import Social from "../../../components/Social.vue";
import Button from "../../../components/Button.vue";
import { profile } from "../../../content/profile";
import { locale } from "../../../i18n/store";

const contactElement = ref<HTMLElement | null>(null);

const currentCvUrl = computed(() => {
  if (locale.value === "es") {
    return "https://canva.link/97zgl3clufbqilh";
  }

  return "https://canva.link/1x4ecf7py012oaw";
});

onMounted(() => {
  if (contactElement.value) {
    transitions.contact.setup(contactElement.value);
  }
});

onUnmounted(() => {
  transitions.contact.destroy();
});
</script>

<template>
  <div class="contact grid" ref="contactElement">
    <div class="contact-content">
      <p class="contact-eyebrow">{{ t('contact') }}</p>
      <h2 class="contact-title" v-html="t('lets-work-together')"></h2>
      <p class="contact-copy">
        {{ t('contact-copy') }}
      </p>
      <div class="contact-actions">
        <Button
          renderAs="a"
          variant="accent"
          size="md"
          :href="`mailto:${profile.email}`"
          external
          data-cursor="circle-white"
          data-sound="click"
          data-hoversound="hover"
        >
          {{ t('get-in-touch') }}
        </Button>
        <Button
          renderAs="a"
          variant="accent"
          size="md"
          :href="currentCvUrl"
          target="_blank"
          rel="noopener noreferrer"
          data-cursor="circle-white"
          data-sound="click"
          data-hoversound="hover"
        >
          {{ t('view-cv') }}
        </Button>
      </div>
      <Social variant="background" />
    </div>
  </div>
</template>

<style scoped lang="scss">
.contact {
  width: 100%;
  max-width: calc(var(--svw) * 100);
  overflow: hidden;
  min-height: calc(var(--lvh) * 100);
  padding: var(--space-outer);
  padding-top: var(--space-lg);

  @include mixins.mq("md") {
    padding-top: var(--space-xxl);
  }

  &-content {
    position: relative;
    padding-top: var(--space-md);
    grid-column: 1 / 13;
    display: flex;
    flex-direction: column;
    gap: var(--space-md);
    align-items: flex-start;

    @include mixins.mq("sm") {
      grid-column: 1 / 8;
    }

    @include mixins.mq("md") {
      gap: var(--space-xl);
      grid-column: 1 / 6;
      padding-top: var(--space-lg);
    }

    @include mixins.mq("lg") {
      grid-column: 2 / 6;
    }
  }

  &-eyebrow {
    font-size: var(--font-size-sm);
    font-weight: 700;
    letter-spacing: 0.24em;
    text-transform: uppercase;
    opacity: 0.75;
  }

  &-title {
    font-weight: 900;
    letter-spacing: 0.02em;
    font-size: var(--font-size-title-md);
    line-height: 0.95;

    @include mixins.mq("sm") {
      font-size: var(--font-size-title-lg);
    }

    @include mixins.mq("xl") {
      font-size: var(--font-size-title-xl);
    }
  }

  &-copy {
    max-width: 34rem;
    font-size: var(--font-size-md);
    line-height: 1.6;
    opacity: 0.9;
  }

  &-actions {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: var(--space-md);
    margin-top: var(--space-xs);
  }

  &-link {
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.12em;
  }
}
</style>
