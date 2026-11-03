import { hrefFor } from "@/lib/i18n";
import type { ToolPageContent } from "../../types";
import { NameIdeasTable, NameTypeTable } from "../shared";

const L = "es";

function Article() {
  return (
    <>
      <h2>Primero: ¿nombre visible o nombre de usuario?</h2>
      <p>
        Discord da a cada cuenta dos nombres, y solo uno de ellos se puede decorar. Esto confunde a mucha
        gente.
      </p>
      <NameTypeTable
        headers={["Nombre visible", "@nombre de usuario"]}
        rows={[
          [
            "Dónde se ve",
            "Junto a tus mensajes y en la lista de miembros",
            "En tu perfil y cuando alguien te agrega",
          ],
          ["Letras bonitas y símbolos", "Sí", "No"],
          [
            "Caracteres permitidos",
            "Casi cualquier carácter Unicode",
            "Minúsculas, números, guiones bajos y puntos",
          ],
          ["Tiene que ser único", "No", "Sí"],
          ["Longitud", "Hasta 32 caracteres", "De 2 a 32 caracteres"],
        ]}
      />
      <p>
        Así que el nombre que crees aquí va en tu nombre visible. Tu @nombre de usuario se queda normal, y es
        mejor así, porque es como te encuentran tus amigos.
      </p>

      <h2>Cómo crear un nombre que quede bien de verdad</h2>
      <p>
        Los generadores ofrecen cientos de opciones, así que es fácil acabar con algo recargado. Un proceso
        sencillo ayuda:
      </p>
      <ol>
        <li>
          Empieza por el nombre sin estilo. Decide cómo quieres que te llamen antes de decorarlo. Los nombres
          cortos (de 4 a 12 letras) quedan mejor en cualquier estilo.
        </li>
        <li>
          Elige una sola fuente que vaya contigo. La negrita y el doble trazo transmiten algo limpio y seguro.
          La script queda suave o elegante. La gótica, oscura o competitiva. Las versalitas, tranquilas y
          estéticas.
        </li>
        <li>
          Añade como mucho una decoración. Un símbolo a cada lado, como ✧ o ♡, enmarca el nombre sin
          saturarlo.
        </li>
        <li>
          Pruébalo en pequeño. En el chat tu nombre suele verse pequeño, así que revísalo en la vista previa
          del generador y en tu móvil.
        </li>
        <li>
          Comprueba la longitud. La vista previa del generador te avisa si superas el límite de 32 caracteres.
        </li>
      </ol>
      <p>
        Un detalle: los estilos solo cambian las letras de la A a la Z y los números. Las letras con tilde y
        la ñ se quedan normales, así que «Iñaki» saldrá con la «ñ» sin estilo.
      </p>

      <h2>Ideas de nombres por estilo</h2>
      <NameIdeasTable
        headers={["Estilo", "Fórmula", "Ejemplo"]}
        rows={[
          ["Limpio", "Nombre en negrita o doble trazo"],
          ["Estético suave", "Versalitas + símbolos suaves"],
          ["Elegante", "Script en negrita"],
          ["Gamer", "Gótica + tag"],
          ["Decorado", "Script dentro de un marco"],
          ["Minimalista", "Nombre normal + un símbolo"],
        ]}
      />

      <h2>Cómo cambiar tu nombre visible en Discord</h2>
      <ol>
        <li>Copia tu nuevo nombre del generador.</li>
        <li>Abre Discord y ve a los ajustes de usuario (el icono del engranaje junto a tu perfil).</li>
        <li>Abre la sección del perfil.</li>
        <li>Pégalo en el campo del nombre visible y guarda los cambios.</li>
      </ol>
      <p>
        En el móvil, toca tu foto de perfil, edita tu perfil y pégalo en el nombre visible. Discord mueve los
        menús de vez en cuando, así que los nombres pueden variar un poco en tu versión.
      </p>

      <h2>¿Quieres otro nombre solo en un servidor?</h2>
      <p>
        Usa un apodo de servidor. Sustituye a tu nombre visible solo dentro de ese servidor, algo útil para
        tags de clan, nombres de rol o para ir a juego con el tema del servidor. Abre el menú del servidor,
        elige la opción de editar tu perfil del servidor y pega tu nombre en el apodo. Si la opción está
        desactivada, el servidor no deja cambiar los apodos, así que pregunta a un moderador.
      </p>

      <h2>Cosas a tener en cuenta</h2>
      <ul>
        <li>
          La legibilidad gana a la decoración. Si tus amigos no pueden escribir las primeras letras de tu
          nombre, mencionarte con @ se vuelve un fastidio.
        </li>
        <li>
          Algunos estilos fallan en el móvil. Las letras cuadradas y en burbuja oscura pueden verse como
          cuadros en dispositivos antiguos. Negrita, script y gótica son lo más seguro.
        </li>
        <li>
          Los nombres decorados cuestan más de encontrar. La búsqueda de miembros de Discord puede no
          relacionar las letras decoradas con las normales, así que tus amigos podrían tener problemas para
          encontrarte en un servidor grande.
        </li>
        <li>
          No suplantes a nadie. Los nombres que copian a moderadores, bots o usuarios conocidos pueden acabar
          en un aviso o una expulsión, y las letras bonitas son una forma habitual de intentarlo.
        </li>
      </ul>
    </>
  );
}

