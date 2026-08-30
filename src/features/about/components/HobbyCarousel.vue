<script setup lang="ts" generic="T">
import { computed, onMounted, onUnmounted, ref, watch } from "vue";
import ButtonRound from "../../../components/ButtonRound.vue";
import ArrowRight from "../../../components/icons/ArrowRight.vue";

const AUTOPLAY_INTERVAL_MS = 4000;

const props = defineProps<{
  items: T[];
  pauseAutoplay?: boolean;
}>();

const activeIndex = ref(0);
const isPaused = ref(false);
const total = computed(() => props.items.length);
let autoplayTimer: ReturnType<typeof setInterval> | null = null;

const goTo = (index: number) => {
  if (total.value === 0) return;
  activeIndex.value = ((index % total.value) + total.value) % total.value;
};

const next = () => goTo(activeIndex.value + 1);
const prev = () => goTo(activeIndex.value - 1);

const offsetFor = (index: number) => {
  if (total.value === 0) return 0;
  let diff = index - activeIndex.value;
  const half = total.value / 2;
  if (diff > half) diff -= total.value;
  if (diff < -half) diff += total.value;
  return diff;
};

const handleMouseEnter = () => {
  isPaused.value = true;
};

const handleMouseLeave = () => {
  isPaused.value = false;
};

onMounted(() => {
  autoplayTimer = setInterval(() => {
    if (isPaused.value || props.pauseAutoplay || total.value <= 1) return;
    next();
  }, AUTOPLAY_INTERVAL_MS);
});

onUnmounted(() => {
  if (autoplayTimer) clearInterval(autoplayTimer);
});

watch(
  () => props.items,
  () => {
    activeIndex.value = 0;
  },
);
</script>

<template>
  <div class="hobby-carousel" v-if="total > 0" @mouseenter="handleMouseEnter" @mouseleave="handleMouseLeave">
    <div class="hobby-carousel-viewport">
      <div class="hobby-carousel-track">
        <div
          v-for="(item, index) in items"
          :key="index"
          class="hobby-carousel-item"
          :class="{
            'hobby-carousel-item-active': offsetFor(index) === 0,
            'hobby-carousel-item-hidden': Math.abs(offsetFor(index)) > 2,
          }"
          :style="{ '--offset': offsetFor(index) }"
          @click="goTo(index)"
        >
          <slot :item="item" :active="offsetFor(index) === 0" :select="() => goTo(index)"></slot>
        </div>
      </div>
    </div>

    <div class="hobby-carousel-controls" v-if="total > 1">
      <ButtonRound variant="border" size="sm" @click="prev" aria-label="Previous">
        <ArrowRight class="hobby-carousel-arrow hobby-carousel-arrow-prev" />
      </ButtonRound>

      <div class="hobby-carousel-counter">
        <span>{{ String(activeIndex + 1).padStart(2, "0") }}</span>
        <span class="hobby-carousel-counter-sep">/</span>
        <span>{{ String(total).padStart(2, "0") }}</span>
      </div>

      <ButtonRound variant="border" size="sm" @click="next" aria-label="Next">
        <ArrowRight class="hobby-carousel-arrow" />
      </ButtonRound>
    </div>

    <div class="hobby-carousel-dots" v-if="total > 1">
      <button
        v-for="(_, index) in items"
        :key="index"
        class="hobby-carousel-dot"
        :class="{ 'hobby-carousel-dot-active': index === activeIndex }"
        @click="goTo(index)"
        :aria-label="`Go to item ${index + 1}`"
      ></button>
    </div>
  </div>
</template>

<style scoped lang="scss">
.hobby-carousel {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--space-lg);
  width: 100%;

  &-viewport {
    width: 100%;
    display: flex;
    justify-content: center;
    overflow: visible;
  }

  &-track {
    position: relative;
    width: 100%;
    max-width: 260px;
    height: 400px;

    @include mixins.mq("md") {
      max-width: 280px;
      height: 430px;
    }
  }

  &-item {
    position: absolute;
    inset: 0;
    margin: 0 auto;
    width: 100%;
    cursor: pointer;
    transition:
      transform 0.4s var(--ease-power2-out),
      opacity 0.4s var(--ease-power2-out);
    transform: translateX(calc(var(--offset) * 62%)) scale(calc(1 - min(abs(var(--offset)), 2) * 0.14));
    opacity: calc(1 - min(abs(var(--offset)), 2) * 0.45);
    z-index: calc(10 - abs(var(--offset)));

    &-active {
      cursor: default;
    }

    &-hidden {
      opacity: 0;
      pointer-events: none;
    }
  }

  &-controls {
    display: flex;
    align-items: center;
    gap: var(--space-md);
  }

  &-counter {
    font-size: var(--font-size-sm);
    font-weight: 700;
    letter-spacing: 0.04em;
    color: var(--color-text-300);
    min-width: 48px;
    text-align: center;

    &-sep {
      margin: 0 2px;
      opacity: 0.6;
    }
  }

  &-arrow {
    width: 100%;
    transform: rotate(0deg);

    &-prev {
      transform: rotate(180deg);
    }
  }

  &-dots {
    display: flex;
    align-items: center;
    gap: var(--space-xs);
  }

  &-dot {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    border: none;
    padding: 0;
    background-color: var(--color-grayscale-500);
    cursor: pointer;
    transition:
      background-color 0.2s ease-in-out,
      width 0.2s ease-in-out;

    &-active {
      width: 24px;
      border-radius: 4px;
      background-color: var(--color-orange-400);
    }
  }
}
</style>
