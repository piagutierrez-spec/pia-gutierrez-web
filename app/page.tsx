import type { Metadata } from "next";
import { VirtualAssistant } from "./VirtualAssistant";

const strengths = [
  "Psicología aplicada al aprendizaje",
  "Diseño de experiencias formativas",
  "Desarrollo docente y capacidades",
  "Estrategia con sensibilidad humana",
];

const services = [
  {
    title: "Diseño de experiencias de aprendizaje",
    text: "Estructuro soluciones formativas con claridad pedagógica, foco en competencias y una narrativa de aprendizaje coherente de inicio a fin.",
  },
  {
    title: "Desarrollo docente y fortalecimiento de capacidades",
    text: "Acompaño procesos de mejora a partir de evidencia, retroalimentación, talleres y rutas de desarrollo con sentido práctico.",
  },
  {
    title: "Consultoría formativa con mirada humana",
    text: "Traduzco necesidades complejas en propuestas comprensibles, elegantes y sostenibles, sin perder de vista a las personas que aprenden.",
  },
];

const reflections = [
  "Aprender no es solo recibir información; es construir criterio, sentido y posibilidad de acción.",
  "La psicología me permite diseñar considerando motivaciones, resistencias, contexto y experiencia subjetiva.",
  "La sensibilidad no está peleada con la estrategia: una buena formación puede ser rigurosa y profundamente humana a la vez.",
];

const education = [
  "Pontificia Universidad Católica del Perú — Psicología",
  "Pacífico Business School — experiencia y vinculación profesional visible en el perfil",
  "Especialización en diseño instruccional y aprendizaje organizacional",
];

export const metadata: Metadata = {
  title: "Pía Gutiérrez Sasaky",
  description:
    "Sitio personal de Pía Gutiérrez Sasaky, psicóloga especializada en learning and development, desarrollo docente y diseño de experiencias de aprendizaje.",
};

