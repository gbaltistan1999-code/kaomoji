// Etiquetas en español (Latinoamérica), en el mismo orden que el Apéndice A.
// DRAFT: requires native-speaker review before launch.
import { labelsFromLists, type LabelLists } from "../label-lists";

const lists: LabelLists = {
  cute: [
    // kawaii
    "Sonrisa kawaii clásica", "Sonrisa con flor", "Sonrisa dulce en flor", "Niña flor de ojos brillantes", "Carita feliz sonrojada",
    "Sonrisa suave y tierna", "Sonrisa redondita", "Sonrisa redondita con brillos", "Sonrisa pequeña y educada", "Gran sonrisa kawaii",
    "Sonrisa simple y dulce", "Sonrisa tranquila con ojos cerrados", "Flor con ojitos", "Contenta y acogedora", "Encanto con ojos abiertos",
    "Ojos alegres y brillantes", "Rubor entre flores", "Sonrisa floral dulce", "Sonrisa de flor delicada", "Sonrisa de flor radiante",
    "Sonrisa con corona de flores", "Sonrisa entre capullos", "Sonrisa dulce y feliz", "Sonrisa alegre y suave", "Sonrisita redonda",
    "Sonrisa kawaii resplandeciente", "Carita de flor somnolienta", "Sonrisa sonrojada de ojos grandes", "Ojos cerrados en paz", "Ojos cerrados soñadores",
    "Sonrisita simple", "Carita feliz sencilla", "Sonrisa con destello", "Pequeña sonrisa alegre", "Sonrisa relajada y dormilona",
    "Carita tranquila y contenta",
    // omega
    "Carita esponjosa", "Saludo esponjoso", "Carita omega clásica", "Omega suave sonrojado", "Acurrucado con sueño",
    "Omega tímido", "Hola alegre", "Sonrisa adormilada", "Omega dichoso", "Puchero blandito",
    "Carita de hámster", "Carita suave y contenta", "Carita satisfecha", "Ternura de nariz de botón", "Sonrisa con orejitas",
    // excited
    "Guiño con brillo", "Ojos brillantes", "Ternura deslumbrada", "Ojos bien apretados", "Carita riendo bajito",
    "Sonrisa emocionada", "Sonrisa radiante", "Gratamente sorprendida", "Ternura que celebra", "Risita burbujeante",
    "Brillo decidido", "Ternura con piquito", "Feliz y calentito", "Sonrisita educada", "Carita de antojo",
    "Relamiéndose", "Chillido de alegría", "Risita apretada", "Ternura encantada", "Ojos deslumbrados",
    "Ojos centelleantes", "Gran sonrisa feliz", "Sonrisa amable", "Sonrisa serena", "Sonrisa que se asoma",
    "Ternura segura", "Ternura con puño en alto", "Sonrisita prolija", "Chillando de alegría", "Chillido feliz",
    "Carita de pajarito",
  ],
  happy: [
    // smile
    "Gran sonrisa feliz ^▽^", "Sonrisa alegre en v", "Carita feliz simple", "Sonrisa feliz abierta", "Sonrisa omega contenta",
    "Feliz con boca abierta", "Sonrisa complacida", "Sonrisa despreocupada", "Carita feliz con piquito", "Sonrisa de puntito",
    "Carita feliz amable", "Felicidad con ojos cerrados", "Carita feliz ruborizada", "Riendo con ojos cerrados", "Feliz y presumida",
    "Sonrisa cálida", "Risa amistosa", "Risa de ojos brillantes", "Sonrisa de ojos abiertos", "Sonrisa satisfecha",
    "Sonrisita orgullosa", "Sonrisa cómplice", "Risa sonrosada", "Sonrisa omega sonrosada", "Sonrisa dichosa",
    "Risa resplandeciente", "Risa pícara", "Sonrisa soleada", "Sonrisa en paz", "Sonrisa de cachetes redondos",
    "Carita feliz traviesa", "Sonrisa juguetona", "Sonriendo con una flor", "Sonrisa de flor contenta", "Sonrisa tranquila",
    "Risa tímida", "Ojitos felices entrecerrados", "Sonrisa descarada", "Felicidad serena", "Risa de sorpresa",
    "Risa jubilosa",
    // joy
    "Súper emocionado", "Chillido de emoción", "Risa desbordante", "Chillido extasiado", "Explotando de alegría",
    "Feliz con ojos de estrella", "Risa con ojos de estrella", "Sonrisa con pulgar arriba", "Saltando de alegría", "Feliz y saltarín",
    "Brincando de felicidad", "Carrerita emocionada", "Corriendo de alegría", "Salto alegre", "Riendo a carcajadas",
    "Carrera de festejo", "Ojos entrecerrados de gozo", "Baile de victoria", "Puño en alto feliz",
    // arms
    "Celebrando con brazos arriba", "¡Hurra!", "Risa con brazos arriba", "Grito de festejo", "Celebrando",
    "Feliz con brazos arriba", "Banzai alegre", "Gran hurra", "Banzai emocionado", "Festejo estrellado",
    "Festejo clásico", "Bailecito alegre", "Baile feliz", "Pose de victoria tierna", "Festejo tranquilo",
  ],
  sad: [
    // crying
    "Llorando en silencio", "Lágrimas que caen", "Lágrimas clásicas", "Sonrisa llorosa", "Carita con lágrimas",
    "Sollozando", "Lamento", "Puchero lloroso", "Llorando suavecito", "Pequeño llorón",
    "Lágrimas silenciosas", "Lágrimas temblorosas", "Llanto tembloroso", "Omega lloroso", "Llorando con pena",
    "Sollozo fuerte", "Aguantando las lágrimas", "Ojos llorosos", "Sonriendo entre lágrimas", "Sonrisa entre llanto",
    "Lágrimas de corazón roto", "Lágrimas desbordadas", "Ojos tristes llorosos", "Pena silenciosa", "Llanto a mares",
    "Risa entre lágrimas", "Lágrimas en cascada", "Ojos hinchados de llorar", "Lágrimas de cansancio", "Lágrimas que corren",
    "Secándose las lágrimas", "Llorando en las manos", "Tapándose los ojos llorosos", "Frotándose los ojos llorosos", "Llanto entre las manos",
    "Escondiendo la tristeza", "Escondido de vergüenza", "Sollozo desesperado", "Devastado",
    // sad
    "Puchero triste", "Ceño preocupado", "Ceño sombrío", "Necesita un abrazo", "Suspiro decepcionado",
    "Suspiro de derrota", "Desanimado", "Cabizbajo", "Tristeza incómoda", "Triste y sin palabras",
    "Enfurruñado", "Refunfuño triste", "Ceño infeliz", "Carita apagada", "Mueca de disgusto",
    "Mueca de dolor", "Bajoneado", "Ceño ansioso", "Mirada preocupada", "Descorazonado",
    "Flor triste", "Ceño con puchero", "Suspiro de soledad", "Desilusionado", "Bajón",
    "Sudor nervioso", "Suspiro de preocupación", "Herido en silencio",
  ],
  heart: [
    // heart-eyes
    "Ojos de corazón", "Ojos de corazón enamorados", "Ojos de corazón adorables", "Chillido con ojos de corazón", "Ojos de corazón asombrados",
    "Suspiro con ojos de corazón", "Flechazo fuerte", "Ojos de corazón rojos", "Ojos de corazón con flor", "Derritiéndose de amor",
    "Totalmente flechado", "Ojos de corazón soñadores", "Ojos de corazón sonrojados", "Brillo de enamorado", "Enamorado",
    "Ojos de corazón estrellados", "Ojos de corazón dulces", "Ojos de corazón florales", "Ojos de corazón simples", "Ojos de corazón sin cara",
    "Sonrisa de corazoncito", "Sonrisa de corazón rojo", "Ojos de corazón tímidos",
    // hearts
    "Sonriendo con corazones", "Contento con un corazón", "Corazón rojo redondito", "Corazón redondito con brillos", "Amor soñador",
    "Amor dormilón", "Corazones y festejo", "Rezando por amor", "Baile de enamorado", "Amor con ojos brillantes",
    "Enamorado de verdad", "Amor tierno", "Corazoncito cariñoso", "Saludando con un corazón", "Amor dulce con brillos",
    "Sonrisa con un corazón", "Enviando un corazón", "Asomándose con un corazón", "Abrazando un corazón", "Corazón de flor",
    "Lanzando un corazón", "Ofreciendo un corazón", "Acurrucado con un corazón", "Sonrisa de corazón pequeño", "Corazoncito tímido",
    "Corazón con risita", "Corazón sonriente", "Entregando un corazón", "Corazón con guiño", "Corazón coqueto",
    // kiss
    "Lanzando un beso", "Lanzando un beso rojo", "Listo para un beso", "Beso en la mejilla", "Beso tapado",
    "Beso tímido", "Carita de beso", "Corriendo por un beso", "Besito", "Beso pequeño",
    "Beso con puchero", "Beso amoroso", "Pareja besándose", "Beso de pareja", "Pareja enamorada",
  ],
  cat: [
    // cat-face
    "Gatito clásico", "Gatito con boca omega", "Gatito neutral", "Gatito con sueño", "Gatito curioso",
    "Gatito sonriente", "Carita de gato simple", "Gato de ojos redondos", "Gato con ojos bien abiertos", "Gato de pupilas rasgadas",
    "Gato astuto", "Gato dichoso", "Gato presumido", "Gato contento", "Gato riendo",
    "Gato de ojos brillantes", "Gatito ladeado", "Gatito saludando", "Gatito de ojos grandes", "Gatito confundido",
    "Gatito de ojos vivos", "Gatito asustado", "Gatito tierno", "Gatito pequeño", "Carita de gato suave",
    "Gato tomando la siesta", "Gato complacido", "Gato misterioso", "Gato guiñando", "Gato de ojos redondos y serios",
    "Gato adormilado", "Gato tímido", "Gato gruñón", "Gato estirándose", "Gato hecho bolita",
    "Gato con cola",
    // cat-paws
    "Gato con patitas arriba", "Gatito dando zarpazos", "Patitas de gatito alegre", "Patitas de gatito con flor", "Gatito estirando las patas",
    "Patita de gato perezoso", "Patitas de gato emocionado", "Patitas de gato esponjoso", "Patitas de gato tiernas", "Gatito juguetón",
    "Patitas de gatito feliz", "Gato que quiere un abrazo", "Gato lanzando una estrella",
    // cat-moods
    "Gato llorando", "Gato nervioso", "Gato noqueado", "Gato desaprobador", "Gato sorprendido",
    "Gato mareado", "Gato triste", "Gato poco impresionado", "Gato horrorizado", "Gatito maullando",
  ],
  star: [
    // sparkle
    "Alegría llena de estrellas", "Lanzando brillos", "Tirando brillitos", "Determinación brillante", "Victoria brillante",
    "Brillando con fuerza", "Rodeado de brillos", "Lluvia de estrellas", "Brillos soñadores", "Alegría resplandeciente",
    "Estela de brillos", "Esparciendo magia", "Estrella y festejo", "Emoción brillante", "Guiño con brillos",
    "Asombro luminoso", "Asombro bajo las estrellas", "Brillo presumido", "Enmarcado en brillos", "Brillo con confianza",
    "Sonrisa con brillo", "Brillo de felicidad", "Brillo alegre", "Brillo dormilón",
    // star-eyes
    "Ojos de estrella", "Sonrisa estrellada", "Ojos de estrella atónitos", "Ojos de estrella asombrados", "Ojos de estrella con flor",
    "Gran sonrisa estrellada", "Ojos con purpurina", "Emoción estrellada", "Festejo con ojos de estrella", "Flor deslumbrada",
    "Grito entre estrellas", "Saludo con ojos de estrella", "Sonrisa centelleante", "Ojos titilantes", "Sonriendo con una estrella",
    "Sonrisa entre estrellas",
    // magic
    "Lanzando magia", "Hechizo serio", "Mago lanzando un rayo", "Sonrisa con varita estelar", "Estrella con guiño",
    "Guiño juguetón", "Guiño pícaro con estrella", "Lanzando una estrella fugaz", "Estrella en remolino", "Arrojando una estrella",
    "Lanzamiento estelar emocionado", "Estrella girando",
  ],
  shrug: [
    // classic-shrug
    "Encogimiento de hombros clásico", "Encogimiento corto", "Encogimiento Lenny", "Encogimiento inexpresivo", "Encogimiento desaprobador",
    "Encogimiento tonto", "Encogimiento confundido", "Encogimiento sonriente", "Encogimiento con ojos abiertos", "Encogimiento cansado",
    "Encogimiento incómodo", "Encogimiento presumido", "Encogimiento perplejo", "Encogimiento escéptico",
    // hands-up
    "Lo que sea", "Encogimiento despreocupado", "Encogimiento perezoso", "Encogimiento indiferente", "Encogimiento de meh",
    "Encogimiento resignado", "Encogimiento nervioso", "Sonrisa de ni modo", "Encogimiento con sonrisa", "Encogimiento relajado",
    "Encogimiento pequeñito", "Encogimiento exasperado", "Encogimiento con suspiro", "Encogimiento harto", "Encogimiento aburrido",
    "Quién sabe", "Ni modo", "Encogimiento sin esperanza", "Encogimiento pícaro", "Encogimiento gruñón",
    "Encogimiento poco impresionado", "Suspiro de meh", "Encogimiento inexpresivo y serio", "Encogimiento sudoroso", "Encogimiento inocente",
    // other-shrug
    "No es mi problema", "Medio encogimiento", "Encogimiento sin palabras", "Ni idea", "Ni idea simple",
    "Ni idea bobalicón", "Despistado", "Despistado con sonrisita", "Despistado y atontado", "Despistado sin preocupaciones",
    "Despistado y avergonzado",
  ],
  bunny: [
    // bunny-ears
    "Orejas de conejo", "Conejo de orejas largas", "Conejo con bigotes", "Conejo feliz", "Conejo sonriente",
    "Conejo emocionado", "Conejo simple", "Conejo sonrojado", "Conejo con sueño", "Conejo presumido",
    "Conejo chillando", "Conejo curioso", "Conejo de ojos grandes", "Conejo tranquilo", "Conejo aturdido",
    "Conejo llorando", "Conejo nervioso", "Conejo sorprendido", "Conejo contento", "Conejo dormitando",
    "Conejo preocupado", "Conejito tímido",
    // bunny-face
    "Conejito dulce", "Conejito acurrucado", "Conejito con puchero", "Conejito de ojos llorosos", "Conejito esponjoso",
    "Conejito dando un beso", "Conejito pensativo", "Conejito riendo", "Conejito en paz", "Conejito con corazón",
    "Carita de conejito", "Carita de conejo pequeña", "Conejito de ojos redondos", "Conejito adormilado", "Conejito enviando amor",
    "Naricita de conejo sonriente", "Naricita de conejo feliz", "Conejito que quiere un abrazo", "Patitas de conejito",
    // bunny-hop
    "Conejo con patitas arriba", "Conejo saltando", "Conejo saltarín presumido", "Salto alegre de conejo", "Conejo riendo",
    "Salto de conejo alegre", "Salto de conejo emocionado", "Salto con bigotes", "Salto de conejo suave", "Saltito de conejito",
  ],
  angry: [
    // mad
    "Ceño furioso", "Mirada furiosa", "Mirada molesta", "Apretando los dientes", "Echando humo",
    "Gritando de enojo", "Gruñendo", "Dientes apretados", "Gritando", "Gruñido",
    "Grito de enojo", "Puchero de enojo", "Irritado", "Ceño gruñón", "Ceño enfurruñado",
    "Vena de irritación", "Fastidiado", "Cara de molestia", "Mirada rabiosa", "Ceño fruncido",
    "Refunfuñando", "Mirada amenazante", "Furia malvada", "Indignado", "Puchero de berrinche",
    "A punto de explotar",
    // glare
    "Mirada poco impresionada", "Mirada de rabia", "Ceño desaprobador", "Mirada con boca abierta", "Mirada presumida",
    "Mirada de desaprobación", "Mirada que juzga", "Mirada de reojo", "Reojo molesto", "Reojo dudoso",
    "Resoplido gruñón", "Gruñón con puchero", "Ceño agrio", "Mirada sin gracia", "Mirada de hartazgo",
    // fight
    "Saludo enojado", "Brazos arriba de furia", "Brazos arriba enfurecido", "Gritando con brazos arriba", "Burla provocadora",
    "Puño decidido", "Listo para pelear", "Postura de pelea", "Embestida rabiosa", "Embestida enojada",
    "Haciendo un berrinche", "Rabieta", "Pisoteando de rabia", "Echando a alguien", "Agitándose de enojo",
    "Furia total", "Más que furioso", "Encendido",
  ],
  angel: [
    // angel-wings
    "Ángel feliz", "Ángel en paz", "Ángel simple", "Ángel de ojos brillantes", "Angelito dulce",
    "Ángel dichoso", "Ángel tierno", "Ángel sonriente", "Ángel amoroso", "Ángel contento",
    "Ángel alegre", "Ángel con gran sonrisa", "Ángel soñador", "Ángel sereno", "Ángel con risita",
    "Ángel dormilón", "Ángel triste", "Ángel con flor", "Ángel tímido", "Ángel decidido",
    "Ángel calmado", "Sonrisa suave de ángel", "Ángel jubiloso", "Ángel diminuto", "Ángel brillante",
    "Ángel titilante", "Angelito", "Ángel radiante", "Ángel de ojos grandes", "Ángel descansando",
    "Ángel enamorado", "Ángel soñando",
    // flying-angel
    "Ángel volando", "Ángel planeando", "Ángel volando con brillos", "Ángel sonrojado", "Ángel de mejillas rosadas",
    "Ángel con alas abiertas", "Ángel aleteando", "Ángel suspendido", "Ángel flotando", "Ángel rebotando",
    "Ángel bondadoso", "Ángel flechado", "Ángel a la deriva", "Ángel con brazos arriba", "Ángel saludando",
    "Ángel lleno de amor", "Ángel volando acogedor", "Ángel celebrando", "Ángel volando feliz", "Ángel volando emocionado",
    "Ángel volando con flor",
  ],
  blush: [
    // shy
    "Tímido y sonrojado", "Retorcijón de vergüenza", "Rubor apenado", "Escondiendo la cara", "Espiando entre las manos",
    "Tapándose la cara", "Escondiendo una sonrisa", "Escondiendo una gran sonrisa", "Risita avergonzada", "Escondiéndose con timidez",
    "Mejillas muy rojas", "Cara roja", "Tapándose los ojos", "Demasiado tímido para mirar", "Totalmente nervioso",
    "Retorciéndose de nervios", "Mueca de vergüenza", "Vergüenza incómoda", "Risa apenada", "Rubor con flor",
    "Escondiendo una sonrisa tímida",
    // rosy
    "Sonrisa nerviosa", "Carita omega sonrosada", "Gran sonrisa sonrojada", "Rubor de flechazo", "Silbando inocente",
    "Mejillas sonrosadas", "Sonrisa sonrojada", "Rubor cálido", "Sonrisa tímida", "Rubor suave",
    "Rubor entrecerrado", "Mejillas rosadas suaves", "Rubor dulce", "Mejillas resplandecientes", "Rubor en paz",
    "Rubor con risita", "Sonrojado de felicidad", "Sonrisa vergonzosa", "Asombro con mejillas rosadas", "Rubor con puchero",
    "Gran sonrisa con rubor", "Rubor nostálgico", "Rubor de cachetes redondos", "Risa sonrojada", "Rubor encantado",
    "Rubor de enamorado", "Rubor chillón", "Rubor complacido", "Felicidad tímida", "Rubor contento",
    "Carita sonrosada",
  ],
  hug: [
    "Gran abrazo cálido", "Ahí va un abrazo", "Brazos abiertos", "Brazos abiertos emocionados", "Abrazo tímido",
    "Brazos bien abiertos", "Abrazo emocionado", "Abrazo con brillos", "Abrazo Lenny", "Abrazo con sueño",
    "Abrazo feliz", "Abrazo kawaii", "Consolando a un amigo", "Animando a alguien", "Abrazo alegre",
    "Abrazo amistoso", "Abrazo sospechoso", "Abrazo delicado", "Brazos abiertos suaves", "Abrazo con amor",
    "Abrazo acogedor", "Apapacho con corazón", "Abrazo ansioso", "Abrazo meneado",
  ],
  bear: [
    "Oso clásico", "Osito", "Oso feliz", "Oso mirando de reojo", "Oso sospechoso",
    "Oso tímido", "Oso emocionado", "Oso decidido", "Oso con sueño", "Osito sorprendido",
    "Oso tranquilo", "Osito de peluche", "Oso estirando los brazos", "Oso ofreciendo un abrazo", "Oso de ojos brillantes",
    "Oso enviando amor", "Oso desaprobador", "Oso llorando", "Oso en paz", "Oso de mejillas rosadas",
    "Oso apacible", "Oso asombrado", "Oso de nariz grande", "Abrazo de oso", "Cara de oso",
    "Oso tapándose los ojos", "Oso sonrojado", "Carita de oso tímido", "Oso sonriente",
  ],
  dog: [
    "Perrito tierno", "Perrito pequeño", "Perrito triste", "Perrito de ojos grandes", "Perrito feliz",
    "Perro de orejas caídas", "Perro con gran sonrisa", "Perro contento", "Perro alegre", "Perro feliz",
    "Perro sonriente", "Perro tranquilo", "Perro babeando", "Perro de ojos brillantes", "Perro jubiloso",
    "Perro de orejas puntiagudas", "Cachorro de orejas puntiagudas", "Cachorro feliz de orejas puntiagudas", "Carita de perro pequeño", "Cachorro de orejas caídas",
    "Perro esponjoso",
  ],
  sleepy: [
    "Durmiendo", "Roncando fuerte", "Sueño profundo", "Quedándose dormido", "Dormido en paz",
    "Ojos cerrados", "Tomando una siesta", "Babeando dormido", "Dormido boca abajo", "Noqueado",
    "Suspiro de sueño", "Agotado", "Baba de sueño", "Descansando los ojos", "Siesta acogedora",
    "Siesta presumida", "Bostezando", "Profundamente dormido", "Cayendo en el sueño", "Siestita cómoda",
  ],
  surprised: [
    "Cara de impacto", "Mirada con ojos bien abiertos", "Atónito", "Asombrado", "Sin palabras",
    "Ojos muy abiertos", "Sorpresa confundida", "Doble vistazo", "Boquiabierto", "Sobresaltado",
    "Parpadeo de sorpresa", "Sorpresa mareada", "Totalmente impactado", "Sorpresa incómoda", "Sorpresa en blanco",
    "Mirada en blanco", "¡Guau!", "Horrorizado", "Grito ahogado de impacto", "Grito de sobresalto",
    "Salto del susto", "Huyendo del impacto", "Mandíbula caída", "Mirando en shock", "Impacto nervioso",
    "Brazos arriba del susto",
  ],
  "table-flip": [
    "Volteo de mesa clásico", "Volteo de mesa enojado", "Volteo de mesa gruñón", "Doble volteo de mesa", "Volteo de mesa feliz",
    "Volteo de mesa furioso", "Volteo desaprobador", "Volteo con ojos desorbitados", "Volteo de mesa impactado", "Volteo de rabia",
    "Doble volteo encogiendo hombros", "Volteando a una persona", "Oso voltea la mesa", "Volteo de mesa casual", "Volteo de mesa con brillos",
    "Poniendo la mesa en su lugar", "Arreglando la mesa con calma", "Encogiendo hombros ante la mesa", "Calmándose", "Arreglo de mesa presumido",
    "Voltear y arreglar",
  ],
  wave: [
    "Saludito", "Hola simple", "Hola feliz", "Saludo amistoso", "Hola alegre ^-^",
    "Saludo de despedida", "Hola emocionado", "Hola casual", "Saludando hola", "Hola brillante",
    "Adiós alegre", "Saludo estrellado", "Saludo tierno", "Bye-bye", "Hola fuerte",
    "Gran saludo", "Saludo tímido", "Saludo suave", "Saludo soleado",
  ],
};

export const labels = labelsFromLists("es", lists);
