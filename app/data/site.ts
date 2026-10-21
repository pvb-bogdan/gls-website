// Tot conținutul text al site-ului, într-un singur loc.
// Elementele marcate cu TODO trebuie confirmate cu Șerban înainte de lansare.

export const contact = {
  name: 'Grădina lui Șerban',
  owner: 'Ion Șerban',
  phoneDisplay: '0734 283 510',
  phoneHref: 'tel:+40734283510',
  whatsappNumber: '40734283510',
  email: '', // TODO: adresa de email, dacă există
  area: 'București, Ilfov și în toată țara',
  hours: 'Luni – Sâmbătă, 8:00 – 19:00', // TODO: program real
  social: {
    facebook: 'https://www.facebook.com/gradinalui.serban/',
    youtube: 'https://www.youtube.com/@ionserban7492',
    instagram: '', // TODO: contul de Instagram (iconița apare în footer doar dacă e completat)
  },
}

export function whatsappLink(message = 'Bună ziua! Aș dori mai multe informații despre amenajarea unei grădini.') {
  return `https://wa.me/${contact.whatsappNumber}?text=${encodeURIComponent(message)}`
}

// Mesaje gata scrise pentru butonul flotant de WhatsApp
export const whatsappTopics = [
  { label: 'Vreau o grădină nouă', message: 'Bună ziua! Aș dori o amenajare de grădină. Vă pot trimite câteva poze cu spațiul?' },
  { label: 'Gazon rulou', message: 'Bună ziua! Mă interesează montajul de gazon rulou. Suprafața este de aproximativ ... mp.' },
  { label: 'Sistem de irigații', message: 'Bună ziua! Aș dori o ofertă pentru un sistem de irigații automat.' },
  { label: 'Întreținere grădină', message: 'Bună ziua! Caut pe cineva pentru întreținerea grădinii. Cum funcționează abonamentul?' },
  { label: 'Altă întrebare', message: 'Bună ziua! Am o întrebare despre grădina mea.' },
]

export const nav = [
  { label: 'Despre', href: '#despre' },
  { label: 'Servicii', href: '#servicii' },
  { label: 'Proiecte', href: '#proiecte' },
  { label: 'Prețuri', href: '#preturi' },
  { label: 'Contact', href: '#contact' },
]

export const hero = {
  eyebrow: 'Peisagist în București · lucrări în toată țara',
  titleStart: 'Grădini care se trăiesc,',
  titleAccent: 'nu doar se privesc.',
  text: 'Proiectăm, amenajăm și îngrijim grădini cu plante potrivite locului, gazon care rezistă și alei făcute să dureze. De la prima schiță până la primul pahar de limonadă pe terasă.',
  ctaPrimary: 'Scrie-ne pe WhatsApp',
  ctaSecondary: 'Vezi proiectele',
  badges: [
    { title: 'Răspuns rapid', text: 'pe WhatsApp, chiar și în weekend' },
    { title: 'De la schiță la gazon', text: 'un singur om răspunde de tot' },
  ],
}

export const highlights = [
  { icon: 'pin', title: 'Snagov · Cernica · Giurgiu', text: 'Grădini rezidențiale și comerciale în jurul Capitalei' },
  { icon: 'leaf', title: 'Plante potrivite locului', text: 'Alegem specii care rezistă la clima și solul din grădina ta' },
  { icon: 'drop', title: 'Irigații inteligente', text: 'Udare automată, fără apă risipită' },
  { icon: 'camera', title: 'Sfaturi pe YouTube', text: 'Arătăm deschis cum lucrăm, pas cu pas' },
]

export const about = {
  eyebrow: 'Despre noi',
  title: 'Salut, sunt Șerban. Grădinile sunt meseria și pasiunea mea.',
  paragraphs: [
    'Grădina lui Șerban a pornit dintr-o idee simplă: o grădină frumoasă nu trebuie să fie complicată. Trebuie gândită bine de la început, făcută cu materiale bune și îngrijită cu răbdare.',
    'Lucrez cu echipa mea în București, Ilfov și oriunde în țară ne cheamă un proiect. Am amenajat curți de case, grădini ecologice, alei și spații verzi pentru restaurante, cum este Locanta Jariștea.',
    'Pe Facebook și YouTube arăt fără filtre cum lucrăm și dau sfaturi pentru cei care vor să-și îngrijească singuri grădina. Așa că știi de la început cu cine lucrezi.',
  ],
  signature: 'Ion Șerban, peisagist',
  points: ['Vizită și evaluare la fața locului', 'Ofertă clară, fără costuri ascunse', 'Plante și materiale de calitate', 'Grădina rămâne îngrijită și după predare'],
}

