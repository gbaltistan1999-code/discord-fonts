import Link from "next/link";
import type { HomeContent } from "../types";
import { ExamplesFigure, fancy, inlineLink, styleLinkFor } from "./shared";

const styleLink = styleLinkFor("es");

function Article() {
  return (
    <div className="prose-content">
      <h2 id="que-son-las-letras-para-discord">¿Qué son las letras para Discord y cómo funcionan?</h2>
      <p>
        Las letras para Discord no son fuentes en el sentido habitual. Discord no te deja elegir una
        tipografía para tu nombre ni para tus mensajes, así que un generador usa un truco: cambia cada letra
        normal por un carácter parecido de <strong>Unicode</strong>, el estándar mundial que da un número a
        cada carácter en todos los dispositivos. Unicode incluye alfabetos completos creados para matemáticas,
        ciencia y otras escrituras, como letras {fancy("bold-serif", "negrita")}, {fancy("script", "cursiva")}
        , {fancy("fraktur", "gotica")} o {fancy("small-caps-all", "versalitas")}.
      </p>
      <p>
        Como son caracteres y no un archivo de fuente, el estilo viaja con el texto. Si pegas 𝐃𝐢𝐬𝐜𝐨𝐫𝐝 en tu
        apodo, todo el servidor lo ve en negrita sin instalar nada. El mismo truco funciona en casi cualquier
        sitio donde se pueda escribir, por eso también se les llama letras bonitas o fuentes para copiar y
        pegar.
      </p>
      <p>
        Un detalle importante en español: Unicode solo tiene versiones estilizadas de las letras básicas de la
        A a la Z y de los números. Las letras con tilde o diéresis (á, é, ñ, ü) se quedan en su forma normal,
        así que «canción» saldrá con la «ó» sin estilo. Si quieres un resultado uniforme, prueba a escribir
        sin tildes.
      </p>
      <ExamplesFigure
        alt="Ejemplos de letras para Discord: las palabras Discord Fonts en estilo negrita, script, gótico, versalitas, burbuja y decorado"
        caption="Las mismas dos palabras en seis estilos, todos hechos con caracteres Unicode estándar."
      />

      <h2 id="como-usar">Cómo usar el generador de letras para Discord</h2>
      <ol>
        <li>
          <strong>Escribe tu texto</strong> en el cuadro de arriba. Todos los estilos se actualizan al
          instante.
        </li>
        <li>
          <strong>Explora los estilos</strong> o usa los filtros (Negrita, Cursiva, Gótica, Decorativa,
          Estética y Glitch) para acotar la lista. Toca <em>Mostrar más estilos</em> para ver todas las
          opciones.
        </li>
        <li>
          <strong>Revisa la longitud</strong> si es para un nombre. Los estilos que superan el límite de 32
          caracteres de Discord llevan la marca <em>32+</em>.
        </li>
        <li>
          <strong>Toca Copiar</strong> (o el propio texto). Un mensaje de «¡Copiado!» confirma que está en tu
          portapapeles.
        </li>
        <li>
          <strong>Pégalo en Discord</strong> con Ctrl+V, Cmd+V o una pulsación larga en el móvil, y guarda.
        </li>
      </ol>

      <h2 id="cambiar-nombre">Cómo cambiar la letra de tu nombre, apodo o servidor en Discord</h2>
      <p>
        Discord cambia sus menús de vez en cuando, así que los nombres exactos pueden variar en tu versión de
        la app, pero los campos son siempre los mismos.
      </p>
      <h3>Nombre visible</h3>
      <p>
        Es el nombre que aparece junto a tus mensajes en todos los servidores. Abre los ajustes de usuario, ve
        a la sección del perfil, pega tu texto en el campo del nombre visible y guarda. Puede tener hasta 32
        caracteres.
      </p>
      <h3>Apodo en un servidor</h3>
      <p>
        Para usar otra letra solo en un servidor, abre el menú de ese servidor, elige la opción de editar tu
        perfil del servidor y pega el texto en el apodo. Algunos servidores no dejan cambiar el apodo; en ese
        caso, pídeselo a un moderador.
      </p>
      <h3>Nombre del servidor y de los canales</h3>
      <p>
        Si administras un servidor, pega el texto en el nombre del servidor desde sus ajustes, o edita un
        canal y pégalo en su nombre. Los canales con nombres como «︱𝐠𝐞𝐧𝐞𝐫𝐚𝐥» son una forma popular de darle
        orden al servidor. Mantén legibles los canales importantes para que los nuevos miembros se orienten.
      </p>
      <h3>Biografía y mensajes</h3>
      <p>
        La sección «Sobre mí» y los mensajes normales aceptan todo lo que hay en esta página, incluidos los
        estilos decorados más largos, así que son el mejor sitio para experimentar.
      </p>

      <h2 id="mejores-letras">Las mejores letras para nombres, biografías y servidores</h2>
      <p>La letra adecuada depende de dónde la vaya a ver la gente:</p>
      <div className="overflow-x-auto">
        <table>
          <thead>
            <tr>
              <th scope="col">Dónde</th>
              <th scope="col">Buenas opciones</th>
              <th scope="col">Por qué</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Nombre visible y apodo</td>
              <td>
                {styleLink("bold", "Negrita")}, {styleLink("cursive", "Script en negrita")},{" "}
                {styleLink("small-caps", "Versalitas")}
              </td>
              <td>Se leen bien en tamaño pequeño y funcionan en casi todos los dispositivos.</td>
            </tr>
            <tr>
              <td>Biografía «Sobre mí»</td>
              <td>{styleLink("aesthetic", "Estética")}, marcos de brillos y kawaii</td>
              <td>Hay más espacio para decorar y la legibilidad importa menos que en un nombre.</td>
            </tr>
            <tr>
              <td>Nombre del servidor</td>
              <td>{styleLink("gothic", "Gótica")}, doble trazo, marco real</td>
              <td>Un estilo de título fuerte le da al servidor una identidad clara.</td>
            </tr>
            <tr>
              <td>Nombres de canales</td>
              <td>Versalitas, negrita sin serifa, monoespaciada</td>
              <td>Estilos compactos que mantienen ordenada la lista de canales.</td>
            </tr>
            <tr>
              <td>Mensajes y memes</td>
              <td>
                {styleLink("glitch", "Glitch")}, {styleLink("upside-down", "Al revés")},{" "}
                {styleLink("bubble", "Burbuja")}
              </td>
              <td>Llaman la atención en bromas y anuncios, pero úsalos con moderación.</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        Una buena regla: todo lo que la gente tenga que leer rápido, como un nombre que quieren mencionar con
        @, debería usar un estilo limpio. Deja la decoración intensa para lo que sea solo por diversión.
      </p>

      <h2 id="formato-de-texto">El formato de texto de Discord (markdown), explicado</h2>
      <p>
        Discord también tiene un formato integrado llamado markdown. En lugar de caracteres especiales, rodeas
        el texto con símbolos y Discord le da estilo: <code>**negrita**</code>, <code>*cursiva*</code>,{" "}
        <code>__subrayado__</code>, <code>~~tachado~~</code> y <code>||spoiler||</code>. También puedes
        empezar una línea con <code>#</code> para un título, <code>-#</code> para un subtexto pequeño o{" "}
        <code>&gt;</code> para una cita, y usar bloques de código para texto monoespaciado o incluso de
        colores.
      </p>
      <p>
        El markdown solo funciona en los mensajes (y en algunos campos del perfil). En los nombres no hace
        nada, y justo por eso existen las letras Unicode. Prueba ambos con la herramienta de formato de arriba
        o lee la <Link href="/es/discord-text-formatting">guía completa de formato de texto</Link>.
      </p>

      <h2 id="cuadros">Por qué algunas letras se ven como cuadros</h2>
      <p>
        Si alguien ve rectángulos vacíos o signos de interrogación en lugar de tu texto, su dispositivo no
        tiene una fuente con esos caracteres. El texto está bien; es una limitación de esa pantalla en
        concreto. Algunos datos prácticos:
      </p>
      <ul>
        <li>
          Las letras en <strong>negrita, cursiva, script, góticas y de doble trazo</strong> funcionan en las
          versiones actuales de Windows, macOS, iOS y Android.
        </li>
        <li>
          Las letras <strong>cuadradas, en burbuja oscura y algunas invertidas</strong> son más recientes y
          son las que más fallan en móviles antiguos, televisores y consolas.
        </li>
        <li>
          Los <strong>estilos con marcas combinadas</strong>, como tachado, subrayado o zalgo, dependen de
          cómo cada dispositivo apila las marcas, así que pueden verse desalineados.
        </li>
        <li>
          Los estilos con la etiqueta <strong>Compatibilidad limitada</strong> en el generador son los más
          arriesgados. Pasa el cursor o toca la etiqueta para ver los detalles.
        </li>
      </ul>

      <h2 id="accesibilidad">Accesibilidad: lectores de pantalla y letras Unicode</h2>
      <p>
        Las letras bonitas parecen letras, pero para el software son símbolos matemáticos o decorativos.
        Muchos lectores de pantalla leen cada carácter por su nombre técnico (por ejemplo, «mathematical bold
        capital D») o se lo saltan, y los buscadores pueden no encontrarlo. Eso hace que tu nombre sea difícil
        de encontrar y de seguir para quien usa tecnologías de apoyo.
      </p>
      <p>
        Usa las letras para decorar, no para informar. Deja las reglas, los anuncios y todo lo importante en
        texto normal, y piensa en un estilo limpio para tu nombre visible para que los demás puedan leerlo y
        mencionarte con facilidad.
      </p>
    </div>
  );
}

