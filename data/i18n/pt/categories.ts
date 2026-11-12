// DRAFT: requires native-speaker review before launch.
import type { CategoryContent } from "@/types/i18n";
import type { PageCategoryId } from "@/types/kaomoji";

export const categories: Record<PageCategoryId, CategoryContent> = {
  cute: {
    title: "Kaomojis fofos: mais de 80 carinhas kawaii para copiar",
    description: "Copie kaomojis fofos com um clique: sorrisos kawaii, carinhas suaves com ω, carinhas com flores e piscadinhas brilhantes como (｡◕‿◕｡) e (˶ᵔ ᵕ ᵔ˶). Grátis para chats e bios.",
    h1: "Kaomojis fofos",
    intro: "Sorrisos kawaii, carinhas suaves com ω e piscadinhas brilhantes. Toque em qualquer uma para copiar.",
    sections: [
      {
        heading: "O que deixa um kaomoji fofo?",
        paragraphs: [
          "Kaomojis fofos (kawaii) usam alguns truques visuais: olhos grandes e redondos como ◕ ou ᵔ, bocas pequenas e suaves como ‿, ᴗ ou ω, e bochechas coradas feitas com caracteres como ˶, ｡ ou ⸝⸝. Detalhes como flores ✿ ❀ e brilhos ✧ deixam tudo ainda mais doce.",
          "A boca ω merece destaque. É a letra grega ômega e parece uma boquinha de gato, por isso carinhas como (・ω・) e (｡･ω･｡) parecem macias e fofinhas.",
        ],
        examples: ["(◕‿◕✿)", "(｡･ω･｡)", "(˶ᵔ ᵕ ᵔ˶)"],
      },
      {
        heading: "Como as pessoas usam kaomojis fofos",
        list: [
          "Para suavizar uma mensagem: “ok, até amanhã (｡•ᴗ•｡)” soa mais carinhoso que um simples “ok”.",
          "Para enfeitar bios, nomes de exibição e legendas no Instagram, TikTok e Discord.",
          "Para agradecer ou mostrar empolgação sem emoji, por exemplo (๑˃ᴗ˂)ﻭ.",
          "Para dar personalidade a grupos de WhatsApp, lives e comunidades de fãs.",
        ],
      },
      {
        heading: "Dicas de exibição",
        paragraphs: [
          "A maioria das carinhas fofas usa caracteres comuns e aparece quase em todo lugar. Algumas dependem de símbolos menos comuns: ˶ e ⸝ (pequenas marcas modificadoras), ꈍ (uma sílaba yi), ᗒ e ᐢ (silabários aborígenes canadenses) e ڡ (uma letra árabe). Em aparelhos antigos podem virar quadradinhos. Se isso acontecer, opções clássicas como (◕‿◕) ou (^‿^) são as mais seguras.",
          "Carinhas com acentos combinantes, como (｡•̀ᴗ-)✧, colocam uma marca sobre o caractere anterior. Em algumas fontes o acento pode ficar um pouco de lado. É o comportamento normal da fonte, não um erro na cópia.",
        ],
      },
      {
        heading: "Nota de acessibilidade",
        paragraphs: ["Kaomojis fofos são curtos, mas leitores de tela podem ler cada símbolo ou pular a carinha. Se o kaomoji transmite algo importante (“fiquei muito feliz por você!”), diga também com palavras."],
      },
    ],
    faqs: [
      { q: "Qual é o kaomoji mais fofo?", a: "Depende de cada um, mas clássicos como (｡◕‿◕｡), (◕‿◕✿) e (˶ᵔ ᵕ ᵔ˶) são populares pelos olhos redondos, bocas suaves e bochechas coradas." },
      { q: "O que significa o ω nos kaomojis?", a: "ω é a letra grega ômega. Nos kaomojis ela funciona como uma boquinha de gato, que deixa a carinha suave e fofa, como em (・ω・)." },
      { q: "O que significa kawaii?", a: "Kawaii é a palavra japonesa para fofo ou adorável. Kaomojis kawaii usam olhos redondos, bocas pequenas e marcas de rubor para parecer doces." },
    ],
  },
  happy: {
    title: "Kaomojis felizes: 75 carinhas de sorriso e alegria",
    description: "Copie kaomojis felizes e de sorriso na hora: sorrisões (＾▽＾), comemorações ＼(^o^)／ e danças de alegria ٩(◕‿◕)۶. Cópia com um clique, grátis.",
    h1: "Kaomojis felizes e de sorriso",
    intro: "Sorrisos, gargalhadas, comemorações e danças da vitória, de um tranquilo (^_^) até um ＼(≧▽≦)／ completo.",
    sections: [
      {
        heading: "Como os kaomojis felizes mostram alegria",
        paragraphs: [
          "Kaomojis felizes costumam usar curvas para cima. Olhos fechados e sorridentes como ^ ou ⌒ sugerem rir tanto que os olhos apertam, enquanto ≧ e ≦ mostram os olhos espremidos de empolgação. Bocas abertas como ▽, ∀ e o dão volume, e braços erguidos como ヽ ﾉ, ＼ ／ ou ٩ ۶ transformam um sorriso em comemoração.",
        ],
        examples: ["(＾▽＾)", "(≧▽≦)", "＼(^o^)／"],
      },
      {
        heading: "Escolha o nível de felicidade",
        list: [
          "Contente na boa: (^_^), (^‿^) ou (￣▽￣) para “beleza” ou “obrigado”.",
          "Rindo: (⌒▽⌒), (´∀`) ou (ﾉ≧∀≦)ﾉ quando algo é engraçado.",
          "Comemorando: ＼(≧▽≦)／, ヽ(*⌒▽⌒*)ﾉ ou ٩(ˊᗜˋ*)و para boas notícias, vitórias e aniversários.",
        ],
        paragraphs: ["Os kaomojis de sorriso (as carinhas mais suaves) estão na primeira seção abaixo. As carinhas de comemoração vêm depois."],
      },
      {
        heading: "Onde funcionam melhor",
        paragraphs: [
          "Carinhas felizes combinam com quase tudo: grupos de WhatsApp, respostas a boas notícias, chat do jogo depois de uma vitória ou o fim de uma legenda. As simples como (^_^) e (^o^) usam caracteres presentes em quase todo aparelho, então são uma escolha segura quando você não sabe qual celular a outra pessoa usa.",
        ],
      },
      {
        heading: "Uma observação sobre ＼ e ／",
        paragraphs: [
          "Carinhas como ＼(^o^)／ usam barras de largura total, mais largas que as normais, que ficam equilibradas ao lado de caracteres japoneses. A versão \\(^ω^)/ usa barras comuns. No Discord, essa barra invertida é um caractere de formatação, então use a cópia segura para Discord.",
        ],
      },
    ],
    faqs: [
      { q: "O que é um kaomoji de sorriso?", a: "É uma carinha feliz de texto como (^_^), (^‿^) ou (◕‿◕). Esta página inclui kaomojis de sorriso e carinhas felizes mais empolgadas." },
      { q: "O que significa (^_^)?", a: "(^_^) é uma carinha calma e feliz. Os ^ são olhos fechados sorrindo. É usada para mostrar simpatia ou satisfação." },
      { q: "O que significa ＼(^o^)／?", a: "É uma carinha comemorando com os dois braços para cima, muito usada para celebrar boas notícias ou dizer “viva!”." },
    ],
  },
  sad: {
    title: "Kaomojis tristes e chorando: 67 carinhas para copiar",
    description: "Copie kaomojis tristes e chorando: carinhas com lágrimas (╥﹏╥), soluços (T_T), carinhas solitárias e decepcionadas. Cópia com um clique para chats e posts.",
    h1: "Kaomojis tristes e chorando",
    intro: "Lágrimas, soluços, suspiros e biquinhos. Para quando você precisa dizer “não tô bem” ou só “nãooo”.",
    sections: [
      {
        heading: "Como os kaomojis tristes são montados",
        paragraphs: [
          "A maioria dos kaomojis chorando desenha as lágrimas como linhas verticais sob os olhos. ╥, T, ಥ, இ, 〒 e ㄒ parecem olhos com lágrimas escorrendo. O ponto e vírgula ; funciona como uma única lágrima, por isso (;_;) parece choro silencioso. Bocas onduladas como ﹏ e ︵ dão um ar trêmulo.",
          "Carinhas tristes sem lágrimas usam formas caídas: ◞‸◟ para um suspiro decepcionado, ´・ω・` para desânimo e ︶︹︺ para um resmungo triste.",
        ],
        examples: ["(╥﹏╥)", "(;_;)", "(◞‸◟)"],
      },
      {
        heading: "Chorar x estar triste: escolha a carinha certa",
        list: [
          "Tristeza de verdade ou empatia: (╥﹏╥), (｡•́︿•̀｡) ou (っ˘̩╭╮˘̩)っ, que pede um abraço.",
          "“Tô chorando” de brincadeira, como um vídeo engraçado ou um plano cancelado: (T▽T), (〒▽〒) ou (ಥ‿ಥ).",
          "Decepção: (◞‸◟), (´-ω-`) ou (˘︹˘).",
        ],
        paragraphs: [
          "O contexto importa. Entre amigos, (T_T) depois de “acabou meu salgadinho favorito” é piada, mas a mesma carinha numa conversa séria parece sincera. Se alguém está mal de verdade, palavras costumam ser mais gentis que qualquer kaomoji.",
        ],
      },
      {
        heading: "Exibição e compatibilidade",
        paragraphs: [
          "As carinhas chorando usam caracteres de várias escritas: ಥ é canarês, இ é tâmil, 〒 é o símbolo postal japonês e ╥ é um caractere de desenho de caixa. Funcionam bem em celulares e computadores modernos, mas aparelhos antigos podem mostrar quadradinhos no lugar de ಥ ou இ. Nesse caso, (T_T) e (;_;) são as opções mais universais.",
        ],
      },
      {
        heading: "Acessibilidade",
        paragraphs: ["Um leitor de tela pode ler (ಥ﹏ಥ) como uma sequência de nomes de letras desconhecidas. Se você está contando que está pra baixo, acrescente palavras, como “dia difícil (╥﹏╥)”, para todo mundo entender."],
      },
    ],
    faqs: [
      { q: "O que significa (╥﹏╥)?", a: "É uma carinha chorando. Os ╥ parecem olhos com lágrimas escorrendo e ﹏ é uma boca trêmula." },
      { q: "O que significa T_T?", a: "T_T representa choro. Os T são olhos fechados com lágrimas descendo. Pode ser sincero ou de brincadeira." },
      { q: "Qual a diferença entre ;_; e T_T?", a: "Os dois significam chorar. ;_; sugere poucas lágrimas silenciosas e T_T, rios de lágrimas. Na prática são usados quase do mesmo jeito." },
    ],
  },
  heart: {
    title: "Kaomojis de coração e amor: 68 carinhas para copiar",
    description: "Copie kaomojis de coração e de amor: olhos de coração (♡ω♡), carinhas mandando corações (◕‿◕)♡, beijos ( ˘ ³˘)♥ e casais. Cópia com um clique.",
    h1: "Kaomojis de coração e amor",
    intro: "Olhos de coração, beijos no ar e carinhas mandando amor. Toque para copiar.",
    sections: [
      {
        heading: "Os corações dos kaomojis de amor",
        paragraphs: [
          "Os kaomojis de amor usam principalmente três corações: o contorno ♡, o sólido ♥ e o grosso ❤. Em muitos celulares o ❤ pode aparecer como emoji vermelho em vez de texto, então o mesmo kaomoji pode ficar um pouco diferente em cada aparelho. ღ, uma letra georgiana que parece um coração enrolado, dá um toque decorativo, como em (ღ˘⌣˘ღ).",
          "Carinhas de beijo usam ³ ou ε como lábios em biquinho: ( ˘ ³˘)♥. Olhos de coração simplesmente trocam os olhos por corações: (♡ω♡).",
        ],
        examples: ["(♡ω♡)", "(◕‿◕)♡", "( ˘ ³˘)♥"],
      },
      {
        heading: "Jeitos de usar kaomojis de coração",
        list: [
          "Agradecer com carinho: “muito obrigado (◕‿◕)♡”.",
          "Reagir a algo fofo: (♡°▽°♡).",
          "Mensagens no WhatsApp para o crush, amigos ou família: (っ◕‿◕)っ♡ ou (づ￣ ³￣)づ.",
          "Bios e legendas, onde um pequeno (•ᴗ•)♡ dá calor sem ocupar muito espaço.",
        ],
      },
      {
        heading: "Notas de compatibilidade",
        paragraphs: [
          "♡ e ♥ são símbolos padrão, compatíveis em quase todo lugar. O ❤ pode alternar entre coração de texto preto e emoji vermelho dependendo do app. Carinhas com o japonês 灬 (usado aqui como rubor) ou com ʃƪ precisam de fontes mais completas e podem virar quadradinhos em aparelhos antigos.",
        ],
      },
      {
        heading: "Acessibilidade",
        paragraphs: ["Leitores de tela costumam dizer “coração” ou “naipe de copas preto” para esses caracteres. Isso pode soar estranho no meio da frase, então deixe os kaomojis de amor no fim da mensagem."],
      },
    ],
    faqs: [
      { q: "O que é o kaomoji de coração?", a: "Qualquer kaomoji com um símbolo de coração, como (♡ω♡), (◕‿◕)♡ ou (っ◕‿◕)っ♡. Eles mostram amor, carinho ou que você adorou algo." },
      { q: "Por que meu coração ❤ fica vermelho em alguns apps?", a: "O ❤ pode aparecer como símbolo de texto ou como emoji vermelho. Muitos apps mostram a versão emoji automaticamente." },
      { q: "O que significa ( ˘ ³˘)♥?", a: "É uma carinha mandando um beijo. O ³ são os lábios em biquinho e ♥ é o beijo sendo enviado." },
    ],
  },
  cat: {
    title: "Kaomojis de gato: 59 carinhas de gatinho para copiar",
    description: "Copie kaomojis de gato com um clique: gatinhos clássicos (=^･ω･^=), gatos de patinhas para cima ฅ^•ﻌ•^ฅ, o gato se espreguiçando ᓚᘏᗢ e gatos de humor forte.",
    h1: "Kaomojis de gato",
    intro: "Gatinhos, patinhas, gatos pãozinho e gatos rabugentos, de (=^･ω･^=) a ᓚᘏᗢ.",
    sections: [
      {
        heading: "Como reconhecer um kaomoji de gato",
        paragraphs: [
          "Kaomojis de gato usam algumas peças típicas. As orelhas vêm de ^ ou do japonês ﾐ. Os bigodes são sinais = dos dois lados do rosto. A boca geralmente é ω ou ﻌ, que parecem o lábio partido de um gato. As patinhas costumam ser ฅ, uma letra tailandesa cujo formato lembra uma pata levantada.",
          "Os olhos definem o humor: ･ e • são calmos, Φ parece pupilas finas, ↀ são olhos arregalados e ಠ é puro julgamento.",
        ],
        examples: ["(=^･ω･^=)", "ฅ^•ﻌ•^ฅ", "ᓚᘏᗢ"],
      },
      {
        heading: "Kaomojis de gato populares e o que significam",
        list: [
          "(=^･ω･^=): o gatinho clássico, simpático e neutro.",
          "ฅ^•ﻌ•^ฅ: um gato com as duas patinhas para cima, brincalhão ou pedindo atenção.",
          "ᓚᘏᗢ: um gato se espreguiçando ou andando, feito com silabários aborígenes canadenses.",
          "(=ↀωↀ=): um gato de olhos arregalados, perfeito para “eu vi isso”.",
          "(=ＴェＴ=): um gato chorando, para tristeza dramática.",
        ],
      },
      {
        heading: "Onde usar kaomojis de gato",
        paragraphs: [
          "Kaomojis de gato são queridinhos em servidores do Discord, nomes de usuário, legendas de tutores de gatos no Instagram e TikTok, e como despedida mais fofa no WhatsApp. Também funcionam quando um sorriso comum parece simples demais.",
        ],
      },
      {
        heading: "Dicas de exibição",
        paragraphs: [
          "A maioria das carinhas de gato usa caracteres comuns, mas algumas dependem de outros mais raros. ᓚᘏᗢ e ᓚ₍ ^. .^₎ usam silabários aborígenes canadenses, ﻌ é uma forma de letra árabe e ᆽ é um jamo coreano. Se seu amigo vê quadradinhos, (=^･ω･^=) ou (^・ω・^ ) são os clássicos mais seguros.",
        ],
      },
    ],
    faqs: [
      { q: "Qual é o kaomoji de gato?", a: "O mais conhecido é (=^･ω･^=): orelhas ^, bigodes = e boca ω. Outros populares são ฅ^•ﻌ•^ฅ e ᓚᘏᗢ." },
      { q: "Como faço uma carinha de gato com símbolos?", a: "Combine orelhas (^ ou ﾐ), bigodes (=), olhos (･ ou •) e uma boca de gato (ω ou ﻌ), por exemplo (=^･ω･^=). Você também pode montar uma no Criador de kaomojis." },
      { q: "O que é ฅ nos kaomojis de gato?", a: "ฅ é uma letra do alfabeto tailandês. O formato lembra uma pata de gato levantada, por isso é usada como patinha em carinhas como ฅ^•ﻌ•^ฅ." },
    ],
  },
  star: {
    title: "Kaomojis de estrela e brilho: 52 carinhas para copiar",
    description: "Copie kaomojis de estrela e brilho: olhos estrelados (☆ω☆), carinhas brilhantes ✧◝(⁰▿⁰)◜✧ e varinhas mágicas (∩^o^)⊃━☆ﾟ.*･｡ﾟ. Cópia com um clique, grátis.",
    h1: "Kaomojis de estrela e brilho",
    intro: "Olhos estrelados, rastros de glitter e feitiços mágicos para mais empolgação.",
    sections: [
      {
        heading: "Os símbolos por trás dos kaomojis brilhantes",
        paragraphs: [
          "Kaomojis com brilho misturam carinhas com símbolos decorativos. ✧ é um brilho de quatro pontas, ☆ e ★ são estrelas vazada e cheia, ✩ e ⋆ são estrelas menores, e sequências como ﾟ･｡ e .:* criam um rastro de glitter. Nos olhos, viram encanto estrelado (☆ω☆). Depois da carinha, fazem ela brilhar (◕‿◕)✧.",
          "Kaomojis mágicos ganham uma varinha feita com ━☆, muitas vezes segurada por braços como ∩ e ⊃: (∩^o^)⊃━☆ﾟ.*･｡ﾟ.",
        ],
        examples: ["(☆ω☆)", "✧◝(⁰▿⁰)◜✧", "(∩^o^)⊃━☆ﾟ.*･｡ﾟ"],
      },
      {
        heading: "Quando usar kaomojis de estrela e brilho",
        list: [
          "Hype e empolgação: “episódio novo hoje à noite (✪ω✪)”.",
          "Celebrar alguém: ✧*｡٩(ˊᗜˋ*)و✧*｡ pela conquista de um amigo.",
          "Deixar uma legenda mágica ou sonhadora: *:･ﾟ✧(ꈍᴗꈍ)✧･ﾟ:*.",
          "Desejar boa sorte, como um feitiço: ☆ﾐ(o*･ω･)ﾉ.",
        ],
      },
      {
        heading: "Tamanho e limite de caracteres",
        paragraphs: [
          "Kaomojis com brilho estão entre os mais longos da biblioteca. Alguns como ✧･ﾟ: *✧･ﾟ:* (◕‿◕) *:･ﾟ✧*:･ﾟ✧ ocupam boa parte do limite de uma bio ou nome de usuário e podem quebrar em duas linhas em telas pequenas. Para espaços apertados, opções curtas como (◕‿◕)✧ ou (☆ω☆) funcionam melhor.",
        ],
      },
      {
        heading: "Acessibilidade",
        paragraphs: ["Cada ✧ e ☆ pode ser lido em voz alta um por um, o que deixa rastros longos cansativos com leitor de tela. Use como enfeite no fim da mensagem e evite kaomojis brilhantes longos em nomes de usuário."],
      },
    ],
    faqs: [
      { q: "O que significa ✧ nos kaomojis?", a: "✧ é um símbolo de brilho. Junto de uma carinha, sugere brilho, empolgação ou algo mágico, como em (◕‿◕)✧." },
      { q: "O que significa (☆ω☆)?", a: "É uma carinha de olhos estrelados mostrando encanto ou empolgação com algo." },
      { q: "Kaomoji de estrela é o mesmo que kaomoji de brilho?", a: "Eles se parecem muito, por isso ficam juntos. Os de estrela usam ☆ ou ★ e os de brilho usam ✧ e rastros de glitter. Muitas carinhas usam os dois." },
    ],
  },
  shrug: {
    title: "Kaomoji dando de ombros: ¯\\_(ツ)_/¯ e mais 49",
    description: "Copie o kaomoji de dar de ombros ¯\\_(ツ)_/¯ e 49 variações como ┐(￣ヘ￣)┌ e 乁( •_• )ㄏ. Inclui cópia segura para Discord para ele não perder um braço.",
    h1: "Kaomojis dando de ombros ¯\\_(ツ)_/¯",
    intro: "Para “sei lá”, “tanto faz” e “fazer o quê”, o clássico ¯\\_(ツ)_/¯ e mais 49.",
    sections: [
      {
        heading: "Anatomia do dar de ombros clássico",
        paragraphs: [
          "O famoso ¯\\_(ツ)_/¯ é formado por: ¯ (um mácron, as mãos levantadas), \\ e / (os braços), _ (os ombros ou antebraços), parênteses para a cabeça e ツ, o caractere katakana japonês tsu, que parece uma carinha sorrindo.",
          "Outras versões usam cantos de desenho de caixa como ┐ e ┌ para mãos levantadas, ╮ e ╭ para braços abertos, ou 乁 e ㄏ (emprestados de caracteres chineses e do bopomofo) para braços estendidos para os lados.",
        ],
        examples: ["¯\\_(ツ)_/¯", "┐(￣ヘ￣)┌", "乁( •_• )ㄏ"],
      },
      {
        heading: "Como colar no Discord sem perder um braço",
        paragraphs: [
          "Esse é o problema de kaomoji mais comum. O Discord usa Markdown, onde \\ escapa o próximo caractere e _ marca itálico. Quando você cola ¯\\_(ツ)_/¯, a barra invertida “escapa” o sublinhado, os dois somem da tela e sobra ¯_(ツ)_/¯, sem um braço.",
          "A solução é digitar uma barra invertida extra. Ative a cópia segura para Discord e copiamos ¯\\\\\\_(ツ)\\_/¯ para você, que o Discord mostra certinho como ¯\\_(ツ)_/¯. Outros apps que usam Markdown (como o Slack ou o editor do Reddit) podem se comportar igual.",
        ],
      },
      {
        heading: "Escolha o dar de ombros certo",
        list: [
          "“Sei lá” simpático: ¯\\_(ツ)_/¯ ou ┐(´ー`)┌.",
          "“Tanto faz” despreocupado: ┐(￣ヘ￣)┌ ou ╮(￣～￣)╭.",
          "Sarcástico ou convencido: ¯\\_( ͡° ͜ʖ ͡°)_/¯ ou ┐(￣ー￣)┌.",
          "“Fazer o quê” sem esperança: ╮(╯▽╰)╭.",
        ],
      },
      {
        heading: "Notas de exibição",
        paragraphs: [
          "O dar de ombros clássico usa caracteres compatíveis quase em todo lugar. A versão Lenny ¯\\_( ͡° ͜ʖ ͡°)_/¯ usa marcas combinantes (͡ e ͜) que ficam acima ou abaixo dos caracteres vizinhos. Elas podem parecer desalinhadas em algumas fontes e ser cortadas em campos estreitos.",
        ],
      },
    ],
    faqs: [
      { q: "Como digito ¯\\_(ツ)_/¯?", a: "O jeito mais fácil é copiar desta página. Se usa sempre, crie um atalho de substituição de texto no celular ou computador que transforma uma palavra como “ombross” em ¯\\_(ツ)_/¯." },
      { q: "Por que falta um braço no Discord?", a: "O Discord trata a barra invertida como caractere de escape, o que esconde o sublinhado seguinte. Use a cópia segura para Discord, que adiciona barras extras para aparecer completo." },
      { q: "O que é o ツ do dar de ombros?", a: "ツ é o caractere katakana japonês “tsu”. O formato lembra uma carinha sorrindo, por isso é usado como cabeça." },
    ],
  },
  bunny: {
    title: "Kaomojis de coelho: 51 carinhas de coelhinho para copiar",
    description: "Copie kaomojis de coelho com um clique: coelhos de orelhas compridas ／(・ × ・)＼, coelhinhos fofos ૮ ˶ᵔ ᵕ ᵔ˶ ა, saltitando ∩(・ω・)∩ e o clássico (\\_/). Grátis.",
    h1: "Kaomojis de coelho",
    intro: "Orelhas compridas, narizinhos agitados e pulos felizes. Toque num coelhinho para copiar.",
    sections: [
      {
        heading: "Como os kaomojis de coelho são desenhados",
        paragraphs: [
          "Kaomojis de coelho dependem das orelhas e do nariz. Orelhas compridas são desenhadas com barras de largura total ／ ＼ dos dois lados do rosto, com formas ∩ acima dele ou com as letras gujarati e georgiana ૮ e ა, que se curvam como orelhas caídas. Narizes e bocas vêm de x, ×, ㅅ (uma consoante coreana) e ᆺ, que lembram o narizinho em Y de um coelho.",
        ],
        examples: ["／(・ × ・)＼", "૮ ˶ᵔ ᵕ ᵔ˶ ა", "∩(・ω・)∩"],
      },
      {
        heading: "Jeitos de usar kaomojis de coelho",
        list: [
          "Como assinatura fofa em chats e comentários.",
          "Na Páscoa ou no Ano-Novo Lunar (principalmente num Ano do Coelho).",
          "Em bios e nomes de usuário, onde carinhas pequenas como (•ㅅ•) cabem bem.",
          "Como alternativa mais delicada às coleções fofas e de gato.",
        ],
      },
      {
        heading: "O coelho (\\_/) e o Discord",
        paragraphs: [
          "O pequeno kaomoji de orelhas de coelho (\\_/) tem uma barra invertida e um sublinhado, então o Discord pode transformá-lo em (_/). Use a cópia segura para Discord antes de colar lá. O mesmo vale para qualquer outro com \\ ou _.",
        ],
      },
      {
        heading: "Dicas de exibição",
        paragraphs: [
          "Os coelhinhos ૮ ... ა usam letras gujarati e georgianas, além de pequenas marcas como ˶ e ₍ ₎. Celulares e computadores recentes mostram bem, mas versões antigas do Android e algumas smart TVs talvez não. ／(・x・)＼ e (•ㅅ•) são as opções mais compatíveis.",
        ],
      },
    ],
    faqs: [
      { q: "Qual é o kaomoji de coelho?", a: "Os mais populares são ／(・ × ・)＼, (\\_/) e ૮ ˶ᵔ ᵕ ᵔ˶ ა. Usam barras ou letras curvas para as orelhas compridas e x ou ㅅ para o nariz." },
      { q: "O que significa ૮ ˶ᵔ ᵕ ᵔ˶ ა?", a: "É um coelhinho fofo e feliz (também pode parecer um cachorrinho). ૮ e ა são as orelhas, ᵔ ᵕ ᵔ é uma carinha sorrindo e ˶ dá bochechas coradas." },
      { q: "Por que meu kaomoji de coelho não aparece direito?", a: "Alguns coelhinhos usam caracteres que aparelhos antigos não têm, e viram quadradinhos. Tente um mais simples como ／(・x・)＼ ou (•ㅅ•)." },
    ],
  },
  angry: {
    title: "Kaomojis com raiva: 59 carinhas bravas e furiosas",
    description: "Copie kaomojis com raiva com um clique: carinhas furiosas (╬ Ò﹏Ó), o olhar de desaprovação ಠ_ಠ, olhar de canto (¬_¬) e prontos para brigar (ง •̀_•́)ง.",
    h1: "Kaomojis com raiva",
    intro: "De levemente irritado (¬_¬) a fúria total ٩(╬ʘ益ʘ╬)۶. Expresse em texto.",
    sections: [
      {
        heading: "As peças de um kaomoji com raiva",
        paragraphs: [
          "Kaomojis com raiva usam formas pontudas e inclinadas. Sobrancelhas feitas com ` e ´ apontam para o nariz, como em (｀Д´). Bocas como 益 (um caractere chinês que significa “benefício”, usado pelo visual de dentes cerrados), 皿 (prato) e Д (o De cirílico) mostram gritos ou dentes trincados. Os símbolos ╬ e メ representam a veia de raiva que aparece nos mangás.",
          "O olhar de desaprovação ಠ_ಠ usa ಠ, uma letra da escrita canaresa do sul da Índia, cujo formato dá um olhar severo perfeito.",
        ],
        examples: ["(╬ Ò﹏Ó)", "ಠ_ಠ", "(ง •̀_•́)ง"],
      },
      {
        heading: "Escolha o nível de raiva",
        list: [
          "Nada impressionado ou julgando: ಠ_ಠ, (¬_¬) ou (눈_눈).",
          "Rabugento ou emburrado: (￣^￣), (｀ε´) ou (๑`^´๑).",
          "Furioso: (╬ಠ益ಠ), (ﾒ｀д´) ou (⋋▂⋌).",
          "Pronto para brigar (geralmente de brincadeira): (ง •̀_•́)ง ou (ง'̀-'́)ง.",
        ],
        paragraphs: [
          "Muita gente usa kaomojis com raiva de brincadeira, por exemplo com um amigo que deu spoiler de uma série. Para mais drama, veja os kaomojis virando a mesa (╯°□°)╯︵ ┻━┻ na página inicial.",
        ],
      },
      {
        heading: "Tom e contexto",
        paragraphs: [
          "Kaomojis suavizam o tom de uma mensagem, mesmo os bravos, que costumam soar exagerados ou cômicos. Mas num conflito real, uma carinha furiosa pode parecer deboche. Use onde todo mundo sabe que é brincadeira.",
        ],
      },
      {
        heading: "Notas de exibição",
        paragraphs: [
          "ಠ (canarês), 눈 (coreano), 益 e 皿 (CJK) são compatíveis com a maioria dos aparelhos modernos. As carinhas de briga usam acentos combinantes (̀ e ́) nos olhos, que podem aparecer deslocados em algumas fontes.",
        ],
      },
    ],
    faqs: [
      { q: "O que significa ಠ_ಠ?", a: "ಠ_ಠ é conhecido como olhar de desaprovação. É uma encarada julgadora, usada quando algo é irritante, ridículo ou constrangedor." },
      { q: "O que significa 益 nos kaomojis com raiva?", a: "益 é um caractere chinês. Nos kaomojis é usado só pelo formato, que parece dentes cerrados ou uma boca rosnando." },
      { q: "O que significa (ง •̀_•́)ง?", a: "É uma carinha de punhos erguidos, pronta para brigar. Geralmente é de brincadeira e também pode significar determinação, tipo “bora!”." },
    ],
  },
  angel: {
    title: "Kaomojis de anjo: 53 carinhas inocentes com asas",
    description: "Copie kaomojis de anjo com um clique: carinhas com asas ʚ(ˊᗜˋ)ɞ, anjos voando ଘ(੭ˊᵕˋ)੭ e anjinhos ꒰ঌ(•ᴗ•)໒꒱. Carinhas japonesas doces e inocentes.",
    h1: "Kaomojis de anjo",
    intro: "Asinhas, sorrisos suaves e carinhas inocentes. Toque para copiar.",
    sections: [
      {
        heading: "Como os kaomojis de anjo ganham asas",
        paragraphs: [
          "Kaomojis de anjo desenham as asas com caracteres que se curvam para fora. ʚ e ɞ são letras fonéticas (AFI) que parecem asinhas. ଘ (oriá) e ଓ se curvam como uma asa em voo. ꒰ঌ e ໒꒱ combinam um sinal de pontuação yi com letras bengali e laosianas para um visual arredondado e fofinho. ੭ (gurmukhi) é usado como bracinhos erguidos.",
        ],
        examples: ["ʚ(ˊᗜˋ)ɞ", "ଘ(੭ˊᵕˋ)੭", "꒰ঌ(•ᴗ•)໒꒱"],
      },
      {
        heading: "Quando as pessoas usam kaomojis de anjo",
        list: [
          "Bancando o inocente depois de uma piada: “quem, eu? ʚ(•‿•)ɞ”.",
          "Agradecendo alguém que ajudou: “você é um anjo ଘ(੭ˊᵕˋ)੭”.",
          "Bios e legendas suaves e estéticas.",
          "Mensagens gentis e de conforto: ʚ(˶ᵔ ᵕ ᵔ˶)ɞ.",
        ],
      },
      {
        heading: "Exibição e compatibilidade",
        paragraphs: [
          "Os kaomojis de anjo estão entre os que mais dependem de fontes, porque usam caracteres do oriá, gurmukhi, bengali, laosiano e yi. As versões atuais de iOS, Android, Windows e macOS geralmente cobrem essas escritas, mas sistemas antigos, algumas smart TVs e certos chats de jogos podem mostrar quadradinhos. ʚ(•‿•)ɞ é uma escolha bem segura. O estilo ꒰ঌ ... ໒꒱ é o que mais falha.",
          "Carinhas como ⁽⁽ଘ( ˊᵕˋ )ଓ⁾⁾ também usam parênteses sobrescritos ⁽ ⁾ para sugerir um movimento quicando.",
        ],
      },
      {
        heading: "Acessibilidade",
        paragraphs: ["Um leitor de tela pode ler ଘ ou ꒰ঌ como letras de vários idiomas. Use kaomojis de anjo como enfeite e diga com palavras o que você quer expressar."],
      },
    ],
    faqs: [
      { q: "O que é o kaomoji de anjo?", a: "São carinhas com caracteres que parecem asas dos dois lados, como ʚ(ˊᗜˋ)ɞ ou ଘ(੭ˊᵕˋ)੭, usadas para parecer doce ou inocente." },
      { q: "O que são ʚ e ɞ?", a: "São letras do Alfabeto Fonético Internacional. As formas curvas parecem asinhas, por isso emolduram as carinhas de anjo." },
      { q: "Por que os kaomojis de anjo aparecem com quadradinhos no meu celular?", a: "Eles usam caracteres de escritas como oriá, bengali e yi, que aparelhos antigos podem não ter. Tente um mais simples como ʚ(•‿•)ɞ ou atualize o aparelho." },
    ],
  },
  blush: {
    title: "Kaomojis corados: 52 carinhas tímidas para copiar",
    description: "Copie kaomojis corados com um clique: carinhas tímidas (⁄ ⁄•⁄ω⁄•⁄ ⁄), escondidas atrás das mãos (*/ω＼*) e bochechas rosadas (〃▽〃). Carinhas japonesas envergonhadas.",
    h1: "Kaomojis corados",
    intro: "Sem jeito, tímidos, envergonhados ou só um pouco rosados. Toque para copiar.",
    sections: [
      {
        heading: "Como os kaomojis mostram o rubor",
        paragraphs: [
          "O rubor é desenhado com marcas nas bochechas. 〃 (uma marca japonesa de “idem”), * e ⸝⸝⸝ funcionam como linhas rosadas, e 灬 (o radical de fogo CJK) aparece em carinhas como (灬º‿º灬). A barra de fração ⁄ usada em (⁄ ⁄•⁄ω⁄•⁄ ⁄) cria linhas diagonais de rubor no rosto inteiro, como um personagem de mangá ficando vermelho.",
          "Carinhas tímidas se escondem atrás das mãos: / e ＼ em (*/ω＼*) são mãos cobrindo o rosto, e ノ em (*ノωノ) é uma mão cobrindo de um lado.",
        ],
        examples: ["(⁄ ⁄•⁄ω⁄•⁄ ⁄)", "(*/ω＼*)", "(〃▽〃)"],
      },
      {
        heading: "Quando usar kaomojis corados",
        list: [
          "Ao receber um elogio: “para com isso (〃▽〃)”.",
          "Ao admitir algo vergonhoso: (*/_＼).",
          "Mensagens de paquera ou carinho: (⁄ ⁄>⁄ ▽ ⁄<⁄ ⁄).",
          "Felicidade delicada: (˶ˊᵕˋ˶).",
        ],
      },
      {
        heading: "Dicas de exibição",
        paragraphs: [
          "A barra de fração ⁄ e o ⸝ são compatíveis com a maioria dos sistemas modernos, mas podem parecer muito finos ou irregulares em algumas fontes. (〃▽〃) e (*^_^*) são as carinhas coradas mais compatíveis.",
          "Carinhas com barras invertidas ou ＼ aparecem bem na maioria dos apps. No Discord, só a barra invertida normal \\ causa problema, e a cópia segura para Discord resolve.",
        ],
      },
      {
        heading: "Acessibilidade",
        paragraphs: ["Kaomojis como (⁄ ⁄•⁄ω⁄•⁄ ⁄) têm muitas barras que um leitor de tela pode ler uma a uma. Use curtos e como enfeite."],
      },
    ],
    faqs: [
      { q: "O que significa (〃▽〃)?", a: "É um sorriso sem jeito e corado. As marcas 〃 são bochechas rosadas. Muito usado depois de um elogio." },
      { q: "O que significa (*/ω＼*)?", a: "É uma carinha tímida escondida atrás das mãos, usada quando você fica envergonhado ou acanhado." },
      { q: "Qual a diferença entre kaomojis corados e fofos?", a: "Os fofos são doces e felizes em geral. Os corados mostram especificamente timidez ou vergonha, quase sempre com marcas nas bochechas ou carinhas escondidas." },
    ],
  },
};
