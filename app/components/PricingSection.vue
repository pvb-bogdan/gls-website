<script setup lang="ts">
import { pricing, whatsappLink } from '~/data/site'

const root = ref<HTMLElement | null>(null)
useReveal(root)
</script>

<template>
  <section id="preturi" ref="root" class="py-24 sm:py-32">
    <div class="container-x">
      <div class="mx-auto max-w-2xl text-center">
        <p data-reveal="fade" class="eyebrow">{{ pricing.eyebrow }}</p>
        <h2 data-reveal="up" class="section-title">{{ pricing.title }}</h2>
        <p data-reveal="up" class="mt-5 text-forest-900/70">{{ pricing.text }}</p>
      </div>

      <div class="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        <div
          v-for="(plan, i) in pricing.plans"
          :key="plan.title"
          data-reveal="up"
          :data-delay="i * 0.08"
          class="relative flex flex-col rounded-[2rem] p-8 transition-[translate] duration-500 hover:-translate-y-1"
          :class="plan.featured ? 'bg-forest-900 text-white shadow-2xl shadow-forest-900/30' : 'border border-cream-200 bg-white'"
        >
          <span
            v-if="plan.featured"
            class="absolute -top-3 left-8 rounded-full bg-leaf-500 px-3 py-1 text-xs font-bold tracking-wide text-white uppercase"
          >Cel mai cerut</span>
          <h3 class="font-sans text-lg font-bold">{{ plan.title }}</h3>
          <p class="mt-5 flex items-baseline gap-2">
            <span class="text-sm" :class="plan.featured ? 'text-white/60' : 'text-forest-900/60'">de la</span>
            <span class="font-serif text-5xl font-semibold" :class="plan.featured ? 'text-leaf-300' : 'text-forest-900'">{{ plan.price }}</span>
          </p>
          <p class="mt-1 text-sm" :class="plan.featured ? 'text-white/60' : 'text-forest-900/60'">{{ plan.unit }}</p>
          <ul class="mt-7 flex-1 space-y-3 text-sm">
            <li v-for="f in plan.features" :key="f" class="flex items-start gap-2.5">
              <AppIcon name="check" :size="18" class="mt-px shrink-0" :class="plan.featured ? 'text-leaf-300' : 'text-leaf-500'" />
              {{ f }}
            </li>
          </ul>
          <a
            :href="whatsappLink(`Bună ziua! Aș dori o ofertă pentru: ${plan.title.toLowerCase()}.`)"
            target="_blank"
            rel="noopener"
            class="btn mt-8"
            :class="plan.featured ? 'bg-leaf-500 text-white hover:bg-leaf-400' : 'bg-cream-100 text-forest-900 hover:bg-forest-900 hover:text-white'"
          >
            <BrandIcon name="whatsapp" :size="18" />
            Cere ofertă
          </a>
        </div>
      </div>
      <p data-reveal="fade" class="mt-8 text-center text-sm text-forest-900/55">{{ pricing.note }}</p>
    </div>
  </section>
</template>
