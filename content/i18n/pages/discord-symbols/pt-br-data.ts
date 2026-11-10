import type {
  BuilderStrings,
  CategoryText,
  ChannelPack,
  LibraryStrings,
  PackStrings,
} from "@/content/discord-symbols-data";

/** Interface text and channel name templates for /pt-br/discord-symbols. Plain data for client components. */

export const builderStringsPtBr: BuilderStrings = {
  typeLegend: "Tipo de canal",
  types: { text: "Canal de texto", voice: "Canal de voz", category: "Categoria" },
  nameLabel: "Nome do canal",
  sample: "avisos",
  textNote: "O Discord deixa nomes de canais de texto em minúsculas e troca os espaços por hífens.",
  emoji: "Emoji",
  left: "Decoração à esquerda",
  divider: "Divisor",
  right: "Decoração à direita",
  none: "nenhum",
  preview: "Prévia",
  textChannels: "Canais de texto",
  voiceChannels: "Canais de voz",
  textNeighbour: "geral",
  voiceNeighbour: "Sala Geral",
  characters: "{count} / {limit} caracteres",
  tooLong: " – longo demais para o Discord",
  copy: "Copiar nome do canal",
  copied: "Copiado!",
  copyLabel: "nome do canal",
  randomize: "🎲 Aleatório",
};

export const packStringsPtBr: PackStrings = {
  copyAll: "Copiar tudo",
  copyAllSr: "nomes do estilo {title}",
  packLabel: "estilo {title}",
};

export const libraryStringsPtBr: LibraryStrings = {
  searchLabel: "Buscar símbolos",
  placeholder: "Buscar símbolos (estrela, coração, seta, ︱)",
  editFavorites: "☆ Editar favoritos",
  doneEditing: "✓ Concluir",
  categoriesLabel: "Categorias de símbolos",
  all: "Todos",
  favoritesTitle: "★ Seus favoritos",
  favoritesEmpty: "Toque em {button} e depois nos símbolos para salvá-los aqui neste aparelho.",
  editingHint:
    "Editando favoritos: toque em um símbolo para adicionar ou remover. Toque em “Concluir” para voltar a copiar.",
  noMatch: "Nenhum símbolo encontrado para “{query}”. Tente outra palavra.",
  copySymbol: "Copiar {symbol}",
  addFavorite: "Adicionar {symbol} aos favoritos",
  removeFavorite: "Remover {symbol} dos favoritos",
};

export const categoryTextPtBr: CategoryText = {
  dividers: {
    label: "Divisores",
    heading: "Divisores e separadores",
    keywords: "divisor separador barra linha vertical ponto",
  },
  brackets: { label: "Colchetes", heading: "Colchetes e molduras", keywords: "colchete moldura canto parênteses japonês" },
  stars: { label: "Estrelas", heading: "Estrelas e brilhos", keywords: "estrela brilho asterisco" },
  flowers: { label: "Flores", heading: "Flores", keywords: "flor floral fofo" },
  hearts: { label: "Corações", heading: "Corações", keywords: "coração amor fofo" },
  arrows: { label: "Setas", heading: "Setas", keywords: "seta flecha direção" },
  lines: { label: "Linhas", heading: "Linhas e bordas", keywords: "linha borda caixa canto horizontal" },
  japanese: { label: "Japonês", heading: "Símbolos japoneses", keywords: "japonês kanji katakana anime" },
  "music-games": {
    label: "Música e jogos",
    heading: "Música e jogos",
    keywords: "música nota jogo xadrez carta dado espada coroa caveira",
  },
  weather: { label: "Clima", heading: "Clima e céu", keywords: "clima céu lua sol nuvem neve" },
  bullets: {
    label: "Marcadores",
    heading: "Marcadores e checks",
    keywords: "marcador check visto caixa quadrado círculo triângulo losango",
  },
  misc: { label: "Outros", heading: "Outros símbolos", keywords: "matemática moeda direitos autorais outros" },
};

/** Channel names Brazilian servers actually use. */
export const channelPacksPtBr: readonly ChannelPack[] = [
  {
    title: "Emoji + barra",
    names: ["📜︱regras", "📢︱avisos", "👋︱boas-vindas", "💬︱geral", "😂︱memes", "🎮︱jogos", "🎵︱música", "🖼️︱mídia", "🤖︱comandos", "🎉︱eventos", "💡︱sugestões", "🆘︱suporte"],
  },
  {
    title: "Pontilhado",
    names: ["┊📜・regras", "┊📢・avisos", "┊👋・boas-vindas", "┊💬・geral", "┊😂・memes", "┊🎮・jogos", "┊🎵・música", "┊🖼️・mídia"],
  },
  {
    title: "Colchetes fofos",
    names: ["꒰📜꒱regras", "꒰📢꒱novidades", "꒰👋꒱boas-vindas", "꒰💬꒱chat", "꒰🌸꒱selfies", "꒰🎀꒱artes", "꒰🎵꒱música", "꒰✨꒱vibes"],
  },
  {
    title: "Brilho minimalista",
    names: ["⟡・regras", "⟡・avisos", "⟡・geral", "⟡・memes", "⟡・jogos", "⟡・música", "⟡・mídia", "⟡・eventos"],
  },
  {
    title: "Moldura japonesa",
    names: ["『📜』regras", "『📢』avisos", "『💬』geral", "『🎮』jogos", "『🎵』música", "『🖼️』mídia"],
  },
  {
    title: "Seta",
    names: ["»📜︱regras", "»📢︱avisos", "»💬︱geral", "»🎮︱jogos", "»🎵︱música", "»🎉︱eventos"],
  },
  {
    title: "Nomes de categorias",
    names: ["━━ 𝐈𝐍𝐅𝐎 ━━", "━━ 𝐆𝐄𝐑𝐀𝐋 ━━", "✦ COMUNIDADE ✦", "『 CANAIS DE VOZ 』", "╭── ⋅ ⋅ STAFF ⋅ ⋅ ──╮", "꒰ JOGOS ꒱"],
  },
  {
    title: "Canais de voz",
    names: ["🔊︱Sala Geral", "🎧︱Sala de Música", "🎮︱Jogando", "💤︱AFK", "🎤︱Palco", "📚︱Sala de Estudos"],
  },
];
