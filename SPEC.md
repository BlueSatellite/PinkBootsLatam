# Spec: Pink Boots Society Latin America Website

## Objective

Crear una pagina web para Pink Boots Society Latin America, el chapter padre de Latinoamerica (incluyendo Brasil). La web apoya a mujeres y personas no binarias en la industria de bebidas fermentadas y alcoholicas.

**Usuario objetivo:** mujeres y personas no binarias en la industria cervecera/fermentada de Latinoamerica que buscan comunidad, educacion, becas y eventos.

**Tagline:** "Distintas culturas, una sola pasion: la cerveza"

**No es una replica del sitio oficial de PBS USA.** Es una pagina practica, facil de usar y con enfoque latinoamericano.

## Tech Stack

- **Next.js 16** (App Router) — SSR/SSG, SEO, routing
- **TypeScript 5**
- **Tailwind CSS 4** — estilos responsive
- **next-intl** — i18n español (default) + portugues futuro
- **Framer Motion** — animaciones sutiles
- **Vercel** — hosting y deploy

## Commands

```
Dev:    npm run dev
Build:  npm run build
Start:  npm run start
Lint:   npx next lint
```

## Project Structure

```
PinkBootsLatam/
  src/
    app/
      [locale]/            # Rutas localizadas (es/, pt/)
        page.tsx           # Home
        layout.tsx         # Layout con Navbar + Footer
        nuestra-historia/  # (futuro)
        capitulos/         # (futuro)
        membresia/         # (futuro)
        eventos/           # (futuro)
        becas/             # (futuro)
        blog/              # (futuro)
        patrocinadores/    # (futuro)
        donaciones/        # (futuro)
      layout.tsx           # Root layout (html, body, fuentes)
      page.tsx             # Redirect / -> /es
      globals.css          # Tailwind + design tokens
    components/
      layout/
        Navbar.tsx
        Footer.tsx
      ui/
        Button.tsx
        Section.tsx
    i18n/
      routing.ts           # Config next-intl
      request.ts           # Loader de mensajes
  messages/
    es.json                # Traducciones español
    pt.json                # Traducciones portugues (placeholder)
  public/                  # Assets estaticos
  next.config.ts
  postcss.config.mjs
  tsconfig.json
```

## Code Style

Componentes en TypeScript con React Server Components por defecto, `"use client"` solo cuando se necesita interactividad. Tailwind con semantic design tokens via CSS custom properties en `@theme`. Componentes colocalizados por funcion (layout/, ui/). Nombres de archivo PascalCase para componentes, kebab-case para rutas.

```tsx
// Ejemplo de componente servidor con next-intl
import { useTranslations } from "next-intl";

export default function AboutPage() {
  const t = useTranslations("about");
  return (
    <section>
      <h1>{t("title")}</h1>
      <p>{t("description")}</p>
    </section>
  );
}
```

## Testing Strategy

- Framework: Vitest + @testing-library/react
- Tests ubicados junto a los componentes (co-location): `Componente.test.tsx`
- Niveles: unit tests para componentes criticos, integracion para paginas
- Coverage: ~70% minimo en componentes compartidos, no requerido en paginas estaticas
- Ejecutar: `npm test` (a configurar con Vitest)

## Boundaries

**Always:**
- Ejecutar `npm run build` antes de cada commit
- Usar design tokens semanticos, no valores raw (pink-brand, text-primary, surface-alt)
- Seguir la nomenclatura de commits: `feat:`, `fix:`, `refactor:`, `chore:`
- Mantener accesibilidad WCAG 2.1 AA (labels, keyboard nav, contraste)
- Separar cada feature en su propio commit atomico
- No mezclar refactors con features en el mismo commit

**Ask first:**
- Agregar nuevas dependencias
- Cambiar la paleta de colores o tipografia
- Agregar secciones que no esten en el spec
- Modificar la arquitectura de routing/i18n
- Agregar base de datos o backend

**Never:**
- Commitear secrets, .env o node_modules
- Usar CSS inline o valores de espaciado arbitrarios
- Generar URLs o contenido sin confirmar con el cliente
- Dejar codigo no utilizado o imports muertos

## Success Criteria

1. Build exitoso sin errores ni warnings
2. Sitio 100% responsive (320px, 768px, 1024px, 1440px)
3. Home page funcional: hero, mision, sponsors, CTAs
4. Todas las paginas secundarias con contenido real (no lorem ipsum)
5. SEO basico configurado (metadatos, sitemap, og:tags)
6. Lighthouse score > 90 en Performance, Accessibility, Best Practices, SEO
7. i18n funcionando (español hoy, portugues "activado" como locale registrado)
8. El cliente puede editar contenido basico (textos en messages/es.json)

## Open Questions

1. **Logo en alta resolucion** — El cliente dijo tener banco de imagenes pero aun no lo recibimos. Sin el logo no podemos finalizar el branding.
2. **"Ya hiciste la informacion"** — Ambiguo. Significa que ya redactaron textos o que necesitan que los redactemos?
3. **Listado de capitulos** — Vivis no confirmo cuantos capitulos hay ni en que paises. Necesario para la pagina de capitulos.
4. **Dominio** — Sugerimos `pinkbootslatam.org` pero no esta comprado aun.
5. **Fecha de lanzamiento** — El cliente no definio una fecha objetivo.
6. **Contacto** — El cliente dijo "omitamos el contacto por ahora". Necesitaremos definirlo antes del lanzamiento.
7. **Textos en portugues** — El cliente quiere portugues a futuro. Dejamos la infraestructura lista pero las traducciones PT actuales son placeholder genericas.
