// Rótulos em português do Brasil, na mesma ordem do Apêndice A.
// DRAFT: requires native-speaker review before launch.
import { labelsFromLists, type LabelLists } from "../label-lists";

const lists: LabelLists = {
  cute: [
    // kawaii
    "Sorriso kawaii clássico", "Sorriso com flor", "Sorriso doce florido", "Menina flor de olhos brilhantes", "Carinha feliz rosadinha",
    "Sorriso suave e meigo", "Sorriso gordinho", "Sorriso gordinho com brilhos", "Sorrisinho educado", "Sorrisão kawaii",
    "Sorriso simples e doce", "Sorriso calmo de olhos fechados", "Flor de olhinhos", "Contente e aconchegante", "Encanto de olhos arregalados",
    "Olhos alegres e brilhantes", "Rubor entre flores", "Sorriso floral doce", "Sorriso de flor delicado", "Sorriso de flor radiante",
    "Sorriso com coroa de flores", "Sorriso entre botões de flor", "Sorriso doce e feliz", "Sorriso alegre e suave", "Sorrisinho redondo",
    "Sorriso kawaii brilhante", "Carinha de flor sonolenta", "Sorriso corado de olhos grandes", "Olhos fechados em paz", "Olhos fechados sonhadores",
    "Sorrisinho simples", "Carinha feliz básica", "Sorriso com brilhinho", "Pequeno sorriso alegre", "Sorriso relaxado e sonolento",
    "Carinha calma e contente",
    // omega
    "Carinha fofinha", "Tchauzinho fofinho", "Carinha ômega clássica", "Ômega suave e corado", "Aconchego sonolento",
    "Ômega tímido", "Oi animado", "Sorriso sonolento", "Ômega feliz da vida", "Biquinho molinho",
    "Carinha de hamster", "Carinha suave e contente", "Carinha satisfeita", "Fofura de nariz de botão", "Sorriso de orelhinhas",
    // excited
    "Piscadinha brilhante", "Olhos cintilantes", "Fofura deslumbrada", "Olhos bem apertados", "Carinha dando risadinha",
    "Sorriso empolgado", "Sorriso radiante", "Agradavelmente surpresa", "Fofura comemorando", "Risadinha borbulhante",
    "Brilho determinado", "Fofura fazendo biquinho", "Feliz e quentinho", "Sorrisinho educado e meigo", "Carinha de gostosura",
    "Lambendo os lábios", "Gritinho de alegria", "Risadinha espremida", "Fofura encantada", "Olhos ofuscados",
    "Olhos reluzentes", "Grande sorriso feliz", "Sorriso gentil", "Sorriso tranquilo", "Sorriso espiando",
    "Fofura confiante", "Fofura com punho erguido", "Sorrisinho caprichado", "Gritando de alegria", "Gritinho feliz",
    "Carinha de passarinho",
  ],
  happy: [
    // smile
    "Grande sorriso feliz ^▽^", "Sorriso alegre em v", "Carinha feliz simples", "Sorriso feliz aberto", "Sorriso ômega contente",
    "Feliz de boca aberta", "Sorriso satisfeito", "Sorriso tranquilão", "Carinha feliz de biquinho", "Sorriso de pontinho",
    "Carinha feliz gentil", "Felicidade de olhos fechados", "Carinha feliz corada", "Rindo de olhos fechados", "Feliz e convencido",
    "Sorriso caloroso", "Risada amigável", "Risada de olhos brilhantes", "Sorriso de olhos arregalados", "Sorrisão satisfeito",
    "Sorrisinho orgulhoso", "Sorriso cúmplice", "Risada rosada", "Sorriso ômega rosado", "Sorriso feliz da vida",
    "Risada radiante", "Risada travessa", "Sorriso ensolarado", "Sorriso em paz", "Sorriso de bochechas redondas",
    "Carinha feliz boba", "Sorriso brincalhão", "Sorrindo com uma flor", "Sorriso de flor contente", "Sorriso leve",
    "Risada tímida", "Olhinhos felizes apertados", "Sorriso maroto", "Felicidade serena", "Risada surpresa",
    "Risada eufórica",
    // joy
    "Super empolgado", "Gritinho de emoção", "Risada transbordante", "Grito extasiado", "Explodindo de alegria",
    "Feliz de olhos estrelados", "Risada de olhos estrelados", "Sorriso com joinha", "Pulando de alegria", "Feliz e saltitante",
    "Saltando de felicidade", "Corridinha animada", "Correndo de alegria", "Salto alegre", "Rindo muito",
    "Corrida de comemoração", "Olhos apertados de alegria", "Dança da vitória", "Soquinho no ar feliz",
    // arms
    "Comemorando de braços para cima", "Viva!", "Risada de braços erguidos", "Grito de comemoração", "Comemorando",
    "Feliz de braços para cima", "Banzai alegre", "Grande viva", "Banzai empolgado", "Comemoração estrelada",
    "Comemoração clássica", "Dancinha alegre", "Dança feliz", "Pose de vitória fofa", "Comemoração calma",
  ],
  sad: [
    // crying
    "Chorando baixinho", "Lágrimas escorrendo", "Lágrimas clássicas", "Sorriso choroso", "Carinha com lágrimas",
    "Soluçando", "Lamento", "Biquinho choroso", "Chorando de leve", "Pequeno chorão",
    "Lágrimas silenciosas", "Lágrimas tremendo", "Choro trêmulo", "Ômega choroso", "Chorando de tristeza",
    "Soluço forte", "Segurando o choro", "Olhos marejados", "Sorrindo entre lágrimas", "Sorriso entre o choro",
    "Lágrimas de coração partido", "Lágrimas transbordando", "Olhos tristes marejados", "Tristeza silenciosa", "Chorando rios",
    "Risada chorosa", "Lágrimas em cascata", "Olhos inchados de chorar", "Lágrimas de cansaço", "Lágrimas correndo",
    "Enxugando as lágrimas", "Chorando nas mãos", "Cobrindo os olhos chorosos", "Esfregando os olhos chorosos", "Choro entre as mãos",
    "Escondendo a tristeza", "Escondido de vergonha", "Soluço desesperado", "Arrasado",
    // sad
    "Biquinho triste", "Testa franzida de preocupação", "Cara sombria", "Precisa de um abraço", "Suspiro decepcionado",
    "Suspiro de derrota", "Desanimado", "Cabisbaixo", "Tristeza sem graça", "Triste e sem palavras",
    "Emburrado", "Resmungo triste", "Cara infeliz", "Carinha abatida", "Careta de chateação",
    "Careta de dor", "Pra baixo", "Cara ansiosa", "Olhar preocupado", "Desiludido",
    "Flor triste", "Cara de biquinho", "Suspiro solitário", "Decepcionado", "Na bad",
    "Suor nervoso", "Suspiro preocupado", "Magoado em silêncio",
  ],
  heart: [
    // heart-eyes
    "Olhos de coração", "Olhos de coração apaixonados", "Olhos de coração adoráveis", "Gritinho com olhos de coração", "Olhos de coração maravilhados",
    "Suspiro com olhos de coração", "Paixão forte", "Olhos de coração vermelhos", "Olhos de coração com flor", "Derretendo de amor",
    "Totalmente caidinho", "Olhos de coração sonhadores", "Olhos de coração corados", "Brilho apaixonado", "Apaixonado",
    "Olhos de coração estrelados", "Olhos de coração doces", "Olhos de coração florais", "Olhos de coração simples", "Olhos de coração sem rosto",
    "Sorriso de coraçãozinho", "Sorriso de coração vermelho", "Olhos de coração tímidos",
    // hearts
    "Sorrindo com corações", "Contente com um coração", "Coração vermelho gordinho", "Coração gordinho com brilhos", "Amor sonhador",
    "Amor sonolento", "Corações e comemoração", "Rezando por amor", "Dança apaixonada", "Amor de olhos brilhantes",
    "Apaixonado de verdade", "Amor delicado", "Coraçãozinho carinhoso", "Acenando com um coração", "Amor doce com brilhos",
    "Sorrisão com coração", "Mandando um coração", "Espiando com um coração", "Abraçando um coração", "Coração de flor",
    "Jogando um coração", "Oferecendo um coração", "Aconchegado com um coração", "Sorriso de coração pequeno", "Coraçãozinho tímido",
    "Coração com risadinha", "Coração sorridente", "Entregando um coração", "Coração com piscadinha", "Coração paquerador",
    // kiss
    "Mandando um beijo", "Mandando um beijo vermelho", "Fazendo biquinho para beijar", "Beijo na bochecha", "Beijo escondido",
    "Beijo tímido", "Carinha de beijo", "Correndo para beijar", "Beijoca", "Beijinho",
    "Beijo de biquinho", "Beijo apaixonado", "Casal se beijando", "Beijo de casal", "Casal apaixonado",
  ],
  cat: [
    // cat-face
    "Gatinho clássico", "Gatinho de boca ômega", "Gatinho neutro", "Gatinho sonolento", "Gatinho curioso",
    "Gatinho sorridente", "Carinha de gato simples", "Gato de olhos redondos", "Gato de olhos arregalados", "Gato de pupilas finas",
    "Gato espertinho", "Gato feliz da vida", "Gato convencido", "Gato contente", "Gato rindo",
    "Gato de olhos brilhantes", "Gatinho inclinado", "Gatinho acenando", "Filhote de olhos grandes", "Filhote confuso",
    "Filhote de olhos vivos", "Filhote assustado", "Filhote meigo", "Gatinho pequeno", "Carinha de gato suave",
    "Gato tirando um cochilo", "Gato satisfeito", "Gato misterioso", "Gato piscando", "Gato de olhos redondos e sérios",
    "Gato cochilando", "Gato tímido", "Gato rabugento", "Gato se espreguiçando", "Gato pãozinho",
    "Gato com rabo",
    // cat-paws
    "Gato de patinhas para cima", "Gatinho dando patada", "Patinhas de gatinho alegre", "Patinhas de gatinho com flor", "Gatinho esticando as patas",
    "Patinha de gato preguiçoso", "Patinhas de gato empolgado", "Patinhas de gato peludo", "Patinhas de gato fofas", "Gatinho brincalhão",
    "Patinhas de gatinho feliz", "Gato querendo abraço", "Gato lançando uma estrela",
    // cat-moods
    "Gato chorando", "Gato nervoso", "Gato nocauteado", "Gato reprovando", "Gato chocado",
    "Gato tonto", "Gato triste", "Gato nada impressionado", "Gato horrorizado", "Gatinho miando",
  ],
  star: [
    // sparkle
    "Alegria cheia de estrelas", "Jogando brilhos", "Espalhando brilhinhos", "Determinação brilhante", "Vitória brilhante",
    "Brilhando forte", "Rodeado de brilhos", "Chuva de estrelas", "Brilhos sonhadores", "Alegria cintilante",
    "Rastro de brilhos", "Espalhando magia", "Estrela e comemoração", "Empolgação brilhante", "Piscadinha com brilhos",
    "Admiração luminosa", "Encanto sob as estrelas", "Brilho convencido", "Emoldurado por brilhos", "Brilho confiante",
    "Sorriso com brilho", "Brilho encantado", "Brilho alegre", "Brilho sonolento",
    // star-eyes
    "Olhos de estrela", "Sorriso estrelado", "Olhos de estrela atônitos", "Olhos de estrela maravilhados", "Olhos de estrela com flor",
    "Sorrisão estrelado", "Olhos de purpurina", "Empolgação estrelada", "Comemoração de olhos estrelados", "Flor deslumbrada",
    "Grito entre estrelas", "Aceno de olhos estrelados", "Sorriso cintilante", "Olhos piscando como estrelas", "Sorrindo com uma estrela",
    "Sorriso entre estrelas",
    // magic
    "Lançando magia", "Feitiço sério", "Mago disparando", "Sorriso com varinha estelar", "Estrela com piscadinha",
    "Piscadinha brincalhona", "Piscadinha marota com estrela", "Lançando uma estrela cadente", "Estrela em redemoinho", "Arremessando uma estrela",
    "Arremesso estelar empolgado", "Estrela girando",
  ],
  shrug: [
    // classic-shrug
    "Dar de ombros clássico", "Dar de ombros curto", "Dar de ombros Lenny", "Dar de ombros sem expressão", "Dar de ombros reprovador",
    "Dar de ombros bobo", "Dar de ombros confuso", "Dar de ombros sorridente", "Dar de ombros de olhos arregalados", "Dar de ombros cansado",
    "Dar de ombros sem graça", "Dar de ombros convencido", "Dar de ombros intrigado", "Dar de ombros cético",
    // hands-up
    "Tanto faz", "Dar de ombros despreocupado", "Dar de ombros preguiçoso", "Dar de ombros indiferente", "Dar de ombros de meh",
    "Dar de ombros resignado", "Dar de ombros nervoso", "Sorriso de fazer o quê", "Dar de ombros com sorriso", "Dar de ombros relaxado",
    "Dar de ombros pequenininho", "Dar de ombros exasperado", "Dar de ombros com suspiro", "Dar de ombros de saco cheio", "Dar de ombros entediado",
    "Vai saber", "Fazer o quê", "Dar de ombros sem esperança", "Dar de ombros maroto", "Dar de ombros rabugento",
    "Dar de ombros nada impressionado", "Suspiro de meh", "Dar de ombros sério e inexpressivo", "Dar de ombros suado", "Dar de ombros inocente",
    // other-shrug
    "Não é problema meu", "Meio dar de ombros", "Dar de ombros sem palavras", "Sei lá", "Sei lá simples",
    "Sei lá bobão", "Perdido", "Perdido com sorrisinho", "Perdido e abobado", "Perdido sem preocupação",
    "Perdido e envergonhado",
  ],
  bunny: [
    // bunny-ears
    "Orelhas de coelho", "Coelho de orelhas compridas", "Coelho com bigodes", "Coelho feliz", "Coelho sorridente",
    "Coelho empolgado", "Coelho simples", "Coelho corado", "Coelho sonolento", "Coelho convencido",
    "Coelho dando gritinho", "Coelho curioso", "Coelho de olhos grandes", "Coelho calmo", "Coelho atordoado",
    "Coelho chorando", "Coelho envergonhado", "Coelho chocado", "Coelho contente", "Coelho cochilando",
    "Coelho preocupado", "Coelhinho tímido",
    // bunny-face
    "Coelhinho doce", "Coelhinho aconchegado", "Coelhinho de biquinho", "Coelhinho de olhos marejados", "Coelhinho fofinho",
    "Coelhinho mandando beijo", "Coelhinho pensativo", "Coelhinho rindo", "Coelhinho em paz", "Coelhinho com coração",
    "Carinha de coelhinho", "Carinha de coelho pequena", "Coelhinho de olhos redondos", "Coelhinho sonolento", "Coelhinho mandando amor",
    "Narizinho de coelho sorridente", "Narizinho de coelho feliz", "Coelhinho querendo abraço", "Patinhas de coelhinho",
    // bunny-hop
    "Coelho de patinhas para cima", "Coelho saltitando", "Coelho saltitante convencido", "Pulo alegre de coelho", "Coelho rindo",
    "Pulinho de coelho animado", "Pulo de coelho empolgado", "Pulo com bigodes", "Pulo de coelho suave", "Pulinho de coelhinho",
  ],
  angry: [
    // mad
    "Cara fervendo de raiva", "Olhar furioso", "Olhar irritado", "Rangendo os dentes", "Soltando fumaça",
    "Gritando de raiva", "Rosnando", "Dentes cerrados", "Berrando", "Rosnado",
    "Grito bravo", "Biquinho bravo", "Irritado", "Cara rabugenta", "Cara emburrada",
    "Veia de irritação", "Chateado", "Cara de bravo", "Olhar raivoso", "Cara fechada",
    "Resmungando", "Olhar ameaçador", "Fúria malvada", "Indignado", "Biquinho de birra",
    "Prestes a explodir",
    // glare
    "Olhar nada impressionado", "Olhar de raiva", "Cara de reprovação", "Olhar de boca aberta", "Olhar convencido",
    "Olhar de desaprovação", "Olhar julgador", "Olhar de canto", "Olhar de canto irritado", "Olhar de canto desconfiado",
    "Bufada rabugenta", "Rabugento de biquinho", "Cara azeda", "Olhar sem graça", "Olhar de saco cheio",
    // fight
    "Aceno bravo", "Braços erguidos de fúria", "Braços erguidos enfurecido", "Gritando de braços erguidos", "Provocação zombeteira",
    "Punho determinado", "Pronto para brigar", "Posição de luta", "Investida furiosa", "Investida brava",
    "Dando chilique", "Birra", "Batendo o pé de raiva", "Enxotando alguém", "Agitando os braços de raiva",
    "Fúria total", "Além de furioso", "Pegando fogo",
  ],
  angel: [
    // angel-wings
    "Anjo feliz", "Anjo em paz", "Anjo simples", "Anjo de olhos brilhantes", "Anjinho doce",
    "Anjo feliz da vida", "Anjo meigo", "Anjo sorridente", "Anjo amoroso", "Anjo contente",
    "Anjo alegre", "Anjo sorridão", "Anjo sonhador", "Anjo sereno", "Anjo dando risadinha",
    "Anjo sonolento", "Anjo triste", "Anjo com flor", "Anjo tímido", "Anjo determinado",
    "Anjo calmo", "Sorriso suave de anjo", "Anjo alegrinho", "Anjo minúsculo", "Anjo cintilante",
    "Anjo brilhante", "Anjinho", "Anjo radiante", "Anjo de olhos arregalados", "Anjo descansando",
    "Anjo apaixonado", "Anjo sonhando",
    // flying-angel
    "Anjo voando", "Anjo planando", "Anjo voando com brilhos", "Anjo corado", "Anjo de bochechas rosadas",
    "Anjo de asas abertas", "Anjo batendo as asas", "Anjo pairando", "Anjo flutuando", "Anjo quicando",
    "Anjo bondoso", "Anjo caidinho", "Anjo à deriva", "Anjo de braços erguidos", "Anjo acenando",
    "Anjo cheio de amor", "Anjo voando aconchegado", "Anjo comemorando", "Anjo voando feliz", "Anjo voando empolgado",
    "Anjo voando com flor",
  ],
  blush: [
    // shy
    "Tímido e corado", "Contorcendo de vergonha", "Rubor envergonhado", "Escondendo o rosto", "Espiando entre os dedos",
    "Cobrindo o rosto", "Escondendo um sorriso", "Escondendo um sorrisão", "Risadinha envergonhada", "Escondendo-se timidamente",
    "Bochechas muito vermelhas", "Rosto vermelho", "Cobrindo os olhos", "Tímido demais para olhar", "Totalmente sem jeito",
    "Contorcendo-se de nervoso", "Careta de vergonha", "Vergonha constrangida", "Risada sem graça", "Rubor com flor",
    "Escondendo um sorriso tímido",
    // rosy
    "Sorriso sem jeito", "Carinha ômega rosada", "Sorrisão corado", "Rubor apaixonado", "Assobiando inocente",
    "Bochechas rosadas", "Sorriso corado", "Rubor caloroso", "Sorriso tímido", "Rubor suave",
    "Rubor de olhos apertados", "Bochechas rosadas suaves", "Rubor doce", "Bochechas brilhando", "Rubor em paz",
    "Rubor com risadinha", "Corado de felicidade", "Sorriso acanhado", "Espanto de bochechas rosadas", "Rubor de biquinho",
    "Sorrisão com rubor", "Rubor nostálgico", "Rubor de bochechas redondas", "Risada corada", "Rubor encantado",
    "Rubor apaixonadinho", "Rubor com gritinho", "Rubor satisfeito", "Felicidade tímida", "Rubor contente",
    "Carinha rosada",
  ],
  hug: [
    "Grande abraço caloroso", "Lá vem abraço", "Braços abertos", "Braços abertos empolgados", "Abraço tímido",
    "Braços bem abertos", "Abraço empolgado", "Abraço com brilhos", "Abraço Lenny", "Abraço sonolento",
    "Abraço feliz", "Abraço kawaii", "Consolando um amigo", "Animando alguém", "Abraço alegre",
    "Abraço amigo", "Abraço desconfiado", "Abraço delicado", "Braços abertos suaves", "Abraço com amor",
    "Abraço aconchegante", "Apertão com coração", "Abraço ansioso", "Abraço remexido",
  ],
  bear: [
    "Urso clássico", "Ursinho", "Urso feliz", "Urso de olho de lado", "Urso desconfiado",
    "Urso tímido", "Urso empolgado", "Urso determinado", "Urso sonolento", "Ursinho surpreso",
    "Urso calmo", "Ursinho de pelúcia", "Urso estendendo os braços", "Urso oferecendo abraço", "Urso de olhos brilhantes",
    "Urso mandando amor", "Urso reprovando", "Urso chorando", "Urso em paz", "Urso de bochechas rosadas",
    "Urso tranquilo", "Urso espantado", "Urso de nariz grande", "Abraço de urso", "Cara de urso",
    "Urso cobrindo os olhos", "Urso corado", "Carinha de urso tímido", "Urso sorridente",
  ],
  dog: [
    "Cachorrinho fofo", "Cachorrinho pequeno", "Cachorrinho triste", "Cachorrinho de olhos grandes", "Cachorrinho feliz",
    "Cachorro de orelhas caídas", "Cachorro sorridão", "Cachorro contente", "Cachorro alegre", "Cachorro feliz",
    "Cachorro sorridente", "Cachorro calmo", "Cachorro babando", "Cachorro de olhos brilhantes", "Cachorro radiante",
    "Cachorro de orelhas pontudas", "Filhote de orelhas pontudas", "Filhote feliz de orelhas pontudas", "Carinha de cachorro pequeno", "Filhote de orelhas caídas",
    "Cachorro peludinho",
  ],
  sleepy: [
    "Dormindo", "Roncando alto", "Sono profundo", "Pegando no sono", "Dormindo em paz",
    "Olhos fechados", "Tirando um cochilo", "Babando dormindo", "Dormindo de bruços", "Apagado",
    "Suspiro sonolento", "Exausto", "Baba de sono", "Descansando os olhos", "Cochilo aconchegante",
    "Cochilo convencido", "Bocejando", "Dormindo pesado", "Caindo no sono", "Sonequinha gostosa",
  ],
  surprised: [
    "Cara de choque", "Olhar arregalado", "Atordoado", "Maravilhado", "Sem palavras",
    "Olhos arregalados", "Surpresa confusa", "Olhar duas vezes", "Boquiaberto", "Assustado",
    "Piscada de surpresa", "Surpresa tonta", "Totalmente chocado", "Surpresa sem graça", "Surpresa sem reação",
    "Olhar vazio", "Uau!", "Horrorizado", "Suspiro de choque", "Grito de susto",
    "Pulo de susto", "Fugindo em choque", "Queixo caído", "Encarando em choque", "Choque nervoso",
    "Braços erguidos de susto",
  ],
  "table-flip": [
    "Virada de mesa clássica", "Virada de mesa brava", "Virada de mesa rabugenta", "Virada dupla de mesa", "Virada de mesa feliz",
    "Virada de mesa furiosa", "Virada reprovadora", "Virada de olhos arregalados", "Virada de mesa chocada", "Virada de fúria",
    "Virada dupla dando de ombros", "Virando uma pessoa", "Urso vira a mesa", "Virada de mesa casual", "Virada de mesa com brilhos",
    "Colocando a mesa no lugar", "Arrumando a mesa com calma", "Dando de ombros para a mesa", "Se acalmando", "Arrumação de mesa convencida",
    "Virar e arrumar",
  ],
  wave: [
    "Tchauzinho", "Oi simples", "Oi feliz", "Aceno amigável", "Oi alegre ^-^",
    "Acenando tchau", "Oi empolgado", "Oi casual", "Acenando oi", "Oi radiante",
    "Tchau alegre", "Aceno estrelado", "Aceno fofo", "Tchau-tchau", "Oi bem alto",
    "Grande aceno", "Aceno tímido", "Aceno suave", "Aceno ensolarado",
  ],
};

export const labels = labelsFromLists("pt", lists);
