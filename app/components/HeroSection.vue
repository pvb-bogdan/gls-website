<script setup lang="ts">
import { hero, whatsappLink } from '~/data/site'

const root = ref<HTMLElement | null>(null)
const bg = ref<HTMLElement | null>(null)

onMounted(() => {
  const { $gsap } = useNuxtApp()
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    $gsap.set(root.value!.querySelectorAll('[data-hero]'), { opacity: 1 })
    return
  }
  const tl = $gsap.timeline({ defaults: { ease: 'power3.out' } })
  tl.fromTo(bg.value, { scale: 1.15 }, { scale: 1, duration: 2.4, ease: 'power2.out' }, 0)
    .fromTo('[data-hero]', { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 1, stagger: 0.12 }, 0.3)
  // efect parallax discret la scroll
  $gsap.to(bg.value, {
    yPercent: 12,
    ease: 'none',
    scrollTrigger: { trigger: root.value, start: 'top top', end: 'bottom top', scrub: true },
  })
})
</script>

<template>
  <section id="acasa" ref="root" class="relative isolate flex min-h-[100svh] flex-col overflow-hidden bg-forest-950">
    <div ref="bg" class="absolute inset-0 -z-20 will-change-transform">
      <img
        src="/images/hero.jpg"
        alt="Grădină amenajată cu gazon, alee de piatră și arbuști, în lumina apusului"
        class="size-full object-cover object-[60%_center]"
        fetchpriority="high"
      >
    </div>
    <div class="absolute inset-0 -z-10 bg-gradient-to-r from-forest-950/90 via-forest-950/55 to-forest-950/10" />
    <div class="absolute inset-x-0 bottom-0 -z-10 h-1/2 bg-gradient-to-t from-forest-950/70 to-transparent" />

    <div class="container-x flex flex-1 flex-col justify-center pt-32 pb-40 sm:pb-48">
      <div class="max-w-2xl">
        <p data-hero  class="eyebrow !text-leaf-300">{{ hero.eyebrow }}</p>
        <h1 data-hero  class="mt-5 text-4xl leading-[1.05] font-semibold text-white sm:text-6xl lg:text-7xl">
          {{ hero.titleStart }}
          <span class="block text-leaf-400 italic">{{ hero.titleAccent }}</span>
        </h1>
        <p data-hero  class="mt-6 max-w-xl text-base leading-relaxed text-white/80 sm:text-lg">
          {{ hero.text }}
        </p>
        <div data-hero  class="mt-9 flex flex-wrap gap-3">
          <a :href="whatsappLink()" target="_blank" rel="noopener" class="btn-wa !px-7 !py-4 text-base">
            <BrandIcon name="whatsapp" :size="20" />
            {{ hero.ctaPrimary }}
          </a>
          <a href="#proiecte" class="btn-ghost !px-7 !py-4 text-base">
            {{ hero.ctaSecondary }}
            <AppIcon name="arrow" :size="18" />
          </a>
        </div>
      </div>
    </div>

    <div class="container-x pointer-events-none absolute inset-x-0 bottom-24 hidden justify-between sm:bottom-32 md:flex">
      <div
        v-for="(b, i) in hero.badges"
        :key="b.title"
        data-hero
         class="pointer-events-auto flex items-center gap-3 rounded-2xl border border-white/15 bg-white/10 px-4 py-3 text-white backdrop-blur-md"
        :class="i === 1 ? 'ml-auto' : ''"
      >
        <span class="grid size-10 place-items-center rounded-full bg-leaf-500/90">
          <AppIcon :name="i === 0 ? 'clock' : 'leaf'" :size="18" />
        </span>
        <span class="text-sm leading-tight">
          <strong class="block font-semibold">{{ b.title }}</strong>
          <span class="text-white/70">{{ b.text }}</span>
        </span>
      </div>
    </div>

    <WaveDivider class="absolute inset-x-0 -bottom-px text-cream-50" />
  </section>
</template>

