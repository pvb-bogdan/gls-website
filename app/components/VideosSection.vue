<script setup lang="ts">
import { contact, videos } from '~/data/site'

const root = ref<HTMLElement | null>(null)
useReveal(root)

const playing = ref<string | null>(null)
// Până avem ID-urile reale, afișăm cadre din galerie care duc pe canal
const placeholders = ['/images/service-lawn.jpg', '/images/service-irrigation.jpg', '/images/service-landscaping.jpg', '/images/service-maintenance.jpg']
</script>

<template>
  <section ref="root" class="bg-cream-100 py-24 sm:py-32">
    <div class="container-x grid items-center gap-12 lg:grid-cols-[1fr_2fr]">
      <div>
        <p data-reveal="fade" class="eyebrow">{{ videos.eyebrow }}</p>
        <h2 data-reveal="up" class="section-title">{{ videos.title }}</h2>
        <p data-reveal="up" class="mt-5 text-forest-900/70">{{ videos.text }}</p>
        <a
          data-reveal="up"
          :href="contact.social.youtube"
          target="_blank"
          rel="noopener"
          class="btn mt-8 bg-[#ff0033] text-white hover:bg-[#d9002b]"
        >
          <BrandIcon name="youtube" :size="18" />
          Vezi canalul
        </a>
      </div>

      <div class="grid grid-cols-2 gap-4" :class="videos.shorts.length ? 'sm:grid-cols-3' : 'sm:grid-cols-4'">
        <template v-if="videos.shorts.length">
          <div
            v-for="(v, i) in videos.shorts.slice(0, 6)"
            :key="v.id"
            data-reveal="up"
            :data-delay="(i % 3) * 0.08"
            class="relative aspect-9/16 overflow-hidden rounded-3xl bg-forest-900"
            :class="i % 3 === 1 ? 'sm:translate-y-8' : ''"
          >
            <iframe
              v-if="playing === v.id"
              :src="`https://www.youtube-nocookie.com/embed/${v.id}?autoplay=1`"
              :title="v.title"
              class="size-full"
              allow="autoplay; encrypted-media; picture-in-picture"
              allowfullscreen
            />
            <button v-else class="group size-full" :aria-label="`Pornește: ${v.title}`" @click="playing = v.id">
              <img :src="`https://i.ytimg.com/vi/${v.id}/hqdefault.jpg`" :alt="v.title" class="size-full object-cover" loading="lazy">
              <span class="absolute inset-0 grid place-items-center bg-forest-950/20 transition group-hover:bg-forest-950/40">
                <span class="grid size-14 place-items-center rounded-full bg-white/90 text-forest-900"><AppIcon name="play" /></span>
              </span>
            </button>
          </div>
        </template>
        <template v-else>
          <a
            v-for="(src, i) in placeholders"
            :key="src"
            :href="contact.social.youtube + '/shorts'"
            target="_blank"
            rel="noopener"
            data-reveal="up"
            :data-delay="i * 0.08"
            class="group relative aspect-9/16 overflow-hidden rounded-3xl"
            :class="i % 2 ? 'sm:translate-y-8' : ''"
          >
            <img :src="src" alt="" class="size-full object-cover transition duration-700 group-hover:scale-110" loading="lazy">
            <span class="absolute inset-0 grid place-items-center bg-forest-950/30 transition group-hover:bg-forest-950/50">
              <span class="grid size-14 place-items-center rounded-full bg-white/90 text-forest-900 transition group-hover:scale-110">
                <AppIcon name="play" />
              </span>
            </span>
          </a>
        </template>
      </div>
    </div>
  </section>
</template>
