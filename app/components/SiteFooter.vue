<script setup lang="ts">
import { contact, nav, services, whatsappLink } from '~/data/site'

const socials = computed(() => [
  { name: 'whatsapp' as const, href: whatsappLink(), label: 'WhatsApp' },
  { name: 'facebook' as const, href: contact.social.facebook, label: 'Facebook' },
  { name: 'youtube' as const, href: contact.social.youtube, label: 'YouTube' },
  { name: 'instagram' as const, href: contact.social.instagram, label: 'Instagram' },
])
const year = new Date().getFullYear()
</script>

<template>
  <footer class="relative text-white">
    <WaveDivider flip class="-mb-px text-forest-950" />
    <div class="-mt-px bg-forest-950 pt-10 pb-8">
      <div class="container-x">
        <div class="grid gap-12 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
          <div>
            <div class="flex items-center gap-2.5">
              <span class="grid size-10 place-items-center rounded-full bg-leaf-500"><AppIcon name="leaf" :size="22" /></span>
              <span class="font-serif text-2xl font-semibold">{{ contact.name }}</span>
            </div>
            <p class="mt-5 max-w-xs text-sm leading-relaxed text-white/60">
              Proiectare, amenajare și întreținere grădini în {{ contact.area }}.
            </p>
            <div class="mt-6 flex gap-2.5">
              <a
                v-for="s in socials"
                :key="s.name"
                :href="s.href"
                target="_blank"
                rel="noopener"
                :aria-label="s.label"
                class="grid size-10 place-items-center rounded-full bg-white/10 text-white transition hover:bg-leaf-500"
              >
                <BrandIcon :name="s.name" :size="18" />
              </a>
            </div>
          </div>

          <div>
            <p class="text-sm font-bold tracking-wider text-leaf-300 uppercase">Navigare</p>
            <ul class="mt-5 space-y-3 text-sm text-white/70">
              <li v-for="n in nav" :key="n.href"><a :href="n.href" class="hover:text-white">{{ n.label }}</a></li>
            </ul>
          </div>

          <div>
            <p class="text-sm font-bold tracking-wider text-leaf-300 uppercase">Servicii</p>
            <ul class="mt-5 space-y-3 text-sm text-white/70">
              <li v-for="s in services" :key="s.key"><a href="#servicii" class="hover:text-white">{{ s.title }}</a></li>
            </ul>
          </div>

          <div>
            <p class="text-sm font-bold tracking-wider text-leaf-300 uppercase">Contact</p>
            <ul class="mt-5 space-y-4 text-sm text-white/70">
              <li>
                <a :href="whatsappLink()" target="_blank" rel="noopener" class="flex items-center gap-3 hover:text-white">
                  <BrandIcon name="whatsapp" :size="18" class="text-wa" />
                  WhatsApp: {{ contact.phoneDisplay }}
                </a>
              </li>
              <li>
                <a :href="contact.phoneHref" class="flex items-center gap-3 hover:text-white">
                  <AppIcon name="phone" :size="18" class="text-leaf-300" />
                  {{ contact.phoneDisplay }}
                </a>
              </li>
              <li class="flex items-center gap-3">
                <AppIcon name="clock" :size="18" class="text-leaf-300" />
                {{ contact.hours }}
              </li>
              <li class="flex items-center gap-3">
                <AppIcon name="pin" :size="18" class="text-leaf-300" />
                {{ contact.area }}
              </li>
            </ul>
          </div>
        </div>

        <div class="mt-14 flex flex-col justify-between gap-3 border-t border-white/10 pt-6 text-xs text-white/45 sm:flex-row">
          <p>© {{ year }} {{ contact.name }}. Toate drepturile rezervate.</p>
          <p>Peisagistică în București și în toată țara</p>
        </div>
      </div>
    </div>
  </footer>
</template>
