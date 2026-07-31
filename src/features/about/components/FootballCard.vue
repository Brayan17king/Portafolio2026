<script setup lang="ts">
import { ref } from "vue";
import { profile } from "../../../content/profile";

defineProps<{
  cardImageUrl: string;
  note?: string;
}>();

const flipped = ref(false);
</script>

<template>
  <div class="football-card-wrapper" @click="flipped = !flipped" role="button" tabindex="0">
    <div class="football-card-flip" :class="{ 'football-card-flip-flipped': flipped }">
      <div class="football-card football-card-front">
        <img :src="cardImageUrl" :alt="`Carta de ${profile.fullName}`" class="football-card-image" />
      </div>

      <div class="football-card football-card-back">
        <p class="football-card-back-title">Fútbol</p>
        <p class="football-card-back-body">{{ note }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.football-card-wrapper {
  width: 100%;
  height: 100%;
  cursor: pointer;
  perspective: 1400px;
}

.football-card-flip {
  position: relative;
  width: 100%;
  height: 100%;
  transition: transform 0.6s var(--ease-power2-out);
  transform-style: preserve-3d;

  &-flipped {
    transform: rotateY(180deg);
  }
}

.football-card {
  position: absolute;
  inset: 0;
  backface-visibility: hidden;
  display: flex;
  border-radius: var(--radius-lg);
  overflow: hidden;
  box-shadow: 0 16px 32px rgba(0, 0, 0, 0.35);

  &-front {
    align-items: center;
    justify-content: center;
    background-color: var(--color-black-400);
  }

  &-image {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }

  &-back {
    transform: rotateY(180deg);
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    gap: var(--space-sm);
    padding: var(--space-lg) var(--space-md);
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
}
</style>
