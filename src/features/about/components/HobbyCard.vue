<script setup lang="ts">
import { computed, ref } from "vue";
import { t } from "../../../i18n/utils/translate";
import HobbyFlipCard from "./HobbyFlipCard.vue";
import StarRating from "./StarRating.vue";
import Play from "../../../components/icons/Play.vue";
import TrailerModal from "./TrailerModal.vue";

const props = defineProps<{
  eyebrow?: string;
  badge?: string;
  title: string;
  subtitle?: string;
  footer?: string;
  rating?: number;
  body?: string;
  coverUrl?: string;
  trailerKey?: string;
}>();

const hasBack = computed(() => !!props.body);
const showTrailer = ref(false);
</script>

<template>
  <HobbyFlipCard v-if="hasBack">
    <template #front>
      <div class="hobby-card">
        <img v-if="coverUrl" :src="coverUrl" :alt="title" class="hobby-card-cover" loading="lazy" />
        <div class="hobby-card-cover hobby-card-cover-fallback" v-else></div>

        <div class="hobby-card-top">
          <span class="hobby-card-eyebrow" v-if="eyebrow">{{ eyebrow }}</span>
          <span class="hobby-card-badge" v-if="badge">{{ badge }}</span>
        </div>

        <div class="hobby-card-scrim">
          <div class="hobby-card-content">
            <p class="hobby-card-title">{{ title }}</p>
            <p class="hobby-card-subtitle" v-if="subtitle">{{ subtitle }}</p>
            <button v-if="trailerKey" class="hobby-card-trailer" type="button" @click.stop="showTrailer = true">
              <Play class="hobby-card-trailer-icon" />
              {{ t("hobby-watch-trailer") }}
            </button>
            <div class="hobby-card-footer">
              <span class="hobby-card-footer-pill" v-if="footer">{{ footer }}</span>
              <StarRating v-if="rating" :rating="rating" class="hobby-card-footer-rating" />
            </div>
          </div>
        </div>
      </div>
    </template>
    <template #back>
      <div class="hobby-card hobby-card-back">
        <p class="hobby-card-back-title">{{ title }}</p>
        <p class="hobby-card-back-body">{{ body }}</p>
      </div>
    </template>
  </HobbyFlipCard>

  <div class="hobby-card hobby-card-static" v-else>
    <img v-if="coverUrl" :src="coverUrl" :alt="title" class="hobby-card-cover" loading="lazy" />
    <div class="hobby-card-cover hobby-card-cover-fallback" v-else></div>

    <div class="hobby-card-top">
      <span class="hobby-card-eyebrow" v-if="eyebrow">{{ eyebrow }}</span>
      <span class="hobby-card-badge" v-if="badge">{{ badge }}</span>
    </div>

    <div class="hobby-card-scrim">
      <div class="hobby-card-content">
        <p class="hobby-card-title">{{ title }}</p>
        <p class="hobby-card-subtitle" v-if="subtitle">{{ subtitle }}</p>
      </div>
    </div>
  </div>

  <TrailerModal v-if="showTrailer && trailerKey" :video-key="trailerKey" :title="title" @close="showTrailer = false" />
</template>

<style scoped lang="scss">
.hobby-card {
  position: relative;
  width: 100%;
  height: 100%;
  border-radius: var(--radius-lg);
  border: var(--stroke-sm) solid rgba(255, 255, 255, 0.1);
  background-color: var(--color-black-400);
  color: var(--color-white-400);
  box-shadow: 0 16px 32px rgba(0, 0, 0, 0.35);
  overflow: hidden;

  &-cover {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;

    &-fallback {
      background: linear-gradient(135deg, #2b2822 0%, var(--color-black-400) 100%);
    }
  }

  &-top {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: var(--space-sm) var(--space-md);
    font-size: var(--font-size-sm);
    font-weight: 700;
    z-index: 2;
  }

  &-eyebrow {
    background-color: rgba(0, 0, 0, 0.55);
    backdrop-filter: blur(4px);
    padding: 2px var(--space-xs);
    border-radius: var(--radius-sm);
  }

  &-badge {
    background-color: var(--color-orange-400);
    color: var(--color-white-400);
    border-radius: var(--radius-sm);
    padding: 2px var(--space-xs);
    font-size: var(--font-size-xs);
  }

  &-scrim {
    position: absolute;
    inset: 0;
    display: flex;
    align-items: flex-end;
    background: linear-gradient(to bottom, rgba(0, 0, 0, 0) 40%, rgba(0, 0, 0, 0.92) 100%);
    z-index: 1;
  }

  &-content {
    width: 100%;
    padding: var(--space-md);
    display: flex;
    flex-direction: column;
    gap: var(--space-xxs);
  }

  &-title {
    font-size: var(--font-size-lg);
    font-weight: 700;
    text-shadow: 0 1px 4px rgba(0, 0, 0, 0.5);
  }

  &-subtitle {
    font-size: var(--font-size-sm);
    color: rgba(255, 255, 255, 0.65);
  }

  &-trailer {
    position: relative;
    z-index: 2;
    align-self: flex-start;
    display: flex;
    align-items: center;
    gap: var(--space-xs);
    margin-top: var(--space-xs);
    padding: var(--space-xs) var(--space-md);
    border-radius: var(--radius-sm);
    border: none;
    background-color: var(--color-orange-400);
    color: var(--color-white-400);
    font-size: var(--font-size-sm);
    font-weight: 700;
    cursor: pointer;
    --icon-color: var(--color-white-400);

    &-icon {
      width: var(--icon-size-sm);
      height: var(--icon-size-sm);
      flex-shrink: 0;
    }
  }

  &-footer {
    margin-top: var(--space-xs);
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: var(--space-xs);

    &-pill {
      font-size: var(--font-size-xs);
      font-weight: 700;
      padding: 2px var(--space-xs);
      border-radius: var(--radius-sm);
      border: var(--stroke-sm) solid rgba(255, 255, 255, 0.2);
      background-color: rgba(0, 0, 0, 0.4);
    }

    &-rating {
      margin-left: auto;
    }
  }

  &-back {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: var(--space-lg) var(--space-md);
    gap: var(--space-sm);
    background: linear-gradient(150deg, #262019 0%, var(--color-black-400) 100%);

    &-title {
      font-size: var(--font-size-md);
      font-weight: 700;
      color: var(--color-orange-400);
    }

    &-body {
      font-size: var(--font-size-md);
      line-height: 1.5;
    }
  }
}
</style>
