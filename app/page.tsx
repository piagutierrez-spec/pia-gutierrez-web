import type { Metadata } from "next";
import { VirtualAssistant } from "./VirtualAssistant";

const strengths = [
  "Psicología aplicada al aprendizaje",
  "Diseño de experiencias formativas",
  "Desarrollo docente y capacidades",
  "Estrategia con sensibilidad humana",
];

const serviceCards = [
  {
    index: "01",
    title: "Diseño de experiencias de aprendizaje",
    body: "Creo soluciones formativas con estructura, intención y claridad pedagógica, articulando competencias, secuencias de aprendizaje y recursos que respondan a necesidades reales.",
    accent: "warm",
  },
  {
    index: "02",
    title: "Desarrollo docente y fortalecimiento de capacidades",
    body: "Acompaño procesos de mejora docente y desarrollo profesional a partir de diagnósticos, evidencia de desempeño, talleres y conversaciones de retroalimentación con sentido práctico.",
    accent: "light",
  },
];

const reflections = [
  {
    title: "Aprender es transformar, no solo recibir contenido",
    body: "Para mí, una propuesta formativa tiene más valor cuando moviliza comprensión, criterio y acción. El aprendizaje se vuelve poderoso cuando dialoga con la experiencia y el contexto de las personas.",
  },
  {
    title: "La psicología amplía la profundidad del diseño",
    body: "Mi formación me lleva a pensar la formación desde lo humano: las motivaciones, las resistencias, el sentido, la forma en que una persona procesa, conecta y se apropia de lo que aprende.",
  },
  {
    title: "La sensibilidad también es una decisión estratégica",
    body: "Creo en soluciones que mantengan rigor, pero que no pierdan humanidad. Lo claro, lo bien estructurado y lo emocionalmente inteligente no compiten entre sí: se potencian.",
  },
];

const stats = [
  { value: "3+", label: "Años en educación y formación" },
  { value: "4", label: "Líneas de trabajo integradas" },
  { value: "100%", label: "Mirada centrada en lo humano" },
];

const gallery = Array.from({ length: 5 }, (_, index) => ({
  src: "/pia-profile.jpeg",
  alt: `Retrato profesional de Pía Gutiérrez Sasaky ${index + 1}`,
}));

export const metadata: Metadata = {
  title: "Pía Gutiérrez Sasaky",
  description:
    "Página personal de Pía Gutiérrez Sasaky, psicóloga especializada en learning and development y diseño de soluciones de aprendizaje.",
};

