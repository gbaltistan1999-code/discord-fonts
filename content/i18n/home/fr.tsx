import Link from "next/link";
import type { HomeContent } from "../types";
import { ExamplesFigure, fancy, inlineLink, styleLink } from "./shared";

function Article() {
  return (
    <div className="prose-content">
      <h2 id="que-sont-les-polices-discord">Que sont les polices Discord et comment fonctionnent-elles ?</h2>
      <p>
        Les polices Discord ne sont pas de vraies polices. Discord ne permet pas de choisir une typographie
        pour votre pseudo ou vos messages, alors un générateur utilise une astuce : il remplace chaque lettre
        normale par un caractère ressemblant tiré d’<strong>Unicode</strong>, la norme mondiale qui attribue
        un numéro à chaque caractère sur tous les appareils. Unicode contient des alphabets complets créés
        pour les mathématiques, les sciences et d’autres écritures, comme des lettres{" "}
        {fancy("bold-serif", "grasses")}, {fancy("script", "cursives")}, {fancy("fraktur", "gothiques")} ou en{" "}
        {fancy("small-caps-all", "petites capitales")}.
      </p>
      <p>
        Comme ce sont des caractères et non un fichier de police, le style voyage avec le texte. Si vous
        collez 𝐃𝐢𝐬𝐜𝐨𝐫𝐝 dans votre pseudo de serveur, tout le monde le voit en gras sans rien installer. La
        même astuce fonctionne presque partout où l’on peut écrire, d’où les autres noms d’écriture stylée ou
        de polices à copier-coller.
      </p>
      <p>
        Un point important en français : Unicode ne propose des versions stylées que pour les lettres de base
        de A à Z et les chiffres. Les lettres accentuées (é, è, à, ç, ô) restent normales, donc « café »
        s’affichera avec un « é » sans style. Pour un rendu homogène, essayez d’écrire sans accents.
      </p>
      <ExamplesFigure
        alt="Exemples de polices Discord : les mots Discord Fonts en gras, script, gothique, petites capitales, bulle et style décoré"
        caption="Les deux mêmes mots dans six styles, tous faits de caractères Unicode standard."
      />

      <h2 id="utilisation">Comment utiliser le générateur de polices Discord</h2>
      <ol>
        <li>
          <strong>Tapez votre texte</strong> dans la zone en haut de la page. Tous les styles se mettent à
          jour instantanément.
        </li>
        <li>
          <strong>Parcourez les styles</strong> ou utilisez les filtres (Gras, Cursive, Gothique, Décoratif,
          Aesthetic et Glitch) pour réduire la liste. Touchez <em>Afficher plus de styles</em> pour tout voir.
        </li>
        <li>
          <strong>Vérifiez la longueur</strong> s’il s’agit d’un pseudo. Les styles qui dépassent la limite de
          32 caractères de Discord portent la mention <em>32+</em>.
        </li>
        <li>
          <strong>Touchez Copier</strong> (ou le texte lui-même). Un message « Copié ! » confirme qu’il est
          dans le presse-papiers.
        </li>
        <li>
          <strong>Collez-le dans Discord</strong> avec Ctrl+V, Cmd+V ou un appui long sur mobile, puis
          enregistrez.
        </li>
      </ol>

      <h2 id="changer-pseudo">Changer la police de votre pseudo, surnom ou serveur Discord</h2>
      <p>
        Discord modifie ses menus de temps en temps, donc les intitulés exacts peuvent varier selon votre
        version de l’appli, mais les champs restent les mêmes.
      </p>
      <h3>Nom d’affichage</h3>
      <p>
        C’est le nom affiché à côté de vos messages dans tous les serveurs. Ouvrez les paramètres utilisateur,
        allez dans la partie profil, collez votre texte dans le champ du nom d’affichage et enregistrez. Il
        peut contenir jusqu’à 32 caractères.
      </p>
      <h3>Pseudo de serveur</h3>
      <p>
        Pour utiliser une autre police dans un seul serveur, ouvrez le menu de ce serveur, choisissez l’option
        pour modifier votre profil de serveur et collez le texte dans le pseudo. Certains serveurs empêchent
        les membres de changer de pseudo ; dans ce cas, demandez à un modérateur.
      </p>
      <h3>Nom du serveur et des salons</h3>
      <p>
        Si vous gérez un serveur, collez le texte dans le nom du serveur depuis ses paramètres, ou modifiez un
        salon et collez-le dans son nom. Des noms de salons comme « ︱𝐠𝐞𝐧𝐞𝐫𝐚𝐥 » sont un moyen populaire de
        donner un air organisé à un serveur. Gardez les salons importants lisibles pour que les nouveaux
        membres s’y retrouvent.
      </p>
      <h3>Bio et messages</h3>
      <p>
        La section « À propos de moi » et les messages normaux acceptent tout ce qui se trouve sur cette page,
        y compris les styles décorés les plus longs : c’est le meilleur endroit pour expérimenter.
      </p>

      <h2 id="meilleures-polices">Les meilleures polices pour pseudos, bios et serveurs</h2>
      <p>La bonne police dépend de l’endroit où les gens la verront :</p>
      <div className="overflow-x-auto">
        <table>
          <thead>
            <tr>
              <th scope="col">Où</th>
              <th scope="col">Bons choix</th>
              <th scope="col">Pourquoi</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Nom d’affichage et pseudo</td>
              <td>
                {styleLink("bold", "Gras")}, {styleLink("cursive", "Script gras")},{" "}
                {styleLink("small-caps", "Petites capitales")}
              </td>
              <td>Lisibles en petit et pris en charge par presque tous les appareils.</td>
            </tr>
            <tr>
              <td>Bio « À propos de moi »</td>
              <td>{styleLink("aesthetic", "Aesthetic")}, cadres scintillants et kawaii</td>
              <td>Plus de place pour décorer, et la lisibilité compte moins que pour un nom.</td>
            </tr>
            <tr>
              <td>Nom du serveur</td>
              <td>{styleLink("gothic", "Gothique")}, double trait, cadre royal</td>
              <td>Un style de titre marqué donne une identité claire au serveur.</td>
            </tr>
            <tr>
              <td>Noms de salons</td>
              <td>Petites capitales, gras sans empattement, monospace</td>
              <td>Des styles compacts qui gardent la liste des salons nette.</td>
            </tr>
            <tr>
              <td>Messages et mèmes</td>
              <td>
                {styleLink("glitch", "Glitch")}, {styleLink("upside-down", "À l’envers")},{" "}
                {styleLink("bubble", "Bulle")}
              </td>
              <td>Accrocheurs pour les blagues et les annonces, mais à utiliser avec modération.</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        Une bonne règle : tout ce que les gens doivent lire vite, comme un nom qu’ils veulent mentionner avec
        @, devrait utiliser un style sobre. Gardez la décoration chargée pour ce qui est juste pour le
        plaisir.
      </p>

      <h2 id="mise-en-forme">La mise en forme du texte sur Discord (markdown) expliquée</h2>
      <p>
        Discord a aussi sa propre mise en forme, le markdown. Au lieu de caractères spéciaux, vous entourez le
        texte de symboles et Discord applique le style : <code>**gras**</code>, <code>*italique*</code>,{" "}
        <code>__souligné__</code>, <code>~~barré~~</code> et <code>||spoiler||</code>. Vous pouvez aussi
        commencer une ligne par <code>#</code> pour un titre, <code>-#</code> pour un petit sous-texte ou{" "}
        <code>&gt;</code> pour une citation, et utiliser des blocs de code pour du texte à chasse fixe, voire
        en couleur.
      </p>
      <p>
        Le markdown ne fonctionne que dans les messages (et quelques champs du profil). Il n’a aucun effet sur
        les noms, et c’est justement pour ça que les polices Unicode existent. Essayez les deux avec l’outil
        de mise en forme ci-dessus, ou lisez le{" "}
        <Link href="/fr/discord-text-formatting">guide complet de mise en forme</Link>.
      </p>

      <h2 id="carres">Pourquoi certaines polices s’affichent en carrés</h2>
      <p>
        Si quelqu’un voit des rectangles vides ou des points d’interrogation à la place de votre texte, son
        appareil n’a pas de police contenant ces caractères. Le texte n’a rien de faux : c’est une limite de
        cet écran-là. Quelques repères pratiques :
      </p>
      <ul>
        <li>
          Les lettres <strong>grasses, italiques, script, gothiques et à double trait</strong> s’affichent sur
          les versions récentes de Windows, macOS, iOS et Android.
        </li>
        <li>
          Les lettres <strong>carrées, en bulles sombres et certaines lettres à l’envers</strong> sont plus
          récentes et ce sont elles qui posent le plus de problèmes sur les vieux téléphones, TV et consoles.
        </li>
        <li>
          Les <strong>styles à signes combinés</strong>, comme le barré, le souligné ou le zalgo, dépendent de
          la façon dont chaque appareil empile ces signes, ils peuvent donc paraître décalés.
        </li>
        <li>
          Les styles marqués <strong>Compatibilité limitée</strong> dans le générateur sont les plus risqués.
          Survolez ou touchez l’étiquette pour en savoir plus.
        </li>
      </ul>

      <h2 id="accessibilite">Accessibilité : lecteurs d’écran et caractères Unicode</h2>
      <p>
        L’écriture stylée ressemble à des lettres, mais pour un logiciel ce sont des symboles mathématiques ou
        décoratifs. Beaucoup de lecteurs d’écran annoncent chaque caractère par son nom technique (par exemple
        « mathematical bold capital D ») ou le sautent, et les outils de recherche peuvent ne pas le trouver.
        Votre nom devient alors difficile à trouver et à suivre pour les personnes qui utilisent des aides
        techniques.
      </p>
      <p>
        Utilisez les polices Discord pour décorer, pas pour informer. Gardez les règles, les annonces et tout
        ce qui compte en texte normal, et pensez à un style sobre pour votre nom d’affichage afin que les
        autres puissent le lire et vous mentionner facilement.
      </p>
    </div>
  );
}

