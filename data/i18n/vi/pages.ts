// DRAFT: requires native-speaker and legal review before launch.
import type { LocaleBundle, MakerContent } from "@/types/i18n";

export const maker: MakerContent = {
  title: "Tạo kaomoji: tự làm biểu tượng cảm xúc Nhật Bản",
  description: "Tự tạo kaomoji bằng cách chọn tay, má, mắt, miệng và đồ trang trí. Xem trước trực tiếp, chọn ngẫu nhiên và sao chép một chạm, kể cả sao chép an toàn cho Discord. Miễn phí, chạy trong trình duyệt.",
  h1: "Tạo kaomoji",
  intro: "Chọn từng bộ phận, xem gương mặt dần thành hình và sao chép chỉ một chạm. Mọi thứ chạy trong trình duyệt của bạn.",
  sections: [
    {
      heading: "Công cụ Tạo kaomoji hoạt động thế nào",
      list: [
        "Chọn từng bộ phận trong danh sách: tay, viền mặt, má, mắt, miệng và đồ trang trí.",
        "Bản xem trước cập nhật ngay lập tức. Thoải mái phối bên trái và bên phải khác nhau để có gương mặt lệch hoặc nháy mắt.",
        "Bấm Ngẫu nhiên để có gương mặt cân đối, rồi chỉnh bất kỳ bộ phận nào bạn thích.",
        "Bấm Sao chép, hoặc Sao chép cho Discord nếu bạn định dán vào Discord.",
      ],
    },
    {
      heading: "Mẹo tạo kaomoji đẹp",
      list: [
        "Giữ tâm trạng đồng nhất: mắt dịu (ᵔ, ◕) đi với miệng dịu (‿, ω), mắt sắc (ಠ, ò ó) đi với miệng dữ (益, 皿).",
        "Dùng má để thể hiện cảm xúc: ˶ hoặc 〃 cho đỏ mặt, ; cho nước mắt hoặc mồ hôi, ╬ cho giận dữ.",
        "Tay kể câu chuyện: ヽ ﾉ là reo hò, ┐ ┌ là nhún vai, ⊂ ⊃ là ôm, còn ʚ ɞ biến bất kỳ gương mặt nào thành thiên thần.",
        "Giữ ngắn gọn nếu dùng cho tên người dùng hoặc tiểu sử có giới hạn ký tự.",
      ],
      examples: ["ヽ(◕‿◕)ﾉ", "ʚ(˶ᵔωᵔ˶)ɞ", "┐(￣ー￣)┌"],
    },
    {
      heading: "Kaomoji của tôi có hiển thị ở mọi nơi không?",
      paragraphs: [
        "Điều đó tùy vào ký tự bạn chọn. Ký tự cơ bản như ( ) ^ _ o và ‿ hiển thị gần như mọi nơi. Bộ phận mượn từ hệ chữ ít phổ biến, như đôi cánh ଘ ଓ hay đôi tai ૮ ა, có thể hiện ô vuông trên thiết bị cũ. Để tương thích tối đa, hãy chọn bộ phận đơn giản.",
      ],
    },
    {
      heading: "Cần cảm hứng?",
      paragraphs: [
        "Xem các gương mặt có sẵn để lấy ý tưởng: kaomoji [dễ thương](page:cute), [mèo](page:cat), [thỏ](page:bunny), [giận dữ](page:angry), [nhún vai](page:shrug) và [thiên thần](page:angel) cho thấy các bộ phận kết hợp với nhau thế nào. Hoặc quay lại [thư viện kaomoji đầy đủ](page:home).",
      ],
    },
  ],
  faqs: [
    { q: "Công cụ Tạo kaomoji có miễn phí không?", a: "Có. Miễn phí, không cần tài khoản và chạy hoàn toàn trong trình duyệt của bạn." },
    { q: "Các bạn có lưu kaomoji tôi tạo không?", a: "Không. Tác phẩm của bạn chỉ tồn tại trong tab trình duyệt và trong bộ nhớ tạm khi bạn sao chép. Không có gì được gửi cho chúng tôi." },
    { q: "Tôi có thể dùng kaomoji mình tạo ở bất cứ đâu không?", a: "Được. Chúng là văn bản thông thường nên dán được ở mọi nơi nhận chữ. Tuy nhiên một số ứng dụng có thể hạn chế ký tự lạ." },
  ],
};

