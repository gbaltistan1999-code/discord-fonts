import { fancy } from "../../home/shared";
import type { StylePagesContent } from "../../types";
import { LocalLink } from "../shared";

const L = "de";
const g = (slug: string, label: string) => (
  <LocalLink locale={L} path={`/discord-font-generator/${slug}`}>
    {label}
  </LocalLink>
);

export const stylesDe: StylePagesContent = {
  toolLabel: "{name}",
  moreHeading: "Weitere Discord-Schriftarten-Generatoren",
  outro: (
    <p>
      Noch mehr Auswahl? Der{" "}
      <LocalLink locale={L} path="/">
        Discord-Schriftarten-Generator
      </LocalLink>{" "}
      zeigt alle Stile auf einmal, darunter Fett, Schreibschrift, Fraktur und Glitch.
    </p>
  ),
  pages: {
    bold: {
      name: "Fettschrift-Generator",
      h1: "Discord-Fettschrift-Generator",
      title: "Discord-Fettschrift-Generator – Fetten Text kopieren",
      description:
        "Fetter Text für Discord-Namen, Nicknames und Servertitel. Einmal tippen, eine fette Discord-Schrift (mit oder ohne Serifen, kursiv) kopieren und überall einfügen.",
      intro:
        "Gib unten deinen Text ein und verwandle ihn in fette Unicode-Buchstaben, die überall fett bleiben – auch in Discord-Anzeigenamen und Server-Nicknames, wo Markdown nicht funktioniert.",
      featuredLabel: "Fette Stile",
      body: (
        <>
          <h2>Warum eine fette Discord-Schrift?</h2>
          <p>
            In einer Discord-Nachricht machst du Text fett, indem du ihn in zwei Sternchen setzt, etwa{" "}
            <code>**so**</code>. In Namen wird dieses Markdown aber ignoriert – ein fetter Anzeige- oder
            Kanalname braucht also einen anderen Weg. Dieser Generator ersetzt jeden Buchstaben durch seinen
            fetten Zwilling aus Unicodes Block „Mathematical Alphanumeric Symbols“. Das Ergebnis, etwa{" "}
            {fancy("bold-serif", "Gamer")} oder {fancy("bold-sans", "Gamer")}, ist echter Text, der in jedem
            Unicode-fähigen Feld fett bleibt.
          </p>
          <h2>Welcher fette Stil passt?</h2>
          <ul>
            <li>
              <strong>Fett (mit Serifen)</strong> hat klassische Buchschrift-Buchstaben mit kleinen Füßchen.
              Passt zu seriösen Servernamen und Rollenspielfiguren.
            </li>
            <li>
              <strong>Fett serifenlos</strong> ist klar und modern – die am besten lesbare Wahl für
              Gaming-Namen und Kanaltitel.
            </li>
            <li>
              <strong>Fett kursiv</strong> und <strong>Fett kursiv serifenlos</strong> bringen Bewegung rein,
              ideal für Hype-Kanäle und Esport-Teamtags.
            </li>
            <li>
              <strong>Fette Schreibschrift</strong> und <strong>Fette Fraktur</strong> verbinden Gewicht mit
              Charakter, wenn schlichtes Fett zu brav wirkt.
            </li>
          </ul>
          <h2>Tipps für fette Discord-Namen</h2>
          <p>
            Fette Buchstaben gehören zu den am besten unterstützten Sonderzeichen und werden auf aktuellen
            Windows-, Mac-, iPhone- und Android-Geräten richtig angezeigt. Fett und Fett serifenlos enthalten
            auch Ziffern – praktisch für Clan-Tags wie {fancy("bold-serif", "Team 7")}. Denk daran:
            Anzeigenamen und Nicknames sind auf 32 Zeichen begrenzt; der Zähler unter dem Textfeld zeigt dir,
            wie viele du schon hast.
          </p>
          <p>
            Beachte: Wer in der Mitgliederliste nach „Gamer“ sucht, findet „{fancy("bold-serif", "Gamer")}“
            nicht, weil es andere Zeichen sind. Wenn man dich leicht mit @ erwähnen können soll, lass einen
            Teil des Namens normal oder mach nur ein Wort fett. Für fetten Text in Nachrichten ist normales
            Markdown meist besser – alle Optionen stehen in der{" "}
            <LocalLink locale={L} path="/discord-text-formatting">
              Anleitung zur Discord-Textformatierung
            </LocalLink>
            .
          </p>
          <h2>Ideen für fette Discord-Namen</h2>
          <p>
            Fett wirkt am besten, wenn es etwas Bestimmtes hervorhebt. Mach nur deinen Hauptnamen fett und
            lass den Tag normal, etwa „{fancy("bold-sans", "Nova")} | FPS“, oder nutze fette Ziffern für eine
            Teamnummer wie „{fancy("bold-serif", "Squad 7")}“. Serverbesitzer setzen oft die Kategorien in der
            Kanalliste fett, zum Beispiel „{fancy("bold-sans", "SPRACHKANAELE")}“, damit sie sich von den
            Kanälen darunter abheben. Fett kursiv ist bei Streamern und Creators beliebt, weil es im Chat
            energiegeladen wirkt, ohne schwer lesbar zu sein.
          </p>
        </>
      ),
    },
    cursive: {
      name: "Schreibschrift-Generator",
      h1: "Discord-Schreibschrift-Generator",
      title: "Discord-Schreibschrift – Geschwungenen Text kopieren",
      description:
        "Verwandle deinen Namen in elegante Discord-Schreibschrift. Script-, fette Script- und kursive Schriften zum Kopieren für Nicknames, Bios und Server.",
      intro:
        "Gib deinen Text einmal ein und erhalte geschwungene Script-, fette Script- und kursive Buchstaben für deinen Anzeigenamen, dein „Über mich“ oder deinen Servernamen.",
      featuredLabel: "Schreibschrift-Stile",
      body: (
        <>
          <h2>Was ist eine Discord-Schreibschrift?</h2>
          <p>
            Schreibschrift- oder Script-Text wie {fancy("script", "Starlight")} oder{" "}
            {fancy("bold-script", "Starlight")} stammt aus den Script-Alphabeten von Unicode. Sie wurden für
            mathematische Notation geschaffen, doch ihr handschriftlicher Look hat sie zu einer der
            beliebtesten Arten gemacht, einen Discord-Namen zu verzieren. Weil es Zeichen und keine
            Formatierung sind, bleiben die Schwünge auch dort erhalten, wo Markdown-Kursiv nicht hinkommt,
            etwa in Nicknames und Kanalnamen.
          </p>
          <h2>Schreibschrift, Fette Schreibschrift und Kursiv</h2>
          <p>
            <strong>Schreibschrift</strong> ist leicht und elegant, perfekt für Aesthetic-Profile, Kunstserver
            und sanfte Themen. Einige Großbuchstaben (B, E, F, H, I, L, M und R) sowie die kleinen e, g und o
            stammen aus einem älteren Unicode-Block und können in manchen Schriften etwas anders aussehen als
            ihre Nachbarn.
          </p>
          <p>
            <strong>Fette Schreibschrift</strong> nutzt einen einheitlichen Satz kräftigerer Striche – klein
            besser lesbar und in der Mitgliederliste meist schöner. Wenn du nur eine Schreibschrift für einen
            Namen wählst, dann diese.
          </p>
          <p>
            <strong>Kursiv</strong> und <strong>Kursiv serifenlos</strong> sind geneigt statt verbunden – eine
            dezente Wahl, wenn volle Schreibschrift zu verspielt wirkt.
          </p>
          <h2>Wo Schreibschrift am besten aussieht</h2>
          <ul>
            <li>Anzeigenamen von Künstlern, Autoren und Rollenspielfiguren.</li>
            <li>„Über mich“-Texte, besonders mit Verzierungen wie Verziert oder Glitzer.</li>
            <li>Servernamen für gemütliche, kreative oder Community-Räume.</li>
            <li>Titel von Willkommens- und Regelkanälen, kombiniert mit einer normalen Beschreibung.</li>
          </ul>
          <p>
            Script-Buchstaben sind dünn und auf kleinen Handybildschirmen oder im Dunkelmodus bei wenig
            Helligkeit schwer zu lesen. Prüfe das Ergebnis in der Liste, bevor du dich festlegst, und halte
            den Namen kurz. Für einen sanften, aber gut lesbaren Look probier lieber den{" "}
            {g("small-caps", "Kapitälchen-Generator")}.
          </p>
          <h2>Namensideen in Schreibschrift</h2>
          <p>
            Kurze Namen sehen in Schreibschrift am besten aus. Ein einzelnes Wort wie „
            {fancy("bold-script", "Luna")}“ oder „{fancy("script", "Velvet")}“ liest sich wunderschön, lange
            Sätze werden schnell zum Schnörkel-Knäuel. Viele kombinieren einen Schreibschrift-Namen mit einem
            schlichten Symbol, etwa „༺ {fancy("bold-script", "Rose")} ༻“, oder nutzen Schreibschrift nur für
            den ersten Buchstaben. Hat dein Server ein sanftes oder kreatives Thema, schafft ein Servername in
            Schreibschrift mit normalen Kanalnamen Stimmung, ohne die Lesbarkeit zu opfern.
          </p>
        </>
      ),
    },
    gothic: {
      name: "Frakturschrift-Generator",
      h1: "Discord-Frakturschrift-Generator",
      title: "Discord-Frakturschrift – Altdeutsche Schrift kopieren",
      description:
        "Erstelle Discord-Text in Fraktur und fetter gebrochener Schrift. Kopiere altdeutsche Discord-Schriften für Servernamen, Rollen und Nicknames.",
      intro:
        "Verwandle normalen Text in dramatische gebrochene Schrift. Diese Discord-Schriften nutzen Fraktur-Zeichen, die wie alte Druckschrift aussehen, und lassen sich überall in Discord einfügen.",
      featuredLabel: "Fraktur-Stile",
      body: (
        <>
          <h2>Fraktur: die gotische Discord-Schrift</h2>
          <p>
            Gotischer Text wie {fancy("fraktur", "Dark Knight")} oder {fancy("bold-fraktur", "Dark Knight")}{" "}
            nutzt die Fraktur-Buchstaben von Unicode – einen Stil nach der gebrochenen Schrift, die
            jahrhundertelang im deutschen Buchdruck üblich war. Er erinnert an alte Handschriften,
            Zeitungsköpfe und Tattoo-Designs.
          </p>
          <h2>Fraktur-Stile in diesem Generator</h2>
          <ul>
            <li>
              <strong>Fraktur</strong> ist die klassische, leichtere Fraktur. Elegant, aber klein schwer zu
              lesen.
            </li>
            <li>
              <strong>Fette Fraktur</strong> ist kräftiger und in Mitgliederlisten viel besser lesbar – die
              beste Wahl für einen Anzeigenamen in Fraktur.
            </li>
            <li>
              <strong>Gotisches Kreuz</strong>, <strong>Gekrönt</strong>, <strong>Königsrahmen</strong> und{" "}
              <strong>Gekreuzte Schwerter</strong> rahmen die Buchstaben mit Symbolen für einen
              mittelalterlichen oder Clan-Look.
            </li>
            <li>
              <strong>Runen-Stil</strong> leiht sich ähnliche Zeichen aus der Cherokee-Silbenschrift für einen
              alten, eingemeißelten Eindruck.
            </li>
          </ul>
          <h2>Ideen für Fraktur auf Discord</h2>
          <p>
            Fraktur passt zu Horror-, Fantasy-, Metal- und Rollenspiel-Communitys. Sie macht sich gut in
            Servernamen, Teamrollen und Kategorie-Überschriften. Ein einzelnes Fraktur-Wort setzt den Ton,
            etwa „{fancy("bold-fraktur", "The Crypt")}“ für einen Sprachkanal, während der Rest des Servers
            lesbar bleibt.
          </p>
          <p>
            Fraktur hat keine Ziffern, Zahlen bleiben also normal. Einige Großbuchstaben (C, H, I, R und Z) im
            leichten Stil stammen aus einem anderen Unicode-Block und können auf manchen Geräten etwas anders
            aussehen. Wenn du es noch heftiger willst, kombiniere Fette Fraktur mit dem{" "}
            {g("glitch", "Glitch-Schrift-Generator")} für einen verfluchten Look – oder bleib klar mit dem{" "}
            {g("bold", "Fettschrift-Generator")}.
          </p>
          <h2>Ideen für Server- und Rollennamen</h2>
          <p>
            Gebrochene Schrift glänzt in Titeln. Servernamen wie „{fancy("bold-fraktur", "Shadow Realm")}“
            oder „꧁༒☬ {fancy("bold-fraktur", "Nightfall")} ☬༒꧂“ signalisieren sofort ein düsteres oder
            mittelalterliches Thema. Auch Rollennamen passen, weil sie in der Mitgliederliste und in Profilen
            erscheinen: „{fancy("bold-fraktur", "Overlord")}“, „♛ {fancy("bold-fraktur", "Royal Guard")} ♛“
            oder „{fancy("fraktur", "Knight")}“ fühlen sich in Rollenspiel- und Gilden-Servern zu Hause. Bleib
            bei ein oder zwei Wörtern – lange Sätze in Fraktur ermüden, und viele überspringen sie.
          </p>
        </>
      ),
    },
    "small-caps": {
      name: "Kapitälchen-Generator",
      h1: "Discord-Kapitälchen-Generator",
      title: "Discord-Kapitälchen – Kleine Schrift kopieren und einfügen",
      description:
        "Kapitälchen und kleine Schrift für Discord. Kopiere ᴛɪɴʏ ᴄᴀᴘꜱ, hoch- und tiefgestellten Text für minimalistische Namen, Bios und Kanäle.",
      intro:
        "Hol dir klare, minimalistische Kapitälchen und kleine Schrift für dein Discord-Profil. Gib deine Wörter ein und kopiere die Version, die zu deinem Stil passt.",
      featuredLabel: "Kapitälchen-Stile",
      body: (
        <>
          <h2>Was sind Kapitälchen?</h2>
          <p>
            Kapitälchen sind Großbuchstaben in der Höhe von Kleinbuchstaben. In Discord geben sie Namen einen
            ruhigen, minimalistischen Look: {fancy("small-caps-all", "midnight")} statt Midnight. Unicode hat
            nie ein komplettes Kapitälchen-Alphabet bekommen, deshalb sammeln Generatoren ähnliche Zeichen aus
            dem phonetischen Alphabet. Die meisten passen perfekt; q und x haben keine echten Kapitälchen,
            also nehmen wir die ähnlichsten lesbaren Zeichen.
          </p>
          <h2>Kapitälchen und Mini-Kapitälchen</h2>
          <p>
            <strong>Kapitälchen</strong> lässt deine Großbuchstaben groß und verkleinert den Rest – bei Namen
            liest sich das natürlich: {fancy("small-caps", "Midnight")}. <strong>Mini-Kapitälchen</strong>{" "}
            verkleinert alles für einen einheitlichen, zurückhaltenden Look:{" "}
            {fancy("small-caps-all", "Midnight")}. Beide werden auf modernen Handys und Computern gut
            unterstützt und gehören damit zu den sichersten Zierschriften für Anzeigenamen.
          </p>
          <h2>Hoch- und tiefgestellte Schrift</h2>
          <p>
            <strong>Hochgestellt</strong> hebt Buchstaben über die Zeile ({fancy("superscript", "tiny")}),{" "}
            <strong>tiefgestellt</strong> senkt sie ab. Das ist lustig für Flüstern, Fußnoten und süße Bios,
            aber Unicode enthält nur manche Buchstaben: Es gibt kein hochgestelltes q, und tiefgestellt fehlt
            fast ein Drittel des Alphabets. Diese Buchstaben bleiben normal, also prüf das Ergebnis vor dem
            Verwenden.
          </p>
          <h2>Die besten Einsätze für Kapitälchen auf Discord</h2>
          <ul>
            <li>
              Kanalnamen wie ︱{fancy("small-caps-all", "rules")} oder ︱{fancy("small-caps-all", "news")} für
              eine aufgeräumte, einheitliche Seitenleiste.
            </li>
            <li>Anzeigenamen, die stylish wirken, ohne schwer lesbar zu sein.</li>
            <li>
              Rollennamen, bei denen kurze Labels wie {fancy("small-caps-all", "moderator")} in der
              Mitgliederliste sauber aussehen.
            </li>
            <li>Aesthetic-Bios in Kombination mit den Verzierungen Eckklammern oder Herzen.</li>
          </ul>
          <p>
            Weil Kapitälchen zum phonetischen Alphabet gehören, lesen Screenreader sie mitunter seltsam vor –
            wichtige Infos also in normalem Text lassen. Für weitere sanfte Stile schau beim{" "}
            {g("aesthetic", "Aesthetic-Schrift-Generator")} vorbei.
          </p>
          <h2>Kapitälchen für ein aufgeräumtes Server-Layout</h2>
          <p>
            Server-Designer lieben Kapitälchen, weil alle Kanalnamen gleich hoch werden. Ein beliebtes Muster
            ist ein Emoji, ein dünner Trenner und ein Label in Kapitälchen, etwa „💬︱
            {fancy("small-caps-all", "general")}“ oder „🎮︱{fancy("small-caps-all", "game night")}“. Discord
            zeigt Kanalnamen in Kleinbuchstaben mit Bindestrichen, die Kapitälchen bleiben aber erhalten – das
            macht einen Teil ihres Reizes aus. Wähl einen Trennerstil und nutz ihn überall, damit die
            Kanalliste durchdacht statt zufällig wirkt.
          </p>
        </>
      ),
    },
    aesthetic: {
      name: "Aesthetic-Schrift-Generator",
      h1: "Discord-Aesthetic-Schrift-Generator",
      title: "Aesthetic-Discord-Schriften – Vaporwave und süßer Text",
      description:
        "Aesthetic-Schriften für Discord-Bios und -Namen: Vaporwave, Kapitälchen, Kawaii und Glitzer. Süßen Discord-Text mit einem Klick kopieren.",
      intro:
        "Finde sanfte, süße und Vaporwave-Textstile für dein Discord-Profil. Gib deine Wörter ein und kopiere eine Aesthetic-Schrift mit einem Klick.",
      featuredLabel: "Aesthetic-Stile",
      body: (
        <>
          <h2>Was macht eine Discord-Schrift „aesthetic“?</h2>
          <p>
            Auf Discord meint „aesthetic“ meist weichen, luftigen und verzierten Text, der zu einer Stimmung
            passt: Pastell, Vaporwave, Cottagecore oder Lo-Fi. Es geht weniger um ein Alphabet als um die
            Kombination aus Stilen, Abständen und kleinen Symbolen, damit deine Bio kuratiert wirkt.
          </p>
          <h2>Beliebte Aesthetic-Stile</h2>
          <ul>
            <li>
              <strong>Vaporwave breit</strong> ({fancy("fullwidth", "aesthetic")}) nutzt die breiten
              Buchstaben ostasiatischer Schriften für den Retro-Look der 80er und 90er.{" "}
              <strong>Vaporwave gesperrt</strong> sorgt für noch mehr Luft.
            </li>
            <li>
              <strong>Kapitälchen</strong> und <strong>Mini-Kapitälchen</strong> wirken ruhig und
              minimalistisch und passen zu fast jedem Thema.
            </li>
            <li>
              <strong>Kawaii</strong>, <strong>Glitzer</strong>, <strong>Blumenband</strong>,{" "}
              <strong>Herzen</strong> und <strong>Sakura</strong> umrahmen deinen Text mit süßen Symbolen und
              Emojis.
            </li>
            <li>
              <strong>Doppelstrich</strong>, <strong>Festbreite</strong> und <strong>Gesperrt</strong> sind
              klare Optionen für ein technisches oder minimalistisches Profil.
            </li>
          </ul>
          <h2>Ein Aesthetic-Discord-Profil gestalten</h2>
          <p>
            Wähl ein oder zwei Stile und bleib dabei. Zum Beispiel ein Anzeigename in Mini-Kapitälchen, eine
            Überschrift mit Blumenband oben in deinem „Über mich“ und normaler Text für den Rest. Zu viele
            Stile gleichzeitig wirken unruhig und sind schwer zu lesen. Deine Bio ist auf 190 Zeichen
            begrenzt, und Verzierungen und Abstände verbrauchen sie schnell – behalte die Länge im Blick.
          </p>
          <p>
            Breite Buchstaben brauchen doppelt so viel Platz wie normale, ein langer Vaporwave-Name kann in
            der Mitgliederliste also umbrechen oder abgeschnitten werden. Emoji-Rahmen erscheinen auf den
            meisten Geräten farbig, ihr genaues Aussehen hängt aber vom Emoji-Satz der Plattform ab. Für
            rundere Buchstaben probier den {g("bubble", "Blasenschrift-Generator")}, oder geh mit dem{" "}
            {g("small-caps", "Kapitälchen-Generator")} eine Nummer kleiner.
          </p>
          <h2>Eine einfache Aesthetic-Bio-Vorlage</h2>
          <p>
            Keine Idee, wo du anfangen sollst? Eine verzierte Überschrift, zwei oder drei kurze normale Zeilen
            und ein Abschlusssymbol. Zum Beispiel: „⋆˚｡⋆୨୧˚ {fancy("italic", "dreamer")} ˚୨୧⋆｡˚⋆“, dann deine
            Pronomen, Zeitzone und Lieblingsspiele in normalem Text und ein „✧“ am Ende. Die verzierte Zeile
            gibt dem Profil Persönlichkeit, die normalen Zeilen bleiben für alle lesbar – auch für Menschen
            mit Screenreader. Tausch die Überschrift, wenn sich deine Stimmung ändert; der Rest kann bleiben.
          </p>
        </>
      ),
    },
    glitch: {
      name: "Glitch-Schrift-Generator",
      h1: "Discord-Glitch-Schrift-Generator",
      title: "Discord-Glitch-Schrift – Zalgo und gruseliger Text",
      description:
        "Erstelle Glitch- und Zalgo-Text für Discord mit einstellbarer Stärke. Kopiere gruselige, kaputte, durchgestrichene und durchschnittene Discord-Schriften.",
      intro:
        "Zerstöre deinen Text mit Zalgo-Zeichen, Durch- und Schrägstrichen. Stell die Glitch-Stärke ein und kopiere das gruselige Ergebnis direkt in Discord.",
      featuredLabel: "Glitch-Stile",
      body: (
        <>
          <h2>So funktioniert Glitch-Text</h2>
          <p>
            Glitch-Text beruht auf kombinierenden Zeichen: unsichtbaren Markierungen, die sich wie Akzente an
            den vorherigen Buchstaben hängen. Normalerweise bekommt ein Buchstabe höchstens einen Akzent –
            aber nichts hindert dich daran, Dutzende zu stapeln. Türm sie über, durch und unter jedem
            Buchstaben auf, und du bekommst den hohen, kaputten „Zalgo“-Look, der über die Zeilen drumherum
            quillt.
          </p>
          <h2>Glitch-Stile zum Kopieren</h2>
          <ul>
            <li>
              <strong>Zalgo-Glitch</strong>: Stell die Stärke von 1 (leichtes Flackern) bis 10 (totales Chaos)
              ein. Das Ergebnis wird jedes Mal gleich erzeugt, du bekommst also wieder dasselbe.
            </li>
            <li>
              <strong>Durchgestrichen</strong>, <strong>Schräg durchgestrichen</strong>,{" "}
              <strong>Überstrichen</strong>, <strong>Wavy</strong> und <strong>Gepunktet</strong> setzen ein
              einzelnes Zeichen auf jeden Buchstaben für einen dezenteren beschädigten Effekt.
            </li>
            <li>
              <strong>Umgedreht</strong>, <strong>Gespiegelt</strong> und <strong>Rückwärts</strong> drehen
              deinen Text um – für verwirrende, memetaugliche Nachrichten.
            </li>
          </ul>
          <h2>Zalgo verantwortungsvoll nutzen</h2>
          <p>
            Starkes Zalgo kann die Nachrichten anderer überdecken, deshalb verbieten es viele Server, und
            AutoMod-Regeln filtern es oft. In Anzeigenamen kann es außerdem dazu führen, dass dich niemand mit
            @ erwähnen oder in der Mitgliederliste lesen kann. Eine geringe Stärke von 1 bis 3 reicht meist
            für einen gruseligen Namen oder einen Halloween-Eventkanal und wird seltener entfernt.
          </p>
          <p>
            Jedes Betriebssystem zeichnet kombinierende Zeichen anders, derselbe Glitch-Text kann also am
            Computer ordentlich und am Handy chaotisch aussehen. Prüf das Ergebnis und teste es zuerst in
            einem privaten Kanal. Lieber düster, aber lesbar? Probier den{" "}
            {g("gothic", "Frakturschrift-Generator")}. Für einfach durchgestrichenen Text in Nachrichten ist
            Discords eigenes <code>~~durchgestrichen~~</code>-Markdown sauberer; mehr dazu in unserer{" "}
            <LocalLink locale={L} path="/discord-text-formatting">
              Anleitung zur Textformatierung
            </LocalLink>
            .
          </p>
          <h2>Ideen für Glitch-Text</h2>
          <p>
            Glitch-Stile sind perfekt für Horror-Events, Mystery- und ARG-Server sowie „korrumpierte“
            Bot-Personas. Ein Kanalname mit leichtem Zalgo sorgt für eine unheimliche Stimmung, ohne die
            Kanalliste zu überfluten. Durchgestrichener Text eignet sich für Spaß-Korrekturen wie „
            {fancy("strikethrough", "Hausaufgaben")} Gaming“. Für Ankündigungen kombinierst du ein glitchendes
            Wort mit normalem Text, etwa „das {fancy("slashed", "Signal")} ist zurück“, damit die Nachricht
            auf einen Blick verständlich bleibt.
          </p>
        </>
      ),
    },
    bubble: {
      name: "Blasenschrift-Generator",
      h1: "Discord-Blasenschrift-Generator",
      title: "Discord-Blasenschrift – Buchstaben im Kreis",
      description:
        "Blasenschrift für Discord mit eingekreisten Buchstaben, dunklen Blasen und Quadraten. Kopiere ⓑⓤⓑⓑⓛⓔ für Namen, Server und Nachrichten.",
      intro:
        "Pack jeden Buchstaben in einen Kreis oder ein Quadrat. Gib unten Text ein und erstelle Blasenschrift für Discord-Namen, Kanäle und Chats.",
      featuredLabel: "Blasen-Stile",
      body: (
        <>
          <h2>Was ist Blasenschrift?</h2>
          <p>
            Blasenschrift setzt jeden Buchstaben in einen Kreis, etwa {fancy("bubble", "bubble")} oder{" "}
            {fancy("circled", "Blasen")}. Unicode enthält diese „eingekreisten alphanumerischen Zeichen“ für
            nummerierte Listen und Diagramme, und sie sind zu einem verspielten Favoriten für Discord-Namen
            geworden. Anders als Emojis übernehmen sie deine Textfarbe und fügen sich so ins Chat-Design ein.
          </p>
          <h2>Die Blasen-Stile erklärt</h2>
          <ul>
            <li>
              <strong>Blasen</strong> nutzt eingekreiste Kleinbuchstaben für einen weichen, einheitlichen
              Look.
            </li>
            <li>
              <strong>Eingekreist</strong> behält deine Großbuchstaben, damit Namen gut lesbar bleiben:{" "}
              {fancy("circled", "Max")}.
            </li>
            <li>
              <strong>Dunkle Blasen</strong> füllt jeden Kreis ({fancy("negative-circled", "bubble")}) für
              einen kräftigen Kontrast-Effekt.
            </li>
            <li>
              <strong>Quadrate</strong> und <strong>Dunkle Quadrate</strong> ersetzen Kreise durch Kästchen –
              ein blockiger Look, der zu Gaming-Tags passt.
            </li>
            <li>
              <strong>In Klammern</strong> setzt jeden Buchstaben in Klammern für ein
              Retro-Schreibmaschinen-Gefühl.
            </li>
          </ul>
          <h2>Hinweise zur Kompatibilität</h2>
          <p>
            Normale eingekreiste Buchstaben und Zahlen gibt es seit Jahrzehnten in Unicode, sie werden fast
            überall angezeigt. Dunkle Blasen, Quadrate und eingeklammerte Großbuchstaben stammen aus einem
            neueren Block – ältere Android-Handys, manche Smart-TVs und Konsolen zeigen dann Kästchen. Manche
            Apps stellen die dunklen Varianten außerdem als bunte Emojis dar, sodass sie je nach Gerät anders
            aussehen.
          </p>
          <p>
            Eingekreiste Zeichen sind breiter als normale Buchstaben, ein langer Blasen-Name kann in der
            Mitgliederliste also abgeschnitten werden. Am besten funktionieren kurze Namen, Server-Tags und
            einzelne Wörter wie „{fancy("bubble", "gg")}“. Für weitere süße Stile probier den{" "}
            {g("aesthetic", "Aesthetic-Schrift-Generator")}, oder stell alles auf den Kopf mit dem{" "}
            {g("upside-down", "Generator für umgedrehte Schrift")}.
          </p>
          <h2>Ideen für Blasenschrift auf Discord</h2>
          <p>
            Blasenbuchstaben sind super für kurze, knackige Wörter: Reaktionen wie „{fancy("bubble", "lol")}“
            oder „{fancy("negative-circled", "GG")}“, süße Nicknames wie „{fancy("circled", "Mochi")}“ oder
            Labels für Eventkanäle. Eingekreiste Zahlen sind ebenfalls praktisch: Nummerier mit ① ② ③ Regeln
            oder Schritte in einem Post, denn sie bleiben sauber ausgerichtet und leicht zu überfliegen. Der
            Squared-Stil sieht bei Spiel-Tags wie „{fancy("negative-squared", "AFK")}“ großartig aus – prüf es
            aber vorher auf dem Handy, weil manche Geräte quadratische Buchstaben als bunte Emojis zeigen.
          </p>
        </>
      ),
    },
    "upside-down": {
      name: "Generator für umgedrehte Schrift",
      h1: "Discord-Generator für umgedrehte Schrift",
      title: "Umgedrehte Discord-Schrift – Text spiegeln und drehen",
      description:
        "Stell deinen Text auf den Kopf, spiegle ihn oder schreib ihn rückwärts für Discord. Kopiere ʇxǝʇ uʍop ǝpᴉsdn in Nachrichten und Nicknames.",
      intro:
        "Stell deinen Text auf den Kopf. Dieser Generator dreht, spiegelt und kehrt deine Wörter um, damit du sie für Witze, Rätsel und Memes in Discord einfügen kannst.",
      featuredLabel: "Dreh-Stile",
      body: (
        <>
          <h2>So funktioniert umgedrehte Schrift</h2>
          <p>
            Es gibt keine Unicode-Einstellung, die Text dreht. Generatoren suchen deshalb für jeden Buchstaben
            ein Zeichen, das wie dieser Buchstabe um 180 Grad gedreht aussieht, und kehren dann die
            Reihenfolge um. Manche Treffer sind perfekt (aus n wird u, aus p wird d), andere stammen aus dem
            phonetischen Alphabet (ɐ, ǝ, ɹ) oder anderen Schriften. Das Ergebnis liest sich richtig, wenn du
            dein Handy drehst: {fancy("upside-down", "hello discord!")}.
          </p>
          <h2>Umgedreht, Gespiegelt und Rückwärts</h2>
          <ul>
            <li>
              <strong>Umgedreht</strong> dreht Buchstaben vertikal und kehrt sie um – wie eine umgedrehte
              Seite.
            </li>
            <li>
              <strong>Gespiegelt</strong> spiegelt Buchstaben horizontal, als hielte man sie vor einen
              Spiegel; der Text liest sich von rechts nach links.
            </li>
            <li>
              <strong>Rückwärts</strong> schreibt deinen Text einfach rückwärts, ohne die Buchstaben zu
              ändern. Die kompatibelste der drei Varianten.
            </li>
          </ul>
          <h2>Lustige Ideen für umgedrehten Text auf Discord</h2>
          <ul>
            <li>Poste Rätsellösungen oder Spoiler, für die man sich ein bisschen anstrengen muss.</li>
            <li>Reagiere auf chaotische Chat-Momente mit einem umgedrehten „was ist gerade passiert“.</li>
            <li>Nimm am 1. April oder für einen Australien-Witz einen umgedrehten Nickname.</li>
            <li>Versteck Easter Eggs in Kanalthemen und Event-Beschreibungen.</li>
          </ul>
          <h2>Grenzen, die du kennen solltest</h2>
          <p>
            Einige gedrehte Großbuchstaben nutzen seltene Zeichen, die ältere Geräte nicht anzeigen können –
            teste den Text also auf einem anderen Handy, bevor du dich darauf verlässt. Satzzeichen und Zahlen
            werden ebenfalls gedreht, für manche gibt es aber keine gute Entsprechung, sie bleiben dann
            gleich. Umgedrehte Namen sind zudem sehr schwer zu suchen oder mit @ zu erwähnen – besser als
            kurzer Gag als dauerhafte Identität.
          </p>
          <p>
            Für eine wirklich versteckte Nachricht ist Discords Spoiler-Markierung (<code>||Text||</code>) die
            eingebaute Lösung; siehe die{" "}
            <LocalLink locale={L} path="/discord-text-formatting">
              Discord-Formatierungsanleitung
            </LocalLink>
            , oder sorg mit dem {g("glitch", "Glitch-Schrift-Generator")} für zusätzliches Chaos.
          </p>
          <h2>Umgedrehten Text am Handy kopieren</h2>
          <p>
            Tippe am Handy auf den Kopieren-Button, statt den Text von Hand zu markieren. Umgedrehter Text
            läuft von rechts nach links, deshalb erwischt man beim Ziehen der Markierungsgriffe oft den
            falschen Teil oder halbiert ein Zeichen. Lies den Text nach dem Einfügen in Discord einmal mit
            gedrehtem Handy, um sicherzugehen. Schlägt deine Tastatur nach dem Einfügen Korrekturen vor,
            ignorier sie – eine angenommene Korrektur kann ein gedrehtes Wort durch ein normales ersetzen.
          </p>
        </>
      ),
    },
  },
};
