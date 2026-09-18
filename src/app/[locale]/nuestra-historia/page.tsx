import { useTranslations } from "next-intl";
import type { Metadata } from "next";
import { Link } from "@/i18n/routing";

const usaHistory = [
  "Pink Boots Society nació en 2007, cuando la maestra cervecera estadounidense Teri Fahrendorf emprendió un viaje en carretera por Estados Unidos elaborando cerveza junto a otras mujeres del gremio. Ese recorrido —que la llevó a colaborar con decenas de cerveceras en sus propias cervecerías— le mostró que había una red de mujeres profesionales de la cerveza que no estaba conectada entre sí, y que muchas se sentían solas dentro de una industria predominantemente masculina.",
  "Teri creó entonces una lista para conectarlas y la llamó Pink Boots Society, inspirada en las botas rosadas que llevaba durante su recorrido. Junto a las cerveceras que conoció en el camino, la lista se convirtió en una organización sin fines de lucro dedicada a asistir, inspirar y motivar a las mujeres y personas no binarias de la industria de bebidas fermentadas y alcohólicas a avanzar en sus carreras a través de la educación.",
  "Desde entonces, Pink Boots Society creció de un pequeño grupo de fundadoras a una red global con capítulos en distintos países. Cada año, el Pink Boots Collaboration Brew Day reúne a cervecerías de todo el mundo para elaborar cerveza el mismo día y recaudar fondos para becas educativas. La organización ha financiado becas para cientos de mujeres y personas no binarias, impulsando certificaciones, cursos y programas de formación.",
];

const usaMilestones = [
  { year: "2007", text: "Teri Fahrendorf realiza su viaje por cervecerías de Estados Unidos y se funda Pink Boots Society." },
  { year: "2008", text: "Se constituye formalmente la organización sin fines de lucro y comienzan los primeros capítulos." },
  { year: "2014", text: "Se celebra el primer Pink Boots Collaboration Brew Day, que se convierte en el evento insignia anual." },
  { year: "Hoy", text: "Pink Boots Society es una red global con capítulos en múltiples países y un programa de becas que ha apoyado a cientos de profesionales." },
];

const latamHistory = [
  "La historia de Pink Boots en Latinoamérica comenzó en Perú, cuando Megan Garity —una cervecera estadounidense— fundó Pink Boots Perú, sembrando la semilla de la comunidad en la región. La organización continuó su camino en manos de Andrea Huertas, quien siguió impulsando el movimiento en el país.",
  "Pink Boots Latin America como organización regional nació con la visión de Silvia De Tomás y Ericka Otero, quienes la formalizaron juntas con el objetivo de que no solamente las mujeres peruanas pudiesen obtener el beneficio de la educación en bebidas fermentadas, sino extenderlo por toda Latinoamérica —con educación de alto nivel en habla hispana. Ericka Otero continuó liderándola, buscando impulsar la educación, la colaboración, el crecimiento profesional y la sororidad entre sus integrantes.",
  "Consolidando a Pink Boots Latam como una red regional, la comunidad sumó integrantes en México (con Viviana López en Cuernavaca), Chile (con Verónica Carrasco en Santiago), Brasil (con Fernanda de Acosta) y diversos países de la región.",
  "En 2026 nació un nuevo hito: el sub-capítulo Pink Boots Latam / Puerto Rico, conformado por 21 integrantes y liderado por Keishla Torres, organizó el primer Collaboration Brew Day LATAM en marzo y fue oficializado como sub-capítulo en mayo. Además, Silvia De Tomás y Ericka Otero fueron seleccionadas como juezas del World Beer Cup 2026. De México a la Patagonia, seguimos creciendo con una sola pasión: la cerveza.",
];

