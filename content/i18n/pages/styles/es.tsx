import { fancy } from "../../home/shared";
import type { StylePagesContent } from "../../types";
import { LocalLink } from "../shared";

const L = "es";
const g = (slug: string, label: string) => (
  <LocalLink locale={L} path={`/discord-font-generator/${slug}`}>
    {label}
  </LocalLink>
);

export const stylesEs: StylePagesContent = {
  toolLabel: "{name}",
  moreHeading: "Más generadores de letras para Discord",
  outro: (
    <p>
      ¿Buscas más opciones? El{" "}
      <LocalLink locale={L} path="/">
        generador de letras para Discord
      </LocalLink>{" "}
      principal muestra todos los estilos a la vez, incluidos negrita, cursiva, gótica y glitch.
    </p>
  ),
  pages: {
    bold: {
      name: "Generador de letra negrita",
      h1: "Generador de letra negrita para Discord",
      title: "Letra negrita para Discord – Copia y pega texto en negrita",
      description:
        "Crea texto en negrita para nombres, apodos y títulos de servidor en Discord. Escribe una vez, copia cualquier negrita (con serifa, sin serifa o cursiva) y pégala.",
      intro:
        "Escribe abajo para convertir tu texto en letras Unicode en negrita que siguen en negrita donde las pegues, incluidos los nombres visibles y los apodos de Discord, donde el markdown no funciona.",
      featuredLabel: "Estilos en negrita",
      body: (
        <>
          <h2>¿Por qué usar letra negrita en Discord?</h2>
          <p>
            En un mensaje de Discord puedes poner texto en negrita rodeándolo con dos asteriscos, como{" "}
            <code>**esto**</code>. Pero ese markdown se ignora en los nombres, así que un nombre visible o de
            canal en negrita necesita otro método. Este generador cambia cada letra por su gemela en negrita
            del bloque «Mathematical Alphanumeric Symbols» de Unicode. El resultado, como{" "}
            {fancy("bold-serif", "Gamer")} o {fancy("bold-sans", "Gamer")}, es texto real que mantiene su
            grosor en cualquier campo que acepte Unicode.
          </p>
          <h2>¿Qué estilo de negrita elegir?</h2>
          <ul>
            <li>
              <strong>Negrita (con serifa)</strong> tiene letras clásicas de libro con pequeños remates. Va
              bien con nombres de servidor formales y personajes de rol.
            </li>
            <li>
              <strong>Negrita sin serifa</strong> es limpia y moderna, y es la opción más legible para nombres
              gamer y títulos de canal.
            </li>
            <li>
              <strong>Negrita itálica</strong> y <strong>Negrita itálica sin serifa</strong> añaden
              movimiento, ideal para canales de hype y tags de equipos de esports.
            </li>
            <li>
              <strong>Cursiva en negrita</strong> y <strong>Gótica en negrita</strong> combinan grosor y
              personalidad cuando la negrita simple se queda corta.
            </li>
          </ul>
          <h2>Consejos para nombres en negrita</h2>
          <p>
            Las letras en negrita están entre los caracteres decorados mejor soportados, así que se ven bien
            en Windows, Mac, iPhone y Android actuales. Negrita y Negrita sin serifa también incluyen números,
            perfectos para tags de clan como {fancy("bold-serif", "Team 7")}. Recuerda que los nombres
            visibles y los apodos tienen un máximo de 32 caracteres; el contador bajo el cuadro de texto te
            muestra cuántos llevas.
          </p>
          <p>
            Ten en cuenta que quien busque «Gamer» en la lista de miembros no encontrará «
            {fancy("bold-serif", "Gamer")}
            », porque son caracteres distintos. Si quieres que te mencionen con @ fácilmente, deja parte del
            nombre sin estilo o pon en negrita solo una palabra. Para la negrita dentro de los mensajes, el
            markdown normal suele ser mejor opción; consulta la{" "}
            <LocalLink locale={L} path="/discord-text-formatting">
              guía de formato de texto de Discord
            </LocalLink>
            .
          </p>
          <h2>Ideas de nombres en negrita</h2>
          <p>
            La negrita funciona mejor cuando destaca algo concreto. Prueba a poner en negrita solo tu nombre
            principal y dejar el tag normal, como «{fancy("bold-sans", "Nova")} | FPS», o usa números en
            negrita para un equipo, como «{fancy("bold-serif", "Squad 7")}». Los dueños de servidores suelen
            poner en negrita las categorías de la lista de canales, por ejemplo «
            {fancy("bold-sans", "CANALES DE VOZ")}», para que destaquen sobre los canales. Negrita itálica es
            muy popular entre streamers y creadores porque se ve enérgica en el chat sin costar de leer.
          </p>
        </>
      ),
    },
    cursive: {
      name: "Generador de letra cursiva",
      h1: "Generador de letra cursiva para Discord",
      title: "Letra cursiva para Discord – Copia y pega texto cursivo",
      description:
        "Convierte tu nombre en elegante texto cursivo para Discord. Letras script, script en negrita e itálicas para copiar y pegar en apodos, biografías y servidores.",
      intro:
        "Escribe tu texto una vez y obtén letras script, script en negrita e itálicas listas para copiar en tu nombre visible, tu «Sobre mí» o el nombre de tu servidor.",
      featuredLabel: "Estilos cursivos",
      body: (
        <>
          <h2>¿Qué es una letra cursiva para Discord?</h2>
          <p>
            El texto cursivo o script, como {fancy("script", "Starlight")} o{" "}
            {fancy("bold-script", "Starlight")}, viene de los alfabetos script de Unicode. Se crearon para la
            notación matemática, pero su aspecto manuscrito los convirtió en una de las formas más populares
            de decorar un nombre de Discord. Como son caracteres y no formato, las curvas sobreviven donde las
            cursivas del markdown no llegan, como los apodos y los nombres de canal.
          </p>
          <h2>Cursiva, Cursiva en negrita e Itálica</h2>
          <p>
            <strong>Cursiva</strong> es ligera y elegante, ideal para perfiles estéticos, servidores de arte y
            temas suaves. Algunas de sus mayúsculas (B, E, F, H, I, L, M y R) y las minúsculas e, g y o vienen
            de un bloque de Unicode más antiguo, así que pueden verse algo distintas de sus vecinas con
            algunas fuentes.
          </p>
          <p>
            <strong>Cursiva en negrita</strong> usa un único juego de trazos más gruesos, así que se lee mejor
            en tamaño pequeño y suele quedar mejor en la lista de miembros. Si solo eliges una letra cursiva
            para un nombre, que sea esta.
          </p>
          <p>
            <strong>Itálica</strong> y <strong>Itálica sin serifa</strong> están inclinadas en lugar de
            enlazadas, una opción discreta cuando la script completa resulta demasiado recargada.
          </p>
          <h2>Dónde queda mejor el texto cursivo</h2>
          <ul>
            <li>Nombres visibles de artistas, escritores y personajes de rol.</li>
            <li>Biografías «Sobre mí», sobre todo combinadas con decoraciones como Ornamentado o Brillos.</li>
            <li>Nombres de servidores acogedores, creativos o de comunidad.</li>
            <li>Títulos de canales de bienvenida y normas, junto a una descripción normal.</li>
          </ul>
          <p>
            Las letras script son finas, así que pueden costar de leer en pantallas de móvil pequeñas y en
            modo oscuro con poco brillo. Mira cómo queda en la lista de resultados antes de decidirte y que el
            nombre sea corto. Para un estilo suave que se lea fácil, prueba el{" "}
            {g("small-caps", "generador de versalitas")}.
          </p>
          <h2>Ideas de nombres en cursiva</h2>
          <p>
            Los nombres cortos quedan mejor en script. Una sola palabra como «{fancy("bold-script", "Luna")}»
            o «{fancy("script", "Velvet")}» se lee de maravilla, mientras que las frases largas se convierten
            en un lío de curvas. Mucha gente combina un nombre cursivo con un símbolo sencillo, por ejemplo «༺{" "}
            {fancy("bold-script", "Rose")} ༻», o usa script solo en la primera letra. Si tu servidor tiene un
            tema suave o creativo, un nombre de servidor cursivo con nombres de canal normales crea ambiente
            sin perder legibilidad.
          </p>
        </>
      ),
    },
    gothic: {
      name: "Generador de letra gótica",
      h1: "Generador de letra gótica para Discord",
      title: "Letra gótica para Discord – Texto Fraktur estilo antiguo",
      description:
        "Crea texto gótico para Discord en Fraktur y letra gótica en negrita. Copia y pega letras de estilo antiguo para nombres de servidor, roles y apodos.",
      intro:
        "Convierte texto normal en una letra gótica dramática. Estas letras usan caracteres Fraktur que parecen escritura medieval y se pegan en cualquier parte de Discord.",
      featuredLabel: "Estilos góticos",
      body: (
        <>
          <h2>Fraktur: la letra gótica de Discord</h2>
          <p>
            El texto gótico como {fancy("fraktur", "Dark Knight")} o {fancy("bold-fraktur", "Dark Knight")}{" "}
            usa las letras Fraktur de Unicode, un estilo basado en la letra gótica que fue habitual en la
            imprenta alemana durante siglos. Recuerda a los manuscritos antiguos, las cabeceras de periódico y
            los diseños de tatuaje.
          </p>
          <h2>Estilos góticos de este generador</h2>
          <ul>
            <li>
              <strong>Gótica</strong> es la letra gótica clásica y más ligera. Es elegante, pero cuesta leerla
              en tamaño pequeño.
            </li>
            <li>
              <strong>Gótica en negrita</strong> es más gruesa y mucho más legible en la lista de miembros; es
              la mejor opción para un nombre visible gótico.
            </li>
            <li>
              <strong>Cruz gótica</strong>, <strong>Coronado</strong>, <strong>Marco real</strong> y{" "}
              <strong>Espadas cruzadas</strong> rodean las letras de símbolos para un aire medieval o de clan.
            </li>
            <li>
              <strong>Estilo rúnico</strong> toma letras parecidas del silabario cheroqui para dar sensación
              de algo antiguo y tallado.
            </li>
          </ul>
          <h2>Ideas para usar texto gótico en Discord</h2>
          <p>
            Las letras góticas encajan en comunidades de terror, fantasía, metal y rol. Quedan genial en
            nombres de servidor, roles del staff y cabeceras de categoría. Una sola palabra gótica marca el
            tono, como «{fancy("bold-fraktur", "The Crypt")}» para un canal de voz, mientras el resto del
            servidor sigue legible.
          </p>
          <p>
            Ten en cuenta que Fraktur no tiene números, así que se quedan normales. Algunas mayúsculas (C, H,
            I, R y Z) del estilo ligero vienen de otro bloque de Unicode y pueden verse algo distintas en
            ciertos dispositivos. Si quieres algo aún más fuerte, combina Gótica en negrita con el{" "}
            {g("glitch", "generador de texto glitch")} para un aire maldito, o mantenlo limpio con el{" "}
            {g("bold", "generador de letra negrita")}.
          </p>
          <h2>Ideas de nombres de servidor y roles</h2>
          <p>
            La letra gótica brilla en los títulos. Nombres de servidor como «
            {fancy("bold-fraktur", "Shadow Realm")}» o «꧁༒☬ {fancy("bold-fraktur", "Nightfall")} ☬༒꧂» anuncian
            al instante un tema oscuro o medieval. Los roles también encajan, porque aparecen en la lista de
            miembros y en los perfiles: «{fancy("bold-fraktur", "Overlord")}», «♛{" "}
            {fancy("bold-fraktur", "Royal Guard")} ♛» o «{fancy("fraktur", "Knight")}» quedan perfectos en
            servidores de rol y de clanes. Limita el texto gótico a una o dos palabras: las frases largas en
            esta letra cansan y mucha gente se las salta.
          </p>
        </>
      ),
    },
    "small-caps": {
      name: "Generador de versalitas",
      h1: "Generador de versalitas para Discord",
      title: "Versalitas para Discord – Letra pequeña para copiar y pegar",
      description:
        "Crea versalitas y letra pequeña para Discord. Copia y pega ᴛɪɴʏ ᴄᴀᴘꜱ, superíndices y subíndices para nombres, biografías y canales minimalistas.",
      intro:
        "Consigue versalitas y letra pequeña, limpias y minimalistas, para tu perfil de Discord. Escribe tus palabras y copia la versión que vaya con tu estilo.",
      featuredLabel: "Estilos de versalitas",
      body: (
        <>
          <h2>¿Qué son las versalitas?</h2>
          <p>
            Las versalitas son mayúsculas dibujadas a la altura de las minúsculas. En Discord dan a los
            nombres un aire tranquilo y minimalista: {fancy("small-caps-all", "midnight")} en lugar de
            Midnight. Unicode nunca tuvo un alfabeto completo de versalitas, así que los generadores reúnen
            caracteres parecidos del alfabeto fonético. Casi todos encajan perfecto; la q y la x no tienen
            versalita real, así que usamos los caracteres legibles más parecidos.
          </p>
          <h2>Versalitas y Versalitas mini</h2>
          <p>
            <strong>Versalitas</strong> mantiene tus mayúsculas a tamaño completo y encoge el resto, algo
            natural para los nombres: {fancy("small-caps", "Midnight")}. <strong>Versalitas mini</strong> lo
            encoge todo para un aspecto uniforme y discreto: {fancy("small-caps-all", "Midnight")}. Ambas
            funcionan bien en móviles y ordenadores modernos, así que son de los estilos decorados más seguros
            para nombres visibles.
          </p>
          <h2>Superíndice y subíndice</h2>
          <p>
            El <strong>superíndice</strong> sube las letras por encima de la línea (
            {fancy("superscript", "tiny")}) y el <strong>subíndice</strong> las baja. Son divertidos para
            susurros, notas y biografías monas, pero Unicode solo incluye algunas letras: no hay q en
            superíndice y al subíndice le falta casi un tercio del alfabeto. Esas letras se quedan normales,
            así que revisa el resultado antes de usarlo.
          </p>
          <h2>Los mejores usos de las versalitas en Discord</h2>
          <ul>
            <li>
              Nombres de canal como ︱{fancy("small-caps-all", "rules")} o ︱{fancy("small-caps-all", "news")}{" "}
              para una barra lateral ordenada y uniforme.
            </li>
            <li>Nombres visibles con estilo que no cuestan de leer.</li>
            <li>
              Nombres de rol, donde etiquetas cortas como {fancy("small-caps-all", "moderator")} quedan
              limpias en la lista de miembros.
            </li>
            <li>Biografías estéticas combinadas con las decoraciones Corchetes de esquina o Corazones.</li>
          </ul>
          <p>
            Como las versalitas forman parte del alfabeto fonético, los lectores de pantalla pueden leerlas de
            forma rara, así que deja la información clave en texto normal. Para más estilos suaves, mira el{" "}
            {g("aesthetic", "generador de letras estéticas")}.
          </p>
          <h2>Versalitas para un servidor ordenado</h2>
          <p>
            A los diseñadores de servidores les encantan las versalitas porque todos los nombres de canal
            quedan a la misma altura. Un patrón habitual es un emoji, un separador fino y una etiqueta en
            versalitas, como «💬︱
            {fancy("small-caps-all", "general")}» o «🎮︱{fancy("small-caps-all", "game night")}». Discord
            muestra los nombres de canal en minúsculas y con guiones, pero las versalitas sobreviven intactas,
            y parte de su encanto está ahí. Elige un estilo de separador y úsalo en todas partes para que la
            lista parezca pensada, no aleatoria.
          </p>
        </>
      ),
    },
    aesthetic: {
      name: "Generador de letras estéticas",
      h1: "Generador de letras estéticas para Discord",
      title: "Letras estéticas para Discord – Vaporwave y texto bonito",
      description:
        "Letras estéticas para biografías y nombres de Discord: vaporwave, versalitas, kawaii y brillos. Copia y pega texto bonito para Discord con un clic.",
      intro:
        "Encuentra estilos de texto suaves, bonitos y vaporwave para tu perfil de Discord. Escribe tus palabras y copia una letra estética con un clic.",
      featuredLabel: "Estilos estéticos",
      body: (
        <>
          <h2>¿Qué hace que una letra sea «estética»?</h2>
          <p>
            En Discord, «estético» suele significar texto suave, espaciado y decorado que encaja con un
            ambiente: pastel, vaporwave, cottagecore o lo-fi. Es menos cuestión de un alfabeto concreto y más
            de combinar estilos, espacios y pequeños símbolos para que tu biografía parezca cuidada.
          </p>
          <h2>Estilos estéticos populares</h2>
          <ul>
            <li>
              <strong>Vaporwave ancha</strong> ({fancy("fullwidth", "aesthetic")}) usa las letras anchas de
              las fuentes de Asia oriental para ese aire retro de los 80 y 90.{" "}
              <strong>Vaporwave espaciada</strong> añade aún más espacio.
            </li>
            <li>
              <strong>Versalitas</strong> y <strong>Versalitas mini</strong> dan un toque tranquilo y
              minimalista que va con casi cualquier tema.
            </li>
            <li>
              <strong>Kawaii</strong>, <strong>Brillos</strong>, <strong>Lazo de flores</strong>,{" "}
              <strong>Corazones</strong> y <strong>Sakura</strong> envuelven tu texto en símbolos y emojis
              monos.
            </li>
            <li>
              <strong>Doble trazo</strong>, <strong>Monoespaciada</strong> y <strong>Espaciado</strong> son
              opciones limpias para un perfil tecnológico o minimalista.
            </li>
          </ul>
          <h2>Cómo crear un perfil estético en Discord</h2>
          <p>
            Elige uno o dos estilos y úsalos con coherencia. Por ejemplo, un nombre visible en Versalitas
            mini, un titular con Lazo de flores al principio de tu «Sobre mí» y texto normal para el resto.
            Demasiados estilos a la vez quedan desordenados y cuestan de leer. Tu biografía tiene un límite de
            190 caracteres, y las decoraciones y los espacios lo gastan rápido, así que revisa la longitud
            sobre la marcha.
          </p>
          <p>
            Las letras anchas ocupan el doble que las normales, así que un nombre vaporwave largo puede
            partirse o cortarse en la lista de miembros. Los marcos con emojis se ven en color en casi todos
            los dispositivos, pero su aspecto exacto depende del juego de emojis de cada plataforma. Para
            letras más redondas, prueba el {g("bubble", "generador de letras burbuja")}, o ve a algo más
            pequeño con el {g("small-caps", "generador de versalitas")}.
          </p>
          <h2>Una plantilla sencilla de biografía estética</h2>
          <p>
            ¿No sabes por dónde empezar? Usa un titular decorado, dos o tres líneas cortas normales y un
            símbolo de cierre. Por ejemplo: «⋆˚｡⋆୨୧˚ {fancy("italic", "dreamer")} ˚୨୧⋆｡˚⋆», luego tus
            pronombres, tu zona horaria y tus juegos favoritos en texto normal, y un «✧» al final. La línea
            decorada da personalidad y las líneas normales se leen bien para todos, incluidas las personas que
            usan lectores de pantalla. Cambia el titular cuando cambie tu humor; el resto puede quedarse
            igual.
          </p>
        </>
      ),
    },
    glitch: {
      name: "Generador de texto glitch",
      h1: "Generador de texto glitch para Discord",
      title: "Texto glitch para Discord – Zalgo y letras que dan miedo",
      description:
        "Crea texto glitch y zalgo para Discord con intensidad ajustable. Copia y pega letras corruptas, tachadas y rayadas que dan miedo.",
      intro:
        "Corrompe tu texto con marcas zalgo, tachados y rayas. Ajusta la intensidad del glitch y copia el resultado inquietante directamente en Discord.",
      featuredLabel: "Estilos glitch",
      body: (
        <>
          <h2>Cómo funciona el texto glitch</h2>
          <p>
            El texto glitch usa caracteres combinables: marcas invisibles que se pegan a la letra anterior,
            como las tildes. Normalmente una letra lleva una tilde como mucho, pero nada impide apilar
            docenas. Amontónalas encima, a través y debajo de cada letra y obtienes el aspecto «zalgo», alto y
            corrupto, que invade las líneas de alrededor.
          </p>
          <h2>Estilos glitch que puedes copiar</h2>
          <ul>
            <li>
              <strong>Glitch Zalgo</strong>: usa el control de intensidad de 1 (un ligero parpadeo) a 10 (caos
              total). El resultado se genera siempre igual, así que puedes volver y obtener lo mismo.
            </li>
            <li>
              <strong>Tachado</strong>, <strong>Barrado</strong>, <strong>Sobrerrayado</strong>,{" "}
              <strong>Wavy</strong> y <strong>Punteado</strong> añaden una sola marca a cada letra para un
              efecto dañado más sutil.
            </li>
            <li>
              <strong>Al revés</strong>, <strong>Espejo</strong> y <strong>Invertido</strong> dan la vuelta a
              tu texto para mensajes desconcertantes y de meme.
            </li>
          </ul>
          <h2>Usar zalgo con responsabilidad en Discord</h2>
          <p>
            El zalgo intenso puede tapar los mensajes de otras personas, por eso muchos servidores lo prohíben
            y las reglas de AutoMod suelen filtrarlo. En los nombres visibles, además, puede hacer imposible
            mencionarte con @ o leerte en la lista de miembros. Una intensidad baja, de 1 a 3, suele bastar
            para un nombre siniestro o un canal de evento de Halloween, y es menos probable que lo eliminen.
          </p>
          <p>
            Cada sistema operativo dibuja las marcas combinables de forma distinta, así que el mismo texto
            glitch puede verse ordenado en el ordenador y caótico en el móvil. Revisa el resultado y pruébalo
            antes en un canal privado. ¿Quieres algo oscuro pero legible? Prueba el{" "}
            {g("gothic", "generador de letra gótica")}. Para texto tachado sencillo en los mensajes, el
            markdown <code>~~tachado~~</code> de Discord es más limpio; consulta nuestra{" "}
            <LocalLink locale={L} path="/discord-text-formatting">
              guía de formato de texto
            </LocalLink>
            .
          </p>
          <h2>Ideas de texto glitch</h2>
          <p>
            Los estilos glitch son perfectos para eventos de terror, servidores de misterio y ARG, y
            personajes de bot «corruptos». Un nombre de canal con zalgo suave da un tono inquietante sin
            desbordar la lista de canales. El texto rayado o tachado sirve para correcciones en broma como «
            {fancy("strikethrough", "deberes")} jugar ». Para anuncios, combina una palabra con glitch y texto
            normal, por ejemplo «vuelve la {fancy("slashed", "senal")}», para que el mensaje se entienda de un
            vistazo.
          </p>
        </>
      ),
    },
    bubble: {
      name: "Generador de letras burbuja",
      h1: "Generador de letras burbuja para Discord",
      title: "Letras burbuja para Discord – Texto con letras en círculos",
      description:
        "Crea texto burbuja para Discord con letras en círculos, burbujas oscuras y cuadrados. Copia y pega ⓑⓤⓑⓑⓛⓔ para nombres, servidores y mensajes.",
      intro:
        "Mete cada letra en un círculo o un cuadrado. Escribe abajo para crear texto burbuja que puedes copiar y pegar en nombres, canales y chats de Discord.",
      featuredLabel: "Estilos burbuja",
      body: (
        <>
          <h2>¿Qué es el texto burbuja?</h2>
          <p>
            El texto burbuja pone cada letra dentro de un círculo, como {fancy("bubble", "bubble")} o{" "}
            {fancy("circled", "Burbuja")}. Unicode incluye estos «caracteres alfanuméricos encerrados» para
            numerar listas y diagramas, y se han vuelto un favorito divertido para los nombres de Discord. A
            diferencia de los emojis, heredan el color de tu texto, así que se integran en el tema del chat.
          </p>
          <h2>Los estilos burbuja</h2>
          <ul>
            <li>
              <strong>Burbuja</strong> usa letras minúsculas en círculos para un aspecto suave y uniforme.
            </li>
            <li>
              <strong>En círculos</strong> mantiene tus mayúsculas, así que los nombres siguen leyéndose
              fácil: {fancy("circled", "Max")}.
            </li>
            <li>
              <strong>Burbuja oscura</strong> rellena cada círculo ({fancy("negative-circled", "bubble")})
              para un efecto intenso y de alto contraste.
            </li>
            <li>
              <strong>En cuadros</strong> y <strong>Cuadros oscuros</strong> cambian los círculos por cajas,
              un aspecto de bloque que va bien con los tags gamer.
            </li>
            <li>
              <strong>Entre paréntesis</strong> pone cada letra entre paréntesis para un aire retro de máquina
              de escribir.
            </li>
          </ul>
          <h2>Notas de compatibilidad</h2>
          <p>
            Las letras y números en círculos normales llevan décadas en Unicode y se ven casi en todas partes.
            Las burbujas oscuras, los cuadrados y las mayúsculas entre paréntesis vienen de un bloque más
            nuevo, así que los Android antiguos, algunas smart TV y consolas pueden mostrar cuadros. Algunas
            apps muestran además las versiones oscuras como emojis de colores, así que pueden verse distintas
            según el dispositivo.
          </p>
          <p>
            Los caracteres en círculos son más anchos que las letras normales, así que un nombre burbuja largo
            puede cortarse en la lista de miembros. Funcionan mejor los nombres cortos, los tags de servidor y
            palabras sueltas como «{fancy("bubble", "gg")}». Para más estilos monos, prueba el{" "}
            {g("aesthetic", "generador de letras estéticas")}, o dale la vuelta a todo con el{" "}
            {g("upside-down", "generador de texto al revés")}.
          </p>
          <h2>Ideas de texto burbuja para Discord</h2>
          <p>
            Las letras burbuja van genial con palabras cortas y contundentes: reacciones como «
            {fancy("bubble", "lol")}» o «{fancy("negative-circled", "GG")}», apodos monos como «
            {fancy("circled", "Mochi")}» o etiquetas para canales de eventos. Los números en círculos también
            son útiles: usa ① ② ③ para numerar normas o pasos en un mensaje, porque quedan alineados y se leen
            de un vistazo. El estilo En cuadros queda genial en tags de juego como «
            {fancy("negative-squared", "AFK")}», pero revisa antes cómo se ve en el móvil, porque algunos
            dispositivos muestran las letras cuadradas como emojis de colores.
          </p>
        </>
      ),
    },
    "upside-down": {
      name: "Generador de texto al revés",
      h1: "Generador de texto al revés para Discord",
      title: "Texto al revés para Discord – Voltea y refleja tu texto",
      description:
        "Pon tu texto boca abajo, en espejo o escrito al revés para Discord. Copia y pega ʇxǝʇ uʍop ǝpᴉsdn en mensajes y apodos.",
      intro:
        "Dale la vuelta a tu texto. Este generador voltea, refleja e invierte tus palabras para que las pegues en Discord en bromas, acertijos y memes.",
      featuredLabel: "Estilos volteados",
      body: (
        <>
          <h2>Cómo funciona el texto al revés</h2>
          <p>
            No existe ningún ajuste de Unicode que gire el texto, así que los generadores buscan, para cada
            letra, un carácter que parezca esa letra girada 180 grados y luego invierten el orden. Algunas
            coincidencias son perfectas (la n se convierte en u y la p en d), y otras se toman del alfabeto
            fonético (ɐ, ǝ, ɹ) o de otras escrituras. El resultado se lee bien si giras el móvil:{" "}
            {fancy("upside-down", "hello discord!")}.
          </p>
          <h2>Al revés, Espejo e Invertido</h2>
          <ul>
            <li>
              <strong>Al revés</strong> voltea las letras en vertical y las invierte, como girar una página.
            </li>
            <li>
              <strong>Espejo</strong> voltea las letras en horizontal, como en un espejo, así que el texto se
              lee de derecha a izquierda.
            </li>
            <li>
              <strong>Invertido</strong> simplemente escribe tu texto al revés sin cambiar las letras. Es el
              más compatible de los tres.
            </li>
          </ul>
          <h2>Formas divertidas de usar texto volteado en Discord</h2>
          <ul>
            <li>Publica respuestas de acertijos o spoilers que cueste un poco leer.</li>
            <li>Reacciona a momentos caóticos del chat con un «¿qué acaba de pasar?» volteado.</li>
            <li>Usa un apodo al revés el día de los Inocentes o para una broma sobre Australia.</li>
            <li>Esconde easter eggs en los temas de los canales y en las descripciones de eventos.</li>
          </ul>
          <h2>Límites a tener en cuenta</h2>
          <p>
            Algunas mayúsculas volteadas usan caracteres raros que los dispositivos antiguos no pueden
            mostrar, así que pruébalo en otro móvil antes de fiarte. La puntuación y los números también se
            voltean, pero algunos no tienen una buena equivalencia y se quedan igual. Además, los nombres al
            revés son muy difíciles de buscar o de mencionar con @, así que van mejor como broma pasajera que
            como identidad permanente.
          </p>
          <p>
            Para un mensaje oculto de verdad, la etiqueta de spoiler de Discord (<code>||texto||</code>) es la
            opción integrada; consulta la{" "}
            <LocalLink locale={L} path="/discord-text-formatting">
              guía de formato de Discord
            </LocalLink>
            , o añade más caos con el {g("glitch", "generador de texto glitch")}.
          </p>
          <h2>Copiar texto volteado en el móvil</h2>
          <p>
            En el móvil, toca el botón Copiar en lugar de seleccionar el texto a mano. El texto al revés se
            escribe de derecha a izquierda, así que arrastrar los controles de selección suele coger la parte
            equivocada o partir un carácter. Después de pegarlo en Discord, léelo una vez con el móvil girado
            para comprobar que dice lo que querías. Si el teclado te sugiere autocorrecciones al pegar,
            ignóralas, porque aceptar una puede cambiar una palabra volteada por una normal.
          </p>
        </>
      ),
    },
  },
};
