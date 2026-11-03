import Link from "next/link";
import type { FormattingPageContent } from "../../types";
import { AnsiExample, LocalLink, MarkdownCheatSheet } from "../shared";

const L = "es";

function Guide() {
  return (
    <div className="prose-content">
      <h2 id="que-es-el-markdown">¿Qué es el formato de texto de Discord?</h2>
      <p>
        Discord usa un lenguaje de marcado sencillo llamado <strong>markdown</strong>. Escribes unos símbolos
        alrededor de tus palabras y Discord las convierte en negrita, cursiva, subrayado, tachado o texto
        oculto al enviar el mensaje. El markdown viene integrado en Discord, así que funciona igual para
        todos, pero solo se aplica dentro de los mensajes y de algunos campos del perfil, como «Sobre mí». No
        tiene efecto en los nombres de usuario, los nombres visibles ni los nombres de servidor.
      </p>

      <h2 id="chuleta">Chuleta de markdown de Discord</h2>
      <MarkdownCheatSheet
        headers={["Estilo", "Escribe esto", "Ideal para"]}
        rows={[
          ["Negrita", "Énfasis, palabras clave"],
          ["Cursiva", "Tono, títulos"],
          ["Negrita cursiva", "Énfasis fuerte"],
          ["Subrayado", "Destacar (se combina con otros, p. ej. __**texto**__)"],
          ["Tachado", "Correcciones y bromas"],
          ["Spoiler", "Ocultar giros de la trama o respuestas hasta que se haga clic"],
          ["Código en línea", "Comandos, código corto"],
          ["Bloque de código", "Código de varias líneas, arte ASCII, texto monoespaciado"],
          ["Cita", "Citar una línea"],
          ["Cita de varias líneas", "Citar todo lo que va después"],
          ["Títulos", "Títulos grandes, medianos y pequeños"],
          ["Subtexto", "Notas pequeñas en gris"],
          ["Lista", "Listas con viñetas y numeradas"],
          ["Enlace con texto", "Enlaces de texto en los que se puede hacer clic"],
        ]}
      />
      <p>
        Las fechas y horas tienen su propia sintaxis: <code>&lt;t:1793740800:R&gt;</code> se convierte en una
        cuenta atrás en vivo que se muestra en la zona horaria de cada lector. Crea una con el{" "}
        <LocalLink locale={L} path="/discord-timestamp-generator">
          generador de marcas de tiempo de Discord
        </LocalLink>
        .
      </p>

      <h2 id="titulos-y-subtexto">Títulos y subtexto</h2>
      <p>
        Empieza una línea con <code>#</code>, <code>##</code> o <code>###</code> seguido de un espacio para
        crear un título grande, mediano o pequeño. Los títulos son perfectos para canales de normas, anuncios
        y eventos. Para el efecto contrario, empieza una línea con <code>-#</code> y un espacio para crear un
        subtexto pequeño y apagado, útil para notas al pie, créditos o avisos de «editado». Ambos solo
        funcionan al principio de la línea.
      </p>

      <h2 id="texto-de-colores">Cómo poner texto de colores en Discord</h2>
      <p>
        Discord no tiene opción de color para los mensajes normales, pero los bloques de código con el
        lenguaje <code>ansi</code> admiten códigos de color de terminal. La herramienta de arriba los crea por
        ti: elige un color de texto, un fondo opcional, negrita o subrayado y copia el resultado. Por dentro
        crea un bloque como este, donde cada código de color empieza con un carácter de escape invisible:
      </p>
      <AnsiExample text="Tu texto azul" />
      <p>
        Los colores se ven en la app de escritorio de Discord y en el navegador. Las apps móviles, por ahora,
        muestran el texto dentro de un bloque de código normal sin color, así que no dependas solo del color
        para transmitir algo.
      </p>

      <h2 id="bloques-de-codigo">Bloques de código y resaltado de sintaxis</h2>
      <p>
        Rodea el texto con tres comillas invertidas para crear un bloque de código. Añade el nombre de un
        lenguaje justo después de las comillas de apertura, como <code>```js</code>, <code>```py</code> o{" "}
        <code>```css</code>, y Discord resalta la sintaxis. Los bloques de código también mantienen los
        espacios tal cual, así que vienen bien para tablas y arte con texto.
      </p>

      <h2 id="combinar-y-escapar">Combinar y escapar formatos</h2>
      <p>
        La mayoría de los estilos se pueden combinar. <code>__***texto***__</code> da negrita, cursiva y
        subrayado a la vez, y <code>||**texto**||</code> esconde texto en negrita tras un spoiler. Si quieres
        mostrar los símbolos en lugar del formato, pon una barra invertida delante:{" "}
        <code>\*sin cursiva\*</code>. Rodear el texto con una sola comilla invertida también muestra los
        símbolos tal cual.
      </p>

      <h2 id="markdown-o-unicode">Markdown frente a letras Unicode</h2>
      <p>
        El markdown cambia cómo Discord <em>muestra</em> el texto normal, mientras que las letras Unicode
        cambian los propios caracteres. Por eso el markdown es lo mejor para dar formato legible a los
        mensajes, y los estilos Unicode son la única forma de tener letras en negrita, cursiva o góticas en un
        nombre visible o en el nombre de un canal. Prueba ambos con el{" "}
        <LocalLink locale={L} path="/">
          generador de letras para Discord
        </LocalLink>{" "}
        o ve directamente a un estilo como <Link href="/discord-font-generator/bold">negrita</Link> o{" "}
        <Link href="/discord-font-generator/cursive">cursiva</Link> (en inglés).
      </p>

      <h2 id="consejos">Consejos para un formato legible</h2>
      <ul>
        <li>Usa títulos para organizar los mensajes largos en lugar de ponerlo todo en negrita.</li>
        <li>Pon siempre spoiler en los giros de la trama, las respuestas de acertijos y todo lo delicado.</li>
        <li>Deja el color para destacar y decorar, ya que en el móvil no se ve.</li>
        <li>
          Los lectores de pantalla entienden bien el markdown, así que es más accesible que las letras
          Unicode.
        </li>
      </ul>
    </div>
  );
}

export const formattingEs: FormattingPageContent = {
  name: "Formato de texto de Discord",
  title: "Formato de texto de Discord – Negrita, colores y markdown",
  description:
    "Aprende a dar formato al texto en Discord: negrita, cursiva, subrayado, spoiler, títulos, subtexto, bloques de código y texto de colores. Copia el markdown al instante.",
  h1: "Formato de texto de Discord: guía de markdown y generador",
  intro:
    "Escribe tu mensaje una vez y cópialo en negrita, cursiva, subrayado, spoiler, título, subtexto, código o texto de colores, todo con el markdown integrado de Discord.",
  toolLabel: "Herramienta de formato markdown de Discord",
  appName: "Herramienta de formato de texto de Discord",
  Guide,
};
