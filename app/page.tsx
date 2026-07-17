import type { Metadata } from "next";

const strengths = [
  "Psicología aplicada al aprendizaje",
  "Diseño de soluciones formativas",
  "Desarrollo de capacidades",
  "Criterio estratégico con sensibilidad humana",
];

const sections = [
  {
    id: "01",
    title: "Qué hago",
    body: "Diseño experiencias de aprendizaje y desarrollo que buscan ser claras, útiles y sostenibles, conectando estrategia, estructura y comprensión de las personas.",
  },
  {
    id: "02",
    title: "Cómo trabajo",
    body: "Me interesa traducir necesidades complejas en soluciones sensibles y bien pensadas, con una mirada que equilibra profundidad, orden y calidez.",
  },
  {
    id: "03",
    title: "Qué puedo seguir mostrando",
    body: "Esta página puede crecer con proyectos, casos, servicios, conferencias, publicaciones o una biografía más personal, según el tono que quieras construir.",
  },
];

const suggestions = [
  "Casos o proyectos destacados",
  "Servicios o formas de colaborar",
  "Testimonios o recomendaciones",
  "Artículos, ideas o líneas de investigación",
];

export const metadata: Metadata = {
  title: "Pía Gutiérrez Sasaky",
  description:
    "Página personal de Pía Gutiérrez Sasaky, psicóloga especializada en learning and development y diseño de soluciones de aprendizaje.",
};

