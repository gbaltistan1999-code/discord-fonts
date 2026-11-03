import Link from "next/link";
import type { HomeContent } from "../types";
import { ExamplesFigure, fancy, inlineLink, styleLink } from "./shared";

function Article() {
  return (
    <div className="prose-content">
      <h2 id="o-que-sao-letras-para-discord">O que são letras para Discord e como funcionam?</h2>
      <p>
        As letras para Discord não são fontes no sentido comum. O Discord não deixa você escolher uma
        tipografia para o seu nome ou para as mensagens, então um gerador usa um truque: troca cada letra
        normal por um caractere parecido do <strong>Unicode</strong>, o padrão mundial que dá um número a cada
        caractere em todos os aparelhos. O Unicode tem alfabetos completos criados para matemática, ciência e
        outras escritas, como letras {fancy("bold-serif", "negrito")}, {fancy("script", "cursiva")},{" "}
        {fancy("fraktur", "gotica")} e {fancy("small-caps-all", "versalete")}.
      </p>
      <p>
        Como são caracteres e não um arquivo de fonte, o estilo vai junto com o texto. Se você colar 𝐃𝐢𝐬𝐜𝐨𝐫𝐝
        no seu apelido, todo mundo no servidor vê em negrito sem instalar nada. O mesmo truque funciona em
        quase qualquer lugar onde dá para digitar, por isso elas também são chamadas de letras diferentes ou
        fontes para copiar e colar.
      </p>
      <p>
        Um detalhe importante em português: o Unicode só tem versões estilizadas das letras básicas de A a Z e
        dos números. Letras com acento ou cedilha (á, ã, ç, ê) ficam na forma normal, então “ação” vai sair
        com o “ç” e o “ã” sem estilo. Para um resultado uniforme, experimente escrever sem acentos.
      </p>
      <ExamplesFigure
        alt="Exemplos de letras para Discord: as palavras Discord Fonts em estilo negrito, script, gótico, versalete, bolha e decorado"
        caption="As mesmas duas palavras em seis estilos, todos feitos com caracteres Unicode padrão."
      />

      <h2 id="como-usar">Como usar o gerador de letras para Discord</h2>
      <ol>
        <li>
          <strong>Digite seu texto</strong> na caixa lá em cima. Todos os estilos atualizam na hora.
        </li>
        <li>
          <strong>Explore os estilos</strong> ou use os filtros (Negrito, Cursiva, Gótica, Decorativa,
          Estética e Glitch) para reduzir a lista. Toque em <em>Mostrar mais estilos</em> para ver todas as
          opções.
        </li>
        <li>
          <strong>Confira o tamanho</strong> se for para um nome. Os estilos que passam do limite de 32
          caracteres do Discord aparecem com a marca <em>32+</em>.
        </li>
        <li>
          <strong>Toque em Copiar</strong> (ou no próprio texto). Uma mensagem de “Copiado!” confirma que está
          na área de transferência.
        </li>
        <li>
          <strong>Cole no Discord</strong> com Ctrl+V, Cmd+V ou um toque longo no celular, e salve.
        </li>
      </ol>

      <h2 id="mudar-nome">Como mudar a letra do seu nome, apelido ou servidor no Discord</h2>
      <p>
        O Discord muda os menus de vez em quando, então os nomes exatos podem variar na sua versão do app, mas
        os campos são sempre os mesmos.
      </p>
      <h3>Nome de exibição</h3>
      <p>
        É o nome que aparece ao lado das suas mensagens em todos os servidores. Abra as configurações de
        usuário, vá até a parte do perfil, cole seu texto no campo do nome de exibição e salve. Ele pode ter
        até 32 caracteres.
      </p>
      <h3>Apelido no servidor</h3>
      <p>
        Para usar outra letra só em um servidor, abra o menu desse servidor, escolha a opção de editar seu
        perfil no servidor e cole o texto no apelido. Alguns servidores não deixam os membros mudar o apelido;
        nesse caso, peça a um moderador.
      </p>
      <h3>Nome do servidor e dos canais</h3>
      <p>
        Se você administra um servidor, cole o texto no nome do servidor pelas configurações dele, ou edite um
        canal e cole no nome. Canais com nomes como “︱𝐠𝐞𝐧𝐞𝐫𝐚𝐥” são um jeito popular de deixar o servidor
        organizado. Mantenha os canais importantes legíveis para os novos membros se acharem.
      </p>
      <h3>Bio e mensagens</h3>
      <p>
        A seção “Sobre mim” e as mensagens normais aceitam tudo o que tem nesta página, inclusive os estilos
        decorados mais longos, então são o melhor lugar para testar.
      </p>

      <h2 id="melhores-letras">As melhores letras para nomes, bios e servidores</h2>
      <p>A letra certa depende de onde as pessoas vão ver:</p>
      <div className="overflow-x-auto">
        <table>
          <thead>
            <tr>
              <th scope="col">Onde</th>
              <th scope="col">Boas opções</th>
              <th scope="col">Por quê</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Nome de exibição e apelido</td>
              <td>
                {styleLink("bold", "Negrito")}, {styleLink("cursive", "Script em negrito")},{" "}
                {styleLink("small-caps", "Versalete")}
              </td>
              <td>São fáceis de ler em tamanho pequeno e funcionam em quase todos os aparelhos.</td>
            </tr>
            <tr>
              <td>Bio “Sobre mim”</td>
              <td>{styleLink("aesthetic", "Estética")}, molduras de brilhos e kawaii</td>
              <td>Tem mais espaço para enfeitar, e a leitura importa menos do que em um nome.</td>
            </tr>
            <tr>
              <td>Nome do servidor</td>
              <td>{styleLink("gothic", "Gótica")}, traço duplo, moldura real</td>
              <td>Um estilo de título marcante dá uma identidade clara ao servidor.</td>
            </tr>
            <tr>
              <td>Nomes de canais</td>
              <td>Versalete, negrito sem serifa, monoespaçada</td>
              <td>Estilos compactos que deixam a lista de canais organizada.</td>
            </tr>
            <tr>
              <td>Mensagens e memes</td>
              <td>
                {styleLink("glitch", "Glitch")}, {styleLink("upside-down", "De cabeça para baixo")},{" "}
                {styleLink("bubble", "Bolha")}
              </td>
              <td>Chamam atenção em piadas e avisos, mas use com moderação.</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        Uma boa regra: tudo o que as pessoas precisam ler rápido, como um nome que querem mencionar com @,
        deve usar um estilo limpo. Deixe a decoração pesada para o que é só diversão.
      </p>

      <h2 id="formatacao">A formatação de texto do Discord (markdown), explicada</h2>
      <p>
        O Discord também tem uma formatação própria chamada markdown. Em vez de caracteres especiais, você
        coloca símbolos em volta do texto e o Discord aplica o estilo: <code>**negrito**</code>,{" "}
        <code>*itálico*</code>, <code>__sublinhado__</code>, <code>~~tachado~~</code> e{" "}
        <code>||spoiler||</code>. Você também pode começar uma linha com <code>#</code> para um título,{" "}
        <code>-#</code> para um subtexto pequeno ou <code>&gt;</code> para uma citação, e usar blocos de
        código para texto monoespaçado ou até colorido.
      </p>
      <p>
        O markdown só funciona nas mensagens (e em alguns campos do perfil). Nos nomes ele não faz nada, e é
        exatamente por isso que existem as letras Unicode. Teste os dois com a ferramenta de formatação acima
        ou leia o <Link href="/discord-text-formatting">guia completo de formatação de texto</Link> (em
        inglês).
      </p>

      <h2 id="quadrados">Por que algumas letras aparecem como quadrados</h2>
      <p>
        Se alguém vê retângulos vazios ou pontos de interrogação no lugar do seu texto, o aparelho dessa
        pessoa não tem uma fonte com esses caracteres. O texto está certo; é uma limitação daquela tela.
        Algumas dicas práticas:
      </p>
      <ul>
        <li>
          Letras em <strong>negrito, itálico, script, góticas e de traço duplo</strong> funcionam nas versões
          atuais do Windows, macOS, iOS e Android.
        </li>
        <li>
          Letras <strong>quadradas, em bolha escura e algumas de cabeça para baixo</strong> são mais recentes
          e são as que mais falham em celulares antigos, TVs e consoles.
        </li>
        <li>
          Os <strong>estilos com marcas combinadas</strong>, como tachado, sublinhado e zalgo, dependem de
          como cada aparelho empilha as marcas, então podem ficar desalinhados.
        </li>
        <li>
          Os estilos com a etiqueta <strong>Suporte limitado</strong> no gerador são os mais arriscados. Passe
          o mouse ou toque na etiqueta para ver os detalhes.
        </li>
      </ul>

      <h2 id="acessibilidade">Acessibilidade: leitores de tela e letras Unicode</h2>
      <p>
        As letras diferentes parecem letras, mas para o software são símbolos matemáticos ou decorativos.
        Muitos leitores de tela leem cada caractere pelo nome técnico (por exemplo, “mathematical bold capital
        D”) ou pulam o caractere, e as buscas podem não encontrá-lo. Isso deixa seu nome difícil de achar e de
        acompanhar para quem usa tecnologias assistivas.
      </p>
      <p>
        Use as letras para enfeitar, não para informar. Deixe regras, avisos e tudo o que é importante em
        texto normal, e pense em um estilo limpo para o seu nome de exibição para que os outros consigam ler e
        mencionar você com facilidade.
      </p>
    </div>
  );
}

