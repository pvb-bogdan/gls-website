# Grădina lui Șerban: site de prezentare

Machetă pentru site-ul peisagistului Ion Șerban (București). O singură pagină, în română, cu contact principal pe WhatsApp.

## Tehnologii

- [Nuxt 4](https://nuxt.com) + [Tailwind CSS 4](https://tailwindcss.com)
- [GSAP](https://gsap.com) cu ScrollTrigger pentru animații
- [PhotoSwipe](https://photoswipe.com) pentru galeria de proiecte

## Pornire

```bash
npm install
npm run dev        # http://localhost:3000
npm run generate   # site static în .output/public
```

## Unde se modifică

- **Texte, prețuri, contact, proiecte:** `app/data/site.ts`. Tot ce e marcat cu `TODO` trebuie confirmat cu Șerban.
- **Secțiuni:** `app/components/*Section.vue`, asamblate în `app/pages/index.vue`
- **Culori și fonturi:** `app/assets/css/main.css` (blocul `@theme`)
- **Imagini:** `public/images/`. Hero-ul și imaginile generale sunt generate cu AI; `hero-alt-*.jpg` sunt variante de rezervă pentru hero. Pozele din galerie sunt provizorii și se înlocuiesc cu poze reale de pe Facebook.
