// DRAFT: requires native-speaker and legal review before launch.
import type { LocaleBundle, MakerContent } from "@/types/i18n";

export const maker: MakerContent = {
  title: "Criador de kaomojis: faça sua própria carinha japonesa",
  description: "Crie seu próprio kaomoji escolhendo braços, bochechas, olhos, boca e enfeites. Prévia ao vivo, modo aleatório e cópia com um clique, incluindo cópia segura para Discord. Grátis.",
  h1: "Criador de kaomojis",
  intro: "Escolha as partes, veja sua carinha se formar e copie com um clique. Tudo funciona no seu navegador.",
  sections: [
    {
      heading: "Como funciona o Criador de kaomojis",
      list: [
        "Escolha cada parte nos menus: braços, bordas do rosto, bochechas, olhos, boca e um enfeite.",
        "A prévia atualiza na hora. Misture à vontade os lados esquerdo e direito para carinhas tortas ou piscando.",
        "Aperte Aleatório para uma carinha equilibrada e depois ajuste o que quiser.",
        "Aperte Copiar, ou Copiar para Discord se for colar no Discord.",
      ],
    },
    {
      heading: "Dicas para criar um bom kaomoji",
      list: [
        "Combine o humor entre as partes: olhos suaves (ᵔ, ◕) com bocas suaves (‿, ω), e olhos duros (ಠ, ò ó) com bocas duras (益, 皿).",
        "Use as bochechas para a emoção: ˶ ou 〃 para rubor, ; para lágrimas ou suor, ╬ para raiva.",
        "Os braços contam a ação: ヽ ﾉ é comemoração, ┐ ┌ é dar de ombros, ⊂ ⊃ é abraço e ʚ ɞ transforma qualquer carinha em anjo.",
        "Faça curto se for para um nome de usuário ou bio com limite de caracteres.",
      ],
      examples: ["ヽ(◕‿◕)ﾉ", "ʚ(˶ᵔωᵔ˶)ɞ", "┐(￣ー￣)┌"],
    },
    {
      heading: "Meu kaomoji vai aparecer em todo lugar?",
      paragraphs: [
        "Depende dos caracteres escolhidos. Os básicos como ( ) ^ _ o e ‿ aparecem quase em todo lugar. Partes de escritas menos comuns, como as asas ଘ ଓ ou as orelhas ૮ ა, podem virar quadradinhos em aparelhos antigos. Para máxima compatibilidade, prefira partes mais simples.",
      ],
    },
    {
      heading: "Procurando inspiração?",
      paragraphs: [
        "Veja carinhas prontas para ter ideias: os kaomojis [fofos](page:cute), [de gato](page:cat), [de coelho](page:bunny), [com raiva](page:angry), [dando de ombros](page:shrug) e [de anjo](page:angel) mostram como as partes se combinam. Ou volte para a [biblioteca completa de kaomojis](page:home).",
      ],
    },
  ],
  faqs: [
    { q: "O Criador de kaomojis é grátis?", a: "Sim. É grátis, não precisa de conta e funciona totalmente no seu navegador." },
    { q: "Vocês salvam os kaomojis que eu crio?", a: "Não. Sua criação só existe na aba do seu navegador e na sua área de transferência quando você copia. Nada é enviado para nós." },
    { q: "Posso usar os kaomojis que criei em qualquer lugar?", a: "Sim. São texto comum, então dá para colar onde aceitar texto. Alguns apps podem restringir caracteres incomuns." },
  ],
};

