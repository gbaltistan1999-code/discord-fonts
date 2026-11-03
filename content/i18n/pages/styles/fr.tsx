import { fancy } from "../../home/shared";
import type { StylePagesContent } from "../../types";
import { LocalLink } from "../shared";

const L = "fr";
const g = (slug: string, label: string) => (
  <LocalLink locale={L} path={`/discord-font-generator/${slug}`}>
    {label}
  </LocalLink>
);

export const stylesFr: StylePagesContent = {
  toolLabel: "{name}",
  moreHeading: "Autres générateurs de polices Discord",
  outro: (
    <p>
      Envie de plus d’options ? Le{" "}
      <LocalLink locale={L} path="/">
        générateur de polices Discord
      </LocalLink>{" "}
      principal affiche tous les styles d’un coup : gras, cursive, gothique, glitch et le reste.
    </p>
  ),
  pages: {
    bold: {
      name: "Générateur de police grasse",
      h1: "Générateur de police grasse pour Discord",
      title: "Police grasse Discord – Texte en gras à copier-coller",
      description:
        "Écrivez en gras dans vos pseudos, surnoms et noms de serveur Discord. Tapez une fois, copiez le gras de votre choix (avec ou sans empattement, italique) et collez.",
      intro:
        "Tapez ci-dessous pour transformer votre texte en lettres Unicode grasses qui restent en gras partout où vous les collez, y compris dans les noms d’affichage et pseudos Discord où le markdown ne marche pas.",
      featuredLabel: "Styles gras",
      body: (
        <>
          <h2>Pourquoi utiliser une police grasse sur Discord ?</h2>
          <p>
            Dans un message Discord, vous mettez du texte en gras en l’entourant de deux astérisques, comme{" "}
            <code>**ceci**</code>. Mais ce markdown est ignoré dans les noms : un nom d’affichage ou de salon
            en gras demande une autre méthode. Ce générateur remplace chaque lettre par sa jumelle en gras du
            bloc « Mathematical Alphanumeric Symbols » d’Unicode. Le résultat, comme{" "}
            {fancy("bold-serif", "Gamer")} ou {fancy("bold-sans", "Gamer")}, est du vrai texte qui garde son
            épaisseur dans tout champ acceptant l’Unicode.
          </p>
          <h2>Quel style de gras choisir ?</h2>
          <ul>
            <li>
              <strong>Bold (avec empattement)</strong> a des lettres classiques de livre, avec de petits
              pieds. Il va bien aux noms de serveur sérieux et aux personnages de RP.
            </li>
            <li>
              <strong>Bold Sans</strong> est net et moderne, le choix le plus lisible pour les pseudos gaming
              et les titres de salon.
            </li>
            <li>
              <strong>Bold Italic</strong> et <strong>Sans Bold Italic</strong> ajoutent du mouvement, idéal
              pour les salons hype et les tags d’équipes esport.
            </li>
            <li>
              <strong>Bold Script</strong> et <strong>Bold Gothic</strong> marient épaisseur et caractère
              quand le gras simple paraît trop sage.
            </li>
          </ul>
          <h2>Conseils pour les pseudos en gras</h2>
          <p>
            Les lettres grasses font partie des caractères stylés les mieux pris en charge : elles s’affichent
            correctement sur les versions récentes de Windows, Mac, iPhone et Android. Bold et Bold Sans
            incluent aussi les chiffres, parfait pour des tags de clan comme {fancy("bold-serif", "Team 7")}.
            N’oubliez pas que noms d’affichage et pseudos sont limités à 32 caractères ; le compteur sous la
            zone de texte vous indique où vous en êtes.
          </p>
          <p>
            Attention : quelqu’un qui cherche « Gamer » dans la liste des membres ne trouvera pas «{" "}
            {fancy("bold-serif", "Gamer")} », car ce sont des caractères différents. Pour qu’on vous mentionne
            facilement avec @, gardez une partie du nom en texte normal ou ne mettez qu’un mot en gras. Pour
            le gras dans les messages, le markdown classique est souvent plus adapté ; voyez le{" "}
            <LocalLink locale={L} path="/discord-text-formatting">
              guide de mise en forme du texte Discord
            </LocalLink>
            .
          </p>
          <h2>Idées de pseudos en gras</h2>
          <p>
            Le gras marche mieux quand il met quelque chose en avant. Mettez seulement votre nom principal en
            gras et laissez le tag normal, comme « {fancy("bold-sans", "Nova")} | FPS », ou utilisez des
            chiffres gras pour un numéro d’équipe comme « {fancy("bold-serif", "Squad 7")} ». Les
            propriétaires de serveurs mettent souvent les catégories de la liste des salons en gras, par
            exemple « {fancy("bold-sans", "SALONS VOCAUX")} », pour les détacher des salons en dessous. Bold
            Italic est très apprécié des streamers et créateurs, car il a de l’énergie dans le chat sans être
            difficile à lire.
          </p>
        </>
      ),
    },
    cursive: {
      name: "Générateur de police cursive",
      h1: "Générateur de police cursive pour Discord",
      title: "Police cursive Discord – Texte cursif à copier-coller",
      description:
        "Transformez votre pseudo en élégante écriture cursive pour Discord. Lettres script, script grasses et italiques à copier-coller dans vos pseudos, bios et serveurs.",
      intro:
        "Écrivez votre texte une fois et obtenez des lettres script, script grasses et italiques prêtes à copier dans votre nom d’affichage, votre « À propos de moi » ou le nom de votre serveur.",
      featuredLabel: "Styles cursifs",
      body: (
        <>
          <h2>Qu’est-ce qu’une police cursive pour Discord ?</h2>
          <p>
            Le texte cursif ou script, comme {fancy("script", "Starlight")} ou{" "}
            {fancy("bold-script", "Starlight")}, vient des alphabets script d’Unicode. Créés pour la notation
            mathématique, leur air manuscrit en a fait l’une des façons les plus populaires de décorer un
            pseudo Discord. Comme ce sont des caractères et non de la mise en forme, les boucles survivent là
            où l’italique markdown ne va pas, comme les pseudos et les noms de salons.
          </p>
          <h2>Script, Bold Script et Italic</h2>
          <p>
            <strong>Script Cursive</strong> est légère et élégante, parfaite pour les profils aesthetic, les
            serveurs artistiques et les thèmes doux. Quelques majuscules (B, E, F, H, I, L, M et R) et les
            minuscules e, g et o viennent d’un bloc Unicode plus ancien, elles peuvent donc paraître un peu
            différentes de leurs voisines selon la police.
          </p>
          <p>
            <strong>Bold Script</strong> utilise un seul jeu de traits plus épais : elle se lit mieux en petit
            et rend généralement mieux dans la liste des membres. Si vous ne choisissez qu’une police cursive
            pour un pseudo, prenez celle-ci.
          </p>
          <p>
            <strong>Italic</strong> et <strong>Sans Italic</strong> sont penchées plutôt que liées, une option
            discrète quand la script complète fait trop.
          </p>
          <h2>Où le texte cursif rend le mieux</h2>
          <ul>
            <li>Les noms d’affichage d’artistes, d’auteurs et de personnages de RP.</li>
            <li>Les bios « À propos de moi », surtout avec des décorations comme Ornate ou Sparkles.</li>
            <li>Les noms de serveurs chaleureux, créatifs ou communautaires.</li>
            <li>Les titres des salons d’accueil et de règles, avec une description en texte simple.</li>
          </ul>
          <p>
            Les lettres script sont fines : elles peuvent être difficiles à lire sur un petit écran de
            téléphone ou en mode sombre avec peu de luminosité. Regardez le rendu dans la liste des résultats
            avant de vous décider, et gardez un nom court. Pour un style doux mais lisible, essayez plutôt le{" "}
            {g("small-caps", "générateur de petites capitales")}.
          </p>
          <h2>Idées de pseudos en cursive</h2>
          <p>
            Les noms courts sont les plus beaux en script. Un seul mot comme « {fancy("bold-script", "Luna")}{" "}
            » ou « {fancy("script", "Velvet")} » se lit très bien, alors qu’une longue phrase devient vite un
            nœud de boucles. Beaucoup associent un pseudo cursif à un symbole simple, par exemple « ༺{" "}
            {fancy("bold-script", "Rose")} ༻ », ou n’utilisent la script que pour la première lettre. Si votre
            serveur a un thème doux ou créatif, un nom de serveur en cursive avec des noms de salons simples
            crée l’ambiance sans nuire à la lisibilité.
          </p>
        </>
      ),
    },
    gothic: {
      name: "Générateur de police gothique",
      h1: "Générateur de police gothique pour Discord",
      title: "Police gothique Discord – Texte Fraktur à l’ancienne",
      description:
        "Créez du texte gothique pour Discord en Fraktur et en gothique gras. Copiez-collez des lettres à l’ancienne pour vos noms de serveur, rôles et pseudos.",
      intro:
        "Transformez un texte normal en écriture gothique spectaculaire. Ces polices utilisent des caractères Fraktur qui rappellent l’écriture médiévale et se collent partout sur Discord.",
      featuredLabel: "Styles gothiques",
      body: (
        <>
          <h2>Fraktur : la police gothique de Discord</h2>
          <p>
            Le texte gothique comme {fancy("fraktur", "Dark Knight")} ou{" "}
            {fancy("bold-fraktur", "Dark Knight")} utilise les lettres Fraktur d’Unicode, un style tiré de
            l’écriture gothique longtemps utilisée dans l’imprimerie allemande. Il rappelle les vieux
            manuscrits, les titres de journaux et les dessins de tatouage.
          </p>
          <h2>Les styles gothiques de ce générateur</h2>
          <ul>
            <li>
              <strong>Gothic Fraktur</strong> est l’écriture gothique classique, plus légère. Élégante, mais
              difficile à lire en petit.
            </li>
            <li>
              <strong>Bold Gothic</strong> est plus épaisse et bien plus lisible dans la liste des membres ;
              c’est le meilleur choix pour un nom d’affichage gothique.
            </li>
            <li>
              <strong>Gothic Cross</strong>, <strong>Crowned</strong>, <strong>Royal Frame</strong> et{" "}
              <strong>Crossed Swords</strong> entourent les lettres de symboles pour un air médiéval ou de
              clan.
            </li>
            <li>
              <strong>Runic Style</strong> emprunte des lettres ressemblantes au syllabaire cherokee pour un
              rendu ancien, comme gravé.
            </li>
          </ul>
          <h2>Idées de texte gothique sur Discord</h2>
          <p>
            Les polices gothiques conviennent aux communautés horreur, fantasy, metal et RP. Elles font de
            superbes noms de serveur, rôles du staff et en-têtes de catégorie. Un seul mot gothique suffit à
            donner le ton, comme « {fancy("bold-fraktur", "The Crypt")} » pour un salon vocal, tandis que le
            reste du serveur reste lisible.
          </p>
          <p>
            Notez que le Fraktur n’a pas de chiffres : ils restent normaux. Quelques majuscules (C, H, I, R et
            Z) du style léger viennent d’un autre bloc Unicode et peuvent paraître un peu différentes sur
            certains appareils. Pour encore plus de caractère, associez Bold Gothic au{" "}
            {g("glitch", "générateur de texte glitch")} pour un effet maudit, ou restez sobre avec le{" "}
            {g("bold", "générateur de police grasse")}.
          </p>
          <h2>Idées de noms de serveur et de rôles</h2>
          <p>
            L’écriture gothique brille dans les titres. Des noms de serveur comme «{" "}
            {fancy("bold-fraktur", "Shadow Realm")} » ou « ꧁༒☬ {fancy("bold-fraktur", "Nightfall")} ☬༒꧂ »
            annoncent tout de suite un thème sombre ou médiéval. Les rôles s’y prêtent aussi, car ils
            apparaissent dans la liste des membres et sur les profils : « {fancy("bold-fraktur", "Overlord")}{" "}
            », « ♛ {fancy("bold-fraktur", "Royal Guard")} ♛ » ou « {fancy("fraktur", "Knight")} » sont
            parfaits pour les serveurs de RP et de guilde. Limitez le gothique à un ou deux mots : les longues
            phrases dans cette écriture fatiguent et beaucoup les sautent.
          </p>
        </>
      ),
    },
    "small-caps": {
      name: "Générateur de petites capitales",
      h1: "Générateur de petites capitales pour Discord",
      title: "Petites capitales Discord – Petit texte à copier-coller",
      description:
        "Créez des petites capitales et du petit texte pour Discord. Copiez-collez ᴛɪɴʏ ᴄᴀᴘꜱ, exposants et indices pour des pseudos, bios et salons minimalistes.",
      intro:
        "Obtenez des petites capitales et du petit texte nets et minimalistes pour votre profil Discord. Tapez vos mots et copiez la version qui vous ressemble.",
      featuredLabel: "Styles petites capitales",
      body: (
        <>
          <h2>Que sont les petites capitales ?</h2>
          <p>
            Les petites capitales sont des majuscules dessinées à la hauteur des minuscules. Sur Discord,
            elles donnent aux noms un air calme et minimaliste : {fancy("small-caps-all", "midnight")} au lieu
            de Midnight. Unicode n’a jamais eu d’alphabet complet de petites capitales, alors les générateurs
            rassemblent des caractères ressemblants de l’alphabet phonétique. La plupart correspondent
            parfaitement ; le q et le x n’ont pas de vraie petite capitale, on utilise donc les caractères
            lisibles les plus proches.
          </p>
          <h2>Small Caps ou Tiny Caps</h2>
          <p>
            <strong>Small Caps</strong> garde vos majuscules en grand et réduit le reste, ce qui se lit
            naturellement pour un nom : {fancy("small-caps", "Midnight")}. <strong>Tiny Caps</strong> réduit
            tout pour un rendu uniforme et discret : {fancy("small-caps-all", "Midnight")}. Les deux
            fonctionnent bien sur les téléphones et ordinateurs récents, ce qui en fait l’un des styles les
            plus sûrs pour un nom d’affichage.
          </p>
          <h2>Exposants et indices</h2>
          <p>
            L’<strong>exposant</strong> place les lettres au-dessus de la ligne (
            {fancy("superscript", "tiny")}) et l’
            <strong>indice</strong> en dessous. C’est amusant pour des chuchotements, des notes ou des bios
            mignonnes, mais Unicode n’inclut que certaines lettres : pas de q en exposant, et il manque
            environ un tiers de l’alphabet en indice. Ces lettres restent normales, alors vérifiez le résultat
            avant de l’utiliser.
          </p>
          <h2>Les meilleurs usages des petites capitales sur Discord</h2>
          <ul>
            <li>
              Des noms de salons comme ︱{fancy("small-caps-all", "rules")} ou ︱
              {fancy("small-caps-all", "news")} pour une barre latérale nette et homogène.
            </li>
            <li>Des noms d’affichage stylés sans être difficiles à lire.</li>
            <li>
              Des noms de rôles, où de courtes étiquettes comme {fancy("small-caps-all", "moderator")} restent
              nettes dans la liste des membres.
            </li>
            <li>Des bios aesthetic avec les décorations Corner Brackets ou Hearts.</li>
          </ul>
          <p>
            Comme les petites capitales font partie de l’alphabet phonétique, les lecteurs d’écran peuvent les
            lire bizarrement : gardez les infos importantes en texte normal. Pour d’autres styles doux,
            parcourez le {g("aesthetic", "générateur de polices aesthetic")}.
          </p>
          <h2>Des petites capitales pour un serveur bien rangé</h2>
          <p>
            Les créateurs de serveurs adorent les petites capitales parce que tous les noms de salons ont la
            même hauteur. Un modèle courant : un emoji, un fin séparateur et une étiquette en petites
            capitales, comme « 💬︱
            {fancy("small-caps-all", "general")} » ou « 🎮︱{fancy("small-caps-all", "game night")} ». Discord
            affiche les noms de salons en minuscules avec des tirets, mais les petites capitales restent
            intactes, et c’est en partie leur charme. Choisissez un style de séparateur et utilisez-le partout
            pour une liste qui paraît réfléchie plutôt qu’aléatoire.
          </p>
        </>
      ),
    },
    aesthetic: {
      name: "Générateur de polices aesthetic",
      h1: "Générateur de polices aesthetic pour Discord",
      title: "Polices aesthetic Discord – Texte vaporwave et mignon",
      description:
        "Polices aesthetic pour vos bios et pseudos Discord : vaporwave, petites capitales, kawaii et paillettes. Copiez-collez du texte mignon en un clic.",
      intro:
        "Trouvez des styles de texte doux, mignons et vaporwave pour votre profil Discord. Tapez vos mots, puis copiez une police aesthetic en un clic.",
      featuredLabel: "Styles aesthetic",
      body: (
        <>
          <h2>Qu’est-ce qui rend une police « aesthetic » ?</h2>
          <p>
            Sur Discord, « aesthetic » désigne souvent un texte doux, aéré et décoré qui colle à une ambiance
            : pastel, vaporwave, cottagecore ou lo-fi. C’est moins une question d’alphabet que de mélange de
            styles, d’espaces et de petits symboles pour que votre bio paraisse soignée.
          </p>
          <h2>Styles aesthetic populaires</h2>
          <ul>
            <li>
              <strong>Vaporwave Fullwidth</strong> ({fancy("fullwidth", "aesthetic")}) utilise les lettres
              larges des polices d’Asie de l’Est pour ce look rétro des années 80 et 90.{" "}
              <strong>Vaporwave Spaced</strong> ajoute encore plus d’air.
            </li>
            <li>
              <strong>Small Caps</strong> et <strong>Tiny Caps</strong> apportent un côté calme et minimaliste
              qui va avec presque tous les thèmes.
            </li>
            <li>
              <strong>Kawaii</strong>, <strong>Sparkles</strong>, <strong>Flower Ribbon</strong>,{" "}
              <strong>Hearts</strong> et <strong>Sakura</strong> entourent votre texte de symboles et d’emojis
              mignons.
            </li>
            <li>
              <strong>Double-Struck</strong>, <strong>Monospace</strong> et <strong>Wide Spaced</strong> sont
              des options nettes pour un profil tech ou minimaliste.
            </li>
          </ul>
          <h2>Créer un profil Discord aesthetic</h2>
          <p>
            Choisissez un ou deux styles et tenez-vous-y. Par exemple, un nom d’affichage en Tiny Caps, un
            titre en Flower Ribbon en haut de votre « À propos de moi » et du texte simple pour le reste. Trop
            de styles à la fois font désordre et se lisent mal. Votre bio est limitée à 190 caractères, et
            décorations et espaces les consomment vite : surveillez la longueur au fur et à mesure.
          </p>
          <p>
            Les lettres larges prennent deux fois plus de place que les normales : un long pseudo vaporwave
            peut passer à la ligne ou être coupé dans la liste des membres. Les cadres en emoji s’affichent en
            couleur sur la plupart des appareils, mais leur rendu exact dépend du jeu d’emojis de chaque
            plateforme. Pour des lettres plus rondes, essayez le {g("bubble", "générateur de texte bulle")},
            ou faites plus petit avec le {g("small-caps", "générateur de petites capitales")}.
          </p>
          <h2>Un modèle simple de bio aesthetic</h2>
          <p>
            Vous ne savez pas par où commencer ? Un titre décoré, deux ou trois courtes lignes en texte simple
            et un symbole de fin. Par exemple : « ⋆˚｡⋆୨୧˚ {fancy("italic", "dreamer")} ˚୨୧⋆｡˚⋆ », puis vos
            pronoms, votre fuseau horaire et vos jeux préférés en texte simple, et un « ✧ » pour finir. La
            ligne décorée donne du caractère et les lignes simples restent lisibles pour tous, y compris avec
            un lecteur d’écran. Changez de titre quand votre humeur change ; le reste peut rester tel quel.
          </p>
        </>
      ),
    },
    glitch: {
      name: "Générateur de texte glitch",
      h1: "Générateur de texte glitch pour Discord",
      title: "Texte glitch Discord – Zalgo et écriture qui fait peur",
      description:
        "Créez du texte glitch et zalgo pour Discord avec une intensité réglable. Copiez-collez des lettres corrompues, barrées et rayées qui font peur.",
      intro:
        "Corrompez votre texte avec des signes zalgo, des barres et des traits. Réglez l’intensité du glitch, puis copiez le résultat inquiétant directement dans Discord.",
      featuredLabel: "Styles glitch",
      body: (
        <>
          <h2>Comment fonctionne le texte glitch</h2>
          <p>
            Le texte glitch repose sur des caractères combinants : des signes invisibles qui s’attachent à la
            lettre précédente, comme les accents. Normalement une lettre porte un accent au maximum, mais rien
            n’empêche d’en empiler des dizaines. Entassez-les au-dessus, à travers et en dessous de chaque
            lettre et vous obtenez l’effet « zalgo », haut et corrompu, qui déborde sur les lignes voisines.
          </p>
          <h2>Styles glitch à copier</h2>
          <ul>
            <li>
              <strong>Zalgo Glitch</strong> : réglez l’intensité de 1 (léger scintillement) à 10 (chaos
              total). Le résultat est toujours généré de la même façon, vous pouvez donc revenir chercher le
              même.
            </li>
            <li>
              <strong>Strikethrough</strong>, <strong>Slashed</strong>, <strong>Overline</strong>,{" "}
              <strong>Wavy</strong> et <strong>Dotted</strong> ajoutent un seul signe par lettre pour un effet
              abîmé plus subtil.
            </li>
            <li>
              <strong>Upside Down</strong>, <strong>Mirrored</strong> et <strong>Reversed</strong> retournent
              votre texte pour des messages déroutants, parfaits pour les mèmes.
            </li>
          </ul>
          <h2>Utiliser le zalgo de façon responsable</h2>
          <p>
            Un zalgo très chargé peut recouvrir les messages des autres, c’est pourquoi beaucoup de serveurs
            l’interdisent et les règles d’AutoMod le filtrent souvent. Dans un nom d’affichage, il peut aussi
            empêcher qu’on vous mentionne avec @ ou qu’on vous lise dans la liste des membres. Une intensité
            faible, de 1 à 3, suffit en général pour un pseudo inquiétant ou un salon d’événement Halloween,
            et risque moins d’être supprimée.
          </p>
          <p>
            Chaque système dessine les caractères combinants à sa façon : le même texte glitch peut être
            propre sur ordinateur et brouillon sur téléphone. Vérifiez le rendu et testez d’abord dans un
            salon privé. Envie de sombre mais lisible ? Essayez le{" "}
            {g("gothic", "générateur de police gothique")}. Pour du texte simplement barré dans les messages,
            le markdown <code>~~barré~~</code> de Discord est plus propre ; voyez notre{" "}
            <LocalLink locale={L} path="/discord-text-formatting">
              guide de mise en forme
            </LocalLink>
            .
          </p>
          <h2>Idées de texte glitch</h2>
          <p>
            Les styles glitch sont parfaits pour les événements d’horreur, les serveurs de mystère et d’ARG,
            et les personnages de bots « corrompus ». Un nom de salon avec un léger zalgo installe une
            ambiance étrange sans envahir la liste des salons. Le texte barré sert aux fausses corrections
            comme « {fancy("strikethrough", "devoirs")} gaming ». Pour une annonce, associez un mot glitché à
            du texte normal, par exemple « le {fancy("slashed", "signal")} est de retour », pour que le
            message reste compréhensible d’un coup d’œil.
          </p>
        </>
      ),
    },
    bubble: {
      name: "Générateur de texte bulle",
      h1: "Générateur de texte bulle pour Discord",
      title: "Texte bulle Discord – Lettres dans des cercles",
      description:
        "Créez du texte bulle pour Discord avec des lettres entourées, des bulles sombres et des carrés. Copiez-collez ⓑⓤⓑⓑⓛⓔ pour vos pseudos, serveurs et messages.",
      intro:
        "Mettez chaque lettre dans un cercle ou un carré. Tapez ci-dessous pour créer du texte bulle à copier-coller dans vos pseudos, salons et discussions Discord.",
      featuredLabel: "Styles bulle",
      body: (
        <>
          <h2>Qu’est-ce que le texte bulle ?</h2>
          <p>
            Le texte bulle place chaque lettre dans un cercle, comme {fancy("bubble", "bubble")} ou{" "}
            {fancy("circled", "Bubble")}. Unicode inclut ces « caractères alphanumériques cerclés » pour
            numéroter des listes et des schémas, et ils sont devenus un favori ludique pour les pseudos
            Discord. Contrairement aux emojis, ils prennent la couleur de votre texte et se fondent dans le
            thème du chat.
          </p>
          <h2>Les styles bulle expliqués</h2>
          <ul>
            <li>
              <strong>Bubble</strong> utilise des minuscules cerclées pour un rendu doux et uniforme.
            </li>
            <li>
              <strong>Circled</strong> garde vos majuscules, pour des noms toujours faciles à lire :{" "}
              {fancy("circled", "Max")}.
            </li>
            <li>
              <strong>Bubble Dark</strong> remplit chaque cercle ({fancy("negative-circled", "bubble")}) pour
              un effet fort et contrasté.
            </li>
            <li>
              <strong>Squared</strong> et <strong>Squared Dark</strong> remplacent les cercles par des carrés,
              un look en blocs qui va bien aux tags gaming.
            </li>
            <li>
              <strong>Parenthesized</strong> met chaque lettre entre parenthèses pour un côté rétro, façon
              machine à écrire.
            </li>
          </ul>
          <h2>Compatibilité</h2>
          <p>
            Les lettres et chiffres cerclés classiques sont dans Unicode depuis des décennies et s’affichent
            presque partout. Les bulles sombres, les carrés et les majuscules entre parenthèses viennent d’un
            bloc plus récent : les vieux Android, certaines TV connectées et consoles peuvent afficher des
            carrés vides. Certaines applis affichent aussi les versions sombres comme des emojis colorés, d’où
            des différences d’un appareil à l’autre.
          </p>
          <p>
            Les caractères cerclés sont plus larges que les lettres normales : un long pseudo en bulles peut
            être coupé dans la liste des membres. Les noms courts, les tags de serveur et les mots seuls comme
            « {fancy("bubble", "gg")} » marchent le mieux. Pour d’autres styles mignons, essayez le{" "}
            {g("aesthetic", "générateur de polices aesthetic")}, ou retournez tout avec le{" "}
            {g("upside-down", "générateur de texte à l’envers")}.
          </p>
          <h2>Idées de texte bulle pour Discord</h2>
          <p>
            Les lettres bulle sont parfaites pour des mots courts et percutants : des réactions comme «{" "}
            {fancy("bubble", "lol")} » ou « {fancy("negative-circled", "GG")} », des pseudos mignons comme «{" "}
            {fancy("circled", "Mochi")} » ou des étiquettes de salons d’événement. Les chiffres cerclés sont
            pratiques aussi : utilisez ① ② ③ pour numéroter des règles ou des étapes, ils restent bien alignés
            et se lisent d’un coup d’œil. Le style Squared rend très bien pour des tags de jeu comme «{" "}
            {fancy("negative-squared", "AFK")} », mais vérifiez d’abord sur votre téléphone, car certains
            appareils affichent les lettres carrées comme des emojis colorés.
          </p>
        </>
      ),
    },
    "upside-down": {
      name: "Générateur de texte à l’envers",
      h1: "Générateur de texte à l’envers pour Discord",
      title: "Texte à l’envers Discord – Retourner et inverser le texte",
      description:
        "Retournez votre texte, mettez-le en miroir ou écrivez-le à l’envers pour Discord. Copiez-collez ʇxǝʇ uʍop ǝpᴉsdn dans vos messages et pseudos.",
      intro:
        "Mettez votre texte la tête en bas. Ce générateur retourne, inverse et met en miroir vos mots pour les coller sur Discord en blague, en devinette ou en mème.",
      featuredLabel: "Styles retournés",
      body: (
        <>
          <h2>Comment fonctionne le texte à l’envers</h2>
          <p>
            Aucun réglage Unicode ne fait pivoter le texte : les générateurs cherchent, pour chaque lettre, un
            caractère qui ressemble à cette lettre tournée de 180 degrés, puis inversent l’ordre. Certaines
            correspondances sont parfaites (n devient u, p devient d), d’autres viennent de l’alphabet
            phonétique (ɐ, ǝ, ɹ) ou d’autres écritures. Le résultat se lit correctement quand on retourne le
            téléphone : {fancy("upside-down", "hello discord!")}.
          </p>
          <h2>Upside Down, Mirrored et Reversed</h2>
          <ul>
            <li>
              <strong>Upside Down</strong> retourne les lettres verticalement et les inverse, comme une page
              qu’on tourne.
            </li>
            <li>
              <strong>Mirrored</strong> retourne les lettres horizontalement, comme dans un miroir : le texte
              se lit de droite à gauche.
            </li>
            <li>
              <strong>Reversed</strong> écrit simplement votre texte à rebours, sans changer les lettres.
              C’est le plus compatible des trois.
            </li>
          </ul>
          <h2>Des usages amusants du texte retourné sur Discord</h2>
          <ul>
            <li>Postez des réponses de devinettes ou des spoilers qu’il faut un peu d’effort pour lire.</li>
            <li>
              Réagissez aux moments chaotiques du chat avec un « qu’est-ce qui vient de se passer » retourné.
            </li>
            <li>Prenez un pseudo à l’envers pour le 1er avril ou une blague sur l’Australie.</li>
            <li>Cachez des easter eggs dans les sujets des salons et les descriptions d’événements.</li>
          </ul>
          <h2>Les limites à connaître</h2>
          <p>
            Quelques majuscules retournées utilisent des caractères rares que les vieux appareils ne savent
            pas afficher : testez sur un autre téléphone avant de compter dessus. La ponctuation et les
            chiffres sont retournés aussi, mais certains n’ont pas de bon équivalent et restent tels quels.
            Les pseudos retournés sont en outre très difficiles à chercher ou à mentionner avec @ : mieux vaut
            une blague passagère qu’une identité permanente.
          </p>
          <p>
            Pour un message vraiment caché, la balise spoiler de Discord (<code>||texte||</code>) est l’option
            intégrée ; voyez le{" "}
            <LocalLink locale={L} path="/discord-text-formatting">
              guide de mise en forme Discord
            </LocalLink>
            , ou ajoutez du chaos avec le {g("glitch", "générateur de texte glitch")}.
          </p>
          <h2>Copier du texte retourné sur mobile</h2>
          <p>
            Sur téléphone, touchez le bouton Copier au lieu de sélectionner le texte à la main. Le texte à
            l’envers s’écrit de droite à gauche : faire glisser les poignées de sélection attrape souvent la
            mauvaise partie ou coupe un caractère en deux. Après avoir collé dans Discord, relisez une fois
            téléphone retourné pour vérifier. Si votre clavier propose des corrections après le collage,
            ignorez-les : en accepter une peut remplacer un mot retourné par un mot normal.
          </p>
        </>
      ),
    },
  },
};
