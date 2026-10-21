<script setup lang="ts">
import { about, contact } from '~/data/site'

const root = ref<HTMLElement | null>(null)
useReveal(root)
</script>

<template>
  <section id="despre" ref="root" class="py-24 sm:py-32">
    <div class="container-x grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
      <div data-reveal="left" class="relative mx-auto w-full max-w-md lg:max-w-none">
        <div class="absolute -top-6 -left-6 size-40 rounded-full bg-leaf-300/40 blur-2xl" />
        <img
          src="/images/about.jpg"
          alt="Mâinile unui grădinar ținând un arbust tânăr în ghiveci"
          class="relative aspect-4/5] w-full rounded-[2.5rem] object-cover shadow-2xl"
          loading="lazy"
        >
        <div class="absolute -right-4 -bottom-6 max-w-60 rounded-3xl bg-forest-900 p-5 text-white shadow-xl sm:-right-8">
          <p class="font-serif text-lg leading-snug italic">„O grădină bună se gândește înainte să se sape.”</p>
          <p class="mt-3 text-xs tracking-wider text-leaf-300 uppercase">{{ contact.name }}</p>
        </div>
      </div>

      <div>
        <p data-reveal="fade" class="eyebrow">{{ about.eyebrow }}</p>
        <h2 data-reveal="up" class="section-title">{{ about.title }}</h2>
        <div class="mt-7 space-y-4 text-base leading-relaxed text-forest-900/75 sm:text-lg">
          <p v-for="(p, i) in about.paragraphs" :key="i" data-reveal="up" :data-delay="0.05 * i">{{ p }}</p>
        </div>
        <ul class="mt-8 grid gap-3 sm:grid-cols-2">
          <li
            v-for="(pt, i) in about.points"
            :key="pt"
            data-reveal="up"
            :data-delay="0.06 * i"
            class="flex items-start gap-3 text-sm font-semibold text-forest-900"
          >
            <span class="mt-0.5 grid size-6 shrink-0 place-items-center rounded-full bg-leaf-500 text-white">
              <AppIcon name="check" :size="14" />
            </span>
            {{ pt }}
          </li>
        </ul>
        <div data-reveal="up" class="mt-10 flex flex-wrap items-center gap-4">
          <a :href="contact.social.youtube" target="_blank" rel="noopener" class="btn bg-forest-900 text-white hover:bg-forest-700">
            <BrandIcon name="youtube" :size="18" />
            Urmărește-ne pe YouTube
          </a>
          <span class="font-serif text-lg text-forest-900/70 italic">{{ about.signature }}</span>
        </div>
      </div>
    </div>
  </section>
</template>
