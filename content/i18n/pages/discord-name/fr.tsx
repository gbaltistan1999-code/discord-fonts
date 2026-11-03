import { hrefFor } from "@/lib/i18n";
import type { ToolPageContent } from "../../types";
import { NameIdeasTable, NameTypeTable } from "../shared";

const L = "fr";

function Article() {
  return (
    <>
      <h2>D’abord : nom d’affichage ou nom d’utilisateur ?</h2>
      <p>
        Discord donne deux noms à chaque compte, et un seul peut être stylisé. C’est une source de confusion
        pour beaucoup de monde.
      </p>
      <NameTypeTable
        headers={["Nom d’affichage", "@nom d’utilisateur"]}
        rows={[
          [
            "Ce que les gens voient",
            "À côté de vos messages et dans la liste des membres",
            "Sur votre profil et quand quelqu’un vous ajoute",
          ],
          ["Polices stylées et symboles", "Oui", "Non"],
          [
            "Caractères autorisés",
            "Presque tous les caractères Unicode",
            "Minuscules, chiffres, tirets bas et points",
          ],
          ["Doit être unique", "Non", "Oui"],
          ["Longueur", "Jusqu’à 32 caractères", "De 2 à 32 caractères"],
        ]}
      />
      <p>
        Le nom que vous créez ici va donc dans votre nom d’affichage. Votre @nom d’utilisateur reste simple,
        et c’est tant mieux, car c’est grâce à lui que vos amis vous trouvent.
      </p>

      <h2>Comment créer un pseudo vraiment réussi</h2>
      <p>
        Les générateurs proposent des centaines d’options, il est donc facile de finir avec quelque chose de
        chargé. Une méthode simple aide :
      </p>
      <ol>
        <li>
          Partez du nom sans style. Décidez comment vous voulez qu’on vous appelle avant de le décorer. Les
          noms courts (4 à 12 lettres) rendent mieux dans tous les styles.
        </li>
        <li>
          Choisissez une seule police qui vous ressemble. Le gras et le double trait font net et assuré. Le
          script fait doux ou élégant. Le gothique fait sombre ou compétitif. Les petites capitales font calme
          et aesthetic.
        </li>
        <li>
          Ajoutez au maximum une décoration. Un symbole de chaque côté, comme ✧ ou ♡, encadre le nom sans
          l’encombrer.
        </li>
        <li>
          Testez-le en petit. Dans le chat, votre nom s’affiche souvent en petit, alors vérifiez-le dans
          l’aperçu du générateur et sur votre téléphone.
        </li>
        <li>
          Vérifiez la longueur. L’aperçu du générateur indique si vous dépassez la limite de 32 caractères.
        </li>
      </ol>
      <p>
        Petit détail : les styles ne modifient que les lettres de A à Z et les chiffres. Les lettres
        accentuées restent normales, donc « Zoé » s’affichera avec un « é » sans style.
      </p>

      <h2>Idées de pseudos par style</h2>
      <NameIdeasTable
        headers={["Ambiance", "Formule", "Exemple"]}
        rows={[
          ["Net", "Nom en gras ou à double trait"],
          ["Aesthetic doux", "Petites capitales + symboles doux"],
          ["Élégant", "Script gras"],
          ["Gamer", "Gothique + tag"],
          ["Décoré", "Script dans un cadre"],
          ["Minimaliste", "Nom simple + un symbole"],
        ]}
      />

      <h2>Comment changer votre nom d’affichage sur Discord</h2>
      <ol>
        <li>Copiez votre nouveau nom depuis le générateur.</li>
        <li>
          Ouvrez Discord et allez dans les paramètres utilisateur (l’icône d’engrenage à côté de votre
          profil).
        </li>
        <li>Ouvrez la partie profil.</li>
        <li>Collez-le dans le champ du nom d’affichage et enregistrez.</li>
      </ol>
      <p>
        Sur mobile, touchez votre photo de profil, modifiez votre profil et collez-le dans le nom d’affichage.
        Discord déplace ses menus de temps en temps, donc les intitulés peuvent légèrement varier selon votre
        version.
      </p>

      <h2>Un autre nom sur un seul serveur ?</h2>
      <p>
        Utilisez un pseudo de serveur. Il remplace votre nom d’affichage uniquement sur ce serveur, pratique
        pour un tag de clan, un nom de RP ou pour coller au thème du serveur. Ouvrez le menu du serveur,
        choisissez l’option pour modifier votre profil de serveur et collez votre pseudo stylé dans le champ
        prévu. Si l’option est grisée, le serveur n’autorise pas les changements de pseudo : demandez à un
        modérateur.
      </p>

      <h2>Les points de vigilance</h2>
      <ul>
        <li>
          La lisibilité avant la décoration. Si vos amis ne peuvent pas taper les premières lettres de votre
          nom, vous mentionner avec @ devient pénible.
        </li>
        <li>
          Certains styles cassent sur téléphone. Les lettres carrées et en bulles sombres peuvent s’afficher
          en carrés sur les vieux appareils. Le gras, le script et le gothique sont les plus sûrs.
        </li>
        <li>
          Les pseudos stylés sont plus difficiles à trouver. La recherche de membres de Discord peut ne pas
          faire le lien entre lettres stylées et lettres normales, et vos amis risquent d’avoir du mal à vous
          trouver sur un gros serveur.
        </li>
        <li>
          Pas d’usurpation. Les noms qui imitent des modérateurs, des bots ou des utilisateurs connus peuvent
          valoir un avertissement ou une exclusion, et les polices stylées sont souvent utilisées pour tenter
          le coup.
        </li>
      </ul>
    </>
  );
}

