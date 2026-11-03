import { fancy } from "../../home/shared";
import type { StylePagesContent } from "../../types";
import { LocalLink } from "../shared";

const L = "pt-br";
const g = (slug: string, label: string) => (
  <LocalLink locale={L} path={`/discord-font-generator/${slug}`}>
    {label}
  </LocalLink>
);

export const stylesPtBr: StylePagesContent = {
  toolLabel: "{name}",
  moreHeading: "Mais geradores de letras para Discord",
  outro: (
    <p>
      Quer mais opções? O{" "}
      <LocalLink locale={L} path="/">
        gerador de letras para Discord
      </LocalLink>{" "}
      principal mostra todos os estilos de uma vez, incluindo negrito, cursiva, gótica e glitch.
    </p>
  ),
  pages: {
    bold: {
      name: "Gerador de letra em negrito",
      h1: "Gerador de letra em negrito para Discord",
      title: "Letra em negrito para Discord – Copie e cole texto em negrito",
      description:
        "Crie texto em negrito para nomes, apelidos e títulos de servidor no Discord. Digite uma vez, copie qualquer negrito (com serifa, sem serifa ou itálico) e cole.",
      intro:
        "Digite abaixo para transformar seu texto em letras Unicode em negrito que continuam em negrito onde você colar, inclusive nos nomes de exibição e apelidos do Discord, onde o markdown não funciona.",
      featuredLabel: "Estilos em negrito",
      body: (
        <>
          <h2>Por que usar letra em negrito no Discord?</h2>
          <p>
            Numa mensagem do Discord você deixa o texto em negrito colocando dois asteriscos em volta, assim:{" "}
            <code>**isto**</code>. Só que esse markdown é ignorado nos nomes, então um nome de exibição ou de
            canal em negrito precisa de outro jeito. Este gerador troca cada letra pela sua gêmea em negrito
            do bloco “Mathematical Alphanumeric Symbols” do Unicode. O resultado, como{" "}
            {fancy("bold-serif", "Gamer")} ou {fancy("bold-sans", "Gamer")}, é texto de verdade que mantém o
            peso em qualquer campo que aceite Unicode.
          </p>
          <h2>Qual estilo de negrito escolher?</h2>
          <ul>
            <li>
              <strong>Negrito (com serifa)</strong> tem letras clássicas de livro, com pequenos pés. Combina
              com nomes de servidor formais e personagens de RP.
            </li>
            <li>
              <strong>Negrito sem serifa</strong> é limpo e moderno, a opção mais legível para nomes gamer e
              títulos de canal.
            </li>
            <li>
              <strong>Negrito itálico</strong> e <strong>Negrito itálico sem serifa</strong> dão movimento,
              ótimo para canais de hype e tags de times de esports.
            </li>
            <li>
              <strong>Cursiva em negrito</strong> e <strong>Gótica em negrito</strong> juntam peso e
              personalidade quando o negrito simples parece simples demais.
            </li>
          </ul>
          <h2>Dicas para nomes em negrito</h2>
          <p>
            As letras em negrito estão entre os caracteres decorados mais bem suportados, então aparecem
            certinho no Windows, Mac, iPhone e Android atuais. Negrito e Negrito sem serifa também têm
            números, ótimos para tags de clã como {fancy("bold-serif", "Team 7")}. Lembre que nomes de
            exibição e apelidos têm no máximo 32 caracteres; o contador embaixo da caixa de texto mostra
            quantos você já usou.
          </p>
          <p>
            Fique atento: quem buscar “Gamer” na lista de membros não vai achar “
            {fancy("bold-serif", "Gamer")}”, porque são caracteres diferentes. Se quiser ser fácil de
            mencionar com @, deixe parte do nome simples ou coloque só uma palavra em negrito. Para negrito
            dentro das mensagens, o markdown comum costuma ser melhor; veja o{" "}
            <LocalLink locale={L} path="/discord-text-formatting">
              guia de formatação de texto do Discord
            </LocalLink>
            .
          </p>
          <h2>Ideias de nomes em negrito</h2>
          <p>
            O negrito funciona melhor quando destaca algo específico. Experimente deixar só o nome principal
            em negrito e a tag simples, como “{fancy("bold-sans", "Nova")} | FPS”, ou use números em negrito
            para um time, como “{fancy("bold-serif", "Squad 7")}”. Donos de servidor costumam colocar em
            negrito as categorias da lista de canais, por exemplo “{fancy("bold-sans", "CANAIS DE VOZ")}”,
            para que se destaquem dos canais. Negrito itálico é muito usado por streamers e criadores porque
            fica enérgico no chat sem ficar difícil de ler.
          </p>
        </>
      ),
    },
    cursive: {
      name: "Gerador de letra cursiva",
      h1: "Gerador de letra cursiva para Discord",
      title: "Letra cursiva para Discord – Copie e cole texto cursivo",
      description:
        "Transforme seu nome em texto cursivo elegante para o Discord. Letras script, script em negrito e itálico para copiar e colar em apelidos, bios e servidores.",
      intro:
        "Digite seu texto uma vez e receba letras script, script em negrito e itálicas prontas para copiar no seu nome de exibição, no “Sobre mim” ou no nome do servidor.",
      featuredLabel: "Estilos cursivos",
      body: (
        <>
          <h2>O que é uma letra cursiva para Discord?</h2>
          <p>
            O texto cursivo ou script, como {fancy("script", "Starlight")} ou{" "}
            {fancy("bold-script", "Starlight")}, vem dos alfabetos script do Unicode. Eles foram criados para
            notação matemática, mas o visual de letra de mão os tornou um dos jeitos mais populares de decorar
            um nome no Discord. Como são caracteres e não formatação, as curvas sobrevivem onde o itálico do
            markdown não chega, como apelidos e nomes de canal.
          </p>
          <h2>Cursiva, Cursiva em negrito e Itálico</h2>
          <p>
            <strong>Cursiva</strong> é leve e elegante, perfeita para perfis estéticos, servidores de arte e
            temas suaves. Algumas maiúsculas (B, E, F, H, I, L, M e R) e as minúsculas e, g e o vêm de um
            bloco mais antigo do Unicode, então podem parecer um pouco diferentes das vizinhas em algumas
            fontes.
          </p>
          <p>
            <strong>Cursiva em negrito</strong> usa um único conjunto de traços mais grossos, então é mais
            fácil de ler em tamanho pequeno e costuma ficar melhor na lista de membros. Se for escolher só uma
            letra cursiva para um nome, escolha esta.
          </p>
          <p>
            <strong>Itálico</strong> e <strong>Itálico sem serifa</strong> são inclinadas em vez de ligadas,
            uma opção discreta quando a script completa parece enfeitada demais.
          </p>
          <h2>Onde o texto cursivo fica melhor</h2>
          <ul>
            <li>Nomes de exibição de artistas, escritores e personagens de RP.</li>
            <li>Bios “Sobre mim”, principalmente com decorações como Ornamentado ou Brilhos.</li>
            <li>Nomes de servidores aconchegantes, criativos ou de comunidade.</li>
            <li>Títulos de canais de boas-vindas e regras, com uma descrição simples.</li>
          </ul>
          <p>
            As letras script são finas, então podem ser difíceis de ler em telas pequenas de celular e no modo
            escuro com pouco brilho. Veja como fica na lista de resultados antes de decidir e mantenha o nome
            curto. Para um visual suave e fácil de ler, experimente o{" "}
            {g("small-caps", "gerador de versalete")}.
          </p>
          <h2>Ideias de nomes em cursiva</h2>
          <p>
            Nomes curtos ficam melhores em script. Uma palavra só, como “{fancy("bold-script", "Luna")}” ou “
            {fancy("script", "Velvet")}”, fica linda, enquanto frases longas viram um emaranhado de curvas.
            Muita gente combina um nome cursivo com um símbolo simples, por exemplo “༺{" "}
            {fancy("bold-script", "Rose")} ༻”, ou usa script só na primeira letra. Se o seu servidor tem um
            tema suave ou criativo, um nome de servidor em cursiva com nomes de canal simples cria o clima sem
            atrapalhar a leitura.
          </p>
        </>
      ),
    },
    gothic: {
      name: "Gerador de letra gótica",
      h1: "Gerador de letra gótica para Discord",
      title: "Letra gótica para Discord – Texto Fraktur estilo antigo",
      description:
        "Crie texto gótico para o Discord em Fraktur e gótico em negrito. Copie e cole letras de estilo antigo para nomes de servidor, cargos e apelidos.",
      intro:
        "Transforme texto comum em uma letra gótica dramática. Estas letras usam caracteres Fraktur que parecem escrita medieval e podem ser coladas em qualquer lugar do Discord.",
      featuredLabel: "Estilos góticos",
      body: (
        <>
          <h2>Fraktur: a letra gótica do Discord</h2>
          <p>
            Texto gótico como {fancy("fraktur", "Dark Knight")} ou {fancy("bold-fraktur", "Dark Knight")} usa
            as letras Fraktur do Unicode, um estilo baseado na letra gótica que foi comum na impressão alemã
            por séculos. Lembra manuscritos antigos, cabeçalhos de jornal e desenhos de tatuagem.
          </p>
          <h2>Estilos góticos deste gerador</h2>
          <ul>
            <li>
              <strong>Gótica</strong> é a letra gótica clássica e mais leve. É elegante, mas difícil de ler em
              tamanho pequeno.
            </li>
            <li>
              <strong>Gótica em negrito</strong> é mais grossa e bem mais legível na lista de membros; é a
              melhor escolha para um nome de exibição gótico.
            </li>
            <li>
              <strong>Cruz gótica</strong>, <strong>Coroado</strong>, <strong>Moldura real</strong> e{" "}
              <strong>Espadas cruzadas</strong> cercam as letras de símbolos para um visual medieval ou de
              clã.
            </li>
            <li>
              <strong>Estilo rúnico</strong> usa letras parecidas do silabário cherokee para um ar antigo, de
              entalhe.
            </li>
          </ul>
          <h2>Ideias de texto gótico no Discord</h2>
          <p>
            Letras góticas combinam com comunidades de terror, fantasia, metal e RP. Ficam ótimas em nomes de
            servidor, cargos da equipe e cabeçalhos de categoria. Uma única palavra gótica dá o tom, como “
            {fancy("bold-fraktur", "The Crypt")}” para um canal de voz, enquanto o resto do servidor continua
            legível.
          </p>
          <p>
            Repare que o Fraktur não tem números, então eles ficam normais. Algumas maiúsculas (C, H, I, R e
            Z) do estilo leve vêm de outro bloco do Unicode e podem parecer um pouco diferentes em alguns
            aparelhos. Se quiser algo ainda mais pesado, combine Gótica em negrito com o{" "}
            {g("glitch", "gerador de texto glitch")} para um visual amaldiçoado, ou mantenha tudo limpo com o{" "}
            {g("bold", "gerador de letra em negrito")}.
          </p>
          <h2>Ideias de nomes de servidor e cargos</h2>
          <p>
            A letra gótica brilha em títulos. Nomes de servidor como “{fancy("bold-fraktur", "Shadow Realm")}”
            ou “꧁༒☬ {fancy("bold-fraktur", "Nightfall")} ☬༒꧂” anunciam na hora um tema sombrio ou medieval.
            Cargos também combinam, porque aparecem na lista de membros e nos perfis: “
            {fancy("bold-fraktur", "Overlord")}”, “♛ {fancy("bold-fraktur", "Royal Guard")} ♛” ou “
            {fancy("fraktur", "Knight")}” ficam perfeitos em servidores de RP e de guilda. Use texto gótico em
            uma ou duas palavras: frases longas nessa letra cansam e muita gente pula.
          </p>
        </>
      ),
    },
    "small-caps": {
      name: "Gerador de versalete",
      h1: "Gerador de versalete para Discord",
      title: "Versalete para Discord – Letra pequena para copiar e colar",
      description:
        "Crie versalete e letra pequena para o Discord. Copie e cole ᴛɪɴʏ ᴄᴀᴘꜱ, sobrescrito e subscrito para nomes, bios e canais minimalistas.",
      intro:
        "Tenha versalete e letra pequena, limpos e minimalistas, para o seu perfil no Discord. Digite suas palavras e copie a versão que combina com você.",
      featuredLabel: "Estilos de versalete",
      body: (
        <>
          <h2>O que é versalete?</h2>
          <p>
            Versalete são letras maiúsculas desenhadas na altura das minúsculas. No Discord, elas dão aos
            nomes um ar calmo e minimalista: {fancy("small-caps-all", "midnight")} em vez de Midnight. O
            Unicode nunca ganhou um alfabeto completo de versalete, então os geradores reúnem caracteres
            parecidos do alfabeto fonético. Quase todos encaixam perfeitamente; q e x não têm versalete de
            verdade, então usamos os caracteres legíveis mais próximos.
          </p>
          <h2>Versalete e Versalete mini</h2>
          <p>
            <strong>Versalete</strong> mantém suas maiúsculas em tamanho normal e diminui o resto, o que fica
            natural em nomes: {fancy("small-caps", "Midnight")}. <strong>Versalete mini</strong> diminui tudo
            para um visual uniforme e discreto: {fancy("small-caps-all", "Midnight")}. Os dois funcionam bem
            em celulares e computadores modernos, por isso estão entre os estilos decorados mais seguros para
            nomes de exibição.
          </p>
          <h2>Sobrescrito e subscrito</h2>
          <p>
            O <strong>sobrescrito</strong> sobe as letras acima da linha ({fancy("superscript", "tiny")}) e o{" "}
            <strong>subscrito</strong> as abaixa. São divertidos para sussurros, notas e bios fofas, mas o
            Unicode só tem algumas letras: não existe q sobrescrito, e o subscrito não tem quase um terço do
            alfabeto. Essas letras ficam normais, então confira o resultado antes de usar.
          </p>
          <h2>Melhores usos do versalete no Discord</h2>
          <ul>
            <li>
              Nomes de canal como ︱{fancy("small-caps-all", "rules")} ou ︱{fancy("small-caps-all", "news")}{" "}
              para uma barra lateral arrumada e uniforme.
            </li>
            <li>Nomes de exibição estilosos que não ficam difíceis de ler.</li>
            <li>
              Nomes de cargo, em que rótulos curtos como {fancy("small-caps-all", "moderator")} ficam limpos
              na lista de membros.
            </li>
            <li>Bios estéticas combinadas com as decorações Colchetes de canto ou Corações.</li>
          </ul>
          <p>
            Como o versalete faz parte do alfabeto fonético, leitores de tela podem lê-lo de um jeito
            estranho, então deixe as informações importantes em texto normal. Para mais estilos suaves, veja o{" "}
            {g("aesthetic", "gerador de letras estéticas")}.
          </p>
          <h2>Versalete para um servidor organizado</h2>
          <p>
            Quem monta servidores adora versalete porque todos os nomes de canal ficam da mesma altura. Um
            padrão comum é um emoji, um separador fino e um rótulo em versalete, como “💬︱
            {fancy("small-caps-all", "general")}” ou “🎮︱{fancy("small-caps-all", "game night")}”. O Discord
            mostra nomes de canal em minúsculas e com hífens, mas o versalete sobrevive intacto, e parte do
            charme está aí. Escolha um estilo de separador e use em todo lugar para a lista parecer pensada,
            não aleatória.
          </p>
        </>
      ),
    },
    aesthetic: {
      name: "Gerador de letras estéticas",
      h1: "Gerador de letras estéticas para Discord",
      title: "Letras estéticas para Discord – Vaporwave e texto fofo",
      description:
        "Letras estéticas para bios e nomes no Discord: vaporwave, versalete, kawaii e brilhos. Copie e cole texto fofo para o Discord com um clique.",
      intro:
        "Encontre estilos de texto suaves, fofos e vaporwave para o seu perfil no Discord. Digite suas palavras e copie uma letra estética com um clique.",
      featuredLabel: "Estilos estéticos",
      body: (
        <>
          <h2>O que deixa uma letra “estética”?</h2>
          <p>
            No Discord, “estético” costuma ser texto suave, espaçado e decorado que combina com uma vibe:
            pastel, vaporwave, cottagecore ou lo-fi. É menos sobre um alfabeto e mais sobre combinar estilos,
            espaços e pequenos símbolos para a sua bio parecer caprichada.
          </p>
          <h2>Estilos estéticos populares</h2>
          <ul>
            <li>
              <strong>Vaporwave larga</strong> ({fancy("fullwidth", "aesthetic")}) usa as letras largas das
              fontes do leste asiático para aquele visual retrô dos anos 80 e 90.{" "}
              <strong>Vaporwave espaçada</strong> dá ainda mais espaço.
            </li>
            <li>
              <strong>Versalete</strong> e <strong>Versalete mini</strong> trazem um toque calmo e minimalista
              que combina com quase qualquer tema.
            </li>
            <li>
              <strong>Kawaii</strong>, <strong>Brilhos</strong>, <strong>Laço de flores</strong>,{" "}
              <strong>Corações</strong> e <strong>Sakura</strong> envolvem o texto em símbolos e emojis fofos.
            </li>
            <li>
              <strong>Traço duplo</strong>, <strong>Monoespaçada</strong> e <strong>Espaçado</strong> são
              opções limpas para um perfil tech ou minimalista.
            </li>
          </ul>
          <h2>Montando um perfil estético no Discord</h2>
          <p>
            Escolha um ou dois estilos e use sempre os mesmos. Por exemplo, um nome de exibição em Versalete
            mini, um título com Laço de flores no topo do “Sobre mim” e texto normal no resto. Estilos demais
            ao mesmo tempo ficam bagunçados e difíceis de ler. A bio tem limite de 190 caracteres, e
            decorações e espaços gastam isso rápido, então confira o tamanho enquanto escreve.
          </p>
          <p>
            Letras largas ocupam o dobro das normais, então um nome vaporwave longo pode quebrar ou ser
            cortado na lista de membros. Molduras com emojis aparecem coloridas na maioria dos aparelhos, mas
            o visual exato depende do conjunto de emojis de cada plataforma. Para letras mais redondas,
            experimente o {g("bubble", "gerador de letras bolha")}, ou vá para algo menor com o{" "}
            {g("small-caps", "gerador de versalete")}.
          </p>
          <h2>Um modelo simples de bio estética</h2>
          <p>
            Não sabe por onde começar? Use um título decorado, duas ou três linhas curtas normais e um símbolo
            de fechamento. Por exemplo: “⋆˚｡⋆୨୧˚ {fancy("italic", "dreamer")} ˚୨୧⋆｡˚⋆”, depois seus pronomes,
            fuso horário e jogos favoritos em texto normal, e um “✧” no final. A linha decorada dá
            personalidade e as linhas normais ficam legíveis para todos, inclusive para quem usa leitor de
            tela. Troque o título quando mudar de humor; o resto pode continuar igual.
          </p>
        </>
      ),
    },
    glitch: {
      name: "Gerador de texto glitch",
      h1: "Gerador de texto glitch para Discord",
      title: "Texto glitch para Discord – Zalgo e letras assustadoras",
      description:
        "Crie texto glitch e zalgo para o Discord com intensidade ajustável. Copie e cole letras corrompidas, tachadas e riscadas que dão medo.",
      intro:
        "Corrompa seu texto com marcas zalgo, tachados e riscos. Ajuste a intensidade do glitch e copie o resultado assustador direto para o Discord.",
      featuredLabel: "Estilos glitch",
      body: (
        <>
          <h2>Como funciona o texto glitch</h2>
          <p>
            O texto glitch usa caracteres combinantes: marcas invisíveis que grudam na letra anterior, como
            acentos. Normalmente uma letra recebe um acento no máximo, mas nada impede de empilhar dezenas.
            Amontoe-os acima, através e abaixo de cada letra e você tem o visual “zalgo”, alto e corrompido,
            que invade as linhas ao redor.
          </p>
          <h2>Estilos glitch para copiar</h2>
          <ul>
            <li>
              <strong>Glitch Zalgo</strong>: use o controle de intensidade de 1 (uma leve tremida) a 10 (caos
              total). O resultado é gerado sempre do mesmo jeito, então você pode voltar e pegar o mesmo
              texto.
            </li>
            <li>
              <strong>Tachado</strong>, <strong>Cortado</strong>, <strong>Sobrelinha</strong>,{" "}
              <strong>Wavy</strong> e <strong>Pontilhado</strong> colocam uma única marca em cada letra para
              um efeito de estrago mais sutil.
            </li>
            <li>
              <strong>De cabeça para baixo</strong>, <strong>Espelhado</strong> e <strong>Invertido</strong>{" "}
              viram o texto para mensagens confusas e de meme.
            </li>
          </ul>
          <h2>Usando zalgo com responsabilidade no Discord</h2>
          <p>
            Zalgo pesado pode cobrir as mensagens dos outros, por isso muitos servidores proíbem e as regras
            do AutoMod costumam filtrar. Em nomes de exibição, ele também pode impedir que te mencionem com @
            ou que leiam seu nome na lista de membros. Uma intensidade baixa, de 1 a 3, geralmente basta para
            um nome sinistro ou um canal de evento de Halloween, e tem menos chance de ser removida.
          </p>
          <p>
            Cada sistema desenha as marcas combinantes de um jeito, então o mesmo texto glitch pode ficar
            arrumado no computador e bagunçado no celular. Confira o resultado e teste antes num canal
            privado. Quer algo sombrio mas legível? Experimente o {g("gothic", "gerador de letra gótica")}.
            Para texto tachado simples nas mensagens, o markdown <code>~~tachado~~</code> do Discord é mais
            limpo; veja nosso{" "}
            <LocalLink locale={L} path="/discord-text-formatting">
              guia de formatação de texto
            </LocalLink>
            .
          </p>
          <h2>Ideias de texto glitch</h2>
          <p>
            Estilos glitch são perfeitos para eventos de terror, servidores de mistério e ARG, e personagens
            de bot “corrompidos”. Um nome de canal com zalgo leve cria um clima estranho sem bagunçar a lista
            de canais. Texto riscado ou tachado serve para correções de brincadeira como “
            {fancy("strikethrough", "dever de casa")} jogar”. Em avisos, junte uma palavra com glitch e texto
            normal, por exemplo “o {fancy("slashed", "sinal")} voltou”, para a mensagem fazer sentido de cara.
          </p>
        </>
      ),
    },
    bubble: {
      name: "Gerador de letras bolha",
      h1: "Gerador de letras bolha para Discord",
      title: "Letras bolha para Discord – Texto com letras em círculos",
      description:
        "Crie texto bolha para o Discord com letras em círculos, bolhas escuras e quadrados. Copie e cole ⓑⓤⓑⓑⓛⓔ em nomes, servidores e mensagens.",
      intro:
        "Coloque cada letra dentro de um círculo ou quadrado. Digite abaixo para criar texto bolha que você pode copiar e colar em nomes, canais e chats do Discord.",
      featuredLabel: "Estilos bolha",
      body: (
        <>
          <h2>O que é texto bolha?</h2>
          <p>
            O texto bolha coloca cada letra dentro de um círculo, como {fancy("bubble", "bubble")} ou{" "}
            {fancy("circled", "Bolha")}. O Unicode tem esses “caracteres alfanuméricos circulados” para
            numerar listas e diagramas, e eles viraram um favorito divertido para nomes no Discord. Diferente
            dos emojis, eles pegam a cor do seu texto, então combinam com o tema do chat.
          </p>
          <h2>Os estilos bolha</h2>
          <ul>
            <li>
              <strong>Bolha</strong> usa letras minúsculas em círculos para um visual suave e uniforme.
            </li>
            <li>
              <strong>Em círculos</strong> mantém suas maiúsculas, então os nomes continuam fáceis de ler:{" "}
              {fancy("circled", "Max")}.
            </li>
            <li>
              <strong>Bolha escura</strong> preenche cada círculo ({fancy("negative-circled", "bubble")}) para
              um efeito forte e de alto contraste.
            </li>
            <li>
              <strong>Em quadrados</strong> e <strong>Quadrados escuros</strong> trocam os círculos por
              caixas, um visual em blocos que combina com tags gamer.
            </li>
            <li>
              <strong>Entre parênteses</strong> coloca cada letra entre parênteses para um ar retrô de máquina
              de escrever.
            </li>
          </ul>
          <h2>Notas de compatibilidade</h2>
          <p>
            Letras e números em círculos comuns estão no Unicode há décadas e aparecem em quase todo lugar. As
            bolhas escuras, os quadrados e as maiúsculas entre parênteses vêm de um bloco mais novo, então
            Androids antigos, algumas smart TVs e consoles podem mostrar quadradinhos. Alguns apps também
            mostram as versões escuras como emojis coloridos, então podem mudar de aparelho para aparelho.
          </p>
          <p>
            Caracteres em círculos são mais largos que letras normais, então um nome bolha longo pode ser
            cortado na lista de membros. Funcionam melhor nomes curtos, tags de servidor e palavras soltas
            como “{fancy("bubble", "gg")}”. Para mais estilos fofos, experimente o{" "}
            {g("aesthetic", "gerador de letras estéticas")}, ou vire tudo de cabeça para baixo com o{" "}
            {g("upside-down", "gerador de texto de cabeça para baixo")}.
          </p>
          <h2>Ideias de texto bolha para o Discord</h2>
          <p>
            Letras bolha ficam ótimas em palavras curtas e diretas: reações como “{fancy("bubble", "lol")}” ou
            “{fancy("negative-circled", "GG")}”, apelidos fofos como “{fancy("circled", "Mochi")}” ou rótulos
            para canais de evento. Números em círculos também ajudam: use ① ② ③ para numerar regras ou passos
            num post, porque ficam alinhados e fáceis de ler. O estilo Em quadrados fica ótimo em tags de jogo
            como “{fancy("negative-squared", "AFK")}”, mas confira antes no celular, porque alguns aparelhos
            mostram letras quadradas como emojis coloridos.
          </p>
        </>
      ),
    },
    "upside-down": {
      name: "Gerador de texto de cabeça para baixo",
      h1: "Gerador de texto de cabeça para baixo para Discord",
      title: "Texto de cabeça para baixo para Discord – Vire e espelhe",
      description:
        "Vire seu texto de cabeça para baixo, espelhe ou escreva ao contrário para o Discord. Copie e cole ʇxǝʇ uʍop ǝpᴉsdn em mensagens e apelidos.",
      intro:
        "Vire seu texto do avesso. Este gerador vira, espelha e inverte suas palavras para você colar no Discord em piadas, charadas e memes.",
      featuredLabel: "Estilos virados",
      body: (
        <>
          <h2>Como funciona o texto de cabeça para baixo</h2>
          <p>
            Não existe uma configuração do Unicode que gire o texto, então os geradores procuram, para cada
            letra, um caractere que pareça essa letra girada 180 graus e depois invertem a ordem. Algumas
            trocas são perfeitas (n vira u, p vira d), e outras vêm do alfabeto fonético (ɐ, ǝ, ɹ) ou de
            outras escritas. O resultado fica certo quando você gira o celular:{" "}
            {fancy("upside-down", "hello discord!")}.
          </p>
          <h2>De cabeça para baixo, Espelhado e Invertido</h2>
          <ul>
            <li>
              <strong>De cabeça para baixo</strong> vira as letras na vertical e inverte a ordem, como girar
              uma página.
            </li>
            <li>
              <strong>Espelhado</strong> vira as letras na horizontal, como num espelho, então o texto se lê
              da direita para a esquerda.
            </li>
            <li>
              <strong>Invertido</strong> só escreve o texto de trás para frente, sem mudar as letras. É o mais
              compatível dos três.
            </li>
          </ul>
          <h2>Jeitos divertidos de usar texto virado no Discord</h2>
          <ul>
            <li>Poste respostas de charadas ou spoilers que deem um trabalhinho para ler.</li>
            <li>Reaja a momentos caóticos do chat com um “o que acabou de acontecer” virado.</li>
            <li>Use um apelido de cabeça para baixo no Dia da Mentira ou numa piada sobre a Austrália.</li>
            <li>Esconda easter eggs nos tópicos dos canais e nas descrições de eventos.</li>
          </ul>
          <h2>Limites para ter em mente</h2>
          <p>
            Algumas maiúsculas viradas usam caracteres raros que aparelhos antigos não mostram, então teste em
            outro celular antes de confiar. Pontuação e números também são virados, mas alguns não têm
            equivalente bom e ficam como estão. Nomes virados também são muito difíceis de buscar ou mencionar
            com @, então funcionam melhor como piada passageira do que como identidade fixa.
          </p>
          <p>
            Para uma mensagem escondida de verdade, a marcação de spoiler do Discord (<code>||texto||</code>)
            é a opção nativa; veja o{" "}
            <LocalLink locale={L} path="/discord-text-formatting">
              guia de formatação do Discord
            </LocalLink>
            , ou adicione mais caos com o {g("glitch", "gerador de texto glitch")}.
          </p>
          <h2>Copiando texto virado no celular</h2>
          <p>
            No celular, toque no botão Copiar em vez de selecionar o texto na mão. O texto virado é escrito da
            direita para a esquerda, então arrastar as alças de seleção costuma pegar a parte errada ou cortar
            um caractere no meio. Depois de colar no Discord, leia uma vez com o celular girado para conferir.
            Se o teclado sugerir correções depois de colar, ignore, porque aceitar uma pode trocar uma palavra
            virada por uma normal.
          </p>
        </>
      ),
    },
  },
};
