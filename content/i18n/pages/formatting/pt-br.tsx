import type { FormattingPageContent } from "../../types";
import { AnsiExample, LocalLink, MarkdownCheatSheet } from "../shared";

const L = "pt-br";

function Guide() {
  return (
    <div className="prose-content">
      <h2 id="o-que-e-markdown">O que é a formatação de texto do Discord?</h2>
      <p>
        O Discord usa uma linguagem de marcação simples chamada <strong>markdown</strong>. Você coloca alguns
        símbolos em volta das palavras e o Discord transforma em negrito, itálico, sublinhado, tachado ou
        texto escondido quando a mensagem é enviada. O markdown já vem no Discord, então funciona igual para
        todo mundo, mas só vale dentro das mensagens e de alguns campos do perfil, como o “Sobre mim”. Ele não
        faz nada em nomes de usuário, nomes de exibição ou nomes de servidor.
      </p>

      <h2 id="cola">Cola de markdown do Discord</h2>
      <MarkdownCheatSheet
        headers={["Estilo", "Digite isto", "Ideal para"]}
        rows={[
          ["Negrito", "Ênfase, palavras-chave"],
          ["Itálico", "Tom, títulos"],
          ["Negrito e itálico", "Ênfase forte"],
          ["Sublinhado", "Destaques (combine com outros, ex.: __**texto**__)"],
          ["Tachado", "Correções e piadas"],
          ["Spoiler", "Esconder reviravoltas ou respostas até alguém clicar"],
          ["Código em linha", "Comandos, código curto"],
          ["Bloco de código", "Código de várias linhas, arte ASCII, texto monoespaçado"],
          ["Citação", "Citar uma linha"],
          ["Citação de várias linhas", "Citar tudo o que vem depois"],
          ["Títulos", "Títulos grandes, médios e pequenos"],
          ["Subtexto", "Notas pequenas em cinza"],
          ["Lista", "Listas com marcadores e numeradas"],
          ["Link com texto", "Links de texto clicáveis"],
        ]}
      />
      <p>
        Datas e horários têm sintaxe própria: <code>&lt;t:1793740800:R&gt;</code> vira uma contagem regressiva
        ao vivo que aparece no fuso de cada leitor. Crie uma com o{" "}
        <LocalLink locale={L} path="/discord-timestamp-generator">
          gerador de timestamp do Discord
        </LocalLink>
        .
      </p>

      <h2 id="titulos-e-subtexto">Títulos e subtexto</h2>
      <p>
        Comece uma linha com <code>#</code>, <code>##</code> ou <code>###</code> e um espaço para criar um
        título grande, médio ou pequeno. Títulos são ótimos para canais de regras, avisos e posts de eventos.
        Para o efeito contrário, comece a linha com <code>-#</code> e um espaço para criar um subtexto pequeno
        e apagado, útil para notas, créditos ou avisos de “editado”. Os dois só funcionam no começo da linha.
      </p>

      <h2 id="texto-colorido">Como fazer texto colorido no Discord</h2>
      <p>
        O Discord não tem opção de cor para mensagens normais, mas os blocos de código com a linguagem{" "}
        <code>ansi</code> aceitam códigos de cor de terminal. A ferramenta acima cria isso para você: escolha
        a cor do texto, um fundo opcional, negrito ou sublinhado e copie o resultado. Por trás, ela cria um
        bloco assim, em que cada código de cor começa com um caractere de escape invisível:
      </p>
      <AnsiExample text="Seu texto azul" />
      <p>
        As cores aparecem no app do Discord para computador e no navegador. Os apps para celular, por
        enquanto, mostram o texto dentro de um bloco de código comum, sem cor, então não dependa só da cor
        para passar uma informação.
      </p>

      <h2 id="blocos-de-codigo">Blocos de código e destaque de sintaxe</h2>
      <p>
        Coloque o texto entre três crases para criar um bloco de código. Adicione o nome de uma linguagem logo
        depois das crases de abertura, como <code>```js</code>, <code>```py</code> ou <code>```css</code>, e o
        Discord destaca a sintaxe. Os blocos de código também mantêm os espaços exatamente como foram
        digitados, o que ajuda em tabelas e arte com texto.
      </p>

      <h2 id="combinar-e-escapar">Combinar e “escapar” a formatação</h2>
      <p>
        A maioria dos estilos pode ser combinada. <code>__***texto***__</code> deixa o texto em negrito,
        itálico e sublinhado ao mesmo tempo, e <code>||**texto**||</code> esconde texto em negrito atrás de um
        spoiler. Se quiser mostrar os símbolos em vez da formatação, coloque uma barra invertida antes:{" "}
        <code>\*sem itálico\*</code>. Colocar o texto entre crases simples também mostra os símbolos
        literalmente.
      </p>

      <h2 id="markdown-ou-unicode">Markdown ou letras Unicode?</h2>
      <p>
        O markdown muda como o Discord <em>exibe</em> o texto comum, enquanto as letras Unicode mudam os
        próprios caracteres. Por isso o markdown é o melhor para formatar mensagens de forma legível, e os
        estilos Unicode são o único jeito de ter letras em negrito, cursivas ou góticas em um nome de exibição
        ou nome de canal. Teste os dois no{" "}
        <LocalLink locale={L} path="/">
          gerador de letras para Discord
        </LocalLink>{" "}
        ou vá direto a um estilo como{" "}
        <LocalLink locale={L} path="/discord-font-generator/bold">
          negrito
        </LocalLink>{" "}
        ou{" "}
        <LocalLink locale={L} path="/discord-font-generator/cursive">
          cursiva
        </LocalLink>
        .
      </p>

      <h2 id="dicas">Dicas para uma formatação legível</h2>
      <ul>
        <li>Use títulos para organizar posts longos em vez de deixar tudo em negrito.</li>
        <li>Sempre coloque spoiler em reviravoltas, respostas de enigmas e qualquer coisa sensível.</li>
        <li>Deixe a cor para destaque e decoração, já que quem está no celular não vê.</li>
        <li>Leitores de tela lidam bem com markdown, então ele é mais acessível que letras Unicode.</li>
      </ul>
    </div>
  );
}

export const formattingPtBr: FormattingPageContent = {
  name: "Formatação de texto do Discord",
  title: "Formatação de texto do Discord – Negrito, cores e markdown",
  description:
    "Aprenda a formatar texto no Discord: negrito, itálico, sublinhado, spoiler, títulos, subtexto, blocos de código e texto colorido. Copie o markdown com um clique.",
  h1: "Formatação de texto do Discord: guia de markdown e gerador",
  intro:
    "Digite sua mensagem uma vez e copie em negrito, itálico, sublinhado, spoiler, título, subtexto, código ou texto colorido, tudo com o markdown nativo do Discord.",
  toolLabel: "Ferramenta de formatação markdown do Discord",
  appName: "Ferramenta de formatação de texto do Discord",
  Guide,
};
