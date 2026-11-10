import { numberFontsPage, type NumberFontsPageContent } from "@/content/number-fonts";
import { LocalLink } from "../shared";

const L = "pt-br";
const fontGenerator = (
  <LocalLink locale={L} path="/">
    gerador de letras para Discord
  </LocalLink>
);

/** Number sets for the copy table: [style, digits, good for]. */
const numberSets = [
  ["Negrito", "𝟎 𝟏 𝟐 𝟑 𝟒 𝟓 𝟔 𝟕 𝟖 𝟗", "Placares, pontuações e números de time"],
  ["Contorno duplo", "𝟘 𝟙 𝟚 𝟛 𝟜 𝟝 𝟞 𝟟 𝟠 𝟡", "Visual vazado para nomes e títulos"],
  ["Monoespaçado", "𝟶 𝟷 𝟸 𝟹 𝟺 𝟻 𝟼 𝟽 𝟾 𝟿", "Estilo tech, código e retrô"],
  ["Largo", "０ １ ２ ３ ４ ５ ６ ７ ８ ９", "Estética vaporwave"],
  ["Sobrescrito", "⁰ ¹ ² ³ ⁴ ⁵ ⁶ ⁷ ⁸ ⁹", "Números miniatura elevados, notas, x²"],
  ["Subscrito", "₀ ₁ ₂ ₃ ₄ ₅ ₆ ₇ ₈ ₉", "Números miniatura rebaixados, H₂O"],
  ["Em círculo", "⓪ ① ② ③ ④ ⑤ ⑥ ⑦ ⑧ ⑨ ⑩", "Listas de regras e passos (vai até ㊿)"],
  ["Círculo escuro", "⓿ ❶ ❷ ❸ ❹ ❺ ❻ ❼ ❽ ❾ ❿", "Listas numeradas em destaque (vai até ⓴)"],
  ["Círculo duplo", "⓵ ⓶ ⓷ ⓸ ⓹ ⓺ ⓻ ⓼ ⓽ ⓾", "Rankings e top 10 (só de 1 a 10)"],
  ["Círculo sem serifa", "➀ ➁ ➂ ➃ ➄ ➅ ➆ ➇ ➈ ➉", "Passo a passo limpo (só de 1 a 10)"],
  ["Círculo escuro sem serifa", "➊ ➋ ➌ ➍ ➎ ➏ ➐ ➑ ➒ ➓", "Nomes de canais e categorias (só de 1 a 10)"],
  ["Entre parênteses", "⑴ ⑵ ⑶ ⑷ ⑸ ⑹ ⑺ ⑻ ⑼ ⑽", "Subitens nas regras (vai até ⒇)"],
  ["Com ponto", "⒈ ⒉ ⒊ ⒋ ⒌ ⒍ ⒎ ⒏ ⒐ ⒑", "Listas numeradas em um só caractere (até ⒛)"],
  ["Emoji de tecla", "0️⃣ 1️⃣ 2️⃣ 3️⃣ 4️⃣ 5️⃣ 6️⃣ 7️⃣ 8️⃣ 9️⃣ 🔟", "Nomes coloridos de canais e cargos"],
  ["Algarismos romanos", "Ⅰ Ⅱ Ⅲ Ⅳ Ⅴ Ⅵ Ⅶ Ⅷ Ⅸ Ⅹ Ⅺ Ⅻ", "Temporadas, capítulos e eventos"],
] as const;

