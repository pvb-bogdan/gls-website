<script setup lang="ts">
// Forma ondulată de la baza hero-ului și din partea de sus a footer-ului.
defineProps<{ flip?: boolean; color?: string }>() // flip = oglindire orizontală
</script>

<template>
  <svg
    class="pointer-events-none block h-15 w-full sm:h-22.5 lg:h-30"
    :class="flip ? '-scale-x-100' : ''"
    viewBox="0 0 1440 120"
    preserveAspectRatio="none"
    aria-hidden="true"
  >
    <path
      :fill="color ?? 'currentColor'"
      d="M0 64c120-34 270-58 430-38 190 24 270 82 470 82 170 0 300-50 420-74 50-10 90-12 120-10v96H0Z"
    />
    <path
      :fill="color ?? 'currentColor'"
      opacity=".35"
      d="M0 40c160-30 300-36 470-8 200 34 300 70 480 64 180-6 330-60 490-70v94H0Z"
    />
  </svg>
</template>
