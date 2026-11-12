// DRAFT: requires native-speaker review before launch.
import type { HomeContent } from "@/types/i18n";

export const home: HomeContent = {
  title: "Kaomojis para copiar e colar: mais de 800 carinhas japonesas",
  description:
    "Copie e cole mais de 800 kaomojis com um clique: carinhas japonesas fofas, felizes, tristes, de gato, de coração e muito mais, organizadas por emoção e animal. Grátis e sem cadastro.",
  h1: "Kaomojis para copiar e colar",
  intro: "828 carinhas japonesas de texto, organizadas por emoção e animal. Busque, toque e cole onde quiser.",
  sections: [
    {
      heading: "O que são kaomojis?",
      paragraphs: [
        "Kaomojis (顔文字) são carinhas feitas com caracteres de texto. A palavra japonesa junta kao (rosto) e moji (caractere). Diferente dos emoticons ocidentais como :-), que você lê inclinando a cabeça, os kaomojis são lidos de frente: olhos, boca, bochechas e braços olham direto para você, como em (◕‿◕).",
        "Como são apenas texto, dá para colar kaomojis em quase qualquer lugar que aceite texto: WhatsApp, comentários, bios, nomes de usuário, chats de jogos e documentos. Eles usam caracteres de vários sistemas de escrita (kana japonês, cirílico, canarês, tailandês, grego e coreano), além de símbolos, caracteres de desenho de caixa e marcas combinantes. Essa mistura é o que deixa os kaomojis tão expressivos.",
      ],
    },
    {
      heading: "Kaomojis x emojis x emoticons ocidentais",
      paragraphs: ["Os três expressam emoções, mas são construídos de jeitos diferentes:"],
      list: [
        "Emoticons ocidentais, como :) ou ;-P: carinhas curtas e deitadas, digitadas com caracteres básicos do teclado.",
        "Kaomojis, como (╥﹏╥) ou ヽ(・∀・)ﾉ: carinhas de frente feitas com muitos caracteres de texto diferentes. Podem incluir braços, ações e objetos.",
        "Emojis, como 😊: imagens únicas. Cada um tem seu próprio código Unicode e cada plataforma desenha com sua própria arte.",
      ],
      examples: ["(｡◕‿◕｡)", "(╥﹏╥)", "¯\\_(ツ)_/¯"],
    },
    {
      heading: "Como usar esta biblioteca de kaomojis",
      list: [
        "Busque por sentimento, animal ou ação, por exemplo: gato, chorar, amor, abraço ou ombros.",
        "Ou explore: escolha um grupo (Emoções, Fofos, Amor, Animais, Ações, Brilhos) e depois uma categoria.",
        "Toque ou clique em qualquer kaomoji. Ele é copiado na hora e aparece a mensagem “Copiado”.",
        "Cole onde quiser com Ctrl+V, Cmd+V, ou no celular segurando e tocando em Colar.",
      ],
      paragraphs: [
        "Cada categoria também tem sua própria página com a lista completa, dividida em seções menores. Por exemplo, a [página de kaomojis tristes](page:sad) separa as carinhas chorando das solitárias e decepcionadas.",
      ],
    },
    {
      heading: "Como digitar kaomojis no celular ou no computador",
      paragraphs: ["Copiar e colar é o jeito mais fácil, e é para isso que este site existe. Se você usa sempre as mesmas carinhas, experimente uma destas opções:"],
      list: [
        "Atalhos de substituição de texto: iPhone e iPad (Ajustes › Geral › Teclado › Substituição de Texto), Mac (Ajustes do Sistema › Teclado › Substituições de texto) e muitos teclados Android como o Gboard (dicionário pessoal) permitem salvar uma frase. Por exemplo, digitar “ombross” pode virar ¯\\_(ツ)_/¯.",
        "Teclados japoneses: muitos métodos de entrada japoneses (IME) sugerem kaomojis quando você digita palavras como かお (kao). A lista depende do seu teclado e sistema operacional.",
        "Painel de emojis do Windows: no Windows 10 e 11, aperte tecla Windows + . (ponto) e abra a aba de kaomojis para uma pequena seleção integrada.",
      ],
    },
    {
      heading: "Onde os kaomojis funcionam e onde talvez não",
      paragraphs: [
        "Os kaomojis costumam colar sem problema no WhatsApp, Discord, legendas e bios do Instagram, comentários do TikTok, posts no X, Messenger, SMS, e-mail e na maioria dos chats de jogos, porque são texto Unicode comum.",
        "Alguns lugares são mais rígidos. Campos de nome de usuário muitas vezes só aceitam letras e números, alguns jogos filtram caracteres incomuns e limites de caracteres podem cortar kaomojis longos, como os de virar a mesa. Se um for recusado, tente um mais simples feito de caracteres comuns, como (^_^) ou (T_T).",
      ],
    },
    {
      heading: "Por que alguns kaomojis aparecem como quadradinhos ou pontos de interrogação?",
      paragraphs: [
        "Cada caractere de um kaomoji precisa existir em alguma fonte do aparelho que o exibe. Se nenhuma fonte instalada tiver aquele caractere (glifo), aparece um quadradinho vazio (chamado de “tofu”), um ponto de interrogação ou um espaço. O sistema tenta outras fontes primeiro (isso se chama fallback de fontes), mas celulares antigos, smart TVs e alguns apps têm poucas fontes.",
        "Caracteres de escritas menos comuns, como ଘ, ʚ, ꒰ ou ᓚᘏᗢ, são os que mais faltam. Marcas combinantes, como os acentos em •̀ᴗ•́, também podem aparecer deslocadas em algumas fontes. Se seu amigo vê quadradinhos, escolha um kaomoji com caracteres mais comuns ou veja a [explicação do Consórcio Unicode sobre fontes e exibição](https://www.unicode.org/faq/font_keyboard.html) (em inglês).",
      ],
    },
    {
      heading: "O problema do Discord: por que seu kaomoji perde um braço",
      paragraphs: [
        "O Discord usa formatação Markdown. Uma barra invertida \\ significa “mostre o próximo caractere como está”, texto entre _sublinhados_ ou *asteriscos* vira itálico ou negrito, ~~tis~~ riscam o texto, `crases` criam código e ||barras verticais|| escondem spoilers. Por isso, quando você cola ¯\\_(ツ)_/¯, o Discord trata a barra invertida como escape, o sublinhado some e a carinha perde o braço esquerdo.",
        "Ative a “Cópia segura para Discord” acima da biblioteca. Ela adiciona uma barra invertida antes de cada um desses caracteres para o kaomoji aparecer exatamente como deveria. Deixe desativada para outros apps, porque lá as barras extras aparecem.",
      ],
      examples: ["¯\\_(ツ)_/¯"],
    },
    {
      heading: "Kaomojis e acessibilidade",
      paragraphs: [
        "Leitores de tela costumam ler kaomojis caractere por caractere: ヽ(・∀・)ﾉ pode ser anunciado como uma sequência de nomes de símbolos, ou simplesmente pulado. Para quem usa tecnologia assistiva, um kaomoji longo pode atrapalhar a mensagem.",
        "Use kaomojis para dar charme, não para passar informação importante. Escreva o significado também (“parabéns! ヽ(・∀・)ﾉ”) e evite kaomojis longos em nomes de usuário ou texto alternativo. Neste site, cada botão de kaomoji tem um rótulo falado curto, como “Copiar kaomoji: Gato se espreguiçando”, para quem usa leitor de tela navegar sem ouvir símbolos soltos.",
      ],
    },
    {
      heading: "Categorias de kaomojis populares",
      paragraphs: [
        "Comece pelas coleções mais usadas: [kaomojis fofos](page:cute) para carinhas kawaii, [kaomojis felizes](page:happy) para sorrisos, [kaomojis tristes e chorando](page:sad), [kaomojis de coração e amor](page:heart) e [kaomojis de gato](page:cat).",
        "Para algo mais específico, experimente as coleções de [dar de ombros](page:shrug), [com raiva](page:angry), [corados](page:blush), [coelhos](page:bunny), [anjos](page:angel) ou [estrelas e brilhos](page:star). Você também pode montar sua própria carinha no [Criador de kaomojis](page:maker).",
      ],
    },
  ],
  faqs: [
    { q: "O que significa kaomoji?", a: "Kaomoji é uma palavra japonesa formada por kao (rosto) e moji (caractere). São carinhas desenhadas com caracteres de texto, como (^_^) ou (╥﹏╥)." },
    { q: "Os kaomojis são grátis?", a: "Sim. Kaomojis são expressões curtas de texto usadas no mundo todo em mensagens, posts e bios. Você pode copiar e usar qualquer kaomoji deste site livremente." },
    { q: "Como copio um kaomoji?", a: "Toque ou clique nele. Ele é copiado na hora e aparece uma confirmação. Depois cole com Ctrl+V (Windows), Cmd+V (Mac) ou, no celular, segurando e tocando em Colar." },
    { q: "Qual a diferença entre kaomoji e emoji?", a: "Um emoji é uma única imagem que cada plataforma desenha do seu jeito. Um kaomoji é formado por vários caracteres de texto comuns, lido de frente, e aparece como texto na fonte que você está usando." },
    { q: "Por que meu kaomoji aparece com quadradinhos?", a: "O aparelho que exibe não tem uma fonte com um ou mais dos caracteres. Tente um kaomoji com caracteres mais comuns ou atualize o aparelho ou o app." },
    { q: "Por que meu kaomoji perdeu um braço no Discord?", a: "O Discord interpreta a barra invertida e os sublinhados como formatação. Ative a cópia segura para Discord antes de copiar e as barras necessárias são adicionadas para você." },
    { q: "Vocês guardam o que eu busco ou copio?", a: "Não. A busca, a cópia e o Criador de kaomojis funcionam no seu navegador, e nada do que você digita ou copia é enviado para nós. Seus kaomojis recentes só ficam salvos no seu aparelho se você permitir o armazenamento de preferências." },
  ],
  conclusion: {
    heading: "Encontre sua carinha e cole onde quiser",
    paragraphs: [
      "Seja um suave (˶ᵔ ᵕ ᵔ˶), um dramático (╯°□°)╯︵ ┻━┻ ou o clássico ¯\\_(ツ)_/¯, volte lá para cima, busque um sentimento e toque para copiar. Ainda não achou? Crie a sua no [Criador de kaomojis](page:maker).",
    ],
  },
};
