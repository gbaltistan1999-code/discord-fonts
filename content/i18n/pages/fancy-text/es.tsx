import { hrefFor } from "@/lib/i18n";
import type { ToolPageContent } from "../../types";
import { FancyStyleTable, LocalLink, StyleGeneratorLinks } from "../shared";

const L = "es";

function Article() {
  return (
    <>
      <h2>Cómo funcionan realmente las letras bonitas</h2>
      <p>Esto es lo que casi ningún generador explica: las letras bonitas no son una fuente.</p>
      <p>
        Apps como Discord e Instagram no te dejan elegir una tipografía. Lo que sí aceptan es cualquier
        carácter de Unicode, el estándar que da a cada letra, símbolo y emoji de cualquier dispositivo su
        propio código. Y resulta que Unicode incluye varios alfabetos completos que imitan a las letras
        normales. En 2001 añadió letras en negrita, cursiva, script, Fraktur (gótica) y de doble trazo para
        que los matemáticos pudieran escribir fórmulas. Las versalitas vienen del alfabeto fonético que usan
        los lingüistas, y las letras anchas de estilo «vaporwave» vienen de los sistemas de escritura japonés
        y chino.
      </p>
      <p>
        Un generador de letras bonitas cambia cada letra normal por su doble. La «A» se convierte en{" "}
        <span className="fancy-text">𝓐</span>, <span className="fancy-text">𝔄</span> o{" "}
        <span className="fancy-text">🅐</span>. Como el resultado está hecho de caracteres reales, conserva su
        aspecto donde lo pegues y todo el mundo ve lo mismo.
      </p>
      <p>
        Eso sí: esos alfabetos solo cubren las letras de la A a la Z y los números. Las letras con tilde, la ñ
        y la ü se quedan en su forma normal, así que escribe sin tildes si quieres un resultado uniforme.
      </p>

      <h2>Qué letras bonitas funcionan mejor (y dónde)</h2>
      <p>
        No todos los estilos son igual de seguros. Algunos se ven en casi cualquier móvil y ordenador; otros
        fallan en dispositivos antiguos. Esta guía rápida se basa en cómo está construido cada estilo:
      </p>
      <FancyStyleTable
        headers={["Estilo", "Ejemplo", "Legibilidad", "Compatibilidad", "Ideal para"]}
        rows={[
          ["Negrita / Negrita sin serifa", "Alta", "Excelente", "Nombres, titulares"],
          ["Script / Script en negrita", "Media", "Excelente", "Nombres visibles, biografías"],
          ["Gótica (Fraktur)", "Media", "Excelente", "Perfiles gamer, nombres de servidor"],
          ["Doble trazo", "Alta", "Excelente", "Nombres limpios y modernos"],
          ["Versalitas", "Alta", "Muy buena", "Biografías, nombres de canales"],
          ["Vaporwave", "Alta", "Muy buena", "Biografías estéticas"],
          ["Burbuja / Círculos", "Media", "Buena", "Nombres divertidos, mensajes"],
          [
            "Cuadrados / Burbuja oscura",
            "Media",
            "Peor en dispositivos antiguos",
            "Palabras cortas, anuncios",
          ],
          ["Glitch / Zalgo", "Baja", "Variable", "Solo bromas y memes"],
        ]}
      />
      <p>
        Nuestro generador marca los estilos más arriesgados con la etiqueta «Compatibilidad limitada», para
        que los veas antes de pegarlos.
      </p>
      <p>
        ¿Quieres un solo estilo? Prueba los generadores específicos:{" "}
        <StyleGeneratorLinks
          locale={L}
          lastSeparator=" y "
          labels={[
            ["cursive", "cursiva"],
            ["gothic", "gótica"],
            ["bold", "negrita"],
            ["small-caps", "versalitas"],
            ["aesthetic", "estética"],
            ["bubble", "burbuja"],
            ["glitch", "glitch"],
            ["upside-down", "al revés"],
          ]}
        />
        .
      </p>

      <h2>Cómo usarlo</h2>
      <ol>
        <li>Escribe o pega tu texto en el cuadro. Todos los estilos se actualizan mientras escribes.</li>
        <li>
          Usa los filtros (Negrita, Cursiva, Gótica, Decorativa, Estética, Glitch) si ya sabes qué estilo
          buscas.
        </li>
        <li>Toca un estilo para copiarlo. Verás la confirmación «¡Copiado!».</li>
        <li>Pégalo en tu app y guarda.</li>
      </ol>
      <p>
        Consejo: antes de quedarte con un nombre, pégalo en un mensaje a un amigo que use otro dispositivo. Si
        lo ve bien, listo.
      </p>

      <h2>Dónde funcionan las letras bonitas y dónde no</h2>
      <p>
        Funcionan casi en cualquier sitio donde puedas escribir: nombres visibles, apodos, biografías, nombres
        de servidor y mensajes de Discord, además de Instagram, TikTok, Roblox, Facebook, YouTube y X. Para
        consejos de cada plataforma, mira las páginas de{" "}
        <LocalLink locale={L} path="/instagram-fonts">
          Instagram
        </LocalLink>
        ,{" "}
        <LocalLink locale={L} path="/tiktok-fonts">
          TikTok
        </LocalLink>
        ,{" "}
        <LocalLink locale={L} path="/roblox-fonts">
          Roblox
        </LocalLink>{" "}
        y{" "}
        <LocalLink locale={L} path="/facebook-fonts">
          Facebook
        </LocalLink>
        .
      </p>
      <p>Normalmente no funcionan en sitios que solo aceptan caracteres básicos:</p>
      <ul>
        <li>
          Nombres de usuario únicos. Tu @nombre de usuario de Discord, por ejemplo, solo admite minúsculas,
          números, guiones bajos y puntos.
        </li>
        <li>Correos electrónicos, contraseñas y direcciones web.</li>
        <li>
          Algunos chats de juegos y foros antiguos, que eliminan o bloquean los caracteres poco comunes.
        </li>
      </ul>

      <h2>Errores que conviene evitar</h2>
      <ul>
        <li>
          Decorar toda la biografía. Una o dos líneas de letras bonitas destacan; un párrafo entero cuesta
          leerlo y queda recargado.
        </li>
        <li>
          Usar estilos raros en tu nombre. Si alguien no puede leer ni escribir tu nombre, no podrá
          mencionarte con @ ni buscarte. Además, los caracteres decorados no suelen coincidir con las
          búsquedas en letras normales.
        </li>
        <li>
          Mezclar demasiadas fuentes. Un estilo y un símbolo casi siempre quedan mejor que tres estilos a la
          vez.
        </li>
        <li>
          Olvidar la accesibilidad. Los lectores de pantalla suelen leer cada letra decorada por su nombre
          técnico, como «mathematical bold capital F», o se la saltan. Deja lo importante, como las normas o
          los datos de contacto, en texto normal.
        </li>
      </ul>
    </>
  );
}

