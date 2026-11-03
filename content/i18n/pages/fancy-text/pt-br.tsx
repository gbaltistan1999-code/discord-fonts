import { hrefFor } from "@/lib/i18n";
import type { ToolPageContent } from "../../types";
import { FancyStyleTable, LocalLink, StyleGeneratorLinks } from "../shared";

const L = "pt-br";

function Article() {
  return (
    <>
      <h2>Como as letras diferentes funcionam de verdade</h2>
      <p>Esta é a parte que quase nenhum gerador explica: letra diferente não é uma fonte.</p>
      <p>
        Apps como o Discord e o Instagram não deixam você escolher uma tipografia. O que eles aceitam é
        qualquer caractere do Unicode, o padrão que dá a cada letra, símbolo e emoji de qualquer aparelho o
        seu próprio código. E o Unicode tem vários alfabetos completos que imitam as letras normais. Em 2001
        ele ganhou letras em negrito, itálico, script, Fraktur (gótica) e de traço duplo para os matemáticos
        escreverem fórmulas. O versalete vem do alfabeto fonético usado pelos linguistas, e as letras largas
        de estilo “vaporwave” vêm dos sistemas de escrita japonês e chinês.
      </p>
      <p>
        Um gerador de letras diferentes troca cada letra normal pela sua “gêmea”. O “A” vira{" "}
        <span className="fancy-text">𝓐</span>, <span className="fancy-text">𝔄</span> ou{" "}
        <span className="fancy-text">🅐</span>. Como o resultado é feito de caracteres de verdade, ele mantém o
        visual onde você colar, e todo mundo vê a mesma coisa.
      </p>
      <p>
        Só um detalhe: esses alfabetos cobrem apenas as letras de A a Z e os números. Letras com acento, til
        ou cedilha (á, ã, ç) ficam normais, então escreva sem acentos se quiser um resultado uniforme.
      </p>

      <h2>Quais letras diferentes funcionam melhor (e onde)</h2>
      <p>
        Nem todo estilo é igualmente seguro. Alguns aparecem em quase todo celular e computador; outros
        quebram em aparelhos antigos. Este guia rápido se baseia em como cada estilo é construído:
      </p>
      <FancyStyleTable
        headers={["Estilo", "Exemplo", "Leitura", "Compatibilidade", "Ideal para"]}
        rows={[
          ["Negrito / Negrito sem serifa", "Alta", "Excelente", "Nomes, títulos"],
          ["Script / Script em negrito", "Média", "Excelente", "Nomes de exibição, bios"],
          ["Gótica (Fraktur)", "Média", "Excelente", "Perfis gamer, nomes de servidor"],
          ["Traço duplo", "Alta", "Excelente", "Nomes limpos e modernos"],
          ["Versalete", "Alta", "Muito boa", "Bios, nomes de canais"],
          ["Vaporwave", "Alta", "Muito boa", "Bios estéticas"],
          ["Bolha / Círculos", "Média", "Boa", "Nomes divertidos, mensagens"],
          ["Quadrados / Bolha escura", "Média", "Pior em aparelhos antigos", "Palavras curtas, avisos"],
          ["Glitch / Zalgo", "Baixa", "Varia", "Só piadas e memes"],
        ]}
      />
      <p>
        Nosso gerador marca os estilos mais arriscados com a etiqueta “Suporte limitado”, para você
        identificar antes de colar.
      </p>
      <p>
        Quer um estilo só? Experimente os geradores específicos:{" "}
        <StyleGeneratorLinks
          locale={L}
          lastSeparator=" e "
          labels={[
            ["cursive", "cursiva"],
            ["gothic", "gótica"],
            ["bold", "negrito"],
            ["small-caps", "versalete"],
            ["aesthetic", "estética"],
            ["bubble", "bolha"],
            ["glitch", "glitch"],
            ["upside-down", "de cabeça para baixo"],
          ]}
        />
        .
      </p>

      <h2>Como usar</h2>
      <ol>
        <li>Digite ou cole seu texto na caixa. Todos os estilos atualizam enquanto você digita.</li>
        <li>
          Use os filtros (Negrito, Cursiva, Gótica, Decorativa, Estética, Glitch) se já sabe a vibe que quer.
        </li>
        <li>Toque em um estilo para copiar. Vai aparecer a confirmação “Copiado!”.</li>
        <li>Cole no seu app e salve.</li>
      </ol>
      <p>
        Dica: antes de fechar um nome, cole numa mensagem para um amigo que usa outro aparelho. Se ele vir
        certinho, está tudo bem.
      </p>

      <h2>Onde as letras diferentes funcionam e onde não</h2>
      <p>
        Funcionam em quase todo lugar onde dá para digitar: nomes de exibição, apelidos, bios, nomes de
        servidor e mensagens do Discord, além de Instagram, TikTok, Roblox, Facebook, YouTube e X. Para dicas
        de cada plataforma, veja as páginas (em inglês) de{" "}
        <LocalLink locale={L} path="/instagram-fonts">
          Instagram
        </LocalLink>
        ,{" "}
        <LocalLink locale={L} path="/tiktok-fonts">
          TikTok
        </LocalLink>
        ,{" "}
        <LocalLink locale={L} path="/roblox-fonts">
          Roblox
        </LocalLink>{" "}
        e{" "}
        <LocalLink locale={L} path="/facebook-fonts">
          Facebook
        </LocalLink>
        .
      </p>
      <p>Normalmente não funcionam em lugares que só aceitam caracteres básicos:</p>
      <ul>
        <li>
          Nomes de usuário únicos. Seu @nome de usuário do Discord, por exemplo, só aceita letras minúsculas,
          números, sublinhados e pontos.
        </li>
        <li>E-mails, senhas e endereços de sites.</li>
        <li>Alguns chats de jogos e fóruns antigos, que removem ou bloqueiam caracteres incomuns.</li>
      </ul>

      <h2>Erros para evitar</h2>
      <ul>
        <li>
          Enfeitar a bio inteira. Uma ou duas linhas com letras diferentes chamam atenção; um parágrafo
          inteiro fica difícil de ler e carregado.
        </li>
        <li>
          Usar estilos raros no nome. Se a pessoa não consegue ler nem digitar seu nome, ela não consegue te
          mencionar com @ nem te encontrar. Além disso, caracteres decorados geralmente não aparecem em buscas
          com letras normais.
        </li>
        <li>
          Misturar fontes demais. Um estilo e um símbolo quase sempre ficam melhor do que três estilos juntos.
        </li>
        <li>
          Esquecer a acessibilidade. Leitores de tela costumam ler cada letra decorada pelo nome técnico, como
          “mathematical bold capital F”, ou pulam a letra. Deixe o que é importante, como regras e contatos,
          em texto normal.
        </li>
      </ul>
    </>
  );
}

