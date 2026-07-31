<script setup lang="ts">
import { computed, onBeforeUnmount, ref } from "vue";
import Play from "../../../components/icons/Play.vue";
import Pause from "../../../components/icons/Pause.vue";
import { useNowPlaying } from "../composables/useNowPlaying";

defineProps<{
  artist: string;
  songTitle: string;
  genre?: string;
  previewUrl: string;
  coverUrl: string;
}>();

const RADIUS = 46;
const CIRCUMFERENCE = 2 * Math.PI * RADIUS;

const audioRef = ref<HTMLAudioElement | null>(null);
const isPlaying = ref(false);
const progress = ref(0);
const { requestPlay, clear } = useNowPlaying();

const dashOffset = computed(() => CIRCUMFERENCE * (1 - progress.value));

const togglePlay = async () => {
  const audio = audioRef.value;
  if (!audio) return;

  if (isPlaying.value) {
    audio.pause();
    return;
  }

  requestPlay(audio);
  // Optimistic update: preload="none" means play() only resolves once the
  // clip has fetched enough data, which can take a moment. Flip the icon and
  // start the spin immediately so the click feels responsive.
  isPlaying.value = true;

  try {
    await audio.play();
  } catch {
    isPlaying.value = false;
    clear(audio);
  }
};

const handlePlay = () => {
  isPlaying.value = true;
};

const handlePause = () => {
  isPlaying.value = false;
  if (audioRef.value) clear(audioRef.value);
};

const handleTimeUpdate = () => {
  const audio = audioRef.value;
  if (!audio || !audio.duration) return;
  progress.value = audio.currentTime / audio.duration;
};

const handleEnded = () => {
  isPlaying.value = false;
  progress.value = 0;
  if (audioRef.value) clear(audioRef.value);
};

onBeforeUnmount(() => {
  if (audioRef.value) {
    audioRef.value.pause();
    clear(audioRef.value);
  }
});
</script>

<template>
  <div class="music-card">
    <div class="music-card-vinyl" @click.stop="togglePlay">
      <svg class="music-card-vinyl-ring" viewBox="0 0 100 100">
        <circle class="music-card-vinyl-ring-track" cx="50" cy="50" r="46" />
        <circle
          class="music-card-vinyl-ring-progress"
          cx="50"
          cy="50"
          r="46"
          :stroke-dasharray="CIRCUMFERENCE"
          :stroke-dashoffset="dashOffset"
        />
      </svg>

      <div class="music-card-vinyl-disc" :class="{ 'music-card-vinyl-disc-spinning': isPlaying }">
        <img :src="coverUrl" :alt="artist" class="music-card-vinyl-art" loading="lazy" />
        <div class="music-card-vinyl-hole"></div>
      </div>

      <button class="music-card-vinyl-play" type="button" :aria-label="songTitle">
        <Pause v-if="isPlaying" class="music-card-vinyl-play-icon" />
        <Play v-else class="music-card-vinyl-play-icon music-card-vinyl-play-icon-play" />
      </button>
    </div>

    <div class="music-card-info">
      <p class="music-card-artist">{{ artist }}</p>
      <p class="music-card-song">{{ songTitle }}</p>
      <span class="music-card-genre" v-if="genre">{{ genre }}</span>
    </div>

    <audio
      ref="audioRef"
      :src="previewUrl"
      preload="none"
      @play="handlePlay"
      @pause="handlePause"
      @timeupdate="handleTimeUpdate"
      @ended="handleEnded"
    ></audio>
  </div>
</template>

<style scoped lang="scss">
.music-card {
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: var(--space-md);
  padding: var(--space-lg) var(--space-md);
  border-radius: var(--radius-lg);
  border: var(--stroke-sm) solid rgba(255, 255, 255, 0.08);
  background: radial-gradient(circle at 50% 38%, #3c362b 0%, var(--color-black-400) 62%, #17150f 100%);
  color: var(--color-white-400);
  box-shadow: 0 16px 32px rgba(0, 0, 0, 0.4);
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: 6%;
    left: 50%;
    width: 220px;
    height: 220px;
    transform: translateX(-50%);
    background: radial-gradient(circle, rgba(255, 132, 0, 0.16) 0%, rgba(255, 132, 0, 0) 70%);
    pointer-events: none;
  }

  &-vinyl {
    position: relative;
    width: 176px;
    height: 176px;
    cursor: pointer;
    flex-shrink: 0;

    &-ring {
      position: absolute;
      inset: 0;
      width: 100%;
      height: 100%;
      transform: rotate(-90deg);

      &-track {
        fill: none;
        stroke: rgba(255, 255, 255, 0.12);
        stroke-width: 2;
      }

      &-progress {
        fill: none;
        stroke: var(--color-orange-400);
        stroke-width: 2;
        stroke-linecap: round;
        transition: stroke-dashoffset 0.15s linear;
      }
    }

    &-disc {
      position: absolute;
      inset: 14px;
      border-radius: 50%;
      overflow: hidden;
      background-color: #111;
      box-shadow: 0 8px 20px rgba(0, 0, 0, 0.5);
      display: flex;
      align-items: center;
      justify-content: center;

      &-spinning {
        animation: music-card-spin 4s linear infinite;
      }
    }

    &-art {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    &-hole {
      position: absolute;
      width: 14px;
      height: 14px;
      border-radius: 50%;
      background-color: var(--color-black-400);
      border: 2px solid rgba(255, 255, 255, 0.2);
    }

    &-play {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 48px;
      height: 48px;
      border-radius: 50%;
      border: none;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      overflow: hidden;
      background-color: rgba(0, 0, 0, 0.55);
      backdrop-filter: blur(2px);
      --icon-color: var(--color-white-400);

      &-icon {
        width: var(--icon-size-md);
        height: var(--icon-size-md);
        flex-shrink: 0;

        &-play {
          transform: translateX(2px);
        }
      }
    }
  }

  &-info {
    text-align: center;
    display: flex;
    flex-direction: column;
    gap: 2px;
  }

  &-artist {
    font-size: var(--font-size-lg);
    font-weight: 700;
  }

  &-song {
    font-size: var(--font-size-sm);
    color: rgba(255, 255, 255, 0.65);
  }

  &-genre {
    margin-top: var(--space-xs);
    align-self: center;
    font-size: var(--font-size-xs);
    font-weight: 700;
    background-color: var(--color-orange-400);
    border-radius: var(--radius-sm);
    padding: 2px var(--space-xs);
  }
}

@keyframes music-card-spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>
