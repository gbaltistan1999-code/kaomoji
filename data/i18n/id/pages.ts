// DRAFT: requires native-speaker and legal review before launch.
import type { LocaleBundle, MakerContent } from "@/types/i18n";

export const maker: MakerContent = {
  title: "Pembuat Kaomoji: Buat Emotikon Jepang Sendiri",
  description: "Buat kaomoji sendiri dengan memilih tangan, pipi, mata, mulut, dan hiasan. Pratinjau langsung, acak, dan salin sekali klik, termasuk salin aman untuk Discord. Gratis, berjalan di browser.",
  h1: "Pembuat Kaomoji",
  intro: "Pilih bagian-bagiannya, lihat wajahmu terbentuk, lalu salin sekali klik. Semuanya berjalan di browser kamu.",
  sections: [
    {
      heading: "Cara kerja Pembuat Kaomoji",
      list: [
        "Pilih setiap bagian dari menu: tangan, tepi wajah, pipi, mata, mulut, dan hiasan.",
        "Pratinjau langsung berubah. Padukan sisi kiri dan kanan sesukamu untuk wajah miring atau berkedip.",
        "Tekan Acak untuk wajah acak yang seimbang, lalu ubah bagian mana pun yang kamu mau.",
        "Tekan Salin, atau Salin untuk Discord kalau mau ditempel di Discord.",
      ],
    },
    {
      heading: "Tips membuat kaomoji yang bagus",
      list: [
        "Samakan suasana antar bagian: mata lembut (ᵔ, ◕) cocok dengan mulut lembut (‿, ω), mata tajam (ಠ, ò ó) cocok dengan mulut keras (益, 皿).",
        "Pakai pipi untuk emosi: ˶ atau 〃 untuk merona, ; untuk air mata atau keringat, ╬ untuk marah.",
        "Tangan menunjukkan aksi: ヽ ﾉ itu bersorak, ┐ ┌ itu angkat bahu, ⊂ ⊃ itu pelukan, dan ʚ ɞ mengubah wajah apa pun jadi malaikat.",
        "Buat pendek kalau untuk nama pengguna atau bio yang punya batas karakter.",
      ],
      examples: ["ヽ(◕‿◕)ﾉ", "ʚ(˶ᵔωᵔ˶)ɞ", "┐(￣ー￣)┌"],
    },
    {
      heading: "Apakah kaomoji saya akan tampil di mana saja?",
      paragraphs: [
        "Tergantung karakter yang kamu pilih. Karakter dasar seperti ( ) ^ _ o dan ‿ tampil hampir di mana saja. Bagian dari aksara yang kurang umum, seperti sayap ଘ ଓ atau telinga ૮ ა, bisa tampil sebagai kotak di perangkat lama. Untuk kompatibilitas maksimal, pilih bagian yang sederhana.",
      ],
    },
    {
      heading: "Butuh inspirasi?",
      paragraphs: [
        "Lihat wajah jadi untuk ide: kaomoji [lucu](page:cute), [kucing](page:cat), [kelinci](page:bunny), [marah](page:angry), [angkat bahu](page:shrug), dan [malaikat](page:angel) menunjukkan cara bagian-bagian dipadukan. Atau kembali ke [perpustakaan kaomoji lengkap](page:home).",
      ],
    },
  ],
  faqs: [
    { q: "Apakah Pembuat Kaomoji gratis?", a: "Ya. Gratis, tanpa akun, dan sepenuhnya berjalan di browser kamu." },
    { q: "Apakah kaomoji buatan saya disimpan?", a: "Tidak. Kreasimu hanya ada di tab browser dan di clipboard saat kamu menyalinnya. Tidak ada yang dikirim ke kami." },
    { q: "Bisakah kaomoji buatan saya dipakai di mana saja?", a: "Bisa. Kaomoji adalah teks biasa, jadi bisa ditempel di mana pun teks diterima. Beberapa aplikasi mungkin membatasi karakter yang tidak umum." },
  ],
};

