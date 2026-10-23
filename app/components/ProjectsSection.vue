<script setup lang="ts">
import 'photoswipe/style.css'
import type PhotoSwipeLightbox from 'photoswipe/lightbox'
import { projects } from '~/data/site'

const root = ref<HTMLElement | null>(null)
useReveal(root)

const active = ref('Toate')
const items = computed(() =>
  active.value === 'Toate' ? projects.items : projects.items.filter((p) => p.category === active.value),
)

let lightbox: PhotoSwipeLightbox | null = null

onMounted(async () => {
  const { default: Lightbox } = await import('photoswipe/lightbox')
  const lb = new Lightbox({
    dataSource: [],
    pswpModule: () => import('photoswipe'),
    bgOpacity: 0.94,
    showHideAnimationType: 'zoom',
  })
  // Legenda cu titlul și locația proiectului
  lb.on('uiRegister', () => {
    lb.pswp?.ui?.registerElement({
      name: 'caption',
      order: 9,
      isButton: false,
      appendTo: 'root',
      onInit: (el, pswp) => {
        pswp.on('change', () => {
          const s = pswp.currSlide?.data
          if (s) el.innerHTML = `<strong>${s.title}</strong><span>${s.place}</span>`
        })
      },
    })
  })
  lb.init()
  lightbox = lb
})
onBeforeUnmount(() => lightbox?.destroy())

function open(index: number) {
  if (!lightbox) return
  lightbox.options.dataSource = items.value.map((p) => ({
    src: p.src,
    width: p.w,
    height: p.h,
    alt: p.title,
    title: p.title,
    place: p.place,
  }))
  lightbox.loadAndOpen(index)
}
</script>

<template>
  <section id="proiecte" ref="root" class="py-24 sm:py-32">
    <div class="container-x">
      <div class="mx-auto max-w-2xl text-center">
        <p data-reveal="fade" class="eyebrow">{{ projects.eyebrow }}</p>
        <h2 data-reveal="up" class="section-title">{{ projects.title }}</h2>
        <p data-reveal="up" class="mt-5 text-forest-900/70">{{ projects.text }}</p>
      </div>

      <div data-reveal="up" class="mt-10 flex flex-wrap justify-center gap-2" role="group" aria-label="Filtrează proiectele">
        <button
          v-for="c in projects.categories"
          :key="c"
          :aria-pressed="active === c"
          class="rounded-full px-5 py-2.5 text-sm font-semibold transition"
          :class="active === c ? 'bg-forest-900 text-white' : 'bg-cream-100 text-forest-900 hover:bg-cream-200'"
          @click="active = c"
        >
          {{ c }}
        </button>
      </div>

      <TransitionGroup
        tag="div"
        class="mt-10 grid grid-flow-dense auto-rows-55 grid-cols-1 gap-4 sm:grid-cols-2 sm:auto-rows-60 lg:grid-cols-4"
        move-class="transition duration-500"
        enter-from-class="opacity-0 scale-95"
        enter-active-class="transition duration-500"
        leave-active-class="hidden"
      >
        <button
          v-for="(p, i) in items"
          :key="p.src"
          class="group relative overflow-hidden rounded-3xl text-left focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-leaf-500"
          :class="active === 'Toate' && i === 0 ? 'sm:col-span-2 sm:row-span-2' : active === 'Toate' && i === 5 ? 'sm:col-span-2' : ''"
          :aria-label="`Deschide fotografia: ${p.title}, ${p.place}`"
          @click="open(i)"
        >
          <img :src="p.src" :alt="p.title" class="size-full object-cover transition duration-700 group-hover:scale-110" loading="lazy">
          <div class="absolute inset-0 bg-linear-to-t from-forest-950/80 via-forest-950/10 to-transparent opacity-80 transition group-hover:opacity-100" />
          <div class="absolute inset-x-0 bottom-0 translate-y-2 p-5 text-white transition duration-500 group-hover:translate-y-0">
            <p class="text-xs font-semibold tracking-wider text-leaf-300 uppercase">{{ p.place }}</p>
            <p class="mt-1 font-serif text-lg leading-snug">{{ p.title }}</p>
          </div>
          <span class="absolute top-4 right-4 grid size-10 scale-75 place-items-center rounded-full bg-white/90 text-forest-900 opacity-0 transition group-hover:scale-100 group-hover:opacity-100">
            <AppIcon name="arrow" :size="16" class="-rotate-45" />
          </span>
        </button>
      </TransitionGroup>
    </div>
  </section>
</template>

<style>
.pswp__caption {
  position: absolute;
  left: 50%;
  bottom: 24px;
  transform: translateX(-50%);
  max-width: calc(100% - 32px);
  padding: 10px 18px;
  border-radius: 999px;
  background: rgba(11, 29, 18, 0.75);
  color: #fff;
  font: 500 14px/1.3 Manrope, sans-serif;
  text-align: center;
  backdrop-filter: blur(6px);
}
.pswp__caption span {
  display: block;
  color: #a3d977;
  font-size: 12px;
}
</style>
