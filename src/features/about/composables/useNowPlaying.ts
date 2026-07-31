import { computed, ref } from "vue";
import { Howler } from "howler";

const currentAudio = ref<HTMLAudioElement | null>(null);
const isAnyPlaying = computed(() => currentAudio.value !== null);

export const useNowPlaying = () => {
  const requestPlay = (audio: HTMLAudioElement) => {
    if (currentAudio.value && currentAudio.value !== audio) {
      currentAudio.value.pause();
    }
    currentAudio.value = audio;
    Howler.mute(true);
  };

  const clear = (audio: HTMLAudioElement) => {
    if (currentAudio.value === audio) {
      currentAudio.value = null;
      Howler.mute(false);
    }
  };

  return { requestPlay, clear, isAnyPlaying };
};
