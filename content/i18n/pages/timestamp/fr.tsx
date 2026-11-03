import { timestampStrings } from "@/content/i18n/strings/timestamp";
import { hrefFor } from "@/lib/i18n";
import type { ToolPageContent } from "../../types";
import { TimestampFigure, TimestampStyleTable } from "../shared";

const L = "fr";

function Article() {
  return (
    <>
      <h2>Qu’est-ce qu’un timestamp Discord ?</h2>
      <p>
        Un timestamp Discord est un petit code que Discord transforme en date ou en heure quand vous envoyez
        le message. Vous écrivez quelque chose comme <code>&lt;t:1793740800:F&gt;</code> et les lecteurs
        voient une vraie date, par exemple « mardi 3 novembre 2026 à 16:20 ».
      </p>
      <p>
        Le nombre du code est un timestamp Unix : un instant précis, pas une heure sur une horloge donnée.
        L’appli Discord de chacun affiche cet instant dans son propre fuseau horaire et sa langue. Une
        personne à New York, une amie à Londres et un coéquipier à Sydney lisent la bonne heure locale dans le
        même message : personne n’a à calculer le décalage, et personne n’arrive avec une heure de retard.
      </p>
      <TimestampFigure
        image="example"
        alt="Exemple de code de timestamp Discord et de son affichage dans un message"
        caption="Le code que vous tapez, et la date et le compte à rebours que voient les lecteurs (image en anglais)."
      />

      <h2>Comment utiliser le générateur de timestamp Discord</h2>
      <ol>
        <li>
          Choisissez la date et l’heure de votre événement, ou touchez Maintenant pour partir de l’heure
          actuelle.
        </li>
        <li>
          Vérifiez le fuseau horaire. C’est le vôtre au départ ; changez-le si l’événement est prévu dans un
          autre fuseau, comme un tournoi à l’heure de l’Est américain.
        </li>
        <li>Ajustez avec les boutons +15 min, +1 heure, +1 jour et +1 semaine si besoin.</li>
        <li>Repérez le format voulu dans la liste et touchez Copier.</li>
        <li>Collez le code dans votre message Discord et envoyez-le.</li>
      </ol>
      <p>
        Vous avez déjà un timestamp Unix ? Collez-le dans le champ Unix et le générateur le charge, qu’il soit
        en secondes ou en millisecondes. Il sert donc aussi de convertisseur d’heure Discord dans l’autre
        sens.
      </p>
      <TimestampFigure
        image="steps"
        alt="Trois étapes pour utiliser le générateur de timestamp Discord : choisir la date et l’heure, choisir un format, copier-coller"
        caption="Choisissez une heure, un format, puis copiez-collez dans Discord."
      />

      <h2>Les formats de timestamp Discord</h2>
      <p>
        La lettre à la fin du code définit le format. Il y a neuf styles. Sans lettre, Discord utilise{" "}
        <code>f</code>. Les exemples du tableau viennent de la documentation de Discord ; vos lecteurs voient
        chaque style dans leur langue et leur format d’horloge.
      </p>
      <TimestampFigure
        image="formats"
        alt="Formats de timestamp Discord : heure courte, heure moyenne, date courte, date longue, date et heure et temps relatif, avec leurs codes"
        caption="Les neuf styles pour le même instant, tels que les voit une personne à New York (image en anglais)."
      />
      <TimestampStyleTable
        headers={["Style", "Code", "Exemple", "Idéal pour"]}
        styles={timestampStrings[L].styles}
      />
      <p>
        En résumé : utilisez Relatif (<code>R</code>) pour un compte à rebours, Date complète (<code>F</code>)
        pour les événements où le jour de la semaine compte, et Heure courte (<code>t</code>) pour les rappels
        quotidiens comme « reset à 16:20 ».
      </p>

      <h2>Écrire un timestamp Discord à la main</h2>
      <p>
        Pas besoin de générateur si vous avez l’heure Unix. Le format est <code>&lt;t:UNIX:STYLE&gt;</code> :
        un <code>t</code> minuscule, deux-points, le timestamp Unix en secondes, encore deux-points et la
        lettre du style, le tout entre chevrons et sans espace. <code>&lt;t:1793740800:R&gt;</code> est un
        exemple valide, tout comme <code>&lt;t:1793740800&gt;</code> sans style.
      </p>
      <p>
        Pour obtenir un timestamp Unix, utilisez ce générateur, lancez <code>date +%s</code> dans un terminal
        macOS ou Linux, ou utilisez <code>Math.floor(Date.now() / 1000)</code> en JavaScript. Beaucoup
        d’outils donnent des millisecondes (13 chiffres) ; Discord veut des secondes (10 chiffres pour les
        dates actuelles), alors retirez les trois derniers chiffres.
      </p>

      <h2>Exemples concrets</h2>
      <ul>
        <li>
          <strong>Annonces d’événements :</strong> « La soirée ciné commence{" "}
          <code>&lt;t:1793740800:F&gt;</code> (<code>&lt;t:1793740800:R&gt;</code>) » donne la date complète
          et un compte à rebours en direct.
        </li>
        <li>
          <strong>Giveaways :</strong> « Le giveaway se termine <code>&lt;t:1793740800:R&gt;</code> » indique
          le temps restant, puis passe à « il y a… » une fois terminé.
        </li>
        <li>
          <strong>Raids et matchs :</strong> « Raid à <code>&lt;t:1793740800:t&gt;</code> » garde une heure
          quotidienne courte et juste pour chaque joueur.
        </li>
        <li>
          <strong>Règles et annonces du serveur :</strong> « Règles mises à jour le{" "}
          <code>&lt;t:1793740800:D&gt;</code> » indique la date sans heure.
        </li>
        <li>
          <strong>Planning de streams :</strong> listez chaque stream avec <code>&lt;t:…:s&gt;</code> pour une
          date et une heure compactes par ligne.
        </li>
      </ul>

      <h2>Chacun voit sa propre heure</h2>
      <p>
        Comme le code stocke un seul instant, le même message se lit correctement partout dans le monde.
        Choisissez le fuseau dans lequel l’événement est prévu, et Discord fait la conversion pour tous les
        autres.
      </p>
      <TimestampFigure
        image="zones"
        alt="Un même timestamp Discord affichant la bonne heure locale à New York, Londres et Sydney"
        caption="Un code, trois villes : chaque lecteur voit son heure locale (image en anglais)."
      />

      <h2>Problèmes fréquents</h2>
      <ul>
        <li>
          <strong>Il s’affiche en texte brut.</strong> Vérifiez la syntaxe : il doit commencer par{" "}
          <code>&lt;t:</code> en minuscule, le style doit être l’une des neuf lettres (sensibles à la casse)
          et il ne doit pas y avoir d’espace à l’intérieur. Les blocs de code et le code en ligne (accents
          graves) empêchent aussi l’affichage.
        </li>
        <li>
          <strong>La date est dans des milliers d’années.</strong> Le nombre est en millisecondes. Utilisez
          des secondes ; ce générateur donne toujours des secondes.
        </li>
        <li>
          <strong>L’heure est décalée de quelques heures.</strong> Le mauvais fuseau a été choisi en créant le
          code. Choisissez le fuseau réel de l’événement et recopiez le code.
        </li>
        <li>
          <strong>Ça ne marche pas dans un nom.</strong> Les timestamps ne s’affichent que dans le texte des
          messages et dans les descriptions et champs des embeds de bots. Les noms d’utilisateur, noms
          d’affichage, pseudos de serveur et noms de salons affichent le code en texte brut.
        </li>
      </ul>

      <h2>Astuces</h2>
      <ul>
        <li>
          Combinez deux styles, comme <code>&lt;t:X:F&gt; (&lt;t:X:R&gt;)</code>, pour montrer la date et le
          temps restant. Le bouton Copier le combo le fait pour vous.
        </li>
        <li>
          Utilisez Relatif pour les comptes à rebours : il se met à jour tout seul, inutile de modifier le
          message.
        </li>
        <li>
          Vérifiez le fuseau avant de publier, surtout autour des changements d’heure. Le générateur vous
          prévient si une heure n’existe pas ou se répète ce jour-là.
        </li>
      </ul>
    </>
  );
}

