import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pía Gutiérrez Sasaky",
  description:
    "Página personal de Pía Gutiérrez Sasaky, psicóloga especializada en learning and development y diseño de soluciones de aprendizaje.",
};

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[var(--color-cream)] text-[var(--color-ink)]">
      <section className="relative isolate">
        <div className="hero-glow hero-glow-top" />
        <div className="hero-glow hero-glow-bottom" />

        <div className="mx-auto flex min-h-screen max-w-7xl flex-col justify-between px-6 py-8 sm:px-10 lg:px-16">
          <header className="flex items-center justify-between border-b border-[var(--color-line)] pb-5">
            <div>
              <p className="text-[0.7rem] uppercase tracking-[0.35em] text-[var(--color-muted)]">
                Página personal
              </p>
              <h1 className="mt-2 text-xl uppercase tracking-[0.2em] text-[var(--color-burgundy)]">
                Pía Gutiérrez Sasaky
              </h1>
            </div>

            <a
              className="rounded-full border border-[var(--color-burgundy)] px-5 py-2 text-xs uppercase tracking-[0.28em] text-[var(--color-burgundy)] transition hover:bg-[var(--color-burgundy)] hover:text-white"
              href="#contacto"
            >
              Conversemos
            </a>
          </header>

          <div className="grid gap-14 py-14 lg:grid-cols-[1.3fr_0.7fr] lg:items-end">
            <div className="max-w-3xl">
              <p className="mb-5 text-sm uppercase tracking-[0.32em] text-[var(--color-muted)]">
                Psicología, aprendizaje y desarrollo
              </p>
              <h2 className="font-serif text-5xl leading-none sm:text-6xl lg:text-8xl">
                Diseño
                <br />
                experiencias
                <br />
                de aprendizaje
                <br />
                con criterio y sensibilidad.
              </h2>
              <p className="mt-8 max-w-xl text-base leading-8 text-[var(--color-copy)] sm:text-lg">
                Soy psicóloga y me especializo en learning and development, con
                un enfoque orientado al diseño de soluciones de aprendizaje y
                al desarrollo de capacidades. Me interesa construir experiencias
                formativas que conecten sensibilidad humana, estructura y visión
                estratégica.
              </p>
              <div className="mt-10 flex flex-wrap gap-4">
                <a
                  className="inline-flex rounded-full bg-[var(--color-burgundy)] px-6 py-3 text-xs uppercase tracking-[0.3em] text-white transition hover:translate-y-[-1px] hover:shadow-[0_20px_40px_rgba(95,5,28,0.2)]"
                  href="#sobre-mi"
                >
                  Conoce mi enfoque
                </a>
                <a
                  className="inline-flex rounded-full border border-[var(--color-burgundy)] px-6 py-3 text-xs uppercase tracking-[0.3em] text-[var(--color-burgundy)] transition hover:bg-[var(--color-burgundy)] hover:text-white"
                  href="https://www.linkedin.com/in/p%C3%ADa-guti%C3%A9rrez-sasaky/"
                >
                  LinkedIn
                </a>
              </div>
            </div>

            <div className="relative">
              <div className="palette-card">
                <p className="text-[0.72rem] uppercase tracking-[0.3em] text-[var(--color-muted)]">
                  Dirección visual
                </p>
                <div className="mt-6 space-y-4">
                  <ColorChip hex="#5f051c" label="Borgoña profunda" />
                  <ColorChip hex="#ffcfcf" label="Rosa empolvado" />
                  <ColorChip hex="#c4bf7d" label="Oliva dorado" />
                </div>
              </div>
            </div>
          </div>

          <div className="grid gap-6 border-t border-[var(--color-line)] pt-8 text-sm text-[var(--color-copy)] sm:grid-cols-3">
            <Stat label="Tono" value="Editorial y calido" />
            <Stat label="Enfoque" value="Learning & Development" />
            <Stat label="Base" value="Psicologia y diseño" />
          </div>
        </div>
      </section>

      <section
        id="sobre-mi"
        className="mx-auto max-w-7xl px-6 py-18 sm:px-10 lg:px-16"
      >
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="section-kicker">Sobre mí</p>
            <h3 className="mt-4 font-serif text-4xl leading-tight sm:text-5xl">
              Trabajo desde la convicción de que aprender también es una forma
              de transformación.
            </h3>
          </div>

          <div className="rounded-[2rem] border border-[var(--color-line)] bg-white/70 p-8 backdrop-blur">
            <p className="text-base leading-8 text-[var(--color-copy)]">
              Me interesa diseñar procesos que ayuden a las personas y a las
              organizaciones a desarrollar capacidades con intención, claridad y
              profundidad. Mi aproximación une mirada psicológica, comprensión
              del aprendizaje y criterio para estructurar soluciones que se
              sientan útiles, humanas y sostenibles.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-18 sm:px-10 lg:px-16">
        <div className="grid gap-6 lg:grid-cols-3">
          <InfoCard
            index="01"
            title="Enfoque profesional"
            body="Desarrollo soluciones de aprendizaje y formación con una mirada que combina estructura, empatía y diseño intencional."
          />
          <InfoCard
            index="02"
            title="Fortalezas"
            body="Aprendizaje, desarrollo de capacidades, pensamiento estratégico y sensibilidad para traducir necesidades complejas en experiencias claras."
          />
          <InfoCard
            index="03"
            title="Estilo de trabajo"
            body="Me interesa crear propuestas que no solo funcionen, sino que también conecten con las personas, su contexto y su potencial."
          />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-18 sm:px-10 lg:px-16">
        <div className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="rounded-[2rem] bg-[var(--color-burgundy)] p-8 text-white">
            <p className="text-[0.72rem] uppercase tracking-[0.3em] text-white/70">
              Formación
            </p>
            <h3 className="mt-5 font-serif text-4xl leading-tight">
              Base académica con mirada interdisciplinaria.
            </h3>
            <p className="mt-5 text-base leading-8 text-white/80">
              Mi perfil integra psicología, aprendizaje y desarrollo con una
              búsqueda constante por diseñar soluciones más relevantes,
              conscientes y bien pensadas.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            <EducationCard
              title="Pacífico Business School"
              body="Espacio formativo que fortalece una mirada estratégica para el desarrollo y la gestión del aprendizaje."
            />
            <EducationCard
              title="Pontificia Universidad Católica del Perú"
              body="Formación de base que sostiene una comprensión rigurosa de las personas, los procesos y el desarrollo humano."
            />
          </div>
        </div>
      </section>

      <section
        id="contacto"
        className="border-t border-[var(--color-line)] bg-[var(--color-olive)]/18"
      >
        <div className="mx-auto grid max-w-7xl gap-8 px-6 py-16 sm:px-10 lg:grid-cols-[1fr_auto] lg:px-16">
          <div>
            <p className="section-kicker">Contacto</p>
            <h3 className="mt-4 max-w-2xl font-serif text-4xl leading-tight sm:text-5xl">
              Si quieres conversar sobre aprendizaje, desarrollo o diseño de
              capacidades, estaré encantada de conectar.
            </h3>
            <p className="mt-5 max-w-xl text-base leading-8 text-[var(--color-copy)]">
              Esta página presenta una primera versión editorial de mi perfil
              profesional y puede seguir creciendo con proyectos, experiencia
              detallada o una sección de servicios.
            </p>
          </div>

          <div className="flex items-end">
            <a
              className="inline-flex rounded-full bg-[var(--color-burgundy)] px-6 py-3 text-xs uppercase tracking-[0.3em] text-white transition hover:translate-y-[-1px] hover:shadow-[0_20px_40px_rgba(95,5,28,0.2)]"
              href="https://www.linkedin.com/in/p%C3%ADa-guti%C3%A9rrez-sasaky/"
            >
              Ver LinkedIn
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

