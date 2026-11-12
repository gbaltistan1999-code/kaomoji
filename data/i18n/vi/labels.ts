// Nhãn tiếng Việt, theo đúng thứ tự Phụ lục A.
// DRAFT: requires native-speaker review before launch.
import { labelsFromLists, type LabelLists } from "../label-lists";

const lists: LabelLists = {
  cute: [
    // kawaii
    "Nụ cười kawaii kinh điển", "Cười cùng bông hoa", "Nụ cười ngọt ngào nở hoa", "Cô bé hoa mắt sáng", "Mặt vui ửng hồng",
    "Nụ cười dịu dàng", "Nụ cười mũm mĩm", "Nụ cười mũm mĩm lấp lánh", "Nụ cười nhỏ lễ phép", "Nụ cười kawaii thật tươi",
    "Nụ cười ngọt đơn giản", "Cười hiền nhắm mắt", "Hoa mắt tí hon", "Hài lòng và ấm áp", "Thích thú mắt tròn xoe",
    "Đôi mắt vui lấp lánh", "Má hồng giữa hoa", "Nụ cười hoa ngọt ngào", "Nụ cười hoa dịu dàng", "Nụ cười hoa rạng rỡ",
    "Nụ cười đội vương miện hoa", "Nụ cười giữa nụ hoa", "Nụ cười vui ngọt ngào", "Nụ cười tươi nhẹ nhàng", "Nụ cười tròn nhỏ",
    "Nụ cười kawaii tỏa sáng", "Mặt hoa buồn ngủ", "Nụ cười ửng hồng mắt to", "Nhắm mắt bình yên", "Nhắm mắt mơ màng",
    "Nụ cười tí xíu", "Mặt vui đơn giản", "Nụ cười có tia sáng", "Nụ cười vui nho nhỏ", "Nụ cười thư thái ngái ngủ",
    "Mặt bình thản mãn nguyện",
    // omega
    "Mặt nhỏ mềm mại", "Vẫy tay mềm mại", "Mặt omega kinh điển", "Omega dịu dàng ửng hồng", "Cuộn tròn buồn ngủ",
    "Omega nhút nhát", "Chào vui vẻ", "Nụ cười lơ mơ", "Omega sung sướng", "Phụng phịu mềm mềm",
    "Mặt chuột hamster", "Mặt dịu dàng mãn nguyện", "Mặt nhỏ hài lòng", "Đáng yêu mũi nút áo", "Nụ cười tai nhỏ",
    // excited
    "Nháy mắt lấp lánh", "Mắt lấp lánh", "Đáng yêu sững sờ", "Nhắm chặt mắt", "Mặt cười khúc khích",
    "Nụ cười háo hức", "Nụ cười rạng rỡ", "Ngạc nhiên vui vẻ", "Đáng yêu cổ vũ", "Khúc khích sủi bọt",
    "Lấp lánh quyết tâm", "Đáng yêu chu môi", "Vui và ấm áp", "Nụ cười nhỏ lịch sự", "Mặt thèm ăn",
    "Liếm môi", "Reo lên vui sướng", "Khúc khích tít mắt", "Đáng yêu thích thú", "Mắt bị lóa",
    "Mắt long lanh", "Nụ cười vui thật tươi", "Nụ cười hiền hòa", "Nụ cười êm dịu", "Nụ cười ló ra",
    "Đáng yêu tự tin", "Đáng yêu giơ nắm tay", "Nụ cười nhỏ gọn gàng", "Hét lên vì vui", "Reo vui",
    "Mặt chim non",
  ],
  happy: [
    // smile
    "Nụ cười vui thật to ^▽^", "Nụ cười chữ v", "Mặt vui đơn sơ", "Nụ cười vui há miệng", "Nụ cười omega mãn nguyện",
    "Vui há miệng", "Nụ cười hài lòng", "Nụ cười thoải mái", "Mặt vui chu môi", "Nụ cười chấm nhỏ",
    "Mặt vui hiền lành", "Hạnh phúc nhắm mắt", "Mặt vui đỏ mặt", "Cười nhắm tịt mắt", "Vui và tự mãn",
    "Nụ cười ấm áp", "Tiếng cười thân thiện", "Tiếng cười mắt sáng", "Nụ cười mắt to", "Nụ cười toe toét mãn nguyện",
    "Nụ cười tự hào", "Nụ cười hiểu ý", "Tiếng cười hồng hào", "Nụ cười omega hồng hào", "Nụ cười sung sướng",
    "Tiếng cười rạng ngời", "Tiếng cười tinh nghịch", "Nụ cười nắng ấm", "Nụ cười bình yên", "Nụ cười má tròn",
    "Mặt vui ngớ ngẩn", "Nụ cười tinh quái", "Cười cùng một bông hoa", "Nụ cười hoa mãn nguyện", "Nụ cười nhẹ nhõm",
    "Tiếng cười bẽn lẽn", "Mắt vui nheo lại", "Nụ cười láu lỉnh", "Niềm vui êm đềm", "Tiếng cười giật mình",
    "Tiếng cười hớn hở",
    // joy
    "Siêu phấn khích", "Reo lên phấn khích", "Cười không ngớt", "Reo vui ngây ngất", "Vỡ òa hạnh phúc",
    "Vui với mắt sao", "Cười với mắt sao", "Nụ cười giơ ngón cái", "Nhảy cẫng vì vui", "Vui nhảy tưng tưng",
    "Nhảy lên sung sướng", "Chạy lon ton háo hức", "Chạy vì vui", "Bước nhảy vui vẻ", "Cười lăn lộn",
    "Chạy reo hò", "Nheo mắt vui sướng", "Điệu nhảy chiến thắng", "Giơ nắm tay vui vẻ",
    // arms
    "Giơ tay reo hò", "Hoan hô", "Cười giơ tay", "Reo hò thật to", "Ăn mừng",
    "Vui giơ hai tay", "Banzai vui vẻ", "Hoan hô thật lớn", "Banzai phấn khích", "Reo hò đầy sao",
    "Reo hò kinh điển", "Điệu nhảy nhỏ vui", "Điệu nhảy hạnh phúc", "Tư thế chiến thắng đáng yêu", "Ăn mừng điềm tĩnh",
  ],
  sad: [
    // crying
    "Khóc lặng lẽ", "Nước mắt tuôn rơi", "Nước mắt kinh điển", "Cười mà khóc", "Mặt đẫm nước mắt",
    "Thổn thức", "Gào khóc", "Phụng phịu mếu máo", "Khóc khe khẽ", "Bé mít ướt",
    "Nước mắt lặng thầm", "Nước mắt run rẩy", "Khóc run run", "Omega đẫm lệ", "Khóc buồn bã",
    "Nức nở", "Cố kìm nước mắt", "Mắt rưng rưng", "Mỉm cười trong nước mắt", "Nụ cười đẫm lệ",
    "Nước mắt tan nát cõi lòng", "Nước mắt trào ra", "Mắt buồn ướt lệ", "Nỗi buồn lặng im", "Khóc như mưa",
    "Vừa khóc vừa cười", "Nước mắt chảy dài", "Mắt sưng vì khóc", "Nước mắt mệt mỏi", "Nước mắt lăn dài",
    "Lau nước mắt", "Khóc vào lòng bàn tay", "Che đôi mắt ướt", "Dụi mắt đẫm lệ", "Khóc trong hai tay",
    "Giấu khuôn mặt buồn", "Trốn vì xấu hổ", "Nức nở tuyệt vọng", "Suy sụp",
    // sad
    "Phụng phịu buồn", "Nhíu mày lo lắng", "Mặt u ám", "Cần một cái ôm", "Thở dài thất vọng",
    "Thở dài chịu thua", "Chán nản", "Ủ rũ", "Buồn ngượng ngùng", "Buồn không nói nên lời",
    "Hờn dỗi", "Càu nhàu buồn bã", "Mặt không vui", "Mặt rầu rĩ", "Nhăn mặt bực bội",
    "Nhăn mặt đau", "Tụt mood", "Nhíu mày bồn chồn", "Ánh mắt lo âu", "Nản lòng",
    "Bông hoa buồn", "Mặt bĩu môi", "Thở dài cô đơn", "Thất vọng", "Buồn thiu",
    "Đổ mồ hôi lo lắng", "Thở dài phiền muộn", "Tổn thương lặng lẽ",
  ],
  heart: [
    // heart-eyes
    "Mắt trái tim", "Mắt trái tim say đắm", "Mắt trái tim ngưỡng mộ", "Reo lên mắt trái tim", "Mắt trái tim kinh ngạc",
    "Thở dài mắt trái tim", "Cảm nắng nặng", "Mắt trái tim đỏ", "Mắt trái tim có hoa", "Tan chảy vì yêu",
    "Mê mẩn hoàn toàn", "Mắt trái tim mơ màng", "Mắt trái tim đỏ mặt", "Lấp lánh vì yêu", "Say nắng",
    "Mắt trái tim đầy sao", "Mắt trái tim ngọt ngào", "Mắt trái tim hoa lá", "Mắt trái tim đơn giản", "Mắt trái tim không mặt",
    "Nụ cười tim nhỏ", "Nụ cười tim đỏ", "Mắt trái tim e thẹn",
    // hearts
    "Cười cùng trái tim", "Mãn nguyện với trái tim", "Trái tim đỏ mũm mĩm", "Trái tim mũm mĩm lấp lánh", "Tình yêu mơ mộng",
    "Tình yêu ngái ngủ", "Trái tim và reo hò", "Cầu nguyện cho tình yêu", "Điệu nhảy say tình", "Tình yêu mắt sáng",
    "Đang yêu", "Tình yêu dịu dàng", "Trái tim nhỏ trìu mến", "Vẫy tay với trái tim", "Tình yêu ngọt lấp lánh",
    "Cười toe với trái tim", "Gửi một trái tim", "Ló ra với trái tim", "Ôm một trái tim", "Trái tim hoa",
    "Ném một trái tim", "Tặng một trái tim", "Rúc vào trái tim", "Nụ cười tim bé xíu", "Trái tim nhỏ ngại ngùng",
    "Trái tim khúc khích", "Trái tim mỉm cười", "Đưa ra trái tim", "Trái tim nháy mắt", "Trái tim tán tỉnh",
    // kiss
    "Thổi một nụ hôn", "Thổi nụ hôn đỏ", "Chu môi chờ hôn", "Hôn má", "Nụ hôn che miệng",
    "Nụ hôn ngại ngùng", "Mặt hôn", "Chạy đến hôn", "Hôn chụt", "Nụ hôn nhỏ",
    "Nụ hôn chu môi", "Nụ hôn yêu thương", "Cặp đôi hôn nhau", "Nụ hôn cặp đôi", "Cặp đôi đang yêu",
  ],
  cat: [
    // cat-face
    "Mèo con kinh điển", "Mèo con miệng omega", "Mèo con bình thản", "Mèo con buồn ngủ", "Mèo con tò mò",
    "Mèo con mỉm cười", "Mặt mèo đơn giản", "Mèo mắt tròn to", "Mèo mắt mở to", "Mèo đồng tử dọc",
    "Mèo ranh mãnh", "Mèo sung sướng", "Mèo tự mãn", "Mèo mãn nguyện", "Mèo cười",
    "Mèo mắt lấp lánh", "Mèo con nghiêng đầu", "Mèo con vẫy tay", "Mèo nhỏ mắt to", "Mèo nhỏ bối rối",
    "Mèo nhỏ mắt sáng", "Mèo nhỏ giật mình", "Mèo nhỏ hiền lành", "Mèo nhỏ xíu", "Mặt mèo dịu dàng",
    "Mèo ngủ trưa", "Mèo hài lòng", "Mèo bí ẩn", "Mèo nháy mắt", "Mèo mắt tròn nghiêm túc",
    "Mèo lơ mơ", "Mèo nhút nhát", "Mèo cáu kỉnh", "Mèo vươn vai", "Mèo cuộn như ổ bánh mì",
    "Mèo có đuôi",
    // cat-paws
    "Mèo giơ chân", "Mèo con cào nhẹ", "Chân mèo con vui vẻ", "Chân mèo con có hoa", "Mèo con duỗi chân",
    "Chân mèo lười biếng", "Chân mèo phấn khích", "Chân mèo bông xù", "Chân mèo đáng yêu", "Mèo con tinh nghịch",
    "Chân mèo con vui", "Mèo muốn được ôm", "Mèo tung ngôi sao",
    // cat-moods
    "Mèo khóc", "Mèo lo lắng", "Mèo bị hạ gục", "Mèo không đồng tình", "Mèo sốc",
    "Mèo chóng mặt", "Mèo buồn", "Mèo chẳng ấn tượng", "Mèo hoảng sợ", "Mèo con kêu meo",
  ],
  star: [
    // sparkle
    "Niềm vui đầy sao", "Tung lấp lánh", "Rắc lấp lánh", "Quyết tâm lấp lánh", "Chiến thắng lấp lánh",
    "Tỏa sáng rực rỡ", "Bao quanh bởi lấp lánh", "Mưa sao", "Lấp lánh mơ màng", "Niềm vui lung linh",
    "Vệt lấp lánh", "Rắc phép thuật", "Ngôi sao và reo hò", "Phấn khích lấp lánh", "Nháy mắt lấp lánh ánh sao",
    "Kinh ngạc rực sáng", "Ngỡ ngàng dưới trời sao", "Lấp lánh tự mãn", "Khung lấp lánh", "Lấp lánh tự tin",
    "Nụ cười lấp lánh", "Lấp lánh thích thú", "Lấp lánh vui sướng", "Lấp lánh ngái ngủ",
    // star-eyes
    "Mắt ngôi sao", "Nụ cười đầy sao", "Mắt sao sững sờ", "Mắt sao kinh ngạc", "Mắt sao có hoa",
    "Cười toe đầy sao", "Mắt kim tuyến", "Phấn khích đầy sao", "Reo hò mắt sao", "Bông hoa choáng ngợp",
    "Hét giữa các vì sao", "Vẫy tay mắt sao", "Cười toe lấp lánh", "Mắt lấp lánh như sao", "Mỉm cười với ngôi sao",
    "Nụ cười giữa hai ngôi sao",
    // magic
    "Thi triển phép thuật", "Câu thần chú nghiêm túc", "Phù thủy phóng phép", "Nụ cười đũa thần sao", "Ngôi sao nháy mắt",
    "Nháy mắt tinh nghịch", "Nháy mắt ngôi sao láu lỉnh", "Ném sao băng", "Ngôi sao vụt qua", "Tung một ngôi sao",
    "Ném sao phấn khích", "Ngôi sao xoay tròn",
  ],
  shrug: [
    // classic-shrug
    "Nhún vai kinh điển", "Nhún vai ngắn", "Nhún vai Lenny", "Nhún vai vô cảm", "Nhún vai không đồng tình",
    "Nhún vai ngớ ngẩn", "Nhún vai bối rối", "Nhún vai mỉm cười", "Nhún vai mắt to", "Nhún vai mệt mỏi",
    "Nhún vai ngượng ngùng", "Nhún vai tự mãn", "Nhún vai khó hiểu", "Nhún vai hoài nghi",
    // hands-up
    "Sao cũng được", "Nhún vai không bận tâm", "Nhún vai lười biếng", "Nhún vai thờ ơ", "Nhún vai kiểu meh",
    "Nhún vai cam chịu", "Nhún vai lo lắng", "Cười kiểu thôi kệ", "Nhún vai cười toe", "Nhún vai thong thả",
    "Nhún vai tí hon", "Nhún vai bực mình", "Nhún vai thở dài", "Nhún vai chán ngán", "Nhún vai buồn chán",
    "Ai mà biết", "Thôi kệ", "Nhún vai vô vọng", "Nhún vai láu cá", "Nhún vai cau có",
    "Nhún vai chẳng ấn tượng", "Thở dài kiểu meh", "Nhún vai mặt lạnh", "Nhún vai toát mồ hôi", "Nhún vai ngây thơ",
    // other-shrug
    "Không phải việc của tôi", "Nhún vai nửa vời", "Nhún vai cạn lời", "Chịu thôi", "Chịu thôi đơn giản",
    "Chịu thôi ngố ngố", "Ngơ ngác", "Ngơ ngác cười mỉm", "Ngơ ngác ngớ ngẩn", "Ngơ ngác vô tư",
    "Ngơ ngác ngượng ngùng",
  ],
  bunny: [
    // bunny-ears
    "Tai thỏ", "Thỏ tai dài", "Thỏ có ria", "Thỏ vui vẻ", "Thỏ mỉm cười",
    "Thỏ phấn khích", "Thỏ đơn giản", "Thỏ đỏ mặt", "Thỏ buồn ngủ", "Thỏ tự mãn",
    "Thỏ reo lên", "Thỏ tò mò", "Thỏ mắt to", "Thỏ bình tĩnh", "Thỏ choáng váng",
    "Thỏ khóc", "Thỏ bối rối", "Thỏ sốc", "Thỏ mãn nguyện", "Thỏ ngủ gật",
    "Thỏ lo lắng", "Thỏ con nhút nhát",
    // bunny-face
    "Thỏ con ngọt ngào", "Thỏ con rúc mình", "Thỏ con phụng phịu", "Thỏ con rưng rưng", "Thỏ con bông xù",
    "Thỏ con hôn chụt", "Thỏ con trầm ngâm", "Thỏ con khúc khích", "Thỏ con bình yên", "Thỏ con với trái tim",
    "Mặt thỏ con", "Mặt thỏ nhỏ xíu", "Thỏ con mắt tròn", "Thỏ con lơ mơ", "Thỏ con gửi yêu thương",
    "Mũi thỏ mỉm cười", "Mũi thỏ vui vẻ", "Thỏ con muốn được ôm", "Chân thỏ con",
    // bunny-hop
    "Thỏ giơ chân", "Thỏ nhảy", "Thỏ nhảy tự mãn", "Cú nhảy thỏ vui", "Thỏ cười",
    "Thỏ nhảy vui tươi", "Thỏ nhảy phấn khích", "Cú nhảy có ria", "Thỏ nhảy nhẹ nhàng", "Thỏ con nhảy nhót",
  ],
  angry: [
    // mad
    "Nhăn mặt sôi máu", "Ánh mắt giận dữ", "Ánh mắt khó chịu", "Nghiến răng", "Bốc khói",
    "Hét lên giận dữ", "Gầm gừ", "Răng nghiến chặt", "La hét", "Tiếng gầm",
    "Tiếng hét tức giận", "Bĩu môi tức giận", "Bực bội", "Nhăn mặt cáu kỉnh", "Nhăn mặt hờn dỗi",
    "Gân xanh nổi lên", "Phát cáu", "Mặt khó chịu", "Ánh mắt cuồng nộ", "Cau mày",
    "Lầm bầm", "Ánh mắt đe dọa", "Cơn giận ác độc", "Phẫn nộ", "Bĩu môi ăn vạ",
    "Sắp nổ tung",
    // glare
    "Ánh mắt chẳng ấn tượng", "Ánh mắt giận điên", "Nhăn mặt phản đối", "Trừng mắt há miệng", "Ánh mắt tự mãn",
    "Ánh mắt không tán thành", "Ánh mắt phán xét", "Liếc xéo", "Liếc xéo bực mình", "Liếc xéo nghi ngờ",
    "Hừ cáu kỉnh", "Cáu kỉnh bĩu môi", "Mặt chua chát", "Ánh mắt chán đời", "Ánh mắt ngán ngẩm",
    // fight
    "Vẫy tay giận dữ", "Giơ tay điên tiết", "Giơ tay cuồng nộ", "Hét to giơ tay", "Trêu chọc khiêu khích",
    "Nắm đấm quyết tâm", "Sẵn sàng chiến đấu", "Thế thủ", "Lao tới cuồng nộ", "Lao tới tức giận",
    "Nổi cơn tam bành", "Ăn vạ", "Giậm chân giận dữ", "Xua đuổi", "Vùng vẫy tức tối",
    "Giận tột độ", "Giận điên người", "Bừng bừng khí thế",
  ],
  angel: [
    // angel-wings
    "Thiên thần vui vẻ", "Thiên thần bình yên", "Thiên thần đơn giản", "Thiên thần mắt sáng", "Thiên thần nhỏ ngọt ngào",
    "Thiên thần sung sướng", "Thiên thần dịu dàng", "Thiên thần mỉm cười", "Thiên thần yêu thương", "Thiên thần mãn nguyện",
    "Thiên thần tươi vui", "Thiên thần cười toe", "Thiên thần mơ mộng", "Thiên thần thanh thản", "Thiên thần khúc khích",
    "Thiên thần buồn ngủ", "Thiên thần buồn", "Thiên thần với bông hoa", "Thiên thần e thẹn", "Thiên thần quyết tâm",
    "Thiên thần điềm tĩnh", "Nụ cười thiên thần dịu nhẹ", "Thiên thần hân hoan", "Thiên thần tí hon", "Thiên thần lấp lánh",
    "Thiên thần lung linh", "Thiên thần bé", "Thiên thần rạng rỡ", "Thiên thần mắt to", "Thiên thần nghỉ ngơi",
    "Thiên thần đang yêu", "Thiên thần đang mơ",
    // flying-angel
    "Thiên thần bay", "Thiên thần bay cao", "Thiên thần bay lấp lánh", "Thiên thần đỏ mặt", "Thiên thần má hồng",
    "Thiên thần dang cánh", "Thiên thần vỗ cánh", "Thiên thần lơ lửng", "Thiên thần trôi nổi", "Thiên thần nảy tưng tưng",
    "Thiên thần tốt bụng", "Thiên thần say đắm", "Thiên thần trôi dạt", "Thiên thần giơ tay", "Thiên thần vẫy tay",
    "Thiên thần tràn đầy yêu thương", "Thiên thần bay ấm áp", "Thiên thần ăn mừng", "Thiên thần bay vui vẻ", "Thiên thần bay phấn khích",
    "Thiên thần bay với bông hoa",
  ],
  blush: [
    // shy
    "Ngại ngùng đỏ mặt", "Ngượng ngùng vặn vẹo", "Đỏ mặt bẽn lẽn", "Giấu mặt", "Nhìn trộm qua kẽ tay",
    "Che mặt", "Giấu nụ cười", "Giấu nụ cười toe", "Khúc khích ngượng ngùng", "Nép mình e thẹn",
    "Má đỏ bừng", "Mặt đỏ ửng", "Che mắt", "Ngại quá không dám nhìn", "Bối rối hoàn toàn",
    "Vặn vẹo bối rối", "Nhăn mặt xấu hổ", "Xấu hổ ngượng nghịu", "Cười ngượng", "Đỏ mặt với hoa",
    "Giấu nụ cười e thẹn",
    // rosy
    "Nụ cười bối rối", "Mặt omega ửng hồng", "Cười toe đỏ mặt", "Đỏ mặt say nắng", "Huýt sáo vô tội",
    "Má hồng hào", "Nụ cười đỏ mặt", "Ửng hồng ấm áp", "Cười toe e thẹn", "Ửng hồng nhẹ",
    "Ửng hồng nheo mắt", "Má hồng dịu dàng", "Ửng hồng ngọt ngào", "Má ửng sáng", "Ửng hồng bình yên",
    "Ửng hồng khúc khích", "Đỏ mặt vì vui", "Nụ cười rụt rè", "Ngạc nhiên má hồng", "Ửng hồng phụng phịu",
    "Cười toe ửng hồng", "Ửng hồng bâng khuâng", "Ửng hồng má tròn", "Tiếng cười ửng hồng", "Ửng hồng thích thú",
    "Ửng hồng say đắm", "Ửng hồng reo lên", "Ửng hồng hài lòng", "Hạnh phúc e thẹn", "Ửng hồng mãn nguyện",
    "Gương mặt nhỏ ửng hồng",
  ],
  hug: [
    "Cái ôm thật ấm", "Đến ôm nè", "Dang tay", "Dang tay háo hức", "Cái ôm ngại ngùng",
    "Dang rộng hai tay", "Cái ôm phấn khích", "Cái ôm lấp lánh", "Cái ôm Lenny", "Cái ôm ngái ngủ",
    "Cái ôm vui vẻ", "Cái ôm kawaii", "An ủi bạn", "Động viên ai đó", "Cái ôm tươi vui",
    "Cái ôm thân thiện", "Cái ôm đáng ngờ", "Cái ôm nhẹ nhàng", "Dang tay dịu dàng", "Cái ôm yêu thương",
    "Cái ôm ấm cúng", "Siết chặt với trái tim", "Cái ôm nôn nóng", "Cái ôm lắc lư",
  ],
  bear: [
    "Gấu kinh điển", "Gấu nhỏ", "Gấu vui vẻ", "Gấu liếc mắt", "Gấu đáng ngờ",
    "Gấu nhút nhát", "Gấu phấn khích", "Gấu quyết tâm", "Gấu buồn ngủ", "Gấu nhỏ ngạc nhiên",
    "Gấu điềm tĩnh", "Gấu bông", "Gấu dang tay", "Gấu muốn ôm", "Gấu mắt sáng",
    "Gấu gửi yêu thương", "Gấu không đồng tình", "Gấu khóc", "Gấu bình yên", "Gấu má hồng",
    "Gấu hiền hòa", "Gấu kinh ngạc", "Gấu mũi to", "Cái ôm của gấu", "Mặt gấu",
    "Gấu che mắt", "Gấu đỏ mặt", "Mặt gấu ngại ngùng", "Gấu mỉm cười",
  ],
  dog: [
    "Cún con đáng yêu", "Cún con nhỏ", "Cún con buồn", "Cún con mắt to", "Cún con vui vẻ",
    "Chó tai cụp", "Chó cười toe", "Chó mãn nguyện", "Chó tươi vui", "Chó vui vẻ",
    "Chó mỉm cười", "Chó điềm tĩnh", "Chó chảy nước dãi", "Chó mắt sáng", "Chó hớn hở",
    "Chó tai nhọn", "Cún tai nhọn", "Cún tai nhọn vui vẻ", "Mặt chó nhỏ", "Cún con tai cụp",
    "Chó lông xù",
  ],
  sleepy: [
    "Đang ngủ", "Ngáy to", "Ngủ say", "Thiếp đi", "Ngủ yên bình",
    "Nhắm mắt", "Ngủ trưa", "Chảy dãi khi ngủ", "Úp mặt ngủ", "Bất tỉnh",
    "Thở dài buồn ngủ", "Kiệt sức", "Dãi ngái ngủ", "Nghỉ mắt", "Giấc ngủ trưa ấm áp",
    "Ngủ trưa tự mãn", "Ngáp", "Ngủ say sưa", "Chìm vào giấc ngủ", "Ngủ thoải mái",
  ],
  surprised: [
    "Mặt sốc", "Mắt tròn xoe", "Sững sờ", "Kinh ngạc", "Cạn lời",
    "Mắt mở to", "Ngạc nhiên bối rối", "Nhìn lại lần nữa", "Há hốc miệng", "Giật mình",
    "Chớp mắt ngạc nhiên", "Ngạc nhiên choáng váng", "Sốc toàn tập", "Ngạc nhiên ngượng ngùng", "Ngạc nhiên đơ người",
    "Ánh mắt trống rỗng", "Ồ", "Kinh hãi", "Thở hắt vì sốc", "Hét lên giật mình",
    "Nhảy dựng vì sợ", "Bỏ chạy vì sốc", "Rớt hàm", "Nhìn chằm chằm vì sốc", "Sốc lo lắng",
    "Giơ tay vì sốc",
  ],
  "table-flip": [
    "Lật bàn kinh điển", "Lật bàn giận dữ", "Lật bàn cáu kỉnh", "Lật hai bàn", "Lật bàn vui vẻ",
    "Lật bàn điên tiết", "Lật bàn phản đối", "Lật bàn mắt trợn", "Lật bàn sốc", "Lật bàn cuồng nộ",
    "Lật hai bàn và nhún vai", "Lật cả người", "Gấu lật bàn", "Lật bàn bình thản", "Lật bàn lấp lánh",
    "Đặt bàn lại chỗ cũ", "Bình tĩnh sửa bàn", "Nhún vai với cái bàn", "Bình tĩnh lại", "Sửa bàn tự mãn",
    "Lật rồi sửa",
  ],
  wave: [
    "Vẫy tay nhỏ", "Chào đơn giản", "Chào vui", "Vẫy tay thân thiện", "Chào tươi tắn",
    "Vẫy tay tạm biệt", "Chào háo hức", "Chào thoải mái", "Vẫy tay chào", "Chào rạng rỡ",
    "Tạm biệt vui vẻ", "Vẫy tay đầy sao", "Vẫy tay đáng yêu", "Bye-bye", "Chào thật to",
    "Vẫy tay thật lớn", "Vẫy tay ngại ngùng", "Vẫy tay nhẹ nhàng", "Vẫy tay nắng ấm",
  ],
};

export const labels = labelsFromLists("vi", lists);
