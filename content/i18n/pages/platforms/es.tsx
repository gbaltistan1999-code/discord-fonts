import type { PlatformPagesContent } from "../../types";
import { LocalLink } from "../shared";

const L = "es";

export const platformsEs: PlatformPagesContent = {
  breadcrumb: "Letras para {name}",
  toolLabel: "Generador de letras para {name}",
  faqHeading: "Preguntas frecuentes: letras para {name}",
  notAffiliated: "Este sitio no está afiliado a {name} ni cuenta con su respaldo.",
  outro: (
    <p>
      Todos estos estilos también funcionan en Discord. El{" "}
      <LocalLink locale={L} path="/">
        generador de letras para Discord
      </LocalLink>{" "}
      principal tiene consejos específicos para nombres, apodos y la imagen de tu servidor.
    </p>
  ),
  pages: {
    "roblox-fonts": {
      h1: "Generador de letras para Roblox",
      title: "Letras para Roblox – Copia y pega texto chulo para Roblox",
      description:
        "Crea letras chulas para Roblox: descripciones de grupo, títulos de juegos y biografías. Copia y pega texto Unicode y descubre dónde lo acepta Roblox.",
      intro:
        "Escribe abajo para convertir tu texto en letras Unicode para Roblox. Copia cualquier estilo y pruébalo en la descripción de un grupo, la página de un juego o tu biografía.",
      sampleText: "Roblox Builder",
      featuredLabel: "Lo mejor para Roblox",
      faqs: [
        {
          question: "¿Puedo usar letras bonitas en mi nombre de usuario de Roblox?",
          answer:
            "No. Los nombres de usuario de Roblox solo aceptan letras, números y un guion bajo, de 3 a 20 caracteres. Las letras Unicode se rechazan, así que úsalas en las descripciones y en tu sección «Acerca de».",
        },
        {
          question: "¿Por qué Roblox convierte mi texto en almohadillas?",
          answer:
            "Roblox filtra todo el texto, y los caracteres o palabras que su filtro no puede leer suelen sustituirse por almohadillas (#). Los estilos sencillos como Versalitas, Negrita y Espaciado son los que más pasan.",
        },
        {
          question: "¿Qué letras funcionan mejor en Roblox?",
          answer:
            "Los estilos de la pestaña «Lo mejor para Roblox» son los más sencillos y los que mejor sobreviven al filtro. Las decoraciones recargadas, los marcos con emojis y el texto glitch se eliminan con más facilidad.",
        },
        {
          question: "¿Puedo usar estas letras en el chat de Roblox?",
          answer:
            "A veces. El chat pasa por el mismo filtro, así que los estilos de aspecto sencillo tienen más posibilidades. Si un mensaje sale con almohadillas, cambia a un estilo más simple o a texto normal.",
        },
      ],
      body: (
        <>
          <h2>Dónde funcionan las letras en Roblox</h2>
          <p>
            Roblox es más estricto que la mayoría de plataformas. Los nombres de usuario solo permiten letras,
            números y un guion bajo (de 3 a 20 caracteres), y los nombres visibles siguen reglas parecidas,
            así que ahí las letras decoradas suelen rechazarse. Tienen más posibilidades en los textos largos,
            como las descripciones de grupos, las descripciones de juegos y la sección «Acerca de» de tu
            perfil.
          </p>
          <h2>Por qué algunos caracteres se convierten en almohadillas</h2>
          <p>
            Roblox pasa cada texto por su filtro de chat. Los caracteres que no reconoce, o el texto que el
            filtro no puede leer, suelen sustituirse por almohadillas (####) o eliminarse. Los estilos
            sencillos como <strong>Versalitas</strong>, <strong>Negrita</strong> y <strong>Espaciado</strong>{" "}
            suelen sobrevivir mejor que las decoraciones recargadas o el texto glitch. Revisa siempre el texto
            después de guardarlo.
          </p>
          <h2>Consejos para el texto en Roblox</h2>
          <ul>
            <li>Mantén legibles los títulos de grupos y juegos para que los jugadores puedan buscarlos.</li>
            <li>Usa una sola palabra decorada como acento en lugar de dar estilo a un párrafo entero.</li>
            <li>
              Si un estilo se filtra, prueba otro más limpio de la lista en vez de repetir el mismo texto.
            </li>
          </ul>
        </>
      ),
    },
    "instagram-fonts": {
      h1: "Generador de letras para Instagram",
      title: "Letras para Instagram – Copia y pega letras para tu bio",
      description:
        "Letras para tu biografía, nombre, publicaciones y comentarios de Instagram. Copia y pega texto chulo, cursivo y estético que funciona en Instagram.",
      intro:
        "Escribe abajo para convertir tu texto en letras bonitas para Instagram. Copia cualquier estilo en tu biografía, tu nombre, tus publicaciones, historias o comentarios.",
      sampleText: "my aesthetic bio",
      featuredLabel: "Lo mejor para Instagram",
      faqs: [
        {
          question: "¿Cómo cambio la letra de mi biografía de Instagram?",
          answer:
            "Instagram no tiene ajustes de letra para la biografía. Escribe aquí tu texto, copia un estilo y luego abre «Editar perfil» en Instagram y pégalo en el campo Biografía o Nombre.",
        },
        {
          question: "¿Puedo usar letras bonitas en mi nombre de usuario de Instagram?",
          answer:
            "No. Tu @usuario solo admite letras, números, puntos y guiones bajos. Usa las letras en el campo Nombre, que aparece en negrita en tu perfil.",
        },
        {
          question: "¿Funcionan estas letras en publicaciones y comentarios?",
          answer:
            "Sí. El texto con estilo se pega en publicaciones, comentarios y textos de historias. Deja los hashtags en texto normal, porque los hashtags con estilo no enlazan a la etiqueta.",
        },
        {
          question: "¿Por qué algunas letras se ven distintas en iPhone y Android?",
          answer:
            "Cada teléfono dibuja los caracteres Unicode con sus propias fuentes del sistema, así que algunos símbolos cambian un poco o no aparecen en dispositivos antiguos. Los estilos Cursiva, Versalitas y Negrita se ven casi en todas partes.",
        },
      ],
      body: (
        <>
          <h2>Dónde funcionan las letras en Instagram</h2>
          <p>
            El texto Unicode decorado funciona en tu biografía de Instagram, en el campo Nombre de tu perfil,
            en publicaciones, comentarios y textos de historias. La excepción es tu @usuario: solo permite
            letras, números, puntos y guiones bajos, hasta 30 caracteres.
          </p>
          <h2>Aprovecha una biografía de 150 caracteres</h2>
          <p>
            Las biografías de Instagram tienen un límite de 150 caracteres, y los estilos decorados ocupan más
            espacio. Un buen esquema es una línea con estilo para tu nombre o lema, seguida de texto normal
            para enlaces y detalles. Las letras cursivas, las versalitas y estilos estéticos como Marco de
            brillos o Marco de flores son opciones muy populares.
          </p>
          <h2>Letras y visibilidad</h2>
          <p>
            La búsqueda de Instagram lee las letras decoradas como caracteres distintos, así que un nombre con
            estilo puede ser más difícil de encontrar. Deja tu nombre de usuario normal y usa las letras en el
            campo Nombre o en la biografía. En las publicaciones, no des estilo a los hashtags: no enlazarán a
            la etiqueta correcta.
          </p>
        </>
      ),
    },
    "snapchat-fonts": {
      h1: "Generador de letras para Snapchat",
      title: "Letras para Snapchat – Copia y pega texto chulo para Snapchat",
      description:
        "Letras para tu nombre visible, tus chats y los textos de tus snaps. Copia y pega estilos de texto bonitos que se ven en Snapchat.",
      intro:
        "Escribe abajo para convertir tu texto en letras bonitas para Snapchat. Copia cualquier estilo en tu nombre visible, tus chats, textos de snaps o historias.",
      sampleText: "Snap me",
      featuredLabel: "Lo mejor para Snapchat",
      faqs: [
        {
          question: "¿Puedo cambiar la letra de mi nombre visible en Snapchat?",
          answer:
            "Sí. Copia un estilo de esta página, abre tu perfil de Snapchat, toca tu nombre y pégalo. Tu nombre de usuario tiene que seguir siendo letras, números, guiones, guiones bajos y puntos normales.",
        },
        {
          question: "¿Funcionan las letras bonitas en los chats de Snapchat?",
          answer:
            "Sí. El texto con estilo se pega en los chats y en el texto que añades a snaps e historias.",
        },
        {
          question: "¿Qué letras se leen mejor en un snap?",
          answer:
            "Los estilos gruesos y sólidos como Negrita sin serifa, Burbuja y Doble trazo se leen bien sobre las fotos. Los estilos finos o glitch pueden perderse en fondos recargados.",
        },
        {
          question: "¿Un nombre visible con estilo impedirá que mis amigos me encuentren?",
          answer:
            "No. La gente te añade por tu nombre de usuario, tu Snapcode o tus contactos, no por tu nombre visible.",
        },
      ],
      body: (
        <>
          <h2>Dónde funcionan las letras en Snapchat</h2>
          <p>
            Tu nombre visible de Snapchat, los mensajes de chat y el texto que añades a snaps e historias
            admiten letras Unicode decoradas. Tu nombre de usuario no: debe empezar por una letra y solo usar
            letras, números, guiones, guiones bajos y puntos, de 3 a 15 caracteres.
          </p>
          <h2>Elegir un estilo para tus snaps</h2>
          <p>
            Los textos de los snaps van encima de las fotos, así que los estilos gruesos y limpios se leen
            mejor que los finos o glitch. Negrita sin serifa, Doble trazo y Burbuja destacan bien, mientras
            que las versalitas y la cursiva quedan genial en los nombres visibles.
          </p>
          <h2>Consejos</h2>
          <ul>
            <li>
              Tus amigos buscan por nombre de usuario, así que un nombre visible con estilo no te hará más
              difícil de añadir.
            </li>
            <li>Los marcos con emojis como Sakura o Mariposa encajan con el estilo divertido de Snapchat.</li>
            <li>
              Revisa cómo se ve tu texto en el snap antes de enviarlo: algunos teléfonos muestran menos
              símbolos.
            </li>
          </ul>
        </>
      ),
    },
    "youtube-fonts": {
      h1: "Generador de letras para YouTube",
      title: "Letras para YouTube – Copia y pega texto bonito para YouTube",
      description:
        "Letras para nombres de canal, descripciones de vídeos y comentarios de YouTube. Copia y pega texto en negrita, cursiva y decorado para tu canal.",
      intro:
        "Escribe abajo para convertir tu texto en letras bonitas para YouTube. Copia cualquier estilo en comentarios, descripciones, publicaciones de la comunidad o el nombre de tu canal.",
      sampleText: "Watch Now",
      featuredLabel: "Lo mejor para YouTube",
      faqs: [
        {
          question: "¿Puedo usar letras bonitas en los comentarios de YouTube?",
          answer:
            "Sí. Copia un estilo y pégalo en un comentario. Una primera línea en negrita o entre corchetes ayuda a que destaque un comentario fijado.",
        },
        {
          question: "¿Debería usar letras decoradas en los títulos de los vídeos?",
          answer:
            "Con moderación. La búsqueda lee las letras con estilo como caracteres distintos, así que deja tus palabras clave principales en texto normal y da estilo solo a una etiqueta corta.",
        },
        {
          question: "¿Puede el nombre de mi canal usar letras decoradas?",
          answer:
            "Los nombres de canal suelen aceptar Unicode, pero tu @identificador solo admite letras, números, guiones bajos, guiones y puntos.",
        },
        {
          question: "¿Cómo ayudan las letras en las descripciones de los vídeos?",
          answer:
            "Los encabezados con estilo como 𝗖𝗛𝗔𝗣𝗧𝗘𝗥𝗦 o 【 ʟɪɴᴋꜱ 】 hacen que las descripciones largas se lean más rápido. Deja los enlaces y las marcas de tiempo en texto normal para que sigan siendo clicables.",
        },
      ],
      body: (
        <>
          <h2>Dónde funcionan las letras en YouTube</h2>
          <p>
            El texto decorado funciona en comentarios, descripciones de vídeos, publicaciones de la comunidad
            y descripciones del canal, y YouTube suele aceptarlo también en los nombres de canal. Tu
            @identificador se limita a letras, números, guiones bajos, guiones y puntos, así que se queda
            normal.
          </p>
          <h2>Títulos y búsqueda</h2>
          <p>
            Los títulos de los vídeos pueden tener hasta 100 caracteres, pero la búsqueda lee las letras con
            estilo como caracteres distintos. Si quieres que encuentren tu vídeo, deja las palabras clave en
            texto normal y da estilo solo a un pequeño acento, como la etiqueta de un episodio. Las
            descripciones admiten hasta 5000 caracteres, así que encabezados como 𝗖𝗛𝗔𝗣𝗧𝗘𝗥𝗦 o 【 ʟɪɴᴋꜱ 】
            ayudan a recorrerlas.
          </p>
          <h2>Consejos para comentarios</h2>
          <p>
            Una primera línea en negrita o enmarcada ayuda a que destaque un comentario fijado. Evita el texto
            glitch intenso en los comentarios: puede tapar otros comentarios y parecer spam.
          </p>
        </>
      ),
    },
    "twitter-fonts": {
      h1: "Generador de letras para Twitter (X)",
      title: "Letras para Twitter – Copia y pega texto bonito para X",
      description:
        "Letras para tu nombre, tu biografía y tus posts en Twitter (X). Copia y pega letras en negrita, cursiva y chulas que funcionan en X.",
      intro:
        "Escribe abajo para convertir tu texto en letras bonitas para Twitter (X). Copia cualquier estilo en tu nombre, tu biografía, tus posts o tus respuestas.",
      sampleText: "Big news",
      featuredLabel: "Lo mejor para Twitter",
      faqs: [
        {
          question: "¿Cómo escribo en negrita en Twitter (X)?",
          answer:
            "Los posts normales no tienen botón de negrita. Escribe aquí tu texto, copia el estilo Negrita o Negrita sin serifa y pégalo en tu post.",
        },
        {
          question: "¿Puedo usar letras bonitas en mi nombre de X?",
          answer:
            "Sí. Los nombres aceptan Unicode hasta 50 caracteres. Tu @usuario solo admite letras, números y guiones bajos.",
        },
        {
          question: "¿Las letras decoradas cuentan para el límite de caracteres?",
          answer:
            "Sí. Cada letra con estilo cuenta, y algunos estilos decorados usan caracteres de más, así que revisa la longitud antes de publicar.",
        },
        {
          question: "¿Son accesibles las letras decoradas?",
          answer:
            "No siempre. Los lectores de pantalla pueden leer las letras con estilo una por una o saltárselas. Da estilo a una o dos palabras para enfatizar y deja el mensaje principal en texto normal.",
        },
      ],
      body: (
        <>
          <h2>Dónde funcionan las letras en Twitter</h2>
          <p>
            X acepta texto Unicode decorado en tu nombre (hasta 50 caracteres), tu biografía (hasta 160
            caracteres), tus posts y tus respuestas. Tu @usuario solo admite letras, números y guiones bajos,
            hasta 15 caracteres.
          </p>
          <h2>Posts en negrita y cursiva</h2>
          <p>
            Los posts normales no tienen botón de negrita ni de cursiva, así que las letras Negrita, Itálica y
            Negrita sin serifa son una forma habitual de dar énfasis. Cada letra con estilo cuenta para el
            límite de caracteres, y algunos estilos decorados cuentan como más de un carácter.
          </p>
          <h2>Accesibilidad</h2>
          <p>
            Los lectores de pantalla pueden leer las letras con estilo una por una o saltárselas por completo.
            Da estilo a una palabra o una frase corta para enfatizar, y deja lo importante del post en texto
            normal para que todo el mundo pueda leerlo.
          </p>
        </>
      ),
    },
    "facebook-fonts": {
      h1: "Generador de letras para Facebook",
      title: "Letras para Facebook – Copia y pega texto para posts y bio",
      description:
        "Letras para publicaciones, comentarios, biografías y descripciones de páginas de Facebook. Copia y pega texto en negrita, cursiva y decorado.",
      intro:
        "Escribe abajo para convertir tu texto en letras bonitas para Facebook. Copia cualquier estilo en publicaciones, comentarios, tu presentación o la descripción de una página.",
      sampleText: "Happy Birthday",
      featuredLabel: "Lo mejor para Facebook",
      faqs: [
        {
          question: "¿Cómo pongo texto en negrita en una publicación de Facebook?",
          answer:
            "Las publicaciones personales no tienen botones de formato. Copia el estilo Negrita o Negrita sin serifa de esta página y pégalo en tu publicación o comentario.",
        },
        {
          question: "¿Puedo usar letras decoradas en mi nombre de Facebook?",
          answer:
            "Normalmente no. Las normas de nombres de Facebook no permiten símbolos, caracteres poco comunes ni mezclar alfabetos, así que los nombres decorados se rechazan.",
        },
        {
          question: "¿Dónde funcionan las letras en Facebook?",
          answer:
            "En publicaciones, comentarios, Messenger, la presentación de tu perfil y las descripciones de páginas y grupos.",
        },
        {
          question: "¿Qué estilos van bien para publicaciones de celebración?",
          answer:
            "Los marcos como Corazones, Brillos, Alas de estrella y Sakura quedan genial en cumpleaños, aniversarios y anuncios.",
        },
      ],
      body: (
        <>
          <h2>Dónde funcionan las letras en Facebook</h2>
          <p>
            El texto decorado funciona en publicaciones, comentarios, Messenger, la presentación de tu perfil
            y las descripciones de páginas o grupos. Tu nombre de perfil es distinto: las normas de nombres de
            Facebook no permiten símbolos, caracteres poco comunes ni mezclar alfabetos, así que un nombre
            decorado suele rechazarse.
          </p>
          <h2>Dar formato a las publicaciones</h2>
          <p>
            Las publicaciones personales no tienen opción de negrita ni cursiva, así que las letras con estilo
            son una forma fácil de añadir un título o resaltar una línea clave. Negrita sin serifa va muy bien
            para los títulos, y Tachado o Subrayado sirven para marcar cambios en una publicación de ofertas o
            de un evento.
          </p>
          <h2>Consejos</h2>
          <ul>
            <li>Mantén corta la presentación de tu perfil: Facebook la limita a una línea breve.</li>
            <li>
              Usa texto normal para enlaces, precios y fechas para que sigan siendo fáciles de leer y buscar.
            </li>
            <li>Los marcos como Corazones o Brillos quedan bien en cumpleaños y celebraciones.</li>
          </ul>
        </>
      ),
    },
    "tiktok-fonts": {
      h1: "Generador de letras para TikTok",
      title: "Letras para TikTok – Copia y pega letras chulas para tu bio",
      description:
        "Letras para tu nombre, tu biografía, descripciones y comentarios de TikTok. Copia y pega texto estético, cursivo y chulo que funciona en TikTok.",
      intro:
        "Escribe abajo para convertir tu texto en letras bonitas para TikTok. Copia cualquier estilo en tu nombre de perfil, tu biografía, descripciones o comentarios.",
      sampleText: "for you page",
      featuredLabel: "Lo mejor para TikTok",
      faqs: [
        {
          question: "¿Cómo pongo letras bonitas en mi biografía de TikTok?",
          answer:
            "Copia un estilo de esta página, abre «Editar perfil» en TikTok y pégalo en el campo Biografía o Nombre.",
        },
        {
          question: "¿Puedo usar letras bonitas en mi nombre de usuario de TikTok?",
          answer:
            "No. Los nombres de usuario solo admiten letras, números, guiones bajos y puntos. Usa las letras en tu nombre de perfil.",
        },
        {
          question: "¿Cuáles son las mejores letras para una biografía de TikTok?",
          answer:
            "Los estilos compactos como Versalitas, Negrita sin serifa y Kawaii caben en la biografía de 80 caracteres de TikTok. Vaporwave queda bien en cuentas de edits y fans, y los estilos Gótica y Glitch en perfiles oscuros o gamer.",
        },
        {
          question: "¿Las letras decoradas afectan a la búsqueda de TikTok?",
          answer:
            "Sí. La búsqueda lee las letras con estilo como caracteres distintos, así que deja las palabras clave y los hashtags en texto normal.",
        },
      ],
      body: (
        <>
          <h2>Dónde funcionan las letras en TikTok</h2>
          <p>
            El texto Unicode decorado funciona en tu nombre de perfil de TikTok (hasta 30 caracteres), tu
            biografía (hasta 80 caracteres), las descripciones de tus vídeos y los comentarios. Tu @usuario
            solo admite letras, números, guiones bajos y puntos.
          </p>
          <h2>Una biografía de 80 caracteres</h2>
          <p>
            Las biografías de TikTok son cortas, y los estilos decorados usan caracteres de más. Elige un
            estilo compacto como Versalitas, Negrita sin serifa o Kawaii, y reserva los marcos y emojis para
            una sola palabra. Los estilos estéticos como Vaporwave ancha quedan bien en cuentas de edits y
            fans, mientras que Gótica y Glitch encajan en perfiles gamer y de estética oscura.
          </p>
          <h2>Descripciones y búsqueda</h2>
          <p>
            La búsqueda de TikTok lee las letras con estilo como caracteres distintos, así que deja las
            palabras clave y los hashtags en texto normal. Usa las letras para el gancho o una etiqueta corta
            al principio de la descripción.
          </p>
        </>
      ),
    },
    "steam-fonts": {
      h1: "Generador de letras para Steam",
      title: "Letras para Steam – Copia y pega letras chulas para tu nombre",
      description:
        "Letras para tu nombre de perfil, tu resumen y las páginas de grupo de Steam. Copia y pega estilos de texto gamer que funcionan en Steam.",
      intro:
        "Escribe abajo para convertir tu texto en letras bonitas para Steam. Copia cualquier estilo en tu nombre de perfil, tu resumen, tus reseñas o la página de un grupo.",
      sampleText: "Gamer Tag",
      featuredLabel: "Lo mejor para Steam",
      faqs: [
        {
          question: "¿Cómo pongo letras bonitas en mi nombre de Steam?",
          answer:
            "Copia un estilo de esta página, abre «Editar perfil» en Steam y pégalo en Nombre del perfil. Puedes cambiarlo tantas veces como quieras.",
        },
        {
          question: "¿Cuánto puede medir un nombre de perfil de Steam?",
          answer:
            "Hasta 32 caracteres. Los marcos y símbolos cuentan, así que mantén cortos los nombres decorados.",
        },
        {
          question: "¿Por qué mi nombre decorado se ve distinto en los juegos?",
          answer:
            "Algunos juegos muestran tu nombre de Steam con su propia fuente, que puede no incluir todos los símbolos. Los estilos en negrita, góticos y en versalitas son las opciones más seguras.",
        },
        {
          question: "¿Puedo usar letras en el resumen de mi perfil de Steam?",
          answer:
            "Sí. El texto decorado funciona en tu resumen, reseñas, comentarios y páginas de grupo, y los títulos en Negrita sin serifa ayudan a organizar secciones largas.",
        },
      ],
      body: (
        <>
          <h2>Dónde funcionan las letras en Steam</h2>
          <p>
            Steam te deja usar Unicode en tu nombre de perfil, que puede tener hasta 32 caracteres y cambiarse
            cuando quieras. El texto decorado también funciona en el resumen de tu perfil, reseñas,
            comentarios y descripciones de grupos. Tu nombre de cuenta y la URL personalizada de tu perfil se
            quedan normales.
          </p>
          <h2>Ideas de nombres gamer</h2>
          <p>
            Los nombres cortos con un solo estilo fuerte quedan mejor en las listas de amigos y en las salas
            de juego. Gótica en negrita, Tag gamer (亗) y Huesos cruzados (×͜×) son populares entre los
            jugadores competitivos, mientras que Versalitas y Doble trazo dan un aspecto más limpio. Vigila el
            límite de 32 caracteres al añadir marcos.
          </p>
          <h2>Consejos</h2>
          <ul>
            <li>
              Algunos juegos muestran tu nombre de Steam con su propia fuente, que puede no mostrar todos los
              símbolos.
            </li>
            <li>
              Tus amigos te siguen encontrando por la URL de tu perfil o tu código de amigo, aunque tengas un
              nombre decorado.
            </li>
            <li>Usa títulos en Negrita sin serifa para organizar un resumen de perfil o una guía larga.</li>
          </ul>
        </>
      ),
    },
    "xbox-fonts": {
      h1: "Generador de letras para Xbox",
      title: "Letras para Xbox – Copia y pega texto para tu bio y clubes",
      description:
        "Letras para tu biografía, las descripciones de clubes y los mensajes de Xbox. Copia y pega estilos de texto chulos y descubre qué permite un gamertag.",
      intro:
        "Escribe abajo para convertir tu texto en letras bonitas para Xbox. Copia cualquier estilo en tu biografía, las descripciones de tus clubes o tus mensajes.",
      sampleText: "Game On",
      featuredLabel: "Lo mejor para Xbox",
      faqs: [
        {
          question: "¿Puedo usar letras bonitas en mi gamertag de Xbox?",
          answer:
            "No. Los gamertags están limitados a 12 caracteres de letras, números y espacios, así que las letras Unicode decoradas se rechazan.",
        },
        {
          question: "¿Dónde puedo usar letras en Xbox?",
          answer: "En la biografía de tu perfil, las descripciones de clubes y los mensajes.",
        },
        {
          question: "¿Por qué algunos símbolos no se ven en mi consola?",
          answer:
            "Las consolas incluyen menos fuentes que los teléfonos y los ordenadores, así que los símbolos raros pueden salir como cuadros. Los estilos en negrita, script y versalitas son los que mejor se ven.",
        },
        {
          question: "¿Qué estilos van bien para clubes de juego?",
          answer:
            "Gótica en negrita, Tag gamer y Corchetes lenticulares dan títulos de club con fuerza. Usa texto normal para horarios y normas para que los miembros los lean fácilmente.",
        },
      ],
      body: (
        <>
          <h2>¿Se pueden usar letras decoradas en un gamertag de Xbox?</h2>
          <p>
            Normalmente no. Los gamertags de Xbox están limitados a 12 caracteres y admiten letras, números y
            espacios, así que las letras Unicode decoradas se rechazan. Sí funcionan en los textos libres,
            como la biografía de tu perfil, las descripciones de clubes y los mensajes.
          </p>
          <h2>Dar estilo a tu biografía y tus clubes</h2>
          <p>
            Un titular corto con estilo al principio de tu biografía hace que tu perfil destaque; después,
            texto normal para tus juegos principales o tu horario. Para los clubes, una línea de título en
            negrita o gótica y unos cuantos separadores decorados dan a la página una identidad clara.
          </p>
          <h2>Consejos</h2>
          <ul>
            <li>
              Las consolas pueden no mostrar todos los símbolos: quédate con estilos en negrita, script y
              versalitas.
            </li>
            <li>Mantén tu gamertag normal para que tus amigos puedan encontrarte e invitarte fácilmente.</li>
            <li>Usa el mismo estilo en tu biografía y tu club para tener una imagen coherente.</li>
          </ul>
        </>
      ),
    },
  },
};