export const pages: LocaleBundle["pages"] = {
  about: {
    title: "Tentang KaomojiZone",
    description: "Apa itu KaomojiZone, bagaimana perpustakaan kaomoji disusun, dan bagaimana situs ini menjaga privasimu.",
    h1: "Tentang KaomojiZone",
    intro: "KaomojiZone adalah perpustakaan emotikon Jepang dari teks (kaomoji) yang gratis dan sederhana, yang bisa kamu cari, jelajahi, dan salin sekali klik.",
    sections: [
      {
        heading: "Apa yang dilakukan situs ini",
        paragraphs: [
          "Kami mengumpulkan 828 kaomoji dalam 18 kategori, dikelompokkan per emosi, hewan, dan aksi, masing-masing dengan label deskriptif singkat. Kamu bisa mencari, menyaring, menyalin sekali klik, menyalin dalam format aman untuk Discord, dan membuat wajah sendiri di [Pembuat Kaomoji](page:maker).",
          "Situs ini tersedia dalam bahasa Inggris, Spanyol, Indonesia, Portugis Brasil, dan Vietnam. Kaomojinya sama di semua bahasa. Label, kata pencarian, dan penjelasannya diterjemahkan.",
        ],
      },
      {
        heading: "Cara perpustakaan ini disusun",
        paragraphs: [
          "Kaomoji adalah ungkapan teks umum yang beredar luas di internet. Perpustakaan kami adalah pilihan yang dikurasi: setiap kaomoji hanya muncul sekali, ditempatkan di kategori yang paling cocok, dan punya label unik yang mudah dibaca. Kami memastikan setiap kaomoji terdiri dari karakter Unicode standar.",
          "Kami tidak menerbitkan peringkat popularitas atau hitungan “paling banyak disalin”, karena kami tidak melacak apa yang disalin pengunjung.",
        ],
      },
      {
        heading: "Pendekatan kami soal privasi",
        paragraphs: [
          "Pencarian, penyalinan, dan Pembuat Kaomoji berjalan di dalam browser kamu. Kami tidak memakai analitik, iklan, atau skrip pelacak. Jika kamu izinkan, kaomoji yang baru disalin dan pengaturan salin aman untuk Discord diingat di penyimpanan browsermu sendiri, dan tidak di tempat lain. Lihat [Kebijakan Privasi](page:privacy) untuk detailnya.",
        ],
      },
      {
        heading: "Keterbatasan yang jujur",
        list: [
          "Beberapa kaomoji memakai karakter yang tidak bisa ditampilkan perangkat lama atau aplikasi tertentu, sehingga tampil sebagai kotak.",
          "Pembaca layar sering membaca kaomoji simbol demi simbol, jadi setiap kaomoji di situs ini punya label suara.",
          "Platform seperti Discord bisa mengubah tampilan kaomoji karena format teks. Salin aman untuk Discord membantu mengatasinya.",
        ],
      },
      { heading: "Hubungi kami", paragraphs: ["Menemukan kaomoji yang tampil salah, atau ingin mengusulkan kaomoji? Kunjungi [halaman kontak](page:contact)."] },
    ],
  },
  contact: {
    title: "Kontak KaomojiZone",
    description: "Cara menghubungi KaomojiZone untuk usulan kaomoji, masalah tampilan, atau pertanyaan lain.",
    h1: "Hubungi kami",
    intro: "Usulan kaomoji baru, laporan wajah yang tidak tampil dengan benar, dan masukan umum sangat kami hargai.",
    sections: [
      {
        heading: "Detail yang berguna untuk disertakan",
        list: [
          "Untuk masalah tampilan: kaomojinya, perangkat, sistem operasi, dan aplikasi yang kamu pakai, serta apa yang terlihat (kotak, tanda tanya, bagian yang hilang).",
          "Untuk usulan: kaomojinya dan kategori yang menurutmu cocok.",
        ],
      },
    ],
  },
  privacy: {
    title: "Kebijakan Privasi",
    description: "Cara KaomojiZone menangani datamu: pencarian, penyalinan, dan pembuatan kaomoji terjadi di browser, tanpa analitik atau iklan.",
    h1: "Kebijakan Privasi",
    intro: "Kebijakan ini menjelaskan informasi apa yang ditangani KaomojiZone dan bagaimana caranya. Singkatnya: apa yang kamu cari, salin, atau buat tetap ada di browsermu.",
    sections: [
      { heading: "Siapa kami", paragraphs: ["KaomojiZone (“situs”, “kami”) adalah situs web yang menyediakan kaomoji untuk disalin dan ditempel. Kamu bisa menghubungi kami lewat [halaman kontak](page:contact)."] },
      {
        heading: "Informasi yang tidak kami kumpulkan",
        paragraphs: [
          "Kami tidak mewajibkan akun dan tidak meminta nama, email, atau data pribadi lain untuk memakai situs ini. Apa yang kamu ketik di kotak pencarian, kaomoji yang kamu salin, dan wajah yang kamu buat di Pembuat Kaomoji hanya diproses di browsermu. Semua itu tidak pernah dikirim ke kami atau disimpan di server.",
          "Kami tidak memakai layanan analitik, jaringan iklan, piksel pelacak media sosial, atau fingerprinting.",
        ],
      },
      {
        heading: "Informasi yang disimpan di browsermu",
        paragraphs: ["Situs ini memakai penyimpanan lokal browser (bukan cookie) untuk hal berikut:"],
        list: [
          "Pilihan cookie dan penyimpananmu (kunci: kz-consent). Ini wajib agar kami tidak bertanya di setiap halaman. Tersimpan sampai kamu menghapus data browser atau mengubah pilihan.",
          "Hanya jika kamu mengizinkan Preferensi: kaomoji yang baru kamu salin (kunci: kz-recent, maksimal 12 item) dan pengaturan salin aman untuk Discord (kunci: kz-discord-safe).",
        ],
      },
      {
        heading: "Log server dan hosting",
        paragraphs: [
          "Seperti situs web lainnya, server yang mengirim halaman ini menerima informasi teknis yang diperlukan untuk mengirimkannya, seperti alamat IP, jenis browser, dan halaman yang diminta. Penyedia hosting kami bisa menyimpannya dalam log jangka pendek untuk keamanan dan keandalan. Kami tidak memakai log ini untuk mengidentifikasi atau memprofilkan pengunjung. [Pemilik: sebutkan penyedia hosting dan masa simpan log di sini sebelum peluncuran.]",
        ],
      },
      { heading: "Akses clipboard", paragraphs: ["Saat kamu mengklik kaomoji, situs menulis kaomoji itu ke clipboard. Situs ini tidak pernah membaca clipboard kamu."] },
      {
        heading: "Pilihan dan hakmu",
        list: [
          "Ubah atau tarik pilihan penyimpananmu kapan saja lewat “Pengaturan cookie” di footer. Menarik izin Preferensi akan menghapus daftar baru disalin dan pengaturan Discord dari browsermu.",
          "Kamu bisa menghapus semua data situs lewat pengaturan browser.",
          "Tergantung tempat tinggalmu (misalnya berdasarkan UU Pelindungan Data Pribadi di Indonesia), kamu mungkin punya hak untuk mengakses, memperbaiki, atau menghapus data pribadi. Karena kami tidak menyimpan data pribadi pengunjung, biasanya tidak ada yang perlu diambil, tapi kamu tetap bisa menghubungi kami untuk permintaan apa pun.",
        ],
      },
      { heading: "Anak-anak", paragraphs: ["Situs ini cocok untuk semua umur dan tidak dengan sengaja mengumpulkan informasi pribadi dari siapa pun, termasuk anak-anak."] },
      { heading: "Perubahan kebijakan", paragraphs: ["Jika kami menambahkan fitur yang mengubah cara data ditangani (misalnya layanan analitik), kami akan memperbarui kebijakan ini lebih dulu dan, jika diwajibkan, meminta persetujuanmu sebelum fitur itu berjalan."] },
    ],
  },
  terms: {
    title: "Syarat dan Ketentuan",
    description: "Syarat penggunaan KaomojiZone, termasuk penggunaan yang wajar, kekayaan intelektual, dan batasan.",
    h1: "Syarat dan Ketentuan",
    intro: "Dengan memakai KaomojiZone, kamu menyetujui syarat ini. Silakan dibaca, isinya singkat.",
    sections: [
      { heading: "Menggunakan situs", paragraphs: ["KaomojiZone tersedia gratis untuk penggunaan pribadi maupun komersial. Kamu boleh menyalin kaomoji dari situs ini dan memakainya di pesan, postingan, profil, desain, dan konten lainnya."] },
      {
        heading: "Penggunaan yang wajar",
        paragraphs: ["Kamu setuju untuk tidak memakai situs atau kontennya untuk:"],
        list: [
          "Mengirim spam atau melecehkan, mengancam, atau menyamar sebagai orang lain.",
          "Menghindari aturan, filter, atau moderasi platform lain.",
          "Mengganggu situs, misalnya membanjirinya dengan permintaan otomatis atau mencoba membobol keamanannya.",
          "Menerbitkan ulang perpustakaan, label, atau tulisan situs secara massal sebagai situs atau produkmu sendiri.",
        ],
      },
      { heading: "Kekayaan intelektual", paragraphs: ["Kaomoji satuan adalah ungkapan teks umum dan tidak kami klaim sebagai milik kami. Desain situs, tulisan penjelasan, label kartu, terjemahan, serta pemilihan dan penyusunan perpustakaan adalah karya kami dan dilindungi hukum yang berlaku. Mengutip sebagian kecil dengan tautan ke situs ini dipersilakan."] },
      { heading: "Kompatibilitas dan ketersediaan", paragraphs: ["Kaomoji terdiri dari karakter Unicode yang mungkin tidak tampil di semua perangkat, font, atau platform, dan bisa berubah karena format platform. Kami berusaha menjaga situs tetap tersedia dan akurat, tapi tidak menjamin situs selalu tersedia, bebas kesalahan, atau bahwa setiap kaomoji akan berfungsi di mana saja."] },
      { heading: "Tanpa jaminan dan batasan tanggung jawab", paragraphs: ["Situs ini disediakan “sebagaimana adanya” tanpa jaminan apa pun. Sejauh diizinkan hukum, kami tidak bertanggung jawab atas kerugian tidak langsung yang timbul dari penggunaan situs, termasuk bagaimana kaomoji yang ditempel ditampilkan atau ditafsirkan orang lain. Beberapa yurisdiksi tidak mengizinkan batasan tertentu, jadi sebagian bagian ini mungkin tidak berlaku untukmu. [Pemilik: minta bagian ini ditinjau sesuai yurisdiksimu.]"] },
      { heading: "Platform pihak ketiga", paragraphs: ["Penyebutan Discord, Instagram, TikTok, X, WhatsApp, dan layanan lain hanya untuk penjelasan. Kami tidak berafiliasi atau didukung oleh mereka. Penggunaan layanan tersebut tunduk pada syarat masing-masing."] },
      { heading: "Perubahan", paragraphs: ["Kami bisa memperbarui syarat ini. Tanggal di bagian atas menunjukkan versi terbaru. Tetap memakai situs berarti kamu menerima syarat yang diperbarui."] },
    ],
  },
  cookies: {
    title: "Kebijakan Cookie",
    description: "KaomojiZone tidak memakai cookie pelacak. Halaman ini menjelaskan sedikit penyimpanan browser yang kami pakai dan cara mengaturnya.",
    h1: "Kebijakan Cookie",
    intro: "KaomojiZone tidak memasang cookie pelacak atau iklan. Kami memakai penyimpanan lokal browsermu untuk beberapa hal kecil, seperti dijelaskan di bawah.",
    sections: [
      {
        heading: "Apa yang kami simpan",
        list: [
          "Wajib: kz-consent menyimpan pilihan cookie dan penyimpananmu agar banner tidak muncul di setiap halaman. Tidak bisa dimatikan, karena tanpanya kami tidak bisa mengingat pilihanmu.",
          "Preferensi (opsional, nonaktif secara default): kz-recent menyimpan hingga 12 kaomoji yang baru disalin, dan kz-discord-safe menyimpan apakah salin aman untuk Discord aktif.",
          "Analitik: tidak dipakai.",
          "Pemasaran: tidak dipakai.",
        ],
      },
      { heading: "Cookie vs penyimpanan lokal", paragraphs: ["Cookie dikirim ke server setiap kali halaman dimuat. Penyimpanan lokal tetap di browsermu dan tidak pernah dikirim ke kami. Kami hanya memakai penyimpanan lokal. Undang-undang privasi umumnya memperlakukan keduanya sama, jadi kami meminta persetujuanmu sebelum menyimpan apa pun yang opsional."] },
      { heading: "Mengubah pilihanmu", paragraphs: ["Gunakan “Pengaturan cookie” di footer halaman mana pun untuk mengubah pilihan. Jika kamu menonaktifkan Preferensi, daftar baru disalin dan pengaturan Discord langsung dihapus. Kamu juga bisa menghapus data situs lewat pengaturan browser kapan saja."] },
      { heading: "Jika kami menambah layanan nanti", paragraphs: ["Jika suatu saat kami menambahkan analitik atau layanan opsional lain, layanan itu akan dicantumkan di sini dan tetap nonaktif sampai kamu menyetujuinya."] },
    ],
  },
  disclaimer: {
    title: "Penafian",
    description: "Informasi penting tentang tampilan, kompatibilitas, aksesibilitas, dan format kaomoji di KaomojiZone.",
    h1: "Penafian",
    intro: "Harap perhatikan batasan berikut saat memakai kaomoji dari situs ini.",
    sections: [
      { heading: "Tampilan dan kompatibilitas", paragraphs: ["Kaomoji terdiri dari karakter Unicode dari berbagai aksara dan kumpulan simbol. Tampil atau tidaknya kaomoji dengan benar tergantung font yang terpasang di perangkat dan aplikasi yang dipakai. Beberapa kaomoji bisa tampil sebagai kotak, tanda tanya, atau dengan aksen yang bergeser di sebagian perangkat."] },
      { heading: "Format platform", paragraphs: ["Beberapa platform mengubah teks secara otomatis. Misalnya, Discord menafsirkan \\ _ * ~ ` | sebagai karakter format. Salin aman untuk Discord meng-escape karakter ini, tapi platform lain bisa punya aturan, batas karakter, atau filter sendiri."] },
      { heading: "Aksesibilitas", paragraphs: ["Pembaca layar bisa membaca kaomoji simbol demi simbol atau melewatinya. Jangan hanya mengandalkan kaomoji untuk menyampaikan informasi penting."] },
      { heading: "Makna", paragraphs: ["Label dan penjelasan di situs ini menggambarkan cara kaomoji umumnya dipakai. Makna bisa berbeda antar komunitas dan konteks, jadi pembaca bisa menafsirkan kaomoji berbeda dari maksudmu."] },
      { heading: "Tanpa afiliasi", paragraphs: ["KaomojiZone adalah situs independen. Situs ini tidak berafiliasi, disponsori, atau didukung oleh Discord, Instagram, TikTok, X, WhatsApp, Messenger, Zalo, Konsorsium Unicode, atau perusahaan maupun organisasi lain yang disebut di situs ini. Semua merek dagang milik pemiliknya masing-masing."] },
    ],
  },
  faq: {
    title: "Tanya Jawab Kaomoji: Pertanyaan Umum Terjawab",
    description: "Jawaban atas pertanyaan umum tentang kaomoji: apa itu kaomoji, cara mengetik dan menyalin, kenapa tampil kotak, dan cara memakainya di Discord.",
    h1: "Tanya Jawab Kaomoji",
    intro: "Jawaban singkat untuk pertanyaan yang paling sering diajukan tentang kaomoji dan situs ini.",
    groups: [
      {
        heading: "Tentang kaomoji",
        faqs: [
          { q: "Apa itu kaomoji?", a: "Kaomoji adalah wajah dari karakter teks yang dibaca tegak, seperti (◕‿◕) atau (╥﹏╥). Kata ini berasal dari bahasa Jepang: kao berarti wajah dan moji berarti karakter." },
          { q: "Bagaimana cara mengucapkan kaomoji?", a: "Kira-kira “ka-o-mo-ji”, dengan empat suku kata pendek." },
          { q: "Apakah kaomoji sama dengan emotikon?", a: "Kaomoji adalah salah satu jenis emotikon. Emotikon Barat seperti :) dibaca miring, sedangkan kaomoji dibaca tegak dan biasanya memakai karakter yang lebih beragam." },
          { q: "Kenapa kaomoji memakai karakter dari banyak bahasa?", a: "Pembuat kaomoji memilih karakter berdasarkan bentuknya, bukan artinya. ಠ (Kannada) jadi mata tajam, ω (Yunani) jadi mulut kucing, dan ฅ (Thai) jadi kaki kucing." },
        ],
      },
      {
        heading: "Menyalin dan mengetik",
        faqs: [
          { q: "Bagaimana cara menyalin kaomoji dari situs ini?", a: "Ketuk atau klik. Langsung tersalin dan pesan “Tersalin” muncul sebagai konfirmasi. Pengguna keyboard bisa menekan Tab untuk ke kaomoji, lalu Enter atau Spasi." },
          { q: "Penyalinan tidak berhasil. Apa yang bisa saya lakukan?", a: "Beberapa browser memblokir akses clipboard di mode tertentu. Jika salin otomatis gagal, pilih teks kaomoji secara manual lalu salin dengan perintah salin biasa di perangkatmu." },
          { q: "Bisakah mengetik kaomoji tanpa menyalin?", a: "Bisa. Atur pintasan penggantian teks di HP atau komputer, pakai saran kaomoji di keyboard Jepang, atau di Windows tekan tombol Windows + . (titik) lalu buka tab kaomoji." },
        ],
      },
      {
        heading: "Masalah tampilan",
        faqs: [
          { q: "Kenapa saya melihat kotak, bukan kaomoji?", a: "Perangkatmu tidak punya font yang memuat satu atau lebih karakternya. Memperbarui perangkat atau aplikasi bisa membantu, atau pilih kaomoji dengan karakter yang lebih umum." },
          { q: "Di saya tampil normal, tapi teman saya melihat kotak. Kenapa?", a: "Setiap perangkat menggambar teks dengan font miliknya sendiri. Perangkatmu punya karakter yang dibutuhkan, perangkat temanmu tidak." },
          { q: "Kenapa kaomoji terlihat sedikit berbeda di tiap aplikasi?", a: "Font berbeda-beda, jadi lebar dan bentuk karakter sedikit berubah. Beberapa simbol, seperti ❤, juga bisa tampil sebagai emoji berwarna di aplikasi tertentu." },
        ],
      },
      {
        heading: "Discord dan platform lain",
        faqs: [
          { q: "Apa fungsi salin aman untuk Discord?", a: "Fitur ini menambahkan garis miring terbalik sebelum \\ _ * ~ ` dan |, yang kalau tidak akan dianggap format oleh Discord. Hasilnya, kaomoji tampil persis seperti seharusnya." },
          { q: "Apakah salin aman untuk Discord perlu selalu aktif?", a: "Hanya saat menempel ke Discord atau aplikasi lain berbasis Markdown. Di kebanyakan aplikasi lain, garis miring tambahan akan terlihat." },
          { q: "Bisakah kaomoji dipakai di nama pengguna?", a: "Sering bisa, tapi banyak platform membatasi nama pengguna hanya huruf dan angka atau membatasi karakter khusus. Nama tampilan biasanya lebih longgar daripada nama pengguna." },
        ],
      },
    ],
  },
};