export const pages: LocaleBundle["pages"] = {
  about: {
    title: "Giới thiệu KaomojiZone",
    description: "KaomojiZone là gì, thư viện kaomoji được xây dựng thế nào và trang web bảo vệ quyền riêng tư của bạn ra sao.",
    h1: "Giới thiệu KaomojiZone",
    intro: "KaomojiZone là thư viện miễn phí, đơn giản gồm các gương mặt Nhật Bản bằng chữ (kaomoji) mà bạn có thể tìm, duyệt và sao chép chỉ với một chạm.",
    sections: [
      {
        heading: "Trang web này làm gì",
        paragraphs: [
          "Chúng tôi tập hợp 828 kaomoji trong 18 danh mục, sắp xếp theo cảm xúc, động vật và hành động, mỗi cái có một nhãn mô tả ngắn. Bạn có thể tìm kiếm, lọc, sao chép một chạm, sao chép ở định dạng an toàn cho Discord và tự tạo gương mặt trong công cụ [Tạo kaomoji](page:maker).",
          "Trang web có tiếng Anh, tiếng Tây Ban Nha, tiếng Indonesia, tiếng Bồ Đào Nha (Brazil) và tiếng Việt. Kaomoji giống nhau ở mọi ngôn ngữ. Nhãn, từ khóa tìm kiếm và phần giải thích được dịch.",
        ],
      },
      {
        heading: "Thư viện được xây dựng thế nào",
        paragraphs: [
          "Kaomoji là những biểu cảm văn bản phổ biến được chia sẻ rộng rãi trên internet. Thư viện của chúng tôi là bộ sưu tập được chọn lọc: mỗi kaomoji chỉ xuất hiện một lần, nằm trong danh mục phù hợp nhất và có nhãn riêng dễ đọc. Chúng tôi kiểm tra để mỗi kaomoji đều gồm các ký tự Unicode chuẩn.",
          "Chúng tôi không công bố bảng xếp hạng độ phổ biến hay số lượt “sao chép nhiều nhất”, vì chúng tôi không theo dõi những gì khách truy cập sao chép.",
        ],
      },
      {
        heading: "Cách chúng tôi bảo vệ quyền riêng tư",
        paragraphs: [
          "Tìm kiếm, sao chép và công cụ Tạo kaomoji đều chạy bên trong trình duyệt của bạn. Chúng tôi không dùng công cụ phân tích, quảng cáo hay mã theo dõi. Nếu bạn cho phép, các kaomoji vừa sao chép và cài đặt sao chép an toàn cho Discord được ghi nhớ trong bộ nhớ trình duyệt của chính bạn, không ở nơi nào khác. Xem [Chính sách bảo mật](page:privacy) để biết chi tiết.",
        ],
      },
      {
        heading: "Những giới hạn thật thà",
        list: [
          "Một số kaomoji dùng ký tự mà thiết bị cũ hoặc một vài ứng dụng không hiển thị được, nên có thể hiện thành ô vuông.",
          "Trình đọc màn hình thường đọc kaomoji từng ký hiệu một, vì vậy mỗi kaomoji trên trang này đều có nhãn đọc riêng.",
          "Các nền tảng như Discord có thể làm thay đổi kaomoji do định dạng văn bản. Sao chép an toàn cho Discord giúp xử lý việc này.",
        ],
      },
      { heading: "Liên hệ", paragraphs: ["Bạn thấy kaomoji hiển thị sai, hay muốn gợi ý kaomoji mới? Hãy ghé [trang liên hệ](page:contact)."] },
    ],
  },
  contact: {
    title: "Liên hệ KaomojiZone",
    description: "Cách liên hệ KaomojiZone để gợi ý kaomoji, báo lỗi hiển thị hoặc hỏi đáp khác.",
    h1: "Liên hệ",
    intro: "Chúng tôi luôn hoan nghênh gợi ý kaomoji mới, báo cáo gương mặt hiển thị sai và mọi góp ý.",
    sections: [
      {
        heading: "Thông tin hữu ích nên kèm theo",
        list: [
          "Với lỗi hiển thị: kaomoji đó, thiết bị, hệ điều hành và ứng dụng của bạn, và bạn thấy gì thay vào đó (ô vuông, dấu chấm hỏi, thiếu bộ phận).",
          "Với gợi ý: chính kaomoji đó và danh mục bạn nghĩ nó phù hợp.",
        ],
      },
    ],
  },
  privacy: {
    title: "Chính sách bảo mật",
    description: "Cách KaomojiZone xử lý dữ liệu của bạn: tìm kiếm, sao chép và tạo kaomoji đều diễn ra trong trình duyệt, không có phân tích hay quảng cáo.",
    h1: "Chính sách bảo mật",
    intro: "Chính sách này giải thích KaomojiZone xử lý thông tin gì và như thế nào. Tóm lại: những gì bạn tìm, sao chép hoặc tạo đều ở lại trong trình duyệt của bạn.",
    sections: [
      { heading: "Chúng tôi là ai", paragraphs: ["KaomojiZone (“trang web”, “chúng tôi”) là trang web cung cấp kaomoji để sao chép và dán. Bạn có thể liên hệ qua [trang liên hệ](page:contact)."] },
      {
        heading: "Thông tin chúng tôi không thu thập",
        paragraphs: [
          "Chúng tôi không yêu cầu tài khoản và không hỏi tên, email hay thông tin cá nhân nào khác để bạn dùng trang. Những gì bạn gõ vào ô tìm kiếm, các kaomoji bạn sao chép và gương mặt bạn tạo trong công cụ Tạo kaomoji chỉ được xử lý trong trình duyệt. Chúng không bao giờ được gửi cho chúng tôi hay lưu trên máy chủ.",
          "Chúng tôi không dùng dịch vụ phân tích, mạng quảng cáo, pixel theo dõi mạng xã hội hay kỹ thuật lấy dấu vân tay trình duyệt.",
        ],
      },
      {
        heading: "Thông tin lưu trong trình duyệt của bạn",
        paragraphs: ["Trang web dùng bộ nhớ cục bộ của trình duyệt (không phải cookie) cho các việc sau:"],
        list: [
          "Lựa chọn cookie và lưu trữ của bạn (khóa: kz-consent). Đây là mục cần thiết để chúng tôi không hỏi lại ở mọi trang. Nó được giữ cho đến khi bạn xóa dữ liệu trình duyệt hoặc đổi lựa chọn.",
          "Chỉ khi bạn cho phép Tùy chọn: các kaomoji vừa sao chép (khóa: kz-recent, tối đa 12 mục) và cài đặt sao chép an toàn cho Discord (khóa: kz-discord-safe).",
        ],
      },
      {
        heading: "Nhật ký máy chủ và dịch vụ lưu trữ",
        paragraphs: [
          "Như mọi trang web, máy chủ gửi các trang này nhận được thông tin kỹ thuật cần thiết để gửi trang cho bạn, như địa chỉ IP, loại trình duyệt và trang được yêu cầu. Nhà cung cấp dịch vụ lưu trữ có thể giữ chúng trong nhật ký ngắn hạn vì lý do bảo mật và độ ổn định. Chúng tôi không dùng nhật ký này để nhận dạng hay lập hồ sơ khách truy cập. [Chủ sở hữu: ghi rõ nhà cung cấp lưu trữ và thời gian lưu nhật ký tại đây trước khi ra mắt.]",
        ],
      },
      { heading: "Truy cập bộ nhớ tạm", paragraphs: ["Khi bạn bấm vào một kaomoji, trang web ghi kaomoji đó vào bộ nhớ tạm (clipboard). Trang web không bao giờ đọc bộ nhớ tạm của bạn."] },
      {
        heading: "Lựa chọn và quyền của bạn",
        list: [
          "Thay đổi hoặc rút lại lựa chọn lưu trữ bất cứ lúc nào qua “Cài đặt cookie” ở chân trang. Rút lại Tùy chọn sẽ xóa danh sách vừa sao chép và cài đặt Discord khỏi trình duyệt của bạn.",
          "Bạn có thể xóa toàn bộ dữ liệu của trang trong cài đặt trình duyệt.",
          "Tùy nơi bạn sống (ví dụ theo quy định bảo vệ dữ liệu cá nhân tại Việt Nam), bạn có thể có quyền truy cập, chỉnh sửa hoặc xóa dữ liệu cá nhân. Vì chúng tôi không lưu dữ liệu cá nhân của khách truy cập nên thường không có gì để truy xuất, nhưng bạn vẫn có thể liên hệ với bất kỳ yêu cầu nào.",
        ],
      },
      { heading: "Trẻ em", paragraphs: ["Trang web phù hợp với mọi lứa tuổi và không cố ý thu thập thông tin cá nhân của bất kỳ ai, kể cả trẻ em."] },
      { heading: "Thay đổi chính sách", paragraphs: ["Nếu chúng tôi thêm tính năng làm thay đổi cách xử lý dữ liệu (ví dụ dịch vụ phân tích), chúng tôi sẽ cập nhật chính sách này trước và, khi cần, xin sự đồng ý của bạn trước khi tính năng đó hoạt động."] },
    ],
  },
  terms: {
    title: "Điều khoản sử dụng",
    description: "Điều khoản sử dụng KaomojiZone, gồm cách sử dụng hợp lệ, sở hữu trí tuệ và các giới hạn.",
    h1: "Điều khoản sử dụng",
    intro: "Khi dùng KaomojiZone, bạn đồng ý với các điều khoản này. Hãy đọc nhé, chúng khá ngắn.",
    sections: [
      { heading: "Sử dụng trang web", paragraphs: ["KaomojiZone được cung cấp miễn phí cho mục đích cá nhân và thương mại. Bạn có thể sao chép kaomoji từ trang này và dùng trong tin nhắn, bài đăng, hồ sơ, thiết kế và nội dung khác."] },
      {
        heading: "Sử dụng hợp lệ",
        paragraphs: ["Bạn đồng ý không dùng trang web hoặc nội dung của nó để:"],
        list: [
          "Gửi thư rác, quấy rối, đe dọa hoặc mạo danh người khác.",
          "Lách luật lệ, bộ lọc hoặc sự kiểm duyệt của nền tảng khác.",
          "Gây gián đoạn trang web, ví dụ làm quá tải bằng yêu cầu tự động hoặc cố phá vỡ bảo mật.",
          "Đăng lại hàng loạt thư viện, nhãn hoặc nội dung của trang như trang web hay sản phẩm của riêng bạn.",
        ],
      },
      { heading: "Sở hữu trí tuệ", paragraphs: ["Từng kaomoji riêng lẻ là biểu cảm văn bản phổ biến và chúng tôi không nhận là tài sản của mình. Thiết kế trang, phần giải thích, nhãn thẻ, bản dịch, cũng như việc chọn lọc và sắp xếp thư viện là sản phẩm của chúng tôi và được pháp luật hiện hành bảo vệ. Bạn được hoan nghênh trích dẫn một phần nhỏ kèm liên kết về trang."] },
      { heading: "Tương thích và tính sẵn sàng", paragraphs: ["Kaomoji gồm các ký tự Unicode có thể không hiển thị trên mọi thiết bị, phông chữ hay nền tảng, và có thể bị thay đổi bởi định dạng của nền tảng. Chúng tôi cố gắng giữ trang luôn hoạt động và chính xác, nhưng không đảm bảo trang luôn sẵn sàng, không có lỗi hay mọi kaomoji đều dùng được ở mọi nơi."] },
      { heading: "Không bảo đảm và giới hạn trách nhiệm", paragraphs: ["Trang web được cung cấp “nguyên trạng”, không kèm bất kỳ bảo đảm nào. Trong phạm vi pháp luật cho phép, chúng tôi không chịu trách nhiệm cho thiệt hại gián tiếp phát sinh từ việc sử dụng trang, kể cả cách một kaomoji được dán hiển thị hay được người khác hiểu. Một số khu vực pháp lý không cho phép một số giới hạn nhất định, nên một phần mục này có thể không áp dụng cho bạn. [Chủ sở hữu: cần rà soát mục này theo khu vực pháp lý của bạn.]"] },
      { heading: "Nền tảng bên thứ ba", paragraphs: ["Việc nhắc đến Discord, Instagram, TikTok, X, WhatsApp, Zalo và các dịch vụ khác chỉ nhằm giải thích. Chúng tôi không liên kết hay được các dịch vụ đó bảo trợ. Việc bạn dùng các dịch vụ đó tuân theo điều khoản riêng của họ."] },
      { heading: "Thay đổi", paragraphs: ["Chúng tôi có thể cập nhật các điều khoản này. Ngày ở đầu trang cho biết phiên bản mới nhất. Tiếp tục dùng trang nghĩa là bạn chấp nhận điều khoản đã cập nhật."] },
    ],
  },
  cookies: {
    title: "Chính sách cookie",
    description: "KaomojiZone không dùng cookie theo dõi. Trang này giải thích phần lưu trữ trình duyệt nhỏ mà chúng tôi dùng và cách kiểm soát nó.",
    h1: "Chính sách cookie",
    intro: "KaomojiZone không đặt cookie theo dõi hay quảng cáo. Chúng tôi dùng bộ nhớ cục bộ của trình duyệt cho vài việc nhỏ, được giải thích dưới đây.",
    sections: [
      {
        heading: "Chúng tôi lưu gì",
        list: [
          "Cần thiết: kz-consent lưu lựa chọn cookie và lưu trữ của bạn để thông báo không hiện ở mọi trang. Mục này không thể tắt, vì thiếu nó chúng tôi không thể nhớ lựa chọn của bạn.",
          "Tùy chọn (không bắt buộc, mặc định tắt): kz-recent lưu tối đa 12 kaomoji vừa sao chép, và kz-discord-safe lưu việc sao chép an toàn cho Discord có đang bật hay không.",
          "Phân tích: không sử dụng.",
          "Tiếp thị: không sử dụng.",
        ],
      },
      { heading: "Cookie và bộ nhớ cục bộ", paragraphs: ["Cookie được gửi lên máy chủ mỗi lần tải trang. Bộ nhớ cục bộ ở lại trong trình duyệt và không bao giờ được gửi cho chúng tôi. Chúng tôi chỉ dùng bộ nhớ cục bộ. Luật về quyền riêng tư thường đối xử với cả hai như nhau, vì vậy chúng tôi xin sự đồng ý của bạn trước khi lưu bất cứ thứ gì không bắt buộc."] },
      { heading: "Thay đổi lựa chọn", paragraphs: ["Dùng “Cài đặt cookie” ở chân bất kỳ trang nào để đổi lựa chọn. Nếu bạn tắt Tùy chọn, danh sách vừa sao chép và cài đặt Discord sẽ bị xóa ngay. Bạn cũng có thể xóa dữ liệu của trang trong cài đặt trình duyệt bất cứ lúc nào."] },
      { heading: "Nếu sau này chúng tôi thêm dịch vụ", paragraphs: ["Nếu một ngày chúng tôi thêm công cụ phân tích hay dịch vụ tùy chọn khác, chúng sẽ được liệt kê ở đây và luôn tắt cho đến khi bạn đồng ý."] },
    ],
  },
  disclaimer: {
    title: "Tuyên bố miễn trừ",
    description: "Thông tin quan trọng về hiển thị, tương thích, khả năng tiếp cận và định dạng kaomoji trên KaomojiZone.",
    h1: "Tuyên bố miễn trừ",
    intro: "Hãy lưu ý các giới hạn sau khi dùng kaomoji từ trang này.",
    sections: [
      { heading: "Hiển thị và tương thích", paragraphs: ["Kaomoji được tạo từ các ký tự Unicode lấy từ nhiều hệ chữ và bộ ký hiệu. Kaomoji hiển thị đúng hay không phụ thuộc vào phông chữ cài trên thiết bị hiển thị và ứng dụng đang dùng. Một số kaomoji có thể hiện thành ô vuông, dấu chấm hỏi hoặc có dấu bị lệch trên một số thiết bị."] },
      { heading: "Định dạng của nền tảng", paragraphs: ["Một số nền tảng tự động thay đổi văn bản. Ví dụ, Discord hiểu \\ _ * ~ ` | là ký tự định dạng. Sao chép an toàn cho Discord sẽ thoát các ký tự này, nhưng nền tảng khác có thể áp dụng quy tắc, giới hạn ký tự hay bộ lọc riêng."] },
      { heading: "Khả năng tiếp cận", paragraphs: ["Trình đọc màn hình có thể đọc kaomoji từng ký hiệu một hoặc bỏ qua. Đừng chỉ dựa vào kaomoji để truyền đạt thông tin quan trọng."] },
      { heading: "Ý nghĩa", paragraphs: ["Nhãn và phần giải thích trên trang này mô tả cách kaomoji thường được dùng. Ý nghĩa có thể khác nhau giữa các cộng đồng và ngữ cảnh, nên người đọc có thể hiểu kaomoji khác với ý bạn."] },
      { heading: "Không liên kết", paragraphs: ["KaomojiZone là trang web độc lập. Trang không liên kết, không được tài trợ hay bảo trợ bởi Discord, Instagram, TikTok, X, WhatsApp, Messenger, Zalo, Hiệp hội Unicode hay bất kỳ công ty hoặc tổ chức nào được nhắc đến trên trang. Mọi nhãn hiệu thuộc về chủ sở hữu của chúng."] },
    ],
  },
  faq: {
    title: "Câu hỏi thường gặp về kaomoji",
    description: "Giải đáp các câu hỏi thường gặp về kaomoji: kaomoji là gì, cách gõ và sao chép, vì sao hiện ô vuông và cách dùng trên Discord.",
    h1: "Câu hỏi thường gặp về kaomoji",
    intro: "Câu trả lời nhanh cho những câu hỏi phổ biến nhất về kaomoji và trang web này.",
    groups: [
      {
        heading: "Về kaomoji",
        faqs: [
          { q: "Kaomoji là gì?", a: "Kaomoji là gương mặt được tạo từ ký tự văn bản và đọc thẳng, như (◕‿◕) hoặc (╥﹏╥). Đây là từ tiếng Nhật: kao nghĩa là mặt và moji nghĩa là ký tự." },
          { q: "Kaomoji phát âm thế nào?", a: "Khoảng “ca-ô-mô-di”, gồm bốn âm tiết ngắn." },
          { q: "Kaomoji có giống biểu tượng cảm xúc không?", a: "Kaomoji là một loại biểu tượng cảm xúc. Biểu tượng phương Tây như :) đọc nghiêng, còn kaomoji đọc thẳng và thường dùng nhiều loại ký tự hơn." },
          { q: "Vì sao kaomoji dùng ký tự từ nhiều ngôn ngữ?", a: "Người tạo kaomoji chọn ký tự theo hình dạng, không theo nghĩa. ಠ (Kannada) thành con mắt nghiêm khắc, ω (Hy Lạp) thành miệng mèo, còn ฅ (Thái) thành bàn chân mèo." },
        ],
      },
      {
        heading: "Sao chép và gõ",
        faqs: [
          { q: "Làm sao sao chép kaomoji từ trang này?", a: "Chạm hoặc bấm vào nó. Kaomoji được sao chép ngay và có thông báo “Đã sao chép”. Người dùng bàn phím có thể nhấn Tab để đến kaomoji, rồi nhấn Enter hoặc phím cách." },
          { q: "Sao chép không được. Tôi nên làm gì?", a: "Một số trình duyệt chặn quyền truy cập bộ nhớ tạm ở một số chế độ. Nếu sao chép tự động thất bại, hãy chọn kaomoji thủ công và sao chép bằng lệnh sao chép thông thường của thiết bị." },
          { q: "Có thể gõ kaomoji mà không cần sao chép không?", a: "Có. Hãy cài phím tắt thay thế văn bản trên điện thoại hoặc máy tính, dùng gợi ý kaomoji của bàn phím tiếng Nhật, hoặc trên Windows nhấn phím Windows + . (dấu chấm) rồi mở thẻ kaomoji." },
        ],
      },
      {
        heading: "Lỗi hiển thị",
        faqs: [
          { q: "Vì sao tôi thấy ô vuông thay vì kaomoji?", a: "Thiết bị của bạn không có phông chứa một hoặc nhiều ký tự của nó. Cập nhật thiết bị hoặc ứng dụng có thể giúp ích, hoặc chọn kaomoji dùng ký tự phổ biến hơn." },
          { q: "Trên máy tôi hiển thị bình thường nhưng bạn tôi thấy ô vuông. Vì sao?", a: "Mỗi thiết bị vẽ chữ bằng phông riêng. Thiết bị của bạn có đủ ký tự cần thiết, còn của bạn bè thì không." },
          { q: "Vì sao kaomoji trông hơi khác ở mỗi ứng dụng?", a: "Phông chữ khác nhau nên độ rộng và hình dạng ký tự thay đổi đôi chút. Một số ký hiệu, như ❤, còn có thể hiển thị thành emoji màu ở một vài ứng dụng." },
        ],
      },
      {
        heading: "Discord và các nền tảng khác",
        faqs: [
          { q: "Sao chép an toàn cho Discord làm gì?", a: "Tính năng này thêm dấu gạch chéo ngược trước \\ _ * ~ ` và |, những ký tự mà Discord sẽ hiểu là định dạng. Nhờ đó kaomoji hiển thị đúng như mong muốn." },
          { q: "Có nên bật sao chép an toàn cho Discord mọi lúc không?", a: "Chỉ khi dán vào Discord hoặc ứng dụng dùng Markdown khác. Ở hầu hết ứng dụng còn lại, các dấu gạch chéo thừa sẽ hiện ra." },
          { q: "Có thể dùng kaomoji trong tên người dùng không?", a: "Thường là được, nhưng nhiều nền tảng giới hạn tên người dùng chỉ gồm chữ và số hoặc hạn chế ký tự đặc biệt. Tên hiển thị thường thoải mái hơn tên người dùng." },
        ],
      },
    ],
  },
};
