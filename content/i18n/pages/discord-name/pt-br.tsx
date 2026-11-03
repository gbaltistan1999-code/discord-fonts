import { hrefFor } from "@/lib/i18n";
import type { ToolPageContent } from "../../types";
import { NameIdeasTable, NameTypeTable } from "../shared";

const L = "pt-br";

function Article() {
  return (
    <>
      <h2>Primeiro: nome de exibição ou nome de usuário?</h2>
      <p>
        O Discord dá dois nomes para cada conta, e só um deles pode ser estilizado. Isso confunde muita gente.
      </p>
      <NameTypeTable
        headers={["Nome de exibição", "@nome de usuário"]}
        rows={[
          [
            "Onde aparece",
            "Ao lado das suas mensagens e na lista de membros",
            "No seu perfil e quando alguém te adiciona",
          ],
          ["Letras diferentes e símbolos", "Sim", "Não"],
          [
            "Caracteres permitidos",
            "Quase qualquer caractere Unicode",
            "Letras minúsculas, números, sublinhados e pontos",
          ],
          ["Precisa ser único", "Não", "Sim"],
          ["Tamanho", "Até 32 caracteres", "De 2 a 32 caracteres"],
        ]}
      />
      <p>
        Então o nome que você cria aqui vai no nome de exibição. Seu @nome de usuário continua simples, e isso
        é bom, porque é por ele que seus amigos te encontram.
      </p>

      <h2>Como fazer um nome que fique bonito de verdade</h2>
      <p>
        Os geradores oferecem centenas de opções, então é fácil acabar com algo bagunçado. Um processo simples
        ajuda:
      </p>
      <ol>
        <li>
          Comece pelo nome sem estilo. Decida como quer ser chamado antes de enfeitar. Nomes curtos (de 4 a 12
          letras) ficam melhores em qualquer estilo.
        </li>
        <li>
          Escolha uma fonte que combine com você. Negrito e traço duplo passam uma imagem limpa e confiante.
          Script é suave ou elegante. Gótica é sombria ou competitiva. Versalete é calmo e estético.
        </li>
        <li>
          Adicione no máximo uma decoração. Um símbolo de cada lado, como ✧ ou ♡, emoldura o nome sem poluir.
        </li>
        <li>
          Teste em tamanho pequeno. No chat seu nome costuma aparecer pequeno, então confira na prévia do
          gerador e no celular.
        </li>
        <li>Confira o tamanho. A prévia do gerador mostra se você passou do limite de 32 caracteres.</li>
      </ol>
      <p>
        Um detalhe: os estilos só mudam as letras de A a Z e os números. Letras com acento ou cedilha ficam
        normais, então “João” vai sair com o “ã” sem estilo.
      </p>

      <h2>Ideias de nomes por estilo</h2>
      <NameIdeasTable
        headers={["Vibe", "Fórmula", "Exemplo"]}
        rows={[
          ["Limpo", "Nome em negrito ou traço duplo"],
          ["Estético suave", "Versalete + símbolos delicados"],
          ["Elegante", "Script em negrito"],
          ["Gamer", "Gótica + tag"],
          ["Decorado", "Script dentro de uma moldura"],
          ["Minimalista", "Nome simples + um símbolo"],
        ]}
      />

      <h2>Como mudar seu nome de exibição no Discord</h2>
      <ol>
        <li>Copie seu novo nome no gerador.</li>
        <li>
          Abra o Discord e vá até as configurações de usuário (o ícone de engrenagem ao lado do seu perfil).
        </li>
        <li>Abra a seção do perfil.</li>
        <li>Cole no campo do nome de exibição e salve as alterações.</li>
      </ol>
      <p>
        No celular, toque na sua foto de perfil, edite o perfil e cole no nome de exibição. O Discord muda os
        menus de vez em quando, então os nomes podem variar um pouco na sua versão.
      </p>

      <h2>Quer outro nome em um servidor só?</h2>
      <p>
        Use um apelido de servidor. Ele substitui seu nome de exibição só naquele servidor, o que é ótimo para
        tags de clã, nomes de RP ou para combinar com o tema do servidor. Abra o menu do servidor, escolha a
        opção de editar seu perfil no servidor e cole seu nome estilizado no apelido. Se a opção estiver
        desativada, o servidor não deixa mudar apelidos, então fale com um moderador.
      </p>

      <h2>Pontos de atenção</h2>
      <ul>
        <li>
          Ser legível vale mais que enfeitar. Se seus amigos não conseguem digitar as primeiras letras do seu
          nome, mencionar você com @ vira um incômodo.
        </li>
        <li>
          Alguns estilos quebram no celular. Letras quadradas e em bolha escura podem aparecer como quadrados
          em aparelhos antigos. Negrito, script e gótica são os mais seguros.
        </li>
        <li>
          Nomes estilizados são mais difíceis de achar. A busca de membros do Discord pode não relacionar
          letras decoradas com letras normais, então seus amigos podem ter dificuldade para te achar em um
          servidor grande.
        </li>
        <li>
          Não se passe por ninguém. Nomes que copiam moderadores, bots ou usuários conhecidos podem render
          advertência ou remoção, e letras diferentes são um jeito comum de tentar isso.
        </li>
      </ul>
    </>
  );
}

