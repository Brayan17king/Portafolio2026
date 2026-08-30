<script setup lang="ts">
import { onBeforeUnmount, onMounted } from "vue";
import { Howler } from "howler";
import { t } from "../../../i18n/utils/translate";
import Close from "../../../components/icons/Close.vue";

const props = defineProps<{
  videoKey: string;
  title: string;
}>();

const emit = defineEmits<{
  close: [];
}>();

const handleKeydown = (event: KeyboardEvent) => {
  if (event.key === "Escape") emit("close");
};

onMounted(() => {
  document.body.classList.add("trailer-modal-open");
  window.addEventListener("keydown", handleKeydown);
  // Duck the site's ambient sound while the trailer plays.
  Howler.mute(true);
});

onBeforeUnmount(() => {
  document.body.classList.remove("trailer-modal-open");
  window.removeEventListener("keydown", handleKeydown);
  Howler.mute(false);
});
</script>

<template>
  <Teleport to="body">
    <div class="trailer-modal" role="dialog" aria-modal="true" :aria-label="props.title" @click.self="emit('close')">
      <button class="trailer-modal-close" type="button" :aria-label="t('close')" @click="emit('close')">
        <Close class="trailer-modal-close-icon" />
      </button>

      <div class="trailer-modal-frame">
        <iframe
          :src="`https://www.youtube-nocookie.com/embed/${props.videoKey}?autoplay=1&rel=0&modestbranding=1`"
          :title="props.title"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  </Teleport>
</template>

<style scoped lang="scss">
.trailer-modal {
  position: fixed;
  inset: 0;
  z-index: var(--z-index-modal);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: var(--space-lg);
  background-color: rgba(10, 8, 4, 0.85);
  backdrop-filter: blur(4px);
  animation: trailer-modal-fade-in 0.2s ease-out;

  &-close {
    position: absolute;
    top: var(--space-lg);
    right: var(--space-lg);
    width: 44px;
    height: 44px;
    border-radius: 50%;
    border: var(--stroke-sm) solid rgba(255, 255, 255, 0.2);
    background-color: rgba(0, 0, 0, 0.4);
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    --icon-color: var(--color-white-400);

    &-icon {
      width: 18px;
      height: 18px;
    }
  }

  &-frame {
    position: relative;
    width: 100%;
    max-width: 1100px;
    aspect-ratio: 16 / 9;
    border-radius: var(--radius-lg);
    overflow: hidden;
    box-shadow: 0 24px 64px rgba(0, 0, 0, 0.5);

    iframe {
      position: absolute;
      inset: 0;
      width: 100%;
      height: 100%;
    }
  }
}

@keyframes trailer-modal-fade-in {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
</style>
