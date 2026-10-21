<script setup lang="ts">
import { highlights } from '~/data/site'

const root = ref<HTMLElement | null>(null)
useReveal(root)
</script>

<template>
  <section ref="root" class="relative z-10 -mt-6 sm:-mt-10">
    <div class="container-x grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      <div
        v-for="(h, i) in highlights"
        :key="h.title"
        data-reveal="up"
        :data-delay="i * 0.08"
        class="group rounded-3xl border border-cream-200 bg-white p-6 shadow-[0_20px_50px_-30px_rgba(16,41,26,0.35)] transition duration-500 hover:-translate-y-1 hover:border-leaf-400/50"
      >
        <span class="grid size-12 place-items-center rounded-2xl bg-forest-900 text-leaf-300 transition group-hover:bg-leaf-500 group-hover:text-white">
          <AppIcon :name="h.icon" :size="22" />
        </span>
        <h3 class="mt-5 font-sans text-base font-bold text-forest-900">{{ h.title }}</h3>
        <p class="mt-1.5 text-sm leading-relaxed text-forest-900/65">{{ h.text }}</p>
      </div>
    </div>
  </section>
</template>