function ColorChip({ hex, label }: { hex: string; label: string }) {
  return (
    <div className="flex items-center gap-4">
      <div
        aria-hidden="true"
        className="h-14 w-14 rounded-2xl border border-black/5 shadow-[0_12px_30px_rgba(30,20,20,0.08)]"
        style={{ backgroundColor: hex }}
      />
      <div>
        <p className="text-sm uppercase tracking-[0.18em] text-[var(--color-burgundy)]">
          {label}
        </p>
        <p className="mt-1 text-sm text-[var(--color-copy)]">{hex}</p>
      </div>
    </div>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="text-[0.72rem] uppercase tracking-[0.3em] text-[var(--color-muted)]">
        {label}
      </p>
      <p className="mt-2 text-lg text-[var(--color-burgundy)]">{value}</p>
    </div>
  );
}

function InfoCard({
  index,
  title,
  body,
}: {
  index: string;
  title: string;
  body: string;
}) {
  return (
    <article className="group rounded-[2rem] border border-[var(--color-line)] bg-white/72 p-7 transition hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(74,67,35,0.08)]">
      <p className="text-[0.72rem] uppercase tracking-[0.3em] text-[var(--color-muted)]">
        {index}
      </p>
      <h4 className="mt-5 font-serif text-3xl text-[var(--color-burgundy)]">
        {title}
      </h4>
      <p className="mt-4 text-base leading-8 text-[var(--color-copy)]">
        {body}
      </p>
    </article>
  );
}

function EducationCard({ title, body }: { title: string; body: string }) {
  return (
    <article className="rounded-[2rem] border border-[var(--color-line)] bg-white/72 p-7 backdrop-blur">
      <p className="text-[0.72rem] uppercase tracking-[0.3em] text-[var(--color-muted)]">
        Formación
      </p>
      <h4 className="mt-5 font-serif text-3xl text-[var(--color-burgundy)]">
        {title}
      </h4>
      <p className="mt-4 text-base leading-8 text-[var(--color-copy)]">
        {body}
      </p>
    </article>
  );
}
