import type { gsap } from 'gsap'

// Animă la scroll toate elementele cu [data-reveal] din containerul dat.
// data-reveal="up" | "left" | "right" | "fade", data-delay="0.1"
export function useReveal(root: Ref<HTMLElement | null>) {
  let ctx: gsap.Context | undefined
  onMounted(() => {
    const { $gsap } = useNuxtApp()
    if (!root.value) return
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    ctx = $gsap.context(() => {
      root.value!.querySelectorAll<HTMLElement>('[data-reveal]').forEach((el) => {
        if (reduce) return $gsap.set(el, { opacity: 1 })
        const kind = el.dataset.reveal
        $gsap.fromTo(
          el,
          {
            opacity: 0,
            y: kind === 'up' || !kind ? 40 : 0,
            x: kind === 'left' ? -50 : kind === 'right' ? 50 : 0,
          },
          {
            opacity: 1,
            x: 0,
            y: 0,
            duration: 1,
            ease: 'power3.out',
            delay: Number(el.dataset.delay ?? 0),
            scrollTrigger: { trigger: el, start: 'top 88%', once: true },
          },
        )
      })
    }, root.value)
  })
  onBeforeUnmount(() => ctx?.revert())
}
