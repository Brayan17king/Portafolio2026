<script setup lang="ts">
import { computed } from "vue";

const props = defineProps<{
  rating: number;
  max?: number;
}>();

const max = computed(() => props.max ?? 5);
const fillPercent = computed(() => `${Math.max(0, Math.min(1, props.rating / max.value)) * 100}%`);
const stars = computed(() => "★".repeat(max.value));
</script>

<template>
  <div class="star-rating" :aria-label="`${rating} / ${max}`">
    <span class="star-rating-track">{{ stars }}</span>
    <span class="star-rating-fill" :style="{ width: fillPercent }">{{ stars }}</span>
    <span class="star-rating-value">{{ rating.toFixed(1) }}</span>
  </div>
</template>

<style scoped lang="scss">
.star-rating {
  position: relative;
  display: inline-flex;
  align-items: center;
  gap: var(--space-xxs);
  font-size: var(--font-size-sm);
  line-height: 1;

  &-track,
  &-fill {
    position: relative;
    letter-spacing: 2px;
  }

  &-track {
    color: rgba(255, 255, 255, 0.25);
  }

  &-fill {
    position: absolute;
    top: 0;
    left: 0;
    overflow: hidden;
    white-space: nowrap;
    color: var(--color-orange-400);
  }

  &-value {
    font-weight: 700;
    font-size: var(--font-size-xs);
    color: var(--color-white-400);
  }
}
</style>
