/* ============================================================
   SCRIPT.JS — Lógica de contenido de la plantilla
   Este archivo hace 2 cosas:
   1. Define TODO el contenido del sitio en un solo objeto (SITE)
   2. Toma ese contenido y lo "pinta" dentro del HTML

   Para reutilizar esta plantilla con otro negocio o cliente,
   SOLO necesitas cambiar los valores dentro del objeto SITE.
   No hace falta tocar index.html ni style.css.

   Nota para el producto que estás construyendo: este objeto SITE
   es exactamente el mismo tipo de estructura (JSON) que la IA
   generaría automáticamente a partir del formulario que llene
   cada cliente — así que esta plantilla ya está lista para
   conectarse a ese flujo automatizado más adelante.
   ============================================================ */

/* ============================================================
   CONFIGURACIÓN DEL SITIO (SITE)
   ============================================================ */
const SITE = {
  business: {
    name: 'Lucora Detailing',
    coverageArea: 'Kansas City',
    phone: '+1 (816) 237-9423',
    messengerUrl: 'https://wa.me/18162379423?text=Hola,%20quisiera%20mas%20informacion%20para%20reservar'
  },
  hero: {
    eyebrow: 'MOVIL DETAILING - KANSAS CITY',
    headline: 'Le devolvemos el brillo a tu auto, sin que muevas un dedo.',
    sub: 'Vamos hasta ti con equipo profesional. Cotiza en minutos por chat y agenda tu horario sin salir de casa.'
  },
  socials: {
    facebook: 'https://www.facebook.com/share/1HQNmoRLGV/',
    instagram: 'https://www.instagram.com/lucoradetailing',
    tiktok: 'https://www.tiktok.com/@lucora_car_detailing'
  },
  vehicles: [
    { id: 'sedan', label: 'Sedán', prices: { exterior: 60, interior: 75, basico: 110, full: 145 } },
    { id: 'suv', label: 'SUV', prices: { exterior: 70, interior: 85, basico: 125, full: 165 } },
    { id: 'camioneta', label: 'Camioneta', prices: { exterior: 80, interior: 95, basico: 140, full: 185 } }
  ],
  addOn: { name: 'Lavado de motor', from: 50 },
  gallery: [
    { 
      label: 'Exterior', 
      type: 'video', 
      src: 'videoexterior.mp4', 
      poster: 'tu_carpeta/miniatura1.jpg' 
    },
    { 
      label: 'Interior', 
      type: 'video', 
      src: 'videointerior.mp4', 
      poster: 'tu_carpeta/miniatura2.jpg' 
    },
    { 
      label: 'Detalle final', 
      type: 'image', 
      src: 'detallefinal.jpeg' 
    }
  ],
  testimonials: [
    { stars: '★★★★★', quote: 'Súper recomendados. El trato de diez y el coche quedó impecable, parecía recién salido del concesionario. Tenía unas manchas en los asientos que daba por perdidas y las sacaron todas. Sin duda volveré a traerlo.', who: 'Dueño de auto sedán' },
    { stars: '★★★★★', quote: 'Great service! Thank you Lucora. They were friendly, professional, and did a really good job. The car came out spotless inside and out. Everything was quick and easy, and I’m very happy with the result. Definitely recommend this car wash!', who: 'Dueño de auto SUV' },
    { stars: '★★★★★', quote: '​Contraté el servicio de carwash y detailing a domicilio y superó totalmente mis expectativas. Es súper cómodo no tener que moverte de casa y que dejen el coche impecable. Se nota que cuidan cada detalle: puntualidad, productos de altísima calidad y un trato muy profesional. El interior quedó como nuevo y la pintura con un brillo espectacular. Sin duda, volveré a contratarlos. ¡Gracias por el gran trabajo!', who: 'Dueña de camioneta' }
  ]
};

/* ============================================================
   FUNCIONES AUXILIARES Y RENDERIZADO
   ============================================================ */
function setText(id, text) {
  const el = document.getElementById(id);
  if (el) el.textContent = text;
}

