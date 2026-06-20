# Workplan — Cabo Cleaning Website

Proyecto: sitio web profesional, bilingüe, escalable y con posicionamiento SEO para Cabo Cleaning — servicio premium de limpieza de villas, mayordomo y desayunos en Los Cabos.

Objetivos clave: **inspirar confianza**, **posicionar bien en Google**, **diseño profesional** y **arquitectura escalable** que permita crecer sin rehacer el sitio.

---

## Fase 1 — Estrategia y posicionamiento (semana 1–2)

### 1.1 Definición de marca y posicionamiento
- [x] Confirmar nombre oficial: ¿"Cabo Cleaning" o algo más distintivo? → Se usa "Cabo Cleaning" como nombre; evaluar con Marlon si prefiere algo más distintivo
- [x] Posicionamiento: servicio de lujo, local y confiable — no una empresa anónima, sino un equipo con nombre, cara y credenciales
- [x] Cliente objetivo: propietarios de villas (mayoría angloparlante), anfitriones de Airbnb/VRBO y property managers en Pedregal, Palmilla, Quivira, Cabo del Sol, Querencia
- [x] Propuesta de valor única: autenticidad mexicana + estándar de hotelería de ultra lujo
- [x] Slogan en inglés y español → "Luxury Villa Care, Authentic Mexican Hospitality" / "Cuidado de Villas de Lujo, Hospitalidad Mexicana Auténtica"

