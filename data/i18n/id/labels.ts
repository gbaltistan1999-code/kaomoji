// Label bahasa Indonesia, urutan sama dengan Lampiran A.
// DRAFT: requires native-speaker review before launch.
import { labelsFromLists, type LabelLists } from "../label-lists";

const lists: LabelLists = {
  cute: [
    // kawaii
    "Senyum kawaii klasik", "Senyum dengan bunga", "Senyum manis merekah", "Gadis bunga bermata cerah", "Wajah senang merona",
    "Senyum lembut", "Senyum bulat tembam", "Senyum tembam berkilau", "Senyum kecil sopan", "Senyum kawaii lebar",
    "Senyum manis sederhana", "Senyum tenang mata terpejam", "Bunga bermata kecil", "Puas dan nyaman", "Gembira mata terbuka lebar",
    "Mata ceria berbinar", "Rona di antara bunga", "Senyum bunga manis", "Senyum bunga lembut", "Senyum bunga bercahaya",
    "Senyum bermahkota bunga", "Senyum berbingkai kuncup", "Senyum manis bahagia", "Senyum riang lembut", "Senyum kecil bulat",
    "Senyum kawaii bersinar", "Wajah bunga mengantuk", "Senyum merona mata lebar", "Mata terpejam damai", "Mata terpejam melamun",
    "Senyum mungil sederhana", "Wajah senang polos", "Senyum dengan kilau", "Senyum kecil gembira", "Senyum santai mengantuk",
    "Wajah tenang dan puas",
    // omega
    "Wajah kecil empuk", "Lambaian empuk", "Wajah omega klasik", "Omega lembut merona", "Meringkuk mengantuk",
    "Omega pemalu", "Halo ceria", "Senyum ngantuk", "Omega bahagia", "Cemberut lembek",
    "Wajah hamster kecil", "Wajah lembut puas", "Wajah kecil senang", "Imut hidung kancing", "Senyum telinga kecil",
    // excited
    "Kedipan berkilau", "Mata berbinar", "Imut terpukau", "Memejamkan mata rapat", "Wajah cekikikan",
    "Senyum girang", "Senyum cerah", "Terkejut senang", "Imut bersorak", "Cekikikan riang",
    "Kilau penuh tekad", "Imut monyong", "Hangat dan bahagia", "Senyum kecil santun", "Wajah camilan enak",
    "Menjilat bibir", "Jeritan gembira", "Cekikikan gemas", "Imut senang sekali", "Mata silau",
    "Mata gemerlap", "Senyum bahagia lebar", "Senyum ramah", "Senyum kalem", "Senyum mengintip",
    "Imut percaya diri", "Imut mengepal tangan", "Senyum kecil rapi", "Menjerit kegirangan", "Pekik senang",
    "Wajah burung kecil",
  ],
  happy: [
    // smile
    "Senyum senang besar ^▽^", "Senyum ceria huruf v", "Wajah senang sederhana", "Senyum senang terbuka", "Senyum omega puas",
    "Senang mulut terbuka", "Senyum puas", "Senyum santai", "Wajah senang monyong", "Senyum titik",
    "Wajah senang lembut", "Bahagia mata terpejam", "Wajah senang tersipu", "Tertawa mata terpejam", "Senang dan bangga",
    "Senyum hangat", "Tawa ramah", "Tawa mata berbinar", "Senyum mata lebar", "Seringai puas",
    "Senyum bangga kecil", "Senyum penuh arti", "Tawa merona", "Senyum omega merona", "Senyum bahagia sekali",
    "Tawa bercahaya", "Tawa nakal", "Senyum cerah ceria", "Senyum damai", "Senyum pipi bulat",
    "Wajah senang konyol", "Seringai jenaka", "Tersenyum dengan bunga", "Senyum bunga puas", "Senyum ringan",
    "Tawa malu-malu", "Mata senang menyipit", "Senyum usil", "Bahagia yang kalem", "Tawa kaget",
    "Tawa riang",
    // joy
    "Super bersemangat", "Pekik kegirangan", "Tawa meluap", "Pekik kegembiraan", "Meledak bahagia",
    "Senang bermata bintang", "Tawa bermata bintang", "Seringai jempol", "Melompat kegirangan", "Senang melompat-lompat",
    "Lompat kesenangan", "Lari kecil girang", "Berlari gembira", "Lompatan gembira", "Tertawa terbahak-bahak",
    "Lari bersorak", "Mata menyipit gembira", "Tarian kemenangan", "Tinju senang ke udara",
    // arms
    "Bersorak tangan ke atas", "Hore", "Tertawa tangan ke atas", "Sorakan keras", "Merayakan",
    "Senang tangan ke atas", "Banzai riang", "Hore besar", "Banzai bersemangat", "Sorakan berbintang",
    "Sorakan klasik", "Tarian kecil gembira", "Tarian senang", "Pose kemenangan imut", "Perayaan kalem",
  ],
  sad: [
    // crying
    "Menangis diam-diam", "Air mata mengalir", "Air mata klasik", "Senyum menangis", "Wajah berlinang air mata",
    "Terisak", "Meraung", "Cemberut menangis", "Menangis pelan", "Si cengeng kecil",
    "Air mata sunyi", "Air mata gemetar", "Tangis gemetar", "Omega berlinang", "Menangis sedih",
    "Terisak keras", "Menahan air mata", "Mata berkaca-kaca", "Tersenyum di tengah tangis", "Senyum berlinang",
    "Air mata patah hati", "Air mata tumpah", "Mata sedih berair", "Duka yang hening", "Menangis tersedu-sedu",
    "Tertawa sambil menangis", "Air mata deras", "Mata sembap menangis", "Air mata lelah", "Air mata berlinang",
    "Menyeka air mata", "Menangis di balik tangan", "Menutup mata yang basah", "Mengucek mata berair", "Tangis di telapak tangan",
    "Menyembunyikan wajah sedih", "Bersembunyi karena malu", "Isak putus asa", "Hancur",
    // sad
    "Cemberut sedih", "Kening khawatir", "Muram", "Butuh pelukan", "Desah kecewa",
    "Desah kalah", "Lesu", "Murung", "Sedih canggung", "Sedih tak bisa bicara",
    "Merajuk", "Menggerutu sedih", "Wajah tak senang", "Wajah suram", "Meringis kesal",
    "Meringis sakit", "Sedang down", "Kening cemas", "Tatapan khawatir", "Patah semangat",
    "Bunga sedih", "Cemberut merengut", "Desah kesepian", "Kecewa", "Galau",
    "Keringat gugup", "Desah gelisah", "Terluka diam-diam",
  ],
  heart: [
    // heart-eyes
    "Mata hati", "Mata hati jatuh cinta", "Mata hati memuja", "Pekik mata hati", "Mata hati takjub",
    "Desah mata hati", "Naksir berat", "Mata hati merah", "Mata hati berbunga", "Klepek-klepek",
    "Benar-benar kesengsem", "Mata hati melamun", "Mata hati tersipu", "Kilau dimabuk cinta", "Dimabuk cinta",
    "Mata hati berbintang", "Mata hati manis", "Mata hati bunga", "Mata hati sederhana", "Mata hati tanpa wajah",
    "Senyum hati kecil", "Senyum hati merah", "Mata hati pemalu",
    // hearts
    "Tersenyum dengan hati", "Puas dengan hati", "Hati merah tembam", "Hati tembam berkilau", "Cinta melamun",
    "Cinta mengantuk", "Hati dan sorakan", "Berdoa untuk cinta", "Tarian kasmaran", "Cinta mata berbinar",
    "Sedang jatuh cinta", "Cinta lembut", "Hati kecil penuh sayang", "Melambai dengan hati", "Kilau cinta manis",
    "Seringai dengan hati", "Mengirim hati", "Mengintip dengan hati", "Memeluk hati", "Hati bunga",
    "Melempar hati", "Menawarkan hati", "Meringkuk dengan hati", "Senyum hati mungil", "Hati kecil malu-malu",
    "Hati cekikikan", "Hati tersenyum", "Menyodorkan hati", "Hati berkedip", "Hati genit",
    // kiss
    "Kiss bye", "Kiss bye merah", "Siap dicium", "Cium pipi", "Ciuman ditutupi",
    "Ciuman malu", "Wajah mencium", "Berlari minta cium", "Kecupan", "Ciuman kecil",
    "Ciuman monyong", "Ciuman penuh cinta", "Pasangan berciuman", "Ciuman pasangan", "Pasangan saling cinta",
  ],
  cat: [
    // cat-face
    "Kucing klasik", "Kucing mulut omega", "Kucing datar", "Kucing mengantuk", "Kucing penasaran",
    "Kucing tersenyum", "Wajah kucing sederhana", "Kucing mata bulat besar", "Kucing mata melotot", "Kucing mata sipit",
    "Kucing licik", "Kucing bahagia", "Kucing sombong", "Kucing puas", "Kucing tertawa",
    "Kucing mata berkilau", "Kucing miring", "Kucing melambai", "Anak kucing mata lebar", "Anak kucing bingung",
    "Anak kucing mata cerah", "Anak kucing kaget", "Anak kucing lembut", "Anak kucing kecil", "Wajah kucing lembut",
    "Kucing tidur siang", "Kucing senang", "Kucing misterius", "Kucing berkedip", "Kucing mata bundar",
    "Kucing terkantuk-kantuk", "Kucing pemalu", "Kucing pemarah", "Kucing menggeliat", "Kucing mode roti",
    "Kucing dengan ekor",
    // cat-paws
    "Kucing angkat kaki", "Kucing mencakar manja", "Kaki kucing ceria", "Kaki kucing berbunga", "Kucing mengulurkan kaki",
    "Kaki kucing malas", "Kaki kucing bersemangat", "Kaki kucing berbulu", "Kaki kucing imut", "Anak kucing jenaka",
    "Kaki anak kucing senang", "Kucing minta dipeluk", "Kucing melempar bintang",
    // cat-moods
    "Kucing menangis", "Kucing gugup", "Kucing pingsan", "Kucing tidak setuju", "Kucing syok",
    "Kucing pusing", "Kucing sedih", "Kucing tidak terkesan", "Kucing ngeri", "Kucing mengeong",
  ],
  star: [
    // sparkle
    "Gembira bertabur bintang", "Melempar kilauan", "Menebar kilauan", "Tekad berkilau", "Kemenangan berkilau",
    "Bersinar terang", "Dikelilingi kilauan", "Hujan bintang", "Kilauan melamun", "Gembira gemerlap",
    "Jejak kilauan", "Menaburkan sihir", "Bintang dan sorakan", "Semangat berkilau", "Kedipan berkilauan",
    "Kagum bercahaya", "Takjub di bawah bintang", "Kilau sombong", "Dibingkai kilauan", "Kilau percaya diri",
    "Senyum berkilau", "Kilau senang", "Kilau gembira", "Kilau mengantuk",
    // star-eyes
    "Mata bintang", "Senyum berbintang", "Mata bintang terpana", "Mata bintang takjub", "Mata bintang berbunga",
    "Seringai berbintang", "Mata bergliter", "Semangat berbintang", "Sorakan mata bintang", "Bunga terpesona",
    "Teriakan berbingkai bintang", "Lambaian mata bintang", "Seringai berkilauan", "Mata berkelip", "Tersenyum dengan bintang",
    "Senyum berbingkai bintang",
    // magic
    "Merapal sihir", "Mantra serius", "Penyihir menyetrum", "Senyum tongkat bintang", "Bintang berkedip",
    "Kedipan jenaka", "Kedipan bintang usil", "Melempar bintang jatuh", "Bintang berputar cepat", "Melempar bintang",
    "Lemparan bintang bersemangat", "Bintang berputar-putar",
  ],
  shrug: [
    // classic-shrug
    "Angkat bahu klasik", "Angkat bahu pendek", "Angkat bahu Lenny", "Angkat bahu datar", "Angkat bahu tidak setuju",
    "Angkat bahu konyol", "Angkat bahu bingung", "Angkat bahu tersenyum", "Angkat bahu mata lebar", "Angkat bahu lelah",
    "Angkat bahu canggung", "Angkat bahu sombong", "Angkat bahu heran", "Angkat bahu skeptis",
    // hands-up
    "Terserah", "Angkat bahu cuek", "Angkat bahu malas", "Angkat bahu acuh", "Angkat bahu meh",
    "Angkat bahu pasrah", "Angkat bahu gugup", "Seringai ya sudahlah", "Angkat bahu menyeringai", "Angkat bahu santai",
    "Angkat bahu mungil", "Angkat bahu jengkel", "Angkat bahu mendesah", "Angkat bahu muak", "Angkat bahu bosan",
    "Siapa tahu", "Ya sudahlah", "Angkat bahu putus asa", "Angkat bahu usil", "Angkat bahu cemberut",
    "Angkat bahu tak terkesan", "Desah meh", "Angkat bahu tanpa ekspresi", "Angkat bahu berkeringat", "Angkat bahu polos",
    // other-shrug
    "Bukan urusanku", "Setengah angkat bahu", "Angkat bahu tak berkata-kata", "Nggak tahu", "Nggak tahu sederhana",
    "Nggak tahu konyol", "Bingung", "Bingung menyeringai", "Bingung bengong", "Bingung tanpa beban",
    "Bingung malu-malu",
  ],
  bunny: [
    // bunny-ears
    "Telinga kelinci", "Kelinci telinga panjang", "Kelinci berkumis", "Kelinci senang", "Kelinci tersenyum",
    "Kelinci bersemangat", "Kelinci polos", "Kelinci tersipu", "Kelinci mengantuk", "Kelinci sombong",
    "Kelinci memekik", "Kelinci penasaran", "Kelinci mata lebar", "Kelinci tenang", "Kelinci linglung",
    "Kelinci menangis", "Kelinci salah tingkah", "Kelinci kaget", "Kelinci puas", "Kelinci terkantuk",
    "Kelinci cemas", "Kelinci kecil pemalu",
    // bunny-face
    "Kelinci manis", "Kelinci kecil meringkuk", "Kelinci cemberut", "Kelinci mata berkaca-kaca", "Kelinci berbulu lembut",
    "Kelinci mencium", "Kelinci berpikir", "Kelinci cekikikan", "Kelinci damai", "Kelinci dengan hati",
    "Wajah kelinci kecil", "Wajah kelinci mungil", "Kelinci mata bulat", "Kelinci ngantuk", "Kelinci mengirim cinta",
    "Hidung kelinci tersenyum", "Hidung kelinci senang", "Kelinci minta dipeluk", "Kaki kelinci",
    // bunny-hop
    "Kelinci angkat kaki", "Kelinci melompat", "Kelinci melompat sombong", "Lompatan kelinci riang", "Kelinci tertawa",
    "Lompatan kelinci ceria", "Lompatan kelinci bersemangat", "Lompatan berkumis", "Lompatan kelinci lembut", "Lompatan kelinci kecil",
  ],
  angry: [
    // mad
    "Cemberut mendidih", "Tatapan murka", "Tatapan kesal", "Menggertakkan gigi", "Berasap marah",
    "Berteriak marah", "Menggeram", "Gigi terkatup", "Membentak", "Geraman",
    "Teriakan marah", "Monyong marah", "Jengkel", "Cemberut pemarah", "Cemberut merajuk",
    "Urat kesal", "Dongkol", "Wajah kesal", "Tatapan mengamuk", "Merengut",
    "Menggerutu", "Tatapan mengancam", "Amarah jahat", "Geram", "Monyong ngambek",
    "Hampir meledak",
    // glare
    "Tatapan tak terkesan", "Tatapan penuh amarah", "Cemberut tidak setuju", "Melotot mulut terbuka", "Tatapan sombong",
    "Tatapan tidak setuju", "Tatapan menghakimi", "Lirikan sinis", "Lirikan kesal", "Lirikan ragu",
    "Dengusan pemarah", "Merajuk cemberut", "Cemberut masam", "Tatapan datar", "Tatapan muak",
    // fight
    "Lambaian marah", "Tangan ke atas murka", "Tangan ke atas mengamuk", "Berteriak tangan ke atas", "Ejekan menantang",
    "Kepalan penuh tekad", "Siap bertarung", "Kuda-kuda bertarung", "Terjang mengamuk", "Terjang marah",
    "Mengamuk", "Tantrum", "Menghentak kaki marah", "Mengusir", "Meronta marah",
    "Amarah penuh", "Sangat murka", "Membara",
  ],
  angel: [
    // angel-wings
    "Malaikat senang", "Malaikat damai", "Malaikat sederhana", "Malaikat mata cerah", "Malaikat kecil manis",
    "Malaikat bahagia", "Malaikat lembut", "Malaikat tersenyum", "Malaikat penuh cinta", "Malaikat puas",
    "Malaikat ceria", "Malaikat menyeringai", "Malaikat melamun", "Malaikat tenteram", "Malaikat cekikikan",
    "Malaikat mengantuk", "Malaikat sedih", "Malaikat berbunga", "Malaikat pemalu", "Malaikat penuh tekad",
    "Malaikat kalem", "Senyum lembut malaikat", "Malaikat riang", "Malaikat mungil", "Malaikat berkilau",
    "Malaikat berkelip", "Malaikat kecil", "Malaikat berseri", "Malaikat mata lebar", "Malaikat beristirahat",
    "Malaikat jatuh cinta", "Malaikat bermimpi",
    // flying-angel
    "Malaikat terbang", "Malaikat melayang tinggi", "Malaikat terbang berkilau", "Malaikat tersipu", "Malaikat pipi merona",
    "Malaikat sayap terbuka", "Malaikat mengepakkan sayap", "Malaikat melayang", "Malaikat mengambang", "Malaikat memantul",
    "Malaikat baik hati", "Malaikat kasmaran", "Malaikat hanyut", "Malaikat tangan ke atas", "Malaikat melambai",
    "Malaikat penuh kasih", "Malaikat terbang nyaman", "Malaikat merayakan", "Malaikat terbang senang", "Malaikat terbang bersemangat",
    "Malaikat terbang berbunga",
  ],
  blush: [
    // shy
    "Malu dan merona", "Menggeliat malu", "Rona malu-malu", "Menyembunyikan wajah", "Mengintip dari balik tangan",
    "Menutup wajah", "Menyembunyikan senyum", "Menyembunyikan seringai", "Cekikikan malu", "Bersembunyi malu-malu",
    "Pipi merah merona", "Wajah memerah", "Menutup mata", "Terlalu malu untuk melihat", "Salah tingkah total",
    "Menggeliat salting", "Meringis malu", "Malu canggung", "Tawa malu", "Rona berbunga",
    "Menyembunyikan senyum malu",
    // rosy
    "Senyum salah tingkah", "Wajah omega merona", "Seringai merona", "Rona kasmaran", "Bersiul polos",
    "Pipi kemerahan", "Senyum tersipu", "Rona hangat", "Seringai malu", "Rona lembut",
    "Rona mata menyipit", "Pipi merah lembut", "Rona manis", "Pipi bercahaya", "Rona damai",
    "Rona cekikikan", "Merona bahagia", "Senyum malu-malu", "Takjub pipi merah", "Rona cemberut",
    "Seringai dengan rona", "Rona sendu", "Rona pipi bulat", "Tawa tersipu-sipu", "Rona senang",
    "Rona dimabuk cinta", "Rona memekik", "Rona puas", "Bahagia malu-malu", "Rona tenang",
    "Wajah kecil merona",
  ],
  hug: [
    "Pelukan hangat besar", "Datang untuk memeluk", "Tangan terbuka", "Tangan terbuka bersemangat", "Pelukan malu",
    "Tangan terbuka lebar", "Pelukan bersemangat", "Pelukan berkilau", "Pelukan Lenny", "Pelukan mengantuk",
    "Pelukan senang", "Pelukan kawaii", "Menghibur teman", "Menyemangati seseorang", "Pelukan ceria",
    "Pelukan bersahabat", "Pelukan mencurigakan", "Pelukan lembut", "Tangan terbuka lembut", "Pelukan penuh cinta",
    "Pelukan nyaman", "Dekapan dengan hati", "Pelukan tak sabar", "Pelukan bergoyang",
  ],
  bear: [
    "Beruang klasik", "Beruang kecil", "Beruang senang", "Beruang melirik", "Beruang curiga",
    "Beruang pemalu", "Beruang bersemangat", "Beruang penuh tekad", "Beruang mengantuk", "Beruang kecil terkejut",
    "Beruang tenang", "Boneka beruang", "Beruang mengulurkan tangan", "Beruang menawarkan pelukan", "Beruang mata cerah",
    "Beruang mengirim cinta", "Beruang tidak setuju", "Beruang menangis", "Beruang damai", "Beruang pipi merona",
    "Beruang kalem", "Beruang kaget", "Beruang hidung besar", "Pelukan beruang", "Wajah beruang",
    "Beruang menutup mata", "Beruang tersipu", "Wajah beruang pemalu", "Beruang tersenyum",
  ],
  dog: [
    "Anak anjing imut", "Anak anjing kecil", "Anak anjing sedih", "Anak anjing mata lebar", "Anak anjing senang",
    "Anjing telinga terkulai", "Anjing menyeringai", "Anjing puas", "Anjing ceria", "Anjing senang",
    "Anjing tersenyum", "Anjing tenang", "Anjing ngiler", "Anjing mata cerah", "Anjing gembira",
    "Anjing telinga runcing", "Anak anjing telinga runcing", "Anak anjing telinga runcing senang", "Wajah anjing kecil", "Anak anjing telinga terkulai",
    "Anjing berbulu lebat",
  ],
  sleepy: [
    "Tidur pulas", "Mendengkur keras", "Tidur nyenyak", "Mulai tertidur", "Tidur damai",
    "Mata terpejam", "Tidur siang", "Ngiler saat tidur", "Tidur tengkurap", "Tak sadarkan diri",
    "Desah mengantuk", "Kelelahan", "Ngiler mengantuk", "Mengistirahatkan mata", "Tidur siang nyaman",
    "Tidur siang sombong", "Menguap", "Tertidur lelap", "Terlelap perlahan", "Tidur santai",
  ],
  surprised: [
    "Wajah syok", "Tatapan mata lebar", "Tercengang", "Takjub", "Tak bisa berkata-kata",
    "Mata melotot", "Kaget bingung", "Lihat dua kali", "Terkesiap", "Terperanjat",
    "Kedip kaget", "Kaget pusing", "Benar-benar syok", "Kaget canggung", "Kaget bengong",
    "Tatapan kosong", "Wah", "Ngeri", "Terkesiap syok", "Teriak kaget",
    "Lompat kaget", "Kabur karena syok", "Rahang jatuh", "Menatap syok", "Syok gugup",
    "Tangan ke atas karena kaget",
  ],
  "table-flip": [
    "Balik meja klasik", "Balik meja marah", "Balik meja pemarah", "Balik dua meja", "Balik meja senang",
    "Balik meja murka", "Balik meja tidak setuju", "Balik meja mata liar", "Balik meja syok", "Balik meja mengamuk",
    "Balik dua meja sambil angkat bahu", "Membalik orang", "Beruang membalik meja", "Balik meja santai", "Balik meja berkilau",
    "Mengembalikan meja", "Merapikan meja dengan tenang", "Angkat bahu ke meja", "Menenangkan diri", "Rapikan meja sombong",
    "Balik lalu rapikan",
  ],
  wave: [
    "Lambaian kecil", "Halo sederhana", "Halo senang", "Lambaian ramah", "Hai ceria",
    "Lambaian dadah", "Halo bersemangat", "Hai santai", "Melambai halo", "Halo cerah",
    "Dadah ceria", "Lambaian berbintang", "Lambaian imut", "Dadah-dadah", "Halo lantang",
    "Lambaian besar", "Lambaian malu", "Lambaian lembut", "Lambaian cerah",
  ],
};

export const labels = labelsFromLists("id", lists);
