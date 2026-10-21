<script setup lang="ts">
import { areas, contact, cta, whatsappLink } from '~/data/site'

const root = ref<HTMLElement | null>(null)
useReveal(root)
</script>

<template>
  <section id="contact" ref="root" class="pb-24 sm:pb-32">
    <div class="container-x">
      <div class="relative isolate overflow-hidden rounded-[2.5rem] px-6 py-16 text-white sm:px-14 sm:py-20">
        <img src="/images/cta.jpg" alt="" class="absolute inset-0 -z-20 size-full object-cover" loading="lazy">
        <div class="absolute inset-0 -z-10 bg-gradient-to-r from-forest-950/95 via-forest-950/80 to-forest-950/40" />

        <div class="grid items-center gap-12 lg:grid-cols-[1.3fr_1fr]">
          <div>
            <h2 data-reveal="up" class="text-3xl leading-tight font-semibold sm:text-5xl">{{ cta.title }}</h2>
            <p data-reveal="up" class="mt-5 max-w-xl text-lg text-white/80">{{ cta.text }}</p>
            <div data-reveal="up" class="mt-9 flex flex-wrap gap-3">
              <a :href="whatsappLink()" target="_blank" rel="noopener" class="btn-wa !px-7 !py-4 text-base">
                <BrandIcon name="whatsapp" :size="20" />
                {{ cta.button }}
              </a>
              <a :href="contact.phoneHref" class="btn-ghost !px-7 !py-4 text-base">
                <AppIcon name="phone" :size="18" />
                {{ contact.phoneDisplay }}
              </a>
            </div>
          </div>

          <div data-reveal="right" class="rounded-3xl border border-white/15 bg-white/10 p-7 backdrop-blur-md">
            <p class="eyebrow !text-leaf-300">{{ areas.eyebrow }}</p>
            <p class="mt-3 font-serif text-2xl">{{ areas.title }}</p>
            <ul class="mt-6 flex flex-wrap gap-2">
              <li
                v-for="p in areas.places"
                :key="p"
                class="flex items-center gap-1.5 rounded-full bg-white/10 px-3.5 py-1.5 text-sm"
              >
                <AppIcon name="pin" :size="14" class="text-leaf-300" />
                {{ p }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
