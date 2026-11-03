import type { FormattingPageContent } from "../../types";
import { AnsiExample, LocalLink, MarkdownCheatSheet } from "../shared";

const L = "fr";

function Guide() {
  return (
    <div className="prose-content">
      <h2 id="mise-en-forme-discord">Qu’est-ce que la mise en forme du texte sur Discord ?</h2>
      <p>
        Discord utilise un langage de balisage léger appelé <strong>markdown</strong>. Vous tapez quelques
        symboles autour de vos mots, et Discord les transforme en gras, italique, souligné, barré ou texte
        masqué à l’envoi du message. Le markdown est intégré à Discord, il fonctionne donc pareil pour tout le
        monde, mais il ne s’applique que dans les messages et quelques champs du profil comme « À propos de
        moi ». Il n’a aucun effet sur les noms d’utilisateur, noms d’affichage ou noms de serveur.
      </p>

      <h2 id="aide-memoire">Aide-mémoire du markdown Discord</h2>
      <MarkdownCheatSheet
        headers={["Style", "Tapez ceci", "Idéal pour"]}
        rows={[
          ["Gras", "Insister, mots-clés"],
          ["Italique", "Ton, titres d’œuvres"],
          ["Gras italique", "Insistance forte"],
          ["Souligné", "Mise en avant (se combine, ex. __**texte**__)"],
          ["Barré", "Corrections et blagues"],
          ["Spoiler", "Cacher une intrigue ou une réponse jusqu’au clic"],
          ["Code en ligne", "Commandes, code court"],
          ["Bloc de code", "Code sur plusieurs lignes, art ASCII, texte à chasse fixe"],
          ["Citation", "Citer une ligne"],
          ["Citation multiligne", "Citer tout ce qui suit"],
          ["Titres", "Grands, moyens et petits titres"],
          ["Sous-texte", "Petites notes en gris"],
          ["Liste", "Listes à puces et numérotées"],
          ["Lien masqué", "Liens texte cliquables"],
        ]}
      />
      <p>
        Les dates et heures ont leur propre syntaxe : <code>&lt;t:1793740800:R&gt;</code> devient un compte à
        rebours en direct, affiché dans le fuseau de chaque lecteur. Créez-en un avec le{" "}
        <LocalLink locale={L} path="/discord-timestamp-generator">
          générateur de timestamp Discord
        </LocalLink>
        .
      </p>

      <h2 id="titres-et-sous-texte">Titres et sous-texte</h2>
      <p>
        Commencez une ligne par <code>#</code>, <code>##</code> ou <code>###</code> suivi d’une espace pour
        créer un grand, un moyen ou un petit titre. Les titres sont parfaits pour les salons de règles, les
        annonces et les événements. Pour l’effet inverse, commencez la ligne par <code>-#</code> et une espace
        pour un petit sous-texte discret, utile pour les notes, crédits ou mentions « modifié ». Les deux ne
        fonctionnent qu’en tout début de ligne.
      </p>

      <h2 id="texte-en-couleur">Comment écrire en couleur sur Discord</h2>
      <p>
        Discord n’a pas d’option de couleur pour les messages normaux, mais les blocs de code utilisant le
        langage <code>ansi</code> acceptent les codes couleur de terminal. L’outil ci-dessus les crée pour
        vous : choisissez une couleur de texte, un fond facultatif, du gras ou du souligné, puis copiez le
        résultat. En coulisses, il crée un bloc comme celui-ci, où chaque code couleur commence par un
        caractère d’échappement invisible :
      </p>
      <AnsiExample text="Votre texte bleu" />
      <p>
        Les couleurs s’affichent dans l’appli Discord pour ordinateur et dans le navigateur. Les applis
        mobiles affichent pour l’instant le texte dans un simple bloc de code, sans couleur : ne comptez donc
        pas uniquement sur la couleur pour faire passer un message.
      </p>

      <h2 id="blocs-de-code">Blocs de code et coloration syntaxique</h2>
      <p>
        Entourez le texte de trois accents graves pour créer un bloc de code. Ajoutez un nom de langage juste
        après les accents d’ouverture, comme <code>```js</code>, <code>```py</code> ou <code>```css</code>, et
        Discord colore la syntaxe. Les blocs de code conservent aussi les espaces exactement comme tapés,
        pratique pour les tableaux et l’art textuel.
      </p>

      <h2 id="combiner-et-echapper">Combiner et échapper la mise en forme</h2>
      <p>
        La plupart des styles se cumulent. <code>__***texte***__</code> donne du gras, de l’italique et du
        souligné en même temps, et <code>||**texte**||</code> cache du texte en gras derrière un spoiler. Pour
        afficher les symboles eux-mêmes plutôt que la mise en forme, mettez une barre oblique inversée devant
        : <code>\*pas italique\*</code>. Entourer le texte d’un seul accent grave affiche aussi les symboles
        tels quels.
      </p>

      <h2 id="markdown-ou-unicode">Markdown ou polices Unicode ?</h2>
      <p>
        Le markdown change la façon dont Discord <em>affiche</em> un texte normal, tandis que les polices
        Unicode changent les caractères eux-mêmes. C’est pourquoi le markdown est idéal pour une mise en forme
        lisible dans les messages, et les styles Unicode sont le seul moyen d’avoir des lettres grasses,
        cursives ou gothiques dans un nom d’affichage ou un nom de salon. Essayez les deux avec le{" "}
        <LocalLink locale={L} path="/">
          générateur de polices Discord
        </LocalLink>{" "}
        ou passez directement à un style comme le{" "}
        <LocalLink locale={L} path="/discord-font-generator/bold">
          gras
        </LocalLink>{" "}
        ou la{" "}
        <LocalLink locale={L} path="/discord-font-generator/cursive">
          cursive
        </LocalLink>
        .
      </p>

      <h2 id="conseils">Conseils pour une mise en forme lisible</h2>
      <ul>
        <li>Utilisez des titres pour structurer les longs messages au lieu de tout mettre en gras.</li>
        <li>
          Mettez toujours un spoiler sur les révélations, les réponses d’énigmes et tout sujet sensible.
        </li>
        <li>
          Réservez la couleur à la mise en valeur et à la déco, puisqu’elle ne s’affiche pas sur mobile.
        </li>
        <li>
          Les lecteurs d’écran gèrent bien le markdown : il est plus accessible que l’écriture stylée Unicode.
        </li>
      </ul>
    </div>
  );
}

export const formattingFr: FormattingPageContent = {
  name: "Mise en forme du texte Discord",
  title: "Mise en forme du texte Discord – Gras, couleur et markdown",
  description:
    "Apprenez la mise en forme du texte sur Discord : gras, italique, souligné, spoiler, titres, sous-texte, blocs de code et texte en couleur. Copiez le markdown en un clic.",
  h1: "Mise en forme du texte Discord : guide du markdown et générateur",
  intro:
    "Tapez votre message une fois et copiez-le en gras, italique, souligné, spoiler, titre, sous-texte, code ou couleur, le tout avec le markdown intégré de Discord.",
  toolLabel: "Outil de mise en forme markdown pour Discord",
  appName: "Outil de mise en forme du texte Discord",
  Guide,
};
