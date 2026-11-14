import { smallTextPage, type SmallTextPageContent } from "@/content/small-text-discord";
import { LocalLink } from "../shared";

const L = "pt-br";
const fontGenerator = (
  <LocalLink locale={L} path="/">
    gerador de letras para Discord
  </LocalLink>
);

/** /pt-br/small-text-discord */
export const smallTextPtBr: SmallTextPageContent = {
  path: "/small-text-discord",
  name: "Letras Pequenas para Discord",
  title: "Letras Pequenas no Discord: Como Fazer Texto Pequeno",
  h1: "Gerador de Letras Pequenas para Discord",
  intro:
    "Digite abaixo para criar letras pequenas que você pode copiar para o seu nome, bio ou nome do servidor no Discord. Para texto pequeno nas mensagens, comece a linha com -# e um espaço.",
  description:
    "Fazer letras pequenas no Discord é fácil: digite -# para subtexto nas mensagens ou copie e cole letras miniatura no seu nome e bio. Funciona no PC e no celular.",
  featuredIds: smallTextPage.featuredIds,
  featuredLabel: "Letras pequenas",
  sampleText: "letras pequenas",
  toolLabel: "Gerador de letras pequenas",
  faqHeading: "Perguntas Frequentes",
  faqs: [
    {
      question: "Qual é o comando para texto pequeno no Discord?",
      answer: "Digite -# seguido de um espaço no começo da linha. O Discord chama isso de subtexto.",
    },
    {
      question: "Por que o meu -# aparece como texto normal?",
      answer:
        "Normalmente há um espaço ou caractere antes dele, falta o espaço depois, ou o celular trocou o hífen por um travessão. Atualizar o app do Discord também resolve em versões antigas.",
    },
    {
      question: "O texto pequeno funciona no Discord do celular?",
      answer: "Sim. Digite -# e um espaço do mesmo jeito. O # fica na página de símbolos do teclado.",
    },
    {
      question: "Dá para deixar meu nome do Discord pequeno?",
      answer:
        "Não com -#. Use letras em versalete ou sobrescritas, copiadas e coladas, no seu nome de exibição. O nome de usuário não aceita esses caracteres, porque só permite letras minúsculas, números, sublinhados e pontos.",
    },
    {
      question: "Dá para deixar uma mensagem inteira pequena?",
      answer:
        "Sim, mas cada linha precisa do seu próprio -#. Em mensagens longas fica difícil de ler, então a maioria das pessoas usa o subtexto só para notas curtas.",
    },
    {
      question: "O texto pequeno funciona em bots e webhooks?",
      answer:
        "Sim. Bots e webhooks podem enviar linhas com -# como qualquer usuário, por isso você vê muito isso em notas de rodapé de mensagens de bots.",
    },
  ],
  body: (
    <>
      <h2>Como fazer letras pequenas no Discord (resposta rápida)</h2>
      <p>
        Para deixar o texto pequeno no Discord, digite <code>-#</code> e um espaço no começo da mensagem, e
        depois o seu texto. Aperte Enter e ele aparece em letras menores e cinzas, abaixo do tamanho normal do
        chat.
      </p>
      <p>
        Pronto, isso resolve nas mensagens. O Discord chama isso de subtexto, e funciona no PC, no navegador e
        no celular.
      </p>
      <p>
        Mas tem um detalhe que a maioria dos guias não conta: o <code>-#</code> só funciona em mensagens. Ele
        não diminui o seu nome de exibição, a sua bio nem o nome do servidor. Para isso, você precisa de
        letras pequenas feitas com caracteres especiais, que você copia e cola. Mostro como mais abaixo.
      </p>
      <p>Então este guia cobre as duas coisas: texto pequeno no chat e texto pequeno em todo o resto.</p>

      <h2>Como digitar texto pequeno nas mensagens do Discord</h2>
      <p>Os passos são iguais no PC, no Mac, na versão do navegador e no app do celular.</p>
      <ol>
        <li>Clique (ou toque) na caixa de mensagem de qualquer canal ou DM.</li>
        <li>
          Digite <code>-#</code> bem no começo da linha.
        </li>
        <li>Coloque um espaço.</li>
        <li>Escreva a mensagem e envie.</li>
      </ol>
      <p>Então, se você digitar isto:</p>
      <pre>
        <code>-# isto é um texto pequeno</code>
      </pre>
      <p>
        O Discord mostra &ldquo;isto é um texto pequeno&rdquo; com letras menores e mais claras que o resto do
        chat.
      </p>
      <p>
        As pessoas usam isso para observações, avisos de &ldquo;editado&rdquo;, créditos embaixo de uma
        imagem, avisos em mensagens de bots ou só para cochichar uma piada sem roubar a atenção do chat. É
        discreto de propósito, então funciona melhor em linhas curtas, não em parágrafos inteiros.
      </p>
      <p>
        <strong>No celular:</strong> a tecla # costuma ficar na página de símbolos do teclado (toque em ?123
        ou na tecla de números). Alguns teclados colocam letra maiúscula automática ou um espaço depois do
        hífen. Se o texto não diminuir, confira se você digitou um hífen, depois #, depois um único espaço,
        sem nada antes.
      </p>

      <h2>Misturando texto pequeno com outras formatações</h2>
      <p>
        O subtexto combina bem com quase todas as outras formatações do Discord, desde que o <code>-#</code>{" "}
        continue bem no começo da linha.
      </p>
      <ul>
        <li>
          Texto pequeno em negrito: <code>-# **importante**</code>
        </li>
        <li>
          Texto pequeno em itálico: <code>-# *só comentando*</code>
        </li>
        <li>
          Spoiler pequeno: <code>-# ||o final||</code>
        </li>
        <li>
          Link pequeno: <code>-# [fonte](https://example.com)</code>
        </li>
      </ul>
      <p>
        <strong>Várias linhas pequenas na mesma mensagem:</strong> cada linha precisa do seu próprio{" "}
        <code>-#</code>. Aperte <strong>Shift + Enter</strong> para pular de linha (no celular, a tecla de
        retorno faz isso) e comece a próxima linha com <code>-#</code> de novo:
      </p>
      <pre>
        <code>{"Mensagem principal no tamanho normal\n-# observação um\n-# observação dois"}</code>
      </pre>
      <p>
        Se você colocar o <code>-#</code> só na primeira linha, tudo depois da quebra de linha volta ao
        tamanho normal.
      </p>
      <p>
        Uma coisa que não funciona: subtexto e título na mesma linha. Uma linha é título (<code>#</code>,{" "}
        <code>##</code>, <code>###</code>) ou subtexto (<code>-#</code>), nunca os dois.
      </p>

      <h2>O texto pequeno não funciona? Confira isto primeiro</h2>
      <p>Em nove de cada dez casos, é uma destas coisas:</p>
      <ul>
        <li>
          <strong>Tem algo antes do -#.</strong> Até um único espaço ou emoji na frente quebra o comando. O{" "}
          <code>-#</code> precisa ser a primeira coisa da linha.
        </li>
        <li>
          <strong>Falta o espaço depois do -#.</strong> <code>-#oi</code> fica normal. <code>-# oi</code> fica
          pequeno.
        </li>
        <li>
          <strong>Traço errado.</strong> Alguns celulares e editores de texto trocam o hífen (-) por um traço
          mais longo (– ou —) ao colar. Apague e digite um hífen normal.
        </li>
        <li>
          <strong>Está dentro de um bloco de código.</strong> Tudo entre crases aparece exatamente como foi
          digitado, então o <code>-#</code> aparece como caracteres normais.
        </li>
        <li>
          <strong>Você escapou o comando sem querer.</strong> Uma barra invertida na frente (<code>\-#</code>)
          diz ao Discord para mostrar os símbolos em vez de formatar.
        </li>
        <li>
          <strong>O app está desatualizado.</strong> Versões antigas do Discord não entendem subtexto.
          Atualize o app e o texto aparece certinho.
        </li>
        <li>
          <strong>Você está tentando no nome ou na bio.</strong> O subtexto é para mensagens. Para nomes e
          perfis, use o método de copiar e colar abaixo.
        </li>
      </ul>

      <h2>Letras pequenas para nome, bio e nome do servidor no Discord</h2>
      <p>
        Para qualquer coisa fora das mensagens, o truque é o Unicode: caracteres especiais que parecem letras
        miniatura. O Discord trata esses caracteres como texto normal, então eles aparecem em qualquer lugar
        onde você pode digitar.
      </p>
      <p>Dois estilos funcionam bem:</p>
      <ul>
        <li>
          <strong>
            <LocalLink locale={L} path="/discord-font-generator/small-caps">
              Versalete
            </LocalLink>
            :
          </strong>{" "}
          <span className="fancy-text">ᴛᴇxᴛᴏ ᴘᴇǫᴜᴇɴᴏ</span> (limpo e fácil de ler, ótimo para nomes de
          exibição)
        </li>
        <li>
          <strong>Sobrescrito:</strong> <span className="fancy-text">ᵗᵉˣᵗᵒ ᵐⁱⁿⁱ</span> (elevado e bem pequeno,
          divertido para bios e tags curtas)
        </li>
      </ul>
      <p>
        Você não precisa caçar letra por letra. Digite o texto no nosso {fontGenerator}, copie o estilo
        pequeno que preferir e cole onde quiser.
      </p>
      <p>
        <strong>Onde as letras pequenas copiadas funcionam:</strong>
      </p>
      <ul>
        <li>Nome de exibição e apelido no servidor</li>
        <li>Sobre mim (a sua bio)</li>
        <li>Nomes de servidor e de cargos</li>
        <li>Mensagens normais, se você quiser o visual sem a cor cinza do subtexto</li>
      </ul>
      <p>
        <strong>Onde não funcionam:</strong> no nome de usuário. Os nomes de usuário do Discord só aceitam
        letras minúsculas, números, sublinhados e pontos, então caracteres especiais são recusados. Se você
        precisa de um novo, o nosso{" "}
        <LocalLink locale={L} path="/discord-username-generator">
          gerador de nomes de usuário para Discord
        </LocalLink>{" "}
        só mostra nomes que seguem essas regras.
      </p>
      <p>
        Duas desvantagens, para ser sincero. Nem toda letra tem uma versão miniatura (não existe q
        sobrescrito, por exemplo), então algumas letras podem ficar um pouco diferentes. E leitores de tela
        podem ler esses caracteres de um jeito estranho, então deixe coisas importantes, como as regras do
        servidor, em texto normal.
      </p>

      <h2>Subtexto ou letras pequenas copiadas: qual usar</h2>
      <p>Use -# nas mensagens do chat e letras pequenas Unicode em todo o resto.</p>
      <div className="overflow-x-auto">
        <table className="min-w-[34rem]">
          <thead>
            <tr>
              <th scope="col">
                <span className="sr-only">Recurso</span>
              </th>
              <th scope="col">Subtexto (-#)</th>
              <th scope="col">Letras pequenas copiadas</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">Funciona em mensagens</th>
              <td>Sim</td>
              <td>Sim</td>
            </tr>
            <tr>
              <th scope="row">Funciona no nome de exibição, bio e nome do servidor</th>
              <td>Não</td>
              <td>Sim</td>
            </tr>
            <tr>
              <th scope="row">Funciona no nome de usuário</th>
              <td>Não</td>
              <td>Não</td>
            </tr>
            <tr>
              <th scope="row">Aparência</th>
              <td>Letras normais, menores e cinzas</td>
              <td>Caracteres em formato de letra miniatura, na cor normal</td>
            </tr>
            <tr>
              <th scope="row">Fácil de ler</th>
              <td>Muito</td>
              <td>Quase sempre; algumas letras ficam diferentes</td>
            </tr>
            <tr>
              <th scope="row">Como fazer</th>
              <td>
                Digite <code>-#</code> e um espaço
              </td>
              <td>Copie de um gerador de letras</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2>Quer texto maior?</h2>
      <p>
        O subtexto tem um irmão mais velho. Comece uma linha com um, dois ou três <code>#</code> e um espaço
        para criar títulos:
      </p>
      <pre>
        <code>{"# Título grande\n## Título médio\n### Título pequeno"}</code>
      </pre>
      <p>Outros truques de formatação que combinam bem com texto pequeno:</p>
      <ul>
        <li>
          <code>**negrito**</code>, <code>*itálico*</code>, <code>__sublinhado__</code> e{" "}
          <code>~~riscado~~</code>
        </li>
        <li>
          <code>||spoiler||</code> para esconder o texto até alguém clicar
        </li>
        <li>
          <code>&gt; citação</code> para citar uma linha
        </li>
        <li>
          Todos os outros comandos estão no nosso guia de{" "}
          <LocalLink locale={L} path="/discord-text-formatting">
            formatação de texto no Discord
          </LocalLink>
        </li>
      </ul>
      <p>
        E se o que você quer mesmo é deixar o seu nome com outra cara, experimente os{" "}
        <LocalLink locale={L} path="/discord-symbols">
          símbolos para Discord
        </LocalLink>{" "}
        e o nosso {fontGenerator}.
      </p>
    </>
  ),
};
