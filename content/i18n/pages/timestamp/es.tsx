import { timestampStrings } from "@/content/i18n/strings/timestamp";
import { hrefFor } from "@/lib/i18n";
import type { ToolPageContent } from "../../types";
import { TimestampFigure, TimestampStyleTable } from "../shared";

const L = "es";

function Article() {
  return (
    <>
      <h2>¿Qué es una marca de tiempo de Discord?</h2>
      <p>
        Una marca de tiempo de Discord es un pequeño código que Discord convierte en una fecha o una hora al
        enviar el mensaje. Escribes algo como <code>&lt;t:1793740800:F&gt;</code> y los lectores ven una fecha
        de verdad, por ejemplo «martes, 3 de noviembre de 2026, 16:20».
      </p>
      <p>
        El número del código es una marca de tiempo Unix: un momento exacto, no la hora de un reloj concreto.
        La app de Discord de cada persona muestra ese momento en su propia zona horaria e idioma. Alguien en
        Nueva York, una amiga en Londres y un compañero en Sídney leen la hora local correcta en el mismo
        mensaje, así que nadie tiene que calcular la diferencia y nadie llega una hora tarde.
      </p>
      <TimestampFigure
        image="example"
        alt="Ejemplo de un código de marca de tiempo de Discord y de cómo aparece en un mensaje"
        caption="El código que escribes y la fecha y la cuenta atrás que ven los lectores (imagen en inglés)."
      />

      <h2>Cómo usar el generador de marcas de tiempo de Discord</h2>
      <ol>
        <li>Elige la fecha y la hora de tu evento, o pulsa Ahora para empezar desde la hora actual.</li>
        <li>
          Revisa la zona horaria. Empieza siendo la tuya; cámbiala si el evento se organiza en otra zona, como
          un torneo con hora del Este de EE. UU.
        </li>
        <li>Ajusta con los botones +15 min, +1 hora, +1 día y +1 semana si quieres.</li>
        <li>Busca el formato que quieras en la lista y pulsa Copiar.</li>
        <li>Pega el código en tu mensaje de Discord y envíalo.</li>
      </ol>
      <p>
        ¿Ya tienes una marca de tiempo Unix? Pégala en el campo Unix y el generador la carga, tanto en
        segundos como en milisegundos. Así también sirve como conversor de hora de Discord a la inversa.
      </p>
      <TimestampFigure
        image="steps"
        alt="Tres pasos para usar el generador de marcas de tiempo de Discord: elige fecha y hora, elige un formato, copia y pega"
        caption="Elige una hora, escoge un formato y cópialo y pégalo en Discord."
      />

      <h2>Los formatos de marca de tiempo de Discord</h2>
      <p>
        La letra del final del código define el formato. Hay nueve estilos. Si no pones letra, Discord usa{" "}
        <code>f</code>. Los ejemplos de la tabla vienen de la documentación de Discord; tus lectores ven cada
        estilo en su propio idioma y formato de reloj.
      </p>
      <TimestampFigure
        image="formats"
        alt="Formatos de marca de tiempo de Discord: hora corta, hora media, fecha corta, fecha larga, fecha y hora y tiempo relativo, con sus códigos"
        caption="Los nueve estilos para el mismo momento, tal como los ve alguien en Nueva York (imagen en inglés)."
      />
      <TimestampStyleTable
        headers={["Estilo", "Código", "Ejemplo", "Ideal para"]}
        styles={timestampStrings[L].styles}
      />
      <p>
        Como regla general: usa Relativo (<code>R</code>) para una cuenta atrás, Fecha completa (
        <code>F</code>) para eventos en los que importa el día de la semana y Hora corta (<code>t</code>) para
        recordatorios diarios como «reinicio a las 16:20».
      </p>

      <h2>Cómo escribir una marca de tiempo de Discord a mano</h2>
      <p>
        No necesitas un generador si tienes la hora Unix. El formato es <code>&lt;t:UNIX:ESTILO&gt;</code>:
        una <code>t</code> minúscula, dos puntos, la marca de tiempo Unix en segundos, otros dos puntos y la
        letra del estilo, todo entre los signos menor y mayor y sin espacios.{" "}
        <code>&lt;t:1793740800:R&gt;</code> es un ejemplo válido, y <code>&lt;t:1793740800&gt;</code> sin
        estilo también.
      </p>
      <p>
        Para conseguir una marca de tiempo Unix, usa este generador, ejecuta <code>date +%s</code> en una
        terminal de macOS o Linux, o usa <code>Math.floor(Date.now() / 1000)</code> en JavaScript. Muchas
        herramientas dan milisegundos (13 cifras); Discord necesita segundos (10 cifras para fechas actuales),
        así que quita las tres últimas cifras.
      </p>

      <h2>Ejemplos prácticos</h2>
      <ul>
        <li>
          <strong>Anuncios de eventos:</strong> «La noche de cine empieza <code>&lt;t:1793740800:F&gt;</code>{" "}
          (<code>&lt;t:1793740800:R&gt;</code>)» da la fecha completa y una cuenta atrás en vivo.
        </li>
        <li>
          <strong>Sorteos:</strong> «El sorteo termina <code>&lt;t:1793740800:R&gt;</code>» muestra cuánto
          falta y pasa a «hace…» cuando termina.
        </li>
        <li>
          <strong>Raids y partidas:</strong> «Raid a las <code>&lt;t:1793740800:t&gt;</code>» mantiene una
          hora diaria corta y correcta para cada jugador.
        </li>
        <li>
          <strong>Normas y avisos del servidor:</strong> «Normas actualizadas el{" "}
          <code>&lt;t:1793740800:D&gt;</code>» indica la fecha sin hora.
        </li>
        <li>
          <strong>Horarios de directos:</strong> pon cada directo con <code>&lt;t:…:s&gt;</code> para tener
          una fecha y hora compactas por línea.
        </li>
      </ul>

      <h2>Cada persona ve su propia hora</h2>
      <p>
        Como el código guarda un único momento, el mismo mensaje se lee bien en todo el mundo. Elige la zona
        horaria en la que se planifica el evento y Discord hace la conversión para todos los demás.
      </p>
      <TimestampFigure
        image="zones"
        alt="Una misma marca de tiempo de Discord mostrando la hora local correcta en Nueva York, Londres y Sídney"
        caption="Un código, tres ciudades: cada lector ve su hora local (imagen en inglés)."
      />

      <h2>Problemas habituales</h2>
      <ul>
        <li>
          <strong>Se ve como texto normal.</strong> Revisa la sintaxis: debe empezar con <code>&lt;t:</code>{" "}
          en minúscula, el estilo tiene que ser una de las nueve letras (distinguen mayúsculas y minúsculas) y
          no puede haber espacios dentro. Los bloques de código y el código en línea (comillas invertidas)
          también impiden que se muestre.
        </li>
        <li>
          <strong>La fecha está a miles de años.</strong> El número está en milisegundos. Usa segundos; este
          generador siempre da segundos.
        </li>
        <li>
          <strong>La hora está desfasada unas horas.</strong> Se eligió la zona horaria equivocada al crear el
          código. Elige la zona real del evento y copia el código otra vez.
        </li>
        <li>
          <strong>No funciona en un nombre.</strong> Las marcas de tiempo solo se muestran en el texto de los
          mensajes y en las descripciones y campos de los embeds de bots. Los nombres de usuario, los nombres
          visibles, los apodos de servidor y los nombres de canal muestran el código como texto.
        </li>
      </ul>

      <h2>Consejos</h2>
      <ul>
        <li>
          Combina dos estilos, como <code>&lt;t:X:F&gt; (&lt;t:X:R&gt;)</code>, para que vean la fecha y
          cuánto falta. El botón Copiar combinado lo hace por ti.
        </li>
        <li>
          Usa Relativo para las cuentas atrás. Se actualiza solo, así que no tienes que editar el mensaje.
        </li>
        <li>
          Revisa la zona horaria antes de publicar, sobre todo cerca de los cambios de horario. El generador
          te avisa si una hora no existe o se repite ese día.
        </li>
      </ul>
    </>
  );
}

