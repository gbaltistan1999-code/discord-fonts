import Link from "next/link";
import type { HomeContent } from "../types";
import { ExamplesFigure, fancy, inlineLink, styleLinkFor } from "./shared";

const styleLink = styleLinkFor("de");

function Article() {
  return (
    <div className="prose-content">
      <h2 id="was-sind-discord-schriftarten">Was sind Discord-Schriftarten und wie funktionieren sie?</h2>
      <p>
        Discord-Schriftarten sind keine Schriftarten im üblichen Sinn. Discord lässt dich keine Schrift für
        deinen Namen oder deine Nachrichten auswählen, deshalb nutzt ein Generator einen Trick: Er ersetzt
        jeden normalen Buchstaben durch ein ähnlich aussehendes Zeichen aus <strong>Unicode</strong>, dem
        weltweiten Standard, der jedem Zeichen auf jedem Gerät eine Nummer gibt. Unicode enthält vollständige
        Alphabete für Mathematik, Wissenschaft und andere Schriftsysteme, etwa {fancy("bold-serif", "fette")},{" "}
        {fancy("script", "geschwungene")}, {fancy("fraktur", "Fraktur")}- oder{" "}
        {fancy("small-caps-all", "Kapitaelchen")}-Buchstaben.
      </p>
      <p>
        Weil es Zeichen sind und keine Schriftdatei, wandert der Stil mit dem Text mit. Fügst du 𝐃𝐢𝐬𝐜𝐨𝐫𝐝 als
        Server-Nickname ein, sehen alle auf dem Server die fette Version, ohne etwas zu installieren. Derselbe
        Trick funktioniert fast überall, wo man Text eingeben kann. Deshalb heißen diese Stile auch schöne
        Schrift oder Copy-and-paste-Schriftarten.
      </p>
      <p>
        Wichtig für Deutsch: Unicode hat gestaltete Versionen nur für die Grundbuchstaben A bis Z und für
        Ziffern. Umlaute und das ß (ä, ö, ü, ß) bleiben normal, „Grüße“ erscheint also mit einem unveränderten
        „ü“ und „ß“. Für ein einheitliches Ergebnis kannst du ae, oe, ue und ss schreiben.
      </p>
      <ExamplesFigure
        alt="Beispiele für Discord-Schriftarten: die Wörter Discord Fonts in Fett, Schreibschrift, Fraktur, Kapitälchen, Blasen und verziert"
        caption="Dieselben zwei Wörter in sechs Stilen, alle aus normalen Unicode-Zeichen."
      />

      <h2 id="anleitung">So benutzt du den Discord-Schriftarten-Generator</h2>
      <ol>
        <li>
          <strong>Gib deinen Text ein</strong> – oben im Feld. Alle Stile aktualisieren sich sofort.
        </li>
        <li>
          <strong>Stöbere durch die Stile</strong> oder nutze die Filter (Fett, Schreibschrift, Fraktur,
          Dekorativ, Aesthetic und Glitch), um die Liste einzugrenzen. Tippe auf{" "}
          <em>Weitere Stile anzeigen</em>, um alle Optionen zu sehen.
        </li>
        <li>
          <strong>Prüfe die Länge</strong>, wenn es um einen Namen geht. Stile über dem Discord-Limit von 32
          Zeichen sind mit <em>32+</em> markiert.
        </li>
        <li>
          <strong>Tippe auf Kopieren</strong> (oder auf den Text selbst). Die Meldung „Kopiert!“ bestätigt,
          dass er in deiner Zwischenablage ist.
        </li>
        <li>
          <strong>Füge ihn in Discord ein</strong> – mit Strg+V, Cmd+V oder langem Tippen auf dem Handy – und
          speichere.
        </li>
      </ol>

      <h2 id="namen-aendern">So änderst du die Schrift von Namen, Nickname oder Server in Discord</h2>
      <p>
        Discord stellt seine Menüs ab und zu um, deshalb können die genauen Bezeichnungen in deiner
        App-Version etwas abweichen. Die Felder selbst bleiben aber gleich.
      </p>
      <h3>Anzeigename</h3>
      <p>
        Der Anzeigename steht auf jedem Server neben deinen Nachrichten. Öffne die Benutzereinstellungen, geh
        zum Profilbereich, füge deinen Text in das Feld für den Anzeigenamen ein und speichere. Er darf bis zu
        32 Zeichen lang sein.
      </p>
      <h3>Server-Nickname</h3>
      <p>
        Für eine andere Schrift auf nur einem Server öffnest du das Menü dieses Servers, wählst die Option zum
        Bearbeiten deines Serverprofils und fügst den Text als Nickname ein. Manche Server verbieten
        Mitgliedern, ihren Nickname zu ändern – dann musst du ein Moderationsteam fragen.
      </p>
      <h3>Server- und Kanalnamen</h3>
      <p>
        Wenn du einen Server verwaltest, füge den Text in den Servernamen in den Servereinstellungen ein oder
        bearbeite einen Kanal und füge ihn in den Namen ein. Kanalnamen wie „︱𝐠𝐞𝐧𝐞𝐫𝐚𝐥“ sind ein beliebter
        Weg, einen Server aufgeräumt wirken zu lassen. Halte wichtige Kanäle lesbar, damit sich neue
        Mitglieder zurechtfinden.
      </p>
      <h3>Über-mich-Bereich und Nachrichten</h3>
      <p>
        Dein „Über mich“-Text und normale Nachrichten akzeptieren alles auf dieser Seite, auch längere
        verzierte Stile. Dort kannst du am besten experimentieren.
      </p>

      <h2 id="beste-schriftarten">Die besten Discord-Schriftarten für Namen, Bios und Server</h2>
      <p>Welche Schrift passt, hängt davon ab, wo andere sie sehen:</p>
      <div className="overflow-x-auto">
        <table>
          <thead>
            <tr>
              <th scope="col">Wo</th>
              <th scope="col">Gute Wahl</th>
              <th scope="col">Warum</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Anzeigename und Nickname</td>
              <td>
                {styleLink("bold", "Fett")}, {styleLink("cursive", "Fette Schreibschrift")},{" "}
                {styleLink("small-caps", "Kapitälchen")}
              </td>
              <td>Auch klein gut lesbar und auf fast jedem Gerät unterstützt.</td>
            </tr>
            <tr>
              <td>„Über mich“</td>
              <td>{styleLink("aesthetic", "Aesthetic")}, Glitzer- und Kawaii-Rahmen</td>
              <td>Mehr Platz für Deko, und die Lesbarkeit zählt weniger als bei einem Namen.</td>
            </tr>
            <tr>
              <td>Servername</td>
              <td>{styleLink("gothic", "Fraktur")}, Doppelstrich, Königsrahmen</td>
              <td>Ein starker Titelstil gibt dem Server ein klares Thema.</td>
            </tr>
            <tr>
              <td>Kanalnamen</td>
              <td>Kapitälchen, fette serifenlose Schrift, Festbreite</td>
              <td>Kompakte Stile, die die Kanalliste übersichtlich halten.</td>
            </tr>
            <tr>
              <td>Nachrichten und Memes</td>
              <td>
                {styleLink("glitch", "Glitch")}, {styleLink("upside-down", "Umgedreht")},{" "}
                {styleLink("bubble", "Blasen")}
              </td>
              <td>Auffällig für Witze und Ankündigungen, aber sparsam einsetzen.</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        Eine gute Regel: Alles, was andere schnell lesen müssen – etwa einen Namen, den sie mit @ erwähnen
        wollen –, sollte einen klaren Stil haben. Starke Verzierungen hebst du dir für reinen Spaß auf.
      </p>

      <h2 id="textformatierung">Discord-Textformatierung (Markdown) erklärt</h2>
      <p>
        Discord hat auch eine eingebaute Formatierung namens Markdown. Statt Sonderzeichen setzt du Symbole um
        den Text, und Discord formatiert ihn: <code>**fett**</code>, <code>*kursiv*</code>,{" "}
        <code>__unterstrichen__</code>, <code>~~durchgestrichen~~</code> und <code>||Spoiler||</code>. Eine
        Zeile mit <code>#</code> wird zur Überschrift, mit <code>-#</code> zu kleinem Untertext und mit{" "}
        <code>&gt;</code> zum Zitat. Mit Codeblöcken bekommst du Monospace- oder sogar farbigen Text.
      </p>
      <p>
        Markdown funktioniert nur in Nachrichten (und ein paar Profilfeldern). In Namen bewirkt es nichts –
        genau deshalb gibt es Unicode-Schriftarten. Probiere beides mit dem Formatierungstool oben aus oder
        lies die <Link href="/de/discord-text-formatting">vollständige Anleitung zur Textformatierung</Link>.
      </p>

      <h2 id="kaestchen">Warum manche Schriftarten als Kästchen erscheinen</h2>
      <p>
        Sieht jemand leere Rechtecke oder Fragezeichen statt deines Textes, hat sein Gerät keine Schrift mit
        diesen Zeichen. Am Text selbst ist nichts falsch – es ist eine Grenze dieses einen Bildschirms. Ein
        paar praktische Hinweise:
      </p>
      <ul>
        <li>
          <strong>Fette, kursive, geschwungene, Fraktur- und Doppelstrich-Buchstaben</strong> werden von
          aktuellen Versionen von Windows, macOS, iOS und Android unterstützt.
        </li>
        <li>
          <strong>Quadratische, dunkle Blasen- und manche umgedrehten Buchstaben</strong> sind neuer und
          machen auf älteren Handys, Fernsehern und Konsolen am ehesten Probleme.
        </li>
        <li>
          <strong>Stile mit kombinierenden Zeichen</strong> wie durchgestrichen, unterstrichen oder Zalgo
          hängen davon ab, wie ein Gerät die Zeichen stapelt, und können deshalb verrutscht aussehen.
        </li>
        <li>
          Stile mit dem Hinweis <strong>Eingeschränkte Unterstützung</strong> im Generator sind am
          riskantesten. Fahre mit der Maus darüber oder tippe darauf, um mehr zu erfahren.
        </li>
      </ul>

      <h2 id="barrierefreiheit">Barrierefreiheit: Screenreader und Unicode-Schrift</h2>
      <p>
        Schöne Schrift sieht aus wie Buchstaben, ist für Software aber eine Folge mathematischer oder
        dekorativer Symbole. Viele Screenreader lesen jedes Zeichen mit seinem technischen Namen vor (zum
        Beispiel „mathematical bold capital D“) oder überspringen es, und Suchfunktionen finden es oft nicht.
        Dadurch ist dein Name für Menschen, die Hilfstechnologien nutzen, schwer zu finden und zu verfolgen.
      </p>
      <p>
        Nutze Discord-Schriftarten zur Deko, nicht für Informationen. Lass Regeln, Ankündigungen und alles
        Wichtige in normalem Text, und überlege dir einen klaren Stil für deinen Anzeigenamen, damit andere
        ihn leicht lesen und dich erwähnen können.
      </p>
    </div>
  );
}

