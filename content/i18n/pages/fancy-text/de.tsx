import { hrefFor } from "@/lib/i18n";
import type { ToolPageContent } from "../../types";
import { FancyStyleTable, LocalLink, StyleGeneratorLinks } from "../shared";

const L = "de";

function Article() {
  return (
    <>
      <h2>So funktioniert schöne Schrift wirklich</h2>
      <p>Das erklären die wenigsten Generatoren: Schöne Schrift ist gar keine Schriftart.</p>
      <p>
        Apps wie Discord und Instagram lassen dich keine Schrift auswählen. Was sie aber akzeptieren, ist
        jedes Zeichen aus Unicode – dem Standard, der jedem Buchstaben, Symbol und Emoji auf jedem Gerät einen
        eigenen Code gibt. Und Unicode enthält mehrere vollständige Alphabete, die normalen Buchstaben ähneln.
        2001 kamen fette, kursive, Schreibschrift-, Fraktur- und Doppelstrich-Buchstaben hinzu, damit
        Mathematiker Formeln schreiben können. Kapitälchen stammen aus dem phonetischen Alphabet der
        Sprachwissenschaft, und die breiten „Vaporwave“-Buchstaben aus den japanischen und chinesischen
        Schriftsystemen.
      </p>
      <p>
        Ein Generator für schöne Schrift ersetzt jeden normalen Buchstaben durch seinen Doppelgänger. Aus „A“
        wird <span className="fancy-text">𝓐</span>, <span className="fancy-text">𝔄</span> oder{" "}
        <span className="fancy-text">🅐</span>. Weil das Ergebnis aus echten Zeichen besteht, behält es sein
        Aussehen überall, wo du es einfügst, und alle sehen dasselbe.
      </p>
      <p>
        Beachte: Diese Alphabete gibt es nur für die Buchstaben A bis Z und für Ziffern. Umlaute und ß bleiben
        normal – schreib ae, oe, ue und ss, wenn alles einheitlich aussehen soll.
      </p>

      <h2>Welche schönen Schriften am besten funktionieren (und wo)</h2>
      <p>
        Nicht jeder Stil ist gleich sicher. Manche werden auf fast jedem Handy und Computer angezeigt, andere
        fallen auf älteren Geräten aus. Diese Übersicht beruht darauf, wie die Stile aufgebaut sind:
      </p>
      <FancyStyleTable
        headers={["Stil", "Beispiel", "Lesbarkeit", "Geräteunterstützung", "Ideal für"]}
        rows={[
          ["Fett / Fett serifenlos", "Hoch", "Sehr gut", "Namen, Überschriften"],
          ["Schreibschrift / Fette Schreibschrift", "Mittel", "Sehr gut", "Anzeigenamen, Bios"],
          ["Fraktur", "Mittel", "Sehr gut", "Gaming-Profile, Servernamen"],
          ["Doppelstrich", "Hoch", "Sehr gut", "Klare, moderne Namen"],
          ["Kapitälchen", "Hoch", "Gut", "Bios, Kanalnamen"],
          ["Vaporwave", "Hoch", "Gut", "Aesthetic-Bios"],
          ["Blasen / Kreise", "Mittel", "Ordentlich", "Verspielte Namen, Nachrichten"],
          [
            "Quadrate / Dunkle Blasen",
            "Mittel",
            "Schwächer auf älteren Geräten",
            "Kurze Wörter, Ankündigungen",
          ],
          ["Glitch / Zalgo", "Niedrig", "Unterschiedlich", "Nur für Witze und Memes"],
        ]}
      />
      <p>
        Unser Generator kennzeichnet die riskantesten Stile mit dem Hinweis „Eingeschränkte Unterstützung“,
        damit du sie vor dem Einfügen erkennst.
      </p>
      <p>
        Nur ein bestimmter Look? Probiere die speziellen Generatoren:{" "}
        <StyleGeneratorLinks
          locale={L}
          lastSeparator=" und "
          labels={[
            ["cursive", "Schreibschrift"],
            ["gothic", "Fraktur"],
            ["bold", "Fettschrift"],
            ["small-caps", "Kapitälchen"],
            ["aesthetic", "Aesthetic"],
            ["bubble", "Blasen"],
            ["glitch", "Glitch"],
            ["upside-down", "Umgedreht"],
          ]}
        />
        .
      </p>

      <h2>So geht’s</h2>
      <ol>
        <li>Gib deinen Text ein oder füge ihn ein. Alle Stile aktualisieren sich beim Tippen.</li>
        <li>
          Nutze die Filter (Fett, Schreibschrift, Fraktur, Dekorativ, Aesthetic, Glitch), wenn du schon weißt,
          welcher Stil es sein soll.
        </li>
        <li>Tippe auf einen Stil, um ihn zu kopieren. Du siehst die Bestätigung „Kopiert!“.</li>
        <li>Füge ihn in deiner App ein und speichere.</li>
      </ol>
      <p>
        Tipp: Bevor du dich auf einen Namen festlegst, schick ihn einem Freund mit einem anderen Gerät. Wenn
        er ihn richtig sieht, passt alles.
      </p>

      <h2>Wo schöne Schrift funktioniert – und wo nicht</h2>
      <p>
        Sie funktioniert fast überall, wo du Text eingeben kannst: Anzeigenamen, Nicknames, Bios, Servernamen
        und Nachrichten in Discord sowie Instagram, TikTok, Roblox, Facebook, YouTube und X. Tipps für
        einzelne Plattformen findest du auf den Seiten (auf Englisch) zu{" "}
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
        und{" "}
        <LocalLink locale={L} path="/facebook-fonts">
          Facebook
        </LocalLink>
        .
      </p>
      <p>Meist funktioniert sie nicht dort, wo nur einfache Zeichen erlaubt sind:</p>
      <ul>
        <li>
          Eindeutige Benutzernamen und Handles. Dein Discord-@Benutzername erlaubt zum Beispiel nur
          Kleinbuchstaben, Zahlen, Unterstriche und Punkte.
        </li>
        <li>E-Mail-Adressen, Passwörter und Webadressen.</li>
        <li>Manche Spiele-Chats und ältere Foren, die ungewöhnliche Zeichen entfernen oder blockieren.</li>
      </ul>

      <h2>Fehler, die du vermeiden solltest</h2>
      <ul>
        <li>
          Die ganze Bio gestalten. Ein, zwei Zeilen schöne Schrift fallen auf; ein ganzer Absatz ist schwer zu
          lesen und wirkt überladen.
        </li>
        <li>
          Seltene Stile im Namen. Wenn andere deinen Namen weder lesen noch tippen können, können sie dich
          nicht mit @ erwähnen oder suchen. Gestaltete Zeichen passen außerdem meist nicht zu Suchen mit
          normalen Buchstaben.
        </li>
        <li>
          Zu viele Schriften mischen. Ein Stil plus ein Symbol sieht fast immer besser aus als drei Stile auf
          einmal.
        </li>
        <li>
          Barrierefreiheit vergessen. Screenreader lesen gestaltete Buchstaben oft mit ihrem technischen Namen
          vor, etwa „mathematical bold capital F“, oder überspringen sie. Lass Wichtiges wie Regeln oder
          Kontaktdaten in normalem Text.
        </li>
      </ul>
    </>
  );
}