export const homeFr: HomeContent = {
  title: "Polices Discord – Générateur d’écriture stylée à copier-coller",
  description:
    "Générateur de polices Discord gratuit : transformez votre texte en plus de 170 styles à copier-coller dans votre pseudo, serveur ou vos messages.",
  h1: "Polices Discord : générateur d’écriture stylée à copier-coller",
  intro:
    "Transformez n’importe quel texte en {count} polices Discord, du gras et de la cursive au gothique et au glitch. Copiez un style et collez-le dans votre pseudo, votre surnom, votre serveur ou vos messages. Gratuit, privé et sans inscription.",
  generatorLabel: "Générateur de polices Discord",
  formattingTitle: "Outil de mise en forme du texte Discord",
  formattingIntro: (
    <>
      Le gras, les spoilers, les titres et le texte en couleur utilisent le markdown intégré de Discord. Tapez
      une fois et copiez la syntaxe, ou lisez le{" "}
      <Link href="/fr/discord-text-formatting" className={inlineLink}>
        guide complet de mise en forme
      </Link>
      . Pour les heures d’événements et les comptes à rebours, essayez le{" "}
      <Link href="/fr/discord-timestamp-generator" className={inlineLink}>
        générateur de timestamp
      </Link>
      .
    </>
  ),
  popularTitle: "Styles de police Discord populaires",
  popularIntro:
    "Des générateurs dédiés à un seul style, avec des conseils sur les endroits où chacun fonctionne le mieux.",
  moreGenerators: "Autres générateurs :",
  faqHeading: "Questions fréquentes sur les polices Discord",
  faqs: [
    {
      question: "Qu’est-ce qu’une police Discord ?",
      answer:
        "C’est du texte composé de caractères Unicode spéciaux qui ressemblent à des lettres grasses, cursives, gothiques ou d’autres styles. Discord n’a pas de sélecteur de police : vous générez les caractères ici et les collez dans Discord comme n’importe quel texte.",
    },
    {
      question: "Peut-on changer la police de Discord ?",
      answer:
        "Pas directement. Discord permet de changer la taille du texte et d’utiliser le markdown pour le gras, l’italique, les titres et d’autres mises en forme dans les messages, mais pas de choisir une autre typographie. Les polices Unicode sont la solution : ce sont des caractères, pas un réglage de police, donc tout le monde les voit.",
    },
    {
      question: "Comment copier-coller des polices Discord ?",
      answer:
        "Tapez votre texte dans la zone en haut de la page, trouvez un style qui vous plaît et touchez Copier (ou le texte stylé lui-même). Ouvrez ensuite Discord et collez-le dans votre nom d’affichage, votre pseudo de serveur, votre bio, le nom d’un serveur, d’un salon ou dans un message.",
    },
    {
      question: "Puis-je utiliser une police stylée dans mon nom d’utilisateur ?",
      answer:
        "Pas dans votre @nom d’utilisateur unique, qui n’accepte que les minuscules, les chiffres, les tirets bas et les points. Les polices stylées fonctionnent dans votre nom d’affichage et dans vos pseudos de serveur, qui sont les noms que la plupart des gens voient dans le chat.",
    },
    {
      question: "Pourquoi certaines polices s’affichent-elles en carrés ou en points d’interrogation ?",
      answer:
        "Un carré signifie que l’appareil n’a pas de police contenant ce caractère. Cela arrive surtout avec des symboles rares sur les téléphones et ordinateurs anciens. Les styles marqués Compatibilité limitée sont les plus concernés, alors pour un nom, préférez le gras, l’italique ou le script.",
    },
    {
      question: "Pourquoi les lettres accentuées ne changent-elles pas de style ?",
      answer:
        "Unicode ne propose des versions stylées que pour les lettres de base de A à Z et les chiffres. Les lettres avec accent ou cédille n’ont pas d’équivalent, elles restent donc normales. Pour un rendu homogène, écrivez ces mots sans accents.",
    },
    {
      question: "Les polices Discord fonctionnent-elles sur mobile ?",
      answer:
        "Oui. Vous pouvez copier-coller depuis ce site sur iPhone et Android, et la plupart des styles s’affichent correctement dans l’appli mobile Discord. La principale exception est le texte en couleur ANSI, dont les couleurs ne s’affichent pour l’instant que sur ordinateur et sur le web.",
    },
    {
      question: "Utiliser des polices stylées est-il contraire aux règles de Discord ?",
      answer:
        "Utiliser des caractères Unicode n’est pas interdit en soi. Les problèmes commencent quand un nom sert à se faire passer pour quelqu’un, à contourner la modération ou à être illisible. Chaque serveur peut aussi avoir ses propres règles sur les pseudos : suivez les modérateurs s’ils demandent un nom simple.",
    },
    {
      question: "Ce générateur est-il gratuit et privé ?",
      answer:
        "Oui. Il est gratuit et sans inscription, et la conversion se fait entièrement dans votre navigateur. Le texte que vous tapez n’est ni envoyé ni stocké sur notre serveur.",
    },
  ],
  Article,
};