export const fancyTextEs: ToolPageContent = {
  name: "Generador de letras bonitas",
  title: "Generador de letras bonitas – Más de 170 fuentes para copiar",
  description:
    "Convierte tu texto en más de 170 letras bonitas: script, gótica, burbuja, estética y más. Copia con un toque y pega en Discord, Instagram o TikTok.",
  h1: "Generador de letras bonitas",
  intro:
    "Escribe una palabra, un nombre o una frase entera y la verás en más de 170 letras bonitas a la vez. Toca cualquier estilo para copiarlo y pégalo donde quieras: un nombre de Discord, una biografía de Instagram, un texto de TikTok o un chat de grupo. Sin instalar nada, sin cuenta y tu texto nunca sale de tu navegador.",
  sampleText: "Letras bonitas",
  toolLabel: "Generador de letras bonitas",
  faqHeading: "Preguntas frecuentes",
  faqs: [
    {
      question: "¿Qué es un generador de letras bonitas?",
      answer:
        "Es una herramienta que convierte las letras normales en caracteres Unicode parecidos, para que puedas copiar texto con estilo y pegarlo en cualquier sitio que acepte texto.",
    },
    {
      question: "¿Las letras bonitas son lo mismo que cambiar la fuente?",
      answer:
        "No. Cambiar la fuente solo afecta a tu propia pantalla. Las letras bonitas usan caracteres distintos, así que todo el que las ve recibe el mismo estilo sin instalar nada.",
    },
    {
      question: "¿Por qué mis letras se ven como cuadros o signos de interrogación?",
      answer:
        "El dispositivo que las muestra no tiene una fuente con esos caracteres. Pasa sobre todo con los estilos cuadrados, de burbuja oscura y glitch en móviles, televisores y consolas antiguos. Negrita, script y gótica son los más seguros.",
    },
    {
      question: "¿Por qué las letras con tilde no cambian?",
      answer:
        "Los alfabetos estilizados de Unicode solo cubren las letras de la A a la Z y los números. Las letras con tilde, la ñ y la ü no tienen versión decorada, así que se quedan normales.",
    },
    {
      question: "¿Puedo usar letras bonitas en mi nombre de usuario de Discord?",
      answer:
        "No en tu @nombre de usuario. Úsalas en tu nombre visible o en un apodo de servidor, que es lo que la gente ve en el chat. Nuestro generador de nombres para Discord te guía paso a paso.",
      answerContent: (
        <>
          No en tu @nombre de usuario. Úsalas en tu nombre visible o en un apodo de servidor, que es lo que la
          gente ve en el chat. Nuestro{" "}
          <LocalLink locale={L} path="/discord-name-generator">
            generador de nombres para Discord
          </LocalLink>{" "}
          te guía paso a paso.
        </>
      ),
    },
    {
      question: "¿Es seguro usar letras bonitas?",
      answer:
        "Sí. Es solo texto. Los únicos riesgos son prácticos: puede que algunas personas no lo lean bien y algunos sitios bloquean los caracteres poco comunes.",
    },
    {
      question: "¿Este generador es gratis?",
      answer:
        "Sí, totalmente gratis y sin registro, y la conversión se hace en tu navegador, así que tu texto no se envía a ningún sitio.",
    },
  ],
  Article,
  relatedHeading: "Enlaces relacionados",
  related: [
    { href: hrefFor(L, "/"), label: "Generador de letras para Discord" },
    { href: hrefFor(L, "/discord-name-generator"), label: "Generador de nombres para Discord" },
    { href: hrefFor(L, "/discord-text-formatting"), label: "Guía de formato de texto de Discord" },
  ],
};