export const discordNameEs: ToolPageContent = {
  name: "Generador de nombres para Discord",
  title: "Generador de nombres para Discord – Nombres con estilo",
  description:
    "Crea un nombre visible con estilo para Discord en segundos. Elige una letra bonita, añade símbolos, revisa el límite de 32 caracteres y copia tu nombre.",
  h1: "Generador de nombres para Discord",
  intro:
    "Tu nombre visible aparece junto a cada mensaje que envías, en todos tus servidores. Merece la pena que quede bien. Escribe tu nombre o tu tag gamer, pruébalo con distintas letras y decoraciones, y copia el que vaya contigo.",
  sampleText: "Tu Nombre",
  toolLabel: "Generador de nombres para Discord",
  faqHeading: "Preguntas frecuentes",
  faqs: [
    {
      question: "¿Puedo usar letras bonitas en mi nombre de usuario de Discord?",
      answer:
        "No. Los nombres de usuario solo admiten minúsculas, números, guiones bajos y puntos. Las letras bonitas funcionan en tu nombre visible y en los apodos de servidor.",
    },
    {
      question: "¿Cuántos caracteres puede tener un nombre visible de Discord?",
      answer:
        "Hasta 32 caracteres. Las decoraciones también cuentan, así que los nombres largos con símbolos pueden necesitar un recorte.",
    },
    {
      question: "¿Todo el mundo verá mi nombre con estilo igual?",
      answer:
        "Casi todo el mundo. Algunos dispositivos antiguos no pueden mostrar caracteres poco comunes y enseñan cuadros en su lugar. Quédate con negrita, script o gótica si quieres ir sobre seguro.",
    },
    {
      question: "¿Va contra las normas de Discord usar un nombre decorado?",
      answer:
        "Usar caracteres Unicode no va contra las normas por sí mismo. Los problemas vienen de la suplantación, los nombres ofensivos o los nombres hechos para ser ilegibles. Además, cada servidor puede tener sus propias normas para los apodos.",
    },
    {
      question: "¿Puedo cambiar mi nombre visible tantas veces como quiera?",
      answer:
        "Sí, el nombre visible y los apodos se pueden cambiar cuando quieras. Tu @nombre de usuario tiene normas más estrictas.",
    },
    {
      question: "¿Este generador de nombres es gratis?",
      answer: "Sí. Sin registro, y todo se convierte en tu navegador.",
    },
  ],
  Article,
  relatedHeading: "Enlaces relacionados",
  related: [
    { href: hrefFor(L, "/fancy-text-generator"), label: "Generador de letras bonitas" },
    { href: hrefFor(L, "/"), label: "Generador de letras para Discord" },
    { href: "/discord-font-generator/bold", label: "Generador de letra negrita (en inglés)" },
    { href: "/discord-font-generator/cursive", label: "Generador de letra cursiva (en inglés)" },
    { href: "/discord-font-generator/small-caps", label: "Generador de versalitas (en inglés)" },
  ],
};
