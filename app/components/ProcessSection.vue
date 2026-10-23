<script setup lang="ts">
import { process } from '~/data/site'

const root = ref<HTMLElement | null>(null)
useReveal(root)
</script>

<template>
  <section ref="root" class="relative overflow-hidden bg-forest-900 py-24 text-white sm:py-32">
    <svg class="absolute -top-20 -right-24 size-112 text-white/4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" />
    </svg>
    <div class="container-x relative">
      <div class="max-w-2xl">
        <p data-reveal="fade" class="eyebrow text-leaf-300!">{{ process.eyebrow }}</p>
        <h2 data-reveal="up" class="section-title text-white!">{{ process.title }}</h2>
      </div>

      <ol class="mt-16 grid gap-10 md:grid-cols-5 md:gap-6">
        <li
          v-for="(step, i) in process.steps"
          :key="step.title"
          data-reveal="up"
          :data-delay="i * 0.1"
          class="relative"
        >
          <div class="flex items-center gap-4 md:flex-col md:items-start">
            <span class="grid size-14 shrink-0 place-items-center rounded-full border border-leaf-400/40 bg-forest-800 font-serif text-xl text-leaf-300">
              {{ String(i + 1).padStart(2, '0') }}
            </span>
            <span
              v-if="i < process.steps.length - 1"
              class="hidden h-px flex-1 bg-linear-to-r from-leaf-400/50 to-transparent md:absolute md:top-7 md:left-16 md:block md:w-[calc(100%-3rem)]"
            />
            <h3 class="font-sans text-lg font-bold md:mt-6">{{ step.title }}</h3>
          </div>
          <p class="mt-3 text-sm leading-relaxed text-white/65 md:pr-2">{{ step.text }}</p>
        </li>
      </ol>
    </div>
  </section>
</template>