document.addEventListener('DOMContentLoaded', () => {
  // Cambia el título de la pestaña del navegador
  document.title = SITE.business.name + ' — Detailing a domicilio';

  // Textos principales del Hero
  setText('hero-eyebrow', SITE.hero.eyebrow);
  setText('hero-headline', SITE.hero.headline);
  setText('hero-sub', SITE.hero.sub);

  // Footer y datos de contacto
  setText('footer-coverage', 'Cobertura: ' + SITE.business.coverageArea);
  setText('footer-contact', SITE.business.phone + ' · ' + SITE.business.name);

  // Marca / Logo
  const logoSpan = document.querySelector('.logo span');
  if (logoSpan) {
    logoSpan.textContent = SITE.business.name;
  }

  // Enlaces directos a WhatsApp / Messenger
  document.querySelectorAll('a[href="{{messenger_url}}"]').forEach(a => {
    a.setAttribute('href', SITE.business.messengerUrl);
  });

  // Asignación dinámica de Redes Sociales en el HTML
  Object.entries(SITE.socials).forEach(([network, url]) => {
    const socialLink = document.querySelector(`[data-social="${network}"]`);
    if (socialLink) {
      socialLink.setAttribute('href', url);
    }
  });
});

/* ============================================================
   FUNCIONES AUXILIARES (helpers)
   Pequeñas funciones reutilizables para no repetir código.
   ============================================================ */

// Convierte un número en texto con signo de dólar. Ej: money(60) → "$60"
function money(n){ return '$' + n; }

// Busca un elemento por su "id" en el HTML y le cambia el texto.
// Si el elemento no existe, no hace nada (evita errores en consola).
function setText(id, val){
  const el = document.getElementById(id);
  if(el) el.textContent = val;
}


/* ============================================================
   RENDERIZADO — Contenido fijo (se pinta una sola vez al cargar)
   ============================================================ */

// Cambia el título de la pestaña del navegador
document.title = SITE.business.name + " — Detailing a domicilio";

// Rellena los textos del Hero usando los valores definidos arriba en SITE.hero
setText('hero-eyebrow', SITE.hero.eyebrow);
setText('hero-headline', SITE.hero.headline);
setText('hero-sub', SITE.hero.sub);

// Rellena el footer con la zona de cobertura y datos de contacto
setText('footer-coverage', 'Cobertura: ' + SITE.business.coverageArea);
setText('footer-contact', SITE.business.phone + ' · ' + SITE.business.name);

// Cambia el nombre del negocio dentro del <span> sin borrar la imagen
const logoSpan = document.querySelector('.logo span');
if (logoSpan) {
  logoSpan.textContent = SITE.business.name;
}
// Busca TODOS los links que todavía tienen el placeholder "{{messenger_url}}"
// (hay varios: header, hero, CTA final, botón flotante) y los reemplaza
// de una sola vez por el link real de Messenger del negocio.
[...document.querySelectorAll('a[href="{{messenger_url}}"]')].forEach(a => {
  a.setAttribute('href', SITE.business.messengerUrl);
});

Object.entries(SITE.socials).forEach(([network, url]) => {
  const socialLink = document.querySelector(`[data-social="${network}"]`);
  if (socialLink) socialLink.setAttribute('href', url);
});


/* ============================================================
   RENDERIZADO — Precios (dinámico, con pestañas)
   ============================================================ */

// Referencias a los 3 contenedores vacíos que están en index.html
const tabsEl = document.getElementById('vehicle-tabs');
const gridEl = document.getElementById('price-grid');
const addonEl = document.getElementById('addon-row');

// Dibuja las 4 tarjetas de precio (Exterior/Interior/Básico/Full)
// para el tipo de vehículo indicado (ej. "sedan", "suv", "van")
function renderPrices(vehicleId){
  // Busca dentro de SITE.vehicles el objeto que coincide con el id pedido
  const v = SITE.vehicles.find(v => v.id === vehicleId);
  if (!v) return;

  // Nombres "bonitos" para mostrar en vez de las claves técnicas del objeto
  const tierLabels = { exterior: 'Exterior', interior: 'Interior', basico: 'Básico', full: 'Full' };

  // Recorre cada tier (exterior, interior, basico, full) y genera su tarjeta HTML
  gridEl.innerHTML = Object.entries(v.prices).map(([tier, price]) => `
    <div class="price-card">
      <div class="service-title">${tierLabels[tier]}</div>
      <div class="price-amount mono">${money(price)}</div>
    </div>
  `).join('');
}