export const pages: LocaleBundle["pages"] = {
  about: {
    title: "Sobre o KaomojiZone",
    description: "O que é o KaomojiZone, como a biblioteca de kaomojis é montada e como o site cuida da sua privacidade.",
    h1: "Sobre o KaomojiZone",
    intro: "O KaomojiZone é uma biblioteca gratuita e simples de carinhas japonesas de texto (kaomojis) que você pode buscar, explorar e copiar com um clique.",
    sections: [
      {
        heading: "O que este site faz",
        paragraphs: [
          "Reunimos 828 kaomojis em 18 categorias, organizados por emoção, animal e ação, cada um com um rótulo descritivo curto. Você pode buscar, filtrar, copiar com um clique, copiar em formato seguro para Discord e criar suas próprias carinhas no [Criador de kaomojis](page:maker).",
          "O site está disponível em inglês, espanhol, indonésio, português do Brasil e vietnamita. Os kaomojis são os mesmos em todos os idiomas. Os rótulos, as palavras de busca e as explicações são traduzidos.",
        ],
      },
      {
        heading: "Como a biblioteca é montada",
        paragraphs: [
          "Kaomojis são expressões de texto comuns que circulam pela internet. Nossa biblioteca é uma seleção curada: cada kaomoji aparece uma única vez, fica na categoria em que melhor se encaixa e tem um rótulo único e fácil de ler. Verificamos que cada um é feito de caracteres Unicode padrão.",
          "Não publicamos rankings de popularidade nem contagens de “mais copiados”, porque não registramos o que os visitantes copiam.",
        ],
      },
      {
        heading: "Nossa abordagem de privacidade",
        paragraphs: [
          "A busca, a cópia e o Criador de kaomojis funcionam dentro do seu navegador. Não usamos análises, publicidade nem scripts de rastreamento. Se você permitir, seus kaomojis copiados recentemente e sua configuração de cópia segura para Discord ficam salvos no armazenamento do seu próprio navegador e em nenhum outro lugar. Veja a [Política de privacidade](page:privacy) para mais detalhes.",
        ],
      },
      {
        heading: "Limitações honestas",
        list: [
          "Alguns kaomojis usam caracteres que aparelhos antigos ou certos apps não conseguem exibir, e aparecem como quadradinhos.",
          "Leitores de tela costumam ler kaomojis símbolo por símbolo, por isso cada kaomoji deste site tem um rótulo falado.",
          "Plataformas como o Discord podem mudar a aparência dos kaomojis por causa da formatação de texto. Nossa cópia segura para Discord ajuda nisso.",
        ],
      },
      { heading: "Fale com a gente", paragraphs: ["Encontrou um kaomoji que aparece errado ou quer sugerir um? Visite a [página de contato](page:contact)."] },
    ],
  },
  contact: {
    title: "Contato do KaomojiZone",
    description: "Como entrar em contato com o KaomojiZone para sugerir kaomojis, relatar problemas de exibição ou tirar outras dúvidas.",
    h1: "Contato",
    intro: "Sugestões de novos kaomojis, relatos de carinhas que não aparecem direito e comentários em geral são bem-vindos.",
    sections: [
      {
        heading: "Informações úteis para incluir",
        list: [
          "Para problemas de exibição: o kaomoji, seu aparelho, sistema operacional e app, e o que aparece no lugar (quadradinhos, pontos de interrogação, partes faltando).",
          "Para sugestões: o kaomoji e em qual categoria você acha que ele se encaixa.",
        ],
      },
    ],
  },
  privacy: {
    title: "Política de privacidade",
    description: "Como o KaomojiZone trata seus dados: a busca, a cópia e a criação de kaomojis acontecem no seu navegador, sem análises nem publicidade.",
    h1: "Política de privacidade",
    intro: "Esta política explica quais informações o KaomojiZone trata e como. Resumindo: o que você busca, copia ou cria fica no seu navegador.",
    sections: [
      { heading: "Quem somos", paragraphs: ["O KaomojiZone (o “site”, “nós”) é um site que oferece kaomojis para copiar e colar. Você pode falar com a gente pela [página de contato](page:contact)."] },
      {
        heading: "Informações que não coletamos",
        paragraphs: [
          "Não exigimos conta e não pedimos seu nome, e-mail ou outros dados pessoais para usar o site. O que você digita na busca, os kaomojis que copia e as carinhas que cria no Criador de kaomojis são processados apenas no seu navegador. Nunca são enviados para nós nem armazenados em servidor.",
          "Não usamos serviços de análise, redes de publicidade, pixels de rastreamento de redes sociais nem fingerprinting.",
        ],
      },
      {
        heading: "Informações guardadas no seu navegador",
        paragraphs: ["O site usa o armazenamento local do seu navegador (não cookies) para o seguinte:"],
        list: [
          "Sua escolha sobre cookies e armazenamento (chave: kz-consent). É necessária para não perguntarmos em toda página. Fica guardada até você limpar os dados do navegador ou mudar sua escolha.",
          "Somente se você permitir Preferências: seus kaomojis copiados recentemente (chave: kz-recent, até 12 itens) e sua configuração de cópia segura para Discord (chave: kz-discord-safe).",
        ],
      },
      {
        heading: "Registros do servidor e da hospedagem",
        paragraphs: [
          "Como qualquer site, os servidores que entregam estas páginas recebem informações técnicas necessárias para enviá-las, como seu endereço IP, tipo de navegador e a página solicitada. Nosso provedor de hospedagem pode mantê-las em registros de curta duração por segurança e confiabilidade. Não usamos esses registros para identificar ou traçar perfis de visitantes. [Proprietário: informe aqui seu provedor de hospedagem e o período de retenção de registros antes do lançamento.]",
        ],
      },
      { heading: "Acesso à área de transferência", paragraphs: ["Quando você clica num kaomoji, o site grava esse kaomoji na sua área de transferência. O site nunca lê sua área de transferência."] },
      {
        heading: "Suas escolhas e direitos",
        list: [
          "Mude ou retire sua escolha de armazenamento a qualquer momento em “Configurações de cookies” no rodapé. Retirar Preferências apaga do seu navegador a lista de recentes e a configuração do Discord.",
          "Você pode apagar todos os dados do site nas configurações do navegador.",
          "Dependendo de onde você mora (por exemplo, pela LGPD no Brasil), você pode ter direito a acessar, corrigir ou excluir dados pessoais. Como não mantemos dados pessoais de visitantes, normalmente não há nada a recuperar, mas você pode nos contatar com qualquer pedido.",
        ],
      },
      { heading: "Crianças", paragraphs: ["O site é adequado para o público em geral e não coleta intencionalmente informações pessoais de ninguém, incluindo crianças."] },
      { heading: "Mudanças nesta política", paragraphs: ["Se adicionarmos um recurso que mude o tratamento de dados (por exemplo, um serviço de análise), atualizaremos esta política antes e, quando necessário, pediremos seu consentimento antes de ativá-lo."] },
    ],
  },
  terms: {
    title: "Termos e condições",
    description: "Os termos de uso do KaomojiZone, incluindo uso aceitável, propriedade intelectual e limitações.",
    h1: "Termos e condições",
    intro: "Ao usar o KaomojiZone, você concorda com estes termos. Leia, eles são curtos.",
    sections: [
      { heading: "Uso do site", paragraphs: ["O KaomojiZone é oferecido gratuitamente para uso pessoal e comercial. Você pode copiar kaomojis do site e usá-los em mensagens, posts, perfis, designs e outros conteúdos."] },
      {
        heading: "Uso aceitável",
        paragraphs: ["Você concorda em não usar o site ou seu conteúdo para:"],
        list: [
          "Enviar spam ou assediar, ameaçar ou se passar por outras pessoas.",
          "Burlar regras, filtros ou moderação de outras plataformas.",
          "Prejudicar o site, por exemplo sobrecarregando-o com requisições automatizadas ou tentando quebrar sua segurança.",
          "Republicar em massa a biblioteca, os rótulos ou os textos do site como se fossem seu próprio site ou produto.",
        ],
      },
      { heading: "Propriedade intelectual", paragraphs: ["Kaomojis individuais são expressões de texto comuns e não os reivindicamos como nossos. O design do site, os textos explicativos, os rótulos, as traduções e a seleção e organização da biblioteca são obra nossa e protegidos pela lei aplicável. Citar pequenos trechos com link para o site é bem-vindo."] },
      { heading: "Compatibilidade e disponibilidade", paragraphs: ["Kaomojis são feitos de caracteres Unicode que podem não aparecer em todos os aparelhos, fontes ou plataformas, e podem ser alterados pela formatação de uma plataforma. Fazemos o possível para manter o site disponível e correto, mas não garantimos que ele estará sempre disponível, livre de erros ou que todo kaomoji funcionará em todo lugar."] },
      { heading: "Sem garantias e limitação de responsabilidade", paragraphs: ["O site é fornecido “como está”, sem garantias de qualquer tipo. Na medida permitida por lei, não somos responsáveis por perdas indiretas ou consequenciais decorrentes do uso do site, incluindo como um kaomoji colado é exibido ou interpretado por outras pessoas. Algumas jurisdições não permitem certas limitações, então partes desta seção podem não se aplicar a você. [Proprietário: peça revisão desta seção para a sua jurisdição.]"] },
      { heading: "Plataformas de terceiros", paragraphs: ["Menções a Discord, Instagram, TikTok, X, WhatsApp e outros serviços são apenas explicativas. Não somos afiliados nem endossados por eles. O uso desses serviços é regido pelos termos de cada um."] },
      { heading: "Alterações", paragraphs: ["Podemos atualizar estes termos. A data no topo mostra a versão mais recente. Continuar usando o site significa aceitar os termos atualizados."] },
    ],
  },
  cookies: {
    title: "Política de cookies",
    description: "O KaomojiZone não usa cookies de rastreamento. Esta página explica o pouco armazenamento do navegador que usamos e como controlá-lo.",
    h1: "Política de cookies",
    intro: "O KaomojiZone não usa cookies de rastreamento nem de publicidade. Usamos o armazenamento local do seu navegador para poucas coisas, explicadas abaixo.",
    sections: [
      {
        heading: "O que guardamos",
        list: [
          "Necessários: kz-consent guarda sua escolha sobre cookies e armazenamento para o aviso não aparecer em toda página. Não pode ser desativado, porque sem ele não conseguiríamos lembrar sua escolha.",
          "Preferências (opcional, desativado por padrão): kz-recent guarda até 12 kaomojis copiados recentemente e kz-discord-safe guarda se a cópia segura para Discord está ativa.",
          "Análises: não usamos.",
          "Marketing: não usamos.",
        ],
      },
      { heading: "Cookies x armazenamento local", paragraphs: ["Cookies são enviados ao servidor a cada carregamento de página. O armazenamento local fica no seu navegador e nunca é enviado para nós. Usamos apenas armazenamento local. As leis de privacidade costumam tratar os dois da mesma forma, então pedimos seu consentimento antes de guardar qualquer coisa opcional."] },
      { heading: "Como mudar sua escolha", paragraphs: ["Use “Configurações de cookies” no rodapé de qualquer página para mudar sua escolha. Se você desativar Preferências, a lista de recentes e a configuração do Discord são apagadas na hora. Você também pode limpar os dados do site nas configurações do navegador quando quiser."] },
      { heading: "Se adicionarmos serviços no futuro", paragraphs: ["Se um dia adicionarmos análises ou outros serviços opcionais, eles serão listados aqui e ficarão desativados até você aceitar."] },
    ],
  },
  disclaimer: {
    title: "Aviso legal",
    description: "Informações importantes sobre exibição, compatibilidade, acessibilidade e formatação dos kaomojis no KaomojiZone.",
    h1: "Aviso legal",
    intro: "Tenha em mente as seguintes limitações ao usar kaomojis deste site.",
    sections: [
      { heading: "Exibição e compatibilidade", paragraphs: ["Kaomojis são feitos de caracteres Unicode de várias escritas e conjuntos de símbolos. Se um kaomoji aparece certo depende das fontes instaladas no aparelho que o exibe e do app usado. Alguns kaomojis podem aparecer como quadradinhos, pontos de interrogação ou com acentos fora do lugar em certos aparelhos."] },
      { heading: "Formatação das plataformas", paragraphs: ["Algumas plataformas alteram o texto automaticamente. Por exemplo, o Discord interpreta \\ _ * ~ ` | como caracteres de formatação. Nossa cópia segura para Discord escapa esses caracteres, mas outras plataformas podem aplicar suas próprias regras, limites de caracteres ou filtros."] },
      { heading: "Acessibilidade", paragraphs: ["Leitores de tela podem ler kaomojis símbolo por símbolo ou pulá-los. Não dependa só de kaomojis para comunicar informações importantes."] },
      { heading: "Significados", paragraphs: ["Os rótulos e explicações deste site descrevem como os kaomojis costumam ser usados. Os significados podem variar entre comunidades e contextos, então quem lê pode interpretar diferente do que você quis dizer."] },
      { heading: "Sem afiliação", paragraphs: ["O KaomojiZone é um site independente. Não é afiliado, patrocinado nem endossado por Discord, Instagram, TikTok, X, WhatsApp, Messenger, Zalo, o Consórcio Unicode ou qualquer outra empresa ou organização mencionada neste site. Todas as marcas pertencem aos seus donos."] },
    ],
  },
  faq: {
    title: "Perguntas frequentes sobre kaomojis",
    description: "Respostas às perguntas mais comuns sobre kaomojis: o que são, como digitar e copiar, por que aparecem quadradinhos e como usar no Discord.",
    h1: "Perguntas frequentes sobre kaomojis",
    intro: "Respostas rápidas para o que mais perguntam sobre kaomojis e este site.",
    groups: [
      {
        heading: "Sobre kaomojis",
        faqs: [
          { q: "O que é um kaomoji?", a: "Um kaomoji é uma carinha feita com caracteres de texto e lida de frente, como (◕‿◕) ou (╥﹏╥). A palavra é japonesa: kao significa rosto e moji, caractere." },
          { q: "Como se pronuncia kaomoji?", a: "Mais ou menos “ka-ô-mô-dji”, com quatro sílabas curtas." },
          { q: "Kaomojis são a mesma coisa que emoticons?", a: "Kaomojis são um tipo de emoticon. Emoticons ocidentais como :) são lidos de lado, enquanto kaomojis são lidos de frente e costumam usar uma variedade maior de caracteres." },
          { q: "Por que kaomojis usam caracteres de tantos idiomas?", a: "Quem cria kaomojis escolhe os caracteres pelo formato, não pelo significado. ಠ (canarês) faz um olho severo, ω (grego) uma boca de gato e ฅ (tailandês) uma patinha." },
        ],
      },
      {
        heading: "Copiar e digitar",
        faqs: [
          { q: "Como copio um kaomoji deste site?", a: "Toque ou clique nele. Ele é copiado na hora e uma mensagem “Copiado” confirma. Pelo teclado, use Tab para chegar a um kaomoji e depois Enter ou Espaço." },
          { q: "A cópia não funciona. O que faço?", a: "Alguns navegadores bloqueiam o acesso à área de transferência em certos modos. Se a cópia automática falhar, selecione o kaomoji manualmente e copie com o comando normal do seu aparelho." },
          { q: "Dá para digitar kaomojis sem copiar?", a: "Sim. Configure atalhos de substituição de texto no celular ou computador, use as sugestões de kaomojis de um teclado japonês ou, no Windows, aperte tecla Windows + . (ponto) e abra a aba de kaomojis." },
        ],
      },
      {
        heading: "Problemas de exibição",
        faqs: [
          { q: "Por que vejo quadradinhos em vez de um kaomoji?", a: "Seu aparelho não tem uma fonte com um ou mais dos caracteres. Atualizar o aparelho ou o app pode ajudar, ou escolha um kaomoji com caracteres mais comuns." },
          { q: "Para mim aparece normal, mas meu amigo vê quadradinhos. Por quê?", a: "Cada aparelho desenha o texto com suas próprias fontes. O seu tem os caracteres necessários e o do seu amigo não." },
          { q: "Por que os kaomojis ficam um pouco diferentes em cada app?", a: "As fontes mudam, então a largura e o formato dos caracteres variam um pouco. Alguns símbolos, como ❤, também podem aparecer como emojis coloridos em certos apps." },
        ],
      },
      {
        heading: "Discord e outras plataformas",
        faqs: [
          { q: "O que faz a cópia segura para Discord?", a: "Ela adiciona uma barra invertida antes de \\ _ * ~ ` e |, que o Discord trataria como formatação. Assim o kaomoji aparece exatamente como deveria." },
          { q: "Devo deixar a cópia segura para Discord sempre ativa?", a: "Só quando for colar no Discord ou em outros apps baseados em Markdown. Na maioria dos outros apps as barras extras apareceriam." },
          { q: "Posso usar kaomojis em nomes de usuário?", a: "Muitas vezes sim, mas várias plataformas limitam nomes de usuário a letras e números ou restringem caracteres especiais. Nomes de exibição costumam permitir mais que nomes de usuário." },
        ],
      },
    ],
  },
};