export default function Home() {
  return (
    <main className="lux-page">
      <section className="lux-hero">
        <div className="content-wrap">
          <header className="lux-topbar">
            <div className="brand-lockup">
              <p className="brand-name">Pía Gutiérrez Sasaky</p>
              <span className="brand-signature">
                psicología, aprendizaje y desarrollo
              </span>
            </div>

            <nav className="lux-nav" aria-label="Navegación principal">
              <a href="#sobre-mi">Sobre mí</a>
              <a href="#servicios">Servicios</a>
              <a href="#reflexiones">Reflexiones</a>
              <a href="#contacto">Contacto</a>
              <a className="button button-secondary" href="#assistant">
                Habla con mi asistente
              </a>
            </nav>
          </header>

          <div className="hero-stage">
            <div className="hero-portrait-frame">
              <img
                alt="Retrato profesional de Pía Gutiérrez Sasaky"
                className="hero-portrait"
                src="/pia-profile.jpeg"
              />
            </div>

            <div className="hero-copy-panel">
              <p className="eyebrow eyebrow-light">Learning & Development</p>
              <h1 className="hero-impact">
                Diseñar aprendizaje
                <br />
                con profundidad,
                <br />
                humanidad y dirección.
              </h1>
              <p className="hero-support">
                Soy psicóloga por la Pontificia Universidad Católica del Perú y
                trabajo en el cruce entre diseño de soluciones formativas,
                desarrollo docente y fortalecimiento de capacidades. Mi mirada
                busca que la formación tenga rigor, criterio y sentido humano.
              </p>

              <div className="hero-cta-row">
                <a className="button button-primary" href="#servicios">
                  Explorar mi trabajo
                </a>
                <a
                  className="button button-white"
                  href="mailto:pia.gutierrez@pucp.edu.pe"
                >
                  Escríbeme
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="soft-intro">
        <div className="content-wrap soft-intro-grid">
          <div className="soft-copy">
            <p className="eyebrow">Perspectiva</p>
            <h2 className="section-title">
              Formación pensada desde la persona, no solo desde el contenido.
            </h2>
            <p className="section-text">
              Me interesa diseñar experiencias de aprendizaje que sean
              coherentes, estratégicas y profundamente humanas. Para mí, una
              buena solución formativa no solo organiza información: acompaña
              procesos, clarifica criterios y fortalece capacidades con sentido.
            </p>
            <div className="chip-group" aria-label="Fortalezas principales">
              {strengths.map((strength) => (
                <span className="feature-chip" key={strength}>
                  {strength}
                </span>
              ))}
            </div>
            <a className="button button-primary dark-button" href="#reflexiones">
              Leer mis reflexiones
            </a>
          </div>

          <div className="intro-portrait-block">
            <div className="intro-arches" aria-hidden="true" />
            <div className="intro-portrait-card">
              <img
                alt="Retrato profesional de Pía Gutiérrez Sasaky"
                className="intro-portrait-image"
                src="/pia-profile.jpeg"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="metrics-band">
        <div className="content-wrap metrics-grid">
          {stats.map((stat) => (
            <article className="metric-item" key={stat.label}>
              <strong>{stat.value}</strong>
              <span>{stat.label}</span>
            </article>
          ))}
        </div>
      </section>

      <section id="sobre-mi" className="curve-section">
        <div className="content-wrap">
          <div className="curve-heading">
            <p className="script-mark">work with care</p>
            <div className="statement-card">
              <h2 className="statement-title">
                Una mirada que une psicología, aprendizaje y diseño con criterio
                estratégico.
              </h2>
              <p className="statement-copy">
                Mi experiencia en educación superior y posgrado me ha permitido
                trabajar en diagnóstico de necesidades formativas, desarrollo
                docente, gestión curricular y diseño instruccional. Me interesa
                construir propuestas que sean útiles, rigurosas y sostenibles,
                sin perder de vista lo humano.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="servicios" className="content-wrap service-section">
        {serviceCards.map((card, index) => (
          <article
            className={`service-block ${index % 2 === 1 ? "service-block-reverse" : ""} service-block-${card.accent}`}
            key={card.title}
          >
            <div className="service-copy">
              <p className="service-index">{card.index}</p>
              <h3 className="service-title">{card.title}</h3>
              <p className="service-body">{card.body}</p>
              <a className="button button-primary dark-button" href="#contacto">
                Conversemos
              </a>
            </div>

            <div className="service-visual">
              <img
                alt="Retrato profesional de Pía Gutiérrez Sasaky"
                className="service-image"
                src="/pia-profile.jpeg"
              />
            </div>
          </article>
        ))}
      </section>

      <section id="reflexiones" className="content-wrap reflection-section">
        <div className="section-header section-header-centered">
          <div>
            <p className="eyebrow">Reflexiones</p>
            <h2 className="section-title">
              Mi forma de pensar el aprendizaje parte de lo humano.
            </h2>
          </div>
        </div>

        <div className="reflection-grid">
          {reflections.map((reflection) => (
            <article className="reflection-card" key={reflection.title}>
              <h3>{reflection.title}</h3>
              <p>{reflection.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="gallery-strip">
        {gallery.map((image, index) => (
          <div className="gallery-cell" key={`${image.alt}-${index}`}>
            <img alt={image.alt} src={image.src} />
          </div>
        ))}
      </section>

      <section id="assistant" className="content-wrap assistant-section">
        <VirtualAssistant />
      </section>

      <section id="contacto" className="closing-section">
        <div className="content-wrap closing-grid">
          <div>
            <p className="eyebrow">Contacto</p>
            <h2 className="section-title">
              Si quieres construir una formación más clara, estratégica y
              humana, conversemos.
            </h2>
            <p className="section-text">
              Correo: pia.gutierrez@pucp.edu.pe
            </p>
          </div>

          <div className="closing-actions">
            <a className="button button-primary" href="mailto:pia.gutierrez@pucp.edu.pe">
              Escribir por correo
            </a>
            <a
              className="button button-secondary"
              href="https://www.linkedin.com/in/p%C3%ADa-guti%C3%A9rrez-sasaky/"
            >
              LinkedIn
            </a>
            <a
              className="button button-ghost"
              href="https://github.com/piagutierrez99"
            >
              GitHub
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