const timeline = [
  { era: "4000 a.C.", title: "Sumeria", text: "Las mujeres eran las principales cerveceras. La elaboración de cerveza era una actividad doméstica dominada por mujeres." },
  { era: "Antiguo Egipto", title: "Sacerdotisas cerveceras", text: "Las mujeres, especialmente las sacerdotisas, elaboraban cerveza para rituales religiosos. Uno de los puestos más importantes era el de 'supervisar las cervecerías'." },
  { era: "Siglo XII", title: "Hildegard of Bingen", text: "Esta monja benedictina tuvo la idea de añadir lúpulo a la cerveza para conservarla y darle amargor. Sus descubrimientos transformaron la elaboración, permitiendo almacenar la cerveza por mucho más tiempo." },
  { era: "Edad Media", title: "Las Alewives", text: "En Europa medieval, las mujeres eran cerveceras prominentes conocidas como 'alewives'. La cerveza se producía en el hogar y ellas lideraban el oficio." },
  { era: "Revolución Industrial", title: "Declive", text: "La producción se trasladó de los hogares a las fábricas. La participación de las mujeres disminuyó considerablemente debido a restricciones laborales y sociales." },
  { era: "Siglo XXI", title: "El Renacimiento", text: "En los últimos años ha habido un resurgimiento de mujeres en la industria cervecera. En 2019, aproximadamente el 7.5% de cerveceros en EE.UU. eran mujeres, y el 37% de las cervecerías tenía al menos una mujer en rol de liderazgo." },
];

const statsLatam = [
  { country: "Brasil", pct: 27 },
  { country: "México", pct: 24 },
  { country: "Chile", pct: 20 },
  { country: "Colombia", pct: 17 },
  { country: "Argentina", pct: 12 },
];

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Nuestra Historia",
    description: "Conoce la historia de Pink Boots Society desde sus orígenes en Estados Unidos hasta su llegada a Latinoamérica, y el legado de las mujeres cerveceras.",
  };
}