export const fancyTextDe: ToolPageContent = {
  name: "Generator für schöne Schrift",
  title: "Schöne Schrift Generator – Über 170 Schriften zum Kopieren",
  description:
    "Verwandle Text in über 170 schöne Schriften: Schreibschrift, Fraktur, Blasen, Aesthetic und mehr. Mit einem Klick kopieren und in Discord, Instagram oder TikTok einfügen.",
  h1: "Generator für schöne Schrift",
  intro:
    "Gib ein Wort, einen Namen oder einen ganzen Satz ein und sieh ihn sofort in über 170 schönen Schriften. Tippe auf einen Stil, um ihn zu kopieren, und füge ihn ein, wo du willst: als Discord-Namen, Instagram-Bio, TikTok-Beschreibung oder im Gruppenchat. Nichts zu installieren, kein Konto, und dein Text verlässt nie deinen Browser.",
  sampleText: "Schoene Schrift",
  toolLabel: "Generator für schöne Schrift",
  faqHeading: "Häufige Fragen",
  faqs: [
    {
      question: "Was ist ein Generator für schöne Schrift?",
      answer:
        "Ein Tool, das normale Buchstaben in ähnlich aussehende Unicode-Zeichen umwandelt. So kannst du gestalteten Text kopieren und überall einfügen, wo Text erlaubt ist.",
    },
    {
      question: "Ist schöne Schrift dasselbe wie eine andere Schriftart?",
      answer:
        "Nein. Eine Schriftart zu ändern betrifft nur deinen eigenen Bildschirm. Schöne Schrift besteht aus anderen Zeichen, deshalb sehen alle denselben Stil, ohne etwas zu installieren.",
    },
    {
      question: "Warum erscheint meine schöne Schrift als Kästchen oder Fragezeichen?",
      answer:
        "Dem Gerät fehlt eine Schrift mit diesen Zeichen. Das passiert vor allem bei Quadrat-, dunklen Blasen- und Glitch-Stilen auf älteren Handys, Smart-TVs und Konsolen. Fett, Schreibschrift und Fraktur sind am sichersten.",
    },
    {
      question: "Warum ändern sich Umlaute und ß nicht?",
      answer:
        "Die gestalteten Unicode-Alphabete gibt es nur für A bis Z und Ziffern. Für ä, ö, ü und ß gibt es keine gestaltete Version, deshalb bleiben sie normal.",
    },
    {
      question: "Kann ich schöne Schrift in meinem Discord-Benutzernamen verwenden?",
      answer:
        "Nicht im @Benutzernamen. Nutze sie im Anzeigenamen oder als Server-Nickname – das ist es, was andere im Chat sehen. Unser Discord-Namen-Generator führt dich Schritt für Schritt durch.",
      answerContent: (
        <>
          Nicht im @Benutzernamen. Nutze sie im Anzeigenamen oder als Server-Nickname – das ist es, was andere
          im Chat sehen. Unser{" "}
          <LocalLink locale={L} path="/discord-name-generator">
            Discord-Namen-Generator
          </LocalLink>{" "}
          führt dich Schritt für Schritt durch.
        </>
      ),
    },
    {
      question: "Ist schöne Schrift sicher?",
      answer:
        "Ja. Es ist einfach Text. Die einzigen Risiken sind praktischer Art: Manche können ihn vielleicht nicht lesen, und manche Websites blockieren ungewöhnliche Zeichen.",
    },
    {
      question: "Ist dieser Generator kostenlos?",
      answer:
        "Ja, komplett kostenlos und ohne Anmeldung. Die Umwandlung läuft in deinem Browser, dein Text wird nirgendwohin gesendet.",
    },
  ],
  Article,
  relatedHeading: "Weitere Links",
  related: [
    { href: hrefFor(L, "/"), label: "Discord-Schriftarten-Generator" },
    { href: hrefFor(L, "/discord-name-generator"), label: "Discord-Namen-Generator" },
    { href: hrefFor(L, "/discord-text-formatting"), label: "Anleitung zur Discord-Textformatierung" },
  ],
};
