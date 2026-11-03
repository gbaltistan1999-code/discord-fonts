import { timestampStrings } from "@/content/i18n/strings/timestamp";
import { hrefFor } from "@/lib/i18n";
import type { ToolPageContent } from "../../types";
import { TimestampFigure, TimestampStyleTable } from "../shared";

const L = "de";

function Article() {
  return (
    <>
      <h2>Was ist ein Discord-Timestamp?</h2>
      <p>
        Ein Discord-Timestamp ist ein kurzer Code, den Discord beim Senden in ein Datum oder eine Uhrzeit
        umwandelt. Du schreibst etwas wie <code>&lt;t:1793740800:F&gt;</code>, und die Leser sehen ein
        richtiges Datum, etwa „Dienstag, 3. November 2026 um 16:20“.
      </p>
      <p>
        Die Zahl im Code ist ein Unix-Timestamp: ein genauer Zeitpunkt, keine Uhrzeit auf einer bestimmten
        Uhr. Die Discord-App jeder Person zeigt diesen Zeitpunkt in ihrer eigenen Zeitzone und Sprache. Jemand
        in New York, eine Freundin in London und ein Teamkollege in Sydney lesen in derselben Nachricht die
        richtige Ortszeit – niemand muss umrechnen, und niemand kommt eine Stunde zu spät.
      </p>
      <TimestampFigure
        image="example"
        alt="Beispiel für einen Discord-Timestamp-Code und wie er in einer Nachricht erscheint"
        caption="Der Code, den du eingibst, und das Datum mit Countdown, das die Leser sehen (Bild auf Englisch)."
      />

      <h2>So benutzt du den Discord-Timestamp-Generator</h2>
      <ol>
        <li>
          Wähle Datum und Uhrzeit deines Events oder tippe auf Jetzt, um mit der aktuellen Zeit zu starten.
        </li>
        <li>
          Prüfe die Zeitzone. Am Anfang ist es deine eigene; ändere sie, wenn das Event in einer anderen Zone
          geplant ist, etwa ein Turnier nach US-Ostküstenzeit.
        </li>
        <li>Feinjustiere bei Bedarf mit den Buttons +15 Min., +1 Std., +1 Tag und +1 Woche.</li>
        <li>Such dir in der Liste das gewünschte Format aus und tippe auf Kopieren.</li>
        <li>Füge den Code in deine Discord-Nachricht ein und sende sie.</li>
      </ol>
      <p>
        Du hast schon einen Unix-Timestamp? Füge ihn ins Unix-Feld ein, und der Generator lädt ihn – egal ob
        in Sekunden oder Millisekunden. So funktioniert er auch als Discord-Zeitumrechner in die andere
        Richtung.
      </p>
      <TimestampFigure
        image="steps"
        alt="Drei Schritte zum Discord-Timestamp-Generator: Datum und Uhrzeit wählen, Format wählen, kopieren und einfügen"
        caption="Uhrzeit wählen, Format aussuchen, dann in Discord kopieren und einfügen."
      />

      <h2>Die Discord-Timestamp-Formate erklärt</h2>
      <p>
        Der Buchstabe am Ende des Codes legt das Format fest. Es gibt neun Stile. Ohne Buchstaben nimmt
        Discord <code>f</code>. Die Beispiele in der Tabelle stammen aus der Discord-Dokumentation; deine
        Leser sehen jeden Stil in ihrer eigenen Sprache und ihrem Uhrzeitformat.
      </p>
      <TimestampFigure
        image="formats"
        alt="Discord-Timestamp-Formate: kurze Uhrzeit, mittlere Uhrzeit, kurzes Datum, langes Datum, Datum mit Uhrzeit und relative Zeit, mit Beispielcodes"
        caption="Alle neun Stile für denselben Zeitpunkt, wie ihn jemand in New York sieht (Bild auf Englisch)."
      />
      <TimestampStyleTable
        headers={["Stil", "Code", "Beispiel", "Ideal für"]}
        styles={timestampStrings[L].styles}
      />
      <p>
        Als Faustregel: Relativ (<code>R</code>) für Countdowns, Volles Datum (<code>F</code>) für Events, bei
        denen der Wochentag zählt, und Kurze Uhrzeit (<code>t</code>) für tägliche Erinnerungen wie „Reset um
        16:20“.
      </p>

      <h2>Einen Discord-Timestamp von Hand schreiben</h2>
      <p>
        Wenn du die Unix-Zeit hast, brauchst du keinen Generator. Das Format ist{" "}
        <code>&lt;t:UNIX:STIL&gt;</code>: ein kleines <code>t</code>, ein Doppelpunkt, der Unix-Timestamp in
        Sekunden, noch ein Doppelpunkt und der Stilbuchstabe – alles in spitzen Klammern und ohne Leerzeichen.{" "}
        <code>&lt;t:1793740800:R&gt;</code> ist ein gültiges Beispiel, <code>&lt;t:1793740800&gt;</code> ohne
        Stil ebenso.
      </p>
      <p>
        Einen Unix-Timestamp bekommst du mit diesem Generator, mit <code>date +%s</code> im Terminal unter
        macOS oder Linux oder mit <code>Math.floor(Date.now() / 1000)</code> in JavaScript. Viele Tools
        liefern Millisekunden (13 Stellen); Discord braucht Sekunden (10 Stellen für aktuelle Daten), also
        streich die letzten drei Ziffern.
      </p>

      <h2>Beispiele aus der Praxis</h2>
      <ul>
        <li>
          <strong>Event-Ankündigungen:</strong> „Filmabend startet <code>&lt;t:1793740800:F&gt;</code> (
          <code>&lt;t:1793740800:R&gt;</code>)“ zeigt das volle Datum und einen Live-Countdown.
        </li>
        <li>
          <strong>Gewinnspiele:</strong> „Gewinnspiel endet <code>&lt;t:1793740800:R&gt;</code>“ zeigt, wie
          viel Zeit bleibt, und wechselt nach dem Ende zu „vor …“.
        </li>
        <li>
          <strong>Raids und Matches:</strong> „Raid um <code>&lt;t:1793740800:t&gt;</code>“ hält eine tägliche
          Uhrzeit kurz und für jeden Spieler richtig.
        </li>
        <li>
          <strong>Serverregeln und Hinweise:</strong> „Regeln aktualisiert am{" "}
          <code>&lt;t:1793740800:D&gt;</code>“ nennt das Datum ohne Uhrzeit.
        </li>
        <li>
          <strong>Stream-Pläne:</strong> Führe jeden Stream mit <code>&lt;t:…:s&gt;</code> auf, für kompaktes
          Datum und Uhrzeit pro Zeile.
        </li>
      </ul>

      <h2>Alle sehen ihre eigene Uhrzeit</h2>
      <p>
        Weil der Code einen einzigen Zeitpunkt speichert, stimmt dieselbe Nachricht überall auf der Welt.
        Wähle die Zeitzone, in der das Event geplant ist, und Discord rechnet für alle anderen um.
      </p>
      <TimestampFigure
        image="zones"
        alt="Ein Discord-Timestamp, der in New York, London und Sydney jeweils die richtige Ortszeit zeigt"
        caption="Ein Code, drei Städte: Alle Leser sehen ihre Ortszeit (Bild auf Englisch)."
      />

      <h2>Häufige Probleme</h2>
      <ul>
        <li>
          <strong>Er erscheint als normaler Text.</strong> Prüfe die Syntax: Er muss mit einem kleinen{" "}
          <code>&lt;t:</code> beginnen, der Stil muss einer der neun Buchstaben sein (Groß- und
          Kleinschreibung zählt), und innerhalb der Klammern darf kein Leerzeichen stehen. Codeblöcke und
          Inline-Code (Backticks) verhindern die Darstellung ebenfalls.
        </li>
        <li>
          <strong>Das Datum liegt Tausende Jahre entfernt.</strong> Die Zahl ist in Millisekunden. Nimm
          Sekunden; dieser Generator gibt immer Sekunden aus.
        </li>
        <li>
          <strong>Die Uhrzeit ist um ein paar Stunden verschoben.</strong> Beim Erstellen wurde die falsche
          Zeitzone gewählt. Wähle die tatsächliche Zone des Events und kopiere den Code erneut.
        </li>
        <li>
          <strong>In einem Namen funktioniert es nicht.</strong> Timestamps werden nur im Nachrichtentext und
          in Beschreibungen und Feldern von Bot-Embeds dargestellt. Benutzernamen, Anzeigenamen,
          Server-Nicknames und Kanalnamen zeigen den Code als Text.
        </li>
      </ul>

      <h2>Tipps</h2>
      <ul>
        <li>
          Kombiniere zwei Stile wie <code>&lt;t:X:F&gt; (&lt;t:X:R&gt;)</code>, damit alle Datum und Restzeit
          sehen. Der Button „Kombiniert kopieren“ erledigt das für dich.
        </li>
        <li>
          Nutze Relativ für Countdowns. Er aktualisiert sich selbst, du musst die Nachricht nie bearbeiten.
        </li>
        <li>
          Prüfe vor dem Posten die Zeitzone, besonders rund um die Zeitumstellung. Der Generator warnt dich,
          wenn eine Uhrzeit an diesem Tag ausfällt oder doppelt vorkommt.
        </li>
      </ul>
    </>
  );
}

