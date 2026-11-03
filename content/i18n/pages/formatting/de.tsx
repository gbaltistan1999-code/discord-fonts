import type { FormattingPageContent } from "../../types";
import { AnsiExample, LocalLink, MarkdownCheatSheet } from "../shared";

const L = "de";

function Guide() {
  return (
    <div className="prose-content">
      <h2 id="was-ist-discord-markdown">Was ist Discord-Textformatierung?</h2>
      <p>
        Discord nutzt eine einfache Auszeichnungssprache namens <strong>Markdown</strong>. Du setzt ein paar
        Symbole um deine Wörter, und Discord macht daraus beim Senden fetten, kursiven, unterstrichenen,
        durchgestrichenen oder versteckten Text. Markdown ist in Discord eingebaut und funktioniert für alle
        gleich – aber nur in Nachrichten und ein paar Profilfeldern wie „Über mich“. Auf Benutzernamen,
        Anzeigenamen oder Servernamen hat es keine Wirkung.
      </p>

      <h2 id="spickzettel">Discord-Markdown-Spickzettel</h2>
      <MarkdownCheatSheet
        headers={["Stil", "Das tippst du", "Gut für"]}
        rows={[
          ["Fett", "Betonung, Schlüsselwörter"],
          ["Kursiv", "Tonfall, Titel"],
          ["Fett kursiv", "Starke Betonung"],
          ["Unterstrichen", "Hervorhebungen (kombinierbar, z. B. __**Text**__)"],
          ["Durchgestrichen", "Korrekturen und Witze"],
          ["Spoiler", "Handlung oder Lösungen verstecken, bis jemand klickt"],
          ["Inline-Code", "Befehle, kurzer Code"],
          ["Codeblock", "Mehrzeiliger Code, ASCII-Art, Monospace-Text"],
          ["Zitat", "Eine Zeile zitieren"],
          ["Mehrzeiliges Zitat", "Alles danach zitieren"],
          ["Überschriften", "Große, mittlere und kleine Titel"],
          ["Untertext", "Kleine graue Fußnoten"],
          ["Liste", "Aufzählungen und nummerierte Listen"],
          ["Maskierter Link", "Klickbare Textlinks"],
        ]}
      />
      <p>
        Datum und Uhrzeit haben eine eigene Syntax: <code>&lt;t:1793740800:R&gt;</code> wird zu einem
        Live-Countdown, der in der Zeitzone jedes Lesers erscheint. Erstelle ihn mit dem{" "}
        <LocalLink locale={L} path="/discord-timestamp-generator">
          Discord-Timestamp-Generator
        </LocalLink>
        .
      </p>

      <h2 id="ueberschriften-und-untertext">Überschriften und Untertext</h2>
      <p>
        Beginne eine Zeile mit <code>#</code>, <code>##</code> oder <code>###</code> und einem Leerzeichen, um
        eine große, mittlere oder kleine Überschrift zu erstellen. Überschriften sind ideal für Regelkanäle,
        Ankündigungen und Event-Posts. Für das Gegenteil beginnst du die Zeile mit <code>-#</code> und einem
        Leerzeichen: Das ergibt kleinen, dezenten Untertext für Fußnoten, Credits oder „bearbeitet“-Hinweise.
        Beides funktioniert nur ganz am Zeilenanfang.
      </p>

      <h2 id="farbiger-text">So schreibst du farbigen Text in Discord</h2>
      <p>
        Für normale Nachrichten hat Discord keine Farboption, aber Codeblöcke mit der Sprache{" "}
        <code>ansi</code> unterstützen Terminal-Farbcodes. Das Tool oben erstellt sie für dich: Textfarbe,
        optionalen Hintergrund, fett oder unterstrichen wählen und das Ergebnis kopieren. Im Hintergrund
        entsteht ein Block wie dieser, bei dem jeder Farbcode mit einem unsichtbaren Escape-Zeichen beginnt:
      </p>
      <AnsiExample text="Dein blauer Text" />
      <p>
        Die Farben erscheinen in der Desktop-App von Discord und im Browser. Die Handy-Apps zeigen den Text
        derzeit in einem normalen Codeblock ohne Farbe – verlass dich also nicht allein auf Farbe, um etwas
        mitzuteilen.
      </p>

      <h2 id="codebloecke">Codeblöcke und Syntax-Hervorhebung</h2>
      <p>
        Setz Text zwischen drei Backticks, um einen Codeblock zu erstellen. Schreib direkt nach den öffnenden
        Backticks einen Sprachnamen wie <code>```js</code>, <code>```py</code> oder <code>```css</code>, und
        Discord hebt die Syntax hervor. Codeblöcke behalten außerdem alle Leerzeichen genau bei – praktisch
        für Tabellen und Textkunst.
      </p>

      <h2 id="kombinieren-und-maskieren">Formatierungen kombinieren und maskieren</h2>
      <p>
        Die meisten Stile lassen sich kombinieren. <code>__***Text***__</code> ist gleichzeitig fett, kursiv
        und unterstrichen, und <code>||**Text**||</code> versteckt fetten Text hinter einem Spoiler. Willst du
        die Symbole selbst zeigen statt der Formatierung, setz einen Backslash davor:{" "}
        <code>\*nicht kursiv\*</code>. Text zwischen einzelnen Backticks zeigt die Symbole ebenfalls wörtlich.
      </p>

      <h2 id="markdown-oder-unicode">Markdown oder Unicode-Schriftarten?</h2>
      <p>
        Markdown ändert, wie Discord normalen Text <em>darstellt</em>, Unicode-Schriftarten ändern die Zeichen
        selbst. Deshalb ist Markdown ideal für gut lesbare Formatierung in Nachrichten, und Unicode-Stile sind
        der einzige Weg zu fetten, geschwungenen oder Fraktur-Buchstaben in einem Anzeigenamen oder
        Kanalnamen. Probiere beides mit dem{" "}
        <LocalLink locale={L} path="/">
          Discord-Schriftarten-Generator
        </LocalLink>{" "}
        aus oder spring direkt zu einem Stil wie{" "}
        <LocalLink locale={L} path="/discord-font-generator/bold">
          Fettschrift
        </LocalLink>{" "}
        oder{" "}
        <LocalLink locale={L} path="/discord-font-generator/cursive">
          Schreibschrift
        </LocalLink>
        .
      </p>

      <h2 id="tipps">Tipps für gut lesbare Formatierung</h2>
      <ul>
        <li>Gliedere lange Posts mit Überschriften, statt alles fett zu machen.</li>
        <li>Setz Spoiler immer um Handlungsdetails, Rätsellösungen und alles Heikle.</li>
        <li>Nutze Farbe nur zur Betonung und Deko, denn auf dem Handy ist sie nicht zu sehen.</li>
        <li>Screenreader kommen mit Markdown gut zurecht – es ist zugänglicher als Unicode-Schrift.</li>
      </ul>
    </div>
  );
}

export const formattingDe: FormattingPageContent = {
  name: "Discord-Textformatierung",
  title: "Discord-Textformatierung – Fett, Farbe und Markdown",
  description:
    "Lerne die Discord-Textformatierung: fett, kursiv, unterstrichen, Spoiler, Überschriften, Untertext, Codeblöcke und farbiger Text. Markdown mit einem Klick kopieren.",
  h1: "Discord-Textformatierung: Markdown-Anleitung und Generator",
  intro:
    "Tipp deine Nachricht einmal ein und kopiere sie fett, kursiv, unterstrichen, als Spoiler, Überschrift, Untertext, Code oder farbig – alles mit dem eingebauten Markdown von Discord.",
  toolLabel: "Discord-Markdown-Formatierungstool",
  appName: "Discord-Textformatierungstool",
  Guide,
};