export const discordNamePtBr: ToolPageContent = {
  name: "Gerador de nomes para Discord",
  title: "Gerador de nomes para Discord – Nomes de exibição estilosos",
  description:
    "Crie um nome de exibição estiloso para o Discord em segundos. Escolha uma letra diferente, adicione símbolos, confira o limite de 32 caracteres e copie.",
  h1: "Gerador de nomes para Discord",
  intro:
    "Seu nome de exibição aparece ao lado de cada mensagem que você manda, em todos os servidores. Vale a pena deixar bonito. Digite seu nome ou sua tag gamer, teste em várias letras e decorações e copie o que tiver a sua cara.",
  sampleText: "Seu Nome",
  toolLabel: "Gerador de nomes para Discord",
  faqHeading: "Perguntas frequentes",
  faqs: [
    {
      question: "Posso usar letras diferentes no meu nome de usuário do Discord?",
      answer:
        "Não. Nomes de usuário só aceitam letras minúsculas, números, sublinhados e pontos. As letras diferentes funcionam no nome de exibição e nos apelidos de servidor.",
    },
    {
      question: "Quantos caracteres pode ter um nome de exibição no Discord?",
      answer:
        "Até 32 caracteres. As decorações também contam, então nomes longos com símbolos podem precisar de um corte.",
    },
    {
      question: "Todo mundo vai ver meu nome estilizado do mesmo jeito?",
      answer:
        "Quase todo mundo. Alguns aparelhos antigos não mostram caracteres raros e exibem quadrados no lugar. Fique com negrito, script ou gótica se quiser jogar seguro.",
    },
    {
      question: "Usar um nome estilizado vai contra as regras do Discord?",
      answer:
        "Usar caracteres Unicode não vai contra as regras por si só. Os problemas vêm de se passar por outra pessoa, nomes ofensivos ou nomes feitos para serem ilegíveis. Cada servidor também pode ter regras próprias para apelidos.",
    },
    {
      question: "Posso mudar meu nome de exibição quantas vezes quiser?",
      answer:
        "Sim, o nome de exibição e os apelidos podem ser mudados quando você quiser. O @nome de usuário tem regras mais rígidas.",
    },
    {
      question: "Este gerador de nomes é grátis?",
      answer: "Sim. Sem cadastro, e tudo é convertido no seu navegador.",
    },
  ],
  Article,
  relatedHeading: "Links relacionados",
  related: [
    { href: hrefFor(L, "/fancy-text-generator"), label: "Gerador de letras diferentes" },
    { href: hrefFor(L, "/"), label: "Gerador de letras para Discord" },
    { href: "/pt-br/discord-font-generator/bold", label: "Gerador de letra em negrito" },
    { href: "/pt-br/discord-font-generator/cursive", label: "Gerador de letra cursiva" },
    { href: "/pt-br/discord-font-generator/small-caps", label: "Gerador de versalete" },
  ],
};
