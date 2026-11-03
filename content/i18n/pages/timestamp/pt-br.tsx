import { timestampStrings } from "@/content/i18n/strings/timestamp";
import { hrefFor } from "@/lib/i18n";
import type { ToolPageContent } from "../../types";
import { TimestampFigure, TimestampStyleTable } from "../shared";

const L = "pt-br";

function Article() {
  return (
    <>
      <h2>O que é um timestamp do Discord?</h2>
      <p>
        Um timestamp do Discord é um pequeno código que o Discord transforma em data ou hora quando você envia
        a mensagem. Você escreve algo como <code>&lt;t:1793740800:F&gt;</code> e os leitores veem uma data de
        verdade, como “terça-feira, 3 de novembro de 2026 16:20”.
      </p>
      <p>
        O número do código é um timestamp Unix: um momento exato, não o horário de um relógio específico. O
        app do Discord de cada pessoa mostra esse momento no fuso horário e no idioma dela. Alguém em Nova
        York, uma amiga em Londres e um colega em Sydney leem o horário local certo na mesma mensagem, então
        ninguém precisa fazer conta e ninguém chega uma hora atrasado.
      </p>
      <TimestampFigure
        image="example"
        alt="Exemplo de um código de timestamp do Discord e de como ele aparece em uma mensagem"
        caption="O código que você digita e a data e a contagem regressiva que os leitores veem (imagem em inglês)."
      />

      <h2>Como usar o gerador de timestamp do Discord</h2>
      <ol>
        <li>Escolha a data e a hora do evento, ou toque em Agora para começar pelo horário atual.</li>
        <li>
          Confira o fuso horário. Ele começa com o seu; mude se o evento for marcado em outro fuso, como um
          torneio no horário de Brasília para quem mora fora.
        </li>
        <li>Ajuste com os botões +15 min, +1 hora, +1 dia e +1 semana, se quiser.</li>
        <li>Encontre o formato que você quer na lista e toque em Copiar.</li>
        <li>Cole o código na sua mensagem do Discord e envie.</li>
      </ol>
      <p>
        Já tem um timestamp Unix? Cole no campo Unix e o gerador carrega, seja em segundos ou em
        milissegundos. Assim ele também funciona como conversor de horário do Discord ao contrário.
      </p>
      <TimestampFigure
        image="steps"
        alt="Três passos para usar o gerador de timestamp do Discord: escolha data e hora, escolha um formato, copie e cole"
        caption="Escolha um horário, escolha um formato e copie e cole no Discord."
      />

      <h2>Os formatos de timestamp do Discord</h2>
      <p>
        A letra no fim do código define o formato. São nove estilos. Se você não colocar a letra, o Discord
        usa <code>f</code>. Os exemplos da tabela vêm da documentação do Discord; seus leitores veem cada
        estilo no idioma e no formato de relógio deles.
      </p>
      <TimestampFigure
        image="formats"
        alt="Formatos de timestamp do Discord: hora curta, hora média, data curta, data longa, data e hora e tempo relativo, com os códigos"
        caption="Os nove estilos para o mesmo momento, como alguém em Nova York vê (imagem em inglês)."
      />
      <TimestampStyleTable
        headers={["Estilo", "Código", "Exemplo", "Ideal para"]}
        styles={timestampStrings[L].styles}
      />
      <p>
        Na dúvida: use Relativo (<code>R</code>) para contagem regressiva, Data completa (<code>F</code>) para
        eventos em que o dia da semana importa e Hora curta (<code>t</code>) para lembretes diários como
        “reset às 16:20”.
      </p>

      <h2>Como escrever um timestamp do Discord na mão</h2>
      <p>
        Você não precisa de gerador se já tem o horário Unix. O formato é <code>&lt;t:UNIX:ESTILO&gt;</code>:
        um <code>t</code> minúsculo, dois-pontos, o timestamp Unix em segundos, mais dois-pontos e a letra do
        estilo, tudo entre os sinais de menor e maior e sem espaços. <code>&lt;t:1793740800:R&gt;</code> é um
        exemplo válido, e <code>&lt;t:1793740800&gt;</code> sem estilo também.
      </p>
      <p>
        Para conseguir um timestamp Unix, use este gerador, rode <code>date +%s</code> num terminal do macOS
        ou Linux, ou use <code>Math.floor(Date.now() / 1000)</code> em JavaScript. Muitas ferramentas dão
        milissegundos (13 dígitos); o Discord precisa de segundos (10 dígitos para datas atuais), então tire
        os três últimos dígitos.
      </p>

      <h2>Exemplos práticos</h2>
      <ul>
        <li>
          <strong>Avisos de eventos:</strong> “A sessão de cinema começa <code>&lt;t:1793740800:F&gt;</code> (
          <code>&lt;t:1793740800:R&gt;</code>)” mostra a data completa e uma contagem regressiva ao vivo.
        </li>
        <li>
          <strong>Sorteios:</strong> “O sorteio termina <code>&lt;t:1793740800:R&gt;</code>” mostra quanto
          falta e muda para “há…” quando acaba.
        </li>
        <li>
          <strong>Raids e partidas:</strong> “Raid às <code>&lt;t:1793740800:t&gt;</code>” deixa o horário
          diário curto e certo para cada jogador.
        </li>
        <li>
          <strong>Regras e avisos do servidor:</strong> “Regras atualizadas em{" "}
          <code>&lt;t:1793740800:D&gt;</code>” registra a data sem horário.
        </li>
        <li>
          <strong>Agenda de lives:</strong> liste cada live com <code>&lt;t:…:s&gt;</code> para ter data e
          hora compactas em cada linha.
        </li>
      </ul>

      <h2>Cada pessoa vê o próprio horário</h2>
      <p>
        Como o código guarda um único momento, a mesma mensagem fica certa no mundo todo. Escolha o fuso em
        que o evento foi planejado e o Discord faz a conversão para todo mundo.
      </p>
      <TimestampFigure
        image="zones"
        alt="Um mesmo timestamp do Discord mostrando o horário local certo em Nova York, Londres e Sydney"
        caption="Um código, três cidades: cada leitor vê o próprio horário local (imagem em inglês)."
      />

      <h2>Problemas comuns</h2>
      <ul>
        <li>
          <strong>Aparece como texto normal.</strong> Confira a sintaxe: precisa começar com{" "}
          <code>&lt;t:</code> minúsculo, o estilo tem que ser uma das nove letras (maiúsculas e minúsculas
          fazem diferença) e não pode ter espaços dentro. Blocos de código e código em linha (crases) também
          impedem a exibição.
        </li>
        <li>
          <strong>A data está a milhares de anos.</strong> O número está em milissegundos. Use segundos; este
          gerador sempre gera segundos.
        </li>
        <li>
          <strong>O horário está algumas horas errado.</strong> O fuso errado foi escolhido ao criar o código.
          Escolha o fuso real do evento e copie o código de novo.
        </li>
        <li>
          <strong>Não funciona em um nome.</strong> Timestamps só aparecem no texto das mensagens e nas
          descrições e campos de embeds de bots. Nomes de usuário, nomes de exibição, apelidos e nomes de
          canal mostram o código como texto.
        </li>
      </ul>

      <h2>Dicas</h2>
      <ul>
        <li>
          Combine dois estilos, como <code>&lt;t:X:F&gt; (&lt;t:X:R&gt;)</code>, para mostrar a data e quanto
          falta. O botão Copiar combinado faz isso para você.
        </li>
        <li>
          Use Relativo para contagens regressivas. Ele se atualiza sozinho, então você não precisa editar a
          mensagem.
        </li>
        <li>
          Confira o fuso antes de postar, principalmente perto de mudanças de horário de verão. O gerador
          avisa se um horário não existe ou se repete naquele dia.
        </li>
      </ul>
    </>
  );
}

