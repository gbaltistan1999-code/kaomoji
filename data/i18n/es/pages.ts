// DRAFT: requires native-speaker and legal review before launch.
import type { LocaleBundle, MakerContent } from "@/types/i18n";

export const maker: MakerContent = {
  title: "Creador de kaomojis: haz tu propia carita japonesa",
  description: "Crea tu propio kaomoji eligiendo brazos, mejillas, ojos, boca y decoraciones. Vista previa en vivo, modo al azar y copia con un clic, incluida la copia segura para Discord. Gratis.",
  h1: "Creador de kaomojis",
  intro: "Elige las partes, mira cómo se arma tu carita y cópiala con un clic. Todo funciona en tu navegador.",
  sections: [
    {
      heading: "Cómo funciona el Creador de kaomojis",
      list: [
        "Elige cada parte en los menús: brazos, bordes de la cara, mejillas, ojos, boca y una decoración.",
        "La vista previa se actualiza al instante. Combina libremente el lado izquierdo y el derecho para caritas chuecas o guiñando.",
        "Presiona Al azar para obtener una carita equilibrada y luego ajusta lo que quieras.",
        "Presiona Copiar, o Copiar para Discord si la vas a pegar en Discord.",
      ],
    },
    {
      heading: "Consejos para crear un buen kaomoji",
      list: [
        "Combina el ánimo entre las partes: ojos suaves (ᵔ, ◕) con bocas suaves (‿, ω), y ojos duros (ಠ, ò ó) con bocas duras (益, 皿).",
        "Usa las mejillas para la emoción: ˶ o 〃 para rubor, ; para lágrimas o sudor, ╬ para enojo.",
        "Los brazos cuentan la acción: ヽ ﾉ es festejo, ┐ ┌ es encogerse de hombros, ⊂ ⊃ es un abrazo y ʚ ɞ convierte cualquier carita en ángel.",
        "Hazlo corto si va en un nombre de usuario o biografía con límite de caracteres.",
      ],
      examples: ["ヽ(◕‿◕)ﾉ", "ʚ(˶ᵔωᵔ˶)ɞ", "┐(￣ー￣)┌"],
    },
    {
      heading: "¿Mi kaomoji se verá en todas partes?",
      paragraphs: [
        "Depende de los caracteres que elijas. Los básicos como ( ) ^ _ o y ‿ se ven casi en todas partes. Las partes tomadas de escrituras menos comunes, como las alas ଘ ଓ o las orejas ૮ ა, pueden verse como cuadritos en dispositivos viejos. Para máxima compatibilidad, usa partes más simples.",
      ],
    },
    {
      heading: "¿Buscas inspiración?",
      paragraphs: [
        "Mira caritas ya hechas para inspirarte: los kaomojis [tiernos](page:cute), [de gatos](page:cat), [de conejos](page:bunny), [enojados](page:angry), [encogiendo hombros](page:shrug) y [de ángel](page:angel) muestran cómo se combinan las partes. O vuelve a la [biblioteca completa de kaomojis](page:home).",
      ],
    },
  ],
  faqs: [
    { q: "¿El Creador de kaomojis es gratis?", a: "Sí. Es gratis, no necesita cuenta y funciona por completo en tu navegador." },
    { q: "¿Guardan los kaomojis que creo?", a: "No. Tu creación solo existe en la pestaña de tu navegador y en tu portapapeles cuando la copias. No se nos envía nada." },
    { q: "¿Puedo usar los kaomojis que creo en cualquier lugar?", a: "Sí. Son texto común, así que puedes pegarlos donde se acepte texto. Algunas apps pueden restringir caracteres poco comunes." },
  ],
};