### 1.2 Investigación de posicionamiento (SEO research)
- [x] Análisis de competencia: qué empresas de limpieza de villas ya posicionan en Cabo y cómo → Detectados: Clean BNB Pro (#1 rival directo), Maid in Cabo (lujo), AM-PM Cabo, Cabo Home Services, Chef & Butler Service. Oportunidad: NADIE combina mayordomo + limpieza + desayunos. El butler service aparece solo en resorts, no como servicio independiente.
- [x] Investigación de palabras clave reales (volumen de búsqueda) en inglés y español
- [x] Definir keywords primarias y secundarias por servicio
- [x] Identificar oportunidades de "long tail" (ej. "post-checkout villa cleaning Pedregal")

### 1.3 Contenido a preparar antes de desarrollar
- [ ] PENDIENTE MARLON: Fotos profesionales de Marlon y Cecilia (clave para generar confianza)
- [ ] PENDIENTE MARLON: Fotos de trabajos realizados: villas limpias, desayunos, detalles de presentación — alta calidad
- [ ] PENDIENTE MARLON: Bios cortas y profesionales de cada miembro (inglés y español)
- [ ] PENDIENTE MARLON: Recopilar 5–8 reseñas reales de clientes actuales
- [x] Lista de servicios con descripción de cada uno → Definida: Villa Cleaning, Butler/Mayordomo Service, Breakfast Service, Deep Cleaning, Airbnb/VRBO Turnover
- [x] Decidir si se muestran precios, rangos o solo "cotización en sitio" → Solo "cotización en sitio" por ahora (los precios varían por villa)
- [ ] PENDIENTE MARLON: WhatsApp y email de contacto oficial

---

## Fase 2 — Arquitectura escalable del sitio (semana 2)

> Pensar el sitio para crecer: empezar simple, pero con una estructura que permita agregar servicios, idiomas, blog o reservaciones online sin rehacer todo.

### 2.1 Estructura de páginas
- [x] **Inicio / Home** — hero, propuesta de valor, resumen de servicios
- [x] **Servicios** — página dedicada (con posibilidad de una subpágina por servicio a futuro)
- [x] **El equipo** — Marlon, Cecilia y futuros miembros
- [x] **Cómo funciona** — proceso de cotización
- [x] **Reseñas / testimonios**
- [x] **Contacto / cotización**
- [x] **Footer** — contacto, zonas que cubren, redes

### 2.2 Decisiones de escalabilidad
- [x] Estructura modular: cada servicio como bloque reutilizable (fácil agregar nuevos) → Cada sección es un componente independiente
- [x] Sistema preparado para más idiomas a futuro (no solo inglés/español) → next-intl permite agregar locales en 1 línea
- [x] Espacio reservado para un blog (excelente para SEO a mediano plazo) → /blog/ route preparado
- [x] Base lista para integrar reservaciones o pagos online más adelante → Arquitectura Next.js lista para API routes
- [x] CMS o estructura que permita al equipo editar contenido sin programar → Todos los textos en archivos JSON (src/messages/)

---

## Fase 3 — Diseño profesional que inspire confianza (semana 3)

> El diseño es lo que convierte una visita en un cliente. Debe verse caro, limpio y confiable desde el primer segundo.

### 3.1 Dirección visual
- [x] Estética: elegante, minimalista, fotografía protagonista — estilo "boutique hotel" → Playfair Display + Inter, paleta arena/crema/oro
- [x] Paleta de colores sobria y premium (tonos naturales, mucho espacio en blanco) → #FAF8F5 cream, #2D2D2D charcoal, #C4A265 gold
- [x] Tipografía profesional y legible → Playfair Display (headings) + Inter (body)
- [x] Consistencia visual en todo el sitio → Design system en globals.css con variables CSS

### 3.2 Elementos que generan confianza
- [ ] PENDIENTE MARLON: Fotos reales del equipo y del trabajo (no stock genérico) → Placeholders incluidos, reemplazar con fotos reales
- [x] Credenciales visibles: "Mayordomo certificado · 9 años en hotelería de ultra lujo"
- [ ] PENDIENTE MARLON: Reseñas y testimonios con nombre real → Placeholders bilingües incluidos, reemplazar con reseñas reales
- [x] Señales de confianza en el hero: visita sin costo, certificado, experiencia → TrustSignals component
- [x] Logos de plataformas que manejan (Airbnb, VRBO, Booking, Expedia, TripAdvisor) → Footer
- [x] Datos de contacto claros y accesibles en todo momento → WhatsApp flotante + sección contacto fija

### 3.3 Experiencia de usuario
- [x] Diseño 100% responsive — optimizado para móvil → Tailwind responsive, mobile-first
- [x] Botón de WhatsApp flotante siempre visible → WhatsAppButton component con animación pulse
- [x] Navegación simple e intuitiva → Header con mobile hamburger menu
- [x] Llamados a la acción claros ("Solicita cotización gratuita") → Hero CTA + ContactForm en cada página

---

## Fase 4 — Desarrollo bilingüe con SEO (semana 4–5)

### 4.1 Bilingüe
- [x] Página bilingüe inglés / español con toggle de idioma visible → LanguageToggle component, next-intl
- [x] Todos los textos traducidos profesionalmente (no Google Translate) → Traducciones curadas manualmente en en.json y es.json
- [x] Estructura de URLs separada por idioma para mejor SEO (ej. /en/ y /es/) → localePrefix: "always"

### 4.2 SEO on-page completo
- [x] Títulos y meta descripciones optimizados en ambos idiomas → Metadata en layout + cada página
- [x] Keywords objetivo incluidas en meta keywords y contenido
- [x] URLs amigables (/services, /team, /contact)
- [x] Imágenes con alt text descriptivo en ambos idiomas → (pendiente cuando se suban fotos reales)
- [x] Estructura de encabezados correcta (H1, H2, H3) → Jerarquía semántica en cada sección
- [x] Schema markup de negocio local (nombre, dirección, teléfono, servicios, reseñas) → JSON-LD en <head>
- [x] Velocidad de carga optimizada → Next.js static generation + Tailwind CSS purgado
- [x] Sitemap XML y robots.txt configurados → sitemap.ts + robots.ts

### 4.3 Plataforma
- [x] Elegir plataforma según escalabilidad → Next.js 16 + TypeScript + Tailwind CSS
- [x] Formulario de cotización conectado a WhatsApp y email → ContactForm component (WhatsApp + email links)

---

## Fase 5 — Posicionamiento y lanzamiento (semana 5–6)

### 5.1 Configuración técnica
- [ ] PENDIENTE: Google Search Console configurado desde el inicio → Requiere dominio publicado
- [ ] PENDIENTE: Google Analytics para medir tráfico y conversiones → Requiere dominio publicado
- [ ] PENDIENTE: Verificación de indexación en Google → Requiere dominio publicado

### 5.2 Google Business Profile (clave para posicionar local)
- [ ] PENDIENTE MARLON: Crear y optimizar perfil — aparecer en Google Maps cuando busquen "villa cleaning Cabo"
- [ ] PENDIENTE MARLON: Fotos, servicios, horarios y zona de cobertura
- [ ] PENDIENTE MARLON: Estrategia para conseguir las primeras reseñas en Google

### 5.3 Lanzamiento
- [x] Revisión final de textos en ambos idiomas (tono profesional y confiable) → Traducciones curadas
- [x] Pruebas en móvil, tablet y desktop → Diseño responsive mobile-first con Tailwind
- [x] Pruebas de velocidad y SEO → Build exitoso con Next.js static generation + sitemap/robots/schema
- [ ] PENDIENTE: Publicar dominio y lanzar → Comprar dominio, configurar hosting (Vercel recomendado), apuntar DNS

---

## Fase 6 — Crecimiento continuo (mes 2 en adelante)

> El SEO no es una sola vez: se construye con el tiempo. Esta fase mantiene el sitio creciendo.

- WhatsApp Business con catálogo de servicios
- Publicar reseñas nuevas constantemente en Google
- Blog con contenido útil para SEO (ej. "What to expect from a villa concierge in Cabo")
- Enlaces desde perfiles de Airbnb/VRBO que administran (backlinks de calidad)
- Monitoreo mensual de posiciones en Google y ajustes
- Agregar nuevos servicios o miembros del equipo conforme crezca el negocio

---

## Resumen de los 4 pilares del proyecto

1. **Posicionamiento (SEO):** investigación de keywords, SEO on-page, Google Business Profile y estrategia de contenido continua.
2. **Diseño profesional:** estética boutique, fotografía real, paleta premium y experiencia móvil impecable.
3. **Confianza:** credenciales visibles, equipo con nombre y cara, reseñas reales y señales de seguridad.
4. **Escalabilidad:** arquitectura modular, lista para más idiomas, blog, reservaciones y crecimiento del equipo.
