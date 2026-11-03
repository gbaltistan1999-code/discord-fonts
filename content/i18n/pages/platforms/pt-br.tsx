import type { PlatformPagesContent } from "../../types";
import { LocalLink } from "../shared";

const L = "pt-br";

export const platformsPtBr: PlatformPagesContent = {
  breadcrumb: "Letras para {name}",
  toolLabel: "Gerador de letras para {name}",
  faqHeading: "Perguntas frequentes: letras para {name}",
  notAffiliated: "Este site não é afiliado ao {name} nem endossado por ele.",
  outro: (
    <p>
      Todos esses estilos também funcionam no Discord. O{" "}
      <LocalLink locale={L} path="/">
        gerador de letras para Discord
      </LocalLink>{" "}
      principal tem dicas específicas para nomes, apelidos e a identidade do seu servidor.
    </p>
  ),
  pages: {
    "roblox-fonts": {
      h1: "Gerador de letras para Roblox",
      title: "Letras para Roblox – Copie e cole texto estiloso no Roblox",
      description:
        "Crie letras estilosas para Roblox: descrições de grupo, títulos de jogos e bios. Copie e cole texto Unicode e saiba onde o Roblox aceita.",
      intro:
        "Digite abaixo para transformar seu texto em letras Unicode para Roblox. Copie qualquer estilo e teste na descrição de um grupo, na página de um jogo ou na sua bio.",
      sampleText: "Roblox Builder",
      featuredLabel: "Melhores para Roblox",
      faqs: [
        {
          question: "Posso usar letras diferentes no meu nome de usuário do Roblox?",
          answer:
            "Não. Nomes de usuário do Roblox só aceitam letras, números e um sublinhado, de 3 a 20 caracteres. Letras Unicode são recusadas, então use-as nas descrições e na seção Sobre.",
        },
        {
          question: "Por que o Roblox transforma meu texto em hashtags?",
          answer:
            "O Roblox filtra todo texto, e caracteres ou palavras que o filtro não consegue ler costumam virar hashtags (#). Estilos simples como Versalete, Negrito e Espaçado são os que mais passam.",
        },
        {
          question: "Quais letras funcionam melhor no Roblox?",
          answer:
            "Os estilos da aba Melhores para Roblox são os mais simples e os que mais sobrevivem ao filtro. Decorações pesadas, molduras com emoji e texto glitch são removidos com mais facilidade.",
        },
        {
          question: "Posso usar essas letras no chat do Roblox?",
          answer:
            "Às vezes. O chat passa pelo mesmo filtro, então estilos com cara de texto normal têm mais chance. Se a mensagem virar hashtags, troque por um estilo mais simples ou texto normal.",
        },
      ],
      body: (
        <>
          <h2>Onde as letras funcionam no Roblox</h2>
          <p>
            O Roblox é mais rígido que a maioria das plataformas. Nomes de usuário só permitem letras, números
            e um sublinhado (de 3 a 20 caracteres), e nomes de exibição seguem regras parecidas, então letras
            estilizadas costumam ser recusadas ali. Elas têm mais chance em textos longos, como descrições de
            grupos, descrições de jogos e a seção Sobre do seu perfil.
          </p>
          <h2>Por que alguns caracteres viram hashtags</h2>
          <p>
            O Roblox passa todo texto pelo filtro de chat. Caracteres que ele não reconhece, ou texto que o
            filtro não consegue ler, costumam ser trocados por hashtags (####) ou removidos. Estilos simples
            como <strong>Versalete</strong>, <strong>Negrito</strong> e <strong>Espaçado</strong> sobrevivem
            melhor que decorações pesadas ou texto glitch. Sempre confira o texto depois de salvar.
          </p>
          <h2>Dicas para texto no Roblox</h2>
          <ul>
            <li>Deixe os títulos de grupos e jogos legíveis para os jogadores conseguirem buscá-los.</li>
            <li>Use uma única palavra estilizada como destaque em vez de estilizar um parágrafo inteiro.</li>
            <li>
              Se um estilo for filtrado, tente outro mais limpo da lista em vez de repetir o mesmo texto.
            </li>
          </ul>
        </>
      ),
    },
    "instagram-fonts": {
      h1: "Gerador de letras para Instagram",
      title: "Letras para Instagram – Copie e cole letras para sua bio",
      description:
        "Letras para bio, nome, legendas e comentários do Instagram. Copie e cole texto estiloso, cursivo e aesthetic que funciona no Instagram.",
      intro:
        "Digite abaixo para transformar seu texto em letras diferentes para o Instagram. Copie qualquer estilo para sua bio, nome, legendas, stories ou comentários.",
      sampleText: "my aesthetic bio",
      featuredLabel: "Melhores para Instagram",
      faqs: [
        {
          question: "Como mudo a letra da minha bio do Instagram?",
          answer:
            "O Instagram não tem opção de fonte para a bio. Digite seu texto aqui, copie um estilo, abra Editar perfil no Instagram e cole no campo Bio ou Nome.",
        },
        {
          question: "Posso usar letras diferentes no meu nome de usuário do Instagram?",
          answer:
            "Não. Seu @usuário só aceita letras, números, pontos e sublinhados. Use as letras no campo Nome, que aparece em negrito no seu perfil.",
        },
        {
          question: "As letras funcionam em legendas e comentários?",
          answer:
            "Sim. O texto estilizado pode ser colado em legendas, comentários e textos dos stories. Deixe as hashtags normais, porque hashtags estilizadas não levam à tag.",
        },
        {
          question: "Por que algumas letras ficam diferentes no iPhone e no Android?",
          answer:
            "Cada celular desenha os caracteres Unicode com as próprias fontes do sistema, então alguns símbolos mudam um pouco ou não aparecem em aparelhos antigos. Os estilos Cursiva, Versalete e Negrito aparecem em quase todo lugar.",
        },
      ],
      body: (
        <>
          <h2>Onde as letras funcionam no Instagram</h2>
          <p>
            Texto Unicode estilizado funciona na sua bio do Instagram, no campo Nome do perfil, em legendas,
            comentários e textos dos stories. A exceção é o seu @usuário: ele só aceita letras, números,
            pontos e sublinhados, até 30 caracteres.
          </p>
          <h2>Aproveite uma bio de 150 caracteres</h2>
          <p>
            A bio do Instagram tem limite de 150 caracteres, e estilos decorados ocupam mais espaço. Um bom
            esquema é uma linha estilizada para seu nome ou frase, seguida de texto normal para links e
            detalhes. Cursiva, versalete e estilos aesthetic como Moldura de brilhos ou Moldura de flores são
            escolhas populares.
          </p>
          <h2>Letras e descoberta</h2>
          <p>
            A busca do Instagram lê letras estilizadas como caracteres diferentes, então um nome estilizado
            pode ficar mais difícil de achar. Deixe seu nome de usuário normal e use as letras no campo Nome
            ou na bio. Nas legendas, não estilize hashtags: elas não vão levar à tag certa.
          </p>
        </>
      ),
    },
    "snapchat-fonts": {
      h1: "Gerador de letras para Snapchat",
      title: "Letras para Snapchat – Copie e cole texto estiloso no Snap",
      description:
        "Letras para seu nome de exibição, chats e legendas dos snaps. Copie e cole estilos de texto diferentes que aparecem no Snapchat.",
      intro:
        "Digite abaixo para transformar seu texto em letras diferentes para o Snapchat. Copie qualquer estilo para seu nome de exibição, chats, legendas ou stories.",
      sampleText: "Snap me",
      featuredLabel: "Melhores para Snapchat",
      faqs: [
        {
          question: "Posso mudar a letra do meu nome de exibição no Snapchat?",
          answer:
            "Sim. Copie um estilo desta página, abra seu perfil no Snapchat, toque no seu nome e cole. Seu nome de usuário precisa continuar com letras, números, hifens, sublinhados e pontos normais.",
        },
        {
          question: "As letras diferentes funcionam nos chats do Snapchat?",
          answer:
            "Sim. O texto estilizado pode ser colado nos chats e no texto que você adiciona a snaps e stories.",
        },
        {
          question: "Quais letras são mais fáceis de ler em um snap?",
          answer:
            "Estilos grossos e sólidos como Negrito sem serifa, Bolha e Traço duplo continuam legíveis em cima das fotos. Estilos finos ou glitch podem sumir em fundos movimentados.",
        },
        {
          question: "Um nome de exibição estilizado impede que meus amigos me encontrem?",
          answer:
            "Não. As pessoas adicionam você pelo nome de usuário, Snapcode ou contatos, não pelo nome de exibição.",
        },
      ],
      body: (
        <>
          <h2>Onde as letras funcionam no Snapchat</h2>
          <p>
            Seu nome de exibição no Snapchat, as mensagens do chat e o texto que você adiciona a snaps e
            stories aceitam letras Unicode estilizadas. Seu nome de usuário não: ele precisa começar com uma
            letra e só usar letras, números, hifens, sublinhados e pontos, de 3 a 15 caracteres.
          </p>
          <h2>Escolhendo um estilo para os snaps</h2>
          <p>
            As legendas dos snaps ficam por cima das fotos, então estilos grossos e limpos são mais fáceis de
            ler que os finos ou glitch. Negrito sem serifa, Traço duplo e Bolha se destacam bem, enquanto
            versalete e cursiva combinam com nomes de exibição.
          </p>
          <h2>Dicas</h2>
          <ul>
            <li>
              Amigos buscam pelo nome de usuário, então um nome de exibição estilizado não dificulta te
              adicionar.
            </li>
            <li>Molduras com emoji como Sakura ou Borboleta combinam com o jeito divertido do Snapchat.</li>
            <li>
              Confira como o texto fica no snap antes de enviar: alguns celulares mostram menos símbolos.
            </li>
          </ul>
        </>
      ),
    },
    "youtube-fonts": {
      h1: "Gerador de letras para YouTube",
      title: "Letras para YouTube – Copie e cole texto diferente no YouTube",
      description:
        "Letras para nomes de canal, descrições de vídeos e comentários no YouTube. Copie e cole texto em negrito, cursivo e estilizado para seu canal.",
      intro:
        "Digite abaixo para transformar seu texto em letras diferentes para o YouTube. Copie qualquer estilo para comentários, descrições, posts da comunidade ou o nome do seu canal.",
      sampleText: "Watch Now",
      featuredLabel: "Melhores para YouTube",
      faqs: [
        {
          question: "Posso usar letras diferentes nos comentários do YouTube?",
          answer:
            "Sim. Copie um estilo e cole em um comentário. Uma primeira linha em negrito ou entre colchetes ajuda um comentário fixado a se destacar.",
        },
        {
          question: "Devo usar letras estilizadas nos títulos dos vídeos?",
          answer:
            "Com moderação. A busca lê letras estilizadas como caracteres diferentes, então deixe as palavras-chave principais em texto normal e estilize só um rótulo curto.",
        },
        {
          question: "O nome do meu canal pode usar letras estilizadas?",
          answer:
            "Nomes de canal geralmente aceitam Unicode, mas seu @identificador só aceita letras, números, sublinhados, hifens e pontos.",
        },
        {
          question: "Como as letras ajudam nas descrições dos vídeos?",
          answer:
            "Títulos de seção estilizados como 𝗖𝗛𝗔𝗣𝗧𝗘𝗥𝗦 ou 【 ʟɪɴᴋꜱ 】 deixam descrições longas mais fáceis de percorrer. Deixe links e marcações de tempo em texto normal para continuarem clicáveis.",
        },
      ],
      body: (
        <>
          <h2>Onde as letras funcionam no YouTube</h2>
          <p>
            Texto estilizado funciona em comentários, descrições de vídeos, posts da comunidade e descrições
            do canal, e o YouTube geralmente aceita também em nomes de canal. Seu @identificador fica limitado
            a letras, números, sublinhados, hifens e pontos, então continua normal.
          </p>
          <h2>Títulos e busca</h2>
          <p>
            Títulos de vídeo podem ter até 100 caracteres, mas a busca lê letras estilizadas como caracteres
            diferentes. Se você quer que o vídeo seja encontrado, deixe as palavras-chave em texto normal e
            estilize só um detalhe curto, como o rótulo de um episódio. As descrições aceitam até 5.000
            caracteres, então títulos de seção como 𝗖𝗛𝗔𝗣𝗧𝗘𝗥𝗦 ou 【 ʟɪɴᴋꜱ 】 ajudam na leitura.
          </p>
          <h2>Dicas para comentários</h2>
          <p>
            Uma primeira linha em negrito ou com moldura ajuda um comentário fixado a se destacar. Evite texto
            glitch pesado nos comentários: ele pode cobrir outros comentários e parecer spam.
          </p>
        </>
      ),
    },
    "twitter-fonts": {
      h1: "Gerador de letras para Twitter (X)",
      title: "Letras para Twitter – Copie e cole texto diferente no X",
      description:
        "Letras para seu nome, bio e posts no Twitter (X). Copie e cole letras em negrito, itálico e estilosas que funcionam no X.",
      intro:
        "Digite abaixo para transformar seu texto em letras diferentes para o Twitter (X). Copie qualquer estilo para seu nome, bio, posts ou respostas.",
      sampleText: "Big news",
      featuredLabel: "Melhores para Twitter",
      faqs: [
        {
          question: "Como escrevo em negrito no Twitter (X)?",
          answer:
            "Posts comuns não têm botão de negrito. Digite seu texto aqui, copie o estilo Negrito ou Negrito sem serifa e cole no seu post.",
        },
        {
          question: "Posso usar letras diferentes no meu nome do X?",
          answer:
            "Sim. Nomes aceitam Unicode até 50 caracteres. Seu @usuário só aceita letras, números e sublinhados.",
        },
        {
          question: "As letras estilizadas contam no limite de caracteres?",
          answer:
            "Sim. Cada letra estilizada conta, e alguns estilos decorados usam caracteres extras, então confira o tamanho antes de postar.",
        },
        {
          question: "As letras estilizadas são acessíveis?",
          answer:
            "Nem sempre. Leitores de tela podem ler as letras estilizadas uma a uma ou pulá-las. Estilize uma ou duas palavras para dar ênfase e deixe a mensagem principal em texto normal.",
        },
      ],
      body: (
        <>
          <h2>Onde as letras funcionam no Twitter</h2>
          <p>
            O X aceita texto Unicode estilizado no seu nome (até 50 caracteres), na sua bio (até 160
            caracteres), em posts e respostas. Seu @usuário só aceita letras, números e sublinhados, até 15
            caracteres.
          </p>
          <h2>Posts em negrito e itálico</h2>
          <p>
            Posts comuns não têm botão de negrito nem de itálico, então as letras Negrito, Itálico e Negrito
            sem serifa são um jeito comum de dar ênfase. Cada letra estilizada conta no limite de caracteres,
            e alguns estilos decorados contam como mais de um caractere.
          </p>
          <h2>Acessibilidade</h2>
          <p>
            Leitores de tela podem ler letras estilizadas uma a uma ou pulá-las completamente. Estilize uma
            palavra ou uma frase curta para dar ênfase e deixe a parte importante do post em texto normal para
            todo mundo conseguir ler.
          </p>
        </>
      ),
    },
    "facebook-fonts": {
      h1: "Gerador de letras para Facebook",
      title: "Letras para Facebook – Copie e cole texto para posts e bio",
      description:
        "Letras para posts, comentários, bios e descrições de páginas no Facebook. Copie e cole texto em negrito, itálico e estilizado.",
      intro:
        "Digite abaixo para transformar seu texto em letras diferentes para o Facebook. Copie qualquer estilo para posts, comentários, sua apresentação ou a descrição de uma página.",
      sampleText: "Happy Birthday",
      featuredLabel: "Melhores para Facebook",
      faqs: [
        {
          question: "Como coloco texto em negrito em um post do Facebook?",
          answer:
            "Posts pessoais não têm botões de formatação. Copie o estilo Negrito ou Negrito sem serifa desta página e cole no seu post ou comentário.",
        },
        {
          question: "Posso usar letras estilizadas no meu nome do Facebook?",
          answer:
            "Geralmente não. As regras de nomes do Facebook não permitem símbolos, caracteres incomuns nem alfabetos misturados, então nomes estilizados são recusados.",
        },
        {
          question: "Onde as letras funcionam no Facebook?",
          answer:
            "Em posts, comentários, Messenger, na apresentação do seu perfil e nas descrições de páginas e grupos.",
        },
        {
          question: "Quais estilos combinam com posts de comemoração?",
          answer:
            "Molduras como Corações, Brilhos, Asas de estrela e Sakura ficam ótimas em aniversários, datas especiais e anúncios.",
        },
      ],
      body: (
        <>
          <h2>Onde as letras funcionam no Facebook</h2>
          <p>
            Texto estilizado funciona em posts, comentários, Messenger, na apresentação do seu perfil e nas
            descrições de páginas ou grupos. O nome do perfil é diferente: as regras de nomes do Facebook não
            permitem símbolos, caracteres incomuns nem alfabetos misturados, então um nome estilizado
            geralmente é recusado.
          </p>
          <h2>Formatando posts</h2>
          <p>
            Posts pessoais não têm opção de negrito ou itálico, então letras estilizadas são um jeito fácil de
            colocar um título ou destacar uma linha importante. Negrito sem serifa funciona bem para títulos,
            e Tachado ou Sublinhado servem para marcar mudanças em um post de promoção ou evento.
          </p>
          <h2>Dicas</h2>
          <ul>
            <li>Mantenha a apresentação do perfil curta: o Facebook limita a uma linha breve.</li>
            <li>Use texto normal para links, preços e datas para continuarem fáceis de ler e buscar.</li>
            <li>Molduras como Corações ou Brilhos combinam com aniversários e comemorações.</li>
          </ul>
        </>
      ),
    },
    "tiktok-fonts": {
      h1: "Gerador de letras para TikTok",
      title: "Letras para TikTok – Copie e cole letras estilosas na bio",
      description:
        "Letras para seu nome, bio, legendas e comentários no TikTok. Copie e cole texto aesthetic, cursivo e estiloso que funciona no TikTok.",
      intro:
        "Digite abaixo para transformar seu texto em letras diferentes para o TikTok. Copie qualquer estilo para seu nome de perfil, bio, legendas ou comentários.",
      sampleText: "for you page",
      featuredLabel: "Melhores para TikTok",
      faqs: [
        {
          question: "Como coloco letras diferentes na minha bio do TikTok?",
          answer: "Copie um estilo desta página, abra Editar perfil no TikTok e cole no campo Bio ou Nome.",
        },
        {
          question: "Posso usar letras diferentes no meu nome de usuário do TikTok?",
          answer:
            "Não. Nomes de usuário só aceitam letras, números, sublinhados e pontos. Use as letras no seu nome de perfil.",
        },
        {
          question: "Quais são as melhores letras para a bio do TikTok?",
          answer:
            "Estilos compactos como Versalete, Negrito sem serifa e Kawaii cabem na bio de 80 caracteres do TikTok. Vaporwave combina com contas de edits e fãs, e os estilos Gótica e Glitch com perfis dark ou gamer.",
        },
        {
          question: "As letras estilizadas afetam a busca do TikTok?",
          answer:
            "Sim. A busca lê letras estilizadas como caracteres diferentes, então deixe palavras-chave e hashtags em texto normal.",
        },
      ],
      body: (
        <>
          <h2>Onde as letras funcionam no TikTok</h2>
          <p>
            Texto Unicode estilizado funciona no seu nome de perfil do TikTok (até 30 caracteres), na bio (até
            80 caracteres), nas legendas dos vídeos e nos comentários. Seu @usuário só aceita letras, números,
            sublinhados e pontos.
          </p>
          <h2>Uma bio de 80 caracteres</h2>
          <p>
            As bios do TikTok são curtas, e estilos decorados usam caracteres extras. Escolha um estilo
            compacto como Versalete, Negrito sem serifa ou Kawaii, e guarde molduras e emojis para uma única
            palavra. Estilos aesthetic como Vaporwave larga combinam com contas de edits e fãs, enquanto
            Gótica e Glitch ficam bem em perfis gamer e dark.
          </p>
          <h2>Legendas e busca</h2>
          <p>
            A busca do TikTok lê letras estilizadas como caracteres diferentes, então deixe palavras-chave e
            hashtags em texto normal. Use as letras no gancho ou em um rótulo curto no começo da legenda.
          </p>
        </>
      ),
    },
    "steam-fonts": {
      h1: "Gerador de letras para Steam",
      title: "Letras para Steam – Copie e cole letras estilosas no nome",
      description:
        "Letras para seu nome de perfil, resumo e páginas de grupo na Steam. Copie e cole estilos de texto gamer que funcionam na Steam.",
      intro:
        "Digite abaixo para transformar seu texto em letras diferentes para a Steam. Copie qualquer estilo para seu nome de perfil, resumo, análises ou página de grupo.",
      sampleText: "Gamer Tag",
      featuredLabel: "Melhores para Steam",
      faqs: [
        {
          question: "Como coloco letras diferentes no meu nome da Steam?",
          answer:
            "Copie um estilo desta página, abra Editar perfil na Steam e cole em Nome do perfil. Você pode mudar quantas vezes quiser.",
        },
        {
          question: "Qual o tamanho máximo de um nome de perfil na Steam?",
          answer: "Até 32 caracteres. Molduras e símbolos contam, então mantenha curtos os nomes decorados.",
        },
        {
          question: "Por que meu nome estilizado fica diferente nos jogos?",
          answer:
            "Alguns jogos mostram seu nome da Steam com a própria fonte, que pode não ter todos os símbolos. Estilos em negrito, góticos e em versalete são as opções mais seguras.",
        },
        {
          question: "Posso usar letras no resumo do meu perfil da Steam?",
          answer:
            "Sim. Texto estilizado funciona no resumo, em análises, comentários e páginas de grupo, e títulos em Negrito sem serifa ajudam a organizar seções longas.",
        },
      ],
      body: (
        <>
          <h2>Onde as letras funcionam na Steam</h2>
          <p>
            A Steam deixa você usar Unicode no nome de perfil, que pode ter até 32 caracteres e ser trocado
            quando quiser. Texto estilizado também funciona no resumo do perfil, análises, comentários e
            descrições de grupos. Seu nome de conta e a URL personalizada do perfil continuam normais.
          </p>
          <h2>Ideias de nomes gamer</h2>
          <p>
            Nomes curtos com um estilo forte ficam melhores na lista de amigos e nos lobbies. Gótica em
            negrito, Tag gamer (亗) e Ossos cruzados (×͜×) são populares entre jogadores competitivos, enquanto
            Versalete e Traço duplo dão um visual mais limpo. Fique de olho no limite de 32 caracteres ao
            adicionar molduras.
          </p>
          <h2>Dicas</h2>
          <ul>
            <li>
              Alguns jogos mostram seu nome da Steam com a própria fonte, que pode não exibir todos os
              símbolos.
            </li>
            <li>
              Amigos ainda encontram você pela URL do perfil ou pelo código de amigo, mesmo com um nome
              estilizado.
            </li>
            <li>Use títulos em Negrito sem serifa para organizar um resumo de perfil ou guia longo.</li>
          </ul>
        </>
      ),
    },
    "xbox-fonts": {
      h1: "Gerador de letras para Xbox",
      title: "Letras para Xbox – Copie e cole texto para bio e clubes",
      description:
        "Letras para sua bio, descrições de clubes e mensagens no Xbox. Copie e cole estilos de texto e saiba o que uma gamertag aceita.",
      intro:
        "Digite abaixo para transformar seu texto em letras diferentes para o Xbox. Copie qualquer estilo para a bio do perfil, descrições de clubes ou mensagens.",
      sampleText: "Game On",
      featuredLabel: "Melhores para Xbox",
      faqs: [
        {
          question: "Posso usar letras diferentes na minha gamertag do Xbox?",
          answer:
            "Não. Gamertags são limitadas a 12 caracteres de letras, números e espaços, então letras Unicode estilizadas são recusadas.",
        },
        {
          question: "Onde posso usar letras no Xbox?",
          answer: "Na bio do seu perfil, nas descrições de clubes e nas mensagens.",
        },
        {
          question: "Por que alguns símbolos não aparecem no meu console?",
          answer:
            "Consoles têm menos fontes que celulares e computadores, então símbolos raros podem aparecer como quadrados. Estilos em negrito, script e versalete são os que aparecem com mais segurança.",
        },
        {
          question: "Quais estilos combinam com clubes de jogos?",
          answer:
            "Gótica em negrito, Tag gamer e Colchetes lenticulares dão títulos de clube marcantes. Use texto normal para horários e regras para os membros lerem com facilidade.",
        },
      ],
      body: (
        <>
          <h2>Dá para usar letras estilizadas em uma gamertag do Xbox?</h2>
          <p>
            Geralmente não. Gamertags do Xbox são limitadas a 12 caracteres e aceitam letras, números e
            espaços, então letras Unicode estilizadas são recusadas. Elas funcionam em textos livres, como a
            bio do perfil, as descrições de clubes e as mensagens.
          </p>
          <h2>Estilizando sua bio e seus clubes</h2>
          <p>
            Um título curto estilizado no topo da bio faz seu perfil se destacar; depois, texto normal para
            seus jogos principais ou horários. Nos clubes, uma linha de título em negrito ou gótico e alguns
            divisores decorados dão à página uma identidade clara.
          </p>
          <h2>Dicas</h2>
          <ul>
            <li>
              Consoles podem não mostrar todos os símbolos: fique com estilos em negrito, script e versalete.
            </li>
            <li>Deixe sua gamertag normal para os amigos encontrarem e convidarem você com facilidade.</li>
            <li>Use o mesmo estilo na bio e no clube para ter uma identidade consistente.</li>
          </ul>
        </>
      ),
    },
  },
};