// Genera las pestañas (una por cada tipo de vehículo en SITE.vehicles).
// La primera pestaña (i===0) se marca como activa por defecto.
tabsEl.innerHTML = SITE.vehicles.map((v,i) =>
  `<div class="tab ${i===0?'active':''}" data-id="${v.id}">${v.label}</div>`
).join('');

// Le agrega un "escuchador de clics" a cada pestaña:
// al hacer clic, quita "active" de todas, se la pone a la clickeada,
// y vuelve a dibujar los precios para ese vehículo.
tabsEl.querySelectorAll('.tab').forEach(tab => {
  tab.addEventListener('click', () => {
    tabsEl.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
    tab.classList.add('active');
    renderPrices(tab.dataset.id);
  });
});

// Dibuja los precios del PRIMER vehículo de la lista al cargar la página
renderPrices(SITE.vehicles[0].id);

// Dibuja la fila del servicio adicional (ej. "Lavado de motor — desde $50")
addonEl.innerHTML = `
  <div><strong>${SITE.addOn.name}</strong> <span class="muted">- servicio adicional</span></div>
  <div class="mono">desde ${money(SITE.addOn.from)}</div>
`;


/* ============================================================
   RENDERIZADO — Galería de fotos y videos
   ============================================================ */

document.getElementById('gallery-grid').innerHTML = SITE.gallery.map(g => {
  // Detecta automáticamente si es video por el tipo o por la extensión .mp4
  const isVideo = g.type === 'video' || (g.src && g.src.endsWith('.mp4')) || (g.imageUrl && g.imageUrl.endsWith('.mp4'));
  const mediaPath = g.src || g.imageUrl;

  return `
    <article class="gallery-card" role="listitem">
      <div class="gallery-media">
        ${isVideo
          ? `<video autoplay loop muted playsinline width="100%" poster="${g.poster || ''}">
              <source src="${mediaPath}" type="video/mp4">
             </video>`
          : mediaPath
          ? `<img src="${mediaPath}" alt="Resultado de detailing: ${g.label}">`
          : `<span class="gallery-placeholder">Foto de ${g.label}</span>`}
      </div>
      <h3>${g.label}</h3>
    </article>
  `;
}).join('');

/* ============================================================
   RENDERIZADO — Testimonios
   ============================================================ */

document.getElementById('testi-grid').innerHTML = SITE.testimonials.map(t => `
  <div class="testi">
    <div class="stars">${t.stars}</div>
    <p>"${t.quote}"</p>
    <div class="who">${t.who}</div>
  </div>
`).join('');

// Sincroniza el menú superior con la pestaña correspondiente y conserva el
// desplazamiento suave hacia la sección de precios.
document.querySelectorAll('.nav-vehicle').forEach(link => {
  link.addEventListener('click', event => {
    event.preventDefault();
    document.querySelector('.nav-categories')?.classList.remove('is-open');
    document.querySelector('.menu-toggle')?.setAttribute('aria-expanded', 'false');
    document.getElementById('precios')?.scrollIntoView({ behavior: 'smooth' });
    tabsEl.querySelector(`.tab[data-id="${link.dataset.targetTab === 'sedán' ? 'sedan' : link.dataset.targetTab}"]`)?.click();
  });
});

const menuToggle = document.querySelector('.menu-toggle');
const vehicleMenu = document.getElementById('vehicle-menu');

menuToggle?.addEventListener('click', () => {
  const isOpen = menuToggle.getAttribute('aria-expanded') === 'true';
  menuToggle.setAttribute('aria-expanded', String(!isOpen));
  vehicleMenu?.classList.toggle('is-open', !isOpen);
});