export const homeEs: HomeContent = {
  title: "Letras para Discord – Generador de fuentes para copiar y pegar",
  description:
    "Generador de letras para Discord gratis: convierte tu texto en más de 170 estilos para copiar y pegar en tu nombre, apodo, servidor o mensajes.",
  h1: "Letras para Discord: generador de fuentes para copiar y pegar",
  intro:
    "Convierte cualquier texto en {count} letras para Discord, de negrita y cursiva a gótica y glitch. Copia un estilo y pégalo en tu nombre, apodo, servidor o mensajes. Gratis, privado y sin registro.",
  generatorLabel: "Generador de letras para Discord",
  formattingTitle: "Herramienta de formato de texto para Discord",
  formattingIntro: (
    <>
      La negrita, los spoilers, los títulos y el texto de colores usan el markdown integrado de Discord.
      Escribe una vez y copia el formato, o lee la{" "}
      <Link href="/es/discord-text-formatting" className={inlineLink}>
        guía completa de formato
      </Link>
      . Para horas de eventos y cuentas atrás, prueba el{" "}
      <Link href="/es/discord-timestamp-generator" className={inlineLink}>
        generador de marcas de tiempo
      </Link>
      .
    </>
  ),
  popularTitle: "Estilos de letra populares para Discord",
  popularIntro: "Generadores centrados en un solo estilo, con consejos sobre dónde funciona mejor cada uno.",
  moreGenerators: "Más generadores:",
  faqHeading: "Preguntas frecuentes sobre las letras para Discord",
  faqs: [
    {
      question: "¿Qué son las letras para Discord?",
      answer:
        "Son textos hechos con caracteres Unicode especiales que parecen letras en negrita, cursiva, góticas u otros estilos. Discord no tiene selector de fuentes, así que generas los caracteres aquí y los pegas en Discord como cualquier otro texto.",
    },
    {
      question: "¿Se puede cambiar la fuente en Discord?",
      answer:
        "No directamente. Discord te deja cambiar el tamaño del texto y usar markdown para negrita, cursiva, títulos y formatos parecidos en los mensajes, pero no puedes elegir otra tipografía. Las letras Unicode son la alternativa: son caracteres, no un ajuste de fuente, así que todo el mundo las ve.",
    },
    {
      question: "¿Cómo copio y pego letras para Discord?",
      answer:
        "Escribe tu texto en el cuadro de arriba, busca un estilo que te guste y toca Copiar (o el propio texto). Después abre Discord y pégalo en tu nombre visible, tu apodo, tu biografía, el nombre del servidor, un canal o un mensaje.",
    },
    {
      question: "¿Puedo usar letras bonitas en mi nombre de usuario?",
      answer:
        "No en tu @nombre de usuario único, que solo admite minúsculas, números, guiones bajos y puntos. Las letras bonitas funcionan en tu nombre visible y en los apodos de cada servidor, que son los nombres que la mayoría de la gente ve en el chat.",
    },
    {
      question: "¿Por qué algunas letras se ven como cuadros o signos de interrogación?",
      answer:
        "Un cuadro significa que el dispositivo no tiene una fuente con ese carácter. Suele pasar con símbolos poco comunes en móviles y ordenadores antiguos. Los estilos con la etiqueta Compatibilidad limitada son los que más lo hacen, así que para nombres quédate con negrita, cursiva o script.",
    },
    {
      question: "¿Por qué las letras con tilde o la ñ no cambian de estilo?",
      answer:
        "Unicode solo tiene versiones estilizadas de las letras básicas de la A a la Z y de los números. Las letras con tilde, diéresis o la ñ no tienen equivalente, así que se quedan en su forma normal. Si quieres un resultado uniforme, escribe esas palabras sin tilde.",
    },
    {
      question: "¿Las letras para Discord funcionan en el móvil?",
      answer:
        "Sí. Puedes copiar y pegar desde esta web en iPhone y Android, y la mayoría de los estilos se ven bien en la app de Discord para móvil. La excepción principal es el texto de colores ANSI, que por ahora solo muestra colores en escritorio y web.",
    },
    {
      question: "¿Va contra las normas de Discord usar letras bonitas?",
      answer:
        "Usar caracteres Unicode no va contra las normas por sí mismo. Los problemas llegan cuando un nombre se usa para suplantar a alguien, evitar la moderación o ser ilegible. Además, cada servidor puede tener sus propias reglas para los apodos, así que haz caso a los moderadores si te piden un nombre normal.",
    },
    {
      question: "¿Este generador es gratis y privado?",
      answer:
        "Sí. Es gratis y sin registro, y la conversión se hace por completo en tu navegador. El texto que escribes no se envía ni se guarda en nuestro servidor.",
    },
  ],
  Article,
};