export const homeDe: HomeContent = {
  title: "Discord-Schriftarten – Generator zum Kopieren und Einfügen",
  description:
    "Kostenloser Discord-Schriftarten-Generator: Verwandle Text in über 170 Stile zum Kopieren und Einfügen für Namen, Nickname, Server und Nachrichten.",
  h1: "Discord-Schriftarten-Generator – schöne Schrift kopieren und einfügen",
  intro:
    "Verwandle jeden Text in {count} Discord-Schriftarten, von fett und geschwungen bis Fraktur und Glitch. Kopiere einen Stil und füge ihn in deinen Namen, Nickname, Server oder deine Nachrichten ein. Kostenlos, privat und ohne Anmeldung.",
  generatorLabel: "Discord-Schriftarten-Generator",
  formattingTitle: "Discord-Textformatierung",
  formattingIntro: (
    <>
      Fett, Spoiler, Überschriften und farbiger Text nutzen das eingebaute Markdown von Discord. Einmal tippen
      und die Syntax kopieren – oder die{" "}
      <Link href="/de/discord-text-formatting" className={inlineLink}>
        vollständige Formatierungsanleitung
      </Link>{" "}
      lesen. Für Event-Zeiten und Countdowns gibt es den{" "}
      <Link href="/de/discord-timestamp-generator" className={inlineLink}>
        Timestamp-Generator
      </Link>
      .
    </>
  ),
  popularTitle: "Beliebte Discord-Schriftstile",
  popularIntro: "Generatoren für jeweils einen Stil, mit Tipps, wo er am besten funktioniert.",
  moreGenerators: "Weitere Generatoren:",
  socialTitle: "Schriftarten für soziale Netzwerke",
  socialIntro:
    "Generatoren für schöne Schrift in jeder App, mit Tipps, was in Namen, Bios und Beiträgen funktioniert.",
  gamingTitle: "Schriftarten für Spiele",
  gamingIntro:
    "Generatoren für stylische Namen in deinen Lieblingsspielen, mit den Namensregeln jedes Spiels.",
  faqHeading: "Häufige Fragen zu Discord-Schriftarten",
  faqs: [
    {
      question: "Was ist eine Discord-Schriftart?",
      answer:
        "Text aus speziellen Unicode-Zeichen, die wie fette, geschwungene, Fraktur- oder andere Buchstaben aussehen. Discord hat keine Schriftauswahl, deshalb erzeugst du die Zeichen hier und fügst sie wie normalen Text in Discord ein.",
    },
    {
      question: "Kann man die Schriftart in Discord ändern?",
      answer:
        "Nicht direkt. In Discord kannst du die Textgröße ändern und in Nachrichten Markdown für fett, kursiv, Überschriften und Ähnliches nutzen, aber keine andere Schrift auswählen. Unicode-Schriftarten sind der Ausweg: Es sind Zeichen und keine Schrifteinstellung, deshalb sehen alle sie.",
    },
    {
      question: "Wie kopiere und füge ich Discord-Schriftarten ein?",
      answer:
        "Gib deinen Text oben in das Feld ein, such dir einen Stil aus und tippe auf Kopieren (oder auf den gestalteten Text). Öffne dann Discord und füge ihn in deinen Anzeigenamen, Server-Nickname, „Über mich“, einen Server- oder Kanalnamen oder eine Nachricht ein.",
    },
    {
      question: "Kann ich eine schöne Schrift im Benutzernamen verwenden?",
      answer:
        "Nicht in deinem eindeutigen @Benutzernamen, der nur Kleinbuchstaben, Zahlen, Unterstriche und Punkte erlaubt. Schöne Schrift funktioniert im Anzeigenamen und in Server-Nicknames – das sind die Namen, die die meisten im Chat sehen.",
    },
    {
      question: "Warum erscheinen manche Schriftarten als Kästchen oder Fragezeichen?",
      answer:
        "Ein Kästchen bedeutet, dass das Gerät keine Schrift mit diesem Zeichen hat. Das passiert meist bei seltenen Symbolen auf älteren Handys und Computern. Stile mit dem Hinweis Eingeschränkte Unterstützung sind am häufigsten betroffen, nimm für Namen also lieber fett, kursiv oder Schreibschrift.",
    },
    {
      question: "Warum ändern sich Umlaute und ß nicht?",
      answer:
        "Unicode hat gestaltete Versionen nur für die Grundbuchstaben A bis Z und für Ziffern. Für ä, ö, ü und ß gibt es keine, deshalb bleiben sie normal. Für ein einheitliches Ergebnis schreib ae, oe, ue und ss.",
    },
    {
      question: "Funktionieren Discord-Schriftarten auf dem Handy?",
      answer:
        "Ja. Du kannst auf iPhone und Android von dieser Seite kopieren und einfügen, und die meisten Stile werden in der Discord-App richtig angezeigt. Die wichtigste Ausnahme ist farbiger ANSI-Text: Die Farben erscheinen bisher nur am Computer und im Web.",
    },
    {
      question: "Verstößt schöne Schrift gegen die Discord-Regeln?",
      answer:
        "Unicode-Zeichen zu verwenden, verstößt nicht an sich gegen die Regeln. Probleme gibt es, wenn ein Name genutzt wird, um sich als jemand anderes auszugeben, die Moderation zu umgehen oder unlesbar zu sein. Server können außerdem eigene Regeln für Nicknames haben – folge der Moderation, wenn sie einen schlichten Namen verlangt.",
    },
    {
      question: "Ist dieser Generator kostenlos und privat?",
      answer:
        "Ja. Er ist kostenlos und ohne Anmeldung, und die Umwandlung passiert komplett in deinem Browser. Der Text, den du eingibst, wird weder an unseren Server gesendet noch dort gespeichert.",
    },
  ],
  Article,
};