export const discordNameFr: ToolPageContent = {
  name: "Générateur de pseudo Discord",
  title: "Générateur de pseudo Discord – Noms d’affichage stylés",
  description:
    "Créez un nom d’affichage Discord stylé en quelques secondes. Choisissez une police, ajoutez des symboles, vérifiez la limite de 32 caractères et copiez votre pseudo.",
  h1: "Générateur de pseudo Discord",
  intro:
    "Votre nom d’affichage apparaît à côté de chaque message que vous envoyez, sur tous vos serveurs. Autant qu’il ait de l’allure. Tapez votre pseudo ou votre tag de joueur, essayez-le dans différentes polices et décorations, et copiez celui qui vous ressemble.",
  sampleText: "Ton Pseudo",
  toolLabel: "Générateur de pseudo Discord",
  faqHeading: "Questions fréquentes",
  faqs: [
    {
      question: "Puis-je utiliser des polices stylées dans mon nom d’utilisateur Discord ?",
      answer:
        "Non. Les noms d’utilisateur n’acceptent que les minuscules, les chiffres, les tirets bas et les points. Les polices stylées fonctionnent dans votre nom d’affichage et vos pseudos de serveur.",
    },
    {
      question: "Quelle longueur peut avoir un nom d’affichage Discord ?",
      answer:
        "Jusqu’à 32 caractères. Les décorations comptent aussi, donc les noms longs avec des symboles devront peut-être être raccourcis.",
    },
    {
      question: "Tout le monde verra-t-il mon pseudo stylé de la même façon ?",
      answer:
        "Presque tout le monde. Quelques appareils anciens ne peuvent pas afficher les caractères rares et montrent des carrés à la place. Restez sur le gras, le script ou le gothique pour ne pas prendre de risque.",
    },
    {
      question: "Un pseudo stylé est-il contraire aux règles de Discord ?",
      answer:
        "Utiliser des caractères Unicode n’est pas interdit en soi. Les problèmes viennent de l’usurpation d’identité, des noms offensants ou des noms faits pour être illisibles. Chaque serveur peut aussi avoir ses propres règles sur les pseudos.",
    },
    {
      question: "Puis-je changer de nom d’affichage aussi souvent que je veux ?",
      answer:
        "Oui, le nom d’affichage et les pseudos de serveur se changent quand vous voulez. Le @nom d’utilisateur obéit à des règles plus strictes.",
    },
    {
      question: "Ce générateur de pseudo est-il gratuit ?",
      answer: "Oui. Sans inscription, et tout est converti dans votre navigateur.",
    },
  ],
  Article,
  relatedHeading: "Liens utiles",
  related: [
    { href: hrefFor(L, "/fancy-text-generator"), label: "Générateur d’écriture stylée" },
    { href: hrefFor(L, "/"), label: "Générateur de polices Discord" },
    { href: "/fr/discord-font-generator/bold", label: "Générateur de police grasse" },
    { href: "/fr/discord-font-generator/cursive", label: "Générateur de police cursive" },
    { href: "/fr/discord-font-generator/small-caps", label: "Générateur de petites capitales" },
  ],
};