export default function Home() {
  return (
    <main className="editorial-page">
      <header className="site-header">
        <div className="shell site-header-inner">
          <a className="site-mark" href="#inicio">
            Pía Gutiérrez Sasaky
          </a>

          <nav aria-label="Navegación principal" className="site-nav">
            <a href="#sobre-mi">Sobre mí</a>
            <a href="#servicios">Servicios</a>
            <a href="#reflexiones">Reflexiones</a>
            <a href="#formacion">Formación</a>
            <a href="#contacto">Contacto</a>
          </nav>
        </div>
      </header>

      <section className="hero-panel" id="inicio">
        <div className="shell hero-grid">
          <div className="hero-copy">
            <p className="section-kicker">Psicología · Learning & Development</p>
            <h1 className="hero-title">
              Diseño de experiencias
              <br />
              de aprendizaje
              <br />
              significativas y
              <br />
              desarrollo de capacidades.
            </h1>
            <p className="hero-text">
              Soy psicóloga y trabajo en la intersección entre aprendizaje,
              desarrollo docente y soluciones formativas. Mi enfoque parte del
              diagnóstico de necesidades, la estructura pedagógica y una mirada
              humana que permita traducir objetivos en experiencias útiles,
              rigurosas y aplicables.
            </p>

            <div className="hero-actions">
              <a className="primary-button" href="#servicios">
                Ver mis servicios
              </a>
              <a className="secondary-button" href="#contacto">
                Ir a contacto
              </a>
            </div>

            <ul className="hero-links" aria-label="Accesos rápidos">
              <li>
                <a href="#sobre-mi">Conoce mi enfoque</a>
              </li>
              <li>
                <a href="#servicios">Ver líneas de trabajo</a>
              </li>
              <li>
                <a href="#formacion">Revisar formación</a>
              </li>
            </ul>
          </div>

          <div className="hero-photo-card">
            <div className="hero-photo-frame">
              <img
                alt="Retrato profesional de Pía Gutiérrez Sasaky"
                className="hero-photo"
                src="/pia-profile.jpeg"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="intro-band" id="sobre-mi">
        <div className="shell intro-grid">
          <div className="intro-copy">
            <p className="section-kicker">Sobre mí</p>
            <h2 className="section-title">
              Formación pensada desde la persona, no solo desde el contenido.
            </h2>
            <p className="section-text">
              Me interesa construir experiencias de aprendizaje que ordenen,
              orienten y transformen. Diseñar bien también es cuidar: el tiempo
              de quien aprende, la claridad del proceso y la coherencia entre lo
              que se busca enseñar y lo que realmente se moviliza.
            </p>
          </div>

          <div className="strength-card">
            <h3>Fortalezas</h3>
            <div className="strength-list">
              {strengths.map((strength) => (
                <span className="strength-pill" key={strength}>
                  {strength}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="stat-band">
        <div className="shell stat-grid">
          <article className="stat-card">
            <strong>Psicología</strong>
            <span>como base para diseñar procesos de aprendizaje con sentido</span>
          </article>
          <article className="stat-card">
            <strong>Aprendizaje</strong>
            <span>como experiencia, no solo como transferencia de información</span>
          </article>
          <article className="stat-card">
            <strong>Estrategia</strong>
            <span>para convertir necesidades complejas en soluciones claras</span>
          </article>
        </div>
      </section>

      <section className="shell section-block" id="servicios">
        <div className="section-heading">
          <p className="section-kicker">Servicios</p>
          <h2 className="section-title">Líneas de trabajo</h2>
        </div>

        <div className="service-grid">
          {services.map((service, index) => (
            <article className="service-card" key={service.title}>
              <span className="service-number">0{index + 1}</span>
              <h3>{service.title}</h3>
              <p>{service.text}</p>
              <a className="service-link" href="#contacto">
                Solicitar información
              </a>
            </article>
          ))}
        </div>
      </section>

      <section className="editorial-highlight" id="reflexiones">
        <div className="shell editorial-highlight-grid">
          <div>
            <p className="section-kicker section-kicker-light">Reflexiones</p>
            <h2 className="section-title section-title-light">
              Mi perspectiva sobre aprendizaje y formación
            </h2>
          </div>

          <div className="reflection-list">
            {reflections.map((reflection) => (
              <article className="reflection-item" key={reflection}>
                <p>{reflection}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="shell section-block" id="formacion">
        <div className="section-heading two-column-heading">
          <div>
            <p className="section-kicker">Formación</p>
            <h2 className="section-title">Trayectoria académica y profesional</h2>
          </div>
          <p className="section-text">
            Esta web resume mi perfil de manera editorial y clara. Si más
            adelante deseas, podemos ampliar esta sección con experiencia
            detallada, proyectos, publicaciones o ponencias.
          </p>
        </div>

        <div className="education-list">
          {education.map((item) => (
            <article className="education-item" key={item}>
              <p>{item}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="shell assistant-wrap" id="assistant">
        <VirtualAssistant />
      </section>

      <section className="shell contact-panel" id="contacto">
        <div className="contact-copy">
          <p className="section-kicker">Contacto</p>
          <h2 className="section-title">Conversemos</h2>
          <p className="section-text">
            Si estás buscando diseñar una propuesta formativa más clara,
            estratégica y humana, estaré encantada de conversar.
          </p>
        </div>

        <div className="contact-actions">
          <a className="primary-button full-button" href="mailto:pia.gutierrez@pucp.edu.pe">
            pia.gutierrez@pucp.edu.pe
          </a>
          <a
            className="secondary-button full-button"
            href="https://www.linkedin.com/in/pía-gutiérrez-sasaky"
            rel="noreferrer"
            target="_blank"
          >
            Ver LinkedIn
          </a>
          <a
            className="secondary-button full-button"
            href="https://github.com/piagutierrez-spec"
            rel="noreferrer"
            target="_blank"
          >
            Ver GitHub
          </a>
        </div>
      </section>

      <a
        aria-label="Libro de reclamaciones"
        className="claims-fab"
        href="#contacto"
        id="libro-reclamaciones"
        title="Libro de reclamaciones"
      >
        <span className="claims-fab-icon" aria-hidden="true">
          📘
        </span>
        <span className="claims-fab-label">Libro de reclamaciones</span>
      </a>
    </main>
  );
}