export const fancyTextPtBr: ToolPageContent = {
  name: "Gerador de letras diferentes",
  title: "Gerador de letras diferentes – Mais de 170 fontes para copiar",
  description:
    "Transforme seu texto em mais de 170 letras diferentes: script, gótica, bolha, estética e mais. Copie com um toque e cole no Discord, Instagram ou TikTok.",
  h1: "Gerador de letras diferentes",
  intro:
    "Digite uma palavra, um nome ou uma frase inteira e veja tudo em mais de 170 letras diferentes de uma vez. Toque em qualquer estilo para copiar e cole onde quiser: nome no Discord, bio do Instagram, legenda do TikTok ou grupo de conversa. Sem instalar nada, sem conta, e seu texto nunca sai do seu navegador.",
  sampleText: "Letras diferentes",
  toolLabel: "Gerador de letras diferentes",
  faqHeading: "Perguntas frequentes",
  faqs: [
    {
      question: "O que é um gerador de letras diferentes?",
      answer:
        "É uma ferramenta que transforma letras normais em caracteres Unicode parecidos, para você copiar o texto estilizado e colar em qualquer lugar que aceite texto.",
    },
    {
      question: "Letras diferentes são a mesma coisa que mudar a fonte?",
      answer:
        "Não. Mudar a fonte só afeta a sua tela. As letras diferentes usam outros caracteres, então todo mundo que vê recebe o mesmo estilo sem instalar nada.",
    },
    {
      question: "Por que minhas letras aparecem como quadrados ou pontos de interrogação?",
      answer:
        "O aparelho que está mostrando não tem uma fonte com esses caracteres. Isso acontece principalmente com estilos quadrados, de bolha escura e glitch em celulares, TVs e consoles antigos. Negrito, script e gótica são os mais seguros.",
    },
    {
      question: "Por que as letras com acento não mudam?",
      answer:
        "Os alfabetos estilizados do Unicode só cobrem as letras de A a Z e os números. Letras com acento, til ou cedilha não têm versão decorada, então ficam normais.",
    },
    {
      question: "Posso usar letras diferentes no meu nome de usuário do Discord?",
      answer:
        "Não no seu @nome de usuário. Use no nome de exibição ou em um apelido de servidor, que é o que as pessoas veem no chat. Nosso gerador de nomes para Discord mostra o passo a passo.",
      answerContent: (
        <>
          Não no seu @nome de usuário. Use no nome de exibição ou em um apelido de servidor, que é o que as
          pessoas veem no chat. Nosso{" "}
          <LocalLink locale={L} path="/discord-name-generator">
            gerador de nomes para Discord
          </LocalLink>{" "}
          mostra o passo a passo.
        </>
      ),
    },
    {
      question: "É seguro usar letras diferentes?",
      answer:
        "Sim. É só texto. Os únicos riscos são práticos: algumas pessoas podem não conseguir ler, e alguns sites bloqueiam caracteres incomuns.",
    },
    {
      question: "Este gerador é grátis?",
      answer:
        "Sim, totalmente grátis e sem cadastro, e a conversão acontece no seu navegador, então seu texto não é enviado para lugar nenhum.",
    },
  ],
  Article,
  relatedHeading: "Links relacionados",
  related: [
    { href: hrefFor(L, "/"), label: "Gerador de letras para Discord" },
    { href: hrefFor(L, "/discord-name-generator"), label: "Gerador de nomes para Discord" },
    { href: hrefFor(L, "/discord-text-formatting"), label: "Guia de formatação de texto do Discord" },
  ],
};
