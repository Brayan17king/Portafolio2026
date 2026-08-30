<script setup lang="ts">
import { computed, onBeforeUnmount, ref } from "vue";
import Play from "../../../components/icons/Play.vue";
import Pause from "../../../components/icons/Pause.vue";
import { useNowPlaying } from "../composables/useNowPlaying";

const props = withDefaults(
  defineProps<{
    artist: string;
    songTitle: string;
    genre?: string;
    previewUrl: string;
    coverUrl: string;
    active?: boolean;
  }>(),
  { active: true },
);

const emit = defineEmits<{
  select: [];
}>();

const RADIUS = 48;
const CIRCUMFERENCE = 2 * Math.PI * RADIUS;

const audioRef = ref<HTMLAudioElement | null>(null);
const isPlaying = ref(false);
const progress = ref(0);
const { requestPlay, clear } = useNowPlaying();

const dashOffset = computed(() => CIRCUMFERENCE * (1 - progress.value));
const sleeveStyle = computed(() => ({ backgroundImage: `url(${props.coverUrl})` }));

const togglePlay = async () => {
  // This card is only peeking beside the active one — bring it into focus
  // instead of playing it out from under the user.
  if (!props.active) {
    emit("select");
    return;
  }

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
    <div class="music-card-stage">
      <div class="music-card-sleeve" :style="sleeveStyle"></div>

      <div class="music-card-vinyl" :class="{ 'music-card-vinyl-spinning': isPlaying }" @click.stop="togglePlay">
        <svg class="music-card-vinyl-ring" viewBox="0 0 100 100">
          <circle class="music-card-vinyl-ring-track" cx="50" cy="50" r="48" />
          <circle
            class="music-card-vinyl-ring-progress"
            cx="50"
            cy="50"
            r="48"
            :stroke-dasharray="CIRCUMFERENCE"
            :stroke-dashoffset="dashOffset"
          />
        </svg>

        <div class="music-card-vinyl-disc">
          <div class="music-card-vinyl-label">
            <img :src="coverUrl" :alt="artist" class="music-card-vinyl-art" loading="lazy" />
          </div>
          <div class="music-card-vinyl-hole"></div>
        </div>

        <button class="music-card-vinyl-play" type="button" :aria-label="songTitle">
          <Pause v-if="isPlaying" class="music-card-vinyl-play-icon" />
          <Play v-else class="music-card-vinyl-play-icon music-card-vinyl-play-icon-play" />
        </button>
      </div>
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
  background: radial-gradient(circle at 50% 30%, #2a261e 0%, var(--color-black-400) 68%, #131109 100%);
  color: var(--color-white-400);
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: 0%;
    left: 50%;
    width: 260px;
    height: 260px;
    transform: translateX(-50%);
    background: radial-gradient(circle, rgba(255, 132, 0, 0.14) 0%, rgba(255, 132, 0, 0) 70%);
    pointer-events: none;
  }

  &-stage {
    position: relative;
    width: 208px;
    height: 208px;
    flex-shrink: 0;
  }

  &-sleeve {
    position: absolute;
    right: -6px;
    bottom: -6px;
    width: 128px;
    height: 128px;
    border-radius: var(--radius-sm);
    background-size: cover;
    background-position: center;
    transform: rotate(11deg);
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.5);
    filter: brightness(0.5) saturate(1.15);

    &::after {
      content: "";
      position: absolute;
      inset: 0;
      border-radius: inherit;
      border: 1px solid rgba(255, 255, 255, 0.08);
    }
  }

  &-vinyl {
    position: absolute;
    top: 2px;
    left: 2px;
    width: 190px;
    height: 190px;
    cursor: pointer;
    transform: rotate(-8deg);
    transition: transform 0.4s var(--ease-power2-out);

    &-spinning {
      .music-card-vinyl-disc {
        animation: music-card-spin 4.5s linear infinite;
      }
    }

    &-ring {
      position: absolute;
      inset: 0;
      width: 100%;
      height: 100%;
      transform: rotate(-90deg);

      &-track {
        fill: none;
        stroke: rgba(255, 255, 255, 0.1);
        stroke-width: 1.5;
      }

      &-progress {
        fill: none;
        stroke: var(--color-orange-400);
        stroke-width: 1.5;
        stroke-linecap: round;
        transition: stroke-dashoffset 0.15s linear;
      }
    }

    &-disc {
      position: absolute;
      inset: 10px;
      border-radius: 50%;
      background:
        repeating-radial-gradient(circle at 50% 50%, rgba(255, 255, 255, 0.05) 0, rgba(255, 255, 255, 0.05) 1px, transparent 1px, transparent 5px),
        radial-gradient(circle at 34% 28%, rgba(255, 255, 255, 0.16), transparent 55%),
        #0c0c0c;
      box-shadow:
        0 10px 24px rgba(0, 0, 0, 0.55),
        inset 0 0 0 1px rgba(255, 255, 255, 0.06);
      display: flex;
      align-items: center;
      justify-content: center;
    }

    &-label {
      position: relative;
      width: 44%;
      height: 44%;
      border-radius: 50%;
      overflow: hidden;
      box-shadow: 0 0 0 2px rgba(255, 255, 255, 0.12);
    }

    &-art {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    &-hole {
      position: absolute;
      width: 10px;
      height: 10px;
      border-radius: 50%;
      background-color: var(--color-black-400);
      border: 2px solid rgba(255, 255, 255, 0.25);
    }

    &-play {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%) rotate(8deg);
      width: 46px;
      height: 46px;
      border-radius: 50%;
      border: none;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      overflow: hidden;
      background-color: rgba(0, 0, 0, 0.6);
      backdrop-filter: blur(2px);
      z-index: 2;
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
    position: relative;
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
