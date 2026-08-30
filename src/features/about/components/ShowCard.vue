<script setup lang="ts">
import { ref } from "vue";
import { isTouch } from "../../../composables/useAgent";
import StarRating from "./StarRating.vue";

defineProps<{
  eyebrow?: string;
  badge?: string;
  title: string;
  subtitle?: string;
  rating?: number;
  body?: string;
  coverUrl?: string;
}>();

const open = ref(false);

const handleClick = () => {
  if (!isTouch.value) return;
  open.value = !open.value;
};
</script>

<template>
  <div
    class="show-card"
    :class="{ 'show-card-open': open }"
    @click="handleClick"
    role="button"
    tabindex="0"
    @keydown.enter="handleClick"
  >
    <div class="show-card-spine">
      <span class="show-card-spine-label">{{ title }}</span>
    </div>

    <div class="show-card-inside">
      <p class="show-card-inside-title">{{ title }}</p>
      <p class="show-card-inside-body" v-if="body">{{ body }}</p>
    </div>

    <div class="show-card-cover">
      <img v-if="coverUrl" :src="coverUrl" :alt="title" class="show-card-cover-art" loading="lazy" />
      <div class="show-card-cover-art show-card-cover-art-fallback" v-else></div>

      <div class="show-card-cover-top">
        <span class="show-card-cover-eyebrow" v-if="eyebrow">{{ eyebrow }}</span>
        <span class="show-card-cover-badge" v-if="badge">{{ badge }}</span>
      </div>

      <div class="show-card-cover-scrim">
        <div class="show-card-cover-content">
          <p class="show-card-cover-title">{{ title }}</p>
          <p class="show-card-cover-subtitle" v-if="subtitle">{{ subtitle }}</p>
          <StarRating v-if="rating" :rating="rating" class="show-card-cover-rating" />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.show-card {
  position: relative;
  width: 100%;
  height: 100%;
  perspective: 1400px;
  cursor: pointer;
  border-radius: var(--radius-lg);
  overflow: hidden;
  box-shadow: 0 16px 32px rgba(0, 0, 0, 0.35);
  background-color: var(--color-black-400);

  &-spine {
    position: absolute;
    inset: 0 auto 0 0;
    width: 26px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: var(--space-sm) 0;
    background: linear-gradient(180deg, #211d16 0%, #0d0c0a 100%);
    border-right: var(--stroke-sm) solid rgba(255, 255, 255, 0.08);
    z-index: 1;

    &-label {
      writing-mode: vertical-rl;
      text-orientation: mixed;
      transform: rotate(180deg);
      font-size: var(--font-size-xs);
      font-weight: 700;
      letter-spacing: 0.04em;
      color: rgba(255, 255, 255, 0.55);
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      max-height: 100%;
    }
  }

  &-inside {
    position: absolute;
    inset: 0 0 0 26px;
    padding: var(--space-lg) var(--space-md);
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: var(--space-sm);
    background: linear-gradient(150deg, #262019 0%, var(--color-black-400) 100%);
    color: var(--color-white-400);

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

  &-cover {
    position: absolute;
    inset: 0 0 0 26px;
    transform-origin: left center;
    transform: rotateY(0deg);
    transition: transform 0.7s var(--ease-power2-out);
    backface-visibility: hidden;
    overflow: hidden;
    box-shadow: 6px 0 20px rgba(0, 0, 0, 0.4);
    z-index: 2;

    &-art {
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
      color: var(--color-white-400);
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
      color: var(--color-white-400);
      text-shadow: 0 1px 4px rgba(0, 0, 0, 0.5);
    }

    &-subtitle {
      font-size: var(--font-size-sm);
      color: rgba(255, 255, 255, 0.65);
    }

    &-rating {
      margin-top: var(--space-xs);
    }
  }

  &-open &-cover {
    transform: rotateY(-120deg);
  }

  @include mixins.hover {
    &:hover &-cover {
      transform: rotateY(-120deg);
    }
  }
}
</style>
