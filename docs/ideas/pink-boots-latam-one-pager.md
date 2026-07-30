# Pink Boots Society Latin America — One-Pager

## Problem Statement
Como podriamos crear una web para PBS Latam que conecte a mujeres cerveceras con sus capitulos locales en toda Latinoamerica, destacando eventos y comunidad, sin replicar el sitio de EE.UU. y con mantenimiento simple.

## Recommended Direction
**Hibrido: agenda viva + hub de capitulos.** La home prioriza tres elementos: eventos proximos (dinamico), buscador de capitulos (accion principal), y aliados/sponsors (credibilidad). El contenido institucional (historia, mision) ocupa un segundo plano. Cada capitulo podria tener una mini-landing con datos de contacto.

La persona llega, ve eventos cerca suyo, encuentra su capitulo local, contacta.

## Target User
Mujeres y personas no binarias en la industria cervecera de cualquier pais de Latinoamerica (incluyendo Brasil). Tambien lideres de capitulo que necesitan visibilidad.

## Primary Action
Contactar al capitulo local de su pais.

## Key Assumptions to Validate
- [ ] Hay suficientes eventos (al menos 1 por mes) para que la seccion no se vea vacia — preguntar a Vivis frecuencia real
- [ ] Los lideres de capitulo existen y quieren ser contactadas — confirmar datos y consentimiento
- [ ] Las cerveceras latinoamericanas prefieren contacto local antes que ir directo a USA — validar con 2-3 miembros reales
- [ ] El contenido se mantendra actualizado (eventos, fotos) — definir quien lo hace y cada cuanto

## MVP Scope
**Incluido:**
- Home con hero + 3 cards principales (capitulos, eventos, aliados)
- Pagina de eventos con lista y tipos de evento
- Pagina de capitulos con buscador/listado
- Pagina de patrocinadores con logos clickeables
- Membresia como CTA hacia PBS USA
- i18n ES + PT listo

**No incluido en MVP:**
- Blog — se activa cuando haya contenido real
- Tienda — no hay productos aun
- Donaciones — CTA a Instagram por ahora
- Registro/login local — la membresia es via USA

## Not Doing (and Why)
- **Replicar todas las secciones de PBS USA** — el cliente dijo explicitamente que no quiere replica
- **Pasarela de pagos local** — la membresia se cobra en USA y se redistribuye; agregar Mercado Pago seria complejidad innecesaria hoy
- **Panel CMS complejo** — el mantenimiento lo hace axeda editando archivos; mas simple = mas mantenible
- **App nativa** — PWA (agregar al home screen) cubre iOS y Android sin costo extra

## Open Questions
- ¿Cuantos eventos reales hay por mes? (define si la seccion eventos se ve dinamica o vacia)
- ¿Cuantos capitulos existen con datos de contacto reales? (define la pagina de capitulos)
- ¿Queremos que cada capitulo tenga su mini-pagina dentro del sitio, o solo listado?
