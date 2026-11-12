// DRAFT: requires native-speaker review before launch.
import type { HomeContent } from "@/types/i18n";

export const home: HomeContent = {
  title: "Kaomoji Copy Paste: 800+ Emoticon Jepang & Emoji Teks",
  description:
    "Salin dan tempel lebih dari 800 kaomoji (emoticon Jepang dan emoji teks) dengan sekali klik: emot lucu, senang, sedih, kucing, hati, dan lainnya, dikelompokkan per emosi dan hewan. Gratis, tanpa daftar.",
  h1: "Kaomoji Copy Paste",
  intro: "828 emoticon Jepang dan emoji teks, dikelompokkan per emosi dan hewan. Cari, ketuk, lalu tempel di mana saja.",
  sections: [
    {
      heading: "Apa itu kaomoji (emoticon Jepang)?",
      paragraphs: [
        "Kaomoji (顔文字) adalah wajah yang dibuat dari karakter teks. Kata Jepang ini menggabungkan kao (wajah) dan moji (karakter). Berbeda dengan emotikon Barat seperti :-) yang dibaca sambil memiringkan kepala, kaomoji dibaca tegak: mata, mulut, pipi, dan tangannya menghadap langsung ke kamu, seperti (◕‿◕).",
        "Karena hanya berupa teks, kaomoji bisa ditempel hampir di mana saja yang menerima teks: WhatsApp, komentar, bio, nama pengguna, chat game, dan dokumen. Kaomoji meminjam karakter dari banyak sistem tulisan (kana Jepang, Sirilik, Kannada, Thai, Yunani, dan Korea), ditambah simbol, karakter garis kotak, dan tanda gabung. Campuran inilah yang membuat kaomoji begitu ekspresif.",
      ],
    },
    {
      heading: "Kaomoji vs emoji vs emotikon Barat",
      paragraphs: ["Ketiganya sama-sama mengekspresikan emosi, tapi dibuat dengan cara berbeda:"],
      list: [
        "Emotikon Barat, seperti :) atau ;-P: wajah pendek dan miring yang diketik dengan karakter keyboard biasa.",
        "Kaomoji, seperti (╥﹏╥) atau ヽ(・∀・)ﾉ: wajah tegak dari berbagai karakter teks. Bisa punya tangan, gerakan, dan benda.",
        "Emoji, seperti 😊: gambar tunggal. Masing-masing punya kode Unicode sendiri, dan setiap platform menggambarnya dengan gaya sendiri.",
      ],
      examples: ["(｡◕‿◕｡)", "(╥﹏╥)", "¯\\_(ツ)_/¯"],
    },
    {
      heading: "Cara memakai perpustakaan kaomoji ini",
      list: [
        "Cari berdasarkan perasaan, hewan, atau aksi, misalnya kucing, nangis, cinta, peluk, atau angkat bahu.",
        "Atau jelajahi: pilih grup (Emosi, Lucu, Cinta, Hewan, Aksi, Kilau), lalu pilih kategori.",
        "Ketuk atau klik kaomoji mana saja. Langsung tersalin ke clipboard dan muncul pesan “Tersalin”.",
        "Tempel di mana saja dengan Ctrl+V, Cmd+V, atau di HP tekan lama lalu pilih Tempel.",
      ],
      paragraphs: [
        "Setiap kategori juga punya halaman sendiri berisi daftar lengkap yang dibagi ke beberapa bagian. Misalnya, [halaman kaomoji sedih](page:sad) memisahkan wajah menangis dari wajah kesepian dan kecewa.",
      ],
    },
    {
      heading: "Cara mengetik kaomoji di HP atau komputer",
      paragraphs: ["Salin-tempel adalah cara termudah, dan untuk itulah situs ini ada. Kalau kamu sering memakai wajah yang sama, coba salah satu cara ini:"],
      list: [
        "Pintasan penggantian teks: iPhone dan iPad (Pengaturan › Umum › Papan Ketik › Penggantian Teks), Mac (Pengaturan Sistem › Papan Ketik › Penggantian Teks), dan banyak keyboard Android seperti Gboard (kamus pribadi) bisa menyimpan frasa. Misalnya, mengetik “bahuu” bisa berubah menjadi ¯\\_(ツ)_/¯.",
        "Keyboard Jepang: banyak metode input Jepang (IME) menyarankan kaomoji saat kamu mengetik kata seperti かお (kao). Daftarnya tergantung keyboard dan sistem operasi.",
        "Panel emoji Windows: di Windows 10 dan 11, tekan tombol Windows + . (titik) lalu buka tab kaomoji untuk pilihan bawaan yang sedikit.",
      ],
    },
    {
      heading: "Di mana kaomoji bisa dipakai, dan di mana mungkin tidak",
      paragraphs: [
        "Kaomoji biasanya bisa ditempel tanpa masalah di WhatsApp, Discord, caption dan bio Instagram, komentar TikTok, postingan X, Messenger, SMS, email, dan kebanyakan chat game, karena kaomoji adalah teks Unicode biasa.",
        "Beberapa tempat lebih ketat. Kolom nama pengguna sering hanya menerima huruf dan angka, beberapa game menyaring karakter yang tidak umum, dan batas karakter bisa memotong kaomoji panjang seperti balik meja. Kalau ditolak, coba yang lebih sederhana dari karakter umum, seperti (^_^) atau (T_T).",
      ],
    },
    {
      heading: "Kenapa beberapa kaomoji tampil sebagai kotak atau tanda tanya?",
      paragraphs: [
        "Setiap karakter dalam kaomoji harus ada di salah satu font di perangkat yang menampilkannya. Kalau tidak ada font yang punya karakter (glyph) itu, kamu akan melihat kotak kosong (sering disebut “tahu”), tanda tanya, atau celah. Sistem akan mencoba font lain dulu (disebut font fallback), tapi HP lama, smart TV, dan beberapa aplikasi punya font terbatas.",
        "Karakter dari aksara yang kurang umum, seperti ଘ, ʚ, ꒰, atau ᓚᘏᗢ, paling sering hilang. Tanda gabung, seperti aksen pada •̀ᴗ•́, juga bisa terlihat bergeser di beberapa font. Kalau temanmu melihat kotak, pilih kaomoji dengan karakter yang lebih umum, atau baca [penjelasan Konsorsium Unicode tentang font dan tampilan](https://www.unicode.org/faq/font_keyboard.html) (dalam bahasa Inggris).",
      ],
    },
    {
      heading: "Masalah Discord: kenapa kaomoji angkat bahu kehilangan satu tangan",
      paragraphs: [
        "Discord memakai format Markdown. Garis miring terbalik \\ berarti “tampilkan karakter berikutnya apa adanya”, teks di antara _garis bawah_ atau *bintang* jadi miring atau tebal, ~~tilde~~ mencoret teks, `backtick` membuat kode, dan ||garis tegak|| menyembunyikan spoiler. Jadi saat kamu menempel ¯\\_(ツ)_/¯, Discord menganggap garis miring terbalik sebagai escape, garis bawahnya hilang, dan kaomoji kehilangan tangan kirinya.",
        "Aktifkan “Salin aman untuk Discord” di atas perpustakaan. Fitur ini menambahkan garis miring terbalik sebelum setiap karakter tersebut supaya kaomoji tampil persis seperti seharusnya. Matikan untuk aplikasi lain, karena di sana garis miring tambahan akan terlihat.",
      ],
      examples: ["¯\\_(ツ)_/¯"],
    },
    {
      heading: "Kaomoji dan aksesibilitas",
      paragraphs: [
        "Pembaca layar biasanya membaca kaomoji karakter demi karakter: ヽ(・∀・)ﾉ bisa diucapkan sebagai deretan nama simbol, atau dilewati. Bagi pengguna teknologi bantu, kaomoji panjang bisa mengganggu pesan.",
        "Pakai kaomoji sebagai pemanis, bukan untuk menyampaikan informasi penting. Tulis juga maknanya (“selamat ya! ヽ(・∀・)ﾉ”), dan hindari kaomoji panjang di nama pengguna atau teks alternatif. Di situs ini, setiap tombol kaomoji punya label suara singkat, seperti “Salin kaomoji: Kucing menggeliat”, agar pengguna pembaca layar bisa menjelajah tanpa mendengar simbol mentah.",
      ],
    },
    {
      heading: "Kategori kaomoji populer",
      paragraphs: [
        "Mulailah dari koleksi yang paling sering dicari: [kaomoji lucu](page:cute) untuk wajah kawaii, [kaomoji senang](page:happy) untuk senyuman, [kaomoji sedih dan menangis](page:sad), [kaomoji hati dan cinta](page:heart), serta [kaomoji kucing](page:cat).",
        "Untuk yang lebih spesifik, coba koleksi [angkat bahu](page:shrug), [marah](page:angry), [malu](page:blush), [kelinci](page:bunny), [malaikat](page:angel), atau [bintang dan kilau](page:star). Kamu juga bisa membuat wajah sendiri dengan [Pembuat Kaomoji](page:maker).",
      ],
    },
  ],
  faqs: [
    { q: "Apa arti kaomoji?", a: "Kaomoji adalah kata Jepang dari kao (wajah) dan moji (karakter). Artinya wajah yang digambar dengan karakter teks, seperti (^_^) atau (╥﹏╥)." },
    { q: "Apakah kaomoji gratis dipakai?", a: "Ya. Kaomoji adalah ungkapan teks pendek yang dipakai orang di seluruh dunia dalam pesan, postingan, dan bio. Kamu bebas menyalin dan memakai kaomoji apa pun dari situs ini." },
    { q: "Bagaimana cara menyalin kaomoji?", a: "Ketuk atau klik. Kaomoji langsung tersalin ke clipboard dan muncul konfirmasi. Lalu tempel dengan Ctrl+V (Windows), Cmd+V (Mac), atau tekan lama lalu Tempel di HP." },
    { q: "Apa beda kaomoji dan emoji?", a: "Emoji adalah satu karakter gambar yang digambar setiap platform dengan gayanya sendiri. Kaomoji dibuat dari beberapa karakter teks biasa, dibaca tegak, dan tampil seperti teks sesuai font yang kamu pakai." },
    { q: "Kenapa kaomoji saya tampil sebagai kotak?", a: "Perangkat yang menampilkannya tidak punya font berisi satu atau lebih karakternya. Coba kaomoji dengan karakter yang lebih umum, atau perbarui perangkat atau aplikasimu." },
    { q: "Kenapa kaomoji angkat bahu saya kehilangan tangan di Discord?", a: "Discord membaca garis miring terbalik dan garis bawah sebagai format. Aktifkan salin aman untuk Discord sebelum menyalin, dan garis miring yang dibutuhkan akan ditambahkan otomatis." },
    { q: "Apakah kalian menyimpan apa yang saya cari atau salin?", a: "Tidak. Pencarian, penyalinan, dan Pembuat Kaomoji berjalan di browser kamu, dan apa pun yang kamu ketik atau salin tidak dikirim ke kami. Kaomoji yang baru disalin hanya disimpan di perangkatmu jika kamu mengizinkan penyimpanan preferensi." },
  ],
  conclusion: {
    heading: "Temukan wajahmu dan tempel di mana saja",
    paragraphs: [
      "Mau yang lembut seperti (˶ᵔ ᵕ ᵔ˶), yang dramatis seperti (╯°□°)╯︵ ┻━┻, atau yang klasik ¯\\_(ツ)_/¯? Gulir ke atas, cari perasaanmu, lalu ketuk untuk menyalin. Masih belum ketemu? Buat sendiri di [Pembuat Kaomoji](page:maker).",
    ],
  },
};
