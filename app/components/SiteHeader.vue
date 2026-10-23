<script setup lang="ts">
import { contact, nav, whatsappLink } from '~/data/site'

const scrolled = ref(false)
const open = ref(false)

function onScroll() {
  scrolled.value = window.scrollY > 40
}
onMounted(() => {
  onScroll()
  window.addEventListener('scroll', onScroll, { passive: true })
})
onBeforeUnmount(() => window.removeEventListener('scroll', onScroll))
</script>

<template>
  <header
    class="fixed inset-x-0 top-0 z-50 transition-all duration-500"
    :class="scrolled || open ? 'bg-forest-950/90 py-3 shadow-lg shadow-black/10 backdrop-blur-md' : 'py-5'"
  >
    <div class="container-x flex items-center justify-between gap-6">
      <a href="#acasa" class="group flex items-center gap-2.5 text-white" @click="open = false">
        <span class="grid size-10 place-items-center rounded-full bg-leaf-500 text-white transition group-hover:rotate-12">
          <AppIcon name="leaf" :size="22" />
        </span>
        <span class="leading-none">
          <span class="block font-serif text-xl font-semibold">Grădina lui Șerban</span>
          <span class="block pt-1 text-[10px] tracking-[0.25em] text-leaf-300 uppercase">Peisagistică</span>
        </span>
      </a>

      <nav class="hidden items-center gap-8 lg:flex" aria-label="Meniu principal">
        <a
          v-for="item in nav"
          :key="item.href"
          :href="item.href"
          class="text-sm font-medium text-white/85 transition hover:text-leaf-300"
        >{{ item.label }}</a>
      </nav>

      <div class="hidden items-center gap-5 lg:flex">
        <a :href="contact.phoneHref" class="flex items-center gap-2 text-sm font-semibold text-white hover:text-leaf-300">
          <AppIcon name="phone" :size="18" />
          {{ contact.phoneDisplay }}
        </a>
        <a :href="whatsappLink()" target="_blank" rel="noopener" class="btn-wa py-2.5!">
          <BrandIcon name="whatsapp" :size="18" />
          WhatsApp
        </a>
      </div>

      <div class="flex items-center gap-2 lg:hidden">
        <a :href="contact.phoneHref" class="grid size-11 place-items-center rounded-full bg-white/10 text-white" aria-label="Sună-ne">
          <AppIcon name="phone" />
        </a>
        <button
          class="grid size-11 place-items-center rounded-full bg-white/10 text-white"
          :aria-expanded="open"
          aria-label="Meniu"
          @click="open = !open"
        >
          <AppIcon :name="open ? 'close' : 'menu'" />
        </button>
      </div>
    </div>

    <Transition
      enter-from-class="opacity-0 -translate-y-2"
      enter-active-class="transition duration-300"
      leave-to-class="opacity-0 -translate-y-2"
      leave-active-class="transition duration-200"
    >
      <nav v-if="open" class="container-x mt-3 flex flex-col gap-1 pb-4 lg:hidden" aria-label="Meniu mobil">
        <a
          v-for="item in nav"
          :key="item.href"
          :href="item.href"
          class="rounded-xl px-3 py-3 text-base font-medium text-white/90 hover:bg-white/10"
          @click="open = false"
        >{{ item.label }}</a>
        <a :href="whatsappLink()" target="_blank" rel="noopener" class="btn-wa mt-2">
          <BrandIcon name="whatsapp" :size="18" />
          Scrie-ne pe WhatsApp
        </a>
      </nav>
    </Transition>
  </header>
</template>
