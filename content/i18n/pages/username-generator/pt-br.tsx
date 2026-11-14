import type { UsernameGeneratorStrings } from "@/content/username-generator-strings";
import type { Faq } from "@/content/faqs";
import { hrefFor } from "@/lib/i18n";
import { LocalLink } from "../shared";

const L = "pt-br";
const fontGenerator = (
  <LocalLink locale={L} path="/">
    gerador de letras para Discord
  </LocalLink>
);

export const usernameGeneratorPagePtBr = {
  path: "/discord-username-generator",
  name: "Gerador de Nome de Usuário para Discord",
  title: "Gerador de Nome de Usuário para Discord – Nomes Únicos e Estilosos",
  description:
    "Gere nomes de usuário para Discord legais e únicos na hora. Escolha um estilo, adicione uma palavra e copie nomes que seguem as regras do Discord. Grátis, sem cadastro.",
  h1: "Gerador de Nome de Usuário para Discord",
  intro:
    "Encontre nomes de usuário legais e únicos que realmente seguem as regras do Discord. Escolha um estilo, adicione uma palavra se quiser e copie o que tem a sua cara.",
  faqHeading: "Perguntas Frequentes",
  moreToolsHeading: "Mais ferramentas para Discord",
} as const;

export const usernameGeneratorStringsPtBr: UsernameGeneratorStrings = {
  styles: {
    random: "Aleatório",
    cool: "Legal",
    aesthetic: "Aesthetic",
    gaming: "Gamer",
    cute: "Fofo",
    funny: "Engraçado",
    dark: "Dark",
    short: "Curto",
  },
  anyLength: "Qualquer",
  keywordLabel: "Palavra-chave (opcional)",
  placeholder: "Uma palavra, ex.: luna, sombra",
  style: "Estilo",
  length: "Tamanho",
  allowNumbers: "Permitir números",
  allowSeparators: "Permitir _ e .",
  generate: "Gerar nomes de usuário",
  results: "Seus nomes de usuário",
  count: "{count} nomes, todos conferidos com as regras do Discord",
  generateMore: "Gerar mais",
  copy: "Copiar",
  copied: "Copiado!",
  followsRules: "Segue as regras do Discord",
  makeFancy: "Deixar estiloso",
  fontGeneratorPath: hrefFor(L, "/"),
};

export const usernameGeneratorFaqsPtBr: readonly Faq[] = [
  {
    question: "Este gerador de nomes de usuário para Discord é grátis?",
    answer: "Sim. É totalmente grátis, sem cadastro, e você pode gerar quantos nomes quiser.",
  },
  {
    question: "Posso usar letras estilizadas no meu nome de usuário do Discord?",
    answer:
      "Não. Nomes de usuário só aceitam letras minúsculas, números, sublinhados e pontos. Mas você pode usar letras estilizadas no nome de exibição. Use o nosso gerador de letras para Discord para isso.",
    answerContent: (
      <>
        Não. Nomes de usuário só aceitam letras minúsculas, números, sublinhados e pontos. Mas você pode usar
        letras estilizadas no nome de exibição. Use o nosso {fontGenerator} para isso.
      </>
    ),
  },
  {
    question: "A ferramenta verifica se o nome de usuário está disponível?",
    answer:
      "Não, e preferimos ser sinceros: o Discord não oferece uma forma pública de verificar. O jeito mais rápido é testar o nome nas configurações do Discord. Se já estiver em uso, é só gerar uma nova leva.",
  },
  {
    question: "Qual o tamanho máximo de um nome de usuário no Discord?",
    answer: "Entre 2 e 32 caracteres.",
  },
  {
    question: "Ainda dá para conseguir um nome de usuário de 4 letras?",
    answer:
      "É possível, mas a maioria das palavras reais de 4 letras já está em uso. Nomes inventados e fáceis de pronunciar dão muito mais chance. Escolha o tamanho 4 e gere algumas levas.",
  },
  {
    question: "Se eu mudar meu nome de usuário, consigo pegar o antigo de volta?",
    answer:
      "Só se ninguém pegar antes. Quando você abre mão de um nome de usuário, qualquer pessoa pode usá-lo, então tenha certeza antes de trocar.",
  },
];

export const usernameMoreToolsPtBr = [
  {
    href: hrefFor(L, "/"),
    label: "Gerador de Letras para Discord",
    note: "Mais de 220 letras estilizadas para nome e bio",
  },
  {
    href: hrefFor(L, "/fancy-text-generator"),
    label: "Gerador de Letras Bonitas",
    note: "Texto estiloso para qualquer app",
  },
  {
    href: hrefFor(L, "/discord-name-generator"),
    label: "Gerador de Nomes para Discord",
    note: "Nomes de exibição estilizados",
  },
  {
    href: hrefFor(L, "/small-text-discord"),
    label: "Letras Pequenas para Discord",
    note: "Letras miniatura e subtexto -#",
  },
  {
    href: hrefFor(L, "/discord-symbols"),
    label: "Símbolos para Discord",
    note: "Símbolos e divisores para canais",
  },
  {
    href: hrefFor(L, "/number-fonts"),
    label: "Números Estilizados",
    note: "Números em negrito, círculo e mais",
  },
  {
    href: hrefFor(L, "/discord-timestamp-generator"),
    label: "Gerador de Timestamp do Discord",
    note: "Horários locais para todo mundo",
  },
  {
    href: hrefFor(L, "/discord-text-formatting"),
    label: "Formatação de Texto no Discord",
    note: "Negrito, spoilers, títulos e mais",
  },
] as const;

