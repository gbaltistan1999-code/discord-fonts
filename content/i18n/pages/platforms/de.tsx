import type { PlatformPagesContent } from "../../types";
import { LocalLink } from "../shared";

const L = "de";

export const platformsDe: PlatformPagesContent = {
  breadcrumb: "{name}-Schriftarten",
  toolLabel: "{name}-Schriftarten-Generator",
  faqHeading: "FAQ zu {name}-Schriftarten",
  notAffiliated: "Diese Website steht in keiner Verbindung zu {name} und wird nicht von {name} unterstützt.",
  outro: (
    <p>
      Alle Stile hier funktionieren auch auf Discord. Der{" "}
      <LocalLink locale={L} path="/">
        Discord-Schriftarten-Generator
      </LocalLink>{" "}
      hat Discord-spezifische Tipps für Namen, Nicknames und das Branding deines Servers.
    </p>
  ),
  pages: {
    "roblox-fonts": {
      h1: "Roblox-Schriftarten-Generator",
      title: "Roblox-Schriftarten – Coolen Text für Roblox kopieren",
      description:
        "Coole Roblox-Schriftarten für Gruppenbeschreibungen, Spieltitel und Bios. Kopiere Unicode-Text und erfahre, wo Roblox ihn akzeptiert.",
      intro:
        "Gib unten Text ein und verwandle ihn in Unicode-Buchstaben für Roblox. Kopiere einen Stil und teste ihn in einer Gruppenbeschreibung, auf einer Spielseite oder in deiner Bio.",
      sampleText: "Roblox Builder",
      featuredLabel: "Am besten für Roblox",
      faqs: [
        {
          question: "Kann ich Zierschriften in meinem Roblox-Benutzernamen verwenden?",
          answer:
            "Nein. Roblox-Benutzernamen erlauben nur Buchstaben, Ziffern und einen Unterstrich, 3 bis 20 Zeichen. Unicode-Buchstaben werden abgelehnt – nutze sie stattdessen in Beschreibungen und im Abschnitt „Über mich“.",
        },
        {
          question: "Warum macht Roblox aus meinem Text Rautenzeichen?",
          answer:
            "Roblox filtert jeden Text, und Zeichen oder Wörter, die der Filter nicht lesen kann, werden oft durch Rautenzeichen (#) ersetzt. Einfache Stile wie Kapitälchen, Fett und Gesperrt kommen am ehesten durch.",
        },
        {
          question: "Welche Roblox-Schriftarten funktionieren am besten?",
          answer:
            "Die Stile im Tab „Am besten für Roblox“ sind die einfachsten und überstehen den Filter am häufigsten. Starke Verzierungen, Emoji-Rahmen und Glitch-Text werden eher entfernt.",
        },
        {
          question: "Kann ich diese Schriften im Roblox-Chat nutzen?",
          answer:
            "Manchmal. Der Chat läuft durch denselben Filter, schlicht wirkende Stile haben also die besten Chancen. Wird eine Nachricht mit Rauten ersetzt, wechsle zu einem einfacheren Stil oder normalem Text.",
        },
      ],
      body: (
        <>
          <h2>Wo Roblox-Schriftarten funktionieren</h2>
          <p>
            Roblox ist strenger als die meisten Plattformen. Benutzernamen erlauben nur Buchstaben, Ziffern
            und einen einzigen Unterstrich (3 bis 20 Zeichen), und Anzeigenamen folgen ähnlichen Regeln –
            Zierbuchstaben werden dort also meist abgelehnt. Bessere Chancen hat Zierschrift in längeren
            Freitexten wie Gruppenbeschreibungen, Spielbeschreibungen und dem Abschnitt „Über mich“ in deinem
            Profil.
          </p>
          <h2>Warum manche Zeichen zu Rauten werden</h2>
          <p>
            Roblox schickt jeden Text durch seinen Chatfilter. Zeichen, die er nicht kennt, oder Text, den der
            Filter nicht lesen kann, werden oft durch Rauten (####) ersetzt oder entfernt. Einfache Stile wie{" "}
            <strong>Kapitälchen</strong>, <strong>Fett</strong> und <strong>Gesperrt</strong> überstehen das
            besser als starke Verzierungen oder Glitch-Text. Prüf deinen Text nach dem Speichern immer noch
            einmal.
          </p>
          <h2>Tipps für Text auf Roblox</h2>
          <ul>
            <li>Halte Gruppen- und Spieltitel lesbar, damit Spieler sie suchen können.</li>
            <li>Setze ein einzelnes verziertes Wort als Akzent, statt einen ganzen Absatz zu stylen.</li>
            <li>
              Wird ein Stil gefiltert, probier einen schlichteren aus der Liste, statt denselben Text erneut
              zu senden.
            </li>
          </ul>
        </>
      ),
    },
    "instagram-fonts": {
      h1: "Instagram-Schriftarten-Generator",
      title: "Instagram-Schriftarten – Schriften für Bio und Captions",
      description:
        "Instagram-Schriftarten für Bio, Name, Captions und Kommentare. Kopiere coolen, geschwungenen und Aesthetic-Text, der auf Instagram funktioniert.",
      intro:
        "Gib unten Text ein und verwandle ihn in Zierschriften für Instagram. Kopiere einen Stil in deine Bio, dein Namensfeld, Captions, Storys oder Kommentare.",
      sampleText: "my aesthetic bio",
      featuredLabel: "Am besten für Instagram",
      faqs: [
        {
          question: "Wie ändere ich die Schrift in meiner Instagram-Bio?",
          answer:
            "Instagram hat keine Schrifteinstellung für die Bio. Gib deinen Text hier ein, kopiere einen Stil, öffne auf Instagram „Profil bearbeiten“ und füge ihn ins Feld Bio oder Name ein.",
        },
        {
          question: "Kann ich Zierschriften in meinem Instagram-Benutzernamen verwenden?",
          answer:
            "Nein. Dein @Benutzername erlaubt nur Buchstaben, Ziffern, Punkte und Unterstriche. Nutze Zierschriften stattdessen im Feld Name, das in deinem Profil fett erscheint.",
        },
        {
          question: "Funktionieren Instagram-Schriften in Captions und Kommentaren?",
          answer:
            "Ja. Gestylter Text lässt sich in Captions, Kommentare und Story-Text einfügen. Lass Hashtags normal, weil gestylte Hashtags nicht auf den Tag verlinken.",
        },
        {
          question: "Warum sehen manche Schriften auf iPhone und Android anders aus?",
          answer:
            "Jedes Handy zeichnet Unicode-Zeichen mit seinen eigenen Systemschriften, deshalb sehen manche Symbole etwas anders aus oder fehlen auf älteren Geräten. Schreibschrift, Kapitälchen und Fett werden fast überall angezeigt.",
        },
      ],
      body: (
        <>
          <h2>Wo Instagram-Schriftarten funktionieren</h2>
          <p>
            Unicode-Zierschrift funktioniert in deiner Instagram-Bio, im Feld Name deines Profils, in
            Captions, Kommentaren und Story-Text. Die Ausnahme ist dein @Benutzername: Er erlaubt nur
            Buchstaben, Ziffern, Punkte und Unterstriche, bis zu 30 Zeichen.
          </p>
          <h2>Das Beste aus 150 Zeichen Bio machen</h2>
          <p>
            Instagram-Bios sind auf 150 Zeichen begrenzt, und verzierte Stile brauchen mehr Platz. Ein gutes
            Muster ist eine gestylte Zeile für deinen Namen oder Slogan, gefolgt von normalem Text für Links
            und Details. Schreibschrift, Kapitälchen und Aesthetic-Stile wie Glitzerrahmen oder Blumenrahmen
            sind beliebt.
          </p>
          <h2>Schriften und Auffindbarkeit</h2>
          <p>
            Die Instagram-Suche liest Zierbuchstaben als andere Zeichen, ein gestylter Name ist also schwerer
            zu finden. Lass deinen Benutzernamen normal und nutze Schriften im Namensfeld oder in der Bio. In
            Captions solltest du Hashtags nicht stylen, weil sie dann nicht auf den richtigen Tag verlinken.
          </p>
        </>
      ),
    },
    "snapchat-fonts": {
      h1: "Snapchat-Schriftarten-Generator",
      title: "Snapchat-Schriftarten – Coolen Text für Snapchat kopieren",
      description:
        "Snapchat-Schriftarten für Anzeigenamen, Chats und Snap-Texte. Kopiere ausgefallene Textstile, die auf Snapchat angezeigt werden.",
      intro:
        "Gib unten Text ein und verwandle ihn in Zierschriften für Snapchat. Kopiere einen Stil in deinen Anzeigenamen, Chats, Snap-Texte oder Storys.",
      sampleText: "Snap me",
      featuredLabel: "Am besten für Snapchat",
      faqs: [
        {
          question: "Kann ich die Schrift meines Snapchat-Anzeigenamens ändern?",
          answer:
            "Ja. Kopiere einen Stil von dieser Seite, öffne dein Snapchat-Profil, tippe auf deinen Namen und füge ihn ein. Dein Benutzername selbst muss aus normalen Buchstaben, Ziffern, Bindestrichen, Unterstrichen und Punkten bestehen.",
        },
        {
          question: "Funktionieren Zierschriften in Snapchat-Chats?",
          answer: "Ja. Gestylter Text lässt sich in Chats und in den Text auf Snaps und Storys einfügen.",
        },
        {
          question: "Welche Schriften sind auf einem Snap am besten lesbar?",
          answer:
            "Fette, kräftige Stile wie Fett serifenlos, Blasen und Doppelstrich bleiben auf Fotos lesbar. Dünne oder Glitch-Stile gehen vor unruhigem Hintergrund leicht unter.",
        },
        {
          question: "Finden mich Freunde mit einem gestylten Anzeigenamen schlechter?",
          answer:
            "Nein. Man fügt dich über Benutzernamen, Snapcode oder Kontakte hinzu, nicht über den Anzeigenamen.",
        },
      ],
      body: (
        <>
          <h2>Wo Snapchat-Schriftarten funktionieren</h2>
          <p>
            Dein Snapchat-Anzeigename, Chatnachrichten und der Text auf Snaps und Storys können
            Unicode-Zierbuchstaben enthalten. Dein Benutzername nicht: Er muss mit einem Buchstaben beginnen
            und darf nur Buchstaben, Ziffern, Bindestriche, Unterstriche und Punkte enthalten, 3 bis 15
            Zeichen.
          </p>
          <h2>Einen Stil für Snaps wählen</h2>
          <p>
            Snap-Texte liegen über Fotos, deshalb sind fette, klare Stile besser lesbar als dünne oder
            glitchige. Fett serifenlos, Doppelstrich und Blasen heben sich gut ab, während Kapitälchen und
            Schreibschrift zu Anzeigenamen passen.
          </p>
          <h2>Tipps</h2>
          <ul>
            <li>
              Freunde suchen per Benutzername – ein gestylter Anzeigename macht dich nicht schwerer
              auffindbar.
            </li>
            <li>Emoji-Rahmen wie Sakura oder Schmetterling passen zum verspielten Stil von Snapchat.</li>
            <li>
              Prüf vor dem Senden, wie der Text auf dem Snap aussieht – manche Handys zeigen weniger Symbole.
            </li>
          </ul>
        </>
      ),
    },
    "youtube-fonts": {
      h1: "YouTube-Schriftarten-Generator",
      title: "YouTube-Schriftarten – Zierschrift für YouTube kopieren",
      description:
        "YouTube-Schriftarten für Kanalnamen, Videobeschreibungen und Kommentare. Kopiere fette, geschwungene und verzierte Texte für deinen Kanal.",
      intro:
        "Gib unten Text ein und verwandle ihn in Zierschriften für YouTube. Kopiere einen Stil in Kommentare, Beschreibungen, Community-Posts oder deinen Kanalnamen.",
      sampleText: "Watch Now",
      featuredLabel: "Am besten für YouTube",
      faqs: [
        {
          question: "Kann ich Zierschriften in YouTube-Kommentaren verwenden?",
          answer:
            "Ja. Kopiere einen Stil und füge ihn in einen Kommentar ein. Eine fette oder eingeklammerte erste Zeile hilft einem angepinnten Kommentar, aufzufallen.",
        },
        {
          question: "Sollte ich Zierschriften in Videotiteln verwenden?",
          answer:
            "Sparsam. Die Suche liest gestylte Buchstaben als andere Zeichen – lass deine wichtigsten Keywords normal und style nur ein kurzes Label.",
        },
        {
          question: "Kann mein YouTube-Kanalname eine Zierschrift haben?",
          answer:
            "Kanalnamen akzeptieren in der Regel Unicode, dein @Handle erlaubt aber nur Buchstaben, Ziffern, Unterstriche, Bindestriche und Punkte.",
        },
        {
          question: "Wie helfen Schriften in Videobeschreibungen?",
          answer:
            "Gestylte Zwischenüberschriften wie 𝗖𝗛𝗔𝗣𝗧𝗘𝗥𝗦 oder 【 ʟɪɴᴋꜱ 】 machen lange Beschreibungen leichter überfliegbar. Lass Links und Zeitstempel normal, damit sie anklickbar bleiben.",
        },
      ],
      body: (
        <>
          <h2>Wo YouTube-Schriftarten funktionieren</h2>
          <p>
            Zierschrift funktioniert in Kommentaren, Videobeschreibungen, Community-Posts und
            Kanalbeschreibungen, und YouTube akzeptiert sie in der Regel auch in Kanalnamen. Dein @Handle ist
            auf Buchstaben, Ziffern, Unterstriche, Bindestriche und Punkte beschränkt und bleibt deshalb
            normal.
          </p>
          <h2>Titel und Suche</h2>
          <p>
            Videotitel dürfen bis zu 100 Zeichen lang sein, aber die Suche liest gestylte Buchstaben als
            andere Zeichen. Wenn dein Video gefunden werden soll, lass die wichtigsten Keywords normal und
            style nur einen kurzen Akzent, etwa ein Folgen-Label. Beschreibungen erlauben bis zu 5.000
            Zeichen, Zwischenüberschriften wie 𝗖𝗛𝗔𝗣𝗧𝗘𝗥𝗦 oder 【 ʟɪɴᴋꜱ 】 machen sie leichter überfliegbar.
          </p>
          <h2>Tipps für Kommentare</h2>
          <p>
            Eine fette oder umrahmte erste Zeile lässt einen angepinnten Kommentar hervorstechen. Vermeide
            starken Glitch-Text in Kommentaren – er kann andere Kommentare überdecken und wie Spam wirken.
          </p>
        </>
      ),
    },
    "twitter-fonts": {
      h1: "Twitter (X)-Schriftarten-Generator",
      title: "Twitter-Schriftarten – Zierschrift für X-Bio und Posts",
      description:
        "Twitter (X)-Schriftarten für Anzeigename, Bio und Posts. Kopiere fette, kursive und coole Schriften, die auf X funktionieren.",
      intro:
        "Gib unten Text ein und verwandle ihn in Zierschriften für Twitter (X). Kopiere einen Stil in deinen Anzeigenamen, deine Bio, Posts oder Antworten.",
      sampleText: "Big news",
      featuredLabel: "Am besten für Twitter",
      faqs: [
        {
          question: "Wie schreibe ich fett auf Twitter (X)?",
          answer:
            "Normale Posts haben keinen Fett-Button. Gib deinen Text hier ein, kopiere den Stil Fett oder Fett serifenlos und füge ihn in deinen Post ein.",
        },
        {
          question: "Kann ich Zierschriften in meinem X-Anzeigenamen verwenden?",
          answer:
            "Ja. Anzeigenamen akzeptieren Unicode bis zu 50 Zeichen. Dein @Handle erlaubt nur Buchstaben, Ziffern und Unterstriche.",
        },
        {
          question: "Zählen Zierschriften zum Zeichenlimit?",
          answer:
            "Ja. Jeder gestylte Buchstabe zählt, und manche verzierten Stile brauchen zusätzliche Zeichen – prüf die Länge vor dem Posten.",
        },
        {
          question: "Sind Zierschriften barrierefrei?",
          answer:
            "Nicht immer. Screenreader lesen gestylte Buchstaben eventuell einzeln vor oder überspringen sie. Style ein oder zwei Wörter zur Betonung und lass die Hauptbotschaft normal.",
        },
      ],
      body: (
        <>
          <h2>Wo Twitter-Schriftarten funktionieren</h2>
          <p>
            X akzeptiert Unicode-Zierschrift in deinem Anzeigenamen (bis zu 50 Zeichen), deiner Bio (bis zu
            160 Zeichen), Posts und Antworten. Dein @Handle erlaubt nur Buchstaben, Ziffern und Unterstriche,
            bis zu 15 Zeichen.
          </p>
          <h2>Fette und kursive Posts</h2>
          <p>
            Normale Posts haben keinen Fett- oder Kursiv-Button, deshalb sind Bold-, Italic- und
            Bold-Sans-Buchstaben ein üblicher Weg zur Betonung. Jeder gestylte Buchstabe zählt zum
            Zeichenlimit, und manche verzierten Stile zählen als mehr als ein Zeichen.
          </p>
          <h2>Barrierefreiheit</h2>
          <p>
            Screenreader lesen gestylte Buchstaben eventuell einzeln vor oder überspringen sie ganz. Style ein
            Wort oder eine kurze Phrase zur Betonung und lass den wichtigen Teil des Posts normal, damit alle
            ihn lesen können.
          </p>
        </>
      ),
    },
    "facebook-fonts": {
      h1: "Facebook-Schriftarten-Generator",
      title: "Facebook-Schriftarten – Zierschrift für Posts und Bio",
      description:
        "Facebook-Schriftarten für Beiträge, Kommentare, Bios und Seitenbeschreibungen. Kopiere fetten, kursiven und verzierten Text für Facebook.",
      intro:
        "Gib unten Text ein und verwandle ihn in Zierschriften für Facebook. Kopiere einen Stil in Beiträge, Kommentare, deine Vorstellung oder eine Seitenbeschreibung.",
      sampleText: "Happy Birthday",
      featuredLabel: "Am besten für Facebook",
      faqs: [
        {
          question: "Wie schreibe ich fett in einem Facebook-Beitrag?",
          answer:
            "Private Beiträge haben keine Formatierungsbuttons. Kopiere den Stil Fett oder Fett serifenlos von dieser Seite und füge ihn in deinen Beitrag oder Kommentar ein.",
        },
        {
          question: "Kann ich eine Zierschrift für meinen Facebook-Namen nutzen?",
          answer:
            "Meist nicht. Die Namensrichtlinien von Facebook erlauben keine Symbole, ungewöhnlichen Zeichen oder gemischten Alphabete, deshalb werden verzierte Namen abgelehnt.",
        },
        {
          question: "Wo funktionieren Facebook-Schriftarten?",
          answer:
            "In Beiträgen, Kommentaren, im Messenger, in deiner Profil-Vorstellung sowie in Seiten- und Gruppenbeschreibungen.",
        },
        {
          question: "Welche Stile passen zu Glückwunsch-Posts?",
          answer:
            "Rahmen wie Herzen, Glitzer, Sternenflügel und Sakura passen gut zu Geburtstagen, Jubiläen und Ankündigungen.",
        },
      ],
      body: (
        <>
          <h2>Wo Facebook-Schriftarten funktionieren</h2>
          <p>
            Zierschrift funktioniert in Beiträgen, Kommentaren, im Messenger, in deiner Profil-Vorstellung und
            in Seiten- oder Gruppenbeschreibungen. Beim Profilnamen ist das anders: Die Namensrichtlinien von
            Facebook erlauben keine Symbole, ungewöhnlichen Zeichen oder gemischten Alphabete, ein verzierter
            Name wird also meist abgelehnt.
          </p>
          <h2>Beiträge formatieren</h2>
          <p>
            Private Beiträge haben keine Fett- oder Kursiv-Option, deshalb sind gestylte Buchstaben ein
            einfacher Weg, eine Überschrift einzufügen oder eine wichtige Zeile hervorzuheben. Fett serifenlos
            eignet sich gut für Überschriften, Durchgestrichen oder Unterstrichen markieren Änderungen in
            einem Angebots- oder Event-Beitrag.
          </p>
          <h2>Tipps</h2>
          <ul>
            <li>Halte deine Profil-Vorstellung kurz – Facebook begrenzt sie auf eine knappe Zeile.</li>
            <li>Lass Links, Preise und Daten normal, damit sie leicht lesbar und auffindbar bleiben.</li>
            <li>Rahmen wie Herzen oder Glitzer passen zu Geburtstags- und Feier-Posts.</li>
          </ul>
        </>
      ),
    },
    "tiktok-fonts": {
      h1: "TikTok-Schriftarten-Generator",
      title: "TikTok-Schriftarten – Coole Schriften für die TikTok-Bio",
      description:
        "TikTok-Schriftarten für Name, Bio, Captions und Kommentare. Kopiere Aesthetic-, Schreibschrift- und coolen Text, der auf TikTok funktioniert.",
      intro:
        "Gib unten Text ein und verwandle ihn in Zierschriften für TikTok. Kopiere einen Stil in deinen Profilnamen, deine Bio, Captions oder Kommentare.",
      sampleText: "for you page",
      featuredLabel: "Am besten für TikTok",
      faqs: [
        {
          question: "Wie bekomme ich eine Zierschrift in meine TikTok-Bio?",
          answer:
            "Kopiere einen Stil von dieser Seite, öffne auf TikTok „Profil bearbeiten“ und füge ihn ins Feld Bio oder Name ein.",
        },
        {
          question: "Kann ich Zierschriften in meinem TikTok-Benutzernamen verwenden?",
          answer:
            "Nein. Benutzernamen erlauben nur Buchstaben, Ziffern, Unterstriche und Punkte. Nutze Schriften stattdessen in deinem Profilnamen.",
        },
        {
          question: "Welche Schriften eignen sich am besten für eine TikTok-Bio?",
          answer:
            "Kompakte Stile wie Kapitälchen, Fett serifenlos und Kawaii passen in die 80-Zeichen-Bio von TikTok. Vaporwave passt zu Edit- und Fan-Accounts, Fraktur und Glitch zu düsteren oder Gaming-Profilen.",
        },
        {
          question: "Beeinflussen Zierschriften die TikTok-Suche?",
          answer:
            "Ja. Die Suche liest gestylte Buchstaben als andere Zeichen – lass Keywords und Hashtags normal.",
        },
      ],
      body: (
        <>
          <h2>Wo TikTok-Schriftarten funktionieren</h2>
          <p>
            Unicode-Zierschrift funktioniert in deinem TikTok-Profilnamen (bis zu 30 Zeichen), deiner Bio (bis
            zu 80 Zeichen), Video-Captions und Kommentaren. Dein @Benutzername erlaubt nur Buchstaben,
            Ziffern, Unterstriche und Punkte.
          </p>
          <h2>Eine Bio mit 80 Zeichen</h2>
          <p>
            TikTok-Bios sind kurz, und verzierte Stile brauchen zusätzliche Zeichen. Wähl einen kompakten Stil
            wie Kapitälchen, Fett serifenlos oder Kawaii und spar dir Rahmen und Emojis für ein einzelnes
            Wort. Aesthetic-Stile wie Vaporwave breit passen zu Edit- und Fan-Accounts, Fraktur und Glitch zu
            Gaming- und Dark-Aesthetic-Profilen.
          </p>
          <h2>Captions und Suche</h2>
          <p>
            Die TikTok-Suche liest gestylte Buchstaben als andere Zeichen, lass Keywords und Hashtags also
            normal. Nutze Schriften lieber für den Hook oder ein kurzes Label am Anfang deiner Caption.
          </p>
        </>
      ),
    },
    "steam-fonts": {
      h1: "Steam-Schriftarten-Generator",
      title: "Steam-Schriftarten – Coole Schriften für deinen Steam-Namen",
      description:
        "Steam-Schriftarten für Profilname, Zusammenfassung und Gruppenseiten. Kopiere coole Gamer-Textstile, die auf Steam funktionieren.",
      intro:
        "Gib unten Text ein und verwandle ihn in Zierschriften für Steam. Kopiere einen Stil in deinen Profilnamen, deine Profilzusammenfassung, Rezensionen oder eine Gruppenseite.",
      sampleText: "Gamer Tag",
      featuredLabel: "Am besten für Steam",
      faqs: [
        {
          question: "Wie ändere ich meinen Steam-Namen in eine Zierschrift?",
          answer:
            "Kopiere einen Stil von dieser Seite, öffne auf Steam „Profil bearbeiten“ und füge ihn bei Profilname ein. Du kannst ihn so oft ändern, wie du willst.",
        },
        {
          question: "Wie lang darf ein Steam-Profilname sein?",
          answer: "Bis zu 32 Zeichen. Rahmen und Symbole zählen mit, halte verzierte Namen also kurz.",
        },
        {
          question: "Warum sieht mein verzierter Name in Spielen anders aus?",
          answer:
            "Manche Spiele zeigen deinen Steam-Namen in ihrer eigenen Schrift, die nicht jedes Symbol enthält. Fette, gotische und Kapitälchen-Stile sind die sicherste Wahl.",
        },
        {
          question: "Kann ich Schriften in meiner Steam-Profilzusammenfassung nutzen?",
          answer:
            "Ja. Zierschrift funktioniert in deiner Zusammenfassung, in Rezensionen, Kommentaren und auf Gruppenseiten, und Überschriften in Fett serifenlos helfen, lange Abschnitte zu gliedern.",
        },
      ],
      body: (
        <>
          <h2>Wo Steam-Schriftarten funktionieren</h2>
          <p>
            Steam erlaubt Unicode im Profilnamen, der bis zu 32 Zeichen lang sein und jederzeit geändert
            werden kann. Zierschrift funktioniert auch in deiner Profilzusammenfassung, in Rezensionen,
            Kommentaren und Gruppenbeschreibungen. Dein Kontoname und deine eigene Profil-URL bleiben normal.
          </p>
          <h2>Ideen für Gamer-Namen</h2>
          <p>
            Kurze Namen mit einem starken Stil wirken in Freundeslisten und Lobbys am besten. Fette Fraktur,
            Gamer-Tag (亗) und Gekreuzte Knochen (×͜×) sind bei kompetitiven Spielern beliebt, Kapitälchen und
            Doppelstrich wirken klarer. Behalte beim Hinzufügen von Rahmen das Limit von 32 Zeichen im Blick.
          </p>
          <h2>Tipps</h2>
          <ul>
            <li>
              Manche Spiele zeigen deinen Steam-Namen in ihrer eigenen Schrift, die nicht jedes Symbol
              darstellt.
            </li>
            <li>
              Freunde finden dich trotz verziertem Namen weiterhin über deine Profil-URL oder deinen
              Freundescode.
            </li>
            <li>
              Gliedere eine lange Profilzusammenfassung oder einen Guide mit Überschriften in Fett serifenlos.
            </li>
          </ul>
        </>
      ),
    },
    "xbox-fonts": {
      h1: "Xbox-Schriftarten-Generator",
      title: "Xbox-Schriftarten – Zierschrift für Xbox-Bio und Clubs",
      description:
        "Xbox-Schriftarten für Bio, Clubbeschreibungen und Nachrichten. Kopiere coole Textstile und erfahre, was Xbox-Gamertags erlauben.",
      intro:
        "Gib unten Text ein und verwandle ihn in Zierschriften für Xbox. Kopiere einen Stil in deine Profil-Bio, Clubbeschreibungen oder Nachrichten.",
      sampleText: "Game On",
      featuredLabel: "Am besten für Xbox",
      faqs: [
        {
          question: "Kann ich Zierschriften in meinem Xbox-Gamertag verwenden?",
          answer:
            "Nein. Gamertags sind auf 12 Zeichen aus Buchstaben, Ziffern und Leerzeichen begrenzt, deshalb werden Unicode-Zierbuchstaben abgelehnt.",
        },
        {
          question: "Wo kann ich auf Xbox Schriften verwenden?",
          answer: "In deiner Profil-Bio, in Clubbeschreibungen und in Nachrichten.",
        },
        {
          question: "Warum werden manche Symbole auf meiner Konsole nicht angezeigt?",
          answer:
            "Konsolen haben weniger Schriften als Handys und Computer, seltene Symbole erscheinen daher eventuell als Kästchen. Fette, Script- und Kapitälchen-Stile werden am zuverlässigsten angezeigt.",
        },
        {
          question: "Welche Stile passen zu Gaming-Clubs?",
          answer:
            "Fette Fraktur, Gamer-Tag und Linsenklammern ergeben starke Clubtitel. Lass Zeitpläne und Regeln normal, damit Mitglieder sie leicht lesen können.",
        },
      ],
      body: (
        <>
          <h2>Kann man Zierschriften im Xbox-Gamertag verwenden?</h2>
          <p>
            Meist nicht. Xbox-Gamertags sind auf 12 Zeichen begrenzt und erlauben Buchstaben, Ziffern und
            Leerzeichen, Unicode-Zierbuchstaben werden also abgelehnt. In Freitexten funktionieren sie aber,
            etwa in deiner Profil-Bio, in Clubbeschreibungen und in Nachrichten.
          </p>
          <h2>Bio und Clubs gestalten</h2>
          <p>
            Eine kurze gestylte Überschrift oben in deiner Bio lässt dein Profil auffallen, darunter normaler
            Text für deine Hauptspiele oder deinen Zeitplan. Für Clubs geben eine fette oder gotische
            Titelzeile und ein paar verzierte Trenner der Seite eine klare Identität.
          </p>
          <h2>Tipps</h2>
          <ul>
            <li>Konsolen zeigen nicht jedes Symbol – bleib bei fetten, Script- und Kapitälchen-Stilen.</li>
            <li>Lass deinen Gamertag normal, damit Freunde dich leicht finden und einladen können.</li>
            <li>Nutze denselben Stil in Bio und Club für einen einheitlichen Auftritt.</li>
          </ul>
        </>
      ),
    },
  },
};