export const timestampFr: ToolPageContent = {
  name: "Générateur de timestamp Discord",
  title: "Générateur de timestamp Discord – Heure locale pour tous",
  description:
    "Créez des timestamps Discord qui affichent la bonne heure dans le fuseau de chacun. Choisissez une date, un format ou un compte à rebours, puis copiez le code.",
  h1: "Générateur de timestamp Discord",
  intro:
    "Choisissez une date et une heure, et obtenez un code qui affiche la bonne heure locale pour tout votre serveur.",
  toolLabel: "Générateur de timestamp Discord",
  faqHeading: "Questions fréquentes sur les timestamps Discord",
  faqs: [
    {
      question: "Qu’est-ce qu’un timestamp Discord ?",
      answer:
        "C’est un code court comme <t:1793740800:F> que Discord transforme en date ou en heure à l’envoi du message. Au lieu d’une heure fixe, il stocke un instant en temps Unix, pour que Discord l’affiche dans le fuseau de chaque lecteur.",
    },
    {
      question: "Comment faire un compte à rebours sur Discord ?",
      answer:
        "Utilisez le style Relatif, R. Choisissez la date et l’heure de l’événement dans le générateur, copiez le code Relatif et collez-le dans votre message. Discord l’affiche comme « dans 3 jours » ou « dans 2 heures », le tient à jour, puis passe à « il y a 2 heures » une fois l’instant passé.",
    },
    {
      question: "Les timestamps Discord s’affichent-ils dans le fuseau de chacun ?",
      answer:
        "Oui, c’est tout leur intérêt. Le code stocke un seul instant, et l’appli Discord de chacun l’affiche dans son fuseau horaire et sa langue, donc personne n’a à convertir les heures de tête.",
    },
    {
      question: "Pourquoi mon timestamp Discord ne fonctionne-t-il pas ?",
      answer:
        "Les causes habituelles sont une faute dans le code (il faut <t: suivi du nombre, sans espace), un T majuscule au début, une lettre de style que Discord ne connaît pas, ou un timestamp en millisecondes au lieu de secondes. Un nombre à 13 chiffres est en millisecondes : retirez les trois derniers. Les timestamps ne fonctionnent pas non plus dans les noms d’utilisateur, noms d’affichage, pseudos ou noms de salons.",
    },
    {
      question: "Peut-on utiliser des timestamps dans des embeds ou des bots ?",
      answer:
        "Oui. Un bot peut envoyer le même code <t:...> dans un message normal, et il fonctionne aussi dans les descriptions et les valeurs des champs d’embeds. Les bots doivent envoyer le temps Unix en secondes. Les embeds ont aussi un champ timestamp à part, qui prend une date ISO 8601 et l’affiche en bas de l’embed.",
    },
    {
      question: "Les timestamps Discord fonctionnent-ils sur mobile ?",
      answer:
        "Oui. Ils s’affichent dans les applis Discord pour iOS et Android ainsi que sur ordinateur et dans le navigateur, et chaque appareil utilise son propre fuseau et sa langue.",
    },
    {
      question: "Qu’est-ce qu’un timestamp Unix ?",
      answer:
        "C’est le nombre de secondes écoulées depuis le 1er janvier 1970 à 00:00:00 UTC. Comme il part d’un instant fixe, il désigne le même moment partout, d’où son usage par Discord. Par exemple, 1793740800 correspond au 3 novembre 2026 à 21:20 UTC.",
    },
  ],
  Article,
  relatedHeading: "Outils liés",
  related: [
    { href: hrefFor(L, "/"), label: "Générateur de polices Discord" },
    { href: hrefFor(L, "/discord-text-formatting"), label: "Guide de mise en forme du texte Discord" },
    { href: hrefFor(L, "/discord-name-generator"), label: "Générateur de pseudo Discord" },
  ],
};