export const timestampPtBr: ToolPageContent = {
  name: "Gerador de timestamp do Discord",
  title: "Gerador de timestamp do Discord – Horário local para todos",
  description:
    "Crie timestamps do Discord que mostram o horário certo no fuso de cada pessoa. Escolha a data, um formato ou contagem regressiva e copie o código.",
  h1: "Gerador de timestamp do Discord",
  intro:
    "Escolha uma data e um horário e receba um código que mostra o horário local certo para todo mundo no servidor.",
  toolLabel: "Gerador de timestamp do Discord",
  faqHeading: "Perguntas frequentes sobre timestamps do Discord",
  faqs: [
    {
      question: "O que é um timestamp do Discord?",
      answer:
        "É um código curto como <t:1793740800:F> que o Discord transforma em data ou hora quando a mensagem é enviada. Em vez de um horário fixo, ele guarda um momento em horário Unix, para o Discord mostrar no fuso de cada leitor.",
    },
    {
      question: "Como faço uma contagem regressiva no Discord?",
      answer:
        "Use o estilo Relativo, R. Escolha a data e a hora do evento no gerador, copie o código Relativo e cole na mensagem. O Discord mostra como “em 3 dias” ou “em 2 horas”, mantém atualizado e muda para “há 2 horas” depois que o momento passa.",
    },
    {
      question: "Os timestamps do Discord aparecem no fuso de cada pessoa?",
      answer:
        "Sim. É para isso que eles servem. O código guarda um único momento, e o app do Discord de cada pessoa mostra esse momento no fuso e no idioma dela, então ninguém precisa converter horários de cabeça.",
    },
    {
      question: "Por que meu timestamp do Discord não funciona?",
      answer:
        "As causas mais comuns são um erro no código (precisa ser <t: seguido do número, sem espaços), um T maiúsculo no começo, uma letra de estilo que o Discord não conhece ou um timestamp em milissegundos em vez de segundos. Um número com 13 dígitos está em milissegundos; tire os três últimos. Timestamps também não funcionam em nomes de usuário, nomes de exibição, apelidos ou nomes de canal.",
    },
    {
      question: "Posso usar timestamps em embeds ou bots?",
      answer:
        "Sim. Um bot pode enviar o mesmo código <t:...> em uma mensagem normal, e ele também funciona nas descrições e nos valores dos campos de embeds. Bots devem enviar o horário Unix em segundos. Os embeds também têm um campo de timestamp separado, que recebe uma data ISO 8601 e mostra no rodapé do embed.",
    },
    {
      question: "Os timestamps do Discord funcionam no celular?",
      answer:
        "Sim. Eles aparecem nos apps do Discord para iOS e Android, além do computador e do navegador, e cada aparelho usa o próprio fuso e idioma.",
    },
    {
      question: "O que é um timestamp Unix?",
      answer:
        "É o número de segundos desde 00:00:00 UTC de 1º de janeiro de 1970. Como conta a partir de um momento fixo, significa o mesmo instante em qualquer lugar, e é por isso que o Discord usa. Por exemplo, 1793740800 é 3 de novembro de 2026 às 21:20 UTC.",
    },
  ],
  Article,
  relatedHeading: "Ferramentas relacionadas",
  related: [
    { href: hrefFor(L, "/"), label: "Gerador de letras para Discord" },
    { href: hrefFor(L, "/discord-text-formatting"), label: "Guia de formatação de texto do Discord" },
    { href: hrefFor(L, "/discord-name-generator"), label: "Gerador de nomes para Discord" },
  ],
};