export const timestampDe: ToolPageContent = {
  name: "Discord-Timestamp-Generator",
  title: "Discord-Timestamp-Generator – Ortszeit für alle",
  description:
    "Erstelle Discord-Timestamps, die allen die richtige Uhrzeit in ihrer Zeitzone zeigen. Datum, Format oder Countdown wählen und den Code kopieren.",
  h1: "Discord-Timestamp-Generator",
  intro:
    "Wähle Datum und Uhrzeit und erhalte einen Code, der allen auf deinem Server die richtige Ortszeit zeigt.",
  toolLabel: "Discord-Timestamp-Generator",
  faqHeading: "Häufige Fragen zu Discord-Timestamps",
  faqs: [
    {
      question: "Was ist ein Discord-Timestamp?",
      answer:
        "Ein kurzer Code wie <t:1793740800:F>, den Discord beim Senden der Nachricht in ein Datum oder eine Uhrzeit umwandelt. Statt einer festen Uhrzeit speichert er einen Zeitpunkt in Unix-Zeit, damit Discord ihn in der Zeitzone jedes Lesers anzeigen kann.",
    },
    {
      question: "Wie mache ich einen Countdown in Discord?",
      answer:
        "Nutze den Stil Relativ, R. Wähle im Generator Datum und Uhrzeit des Events, kopiere den Relativ-Code und füge ihn in deine Nachricht ein. Discord zeigt ihn als „in 3 Tagen“ oder „in 2 Stunden“, hält ihn aktuell und wechselt zu „vor 2 Stunden“, sobald der Zeitpunkt vorbei ist.",
    },
    {
      question: "Werden Discord-Timestamps in jeder Zeitzone richtig angezeigt?",
      answer:
        "Ja, genau dafür sind sie da. Der Code speichert einen einzigen Zeitpunkt, und die Discord-App jeder Person zeigt ihn in ihrer eigenen Zeitzone und Sprache – niemand muss im Kopf umrechnen.",
    },
    {
      question: "Warum funktioniert mein Discord-Timestamp nicht?",
      answer:
        "Häufige Ursachen sind ein Tippfehler im Code (er muss <t: gefolgt von der Zahl sein, ohne Leerzeichen), ein großes T am Anfang, ein Stilbuchstabe, den Discord nicht kennt, oder ein Timestamp in Millisekunden statt Sekunden. Eine 13-stellige Zahl ist in Millisekunden; streich die letzten drei Ziffern. In Benutzernamen, Anzeigenamen, Nicknames und Kanalnamen funktionieren Timestamps außerdem nicht.",
    },
    {
      question: "Kann ich Timestamps in Embeds oder Bots verwenden?",
      answer:
        "Ja. Ein Bot kann denselben <t:...>-Code in einer normalen Nachricht senden, und er funktioniert auch in Beschreibungen und Feldwerten von Embeds. Bots sollten die Unix-Zeit in Sekunden senden. Embeds haben außerdem ein eigenes Timestamp-Feld, das ein ISO-8601-Datum erwartet und es unten im Embed anzeigt.",
    },
    {
      question: "Funktionieren Discord-Timestamps auf dem Handy?",
      answer:
        "Ja. Sie werden in den Discord-Apps für iOS und Android sowie am Computer und im Browser dargestellt, und jedes Gerät nutzt seine eigene Zeitzone und Sprache.",
    },
    {
      question: "Was ist ein Unix-Timestamp?",
      answer:
        "Die Anzahl der Sekunden seit dem 1. Januar 1970, 00:00:00 UTC. Weil er von einem festen Zeitpunkt aus zählt, bedeutet er überall denselben Moment – deshalb nutzt Discord ihn. 1793740800 ist zum Beispiel der 3. November 2026 um 21:20 UTC.",
    },
  ],
  Article,
  relatedHeading: "Weitere Tools",
  related: [
    { href: hrefFor(L, "/"), label: "Discord-Schriftarten-Generator" },
    { href: hrefFor(L, "/discord-text-formatting"), label: "Anleitung zur Discord-Textformatierung" },
    { href: hrefFor(L, "/discord-name-generator"), label: "Discord-Namen-Generator" },
  ],
};
