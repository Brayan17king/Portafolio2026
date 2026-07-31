<script setup lang="ts">
import { ref } from "vue";
import { isTouch } from "../../../composables/useAgent";

const flipped = ref(false);

const handleClick = () => {
  if (!isTouch.value) return;
  flipped.value = !flipped.value;
};
</script>

<template>
  <div
    class="hobby-flip-card"
    :class="{ 'hobby-flip-card-flipped': flipped }"
    @click="handleClick"
    role="button"
    tabindex="0"
    @keydown.enter="handleClick"
  >
    <div class="hobby-flip-card-inner">
      <div class="hobby-flip-card-face hobby-flip-card-face-front">
        <slot name="front"></slot>
      </div>
      <div class="hobby-flip-card-face hobby-flip-card-face-back">
        <slot name="back"></slot>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.hobby-flip-card {
  perspective: 1200px;
  cursor: pointer;
  width: 100%;
  height: 100%;

  &-inner {
    position: relative;
    width: 100%;
    height: 100%;
    transition: transform 0.6s var(--ease-power2-out);
    transform-style: preserve-3d;
  }

  &-flipped &-inner {
    transform: rotateY(180deg);
  }

  @include mixins.hover {
    &:hover &-inner {
      transform: rotateY(180deg);
    }
  }

  &-face {
    position: absolute;
    inset: 0;
    backface-visibility: hidden;
    border-radius: var(--radius-lg);
    overflow: hidden;
    display: flex;
    flex-direction: column;

    &-back {
      transform: rotateY(180deg);
    }
  }
}
</style>