export const pages: LocaleBundle["pages"] = {
  about: {
    title: "Acerca de KaomojiZone",
    description: "Qué es KaomojiZone, cómo se arma la biblioteca de kaomojis y cómo cuida tu privacidad el sitio.",
    h1: "Acerca de KaomojiZone",
    intro: "KaomojiZone es una biblioteca gratuita y sencilla de caritas japonesas de texto (kaomojis) que puedes buscar, explorar y copiar con un clic.",
    sections: [
      {
        heading: "Qué hace este sitio",
        paragraphs: [
          "Reunimos 828 kaomojis en 18 categorías, ordenados por emoción, animal y acción, cada uno con una etiqueta descriptiva corta. Puedes buscar, filtrar, copiar con un clic, copiar en formato seguro para Discord y crear tus propias caritas en el [Creador de kaomojis](page:maker).",
          "El sitio está disponible en inglés, español, indonesio, portugués de Brasil y vietnamita. Los kaomojis son los mismos en todos los idiomas. Las etiquetas, las palabras de búsqueda y las explicaciones están traducidas.",
        ],
      },
      {
        heading: "Cómo se arma la biblioteca",
        paragraphs: [
          "Los kaomojis son expresiones de texto comunes que circulan por todo internet. Nuestra biblioteca es una selección curada: cada kaomoji aparece una sola vez, está en la categoría donde mejor encaja y tiene una etiqueta única y fácil de leer. Verificamos que cada uno esté hecho de caracteres Unicode estándar.",
          "No publicamos rankings de popularidad ni conteos de “los más copiados”, porque no registramos lo que copian los visitantes.",
        ],
      },
      {
        heading: "Nuestra forma de cuidar tu privacidad",
        paragraphs: [
          "La búsqueda, la copia y el Creador de kaomojis funcionan dentro de tu navegador. No usamos analíticas, publicidad ni scripts de rastreo. Si lo permites, tus kaomojis copiados recientemente y tu ajuste de copia segura para Discord se recuerdan en el almacenamiento de tu propio navegador y en ningún otro lugar. Consulta la [Política de privacidad](page:privacy) para más detalles.",
        ],
      },
      {
        heading: "Limitaciones honestas",
        list: [
          "Algunos kaomojis usan caracteres que los dispositivos viejos o ciertas apps no pueden mostrar, y se ven como cuadritos.",
          "Los lectores de pantalla suelen leer los kaomojis símbolo por símbolo, por eso cada kaomoji de este sitio tiene una etiqueta hablada.",
          "Plataformas como Discord pueden cambiar cómo se ven los kaomojis por el formato de texto. Nuestra copia segura para Discord ayuda con eso.",
        ],
      },
      {
        heading: "Contacto",
        paragraphs: ["¿Encontraste un kaomoji que se ve mal o quieres sugerir uno? Visita la [página de contacto](page:contact)."],
      },
    ],
  },
  contact: {
    title: "Contacto de KaomojiZone",
    description: "Cómo contactar a KaomojiZone con sugerencias de kaomojis, problemas de visualización u otras preguntas.",
    h1: "Contacto",
    intro: "Son bienvenidas las sugerencias de nuevos kaomojis, los reportes de caritas que no se ven bien y cualquier comentario.",
    sections: [
      {
        heading: "Datos útiles para incluir",
        list: [
          "Para problemas de visualización: el kaomoji, tu dispositivo, sistema operativo y app, y lo que ves en su lugar (cuadritos, signos de interrogación, partes faltantes).",
          "Para sugerencias: el kaomoji y en qué categoría crees que encaja.",
        ],
      },
    ],
  },
  privacy: {
    title: "Política de privacidad",
    description: "Cómo maneja KaomojiZone tus datos: la búsqueda, la copia y la creación de kaomojis ocurren en tu navegador, sin analíticas ni publicidad.",
    h1: "Política de privacidad",
    intro: "Esta política explica qué información maneja KaomojiZone y cómo. En resumen: lo que buscas, copias o creas se queda en tu navegador.",
    sections: [
      { heading: "Quiénes somos", paragraphs: ["KaomojiZone (el “sitio”, “nosotros”) es un sitio web que ofrece kaomojis para copiar y pegar. Puedes contactarnos desde la [página de contacto](page:contact)."] },
      {
        heading: "Información que no recopilamos",
        paragraphs: [
          "No pedimos cuentas, ni tu nombre, correo u otros datos personales para usar el sitio. Lo que escribes en el buscador, los kaomojis que copias y las caritas que creas en el Creador de kaomojis se procesan solo en tu navegador. Nunca se nos envían ni se guardan en un servidor.",
          "No usamos servicios de analíticas, redes publicitarias, píxeles de rastreo de redes sociales ni huellas digitales del navegador.",
        ],
      },
      {
        heading: "Información guardada en tu navegador",
        paragraphs: ["El sitio usa el almacenamiento local de tu navegador (no cookies) para lo siguiente:"],
        list: [
          "Tu elección sobre cookies y almacenamiento (clave: kz-consent). Es necesaria para no preguntarte en cada página. Se mantiene hasta que borres los datos del navegador o cambies tu elección.",
          "Solo si permites Preferencias: tus kaomojis copiados recientemente (clave: kz-recent, hasta 12 elementos) y tu ajuste de copia segura para Discord (clave: kz-discord-safe).",
        ],
      },
      {
        heading: "Registros del servidor y del alojamiento",
        paragraphs: [
          "Como cualquier sitio web, los servidores que entregan estas páginas reciben información técnica necesaria para enviártelas, como tu dirección IP, tipo de navegador y la página solicitada. Nuestro proveedor de alojamiento puede guardarla en registros de corta duración por seguridad y confiabilidad. No usamos esos registros para identificar ni perfilar visitantes. [Propietario: indica aquí tu proveedor de alojamiento y su período de retención de registros antes del lanzamiento.]",
        ],
      },
      { heading: "Acceso al portapapeles", paragraphs: ["Cuando haces clic en un kaomoji, el sitio escribe ese kaomoji en tu portapapeles. El sitio nunca lee tu portapapeles."] },
      {
        heading: "Tus opciones y derechos",
        list: [
          "Cambia o retira tu elección de almacenamiento en cualquier momento con “Configuración de cookies” en el pie de página. Al retirar Preferencias se borran de tu navegador la lista de recientes y el ajuste de Discord.",
          "Puedes borrar todos los datos del sitio desde la configuración de tu navegador.",
          "Según dónde vivas (por ejemplo, bajo leyes de protección de datos de tu país), puedes tener derecho a acceder, corregir o eliminar datos personales. Como no guardamos datos personales de los visitantes, normalmente no hay nada que recuperar, pero puedes contactarnos con cualquier solicitud.",
        ],
      },
      { heading: "Menores de edad", paragraphs: ["El sitio es apto para todo público y no recopila a sabiendas información personal de nadie, incluidos menores."] },
      { heading: "Cambios a esta política", paragraphs: ["Si agregamos una función que cambie el manejo de datos (por ejemplo, un servicio de analíticas), primero actualizaremos esta política y, cuando sea necesario, pediremos tu consentimiento antes de activarla."] },
    ],
  },
  terms: {
    title: "Términos y condiciones",
    description: "Los términos para usar KaomojiZone, incluido el uso aceptable, la propiedad intelectual y las limitaciones.",
    h1: "Términos y condiciones",
    intro: "Al usar KaomojiZone aceptas estos términos. Léelos, son cortos.",
    sections: [
      { heading: "Uso del sitio", paragraphs: ["KaomojiZone se ofrece gratis para uso personal y comercial. Puedes copiar kaomojis del sitio y usarlos en tus mensajes, publicaciones, perfiles, diseños y otros contenidos."] },
      {
        heading: "Uso aceptable",
        paragraphs: ["Te comprometes a no usar el sitio ni su contenido para:"],
        list: [
          "Enviar spam o acosar, amenazar o suplantar a otras personas.",
          "Evadir las reglas, filtros o moderación de otras plataformas.",
          "Afectar el funcionamiento del sitio, por ejemplo saturándolo con solicitudes automatizadas o intentando vulnerar su seguridad.",
          "Republicar en masa la biblioteca, las etiquetas o los textos del sitio como si fueran tu propio sitio o producto.",
        ],
      },
      { heading: "Propiedad intelectual", paragraphs: ["Los kaomojis individuales son expresiones de texto comunes y no los reclamamos como propios. El diseño del sitio, los textos explicativos, las etiquetas, las traducciones y la selección y organización de la biblioteca son obra nuestra y están protegidos por la ley aplicable. Puedes citar partes pequeñas con un enlace al sitio."] },
      { heading: "Compatibilidad y disponibilidad", paragraphs: ["Los kaomojis están hechos de caracteres Unicode que quizá no se vean en todos los dispositivos, fuentes o plataformas, y pueden alterarse por el formato de una plataforma. Hacemos lo posible por mantener el sitio disponible y correcto, pero no garantizamos que siempre esté disponible, libre de errores ni que cada kaomoji funcione en todas partes."] },
      { heading: "Sin garantías y limitación de responsabilidad", paragraphs: ["El sitio se ofrece “tal cual”, sin garantías de ningún tipo. En la medida en que lo permita la ley, no somos responsables de pérdidas indirectas o consecuentes derivadas del uso del sitio, incluida la forma en que otras personas vean o interpreten un kaomoji pegado. Algunas jurisdicciones no permiten ciertas limitaciones, por lo que partes de esta sección podrían no aplicarse a ti. [Propietario: haz revisar esta sección para tu jurisdicción.]"] },
      { heading: "Plataformas de terceros", paragraphs: ["Las menciones de Discord, Instagram, TikTok, X, WhatsApp y otros servicios son solo explicativas. No estamos afiliados ni respaldados por ellos. El uso de esos servicios se rige por sus propios términos."] },
      { heading: "Cambios", paragraphs: ["Podemos actualizar estos términos. La fecha de arriba indica la versión más reciente. Seguir usando el sitio significa que aceptas los términos actualizados."] },
    ],
  },
  cookies: {
    title: "Política de cookies",
    description: "KaomojiZone no usa cookies de rastreo. Esta página explica el poco almacenamiento del navegador que usamos y cómo controlarlo.",
    h1: "Política de cookies",
    intro: "KaomojiZone no usa cookies de rastreo ni de publicidad. Usamos el almacenamiento local de tu navegador para unas pocas cosas, explicadas abajo.",
    sections: [
      {
        heading: "Qué guardamos",
        list: [
          "Necesarias: kz-consent guarda tu elección sobre cookies y almacenamiento para que el aviso no aparezca en cada página. No se puede desactivar, porque sin ella no podríamos recordar tu elección.",
          "Preferencias (opcional, desactivada por defecto): kz-recent guarda hasta 12 kaomojis copiados recientemente y kz-discord-safe guarda si la copia segura para Discord está activa.",
          "Analíticas: no se usan.",
          "Marketing: no se usan.",
        ],
      },
      { heading: "Cookies vs. almacenamiento local", paragraphs: ["Las cookies se envían al servidor con cada solicitud de página. El almacenamiento local se queda en tu navegador y nunca se nos envía. Nosotros solo usamos almacenamiento local. Las leyes de privacidad suelen tratar ambos de la misma forma, así que pedimos tu consentimiento antes de guardar cualquier cosa opcional."] },
      { heading: "Cómo cambiar tu elección", paragraphs: ["Usa “Configuración de cookies” en el pie de cualquier página para cambiar tu elección. Si desactivas Preferencias, la lista de recientes y el ajuste de Discord se borran de inmediato. También puedes borrar los datos del sitio desde la configuración de tu navegador cuando quieras."] },
      { heading: "Si agregamos servicios en el futuro", paragraphs: ["Si algún día agregamos analíticas u otros servicios opcionales, los listaremos aquí y permanecerán desactivados hasta que los aceptes."] },
    ],
  },
  disclaimer: {
    title: "Aviso legal",
    description: "Información importante sobre la visualización, compatibilidad, accesibilidad y formato de los kaomojis en KaomojiZone.",
    h1: "Aviso legal",
    intro: "Ten en cuenta las siguientes limitaciones al usar los kaomojis de este sitio.",
    sections: [
      { heading: "Visualización y compatibilidad", paragraphs: ["Los kaomojis están hechos de caracteres Unicode tomados de muchas escrituras y conjuntos de símbolos. Que un kaomoji se vea bien depende de las fuentes instaladas en el dispositivo que lo muestra y de la app que se usa. Algunos kaomojis pueden verse como cuadritos, signos de interrogación o con acentos fuera de lugar en ciertos dispositivos."] },
      { heading: "Formato de las plataformas", paragraphs: ["Algunas plataformas modifican el texto automáticamente. Por ejemplo, Discord interpreta \\ _ * ~ ` | como caracteres de formato. Nuestra copia segura para Discord escapa esos caracteres, pero otras plataformas pueden aplicar sus propias reglas, límites de caracteres o filtros."] },
      { heading: "Accesibilidad", paragraphs: ["Los lectores de pantalla pueden leer los kaomojis símbolo por símbolo o saltarlos. No dependas solo de kaomojis para comunicar información importante."] },
      { heading: "Significados", paragraphs: ["Las etiquetas y explicaciones de este sitio describen cómo se usan comúnmente los kaomojis. Los significados pueden variar entre comunidades y contextos, así que quien lo lee puede interpretarlo distinto de lo que querías decir."] },
      { heading: "Sin afiliación", paragraphs: ["KaomojiZone es un sitio independiente. No está afiliado, patrocinado ni respaldado por Discord, Instagram, TikTok, X, WhatsApp, Messenger, Zalo, el Consorcio Unicode ni ninguna otra empresa u organización mencionada en este sitio. Todas las marcas pertenecen a sus dueños."] },
    ],
  },
  faq: {
    title: "Preguntas frecuentes sobre kaomojis",
    description: "Respuestas a las preguntas más comunes sobre kaomojis: qué son, cómo escribirlos y copiarlos, por qué se ven cuadritos y cómo usarlos en Discord.",
    h1: "Preguntas frecuentes sobre kaomojis",
    intro: "Respuestas rápidas a lo que más se pregunta sobre los kaomojis y este sitio.",
    groups: [
      {
        heading: "Sobre los kaomojis",
        faqs: [
          { q: "¿Qué es un kaomoji?", a: "Un kaomoji es una carita hecha con caracteres de texto que se lee de frente, como (◕‿◕) o (╥﹏╥). La palabra es japonesa: kao significa cara y moji, carácter." },
          { q: "¿Cómo se pronuncia kaomoji?", a: "Más o menos “ka-o-mo-yi”, con la j japonesa que suena como “ll” suave o “dy”: ka-o-mo-dyi." },
          { q: "¿Los kaomojis son lo mismo que los emoticonos?", a: "Los kaomojis son un tipo de emoticono. Los emoticonos occidentales como :) se leen de lado, mientras que los kaomojis se leen de frente y usan una variedad más amplia de caracteres." },
          { q: "¿Por qué los kaomojis usan caracteres de tantos idiomas?", a: "Quienes los crean eligen los caracteres por su forma, no por su significado. ಠ (canarés) hace un ojo severo, ω (griego) una boca de gato y ฅ (tailandés) una patita." },
        ],
      },
      {
        heading: "Copiar y escribir",
        faqs: [
          { q: "¿Cómo copio un kaomoji de este sitio?", a: "Tócalo o haz clic. Se copia al instante y un mensaje de “Copiado” lo confirma. Con teclado, usa Tab para llegar a un kaomoji y luego Enter o Espacio." },
          { q: "No me deja copiar. ¿Qué hago?", a: "Algunos navegadores bloquean el acceso al portapapeles en ciertos modos. Si la copia automática falla, selecciona el kaomoji a mano y cópialo con el comando normal de tu dispositivo." },
          { q: "¿Puedo escribir kaomojis sin copiarlos?", a: "Sí. Configura atajos de reemplazo de texto en tu celular o computadora, usa las sugerencias de kaomojis de un teclado japonés, o en Windows presiona tecla Windows + . (punto) y abre la pestaña de kaomojis." },
        ],
      },
      {
        heading: "Problemas de visualización",
        faqs: [
          { q: "¿Por qué veo cuadritos en lugar de un kaomoji?", a: "Tu dispositivo no tiene una fuente que incluya uno o más de sus caracteres. Actualizar el dispositivo o la app puede ayudar, o elige un kaomoji con caracteres más comunes." },
          { q: "Yo lo veo bien, pero mi amigo ve cuadritos. ¿Por qué?", a: "Cada dispositivo dibuja el texto con sus propias fuentes. El tuyo tiene los caracteres necesarios y el de tu amigo no." },
          { q: "¿Por qué los kaomojis se ven un poco distintos en cada app?", a: "Las fuentes cambian, así que el ancho y la forma de los caracteres varían un poco. Algunos símbolos, como ❤, también pueden mostrarse como emojis de color en ciertas apps." },
        ],
      },
      {
        heading: "Discord y otras plataformas",
        faqs: [
          { q: "¿Qué hace la copia segura para Discord?", a: "Agrega una barra invertida antes de \\ _ * ~ ` y |, que Discord de otro modo trataría como formato. Así el kaomoji se ve exactamente como debe." },
          { q: "¿Debo dejar activada la copia segura para Discord siempre?", a: "Solo al pegar en Discord u otras apps basadas en Markdown. En la mayoría de las demás apps las barras extra se verían." },
          { q: "¿Puedo usar kaomojis en nombres de usuario?", a: "A menudo sí, pero muchas plataformas limitan los nombres de usuario a letras y números o restringen los caracteres especiales. Los nombres visibles suelen permitir más que los nombres de usuario." },
        ],
      },
    ],
  },
};
