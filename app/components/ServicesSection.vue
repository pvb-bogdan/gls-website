<script setup lang="ts">
import { services, whatsappLink } from '~/data/site'

const root = ref<HTMLElement | null>(null)
useReveal(root)

const icons: Record<string, string> = {
  proiectare: 'pencil',
  amenajare: 'shovel',
  gazon: 'grass',
  irigatii: 'drop',
  alei: 'path',
  intretinere: 'scissors',
}
</script>

<template>
  <section id="servicii" ref="root" class="bg-cream-100 py-24 sm:py-32">
    <div class="container-x">
      <div class="flex flex-col justify-between gap-6 md:flex-row md:items-end">
        <div class="max-w-2xl">
          <p data-reveal="fade" class="eyebrow">Servicii</p>
          <h2 data-reveal="up" class="section-title">Tot ce are nevoie grădina ta, de la un singur om</h2>
        </div>
        <p data-reveal="up" class="max-w-md text-forest-900/70">
          Nu trebuie să cauți separat proiectant, echipă de montaj și firmă de întreținere. Ne ocupăm noi de tot.
        </p>
      </div>

      <div class="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <article
          v-for="(s, i) in services"
          :key="s.key"
          data-reveal="up"
          :data-delay="(i % 3) * 0.08"
          class="group relative flex flex-col overflow-hidden rounded-[2rem] bg-white shadow-[0_25px_60px_-40px_rgba(16,41,26,0.5)]"
        >
          <div class="relative aspect-[16/10] overflow-hidden">
            <img
              :src="s.image"
              :alt="s.title"
              class="size-full object-cover transition duration-700 group-hover:scale-110"
              loading="lazy"
            >
            <div class="absolute inset-0 bg-gradient-to-t from-forest-950/50 to-transparent" />
            <span class="absolute bottom-4 left-4 grid size-12 place-items-center rounded-2xl bg-white text-leaf-600 shadow-lg">
              <AppIcon :name="icons[s.key] ?? 'leaf'" :size="22" />
            </span>
          </div>
          <div class="flex flex-1 flex-col p-7">
            <h3 class="text-2xl font-semibold">{{ s.title }}</h3>
            <p class="mt-3 flex-1 leading-relaxed text-forest-900/70">{{ s.text }}</p>
            <a
              :href="whatsappLink(`Bună ziua! Mă interesează: ${s.title.toLowerCase()}. Putem discuta?`)"
              target="_blank"
              rel="noopener"
              class="mt-6 inline-flex items-center gap-2 text-sm font-bold text-leaf-600 transition group-hover:gap-3"
            >
              Cere o ofertă
              <AppIcon name="arrow" :size="16" />
            </a>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>