export const services = [
  {
    key: 'proiectare',
    title: 'Proiectare peisagistică',
    text: 'Pornim de la cum vrei să folosești grădina și desenăm un plan cu zone, plante, alei și lumini, înainte de prima lopată.',
    image: '/images/service-design.jpg',
  },
  {
    key: 'amenajare',
    title: 'Amenajare grădini',
    text: 'Pregătirea terenului, plantare de arbori, arbuști și flori, borduri, mulci și decor. Grădina gata de folosit.',
    image: '/images/service-landscaping.jpg',
  },
  {
    key: 'gazon',
    title: 'Gazon rulou și gazon semănat',
    text: 'Nivelare, sol fertil și gazon montat corect, verde din prima zi și făcut să reziste anii care urmează.',
    image: '/images/service-lawn.jpg',
  },
  {
    key: 'irigatii',
    title: 'Sisteme de irigații',
    text: 'Aspersoare și picurare automate, cu programare pe zone. Grădina se udă singură, cât trebuie și când trebuie.',
    image: '/images/service-irrigation.jpg',
  },
  {
    key: 'alei',
    title: 'Alei și pavaje',
    text: 'Alei din piatră naturală, dale sau pietriș decorativ, care leagă casa de grădină și rezistă la trafic și ger.',
    image: '/images/service-paths.jpg',
  },
  {
    key: 'intretinere',
    title: 'Întreținere grădini',
    text: 'Tuns gazon, tăieri de formare, fertilizare și tratamente, la abonament sau la cerere, tot anul.',
    image: '/images/service-maintenance.jpg',
  },
]

export const process = {
  eyebrow: 'Cum lucrăm',
  title: 'De la prima poză pe WhatsApp la grădina terminată',
  steps: [
    { title: 'Ne scrii pe WhatsApp', text: 'Trimite-ne câteva poze cu curtea și spune-ne ce îți dorești. Îți răspundem repede.' },
    { title: 'Venim la fața locului', text: 'Măsurăm, verificăm solul, lumina și apa, și stăm de vorbă despre cum vrei să folosești grădina.' },
    { title: 'Primești planul și oferta', text: 'Un plan clar și un preț pe etape, ca să știi exact ce primești și cât costă.' },
    { title: 'Amenajăm grădina', text: 'Lucrăm curat și la termen. Te ținem la curent cu poze din fiecare etapă.' },
    { title: 'Rămânem alături', text: 'Te învățăm cum să o îngrijești sau ne ocupăm noi de întreținere, cu abonament.' },
  ],
}

export type GalleryItem = { src: string; w: number; h: number; title: string; place: string; category: string }

export const projects = {
  eyebrow: 'Proiecte',
  title: 'Grădini pe care le-am creat',
  text: 'Poze reale din lucrările noastre, de la primul rulou de gazon până la grădina terminată.',
  categories: ['Toate', 'Gazon', 'Alei', 'Plantări', 'Din șantier'],
  // Poze reale de pe pagina de Facebook. TODO: locațiile proiectelor
  items: [
    { src: '/images/project-01.jpg', w: 1600, h: 1200, title: 'Alee din dale și pietriș, cu gazon rulou', place: 'Lucrare finalizată', category: 'Alei' },
    { src: '/images/project-02.jpg', w: 1600, h: 1200, title: 'Gazon rulou în jurul unei case noi', place: 'Lucrare finalizată', category: 'Gazon' },
    { src: '/images/project-03.jpg', w: 1600, h: 1200, title: 'Gazon proaspăt montat lângă terasă', place: 'Lucrare finalizată', category: 'Gazon' },
    { src: '/images/project-04.jpg', w: 1600, h: 1200, title: 'Palmieri și pietriș decorativ lângă piscină', place: 'Lucrare finalizată', category: 'Plantări' },
    { src: '/images/project-05.jpg', w: 1600, h: 900, title: 'Alee cu dale, pietriș și gazon', place: 'Lucrare finalizată', category: 'Alei' },
    { src: '/images/project-06.jpg', w: 1600, h: 1200, title: 'Echipa montând gazon rulou', place: 'În lucru', category: 'Din șantier' },
    { src: '/images/project-07.jpg', w: 1600, h: 1200, title: 'Gazon rulou și arbori tineri', place: 'Lucrare finalizată', category: 'Gazon' },
    { src: '/images/project-08.jpg', w: 1600, h: 1200, title: 'Arbori plantați pe aleea casei', place: 'Lucrare finalizată', category: 'Plantări' },
    { src: '/images/project-09.jpg', w: 1600, h: 900, title: 'Alee din dale în gazon', place: 'Lucrare finalizată', category: 'Alei' },
    { src: '/images/project-10.jpg', w: 1600, h: 1200, title: 'Gazon în livadă', place: 'Lucrare finalizată', category: 'Gazon' },
    { src: '/images/project-11.jpg', w: 1600, h: 1200, title: 'Montaj pavaj', place: 'În lucru', category: 'Din șantier' },
    { src: '/images/project-12.jpg', w: 1600, h: 1200, title: 'Palmieri lângă piscină', place: 'Lucrare finalizată', category: 'Plantări' },
    { src: '/images/project-13.jpg', w: 1600, h: 1200, title: 'Grădină cu gazon și iederă', place: 'Lucrare finalizată', category: 'Gazon' },
    { src: '/images/project-14.jpg', w: 1600, h: 1200, title: 'Rulouri de gazon gata de montaj', place: 'În lucru', category: 'Din șantier' },
    { src: '/images/project-15.jpg', w: 1600, h: 1200, title: 'Plantare cu mulci și folie antiburuieni', place: 'În lucru', category: 'Plantări' },
    { src: '/images/project-16.jpg', w: 1600, h: 1200, title: 'Plantare de arbuști', place: 'În lucru', category: 'Din șantier' },
  ] as GalleryItem[],
}

