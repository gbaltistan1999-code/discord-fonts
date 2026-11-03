import { hrefFor } from "@/lib/i18n";
import type { ToolPageContent } from "../../types";
import { FancyStyleTable, LocalLink, StyleGeneratorLinks } from "../shared";

const L = "fr";

function Article() {
  return (
    <>
      <h2>Comment fonctionne vraiment l’écriture stylée</h2>
      <p>
        Voici ce que la plupart des générateurs n’expliquent pas : l’écriture stylée n’est pas une police.
      </p>
      <p>
        Des applis comme Discord et Instagram ne vous laissent pas choisir de typographie. En revanche, elles
        acceptent n’importe quel caractère d’Unicode, la norme qui attribue un code à chaque lettre, symbole
        et emoji sur tous les appareils. Et Unicode contient plusieurs alphabets complets qui imitent les
        lettres normales. En 2001, il a ajouté des lettres grasses, italiques, script, Fraktur (gothiques) et
        à double trait pour que les mathématiciens puissent écrire des formules. Les petites capitales
        viennent de l’alphabet phonétique des linguistes, et les lettres larges façon « vaporwave » viennent
        des systèmes d’écriture japonais et chinois.
      </p>
      <p>
        Un générateur d’écriture stylée remplace chaque lettre normale par son sosie. Le « A » devient{" "}
        <span className="fancy-text">𝓐</span>, <span className="fancy-text">𝔄</span> ou{" "}
        <span className="fancy-text">🅐</span>. Comme le résultat est composé de vrais caractères, il garde son
        apparence partout où vous le collez, et tout le monde voit la même chose.
      </p>
      <p>
        Attention : ces alphabets ne couvrent que les lettres de A à Z et les chiffres. Les lettres accentuées
        (é, è, à, ç, ô) restent normales, alors écrivez sans accents pour un rendu homogène.
      </p>

      <h2>Quelles polices stylées fonctionnent le mieux (et où)</h2>
      <p>
        Tous les styles ne se valent pas. Certains s’affichent sur presque tous les téléphones et ordinateurs
        ; d’autres cassent sur les appareils anciens. Voici un guide rapide fondé sur la façon dont chaque
        style est construit :
      </p>
      <FancyStyleTable
        headers={["Style", "Exemple", "Lisibilité", "Compatibilité", "Idéal pour"]}
        rows={[
          ["Gras / Gras sans empattement", "Élevée", "Excellente", "Pseudos, titres"],
          ["Script / Script gras", "Moyenne", "Excellente", "Noms d’affichage, bios"],
          ["Gothique (Fraktur)", "Moyenne", "Excellente", "Profils gaming, noms de serveur"],
          ["Double trait", "Élevée", "Excellente", "Noms nets et modernes"],
          ["Petites capitales", "Élevée", "Très bonne", "Bios, noms de salons"],
          ["Vaporwave", "Élevée", "Très bonne", "Bios aesthetic"],
          ["Bulles / Cercles", "Moyenne", "Bonne", "Pseudos ludiques, messages"],
          [
            "Carrés / Bulles sombres",
            "Moyenne",
            "Moins bonne sur les vieux appareils",
            "Mots courts, annonces",
          ],
          ["Glitch / Zalgo", "Faible", "Variable", "Blagues et mèmes uniquement"],
        ]}
      />
      <p>
        Notre générateur signale les styles les plus risqués avec l’étiquette « Compatibilité limitée », pour
        que vous les repériez avant de coller.
      </p>
      <p>
        Vous voulez un seul style ? Essayez les générateurs dédiés (en anglais) :{" "}
        <StyleGeneratorLinks
          lastSeparator=" et "
          labels={[
            ["cursive", "cursive"],
            ["gothic", "gothique"],
            ["bold", "gras"],
            ["small-caps", "petites capitales"],
            ["aesthetic", "aesthetic"],
            ["bubble", "bulles"],
            ["glitch", "glitch"],
            ["upside-down", "à l’envers"],
          ]}
        />
        .
      </p>

      <h2>Mode d’emploi</h2>
      <ol>
        <li>
          Tapez ou collez votre texte dans la zone. Tous les styles se mettent à jour pendant la saisie.
        </li>
        <li>
          Utilisez les filtres (Gras, Cursive, Gothique, Décoratif, Aesthetic, Glitch) si vous savez déjà
          quelle ambiance vous voulez.
        </li>
        <li>Touchez un style pour le copier. Un message « Copié ! » le confirme.</li>
        <li>Collez-le dans votre appli et enregistrez.</li>
      </ol>
      <p>
        Astuce : avant d’adopter un pseudo, collez-le dans un message à un ami qui utilise un autre appareil.
        S’il l’affiche correctement, c’est bon.
      </p>

      <h2>Où l’écriture stylée fonctionne, et où elle ne fonctionne pas</h2>
      <p>
        Elle fonctionne presque partout où l’on peut écrire : noms d’affichage, pseudos, bios, noms de serveur
        et messages sur Discord, mais aussi Instagram, TikTok, Roblox, Facebook, YouTube et X. Pour des
        conseils par plateforme, consultez les pages (en anglais) consacrées à{" "}
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
        et{" "}
        <LocalLink locale={L} path="/facebook-fonts">
          Facebook
        </LocalLink>
        .
      </p>
      <p>Elle ne fonctionne généralement pas là où seuls les caractères de base sont acceptés :</p>
      <ul>
        <li>
          Les noms d’utilisateur uniques. Votre @nom d’utilisateur Discord, par exemple, n’accepte que les
          minuscules, les chiffres, les tirets bas et les points.
        </li>
        <li>Les adresses e-mail, mots de passe et adresses web.</li>
        <li>
          Certains chats de jeux et vieux forums, qui suppriment ou bloquent les caractères inhabituels.
        </li>
      </ul>

      <h2>Les erreurs à éviter</h2>
      <ul>
        <li>
          Styliser toute sa bio. Une ou deux lignes en écriture stylée se remarquent ; un paragraphe entier
          devient difficile à lire et chargé.
        </li>
        <li>
          Utiliser des styles rares pour son pseudo. Si quelqu’un ne peut ni lire ni taper votre nom, il ne
          peut pas vous mentionner avec @ ni vous chercher. Les caractères stylés ne correspondent d’ailleurs
          généralement pas aux recherches en lettres normales.
        </li>
        <li>
          Mélanger trop de polices. Un style et un symbole rendent presque toujours mieux que trois styles à
          la fois.
        </li>
        <li>
          Oublier l’accessibilité. Les lecteurs d’écran annoncent souvent chaque lettre stylée par son nom
          technique, comme « mathematical bold capital F », ou la sautent. Gardez l’essentiel, comme les
          règles ou les coordonnées, en texte normal.
        </li>
      </ul>
    </>
  );
}

