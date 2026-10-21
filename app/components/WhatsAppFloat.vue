<script setup lang="ts">
import { whatsappLink, whatsappTopics } from '~/data/site'

const open = ref(false)
</script>

<template>
  <div class="fixed right-4 bottom-4 z-50 flex flex-col items-end gap-3 sm:right-6 sm:bottom-6">
    <Transition
      enter-from-class="opacity-0 translate-y-3 scale-95"
      enter-active-class="transition duration-300 origin-bottom-right"
      leave-to-class="opacity-0 translate-y-3 scale-95"
      leave-active-class="transition duration-200 origin-bottom-right"
    >
      <div v-if="open" class="w-[min(20rem,calc(100vw-2rem))] overflow-hidden rounded-3xl bg-white shadow-2xl ring-1 ring-black/5">
        <div class="bg-[#075e54] px-5 py-4 text-white">
          <p class="font-bold">Grădina lui Șerban</p>
          <p class="text-xs text-white/75">De obicei răspundem în câteva minute</p>
        </div>
        <div class="space-y-2 bg-[#ece5dd] p-4">
          <p class="mb-3 max-w-[85%] rounded-2xl rounded-tl-sm bg-white px-3.5 py-2.5 text-sm text-forest-900 shadow-sm">
            Bună! 👋 Cu ce te putem ajuta?
          </p>
          <a
            v-for="t in whatsappTopics"
            :key="t.label"
            :href="whatsappLink(t.message)"
            target="_blank"
            rel="noopener"
            class="flex items-center justify-between rounded-xl bg-white px-4 py-2.5 text-sm font-semibold text-forest-900 transition hover:bg-[#dcf8c6]"
          >
            {{ t.label }}
            <AppIcon name="arrow" :size="16" class="text-[#075e54]" />
          </a>
        </div>
      </div>
    </Transition>

    <button
      class="relative grid size-16 place-items-center rounded-full bg-wa text-white shadow-xl shadow-black/20 transition hover:scale-105"
      :aria-expanded="open"
      :aria-label="open ? 'Închide WhatsApp' : 'Scrie-ne pe WhatsApp'"
      @click="open = !open"
    >
      <span v-if="!open" class="absolute inset-0 motion-safe:animate-ping rounded-full bg-wa opacity-30" />
      <AppIcon v-if="open" name="close" :size="26" />
      <BrandIcon v-else name="whatsapp" :size="32" />
    </button>
  </div>
</template>