export const videos = {
  eyebrow: 'Pe YouTube',
  title: 'Vezi cum lucrăm',
  text: 'Scurte filmări din șantier și sfaturi pentru grădina ta, direct de pe canalul lui Șerban.',
  // TODO: titluri reale pentru fiecare filmare
  shorts: [
    { id: 'gmX-1dtQ4Sw', title: 'Din șantier: Grădina lui Șerban' },
    { id: 'nYHQ9Jnb_rk', title: 'Din șantier: Grădina lui Șerban' },
    { id: 'k60Zh-T7blE', title: 'Din șantier: Grădina lui Șerban' },
    { id: 'AGIb1_uH4Xg', title: 'Din șantier: Grădina lui Șerban' },
    { id: 'Oe-KYniAP_0', title: 'Din șantier: Grădina lui Șerban' },
    { id: '-NjMOAaah6o', title: 'Din șantier: Grădina lui Șerban' },
  ] as { id: string; title: string }[],
}

export const pricing = {
  eyebrow: 'Prețuri orientative',
  title: 'Știi de la început la ce să te aștepți',
  text: 'Fiecare grădină e diferită, așa că prețul final îl stabilim după vizită. Ca să ai un punct de pornire, acestea sunt prețurile noastre de la care pornim.',
  note: 'Prețurile includ manopera. Materialele și plantele se calculează în ofertă, în funcție de proiect.',
  // TODO: prețuri reale de la Șerban
  plans: [
    {
      title: 'Proiect peisagistic',
      price: '1.500',
      unit: 'lei / proiect',
      features: ['Vizită și măsurători', 'Plan cu zone și plante', 'Listă de plante și materiale', 'Deviz pe etape'],
      featured: false,
    },
    {
      title: 'Gazon rulou montat',
      price: '30',
      unit: 'lei / mp',
      features: ['Nivelare și pregătire teren', 'Pământ fertil și îngrășământ starter', 'Gazon rulou de calitate', 'Prima udare și sfaturi de îngrijire'],
      featured: true,
    },
    {
      title: 'Sistem de irigații',
      price: '18',
      unit: 'lei / mp',
      features: ['Proiect pe zone de udare', 'Aspersoare și picurare', 'Programator automat', 'Garanție pentru montaj'],
      featured: false,
    },
    {
      title: 'Întreținere lunară',
      price: '600',
      unit: 'lei / lună',
      features: ['Tuns gazon și margini', 'Tăieri și curățenie', 'Fertilizare și tratamente', 'Verificarea irigațiilor'],
      featured: false,
    },
  ],
}

export const areas = {
  eyebrow: 'Unde lucrăm',
  title: 'București, Ilfov și oriunde în țară',
  // TODO: zone confirmate de Șerban
  places: ['București', 'Snagov', 'Ciofliceni', 'Cernica', 'Pipera', 'Otopeni', 'Corbeanca', 'Giurgiu', 'Galați', 'toată țara'],
}

export const cta = {
  title: 'Hai să-ți facem grădina pe care o meriți',
  text: 'Trimite-ne câteva poze cu curtea ta pe WhatsApp și îți spunem cum o putem transforma.',
  button: 'Scrie-ne pe WhatsApp',
}