export const timestampEs: ToolPageContent = {
  name: "Generador de marcas de tiempo",
  title: "Generador de marcas de tiempo de Discord – Hora local",
  description:
    "Crea marcas de tiempo de Discord que muestran la hora correcta en la zona horaria de cada persona. Elige fecha, formato o cuenta atrás y copia el código.",
  h1: "Generador de marcas de tiempo de Discord",
  intro:
    "Elige una fecha y una hora, y obtén un código que muestra la hora local correcta a todo tu servidor.",
  toolLabel: "Generador de marcas de tiempo de Discord",
  faqHeading: "Preguntas frecuentes sobre las marcas de tiempo",
  faqs: [
    {
      question: "¿Qué es una marca de tiempo de Discord?",
      answer:
        "Es un código corto como <t:1793740800:F> que Discord convierte en una fecha u hora al enviar el mensaje. En lugar de una hora fija, guarda un momento en hora Unix, para que Discord pueda mostrarlo en la zona horaria de cada lector.",
    },
    {
      question: "¿Cómo hago una cuenta atrás en Discord?",
      answer:
        "Usa el estilo Relativo, R. Elige la fecha y la hora del evento en el generador, copia el código Relativo y pégalo en tu mensaje. Discord lo muestra como «dentro de 3 días» o «dentro de 2 horas», lo mantiene actualizado y pasa a «hace 2 horas» cuando ya ha pasado.",
    },
    {
      question: "¿Las marcas de tiempo de Discord se ven en la zona horaria de cada persona?",
      answer:
        "Sí. Para eso sirven. El código guarda un único momento y la app de Discord de cada persona lo muestra en su propia zona horaria e idioma, así que nadie tiene que convertir horas de cabeza.",
    },
    {
      question: "¿Por qué no funciona mi marca de tiempo de Discord?",
      answer:
        "Lo más habitual es un error en el código (debe ser <t: seguido del número, sin espacios), una T mayúscula al principio, una letra de estilo que Discord no conoce o una marca en milisegundos en lugar de segundos. Un número de 13 cifras está en milisegundos; quítale las tres últimas. Además, las marcas de tiempo no funcionan en nombres de usuario, nombres visibles, apodos ni nombres de canal.",
    },
    {
      question: "¿Puedo usar marcas de tiempo en embeds o bots?",
      answer:
        "Sí. Un bot puede enviar el mismo código <t:...> en un mensaje normal, y también funciona en las descripciones y los valores de los campos de los embeds. Los bots deben enviar la hora Unix en segundos. Los embeds tienen además un campo de marca de tiempo aparte que acepta una fecha ISO 8601 y la muestra al pie del embed.",
    },
    {
      question: "¿Las marcas de tiempo de Discord funcionan en el móvil?",
      answer:
        "Sí. Se muestran en las apps de Discord para iOS y Android, además de en escritorio y en el navegador, y cada dispositivo usa su propia zona horaria e idioma.",
    },
    {
      question: "¿Qué es una marca de tiempo Unix?",
      answer:
        "Es el número de segundos desde las 00:00:00 UTC del 1 de enero de 1970. Como cuenta desde un momento fijo, significa el mismo instante en todas partes, y por eso la usa Discord. Por ejemplo, 1793740800 es el 3 de noviembre de 2026 a las 21:20 UTC.",
    },
  ],
  Article,
  relatedHeading: "Herramientas relacionadas",
  related: [
    { href: hrefFor(L, "/"), label: "Generador de letras para Discord" },
    { href: hrefFor(L, "/discord-text-formatting"), label: "Guía de formato de texto de Discord" },
    { href: hrefFor(L, "/discord-name-generator"), label: "Generador de nombres para Discord" },
  ],
};
