import type { Faq } from "@/content/faqs";
import { LocalLink } from "../shared";

const L = "pt-br";
const fontGenerator = (
  <LocalLink locale={L} path="/">
    gerador de letras para Discord
  </LocalLink>
);

export const discordSymbolsPagePtBr = {
  path: "/discord-symbols",
  name: "Símbolos para Discord",
  title: "Símbolos para Discord: Copie e Cole Símbolos para Canais e Divisores",
  description:
    "Copie e cole mais de 300 símbolos para Discord para nomes de canais, apelidos e bios. Monte nomes de canais estilosos como 📢︱avisos com prévia ao vivo.",
  h1: "Símbolos para Discord: Copie e Cole Símbolos para Nomes de Canais",
  intro:
    "Copie símbolos legais para os nomes dos canais, o nome do servidor, o apelido e a bio no Discord. Monte um nome de canal com prévia ao vivo ou toque em qualquer símbolo abaixo para copiar na hora.",
  builderLabel: "Criador de nomes de canais do Discord",
  appName: "Criador de Nomes de Canais do Discord",
  templatesHeading: "Modelos de Nomes de Canais Estilosos para Discord",
  templatesIntro: (
    <>
      Toque em um nome para copiar ou use <strong className="text-text">Copiar tudo</strong> para pegar o
      conjunto inteiro, um por linha. Nomes de categorias e de canais de voz mantêm maiúsculas e espaços.
    </>
  ),
  libraryHeading: "Símbolos para Discord para Copiar e Colar",
  libraryIntro:
    "Toque em qualquer símbolo para copiar. Busque pelo nome ou filtre por categoria, e salve os que você mais usa nos favoritos.",
  faqHeading: "Perguntas Frequentes sobre Símbolos",
} as const;

export const discordSymbolsFaqsPtBr: readonly Faq[] = [
  {
    question: "Como coloco símbolos nos nomes dos canais do Discord?",
    answer:
      "Copie um símbolo ou um nome completo desta página, edite o canal no Discord, cole no campo Nome do canal e salve. Você precisa da permissão Gerenciar canais.",
  },
  {
    question: "Qual é o símbolo de barra usado nos nomes de canais do Discord?",
    answer:
      "O mais popular é a barra vertical ︱, usada assim: 📢︱avisos. Outros divisores comuns são ┃, │, ┊ e ・.",
  },
  {
    question: "Por que o Discord coloca hífens no nome do meu canal?",
    answer:
      "Nomes de canais de texto não podem ter espaços, então o Discord troca os espaços por hífens e deixa as letras minúsculas. Use um símbolo como ・ ou ︱ entre as palavras. Canais de voz e categorias mantêm os espaços.",
  },
  {
    question: "Posso usar símbolos no meu nome de usuário do Discord?",
    answer:
      "Não no @nome de usuário, que só aceita letras minúsculas, números, sublinhados e pontos. Você pode usar símbolos no nome de exibição, no apelido do servidor e no Sobre mim.",
  },
  {
    question: "Por que meus símbolos aparecem como quadradinhos?",
    answer:
      "O aparelho de quem está vendo não tem uma fonte para aquele caractere. Prefira símbolos comuns como ︱ ・ ★ ♡ em nomes importantes.",
  },
  {
    question: "Os símbolos para Discord são grátis?",
    answer:
      "Sim. São caracteres Unicode padrão, então você pode copiar e usar onde quiser, de graça. Nada do que você digita fica salvo.",
  },
];

const bestRows = [
  ["Barra divisória", "📢︱avisos", "Servidores organizados e profissionais"],
  ["Pontilhado", "┊🎮・jogos", "Servidores aesthetic e de comunidade"],
  ["Colchetes fofos", "꒰🌸꒱selfies", "Servidores fofos e kawaii"],
  ["Brilho", "⟡・geral", "Servidores minimalistas"],
  ["Moldura japonesa", "『🎵』música", "Servidores de anime"],
  ["Seta", "»📜︱regras", "Servidores de jogos"],
] as const;