export const fancyTextFr: ToolPageContent = {
  name: "Générateur d’écriture stylée",
  title: "Générateur d’écriture stylée – Plus de 170 polices à copier",
  description:
    "Transformez votre texte en plus de 170 polices stylées : script, gothique, bulles, aesthetic et plus. Copiez en un clic et collez sur Discord, Instagram ou TikTok.",
  h1: "Générateur d’écriture stylée",
  intro:
    "Tapez un mot, un pseudo ou une phrase entière et voyez-le dans plus de 170 polices stylées à la fois. Touchez un style pour le copier, puis collez-le où vous voulez : un pseudo Discord, une bio Instagram, une légende TikTok, un groupe de discussion. Rien à installer, aucun compte, et votre texte ne quitte jamais votre navigateur.",
  sampleText: "Texte stylé",
  toolLabel: "Générateur d’écriture stylée",
  faqHeading: "Questions fréquentes",
  faqs: [
    {
      question: "Qu’est-ce qu’un générateur d’écriture stylée ?",
      answer:
        "C’est un outil qui transforme les lettres normales en caractères Unicode ressemblants, pour copier du texte stylé et le coller partout où l’on peut écrire.",
    },
    {
      question: "L’écriture stylée, c’est la même chose que changer de police ?",
      answer:
        "Non. Changer de police n’affecte que votre propre écran. L’écriture stylée utilise d’autres caractères, donc tous ceux qui la voient ont le même style sans rien installer.",
    },
    {
      question: "Pourquoi mon texte stylé s’affiche-t-il en carrés ou en points d’interrogation ?",
      answer:
        "L’appareil qui l’affiche n’a pas de police contenant ces caractères. Cela arrive surtout avec les styles carrés, bulles sombres et glitch sur les vieux téléphones, TV connectées et consoles. Le gras, le script et le gothique sont les plus sûrs.",
    },
    {
      question: "Pourquoi les lettres accentuées ne changent-elles pas ?",
      answer:
        "Les alphabets stylés d’Unicode ne couvrent que les lettres de A à Z et les chiffres. Les lettres avec accent ou cédille n’ont pas de version stylée, elles restent donc normales.",
    },
    {
      question: "Puis-je utiliser l’écriture stylée dans mon nom d’utilisateur Discord ?",
      answer:
        "Pas dans votre @nom d’utilisateur. Utilisez-la dans votre nom d’affichage ou un pseudo de serveur, ce que les gens voient vraiment dans le chat. Notre générateur de pseudo Discord vous guide pas à pas.",
      answerContent: (
        <>
          Pas dans votre @nom d’utilisateur. Utilisez-la dans votre nom d’affichage ou un pseudo de serveur,
          ce que les gens voient vraiment dans le chat. Notre{" "}
          <LocalLink locale={L} path="/discord-name-generator">
            générateur de pseudo Discord
          </LocalLink>{" "}
          vous guide pas à pas.
        </>
      ),
    },
    {
      question: "Est-ce sans risque d’utiliser l’écriture stylée ?",
      answer:
        "Oui. Ce n’est que du texte. Les seuls risques sont pratiques : certaines personnes peuvent avoir du mal à le lire, et certains sites bloquent les caractères inhabituels.",
    },
    {
      question: "Ce générateur est-il gratuit ?",
      answer:
        "Oui, entièrement gratuit et sans inscription, et la conversion se fait dans votre navigateur : votre texte n’est envoyé nulle part.",
    },
  ],
  Article,
  relatedHeading: "Liens utiles",
  related: [
    { href: hrefFor(L, "/"), label: "Générateur de polices Discord" },
    { href: hrefFor(L, "/discord-name-generator"), label: "Générateur de pseudo Discord" },
    { href: hrefFor(L, "/discord-text-formatting"), label: "Guide de mise en forme du texte Discord" },
  ],
};
