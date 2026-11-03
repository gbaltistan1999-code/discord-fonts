import { hrefFor } from "@/lib/i18n";
import type { ToolPageContent } from "../../types";
import { NameIdeasTable, NameTypeTable } from "../shared";

const L = "de";

function Article() {
  return (
    <>
      <h2>Zuerst: Anzeigename oder Benutzername?</h2>
      <p>
        Discord gibt jedem Konto zwei Namen, und nur einer davon lässt sich gestalten. Das verwirrt viele.
      </p>
      <NameTypeTable
        headers={["Anzeigename", "@Benutzername"]}
        rows={[
          [
            "Wo man ihn sieht",
            "Neben deinen Nachrichten und in Mitgliederlisten",
            "In deinem Profil und wenn dich jemand hinzufügt",
          ],
          ["Schöne Schrift und Symbole", "Ja", "Nein"],
          ["Erlaubte Zeichen", "Fast jedes Unicode-Zeichen", "Kleinbuchstaben, Zahlen, Unterstriche, Punkte"],
          ["Muss eindeutig sein", "Nein", "Ja"],
          ["Länge", "Bis zu 32 Zeichen", "2 bis 32 Zeichen"],
        ]}
      />
      <p>
        Der Name, den du hier baust, gehört also in deinen Anzeigenamen. Dein @Benutzername bleibt schlicht –
        und das ist gut so, denn darüber finden dich deine Freunde.
      </p>

      <h2>So baust du einen Namen, der wirklich gut aussieht</h2>
      <p>
        Generatoren bieten Hunderte Optionen, da landet man schnell bei etwas Überladenem. Ein einfacher
        Ablauf hilft:
      </p>
      <ol>
        <li>
          Fang mit dem normalen Namen an. Überleg dir erst, wie du heißen willst, und gestalte ihn danach.
          Kurze Namen (4 bis 12 Buchstaben) sehen in jedem Stil am besten aus.
        </li>
        <li>
          Wähle eine Schrift, die zu dir passt. Fett und Doppelstrich wirken klar und selbstbewusst.
          Schreibschrift wirkt weich oder elegant. Fraktur wirkt düster oder kämpferisch. Kapitälchen wirken
          ruhig und aesthetic.
        </li>
        <li>
          Füge höchstens eine Verzierung hinzu. Ein Symbol auf jeder Seite, etwa ✧ oder ♡, rahmt den Namen,
          ohne ihn zu überladen.
        </li>
        <li>
          Teste ihn klein. Im Chat erscheint dein Name meist klein, also prüfe ihn in der Vorschau des
          Generators und auf deinem Handy.
        </li>
        <li>Prüfe die Länge. Die Vorschau zeigt an, ob du über dem Limit von 32 Zeichen liegst.</li>
      </ol>
      <p>
        Hinweis: Die Stile verändern nur A bis Z und Ziffern. Umlaute und ß bleiben normal – aus „Jürgen“ wird
        also ein Name mit unverändertem „ü“. Mit „Juergen“ klappt es einheitlich.
      </p>

      <h2>Namensideen nach Stil</h2>
      <NameIdeasTable
        headers={["Stil", "Rezept", "Beispiel"]}
        rows={[
          ["Klar", "Name in Fett oder Doppelstrich"],
          ["Sanft aesthetic", "Kapitälchen + sanfte Symbole"],
          ["Elegant", "Fette Schreibschrift"],
          ["Gamer", "Fraktur + Tag"],
          ["Verziert", "Schreibschrift in einem Rahmen"],
          ["Minimalistisch", "Normaler Name + ein Symbol"],
        ]}
      />

      <h2>So änderst du deinen Discord-Anzeigenamen</h2>
      <ol>
        <li>Kopiere deinen neuen Namen aus dem Generator.</li>
        <li>Öffne Discord und geh in die Benutzereinstellungen (das Zahnrad neben deinem Profil).</li>
        <li>Öffne den Profilbereich.</li>
        <li>Füge ihn in das Feld für den Anzeigenamen ein und speichere die Änderungen.</li>
      </ol>
      <p>
        Auf dem Handy tippst du auf dein Profilbild, bearbeitest dein Profil und fügst den Namen beim
        Anzeigenamen ein. Discord stellt seine Menüs ab und zu um, deshalb können die Bezeichnungen in deiner
        Version leicht abweichen.
      </p>

      <h2>Ein anderer Name auf nur einem Server?</h2>
      <p>
        Nutze einen Server-Nickname. Er ersetzt deinen Anzeigenamen nur auf diesem Server – praktisch für
        Clan-Tags, Rollenspielnamen oder passend zum Thema des Servers. Öffne das Servermenü, wähle die Option
        zum Bearbeiten deines Serverprofils und füge deinen gestalteten Namen als Nickname ein. Ist die Option
        ausgegraut, erlaubt der Server keine Nickname-Änderungen – frag dann die Moderation.
      </p>

      <h2>Darauf solltest du achten</h2>
      <ul>
        <li>
          Lesbarkeit schlägt Deko. Wenn deine Freunde die ersten Buchstaben deines Namens nicht tippen können,
          wird es nervig, dich mit @ zu erwähnen.
        </li>
        <li>
          Manche Stile versagen auf dem Handy. Quadrat- und dunkle Blasenbuchstaben können auf älteren Geräten
          als Kästchen erscheinen. Fett, Schreibschrift und Fraktur sind am sichersten.
        </li>
        <li>
          Gestaltete Namen sind schwerer zu finden. Die Mitgliedersuche von Discord ordnet gestaltete
          Buchstaben nicht unbedingt normalen zu, deshalb finden dich Freunde auf großen Servern womöglich
          schlechter.
        </li>
        <li>
          Gib dich nicht als jemand anderes aus. Namen, die Moderatoren, Bots oder bekannte Nutzer nachahmen,
          können zu Verwarnungen oder Rauswürfen führen – und schöne Schrift wird dafür oft benutzt.
        </li>
      </ul>
    </>
  );
}