/** Guide below the tools on /pt-br/discord-symbols. */
export function DiscordSymbolsArticlePtBr() {
  return (
    <>
      <h2>O que são símbolos para Discord?</h2>
      <p>
        Símbolos para Discord são caracteres Unicode especiais, como divisores, colchetes, estrelas, corações e
        setas, que você cola no Discord como se fosse texto normal. Não são imagens nem emojis enviados para um
        servidor, então todo mundo vê sem precisar instalar nada.
      </p>
      <p>
        Donos de servidor usam esses símbolos para deixar a lista de canais organizada e estilosa,
        transformando um simples &ldquo;#avisos&rdquo; em algo como &ldquo;📢︱avisos&rdquo;. Os membros usam
        para decorar apelidos e bios. Como são só caracteres, você pode copiar desta página, colar em qualquer
        lugar onde o Discord deixa digitar, e eles aparecem iguais para (quase) todo mundo.
      </p>

      <h2>Como colocar símbolos nos nomes dos canais do Discord</h2>
      <ol>
        <li>Monte um nome de canal com a ferramenta acima ou copie um dos modelos.</li>
        <li>No Discord, clique com o botão direito no canal que quer renomear (ou segure o dedo nele no celular).</li>
        <li>
          Escolha <strong>Editar canal</strong>.
        </li>
        <li>
          Apague o nome antigo e cole o novo em <strong>Nome do canal</strong>.
        </li>
        <li>
          Clique em <strong>Salvar alterações</strong>.
        </li>
      </ol>
      <p>
        Você precisa da permissão <strong>Gerenciar canais</strong>. Se a opção Editar canal não aparecer, peça
        para um administrador do servidor dar essa permissão ao seu cargo.
      </p>
      <p>
        <strong>No celular:</strong> segure o dedo no canal, toque em <strong>Editar canal</strong>, cole no
        campo do nome e toque em Salvar. Copie o nome desta página no navegador do celular antes e depois troque
        para o app do Discord.
      </p>
      <p>
        Vai renomear o servidor inteiro? Use <strong>Copiar tudo</strong> em um dos modelos acima e cole a lista
        num app de notas. Assim você copia cada linha enquanto passa pelos canais, um por um, e todos os nomes
        ficam combinando. Categorias são renomeadas do mesmo jeito: clique com o botão direito no nome da
        categoria e escolha Editar categoria.
      </p>

      <h2>Regras de nomes de canais do Discord que você precisa saber</h2>
      <ul>
        <li>
          <strong>Canais de texto ficam em minúsculas e com hífens.</strong> O Discord troca as maiúsculas por
          minúsculas e os espaços por hífens. Canais de voz e categorias mantêm maiúsculas e espaços, por isso
          nomes de categoria como &ldquo;━━ 𝐈𝐍𝐅𝐎 ━━&rdquo; funcionam.
        </li>
        <li>
          <strong>Até 100 caracteres.</strong> É bastante, mas nomes longos são cortados na barra lateral, então
          quanto mais curto, melhor.
        </li>
        <li>
          <strong>A maioria dos símbolos funciona, mas não todos.</strong> O Discord aceita quase todos os emojis
          e símbolos Unicode, mas pode remover ou trocar alguns caracteres. Se um símbolo sumir depois de salvar,
          tente outro.
        </li>
        <li>
          <strong>Deixe a palavra legível.</strong> Os membros procuram canais digitando o nome. Um nome como
          &ldquo;📜︱regras&rdquo; ainda aparece quando alguém busca &ldquo;regras&rdquo;, mas um nome todo
          estilizado pode não aparecer.
        </li>
        <li>
          <strong>Acentos funcionam.</strong> Nomes como &ldquo;🎵︱música&rdquo; ou &ldquo;💡︱sugestões&rdquo;
          ficam certinhos, então não precisa tirar os acentos do português.
        </li>
      </ul>
      <p>
        Por isso a maioria dos servidores populares coloca os símbolos em volta do nome, e não dentro dele. O
        emoji e o divisor fazem a decoração, e a palavra continua fácil de digitar, buscar e mencionar com o link
        de canal <code>#</code>.
      </p>

      <h2>Onde mais usar símbolos no Discord</h2>
      <p>
        <strong>Nome de exibição e apelido no servidor.</strong> Coloque um ou dois símbolos em volta do seu
        nome, como &ldquo;✦ Nova ✦&rdquo;. Os dois têm limite de 32 caracteres, então use decorações curtas.
      </p>
      <p>
        <strong>Sobre mim (bio).</strong> A bio tem espaço para divisores e marcadores, o que facilita separar o
        texto em pequenas seções organizadas.
      </p>
      <p>
        <strong>Nome do servidor.</strong> Um símbolo de cada lado, como &ldquo;꧁ Moonlight ꧂&rdquo;, destaca o
        seu servidor na lista de servidores.
      </p>
      <p>
        <strong>Nomes de cargos.</strong> Símbolos ajudam a separar grupos de cargos, como &ldquo;━━ Staff
        ━━&rdquo;, ou a marcar cargos especiais com ★ ou ♛.
      </p>
      <p>
        <strong>Mensagens.</strong> Use setas, checks e marcadores para deixar avisos e listas mais fáceis de
        ler.
      </p>
      <p>
        O único lugar onde símbolos não funcionam é o seu @nome de usuário, que só aceita letras minúsculas,
        números, sublinhados e pontos. Para letras estilizadas no nome, use o {fontGenerator}, e para ideias de
        nomes, o{" "}
        <LocalLink locale={L} path="/discord-name-generator">
          gerador de nomes para Discord
        </LocalLink>
        .
      </p>

      <h2>Melhores símbolos para nomes de canais estilosos</h2>
      <div className="overflow-x-auto">
        <table>
          <thead>
            <tr>
              <th scope="col">Estilo</th>
              <th scope="col">Exemplo</th>
              <th scope="col">Ideal para</th>
            </tr>
          </thead>
          <tbody>
            {bestRows.map(([style, example, use]) => (
              <tr key={style}>
                <td>{style}</td>
                <td className="whitespace-nowrap">{example}</td>
                <td>{use}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p>
        Escolha um estilo e use em todos os canais. Misturar três divisores diferentes deixa a barra lateral
        bagunçada, enquanto um padrão único fica com cara de servidor profissional.
      </p>
      <p>
        Uma boa receita é dar a cada canal um emoji que indique para que ele serve e usar o mesmo divisor em
        todos. Use maiúsculas em negrito com linhas nas categorias, como &ldquo;━━ 𝐈𝐍𝐅𝐎 ━━&rdquo;, para as seções
        se destacarem dos canais. Nos canais de voz, um emoji de alto-falante ou fone de ouvido com um nome curto
        e com maiúscula, como &ldquo;🎧︱Sala de Música&rdquo;, mostra na hora onde a galera se encontra.
      </p>

      <h2>Por que alguns símbolos aparecem como quadradinhos</h2>
      <p>
        Se um símbolo aparece como um quadrado vazio ou um ponto de interrogação, o aparelho de quem está vendo
        não tem uma fonte com aquele caractere. O símbolo continua lá, só não consegue ser desenhado.
      </p>
      <p>
        Símbolos comuns como ︱ ・ ★ ♡ → funcionam em quase todo lugar. Caracteres decorativos mais raros podem
        falhar em celulares antigos, consoles e smart TVs. Antes de renomear o servidor inteiro, teste um nome de
        canal no computador e no celular.
      </p>
      <p>
        As escolhas mais seguras estão nas seções Divisores, Setas, Estrelas e Marcadores, no começo da
        biblioteca. Colchetes japoneses como 『 』 e os colchetes fofos ꒰ ꒱ funcionam bem em celulares e
        computadores atuais, mas caracteres muito novos ou raros são os primeiros a falhar. Se algum membro
        reclamar de quadradinhos, troque aquele símbolo por um mais simples em vez de pedir para todo mundo
        atualizar o aparelho.
      </p>

      <h2>Símbolos, emojis e letras: qual a diferença?</h2>
      <ul>
        <li>
          <strong>Símbolos</strong> são caracteres Unicode únicos, como ︱ ou ★. Eles ficam da mesma cor do texto
          em volta.
        </li>
        <li>
          <strong>Emojis</strong> são figurinhas coloridas. Podem ser os emojis padrão que todo mundo tem ou
          emojis personalizados enviados para um servidor.
        </li>
        <li>
          <strong>Letras estilizadas</strong> deste site, como 𝐧𝐞𝐠𝐫𝐢𝐭𝐨 ou 𝓬𝓾𝓻𝓼𝓲𝓿𝓪, funcionam em nomes onde a
          formatação não funciona.
        </li>
      </ul>
      <p>
        Combine os três para o melhor resultado. Estilize as letras com o {fontGenerator}, diminua com as{" "}
        <LocalLink locale={L} path="/small-text-discord">
          letras pequenas
        </LocalLink>
        , use{" "}
        <LocalLink locale={L} path="/number-fonts">
          números estilizados
        </LocalLink>{" "}
        para contagens e rankings, e a{" "}
        <LocalLink locale={L} path="/discord-text-formatting">
          formatação de texto do Discord
        </LocalLink>{" "}
        para negrito, títulos e spoilers nas mensagens.
      </p>
    </>
  );
}