export default function AboutPage() {
  const t = useTranslations("about");

  return (
    <>
      <section className="relative overflow-hidden bg-white py-14 sm:py-16">
        <img
          src="/banners/nuestra-historia.webp"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="relative z-10 mx-auto max-w-3xl px-4">
          <div className="rounded-2xl bg-black/60 p-6 text-center shadow-sm backdrop-blur-sm sm:p-8">
            <p className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-[var(--color-pink-300)]">
              Pink Boots Society Latin America
            </p>
            <h1 className="mt-3 font-display text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              {t("title")}
            </h1>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-xl px-4 -mt-6 relative z-10 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-xl border border-[var(--color-border-default)] bg-black shadow-lg">
          <video
            controls
            playsInline
            preload="metadata"
            className="aspect-video w-full"
            poster="/sponsors/pink-boots-web.png"
          >
            <source src="/intro-video.mp4" type="video/mp4" />
          </video>
        </div>
      </div>

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-4">
          <h2 className="font-display text-2xl font-bold tracking-tight text-[var(--color-text-primary)]">
            Pink Boots Society: los orígenes
          </h2>
          <div className="mt-4 space-y-4">
            {usaHistory.map((paragraph) => (
              <p key={paragraph.slice(0, 40)} className="text-base leading-relaxed text-[var(--color-text-secondary)]">
                {paragraph}
              </p>
            ))}
          </div>

          <div className="mt-10 space-y-6">
            {usaMilestones.map((milestone) => (
              <div key={milestone.year} className="flex gap-4">
                <div className="flex w-16 shrink-0 flex-col items-end pt-1">
                  <span className="text-xs font-bold uppercase tracking-wider text-[var(--color-pink-brand)]">
                    {milestone.year}
                  </span>
                </div>
                <div className="min-w-0 border-l-2 border-[var(--color-pink-200)] pb-4 pl-5">
                  <p className="text-sm leading-relaxed text-[var(--color-text-secondary)]">{milestone.text}</p>
                </div>
              </div>
            ))}
          </div>

          <h2 className="mt-12 font-display text-2xl font-bold tracking-tight text-[var(--color-text-primary)]">
            Pink Boots en Latinoamérica
          </h2>
          <div className="mt-4 space-y-4">
            {latamHistory.map((paragraph) => (
              <p key={paragraph.slice(0, 40)} className="text-base leading-relaxed text-[var(--color-text-secondary)]">
                {paragraph}
              </p>
            ))}
          </div>

          <div className="mt-8 rounded-2xl border border-[var(--color-pink-200)] bg-gradient-to-r from-[var(--color-pink-50)] to-white p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-sm">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[var(--color-pink-brand)]">Nuestro Equipo</span>
              <h3 className="mt-1 font-display text-lg font-bold text-[var(--color-text-primary)]">
                Conoce a las líderes de Pink Boots en Latinoamérica
              </h3>
              <p className="mt-1 text-sm text-[var(--color-text-secondary)]">
                Descubre los perfiles, trayectoria y proyectos de las profesionales que guían nuestra comunidad.
              </p>
            </div>
            <Link
              href="/quienes-somos"
              className="shrink-0 inline-flex items-center gap-2 rounded-full bg-[var(--color-pink-brand)] px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[var(--color-pink-600)] shadow-sm"
            >
              Ver Quiénes Somos
              <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
          </div>

          <h2 className="mt-12 font-display text-2xl font-bold tracking-tight text-[var(--color-text-primary)]">
            Mujeres cerveceras en la Historia
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-[var(--color-text-muted)]">
            La historia de la cerveza tiene miles de años. En muchas culturas antiguas, las mujeres eran las principales productoras.
          </p>

          <div className="mt-10 space-y-6">
            {timeline.map((item) => (
              <div key={item.era} className="flex gap-4">
                <div className="flex w-24 shrink-0 flex-col items-end pt-1">
                  <span className="text-xs font-bold uppercase tracking-wider text-[var(--color-pink-brand)]">
                    {item.era}
                  </span>
                </div>
                <div className="min-w-0 border-l-2 border-[var(--color-pink-200)] pb-8 pl-5">
                  <h3 className="font-display text-sm font-bold text-[var(--color-text-primary)]">{item.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-[var(--color-text-secondary)]">{item.text}</p>
                </div>
              </div>
            ))}
          </div>

          <h2 className="mt-8 font-display text-2xl font-bold tracking-tight text-[var(--color-text-primary)]">
            Mujeres en la cerveza: Latinoamérica hoy
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-[var(--color-text-secondary)]">
            El crecimiento de la participación femenina en la cervecería artesanal latinoamericana es un hecho. Países como Brasil y México han visto un aumento significativo en mujeres ocupando roles clave en cervecerías.
          </p>

          <div className="mt-6 space-y-2">
            {statsLatam.map((s) => (
              <div key={s.country} className="flex items-center gap-3">
                <span className="w-16 text-right text-xs font-semibold text-[var(--color-text-secondary)]">{s.country}</span>
                <div className="h-2 flex-1 overflow-hidden rounded-full bg-[var(--color-surface-muted)]">
                  <div className="h-full rounded-full bg-[var(--color-pink-brand)]" style={{ width: `${s.pct * 3}%` }} />
                </div>
                <span className="w-10 text-xs font-bold text-[var(--color-pink-brand)]">{s.pct}%</span>
              </div>
            ))}
          </div>

          <div className="mt-10 rounded-xl border border-[var(--color-pink-200)] bg-[var(--color-pink-50)] p-6">
            <h2 className="font-display text-lg font-bold text-[var(--color-text-primary)]">
              {t("missionLabel")}
            </h2>
            <p className="mt-2 text-[var(--color-text-secondary)]">
              {t("mission")}
            </p>
          </div>

          <div className="mt-6 rounded-xl border border-[var(--color-pink-200)] bg-[var(--color-pink-50)] p-6">
            <h2 className="font-display text-lg font-bold text-[var(--color-text-primary)]">
              {t("visionLabel")}
            </h2>
            <p className="mt-2 text-[var(--color-text-secondary)]">
              {t("vision")}
            </p>
          </div>

          <h2 className="mt-10 font-display text-2xl font-bold tracking-tight text-[var(--color-text-primary)]">
            {t("valuesTitle")}
          </h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {t.raw("values").map((value: { title: string; description: string }) => (
              <div key={value.title} className="rounded-xl border border-[var(--color-border-default)] p-5">
                <h3 className="font-display text-sm font-bold uppercase tracking-wide text-[var(--color-pink-brand)]">
                  {value.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[var(--color-text-secondary)]">
                  {value.description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-12 rounded-2xl border border-[var(--color-border-default)] bg-[var(--color-surface-alt)] p-6 sm:p-8 text-center">
            <h3 className="font-display text-lg font-bold text-[var(--color-text-primary)]">
              ¿Quieres conocer al equipo que lidera la comunidad?
            </h3>
            <p className="mx-auto mt-2 max-w-md text-sm text-[var(--color-text-muted)]">
              Conoce a las fundadoras, líderes de capítulos y colaboradoras activas en toda la región.
            </p>
            <div className="mt-4">
              <Link
                href="/quienes-somos"
                className="inline-flex items-center gap-2 rounded-full bg-[var(--color-pink-brand)] px-6 py-2.5 text-sm font-bold text-white transition-colors hover:bg-[var(--color-pink-600)] shadow-sm"
              >
                Conoce a nuestro Equipo en Quiénes Somos
                <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