/** /pt-br/number-fonts */
export const numberFontsPtBr: NumberFontsPageContent = {
  path: "/number-fonts",
  name: "Números Estilizados",
  title: "Números Estilizados – Copie e Cole Números Bonitos (Negrito, Círculo e Mais)",
  h1: "Gerador de Números Estilizados",
  intro:
    "Digite qualquer número abaixo para transformá-lo em números em negrito, em círculo, miniatura ou com contorno, prontos para copiar e colar no Discord, Instagram, jogos e onde mais quiser.",
  description:
    "Gerador de números estilizados grátis: transforme 123 em 𝟏𝟐𝟑, ①②③, ¹²³ e mais. Copie e cole números bonitos no nome, bio e canais do Discord e em jogos.",
  featuredIds: numberFontsPage.featuredIds,
  featuredLabel: "Estilos de números",
  toolLabel: "Gerador de números estilizados",
  faqHeading: "Perguntas Frequentes",
  faqs: [
    {
      question: "O que são números estilizados?",
      answer:
        "São caracteres Unicode que parecem números com estilo, como 𝟏𝟐𝟑, ①②③ ou ¹²³. Não são fontes de verdade, então você pode copiar e colar em qualquer lugar que aceite texto, sem instalar nada.",
    },
    {
      question: "Posso usar números estilizados no meu nome de usuário do Discord?",
      answer:
        "Não. O @nome de usuário só aceita letras minúsculas, números normais, sublinhados e pontos. Coloque os números estilizados no nome de exibição ou no apelido do servidor.",
    },
    {
      question: "Por que alguns números aparecem como quadradinhos?",
      answer:
        "O aparelho de quem está vendo não tem uma fonte para aquele caractere. Números em negrito, sobrescritos e em círculo funcionam em quase todo lugar. Os de círculo escuro e círculo duplo são os que mais falham em celulares antigos.",
    },
    {
      question: "Como consigo números em círculo acima de 10?",
      answer:
        "Os números em círculo vão até ㊿ (50) e os de círculo escuro até ⓴ (20). O gerador cobre de 0 a 9, então para números maiores copie da tabela desta página.",
    },
    {
      question: "Números estilizados funcionam em jogos?",
      answer:
        "Depende do jogo. Muitos nomes dentro do jogo bloqueiam caracteres especiais, mas bios, descrições de clã e chat costumam aceitar. Números em negrito e sobrescritos são os mais seguros para testar primeiro.",
    },
    {
      question: "Dá para fazer contas com números estilizados?",
      answer:
        "Não. Os apps tratam 𝟓 como um símbolo, não como o número 5, então calculadoras, planilhas e buscas não leem como número. Use só para deixar bonito, não para dados.",
    },
  ],
  body: (
    <>
      <h2>O que são números estilizados?</h2>
      <p>
        Números estilizados são versões com estilo dos algarismos de 0 a 9, como 𝟏𝟐𝟑, 𝟙𝟚𝟛, ①②③ ou ¹²³. Não são
        fontes que você instala. São caracteres Unicode separados que parecem números em negrito, vazados, em
        círculo ou miniatura, e por isso continuam com estilo quando você cola no Discord, num jogo ou na bio
        de uma rede social.
      </p>
      <p>
        A maioria das ferramentas de letras bonitas foca nas letras e deixa os números normais. Isso é um
        problema quando o seu nome é &ldquo;Nova 7&rdquo; ou o seu servidor tem um canal &ldquo;Top 10&rdquo;.
        Esta página só mostra estilos que mudam os números também, então todo resultado funciona para números.
      </p>

      <h2>Como usar o gerador de números estilizados</h2>
      <ol>
        <li>Digite um número (ou um nome com números) na caixa acima.</li>
        <li>Veja os estilos. Cada um muda os seus números enquanto você digita.</li>
        <li>Clique em um estilo para copiar.</li>
        <li>Cole no seu nome de exibição, bio, nome de canal do Discord ou onde quiser.</li>
      </ol>
      <p>
        As letras mudam também, então você pode estilizar um nome inteiro como &ldquo;𝐒𝐪𝐮𝐚𝐝 𝟕&rdquo; de uma vez
        só. Quer mais estilos de letras? O {fontGenerator} completo tem mais de 220.
      </p>

      <h2>Conjuntos de números para copiar e colar</h2>
      <p>
        Aqui estão todos os estilos de números em um só lugar, prontos para copiar. Alguns só existem de 1 a 10
        e outros passam do 9 (os números em círculo vão até ㊿), então nem todos estão no gerador. Selecione os
        que precisar e cole.
      </p>
      <div className="overflow-x-auto">
        <table>
          <thead>
            <tr>
              <th>Estilo</th>
              <th>Números</th>
              <th>Bom para</th>
            </tr>
          </thead>
          <tbody>
            {numberSets.map(([name, digits, use]) => (
              <tr key={name}>
                <td className="whitespace-nowrap">{name}</td>
                <td className="fancy-text whitespace-nowrap select-all">{digits}</td>
                <td>{use}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h2>Onde usar números estilizados no Discord</h2>
      <ul>
        <li>
          <strong>Nomes de exibição e apelidos.</strong> Um número estilizado destaca o nome sem deixá-lo
          ilegível, como &ldquo;Nova 𝟕&rdquo; ou &ldquo;ᴋɪʀᴀ ⁹⁹&rdquo;.
        </li>
        <li>
          <strong>Canais de regras.</strong> Números em círculo ou em círculo escuro (① ② ③ ou ❶ ❷ ❸) deixam as
          regras fáceis de ler e de citar: &ldquo;veja a regra ④&rdquo;.
        </li>
        <li>
          <strong>Nomes de canais e categorias.</strong> Numere os canais em ordem, como
          &ldquo;➊・boas-vindas&rdquo; ou &ldquo;1️⃣-avisos&rdquo;, para os novos membros saberem por onde começar.
          Os{" "}
          <LocalLink locale={L} path="/discord-symbols">
            símbolos para Discord
          </LocalLink>{" "}
          ajudam a montar esses nomes.
        </li>
        <li>
          <strong>Rankings e eventos.</strong> Números em negrito ou com contorno duplo funcionam bem para
          placares, datas e posições, como &ldquo;Temporada 𝟑&rdquo; ou &ldquo;𝟭º lugar&rdquo;.
        </li>
        <li>
          <strong>Bios.</strong> Números sobrescritos são perfeitos para detalhes pequenos, como a sua idade,
          fuso horário ou número favorito, sem ocupar muito espaço.
        </li>
      </ul>
      <p>
        Lembre-se: o seu @nome de usuário do Discord só aceita caracteres simples. Números estilizados vão no
        nome de exibição, no apelido do servidor, no Sobre mim, nas mensagens e nos nomes de canais.
      </p>

      <h2>Qual estilo de número escolher?</h2>
      <ul>
        <li>
          <strong>Mais legíveis:</strong> Negrito (𝟏𝟐𝟑) e Negrito sem serifa (𝟭𝟮𝟯). Parecem números normais, só
          que mais grossos, e aparecem em quase todos os aparelhos.
        </li>
        <li>
          <strong>Mais estilosos:</strong> Contorno duplo (𝟙𝟚𝟛) e Monoespaçado (𝟷𝟸𝟹) dão um ar vazado ou retrô
          que combina com nomes gamer e tech.
        </li>
        <li>
          <strong>Menores:</strong> Sobrescrito (¹²³) e subscrito (₁₂₃) são miniatura e ótimos para detalhes
          discretos.
        </li>
        <li>
          <strong>Melhores para listas:</strong> Números em círculo (①②③) e em círculo escuro (❶❷❸) foram feitos
          para numerar coisas.
        </li>
      </ul>

      <h2>Dicas antes de colar</h2>
      <ul>
        <li>
          <strong>Teste em outro aparelho.</strong> Estilos mais raros, como círculo escuro e círculo duplo,
          podem aparecer como quadradinhos em celulares antigos. Mande uma DM para você mesmo e confira no
          celular.
        </li>
        <li>
          <strong>Cuidado com o limite de caracteres.</strong> Nomes de exibição no Discord têm no máximo 32
          caracteres, e alguns números estilizados contam como dois.
        </li>
        <li>
          <strong>Deixe números importantes normais.</strong> Leitores de tela podem ler 𝟓 como &ldquo;dígito
          cinco em negrito matemático&rdquo;, e as buscas não encontram. Use números normais para telefones,
          preços e datas que as pessoas precisam pesquisar.
        </li>
      </ul>
    </>
  ),
};
