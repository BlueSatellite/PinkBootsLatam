import { useTranslations } from "next-intl";
import type { Metadata } from "next";

const timeline = [
  { era: "4000 a.C.", title: "Sumeria", text: "Las mujeres eran las principales cerveceras. La elaboracion de cerveza era una actividad domestica dominada por mujeres." },
  { era: "Antiguo Egipto", title: "Sacerdotisas cerveceras", text: "Las mujeres, especialmente las sacerdotisas, elaboraban cerveza para rituales religiosos. Uno de los puestos mas importantes era el de 'supervisar las cervecerias'." },
  { era: "Siglo XII", title: "Hildegard of Bingen", text: "Esta monja benedictina tuvo la idea de anadir lupulo a la cerveza para conservarla y darle amargor. Sus descubrimientos transformaron la elaboracion, permitiendo almacenar la cerveza por mucho mas tiempo." },
  { era: "Edad Media", title: "Las Alewives", text: "En Europa medieval, las mujeres eran cerveceras prominentes conocidas como 'alewives'. La cerveza se producia en el hogar y ellas lideraban el oficio." },
  { era: "Revolucion Industrial", title: "Declive", text: "La produccion se traslado de los hogares a las fabricas. La participacion de las mujeres disminuyo considerablemente debido a restricciones laborales y sociales." },
  { era: "Siglo XXI", title: "El Renacimiento", text: "En los ultimos anos ha habido un resurgimiento de mujeres en la industria cervecera. En 2019, aproximadamente el 7.5% de cerveceros en EE.UU. eran mujeres, y el 37% de las cervecerias tenia al menos una mujer en rol de liderazgo." },
];

const statsLatam = [
  { country: "Brasil", pct: 27 },
  { country: "Mexico", pct: 24 },
  { country: "Chile", pct: 20 },
  { country: "Colombia", pct: 17 },
  { country: "Argentina", pct: 12 },
];

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Nuestra Historia",
    description: "Conoce la historia de Pink Boots Society Latin America y el legado de las mujeres cerveceras desde la antiguedad hasta hoy.",
  };
}

export default function AboutPage() {
  const t = useTranslations("about");

  return (
    <>
      <section className="relative bg-[var(--color-text-primary)] py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <p className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-[var(--color-pink-300)]">
            Pink Boots Society Latin America
          </p>
          <h1 className="mt-4 font-display text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            {t("title")}
          </h1>
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
            Mujeres cerveceras en la Historia
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-[var(--color-text-muted)]">
            La historia de la cerveza tiene miles de anos. En muchas culturas antiguas, las mujeres eran las principales productoras.
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
            Mujeres en la cerveza: Latinoamerica hoy
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-[var(--color-text-secondary)]">
            El crecimiento de la participacion femenina en la cerveceria artesanal latinoamericana es un hecho. Paises como Brasil y Mexico han visto un aumento significativo en mujeres ocupando roles clave en cervecerias.
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

          <p className="mt-6 text-base leading-relaxed text-[var(--color-text-secondary)]">
            {t("latamIntro")}
          </p>

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
        </div>
      </section>
    </>
  );
}
