<script setup lang="ts">
// Iconițe SVG inline, desenate pe un grid de 24px cu contur.
const props = defineProps<{ name: string; size?: number }>()

const paths: Record<string, string> = {
  leaf: 'M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12',
  pin: 'M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z M12 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z',
  drop: 'M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7Z',
  camera: 'M23 7l-7 5 7 5V7Z M1 5h15v14H1z',
  phone: 'M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92Z',
  arrow: 'M5 12h14 M13 6l6 6-6 6',
  check: 'M20 6 9 17l-5-5',
  menu: 'M4 6h16 M4 12h16 M4 18h16',
  close: 'M18 6 6 18 M6 6l12 12',
  play: 'M6 4l14 8-14 8V4Z',
  pencil: 'M12 20h9 M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z',
  shovel: 'M2 22l7-7 M14.5 4.5l5 5 M12 7l5 5-4 4a3 3 0 0 1-4.24 0l-.76-.76a3 3 0 0 1 0-4.24Z M17.5 2.5l4 4',
  grass: 'M2 22h20 M5 22c0-6 2-10 2-10s1 4 1 10 M11 22c0-8 1-13 1-13s1 5 1 13 M16 22c0-5 2-9 2-9s1 4 1 9',
  path: 'M8 3 4 21 M16 3l4 18 M12 6v2 M12 11v2 M12 16v2',
  scissors: 'M6 9a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z M6 21a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z M20 4 8.12 15.88 M14.47 14.48 20 20 M8.12 8.12 12 12',
  clock: 'M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20Z M12 6v6l4 2',
}

const d = computed(() => (paths[props.name] ?? '').split(' M').map((p, i) => (i ? 'M' + p : p)))
</script>

<template>
  <svg
    :width="size ?? 20"
    :height="size ?? 20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="1.8"
    stroke-linecap="round"
    stroke-linejoin="round"
    aria-hidden="true"
  >
    <path v-for="(p, i) in d" :key="i" :d="p" />
  </svg>
</template>
