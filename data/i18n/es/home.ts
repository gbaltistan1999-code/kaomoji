// DRAFT: requires native-speaker review before launch.
import type { HomeContent } from "@/types/i18n";

export const home: HomeContent = {
  title: "Kaomojis para copiar y pegar: más de 800 caritas japonesas",
  description:
    "Copia y pega más de 800 kaomojis con un clic: caritas japonesas tiernas, felices, tristes, de gatos, de corazón y más, ordenadas por emoción y animal. Gratis y sin registro.",
  h1: "Kaomojis para copiar y pegar",
  intro: "828 caritas japonesas de texto, ordenadas por emoción y animal. Busca, toca y pega donde quieras.",
  sections: [
    {
      heading: "¿Qué son los kaomojis?",
      paragraphs: [
        "Los kaomojis (顔文字) son caritas hechas con caracteres de texto. La palabra japonesa une kao (cara) y moji (carácter). A diferencia de los emoticonos occidentales como :-), que se leen inclinando la cabeza, los kaomojis se leen de frente: ojos, boca, mejillas y brazos te miran directamente, como en (◕‿◕).",
        "Como son solo texto, puedes pegar kaomojis casi en cualquier lugar que acepte texto: WhatsApp, comentarios, biografías, nombres de usuario, chats de juegos y documentos. Usan caracteres de muchos sistemas de escritura (kana japonés, cirílico, canarés, tailandés, griego y coreano) además de símbolos, caracteres de dibujo de cajas y marcas combinables. Esa mezcla es lo que los hace tan expresivos.",
      ],
    },
    {
      heading: "Kaomojis vs. emojis vs. emoticonos occidentales",
      paragraphs: ["Los tres expresan emociones, pero se construyen de forma distinta:"],
      list: [
        "Emoticonos occidentales, como :) o ;-P: caritas cortas y de lado, escritas con caracteres básicos del teclado.",
        "Kaomojis, como (╥﹏╥) o ヽ(・∀・)ﾉ: caritas de frente hechas con muchos caracteres de texto distintos. Pueden incluir brazos, acciones y objetos.",
        "Emojis, como 😊: imágenes individuales. Cada uno tiene su propio código Unicode y cada plataforma lo dibuja con su propio estilo.",
      ],
      examples: ["(｡◕‿◕｡)", "(╥﹏╥)", "¯\\_(ツ)_/¯"],
    },
    {
      heading: "Cómo usar esta biblioteca de kaomojis",
      list: [
        "Busca por emoción, animal o acción, por ejemplo: gato, llorar, amor, abrazo u hombros.",
        "O explora: elige un grupo (Emociones, Tiernos, Amor, Animales, Acciones, Brillos) y luego una categoría.",
        "Toca o haz clic en cualquier kaomoji. Se copia al instante y aparece un mensaje de “Copiado”.",
        "Pégalo donde quieras con Ctrl+V, Cmd+V, o en el celular manteniendo presionado y eligiendo Pegar.",
      ],
      paragraphs: [
        "Cada categoría también tiene su propia página con la lista completa, dividida en secciones. Por ejemplo, la [página de kaomojis tristes](page:sad) separa las caritas llorando de las solitarias y decepcionadas.",
      ],
    },
    {
      heading: "Cómo escribir kaomojis en el celular o la computadora",
      paragraphs: ["Copiar y pegar es lo más fácil, y para eso está este sitio. Si siempre usas las mismas caritas, prueba alguna de estas opciones:"],
      list: [
        "Atajos de reemplazo de texto: iPhone y iPad (Configuración › General › Teclado › Reemplazo de texto), Mac (Configuración del Sistema › Teclado › Reemplazos de texto) y muchos teclados Android como Gboard (diccionario personal) permiten guardar una frase. Por ejemplo, al escribir “hombross” puede aparecer ¯\\_(ツ)_/¯.",
        "Teclados japoneses: muchos métodos de entrada japoneses (IME) sugieren kaomojis al escribir palabras como かお (kao). La lista depende de tu teclado y sistema operativo.",
        "Panel de emojis de Windows: en Windows 10 y 11, presiona tecla Windows + . (punto) y abre la pestaña de kaomojis para ver una pequeña selección integrada.",
      ],
    },
    {
      heading: "Dónde funcionan los kaomojis y dónde quizá no",
      paragraphs: [
        "Los kaomojis suelen pegarse sin problema en WhatsApp, Discord, descripciones y biografías de Instagram, comentarios de TikTok, publicaciones en X, Messenger, SMS, correo y la mayoría de los chats de juegos, porque son texto Unicode común.",
        "Algunos lugares son más estrictos. Los campos de nombre de usuario a menudo solo aceptan letras y números, algunos juegos filtran caracteres poco comunes y los límites de caracteres pueden cortar kaomojis largos como los de voltear la mesa. Si te rechazan uno, prueba con uno más simple hecho de caracteres comunes, como (^_^) o (T_T).",
      ],
    },
    {
      heading: "¿Por qué algunos kaomojis se ven como cuadritos o signos de interrogación?",
      paragraphs: [
        "Cada carácter de un kaomoji debe existir en alguna fuente del dispositivo que lo muestra. Si ninguna fuente instalada tiene ese carácter (glifo), verás un cuadrito vacío (llamado “tofu”), un signo de interrogación o un espacio. El sistema primero busca en otras fuentes (esto se llama sustitución de fuentes), pero los celulares viejos, las smart TV y algunas apps tienen pocas fuentes.",
        "Los caracteres de escrituras menos comunes, como ଘ, ʚ, ꒰ o ᓚᘏᗢ, son los que más suelen faltar. Las marcas combinables, como los acentos en •̀ᴗ•́, también pueden verse desplazadas en algunas fuentes. Si tu amigo ve cuadritos, elige un kaomoji con caracteres más comunes o consulta la [explicación del Consorcio Unicode sobre fuentes y visualización](https://www.unicode.org/faq/font_keyboard.html) (en inglés).",
      ],
    },
    {
      heading: "El problema de Discord: por qué tu carita pierde un brazo",
      paragraphs: [
        "Discord usa formato Markdown. Una barra invertida \\ significa “muestra el siguiente carácter tal cual”, el texto entre _guiones bajos_ o *asteriscos* se vuelve cursiva o negrita, las ~~virgulillas~~ tachan el texto, los `acentos graves` crean código y las ||barras verticales|| ocultan spoilers. Por eso, cuando pegas ¯\\_(ツ)_/¯, Discord toma la barra invertida como escape, el guion bajo desaparece y la carita pierde el brazo izquierdo.",
        "Activa “Copia segura para Discord” arriba de la biblioteca. Agrega una barra invertida antes de cada uno de esos caracteres para que el kaomoji se vea exactamente como debe. Déjala desactivada para otras apps, porque ahí las barras extra sí se verían.",
      ],
      examples: ["¯\\_(ツ)_/¯"],
    },
    {
      heading: "Kaomojis y accesibilidad",
      paragraphs: [
        "Los lectores de pantalla suelen leer los kaomojis carácter por carácter: ヽ(・∀・)ﾉ puede anunciarse como una serie de nombres de símbolos, o saltarse. Para quienes usan tecnologías de asistencia, un kaomoji largo puede interrumpir el mensaje.",
        "Usa los kaomojis para dar estilo, no para transmitir información importante. Escribe también el significado (“¡felicidades! ヽ(・∀・)ﾉ”) y evita kaomojis largos en nombres de usuario o en textos alternativos. En este sitio, cada botón de kaomoji tiene una etiqueta corta, como “Copiar kaomoji: Gato estirándose”, para que quien use lector de pantalla pueda navegar sin oír símbolos sueltos.",
      ],
    },
    {
      heading: "Categorías de kaomojis populares",
      paragraphs: [
        "Empieza por las colecciones más usadas: [kaomojis tiernos](page:cute) para caritas kawaii, [kaomojis felices](page:happy) para sonrisas, [kaomojis tristes y llorando](page:sad), [kaomojis de corazón y amor](page:heart) y [kaomojis de gatos](page:cat).",
        "Si buscas algo más específico, prueba las colecciones de [encogerse de hombros](page:shrug), [enojados](page:angry), [sonrojados](page:blush), [conejos](page:bunny), [ángeles](page:angel) o [estrellas y brillos](page:star). También puedes crear tu propia carita con el [Creador de kaomojis](page:maker).",
      ],
    },
  ],
  faqs: [
    { q: "¿Qué significa kaomoji?", a: "Kaomoji es una palabra japonesa formada por kao (cara) y moji (carácter). Se refiere a caritas dibujadas con caracteres de texto, como (^_^) o (╥﹏╥)." },
    { q: "¿Los kaomojis son gratis?", a: "Sí. Los kaomojis son expresiones cortas de texto que se usan en todo el mundo en mensajes, publicaciones y biografías. Puedes copiar y usar libremente cualquier kaomoji de este sitio." },
    { q: "¿Cómo copio un kaomoji?", a: "Tócalo o haz clic. Se copia al instante y aparece una confirmación. Luego pégalo con Ctrl+V (Windows), Cmd+V (Mac), o en el celular manteniendo presionado y eligiendo Pegar." },
    { q: "¿Cuál es la diferencia entre kaomoji y emoji?", a: "Un emoji es una sola imagen que cada plataforma dibuja a su manera. Un kaomoji está formado por varios caracteres de texto comunes, se lee de frente y se ve como texto en la fuente que estés usando." },
    { q: "¿Por qué mi kaomoji se ve con cuadritos?", a: "El dispositivo que lo muestra no tiene una fuente con uno o más de sus caracteres. Prueba con un kaomoji de caracteres más comunes, o actualiza tu dispositivo o app." },
    { q: "¿Por qué mi carita perdió un brazo en Discord?", a: "Discord interpreta la barra invertida y los guiones bajos como formato. Activa la copia segura para Discord antes de copiar y se agregarán las barras necesarias." },
    { q: "¿Guardan lo que busco o copio?", a: "No. La búsqueda, la copia y el Creador de kaomojis funcionan en tu navegador, y nada de lo que escribes o copias se nos envía. Tus kaomojis recientes solo se guardan en tu dispositivo si permites el almacenamiento de preferencias." },
  ],
  conclusion: {
    heading: "Encuentra tu carita y pégala donde quieras",
    paragraphs: [
      "Ya sea que quieras algo suave como (˶ᵔ ᵕ ᵔ˶), algo dramático como (╯°□°)╯︵ ┻━┻ o el clásico ¯\\_(ツ)_/¯, vuelve arriba, busca una emoción y toca para copiar. ¿No encuentras la indicada? Créala tú en el [Creador de kaomojis](page:maker).",
    ],
  },
};
