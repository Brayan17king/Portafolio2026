<script setup lang="ts">
import { computed } from "vue";
import { TECH_ICONS } from "../../utils/techIcons";

const props = defineProps<{
  name: string;
  size?: number;
}>();

const normalizedName = computed(() => props.name.toLowerCase().replace(/\s+/g, ""));
const icon = computed(() => TECH_ICONS[normalizedName.value]);
</script>

<template>
  <svg
    :viewBox="icon?.viewBox ?? '0 0 24 24'"
    :width="props.size ?? 16"
    :height="props.size ?? 16"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <path v-for="(p, index) in icon?.paths ?? []" :key="index" :fill="p.fill" :d="p.d" />
  </svg>
</template>