export const homePtBr: HomeContent = {
  title: "Letras para Discord – Gerador de fontes para copiar e colar",
  description:
    "Gerador de letras para Discord grátis: transforme seu texto em mais de 170 estilos para copiar e colar no nome, apelido, servidor ou mensagens.",
  h1: "Letras para Discord: gerador de fontes para copiar e colar",
  intro:
    "Transforme qualquer texto em {count} letras para Discord, de negrito e cursiva a gótica e glitch. Copie um estilo e cole no seu nome, apelido, servidor ou mensagens. Grátis, privado e sem cadastro.",
  generatorLabel: "Gerador de letras para Discord",
  formattingTitle: "Ferramenta de formatação de texto para Discord",
  formattingIntro: (
    <>
      Negrito, spoilers, títulos e texto colorido usam o markdown nativo do Discord. Digite uma vez e copie a
      formatação, ou leia o{" "}
      <Link href="/discord-text-formatting" className={inlineLink}>
        guia completo de formatação
      </Link>{" "}
      (em inglês). Para horários de eventos e contagens regressivas, use o{" "}
      <Link href="/discord-timestamp-generator" className={inlineLink}>
        gerador de timestamp
      </Link>
      .
    </>
  ),
  popularTitle: "Estilos de letra populares para Discord",
  popularIntro: "Geradores focados em um estilo por vez, com dicas de onde cada um funciona melhor.",
  moreGenerators: "Mais geradores:",
  faqHeading: "Perguntas frequentes sobre letras para Discord",
  faqs: [
    {
      question: "O que são letras para Discord?",
      answer:
        "São textos feitos com caracteres Unicode especiais que parecem letras em negrito, cursiva, góticas ou outros estilos. O Discord não tem seletor de fontes, então você gera os caracteres aqui e cola no Discord como qualquer outro texto.",
    },
    {
      question: "Dá para mudar a fonte do Discord?",
      answer:
        "Não diretamente. O Discord deixa você mudar o tamanho do texto e usar markdown para negrito, itálico, títulos e formatos parecidos nas mensagens, mas não dá para escolher outra tipografia. As letras Unicode são a alternativa: são caracteres, não uma configuração de fonte, então todo mundo vê.",
    },
    {
      question: "Como copiar e colar letras para Discord?",
      answer:
        "Digite seu texto na caixa lá em cima, encontre um estilo de que goste e toque em Copiar (ou no próprio texto). Depois abra o Discord e cole no seu nome de exibição, apelido, bio, nome do servidor, canal ou em uma mensagem.",
    },
    {
      question: "Posso usar letras diferentes no meu nome de usuário?",
      answer:
        "Não no seu @nome de usuário único, que só aceita letras minúsculas, números, sublinhados e pontos. As letras diferentes funcionam no nome de exibição e nos apelidos de cada servidor, que são os nomes que a maioria das pessoas vê no chat.",
    },
    {
      question: "Por que algumas letras aparecem como quadrados ou pontos de interrogação?",
      answer:
        "Um quadrado significa que o aparelho não tem uma fonte com aquele caractere. Isso costuma acontecer com símbolos raros em celulares e computadores antigos. Os estilos com a etiqueta Suporte limitado são os que mais fazem isso, então para nomes prefira negrito, itálico ou script.",
    },
    {
      question: "Por que letras com acento e o ç não mudam de estilo?",
      answer:
        "O Unicode só tem versões estilizadas das letras básicas de A a Z e dos números. Letras com acento, til ou cedilha não têm equivalente, então ficam na forma normal. Para um resultado uniforme, escreva essas palavras sem acento.",
    },
    {
      question: "As letras para Discord funcionam no celular?",
      answer:
        "Sim. Dá para copiar e colar deste site no iPhone e no Android, e a maioria dos estilos aparece certinho no app do Discord para celular. A principal exceção é o texto colorido ANSI, que por enquanto só mostra cores no computador e na web.",
    },
    {
      question: "Usar letras diferentes vai contra as regras do Discord?",
      answer:
        "Usar caracteres Unicode não vai contra as regras por si só. Os problemas começam quando um nome é usado para se passar por outra pessoa, fugir da moderação ou ficar ilegível. Cada servidor também pode ter regras próprias para apelidos, então siga os moderadores se pedirem um nome simples.",
    },
    {
      question: "Este gerador é grátis e privado?",
      answer:
        "Sim. É grátis e sem cadastro, e a conversão acontece inteiramente no seu navegador. O texto que você digita não é enviado nem armazenado no nosso servidor.",
    },
  ],
  Article,
};
