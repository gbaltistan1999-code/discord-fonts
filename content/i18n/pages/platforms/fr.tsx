import type { PlatformPagesContent } from "../../types";
import { LocalLink } from "../shared";

const L = "fr";

export const platformsFr: PlatformPagesContent = {
  breadcrumb: "Polices pour {name}",
  toolLabel: "Générateur de polices pour {name}",
  faqHeading: "FAQ : polices pour {name}",
  notAffiliated: "Ce site n’est ni affilié à {name} ni approuvé par {name}.",
  outro: (
    <p>
      Tous ces styles fonctionnent aussi sur Discord. Le{" "}
      <LocalLink locale={L} path="/">
        générateur de polices Discord
      </LocalLink>{" "}
      principal donne des conseils propres à Discord pour les pseudos, les surnoms et l’identité de votre
      serveur.
    </p>
  ),
  pages: {
    "roblox-fonts": {
      h1: "Générateur de polices pour Roblox",
      title: "Polices Roblox – Texte stylé à copier-coller pour Roblox",
      description:
        "Créez des polices stylées pour Roblox : descriptions de groupe, titres de jeux et bios. Copiez-collez du texte Unicode et découvrez où Roblox l’accepte.",
      intro:
        "Tapez ci-dessous pour transformer votre texte en lettres Unicode pour Roblox. Copiez un style et testez-le dans une description de groupe, une page de jeu ou votre bio.",
      sampleText: "Roblox Builder",
      featuredLabel: "Les meilleurs pour Roblox",
      faqs: [
        {
          question: "Puis-je utiliser des polices stylées dans mon nom d’utilisateur Roblox ?",
          answer:
            "Non. Les noms d’utilisateur Roblox n’acceptent que des lettres, des chiffres et un tiret bas, de 3 à 20 caractères. Les lettres Unicode sont refusées : utilisez-les plutôt dans les descriptions et votre section « À propos ».",
        },
        {
          question: "Pourquoi Roblox transforme-t-il mon texte en dièses ?",
          answer:
            "Roblox filtre tout le texte, et les caractères ou mots que son filtre ne sait pas lire sont souvent remplacés par des dièses (#). Les styles simples comme Small Caps, Bold et Wide Spaced passent le plus souvent.",
        },
        {
          question: "Quelles polices marchent le mieux sur Roblox ?",
          answer:
            "Les styles de l’onglet « Les meilleurs pour Roblox » sont les plus simples, ceux qui passent le plus souvent le filtre. Les décorations chargées, les cadres en emoji et le texte glitch sont plus souvent supprimés.",
        },
        {
          question: "Puis-je utiliser ces polices dans le chat Roblox ?",
          answer:
            "Parfois. Le chat passe par le même filtre, donc les styles proches du texte normal ont le plus de chances. Si un message est remplacé par des dièses, passez à un style plus simple ou à du texte normal.",
        },
      ],
      body: (
        <>
          <h2>Où les polices fonctionnent sur Roblox</h2>
          <p>
            Roblox est plus strict que la plupart des plateformes. Les noms d’utilisateur n’acceptent que des
            lettres, des chiffres et un seul tiret bas (de 3 à 20 caractères), et les noms d’affichage suivent
            des règles proches : les lettres stylées y sont donc souvent refusées. Elles ont plus de chances
            dans les textes longs, comme les descriptions de groupes, les descriptions de jeux et la section «
            À propos » de votre profil.
          </p>
          <h2>Pourquoi certains caractères deviennent des dièses</h2>
          <p>
            Roblox fait passer chaque texte par son filtre de chat. Les caractères qu’il ne reconnaît pas, ou
            le texte que le filtre ne sait pas lire, sont souvent remplacés par des dièses (####) ou
            supprimés. Les styles simples comme <strong>Small Caps</strong>, <strong>Bold</strong> et{" "}
            <strong>Wide Spaced</strong> s’en sortent mieux que les décorations chargées ou le texte glitch.
            Vérifiez toujours votre texte après l’enregistrement.
          </p>
          <h2>Conseils pour le texte sur Roblox</h2>
          <ul>
            <li>
              Gardez les titres de groupes et de jeux lisibles pour que les joueurs puissent les rechercher.
            </li>
            <li>Utilisez un seul mot stylé comme accent plutôt que de styliser tout un paragraphe.</li>
            <li>
              Si un style est filtré, essayez-en un plus sobre dans la liste plutôt que de renvoyer le même
              texte.
            </li>
          </ul>
        </>
      ),
    },
    "instagram-fonts": {
      h1: "Générateur de polices pour Instagram",
      title: "Polices Instagram – Polices à copier-coller pour votre bio",
      description:
        "Polices pour votre bio, votre nom, vos légendes et commentaires Instagram. Copiez-collez du texte stylé, cursif et aesthetic qui marche sur Instagram.",
      intro:
        "Tapez ci-dessous pour transformer votre texte en polices stylées pour Instagram. Copiez un style dans votre bio, votre nom, vos légendes, stories ou commentaires.",
      sampleText: "my aesthetic bio",
      featuredLabel: "Les meilleurs pour Instagram",
      faqs: [
        {
          question: "Comment changer la police de ma bio Instagram ?",
          answer:
            "Instagram n’a pas de réglage de police pour la bio. Tapez votre texte ici, copiez un style, puis ouvrez « Modifier le profil » sur Instagram et collez-le dans le champ Bio ou Nom.",
        },
        {
          question: "Puis-je utiliser des polices stylées dans mon nom d’utilisateur Instagram ?",
          answer:
            "Non. Votre @nom d’utilisateur n’accepte que des lettres, des chiffres, des points et des tirets bas. Utilisez plutôt les polices dans le champ Nom, qui s’affiche en gras sur votre profil.",
        },
        {
          question: "Les polices Instagram marchent-elles dans les légendes et commentaires ?",
          answer:
            "Oui. Le texte stylé se colle dans les légendes, les commentaires et le texte des stories. Laissez les hashtags en texte normal, car un hashtag stylé ne renvoie pas vers le tag.",
        },
        {
          question: "Pourquoi certaines polices sont-elles différentes sur iPhone et Android ?",
          answer:
            "Chaque téléphone dessine les caractères Unicode avec ses propres polices système : certains symboles changent un peu ou n’apparaissent pas sur les anciens appareils. Les styles Script, Small Caps et Bold s’affichent presque partout.",
        },
      ],
      body: (
        <>
          <h2>Où les polices fonctionnent sur Instagram</h2>
          <p>
            Le texte Unicode stylé fonctionne dans votre bio Instagram, le champ Nom de votre profil, les
            légendes, les commentaires et le texte des stories. L’exception, c’est votre @nom d’utilisateur :
            il n’accepte que des lettres, des chiffres, des points et des tirets bas, jusqu’à 30 caractères.
          </p>
          <h2>Tirer le meilleur d’une bio de 150 caractères</h2>
          <p>
            Les bios Instagram sont limitées à 150 caractères, et les styles décorés prennent plus de place.
            Une bonne formule : une ligne stylée pour votre nom ou votre slogan, puis du texte normal pour les
            liens et les détails. La cursive, les petites capitales et les styles aesthetic comme Sparkle
            Frame ou Flower Frame sont très populaires.
          </p>
          <h2>Polices et visibilité</h2>
          <p>
            La recherche Instagram lit les lettres stylées comme des caractères différents : un nom stylé peut
            donc être plus difficile à trouver. Gardez votre nom d’utilisateur normal et utilisez les polices
            dans le champ Nom ou la bio. Dans les légendes, ne stylisez pas les hashtags : ils ne renverront
            pas vers le bon tag.
          </p>
        </>
      ),
    },
    "snapchat-fonts": {
      h1: "Générateur de polices pour Snapchat",
      title: "Polices Snapchat – Texte stylé à copier-coller pour Snapchat",
      description:
        "Polices pour votre nom d’affichage, vos chats et les textes de vos snaps. Copiez-collez des styles de texte qui s’affichent sur Snapchat.",
      intro:
        "Tapez ci-dessous pour transformer votre texte en polices stylées pour Snapchat. Copiez un style dans votre nom d’affichage, vos chats, vos snaps ou vos stories.",
      sampleText: "Snap me",
      featuredLabel: "Les meilleurs pour Snapchat",
      faqs: [
        {
          question: "Puis-je changer la police de mon nom d’affichage Snapchat ?",
          answer:
            "Oui. Copiez un style sur cette page, ouvrez votre profil Snapchat, touchez votre nom et collez-le. Votre nom d’utilisateur doit rester en lettres, chiffres, tirets, tirets bas et points normaux.",
        },
        {
          question: "Les polices stylées marchent-elles dans les chats Snapchat ?",
          answer:
            "Oui. Le texte stylé se colle dans les chats et dans le texte que vous ajoutez aux snaps et stories.",
        },
        {
          question: "Quelles polices se lisent le mieux sur un snap ?",
          answer:
            "Les styles épais et pleins comme Bold Sans, Bubble et Double-Struck restent lisibles sur les photos. Les styles fins ou glitch peuvent se perdre sur un fond chargé.",
        },
        {
          question: "Un nom d’affichage stylé empêchera-t-il mes amis de me trouver ?",
          answer:
            "Non. On vous ajoute avec votre nom d’utilisateur, votre Snapcode ou vos contacts, pas avec votre nom d’affichage.",
        },
      ],
      body: (
        <>
          <h2>Où les polices fonctionnent sur Snapchat</h2>
          <p>
            Votre nom d’affichage Snapchat, vos messages et le texte que vous ajoutez aux snaps et stories
            acceptent les lettres Unicode stylées. Votre nom d’utilisateur, non : il doit commencer par une
            lettre et n’utiliser que des lettres, chiffres, tirets, tirets bas et points, de 3 à 15
            caractères.
          </p>
          <h2>Choisir un style pour vos snaps</h2>
          <p>
            Les textes des snaps se posent sur des photos : les styles épais et nets se lisent mieux que les
            styles fins ou glitch. Bold Sans, Double-Struck et Bubble ressortent bien, tandis que les petites
            capitales et la cursive vont bien aux noms d’affichage.
          </p>
          <h2>Conseils</h2>
          <ul>
            <li>
              Vos amis cherchent par nom d’utilisateur : un nom d’affichage stylé ne vous rendra pas plus
              difficile à ajouter.
            </li>
            <li>Les cadres en emoji comme Sakura ou Butterfly collent au côté ludique de Snapchat.</li>
            <li>
              Vérifiez le rendu sur le snap avant l’envoi : certains téléphones affichent moins de symboles.
            </li>
          </ul>
        </>
      ),
    },
    "youtube-fonts": {
      h1: "Générateur de polices pour YouTube",
      title: "Polices YouTube – Texte stylé à copier-coller pour YouTube",
      description:
        "Polices pour les noms de chaîne, descriptions de vidéos et commentaires YouTube. Copiez-collez du texte gras, cursif et stylé pour votre chaîne.",
      intro:
        "Tapez ci-dessous pour transformer votre texte en polices stylées pour YouTube. Copiez un style dans vos commentaires, descriptions, posts de la communauté ou le nom de votre chaîne.",
      sampleText: "Watch Now",
      featuredLabel: "Les meilleurs pour YouTube",
      faqs: [
        {
          question: "Puis-je utiliser des polices stylées dans les commentaires YouTube ?",
          answer:
            "Oui. Copiez un style et collez-le dans un commentaire. Une première ligne en gras ou entre crochets aide un commentaire épinglé à ressortir.",
        },
        {
          question: "Faut-il utiliser des polices stylées dans les titres de vidéos ?",
          answer:
            "Avec modération. La recherche lit les lettres stylées comme des caractères différents : gardez vos mots-clés principaux en texte normal et ne stylisez qu’une courte étiquette.",
        },
        {
          question: "Le nom de ma chaîne YouTube peut-il utiliser une police stylée ?",
          answer:
            "Les noms de chaîne acceptent généralement l’Unicode, mais votre @identifiant n’accepte que des lettres, chiffres, tirets bas, tirets et points.",
        },
        {
          question: "Comment les polices peuvent-elles aider mes descriptions de vidéos ?",
          answer:
            "Des intertitres stylés comme 𝗖𝗛𝗔𝗣𝗧𝗘𝗥𝗦 ou 【 ʟɪɴᴋꜱ 】 rendent les longues descriptions plus faciles à parcourir. Laissez les liens et les horodatages en texte normal pour qu’ils restent cliquables.",
        },
      ],
      body: (
        <>
          <h2>Où les polices fonctionnent sur YouTube</h2>
          <p>
            Le texte stylé fonctionne dans les commentaires, les descriptions de vidéos, les posts de la
            communauté et les descriptions de chaîne, et YouTube l’accepte généralement aussi dans les noms de
            chaîne. Votre @identifiant est limité aux lettres, chiffres, tirets bas, tirets et points : il
            reste donc normal.
          </p>
          <h2>Titres et recherche</h2>
          <p>
            Les titres de vidéos peuvent compter jusqu’à 100 caractères, mais la recherche lit les lettres
            stylées comme des caractères différents. Si vous voulez qu’on trouve votre vidéo, gardez les
            mots-clés en texte normal et ne stylisez qu’un petit accent, comme l’étiquette d’un épisode. Les
            descriptions acceptent jusqu’à 5 000 caractères : des intertitres comme 𝗖𝗛𝗔𝗣𝗧𝗘𝗥𝗦 ou 【 ʟɪɴᴋꜱ 】
            les rendent plus faciles à parcourir.
          </p>
          <h2>Conseils pour les commentaires</h2>
          <p>
            Une première ligne en gras ou encadrée aide un commentaire épinglé à ressortir. Évitez le texte
            glitch chargé dans les commentaires : il peut recouvrir les autres et ressembler à du spam.
          </p>
        </>
      ),
    },
    "twitter-fonts": {
      h1: "Générateur de polices pour Twitter (X)",
      title: "Polices Twitter – Texte stylé à copier-coller pour X",
      description:
        "Polices pour votre nom, votre bio et vos posts sur Twitter (X). Copiez-collez du texte gras, italique et stylé qui fonctionne sur X.",
      intro:
        "Tapez ci-dessous pour transformer votre texte en polices stylées pour Twitter (X). Copiez un style dans votre nom, votre bio, vos posts ou vos réponses.",
      sampleText: "Big news",
      featuredLabel: "Les meilleurs pour Twitter",
      faqs: [
        {
          question: "Comment écrire en gras sur Twitter (X) ?",
          answer:
            "Les posts classiques n’ont pas de bouton gras. Tapez votre texte ici, copiez le style Bold ou Bold Sans et collez-le dans votre post.",
        },
        {
          question: "Puis-je utiliser des polices stylées dans mon nom sur X ?",
          answer:
            "Oui. Les noms acceptent l’Unicode jusqu’à 50 caractères. Votre @identifiant n’accepte que des lettres, chiffres et tirets bas.",
        },
        {
          question: "Les polices stylées comptent-elles dans la limite de caractères ?",
          answer:
            "Oui. Chaque lettre stylée compte, et certains styles décorés utilisent des caractères en plus : vérifiez la longueur avant de publier.",
        },
        {
          question: "Les polices stylées sont-elles accessibles ?",
          answer:
            "Pas toujours. Les lecteurs d’écran peuvent lire les lettres stylées une par une ou les ignorer. Stylisez un ou deux mots pour l’emphase et gardez le message principal en texte normal.",
        },
      ],
      body: (
        <>
          <h2>Où les polices fonctionnent sur Twitter</h2>
          <p>
            X accepte le texte Unicode stylé dans votre nom (jusqu’à 50 caractères), votre bio (jusqu’à 160
            caractères), vos posts et vos réponses. Votre @identifiant n’accepte que des lettres, chiffres et
            tirets bas, jusqu’à 15 caractères.
          </p>
          <h2>Posts en gras et en italique</h2>
          <p>
            Les posts classiques n’ont pas de bouton gras ni italique : les lettres Bold, Italic et Bold Sans
            sont donc un moyen courant de mettre l’accent. Chaque lettre stylée compte dans la limite de
            caractères, et certains styles décorés comptent pour plus d’un caractère.
          </p>
          <h2>Accessibilité</h2>
          <p>
            Les lecteurs d’écran peuvent lire les lettres stylées une par une ou les ignorer complètement.
            Stylisez un mot ou une courte expression pour l’emphase, et gardez l’essentiel du post en texte
            normal pour que tout le monde puisse le lire.
          </p>
        </>
      ),
    },
    "facebook-fonts": {
      h1: "Générateur de polices pour Facebook",
      title: "Polices Facebook – Texte stylé à copier-coller pour vos posts",
      description:
        "Polices pour les publications, commentaires, bios et descriptions de pages Facebook. Copiez-collez du texte gras, italique et stylé.",
      intro:
        "Tapez ci-dessous pour transformer votre texte en polices stylées pour Facebook. Copiez un style dans vos publications, commentaires, votre présentation ou la description d’une page.",
      sampleText: "Happy Birthday",
      featuredLabel: "Les meilleurs pour Facebook",
      faqs: [
        {
          question: "Comment écrire en gras dans une publication Facebook ?",
          answer:
            "Les publications personnelles n’ont pas de boutons de mise en forme. Copiez le style Bold ou Bold Sans sur cette page et collez-le dans votre publication ou commentaire.",
        },
        {
          question: "Puis-je utiliser une police stylée pour mon nom Facebook ?",
          answer:
            "En général, non. Les règles de Facebook sur les noms interdisent les symboles, les caractères inhabituels et le mélange d’alphabets : les noms stylés sont refusés.",
        },
        {
          question: "Où les polices fonctionnent-elles sur Facebook ?",
          answer:
            "Dans les publications, les commentaires, Messenger, la présentation de votre profil et les descriptions de pages et de groupes.",
        },
        {
          question: "Quels styles conviennent aux publications de fête ?",
          answer:
            "Les cadres comme Hearts, Sparkles, Star Wings et Sakura vont très bien aux anniversaires, fêtes et annonces.",
        },
      ],
      body: (
        <>
          <h2>Où les polices fonctionnent sur Facebook</h2>
          <p>
            Le texte stylé fonctionne dans les publications, les commentaires, Messenger, la présentation de
            votre profil et les descriptions de pages ou de groupes. Votre nom de profil, c’est différent :
            les règles de Facebook sur les noms interdisent les symboles, les caractères inhabituels et le
            mélange d’alphabets, donc un nom stylé est généralement refusé.
          </p>
          <h2>Mettre en forme vos publications</h2>
          <p>
            Les publications personnelles n’ont pas d’option gras ou italique : les lettres stylées sont un
            moyen simple d’ajouter un titre ou de faire ressortir une ligne clé. Bold Sans marche bien pour
            les titres, et Strikethrough ou Underline peuvent signaler un changement dans une publication de
            promo ou d’événement.
          </p>
          <h2>Conseils</h2>
          <ul>
            <li>Gardez votre présentation courte : Facebook la limite à une ligne brève.</li>
            <li>
              Laissez les liens, prix et dates en texte normal pour qu’ils restent faciles à lire et à
              rechercher.
            </li>
            <li>Les cadres comme Hearts ou Sparkles vont bien aux anniversaires et aux fêtes.</li>
          </ul>
        </>
      ),
    },
    "tiktok-fonts": {
      h1: "Générateur de polices pour TikTok",
      title: "Polices TikTok – Polices stylées à copier-coller pour la bio",
      description:
        "Polices pour votre nom, votre bio, vos légendes et commentaires TikTok. Copiez-collez du texte aesthetic, cursif et stylé qui marche sur TikTok.",
      intro:
        "Tapez ci-dessous pour transformer votre texte en polices stylées pour TikTok. Copiez un style dans votre nom de profil, votre bio, vos légendes ou commentaires.",
      sampleText: "for you page",
      featuredLabel: "Les meilleurs pour TikTok",
      faqs: [
        {
          question: "Comment mettre une police stylée dans ma bio TikTok ?",
          answer:
            "Copiez un style sur cette page, puis ouvrez « Modifier le profil » sur TikTok et collez-le dans le champ Bio ou Nom.",
        },
        {
          question: "Puis-je utiliser des polices stylées dans mon nom d’utilisateur TikTok ?",
          answer:
            "Non. Les noms d’utilisateur n’acceptent que des lettres, chiffres, tirets bas et points. Utilisez plutôt les polices dans votre nom de profil.",
        },
        {
          question: "Quelles sont les meilleures polices pour une bio TikTok ?",
          answer:
            "Les styles compacts comme Small Caps, Bold Sans et Kawaii tiennent dans la bio de 80 caractères de TikTok. Vaporwave va bien aux comptes d’edits et de fans, Gothic et Glitch aux profils sombres ou gaming.",
        },
        {
          question: "Les polices stylées ont-elles un effet sur la recherche TikTok ?",
          answer:
            "Oui. La recherche lit les lettres stylées comme des caractères différents : gardez les mots-clés et les hashtags en texte normal.",
        },
      ],
      body: (
        <>
          <h2>Où les polices fonctionnent sur TikTok</h2>
          <p>
            Le texte Unicode stylé fonctionne dans votre nom de profil TikTok (jusqu’à 30 caractères), votre
            bio (jusqu’à 80 caractères), les légendes de vos vidéos et les commentaires. Votre @nom
            d’utilisateur n’accepte que des lettres, chiffres, tirets bas et points.
          </p>
          <h2>Une bio de 80 caractères</h2>
          <p>
            Les bios TikTok sont courtes, et les styles décorés utilisent des caractères en plus. Choisissez
            un style compact comme Small Caps, Bold Sans ou Kawaii, et gardez les cadres et emojis pour un
            seul mot. Les styles aesthetic comme Vaporwave Fullwidth vont bien aux comptes d’edits et de fans,
            tandis que Gothic et Glitch conviennent aux profils gaming et à l’esthétique sombre.
          </p>
          <h2>Légendes et recherche</h2>
          <p>
            La recherche TikTok lit les lettres stylées comme des caractères différents : gardez les mots-clés
            et les hashtags en texte normal. Utilisez plutôt les polices pour l’accroche ou une courte
            étiquette au début de la légende.
          </p>
        </>
      ),
    },
    "steam-fonts": {
      h1: "Générateur de polices pour Steam",
      title: "Polices Steam – Polices stylées à copier-coller pour votre nom",
      description:
        "Polices pour votre nom de profil, votre résumé et vos pages de groupe Steam. Copiez-collez des styles de texte gamer qui fonctionnent sur Steam.",
      intro:
        "Tapez ci-dessous pour transformer votre texte en polices stylées pour Steam. Copiez un style dans votre nom de profil, votre résumé, vos évaluations ou une page de groupe.",
      sampleText: "Gamer Tag",
      featuredLabel: "Les meilleurs pour Steam",
      faqs: [
        {
          question: "Comment mettre une police stylée dans mon nom Steam ?",
          answer:
            "Copiez un style sur cette page, puis ouvrez « Modifier le profil » sur Steam et collez-le dans Nom du profil. Vous pouvez le changer aussi souvent que vous voulez.",
        },
        {
          question: "Quelle longueur peut avoir un nom de profil Steam ?",
          answer: "Jusqu’à 32 caractères. Les cadres et symboles comptent : gardez les noms décorés courts.",
        },
        {
          question: "Pourquoi mon nom stylé est-il différent dans les jeux ?",
          answer:
            "Certains jeux affichent votre nom Steam dans leur propre police, qui ne contient pas forcément tous les symboles. Les styles gras, gothiques et en petites capitales sont les plus sûrs.",
        },
        {
          question: "Puis-je utiliser des polices dans le résumé de mon profil Steam ?",
          answer:
            "Oui. Le texte stylé fonctionne dans votre résumé, vos évaluations, commentaires et pages de groupe, et des titres en Bold Sans aident à organiser les longues sections.",
        },
      ],
      body: (
        <>
          <h2>Où les polices fonctionnent sur Steam</h2>
          <p>
            Steam vous laisse utiliser l’Unicode dans votre nom de profil, qui peut compter jusqu’à 32
            caractères et se changer à tout moment. Le texte stylé fonctionne aussi dans le résumé de votre
            profil, vos évaluations, vos commentaires et les descriptions de groupes. Votre nom de compte et
            l’URL personnalisée de votre profil restent normaux.
          </p>
          <h2>Idées de pseudos gamer</h2>
          <p>
            Les noms courts avec un seul style fort rendent le mieux dans la liste d’amis et les salons de
            jeu. Bold Gothic, Gamer Tag (亗) et Crossbones (×͜×) sont appréciés des joueurs compétitifs, tandis
            que Small Caps et Double-Struck donnent un rendu plus net. Surveillez la limite de 32 caractères
            quand vous ajoutez des cadres.
          </p>
          <h2>Conseils</h2>
          <ul>
            <li>
              Certains jeux affichent votre nom Steam dans leur propre police, qui peut ne pas montrer tous
              les symboles.
            </li>
            <li>
              Vos amis vous trouvent toujours via l’URL de votre profil ou votre code ami, même avec un nom
              stylé.
            </li>
            <li>Utilisez des titres en Bold Sans pour organiser un long résumé de profil ou un guide.</li>
          </ul>
        </>
      ),
    },
    "xbox-fonts": {
      h1: "Générateur de polices pour Xbox",
      title: "Polices Xbox – Texte stylé à copier-coller pour bio et clubs",
      description:
        "Polices pour votre bio, vos descriptions de clubs et vos messages Xbox. Copiez-collez des styles de texte et découvrez ce qu’accepte un gamertag.",
      intro:
        "Tapez ci-dessous pour transformer votre texte en polices stylées pour Xbox. Copiez un style dans la bio de votre profil, vos descriptions de clubs ou vos messages.",
      sampleText: "Game On",
      featuredLabel: "Les meilleurs pour Xbox",
      faqs: [
        {
          question: "Puis-je utiliser des polices stylées dans mon gamertag Xbox ?",
          answer:
            "Non. Les gamertags sont limités à 12 caractères (lettres, chiffres et espaces) : les lettres Unicode stylées sont refusées.",
        },
        {
          question: "Où puis-je utiliser des polices sur Xbox ?",
          answer: "Dans la bio de votre profil, les descriptions de clubs et les messages.",
        },
        {
          question: "Pourquoi certains symboles ne s’affichent-ils pas sur ma console ?",
          answer:
            "Les consoles ont moins de polices que les téléphones et ordinateurs : les symboles rares peuvent apparaître comme des carrés. Les styles gras, script et petites capitales s’affichent le plus sûrement.",
        },
        {
          question: "Quels styles conviennent aux clubs de jeu ?",
          answer:
            "Bold Gothic, Gamer Tag et Lenticular Brackets font des titres de club percutants. Gardez le texte normal pour les horaires et les règles afin que les membres les lisent facilement.",
        },
      ],
      body: (
        <>
          <h2>Peut-on utiliser des polices stylées dans un gamertag Xbox ?</h2>
          <p>
            En général, non. Les gamertags Xbox sont limités à 12 caractères et acceptent les lettres,
            chiffres et espaces : les lettres Unicode stylées sont donc refusées. Elles fonctionnent en
            revanche dans les textes libres, comme la bio de votre profil, les descriptions de clubs et les
            messages.
          </p>
          <h2>Styliser votre bio et vos clubs</h2>
          <p>
            Un court titre stylé en haut de votre bio fait ressortir votre profil, suivi de texte normal pour
            vos jeux principaux ou votre planning. Pour les clubs, une ligne de titre en gras ou gothique et
            quelques séparateurs décorés donnent à la page une identité claire.
          </p>
          <h2>Conseils</h2>
          <ul>
            <li>
              Les consoles n’affichent pas forcément tous les symboles : préférez les styles gras, script et
              petites capitales.
            </li>
            <li>Gardez votre gamertag normal pour que vos amis vous trouvent et vous invitent facilement.</li>
            <li>Utilisez le même style dans votre bio et votre club pour une image cohérente.</li>
          </ul>
        </>
      ),
    },
  },
};
