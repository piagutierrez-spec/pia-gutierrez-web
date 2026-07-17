"use client";

import { useMemo, useState } from "react";

const quickPrompts = [
  "¿Cuál es el enfoque de Pía?",
  "¿Qué experiencia tiene en formación?",
  "¿Cómo entiende el aprendizaje?",
  "¿Cómo puedo contactarla?",
];

type Message = {
  role: "assistant" | "user";
  text: string;
};

const initialMessages: Message[] = [
  {
    role: "assistant",
    text: "Hola, soy el asistente de Pía. Puedo contarte sobre su enfoque en aprendizaje, su experiencia en desarrollo docente, diseño instruccional y su manera de entender la formación desde una perspectiva humana.",
  },
];

export function VirtualAssistant() {
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [input, setInput] = useState("");
  const [open, setOpen] = useState(false);

  const placeholder = useMemo(
    () => "Escribe una duda sobre su enfoque, experiencia o forma de trabajo",
    [],
  );

  function answerQuestion(question: string) {
    const normalized = question.toLowerCase();

    if (
      normalized.includes("enfoque") ||
      normalized.includes("perspectiva") ||
      normalized.includes("aprendizaje")
    ) {
      return "Pía entiende el aprendizaje como un proceso profundamente humano. Su mirada combina psicología, diseño de experiencias formativas y desarrollo de capacidades, buscando que cada solución tenga sentido para las personas, responda a necesidades reales y mantenga coherencia con los objetivos de la organización.";
    }

    if (
      normalized.includes("experiencia") ||
      normalized.includes("trayectoria") ||
      normalized.includes("trabajo") ||
      normalized.includes("formación")
    ) {
      return "Su experiencia se ha desarrollado especialmente en entornos de educación superior y posgrado. Ha trabajado en desarrollo docente, gestión curricular, diagnóstico de necesidades formativas, definición de competencias, diseño instruccional de cursos virtuales y seguimiento del desempeño académico.";
    }

    if (
      normalized.includes("docente") ||
      normalized.includes("capacit") ||
      normalized.includes("desarrollo")
    ) {
      return "Pía ha diseñado y ejecutado planes de capacitación docente, facilitado talleres, acompañado procesos de retroalimentación 1:1 y monitoreado indicadores de calidad académica para convertir evidencias de desempeño en acciones concretas de mejora.";
    }

    if (
      normalized.includes("proyecto") ||
      normalized.includes("servicio") ||
      normalized.includes("diseño instruccional")
    ) {
      return "Más que hablar solo de proyectos cerrados, su propuesta se centra en diseñar experiencias de aprendizaje, estructurar rutas formativas, trabajar con expertos de contenido y construir soluciones pedagógicas claras, sensibles y estratégicas.";
    }

    if (
      normalized.includes("contact") ||
      normalized.includes("correo") ||
      normalized.includes("email")
    ) {
      return "Puedes contactar a Pía en pia.gutierrez@pucp.edu.pe. Si quieres, también puedes revisar su LinkedIn para conocer mejor su trayectoria y su evolución profesional.";
    }

    return "Puedo ayudarte con preguntas sobre la experiencia de Pía, su visión del aprendizaje, su trabajo en desarrollo docente, diseño de soluciones formativas o cómo contactarla. Si quieres, prueba con una pregunta más específica.";
  }

  function sendMessage(rawText: string) {
    const text = rawText.trim();
    if (!text) return;

    const nextMessages: Message[] = [
      ...messages,
      { role: "user", text },
      { role: "assistant", text: answerQuestion(text) },
    ];

    setMessages(nextMessages);
    setInput("");
  }

  return (
    <>
      {!open ? (
        <div className="assistant-teaser" aria-live="polite">
          <p>Hola, ¿en qué puedo ayudarte?</p>
        </div>
      ) : null}

      {open ? (
        <div className="assistant-shell assistant-floating" id="assistant">
          <div className="assistant-header">
            <div>
              <p className="eyebrow">Asistente virtual</p>
              <h3 className="assistant-title">Consulta rápida</h3>
            </div>
            <div className="assistant-top-actions">
              <span className="assistant-badge">En vivo</span>
              <button
                aria-label="Cerrar asistente"
                className="assistant-close"
                onClick={() => setOpen(false)}
                type="button"
              >
                ×
              </button>
            </div>
          </div>

          <div className="assistant-messages" aria-live="polite">
            {messages.map((message, index) => (
              <div
                className={`assistant-message assistant-message-${message.role}`}
                key={`${message.role}-${index}`}
              >
                <p>{message.text}</p>
              </div>
            ))}
          </div>

          <div className="assistant-prompts" aria-label="Preguntas sugeridas">
            {quickPrompts.map((prompt) => (
              <button
                className="assistant-prompt"
                key={prompt}
                onClick={() => sendMessage(prompt)}
                type="button"
              >
                {prompt}
              </button>
            ))}
          </div>

          <form
            className="assistant-form"
            onSubmit={(event) => {
              event.preventDefault();
              sendMessage(input);
            }}
          >
            <input
              className="assistant-input"
              onChange={(event) => setInput(event.target.value)}
              placeholder={placeholder}
              type="text"
              value={input}
            />
            <button className="assistant-submit" type="submit">
              Enviar
            </button>
          </form>
        </div>
      ) : null}

      <button
        aria-controls="assistant"
        aria-expanded={open}
        className="assistant-trigger"
        onClick={() => setOpen((current) => !current)}
        type="button"
      >
        <span className="assistant-trigger-icon" aria-hidden="true">
          💬
        </span>
        <span className="assistant-trigger-text">Asistente</span>
      </button>
    </>
  );
}