/** The guide below the tool. */
export function UsernameGeneratorArticlePtBr() {
  return (
    <>
      <h2>Como usar o gerador de nomes de usuário para Discord</h2>
      <ol>
        <li>
          Digite uma palavra que você curte (opcional). Seu nome, um hobby, um personagem de jogo, qualquer
          coisa.
        </li>
        <li>Escolha um estilo e um tamanho.</li>
        <li>
          Clique em Gerar, copie um nome que você gostou e teste no Discord. Já está em uso? Gere de novo.
          Cada clique traz uma leva nova.
        </li>
      </ol>
      <p>
        Os nomes sugeridos usam palavras em inglês, que são as mais comuns em nomes do Discord. Quer algo em
        português? Escreva a sua palavra no campo de palavra-chave, como &ldquo;sombra&rdquo; ou
        &ldquo;lua&rdquo;, e o gerador monta combinações com ela.
      </p>

      <h2>Por que tantos nomes gerados não funcionam no Discord</h2>
      <p>
        Em 2023 o Discord acabou com as antigas tags Nome#1234. Agora todo nome de usuário precisa ser único,
        e as regras ficaram mais rígidas:
      </p>
      <ul>
        <li>De 2 a 32 caracteres</li>
        <li>Só letras minúsculas, números, sublinhados e pontos</li>
        <li>Sem espaços, letras maiúsculas, emojis, acentos ou letras estilizadas</li>
        <li>Sem dois pontos seguidos</li>
      </ul>
      <p>
        Muitos geradores ainda sugerem nomes com maiúsculas, espaços ou símbolos, e o Discord simplesmente não
        aceita. Todo nome que esta ferramenta mostra já passou por essas regras, então você não perde tempo
        com nomes que nunca vão funcionar.
      </p>

      <h2>Nome de usuário ou nome de exibição: qual a diferença?</h2>
      <p>
        O nome de usuário é o seu ID único. É assim que as pessoas te adicionam como amigo, e ninguém mais
        pode ter o mesmo.
      </p>
      <p>
        O nome de exibição é o que as pessoas realmente veem nos chats e servidores. Ele não precisa ser único
        e pode ter espaços, emojis e letras estilizadas.
      </p>
      <p>
        Então aqui vai o truque que muita gente não sabe: deixe o nome de usuário simples e fácil de digitar,
        e coloque o estilo no nome de exibição. Depois de escolher o nome de usuário, transforme-o num nome de
        exibição estiloso com o nosso {fontGenerator}.
      </p>

      <h2>Dicas para escolher um nome de usuário que você não vai se arrepender</h2>
      <ul>
        <li>Mais curto é mais fácil de passar para os outros. Entre 5 e 12 caracteres é o ideal.</li>
        <li>
          Evite encher de números. &quot;sombra_48291&quot; é mais difícil de lembrar que
          &quot;sombra.wav&quot;.
        </li>
        <li>Fale em voz alta. Se você ficaria sem graça de dizer o nome para um amigo, escolha outro.</li>
        <li>
          Não use seu nome completo nem o ano em que nasceu. O nome de usuário fica visível para todo mundo
          que você conhece nos servidores.
        </li>
        <li>
          Pense a longo prazo. O nome que parece legal hoje ainda precisa parecer ok daqui a alguns anos.
        </li>
        <li>
          Se o seu nome favorito já está em uso, tente colocar um ponto ou sublinhado (luna.exe, kai_codes)
          antes de desistir dele.
        </li>
      </ul>

      <h2>Como mudar seu nome de usuário no Discord</h2>
      <p>No computador:</p>
      <ol>
        <li>
          Clique na engrenagem ao lado do seu nome, no canto inferior esquerdo, para abrir as Configurações de
          usuário.
        </li>
        <li>Vá em Minha conta e clique em Editar ao lado de Nome de usuário.</li>
        <li>Digite o novo nome de usuário, coloque sua senha e clique em Concluído.</li>
      </ol>
      <p>No celular:</p>
      <ol>
        <li>Toque na sua foto de perfil no canto inferior direito.</li>
        <li>Toque na engrenagem e depois em Conta.</li>
        <li>Toque em Nome de usuário, digite o novo e salve.</li>
      </ol>
      <p>
        O Discord limita quantas vezes você pode mudar o nome de usuário num curto período, então se aparecer
        uma mensagem de &quot;muitas alterações&quot;, espere um pouco e tente de novo.
      </p>

      <h2>Por que o Discord diz que meu nome de usuário já está em uso?</h2>
      <p>
        O Discord tem centenas de milhões de contas, e cada nome de usuário precisa ser único, então a maioria
        dos nomes curtos e simples foi registrada há muito tempo. Isso vale principalmente para palavras reais
        de 3 ou 4 letras. As melhores apostas são combinações de palavras pouco comuns, um ponto ou sublinhado
        no meio, ou uma palavra inventada fácil de pronunciar. O estilo Curto no gerador acima foi feito
        exatamente para isso.
      </p>
    </>
  );
}