export const discordNameDe: ToolPageContent = {
  name: "Discord-Namen-Generator",
  title: "Discord-Namen-Generator – Coole Anzeigenamen und Schriften",
  description:
    "Erstelle in Sekunden einen coolen Discord-Anzeigenamen. Wähle eine schöne Schrift, füge Symbole hinzu, prüfe das Limit von 32 Zeichen und kopiere deinen Namen.",
  h1: "Discord-Namen-Generator",
  intro:
    "Dein Anzeigename steht neben jeder Nachricht, die du schreibst, auf jedem deiner Server. Da lohnt es sich, dass er gut aussieht. Gib deinen Namen oder Gamertag ein, probiere ihn in verschiedenen Schriften und Verzierungen aus und kopiere den, der zu dir passt.",
  sampleText: "Dein Name",
  toolLabel: "Discord-Namen-Generator",
  faqHeading: "Häufige Fragen",
  faqs: [
    {
      question: "Kann ich schöne Schrift in meinem Discord-Benutzernamen verwenden?",
      answer:
        "Nein. Benutzernamen erlauben nur Kleinbuchstaben, Zahlen, Unterstriche und Punkte. Schöne Schrift funktioniert in deinem Anzeigenamen und in Server-Nicknames.",
    },
    {
      question: "Wie lang darf ein Discord-Anzeigename sein?",
      answer:
        "Bis zu 32 Zeichen. Verzierungen zählen mit, lange Namen mit Symbolen musst du also eventuell kürzen.",
    },
    {
      question: "Sehen alle meinen gestalteten Namen gleich?",
      answer:
        "Fast alle. Einige ältere Geräte können seltene Zeichen nicht darstellen und zeigen stattdessen Kästchen. Bleib bei Fett, Schreibschrift oder Fraktur, wenn du auf Nummer sicher gehen willst.",
    },
    {
      question: "Verstößt ein gestalteter Name gegen die Discord-Regeln?",
      answer:
        "Unicode-Zeichen zu verwenden, verstößt nicht an sich gegen die Regeln. Probleme machen Identitätsdiebstahl, beleidigende Namen oder absichtlich unlesbare Namen. Außerdem können einzelne Server eigene Regeln für Nicknames festlegen.",
    },
    {
      question: "Kann ich meinen Anzeigenamen so oft ändern, wie ich will?",
      answer:
        "Ja, Anzeigenamen und Nicknames kannst du jederzeit ändern. Für deinen @Benutzernamen gelten strengere Regeln.",
    },
    {
      question: "Ist dieser Namen-Generator kostenlos?",
      answer: "Ja. Ohne Anmeldung, und alles wird in deinem Browser umgewandelt.",
    },
  ],
  Article,
  relatedHeading: "Weitere Links",
  related: [
    { href: hrefFor(L, "/fancy-text-generator"), label: "Generator für schöne Schrift" },
    { href: hrefFor(L, "/"), label: "Discord-Schriftarten-Generator" },
    { href: "/de/discord-font-generator/bold", label: "Fettschrift-Generator" },
    { href: "/de/discord-font-generator/cursive", label: "Schreibschrift-Generator" },
    { href: "/de/discord-font-generator/small-caps", label: "Kapitälchen-Generator" },
  ],
};