export default function Home() {
  return (
    <main className="page-shell">
      <section className="hero-section">
        <div className="hero-orb hero-orb-one" />
        <div className="hero-orb hero-orb-two" />

        <div className="content-wrap">
          <header className="topbar">
            <div>
              <p className="eyebrow">Pía Gutiérrez Sasaky</p>
              <p className="submark">Psicología, aprendizaje y desarrollo</p>
            </div>

            <nav className="top-actions" aria-label="Navegación principal">
              <a className="nav-link" href="#sobre-mi">
                Sobre mí
              </a>
              <a className="nav-link" href="#enfoque">
                Enfoque
              </a>
              <a className="button button-secondary" href="#contacto">
                Contacto
              </a>
            </nav>
          </header>

          <div className="hero-grid">
            <div className="hero-copy">
              <p className="eyebrow">Learning & Development</p>
              <h1 className="hero-title">
                Diseño aprendizaje
                <br />
                con sensibilidad,
                <br />
                estructura y dirección.
              </h1>
              <p className="hero-text">
                Soy psicóloga y trabajo desde el cruce entre aprendizaje,
                desarrollo de capacidades y diseño de soluciones formativas. Me
                interesa crear experiencias que combinen criterio estratégico,
                comprensión humana y una ejecución cuidadosamente pensada.
              </p>

              <div className="hero-actions">
                <a className="button button-primary" href="#enfoque">
                  Explorar mi enfoque
                </a>
                <a
                  className="button button-ghost"
                  href="https://www.linkedin.com/in/p%C3%ADa-guti%C3%A9rrez-sasaky/"
                >
                  Ver LinkedIn
                </a>
              </div>
            </div>

            <aside className="hero-panel" aria-label="Resumen profesional">
              <div className="hero-panel-inner">
                <p className="panel-kicker">Resumen</p>
                <div className="stat-stack">
                  <InfoLine label="Base" value="Psicología" />
                  <InfoLine
                    label="Foco"
                    value="Learning & Development"
                  />
                  <InfoLine
                    label="Interés"
                    value="Diseño de soluciones de aprendizaje"
                  />
                  <InfoLine label="Ubicación" value="Perú" />
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section id="sobre-mi" className="content-wrap section-space">
        <div className="split-section">
          <div>
            <p className="eyebrow">Sobre mí</p>
            <h2 className="section-title">
              Una práctica profesional que busca profundidad, claridad y belleza
              funcional.
            </h2>
          </div>

          <div className="glass-card">
            <p className="section-text">
              Mi interés está en diseñar procesos de aprendizaje y desarrollo
              que realmente acompañen a las personas y a las organizaciones. Me
              atrae construir soluciones que no solo respondan a una necesidad,
              sino que también se sientan coherentes, humanas y bien sostenidas
              en el tiempo.
            </p>
          </div>
        </div>
      </section>

      <section id="enfoque" className="content-wrap section-space">
        <div className="section-header">
          <div>
            <p className="eyebrow">Enfoque</p>
            <h2 className="section-title">
              Una mezcla entre mirada psicológica, diseño y estrategia.
            </h2>
          </div>

          <div className="chip-group" aria-label="Fortalezas principales">
            {strengths.map((strength) => (
              <span className="feature-chip" key={strength}>
                {strength}
              </span>
            ))}
          </div>
        </div>

        <div className="editorial-grid">
          {sections.map((section) => (
            <article className="editorial-card" key={section.id}>
              <p className="card-index">{section.id}</p>
              <h3 className="card-title">{section.title}</h3>
              <p className="card-body">{section.body}</p>
              <span className="card-link">Leer más</span>
            </article>
          ))}
        </div>
      </section>

      <section className="content-wrap section-space">
        <div className="formation-layout">
          <div className="formation-banner">
            <p className="panel-kicker">Formación</p>
            <h2 className="formation-title">
              Base académica con mirada interdisciplinaria.
            </h2>
            <p className="formation-text">
              Mi perfil integra psicología, aprendizaje y desarrollo con una
              búsqueda constante por diseñar soluciones más relevantes,
              sensibles y bien articuladas.
            </p>
          </div>

          <div className="formation-grid">
            <EducationCard
              title="Pacífico Business School"
              body="Una referencia importante para fortalecer visión estratégica y comprensión organizacional."
            />
            <EducationCard
              title="Pontificia Universidad Católica del Perú"
              body="Una base rigurosa para pensar el desarrollo humano, el aprendizaje y los procesos con profundidad."
            />
          </div>
        </div>
      </section>

      <section className="content-wrap section-space">
        <div className="section-header">
          <div>
            <p className="eyebrow">Próximas secciones sugeridas</p>
            <h2 className="section-title">
              Para que la web se vea más sólida, estas piezas pueden elevarla
              muchísimo.
            </h2>
          </div>
        </div>

        <div className="suggestion-grid">
          {suggestions.map((item) => (
            <article className="suggestion-card" key={item}>
              <span className="suggestion-dot" aria-hidden="true" />
              <p>{item}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="contacto" className="cta-section">
        <div className="content-wrap cta-layout">
          <div>
            <p className="eyebrow">Contacto</p>
            <h2 className="section-title cta-title">
              Si quieres, esta página puede evolucionar hacia una presencia más
              autoral, más comercial o más corporativa.
            </h2>
            <p className="section-text cta-copy">
              Ya quedó más limpia, más legible y mejor jerarquizada. El
              siguiente salto depende de la información que quieras mostrar y de
              la imagen profesional que quieras proyectar.
            </p>
          </div>

          <div className="cta-actions">
            <a className="button button-primary" href="#preguntas">
              Completar versión final
            </a>
            <a
              className="button button-secondary"
              href="https://www.linkedin.com/in/p%C3%ADa-guti%C3%A9rrez-sasaky/"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </section>

      <section id="preguntas" className="content-wrap section-space">
        <div className="glass-card">
          <p className="eyebrow">Para la siguiente versión</p>
          <h2 className="section-title">
            Con tres piezas más, esta web puede quedar muchísimo más fuerte.
          </h2>
          <div className="suggestion-grid">
            <article className="suggestion-card">
              <span className="suggestion-dot" aria-hidden="true" />
              <p>Tu correo profesional o el canal por el que prefieres que te contacten.</p>
            </article>
            <article className="suggestion-card">
              <span className="suggestion-dot" aria-hidden="true" />
              <p>Dos o tres proyectos, experiencias o logros que quieras destacar.</p>
            </article>
            <article className="suggestion-card">
              <span className="suggestion-dot" aria-hidden="true" />
              <p>Si prefieres un tono más autoral, más comercial o más corporativo.</p>
            </article>
            <article className="suggestion-card">
              <span className="suggestion-dot" aria-hidden="true" />
              <p>Si quieres incluir foto, servicios, testimonios o una sección de agenda.</p>
            </article>
          </div>
        </div>
      </section>
    </main>
  );
}

function InfoLine({ label, value }: { label: string; value: string }) {
  return (
    <div className="info-line">
      <span>{label}</span>
      <strong>{value}</strong>
    </div>
  );
}

function EducationCard({ title, body }: { title: string; body: string }) {
  return (
    <article className="education-card">
      <p className="panel-kicker">Formación</p>
      <h3 className="card-title">{title}</h3>
      <p className="card-body">{body}</p>
    </article>
  );
}
