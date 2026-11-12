## Appendix A. Kaomoji Library (828 kaomoji)

This is the complete curated library. Use it exactly as given; do not regenerate, reorder, or replace it.

How to convert it into data files:

- Create one file per category in data/kaomoji/[category].ts (plus types.ts, categories.ts, and index.ts exporting allKaomoji, kaomojiByCategory, and kaomojiCategories).
- Each line inside a code block is one kaomoji, then the separator " ⇒ ", then its unique card label. Split each line on the last " ⇒ ". The kaomoji part must be copied character for character (keep every space, backslash, backtick, and combining mark). Escape characters correctly in TypeScript strings.
- Assign ids in the order listed, per category, starting at 001: cute-001, cute-002 … Ids must stay stable once published.
- Every kaomoji gets its own label from its line, plus the group, tags, and description from its group header. Labels, tags, and descriptions are English; localized versions go in data/i18n/[locale]/ keyed by id, and each locale needs its own natural translation of every label.
- Each category heading names its main group (Emotions, Cute, Love, Animals, Actions, Sparkles), used for the first row of pills; store it as mainGroup in categories.ts.
- Categories marked "homepage section only" appear on the homepage but have no dedicated page yet.
- Keep the display order: categories in the order listed, kaomoji in the order listed within each group.
- You may append new kaomoji to a category only if needed, after the listed ones, keeping ids unique and checking for duplicates.

### Category `cute` — Cute (main group: Cute; 82 kaomoji, dedicated page: /cute-kaomoji)

Group `kawaii` · tags: cute, kawaii, smile, sweet · description: "cute kawaii smiling face"

```
(｡◕‿◕｡) ⇒ Classic kawaii smile
(◕‿◕✿) ⇒ Smiling with a flower
(✿◠‿◠) ⇒ Blooming sweet smile
(◕ᴗ◕✿) ⇒ Bright-eyed flower girl
(*^‿^*) ⇒ Rosy happy face
(˶ᵔ ᵕ ᵔ˶) ⇒ Soft gentle smile
(◍•ᴗ•◍) ⇒ Round chubby smile
(◍•ᴗ•◍)✧*。 ⇒ Chubby sparkle smile
(｡•ᴗ•｡) ⇒ Tiny polite smile
(｡◕‿‿◕｡) ⇒ Wide kawaii grin
(◕‿◕) ⇒ Simple sweet smile
(◠‿◠) ⇒ Calm closed-eye smile
(✿╹◡╹) ⇒ Flower with tiny eyes
(*˘︶˘*) ⇒ Content and cozy
(｡◕ ∀ ◕｡) ⇒ Wide-eyed delight
(◕ˇ∀ˇ◕) ⇒ Cheerful sparkly eyes
(❁´◡`❁) ⇒ Flower-framed blush
(✿◕‿◕) ⇒ Flowery sweet smile
(✿ᵔ‿ᵔ) ⇒ Gentle flower smile
(✿˶◕‿◕˶) ⇒ Glowing flower smile
✿◕ ‿ ◕✿ ⇒ Flower-crowned smile
❀◕ ‿ ◕❀ ⇒ Blossom-framed smile
(｡^‿^｡) ⇒ Sweet happy grin
(＾◡＾) ⇒ Gentle cheerful grin
(•◡•) ⇒ Little round smile
(｡◕‿◕｡)✧ ⇒ Shining kawaii smile
(ㆁᴗㆁ✿) ⇒ Sleepy flower face
(˶◕‿◕˶) ⇒ Rosy wide-eyed smile
(ꈍᴗꈍ) ⇒ Peaceful closed eyes
(ꈍ◡ꈍ) ⇒ Dreamy closed eyes
(•‿•) ⇒ Simple tiny smile
(•ᴗ•) ⇒ Plain happy face
(•‿•)✧ ⇒ Smile with a twinkle
(ᵔ◡ᵔ) ⇒ Small joyful smile
(ᵕ‿ᵕ) ⇒ Relaxed sleepy smile
(˘ᵕ˘) ⇒ Calm content face
```

Group `omega` · tags: cute, kawaii, cat mouth, soft · description: "cute face with a small w-shaped mouth"

```
(｡･ω･｡) ⇒ Fluffy little face
(｡・ω・｡)ﾉ ⇒ Fluffy wave
(・ω・) ⇒ Classic omega face
(´｡• ω •｡`) ⇒ Soft blushing omega
(っ˘ω˘ς ) ⇒ Sleepy snuggle
(〃・ω・〃) ⇒ Shy little omega
(*・ω・)ﾉ ⇒ Cheerful hello
( ˘ω˘ ) ⇒ Drowsy smile
(◡ ω ◡) ⇒ Blissful omega
(っ´ω`c) ⇒ Squishy pout
(ᐢ˙꒳˙ᐢ) ⇒ Tiny hamster face
(ˊ꒳ˋ) ⇒ Soft content face
( ˶ˆ꒳ˆ˵ ) ⇒ Pleased little face
(｡•ㅅ•｡) ⇒ Button-nosed cutie
(ᐢ ᵕ ᐢ) ⇒ Tiny ears smile
```

Group `excited` · tags: cute, excited, wink, sparkle · description: "cute excited face"

```
(｡•̀ᴗ-)✧ ⇒ Winking sparkle
(✧ω✧) ⇒ Sparkling eyes
(★ω★) ⇒ Starstruck cutie
(｡>‿<｡) ⇒ Squeezing eyes shut
(>‿<) ⇒ Giggling face
(≧◡≦) ⇒ Giddy grin
(⌒‿⌒) ⇒ Beaming smile
(*ﾟ▽ﾟ*) ⇒ Pleasantly surprised
(๑˃ᴗ˂)ﻭ ⇒ Cheering cutie
(๑>◡<๑) ⇒ Bubbly giggle
(๑•̀ㅂ•́)و✧ ⇒ Determined sparkle
(๑ᵔ⤙ᵔ๑) ⇒ Puckered cutie
(๑˘︶˘๑) ⇒ Snug and happy
(๑'ᴗ'๑) ⇒ Polite little smile
(๑´ڡ`๑) ⇒ Yummy treat face
(*´ڡ`●) ⇒ Licking lips
(ᗒᗨᗕ) ⇒ Overjoyed squeal
(˶˃ ᵕ ˂˶) ⇒ Squishy giggle
(˶ˆᗜˆ˵) ⇒ Delighted cutie
(*✧×✧*) ⇒ Dazzled eyes
(✧∀✧) ⇒ Glittering eyes
(ˊᗜˋ) ⇒ Wide happy beam
(ˊᵕˋ) ⇒ Gentle grin
(ˆ ᵕ ˆ) ⇒ Mellow smile
(◜ᴗ◝ ) ⇒ Peeking smile
(｡•̀ᴗ•́｡) ⇒ Confident cutie
(•̀ᴗ•́)و ⇒ Fist-pump cutie
(๑•ᴗ•๑) ⇒ Neat little smile
(≧ω≦) ⇒ Squealing with joy
(*≧ω≦) ⇒ Happy squeal
(•ө•) ⇒ Tiny bird face
```

### Category `happy` — Happy (main group: Emotions; 75 kaomoji, dedicated page: /happy-kaomoji)

Group `smile` · tags: happy, smile, joy, glad · description: "happy smiling face"

```
(＾▽＾) ⇒ Big happy smile
(＾ｖ＾) ⇒ Cheerful v smile
(^_^) ⇒ Simple happy face
(^▽^) ⇒ Open happy smile
(^ω^) ⇒ Content omega smile
(^o^) ⇒ Happy open mouth
(^-^) ⇒ Pleased smile
(^ー^) ⇒ Easygoing smile
(^ε^) ⇒ Puckered happy face
(^.^) ⇒ Little dot smile
(^‿^) ⇒ Gentle happy face
(^^) ⇒ Closed-eye happiness
(*^^*) ⇒ Blushing happy face
(⌒▽⌒) ⇒ Laughing with eyes closed
(⌒ω⌒) ⇒ Smug and happy
(´▽`) ⇒ Warm grin
(´∀`) ⇒ Friendly laugh
(・∀・) ⇒ Bright-eyed laugh
(・▽・) ⇒ Wide-eyed smile
(￣▽￣) ⇒ Satisfied grin
(￣ω￣) ⇒ Proud little smirk
(￣ー￣) ⇒ Knowing smile
(*^▽^*) ⇒ Rosy laugh
(*^ω^*) ⇒ Rosy omega smile
(*´▽`*) ⇒ Blissful grin
(*´∀`*) ⇒ Glowing laugh
(o^▽^o) ⇒ Cheeky laugh
(o´▽`o) ⇒ Sunny smile
(o˘◡˘o) ⇒ Peaceful smile
(o･ω･o) ⇒ Round-cheeked smile
(＠＾◡＾) ⇒ Silly happy face
(。^▽^) ⇒ Playful grin
(✿◡‿◡) ⇒ Smiling with a bloom
(◡‿◡✿) ⇒ Content flower smile
(＾ｰ＾) ⇒ Easy smile
(〃^▽^〃) ⇒ Bashful laugh
(⁀ᗢ⁀) ⇒ Happy squint
(˙▿˙) ⇒ Smiling cheekily
(´ ω `) ⇒ Mellow happiness
(ﾟ∀ﾟ) ⇒ Startled laugh
(*ﾟ∀ﾟ*) ⇒ Gleeful laugh
```

Group `joy` · tags: happy, excited, celebrate, cheer, yay · description: "very happy cheering face"

```
(≧▽≦) ⇒ Super excited
(≧∇≦) ⇒ Thrilled squeal
(≧∀≦) ⇒ Overjoyed laugh
(≧ᗜ≦) ⇒ Ecstatic squeal
(*≧▽≦) ⇒ Bursting with joy
(✯◡✯) ⇒ Starry-eyed happy
(☆▽☆) ⇒ Star-eyed laugh
(*￣▽￣)b ⇒ Thumbs up grin
o(≧▽≦)o ⇒ Bouncing with joy
o(^▽^)o ⇒ Happy and bouncy
o(〃＾▽＾〃)o ⇒ Jumping for joy
(ﾉ´ヮ`)ﾉ ⇒ Excited little run
(ﾉ◕ヮ◕)ﾉ ⇒ Running with joy
(ノ^∇^) ⇒ Joyful leap
(ﾉ≧∀≦)ﾉ ⇒ Laughing hard
(ノ゜▽゜)ノ ⇒ Cheering run
(๑˃̵ᴗ˂̵) ⇒ Gleeful squint
٩(ˊᗜˋ*)و ⇒ Victory dance
(っ＾▿＾)۶ ⇒ Happy fist pump
```

Group `arms` · tags: happy, raised arms, cheer, yay · description: "happy face with raised arms"

```
ヽ(・∀・)ﾉ ⇒ Cheering with arms up
ヽ(´▽`)/ ⇒ Hooray
ヽ(^o^)丿 ⇒ Arms up laugh
ヽ(＾Д＾)ﾉ ⇒ Loud cheer
ヽ(*⌒▽⌒*)ﾉ ⇒ Celebrating
ヽ(•‿•)ノ ⇒ Happy arms up
＼(^o^)／ ⇒ Banzai cheer
＼(＾▽＾)／ ⇒ Big hooray
＼(≧▽≦)／ ⇒ Excited banzai
＼(★ω★)／ ⇒ Starry cheer
\(^ω^)/ ⇒ Classic cheer
٩(◕‿◕)۶ ⇒ Joyful little dance
٩(^‿^)۶ ⇒ Happy dance
٩(｡•́‿•̀｡)۶ ⇒ Cute victory pose
٩(˘◡˘)۶ ⇒ Calm celebration
```

### Category `sad` — Sad (main group: Emotions; 67 kaomoji, dedicated page: /sad-kaomoji)

Group `crying` · tags: sad, crying, tears, cry · description: "crying face with tears"

```
(╥﹏╥) ⇒ Crying quietly
(╥_╥) ⇒ Tears streaming down
(T_T) ⇒ Classic tears
(T▽T) ⇒ Crying smile
(T＿T) ⇒ Tearful face
(TдT) ⇒ Sobbing
(ToT) ⇒ Wailing
(T⌓T) ⇒ Teary pout
(TωT) ⇒ Crying softly
(｡T ω T｡) ⇒ Little crybaby
(;_;) ⇒ Silent tears
(;﹏;) ⇒ Wavering tears
(；︵；) ⇒ Trembling tears
(;ω;) ⇒ Teary omega
(´；ω；`) ⇒ Weeping
(´；д；`) ⇒ Sobbing hard
(ಥ﹏ಥ) ⇒ Holding back tears
(ಥ_ಥ) ⇒ Teary-eyed
(ಥ‿ಥ) ⇒ Smiling through tears
(ಥ⌣ಥ) ⇒ Tearful smile
(ಥ︵ಥ) ⇒ Heartbroken tears
(இ﹏இ) ⇒ Overflowing tears
(இ_இ) ⇒ Sad teary eyes
(இ‸இ) ⇒ Quiet sorrow
(〒﹏〒) ⇒ Bawling
(〒▽〒) ⇒ Crying laugh
(〒_〒) ⇒ Streaming tears
(ㄒoㄒ) ⇒ Puffy-eyed crying
(ㄒ_ㄒ) ⇒ Weary tears
(πーπ) ⇒ Tears running down
(ノ_<。) ⇒ Wiping tears
(ノД`) ⇒ Crying into hands
(ノ_；) ⇒ Covering teary eyes
(つ﹏<。) ⇒ Rubbing teary eyes
(つ﹏⊂) ⇒ Crying in hands
(ノ﹏ヽ) ⇒ Hiding sad face
(｡ﾉω＼｡) ⇒ Hiding in shame
(ᗒᗣᗕ)՞ ⇒ Despairing sob
(ᗒᗩᗕ) ⇒ Devastated
```

Group `sad` · tags: sad, unhappy, down, disappointed, lonely · description: "sad disappointed face"

```
(｡•́︿•̀｡) ⇒ Sad pouty face
(｡ŏ﹏ŏ) ⇒ Worried frown
(｡╯︵╰｡) ⇒ Gloomy frown
(っ˘̩╭╮˘̩)っ ⇒ Needs a hug
(◞‸◟) ⇒ Disappointed sigh
(◞‸◟；) ⇒ Defeated sigh
(´・ω・`) ⇒ Dejected
(´-ω-`) ⇒ Downcast
(´._.`) ⇒ Awkward sadness
(._.) ⇒ Speechless and sad
(╯︵╰,) ⇒ Sulking
(︶︹︺) ⇒ Grumbling sadly
(︶︹︶) ⇒ Unhappy frown
(´︶`) ⇒ Glum face
(｡>﹏<｡) ⇒ Upset wince
(>﹏<) ⇒ Hurt wince
(╯_╰) ⇒ Feeling down
(ó﹏ò｡) ⇒ Anxious frown
(ó_ò) ⇒ Worried look
(ú_ù) ⇒ Disheartened
(◕︿◕✿) ⇒ Sad flower
(◕︵◕) ⇒ Pouty frown
(｡•ˇ‸ˇ•｡) ⇒ Lonely sigh
(´ｰ`) ⇒ Let down
(˘︹˘) ⇒ Bummed out
(・_・;) ⇒ Nervous sweat
(￣ヘ￣;) ⇒ Troubled sigh
(｡ᵕ ◞ _◟) ⇒ Quietly hurt
```

### Category `heart` — Heart & Love (main group: Love; 68 kaomoji, dedicated page: /heart-kaomoji)

Group `heart-eyes` · tags: love, heart, heart eyes, crush · description: "face with heart eyes"

```
(｡♥‿♥｡) ⇒ Heart eyes
(♥ω♥*) ⇒ Lovesick heart eyes
(♡ω♡) ⇒ Adoring heart eyes
(♡ >ω< ♡) ⇒ Squealing heart eyes
(♡°▽°♡) ⇒ Amazed heart eyes
(♡μ_μ) ⇒ Heart-eyed sigh
(❤ω❤) ⇒ Crushing hard
(❤▽❤) ⇒ Red heart eyes
(✿ ♡‿♡) ⇒ Flower heart eyes
(*♡∀♡) ⇒ Swooning
(*♡▽♡*) ⇒ Totally smitten
(´♡‿♡`) ⇒ Dreamy heart eyes
(灬♥ω♥灬) ⇒ Blushing heart eyes
(ღ♡‿♡ღ) ⇒ Love-struck sparkle
(｡♡‿♡｡) ⇒ Lovestruck
(♡´౪`♡) ⇒ Starry heart eyes
(♡ˊᵕˋ♡) ⇒ Sweet heart eyes
(✿ ♥‿♥) ⇒ Floral heart eyes
(♥‿♥) ⇒ Simple heart eyes
♥‿♥ ⇒ Heart eyes no face
♡‿♡ ⇒ Tiny heart smile
❤‿❤ ⇒ Red heart smile
(⁄ ⁄♡⁄ω⁄♡⁄ ⁄) ⇒ Shy heart eyes
```

Group `hearts` · tags: love, heart, cute, affection · description: "happy face with hearts"

```
(♡˙︶˙♡) ⇒ Smiling with hearts
(˘︶˘).｡*♡ ⇒ Content with a heart
(◍•ᴗ•◍)❤ ⇒ Chubby red heart
(◍•ᴗ•◍)♡ ✧*。 ⇒ Chubby heart sparkle
♡( ◡‿◡ ) ⇒ Dreamy love
♡(｡- ω -) ⇒ Sleepy love
♡＼(￣▽￣)／♡ ⇒ Hearts and cheers
♡(ŐωŐ人) ⇒ Praying for love
♡〜٩( ˃▿˂ )۶〜♡ ⇒ Lovestruck dance
❤(ӦｖӦ｡) ⇒ Starry-eyed love
(ღ˘⌣˘ღ) ⇒ In love
(ღ˘◡˘ღ) ⇒ Gentle love
(ღ´ω`ღ) ⇒ Fond little heart
ღゝ◡╹)ノ♡ ⇒ Waving a heart
(*˘︶˘*).｡.:*♡ ⇒ Sweet love sparkles
(*ˊᗜˋ*)♡ ⇒ Grinning with a heart
(◕‿◕)♡ ⇒ Sending a heart
( ◜‿◝ )♡ ⇒ Peeking with a heart
(´∩｡• ᵕ •｡∩`)♡ ⇒ Hugging a heart
(✿˘︶˘)♡ ⇒ Flower heart
(ﾉ◕ヮ◕)ﾉ♡ ⇒ Throwing a heart
(っ◕‿◕)っ♡ ⇒ Offering a heart
(๑˘︶˘๑)♡ ⇒ Snug with a heart
(•ᴗ•)♡ ⇒ Small heart smile
(⸝⸝ᵕᴗᵕ⸝⸝)♡ ⇒ Shy little heart
(≧◡≦) ♡ ⇒ Giggling heart
(⺣◡⺣)♡* ⇒ Smiling heart
(っ´ω`)っ♡ ⇒ Holding out a heart
(๑・ω-)～♥ ⇒ Winking heart
♥(ˆ⌣ˆԅ) ⇒ Flirty heart
```

Group `kiss` · tags: love, kiss, heart, couple · description: "face blowing a kiss"

```
( ˘ ³˘)♥ ⇒ Blowing a kiss
( ˘ ³˘)❤ ⇒ Blowing a red kiss
(づ￣ ³￣)づ ⇒ Puckered for a kiss
(っ˘з(˘⌣˘ ) ♡ ⇒ Kissing cheek
(❤´艸｀❤) ⇒ Covering kiss
(｡・//ε//・｡) ⇒ Shy kiss
(￣ε￣＠) ⇒ Kiss face
(ノ´ з `)ノ ⇒ Running for a kiss
(*ˆ³ˆ) ⇒ Smooch
(´ε｀ )♡ ⇒ Little kiss
(*´з`*) ⇒ Pouty kiss
(ʃƪ ˘ ³˘) ⇒ Lovey kiss
(◦˘ ³(♡ε♡) ⇒ Kissing couple
❤ (ɔˆз(ˆ⌣ˆc) ⇒ Couple kiss
(˘∀˘)/(μ‿μ) ❤ ⇒ Loving couple
```

### Category `cat` — Cat (main group: Animals; 59 kaomoji, dedicated page: /cat-kaomoji)

Group `cat-face` · tags: cat, kitty, neko, animal · description: "cat face"

```
(=^･ω･^=) ⇒ Classic kitty
(=^・ω・^=) ⇒ Kitty with omega mouth
(=^‥^=) ⇒ Neutral kitty
(=^-ω-^=) ⇒ Sleepy kitty
(=^･ｪ･^=) ⇒ Curious kitty
(=^ ◡ ^=) ⇒ Smiling kitty
(=^･^=) ⇒ Simple cat face
(=①ω①=) ⇒ Big round cat eyes
(=ↀωↀ=) ⇒ Wide-eyed cat
(=ΦωΦ=) ⇒ Cat with slit eyes
(=ΦｴΦ=) ⇒ Sly cat
(=⌒‿‿⌒=) ⇒ Blissful cat
(=`ω´=) ⇒ Smug cat
(=˘ω˘=) ⇒ Content cat
(=´∇｀=) ⇒ Laughing cat
(=ↀωↀ=)✧ ⇒ Sparkly-eyed cat
(^・ω・^ ) ⇒ Tilted kitty
(^._.^)ﾉ ⇒ Kitty waving
(^=◕ᴥ◕=^) ⇒ Wide-eyed kitten
(^◔ᴥ◔^) ⇒ Puzzled kitten
(^˵◕ω◕˵^) ⇒ Bright-eyed kitten
(^ↀᴥↀ^) ⇒ Startled kitten
(^• ω •^) ⇒ Gentle kitten
(^･ω･^=) ⇒ Little kitten
(＾• ω •＾) ⇒ Soft cat face
(＾-ω-＾) ⇒ Napping cat
(＾ｪ＾) ⇒ Pleased cat
(ﾐΦ ﻌ Φﾐ) ⇒ Mysterious cat
(ﾐゝω・ﾐ) ⇒ Winking cat
(ﾐ⚈ ﻌ ⚈ﾐ) ⇒ Round-eyed cat
(ﾐ ᵕ ﻌ ᵕ ﾐ) ⇒ Dozing cat
(ﾐ´ ω `ﾐ) ⇒ Shy cat
(ﾐ`ω´ﾐ) ⇒ Grumpy cat
ᓚᘏᗢ ⇒ Stretching cat
ᓚ₍ ^. .^₎ ⇒ Loafing cat
=^._.^= ∫ ⇒ Cat with a tail
```

Group `cat-paws` · tags: cat, paws, kitty, cute · description: "cat raising its paws"

```
ฅ^•ﻌ•^ฅ ⇒ Cat with paws up
ฅ(＾・ω・＾ฅ) ⇒ Pawing kitty
ฅ(^◕ᴥ◕^)ฅ ⇒ Bright kitty paws
ฅ(•ㅅ•❀)ฅ ⇒ Flower kitty paws
ฅ(=･ω･=)ฅ ⇒ Kitty reaching out
ฅ(￣ω￣ฅ) ⇒ Lazy cat paw
ฅ^>ω<^ฅ ⇒ Excited cat paws
ฅ(՞•ﻌ•՞)ฅ ⇒ Fluffy cat paws
ฅ^•ω•^ฅ ⇒ Cute cat paws
(ฅ'ω'ฅ) ⇒ Playful kitten
(ฅ^ω^ฅ) ⇒ Happy kitten paws
(っ=^･ω･^=)っ ⇒ Cat wanting a hug
(=^･ｪ･^=))ﾉ彡☆ ⇒ Cat casting a star
```

Group `cat-moods` · tags: cat, sad cat, angry cat, shocked cat · description: "cat face showing a strong mood"

```
(=ＴェＴ=) ⇒ Crying cat
(=; ェ ;=) ⇒ Nervous cat
(=ｘェｘ=) ⇒ Knocked-out cat
(=ಠᆽಠ=) ⇒ Disapproving cat
(=ʘᆽʘ=) ⇒ Shocked cat
(ﾐｘﻌｘﾐ) ⇒ Dizzy cat
(ﾐ ﹏ ﻌ ﹏ ﾐ) ⇒ Sad cat
(ﾐ￣ー￣ﾐ) ⇒ Unimpressed cat
(ↀДↀ)✧ ⇒ Horrified cat
(^･o･^)ﾉ" ⇒ Kitty meowing
```

### Category `star` — Star & Sparkle (main group: Sparkles; 52 kaomoji, dedicated page: /star-kaomoji)

Group `sparkle` · tags: star, sparkle, magic, shine, glitter · description: "happy face with stars and sparkles"

```
☆*:.｡.o(≧▽≦)o.｡.:*☆ ⇒ Star-spangled joy
(ﾉ◕ヮ◕)ﾉ*:･ﾟ✧ ⇒ Throwing sparkles
(ﾉ´ヮ`)ﾉ*: ･ﾟ ⇒ Tossing sparkles
✧٩(•́⌄•́๑)و ✧ ⇒ Sparkly determination
✧*｡٩(ˊᗜˋ*)و✧*｡ ⇒ Sparkling victory
✧◝(⁰▿⁰)◜✧ ⇒ Shining bright
✧･ﾟ: *✧･ﾟ:* (◕‿◕) *:･ﾟ✧*:･ﾟ✧ ⇒ Surrounded by sparkles
(ﾉ>ω<)ﾉ :｡･:*:･ﾟ’★,｡･:*:･ﾟ’☆ ⇒ Showering stars
*:･ﾟ✧(ꈍᴗꈍ)✧･ﾟ:* ⇒ Dreamy sparkles
.･ﾟﾟ･(＾ω＾)･ﾟﾟ･. ⇒ Glittering joy
(ノ°∀°)ノ⌒･*:.｡. .｡.:*･゜ﾟ･*☆ ⇒ Sparkle trail
(*・‿・)ノ⌒*:･ﾟ✧ ⇒ Sprinkling magic
☆(ﾉ◕ヮ◕)ﾉ ⇒ Star and cheer
(ﾉ˶>ᗜ<˵)ﾉ✧ ⇒ Sparkly excitement
✧(｡•̀ᴗ-)✧ ⇒ Winking sparkles
✧･ﾟ(⁰▿⁰) ⇒ Glowing awe
✩°｡⋆⸜(ˊᗜˋ ) ⇒ Starlit wonder
✧(≖ ◡ ≖✿) ⇒ Smug sparkle
✧ (•‿•) ✧ ⇒ Framed in sparkles
(•̀ᴗ•́)✧ ⇒ Confident sparkle
(◕‿◕)✧ ⇒ Smile with sparkle
(˶ˆᗜˆ˵)✧ ⇒ Delighted sparkle
(⁎˃ᴗ˂⁎)✧ ⇒ Joyful sparkle
(っ˘ω˘ς )✧ ⇒ Sleepy sparkle
```

Group `star-eyes` · tags: star, star eyes, excited, amazed · description: "face with starry eyes"

```
(☆ω☆) ⇒ Star eyes
(★‿★) ⇒ Starry smile
(✪‿✪) ⇒ Stunned star eyes
(✪ω✪) ⇒ Amazed star eyes
(✿☆‿☆) ⇒ Flower star eyes
(☆∀☆) ⇒ Starry grin
(*✧ω✧*) ⇒ Glittery eyes
(*☆▽☆*) ⇒ Starry excitement
(✧∀✧)/ ⇒ Cheering star eyes
(✿✧ω✧) ⇒ Dazzled flower
(★^O^★) ⇒ Star-framed shout
(★ω★)/ ⇒ Star-eyed wave
(☆^ー^☆) ⇒ Sparkling grin
(✧ᴗ✧) ⇒ Twinkling eyes
(◕ᴗ◕)☆ ⇒ Smiling with a star
☆ (*^ω^*) ☆ ⇒ Star-framed smile
```

Group `magic` · tags: star, magic, wand, wink, spell · description: "face casting a magic star"

```
(∩^o^)⊃━☆ﾟ.*･｡ﾟ ⇒ Casting magic
(∩｀-´)⊃━☆ﾟ.*･｡ﾟ ⇒ Serious spell
(∩ᄑ_ᄑ)⊃━☆ﾟ*･｡*･:≡( ε:) ⇒ Wizard zapping
☆ﾟ.*･｡ﾟ(^ω^) ⇒ Star wand smile
☆(ゝω・)v ⇒ Winking star
☆⌒(ゝ。∂) ⇒ Playful wink
☆〜（ゝ。∂） ⇒ Cheeky star wink
☆ﾐ(o*･ω･)ﾉ ⇒ Shooting star throw
☆彡(ノ^ ^)ノ ⇒ Star swoosh
(*ﾟ▽ﾟ)ﾉ☆ ⇒ Tossing a star
(*≧▽≦)ﾉ☆ ⇒ Excited star throw
★~(◠‿◕✿) ⇒ Twirling star
```

### Category `shrug` — Shrug (main group: Actions; 50 kaomoji, dedicated page: /shrug-kaomoji)

Group `classic-shrug` · tags: shrug, idk, whatever, dunno · description: "shrugging face"

```
¯\_(ツ)_/¯ ⇒ Classic shrug
¯\(ツ)/¯ ⇒ Short shrug
¯\_( ͡° ͜ʖ ͡°)_/¯ ⇒ Lenny shrug
¯\_(•_•)_/¯ ⇒ Blank shrug
¯\_(ಠ_ಠ)_/¯ ⇒ Disapproving shrug
¯\_(⊙_ʖ⊙)_/¯ ⇒ Silly shrug
¯\_(°ペ)_/¯ ⇒ Confused shrug
¯\_(シ)_/¯ ⇒ Smiling shrug
¯\_(◉‿◉)_/¯ ⇒ Wide-eyed shrug
¯\_(-_-)_/¯ ⇒ Tired shrug
¯\_(´・ω・`)_/¯ ⇒ Awkward shrug
¯\_(￣ー￣)_/¯ ⇒ Smug shrug
¯\_(・_・)_/¯ ⇒ Puzzled shrug
¯\_(ತ_ʖತ)_/¯ ⇒ Skeptical shrug
```

Group `hands-up` · tags: shrug, whatever, meh, oh well · description: "face shrugging with hands up"

```
┐(￣ヘ￣)┌ ⇒ Whatever shrug
┐(￣ー￣)┌ ⇒ Unbothered shrug
┐(´ー`)┌ ⇒ Lazy shrug
┐(´～｀)┌ ⇒ Nonchalant shrug
┐(￣～￣)┌ ⇒ Meh shrug
┐( ˘_˘ )┌ ⇒ Resigned shrug
┐(‘～`;)┌ ⇒ Nervous shrug
┐(︶▽︶)┌ ⇒ Oh well grin
┐(￣∀￣)┌ ⇒ Grinning shrug
┐(´∀｀)┌ ⇒ Laid-back shrug
┐(シ)┌ ⇒ Tiny shrug
┐( ´ д ` )┌ ⇒ Exasperated shrug
┐( ˘ ､ ˘ )┌ ⇒ Sighing shrug
┐(´д｀)┌ ⇒ Fed up shrug
┐(︶︿︶)┌ ⇒ Bored shrug
╮(￣～￣)╭ ⇒ Who knows
╮(￣▽￣)╭ ⇒ Oh well
╮(╯▽╰)╭ ⇒ Hopeless shrug
╮(╯∀╰)╭ ⇒ Cheeky shrug
╮(︶﹏︶)╭ ⇒ Grumpy shrug
╮(︶︿︶)╭ ⇒ Unimpressed shrug
╮( ˘ ､ ˘ )╭ ⇒ Sighing meh
╮(─▽─)╭ ⇒ Deadpan shrug
╮(￣ω￣;)╭ ⇒ Sweaty shrug
╮(. ❛ ᴗ ❛.)╭ ⇒ Innocent shrug
```

Group `other-shrug` · tags: shrug, no idea, confused, whatever · description: "face shrugging with arms out"

```
ヽ(ー_ー )ノ ⇒ Not my problem
ヽ(´ー｀)┌ ⇒ Half shrug
ヽ(～～～ )ノ ⇒ Speechless shrug
乁( •_• )ㄏ ⇒ No idea
乁(ツ)ㄏ ⇒ Simple no idea
乁( ◔ ౪◔)「 ⇒ Goofy no idea
ʅ(°_°)ʃ ⇒ Clueless
ʅ(￣ー￣)ʃ ⇒ Smirking clueless
ʅ（´◔౪◔）ʃ ⇒ Derpy clueless
ʅ(ツ)ʃ ⇒ Carefree clueless
ʅ(◞‿◟)ʃ ⇒ Sheepish clueless
```

### Category `bunny` — Bunny (main group: Animals; 51 kaomoji, dedicated page: /bunny-kaomoji)

Group `bunny-ears` · tags: bunny, rabbit, bunny ears, animal · description: "bunny face with long ears"

```
(\_/) ⇒ Bunny ears
／(・ × ・)＼ ⇒ Bunny with long ears
／(=・ x ・=)＼ ⇒ Rabbit with whiskers
／(^ x ^)＼ ⇒ Happy bunny
／(^ x ^=)＼ ⇒ Smiling rabbit
／(≧ x ≦)＼ ⇒ Excited bunny
／(・x・)＼ ⇒ Plain bunny
／(*・x・*)＼ ⇒ Blushing bunny
／(￣x￣)＼ ⇒ Sleepy rabbit
／(=´x`=)＼ ⇒ Smug rabbit
／(˃ᆺ˂)＼ ⇒ Squealing bunny
／(•ᆺ•)＼ ⇒ Curious bunny
／(◕ᆺ◕)＼ ⇒ Wide-eyed bunny
／(˘ᆺ˘)＼ ⇒ Calm bunny
／(ㆁᆺㆁ)＼ ⇒ Dazed bunny
／(╥ᆺ╥)＼ ⇒ Crying bunny
／(>ᆺ<)＼ ⇒ Flustered bunny
／(°ᆺ°)＼ ⇒ Shocked bunny
／(ᵔᆺᵔ)＼ ⇒ Content bunny
／(-ᆺ-)＼ ⇒ Dozing bunny
／(´•ᆺ•`)＼ ⇒ Worried bunny
／(｡•ㅅ•｡)＼ ⇒ Shy little bunny
```

Group `bunny-face` · tags: bunny, rabbit, cute, soft · description: "cute bunny face"

```
૮ ˶ᵔ ᵕ ᵔ˶ ა ⇒ Sweet bunny
૮₍ ˶ᵔ ᵕ ᵔ˶ ₎ა ⇒ Snug little bunny
૮₍ ˃ ⤙ ˂ ₎ა ⇒ Pouty bunny
૮₍´˶• . • ⑅ ₎ა ⇒ Teary-eyed bunny
૮(˶ᵔᵕᵔ˶)ა ⇒ Fluffy bunny
૮₍ ˶•⤙•˶ ₎ა ⇒ Kissy bunny
૮₍ ´• ˕ •` ₎ა ⇒ Thoughtful bunny
૮₍ ˃ ᵕ ˂ ₎ა ⇒ Giggling bunny
૮₍ ꈍ ᴗ ꈍ ₎ა ⇒ Peaceful bunny
૮₍ ˶ᵔ ᵕ ᵔ˶ ₎ა♡ ⇒ Bunny with a heart
(•ㅅ•) ⇒ Little bunny face
(・ㅅ・) ⇒ Tiny rabbit face
(◕ㅅ◕) ⇒ Round-eyed bunny
(˘ㅅ˘) ⇒ Drowsy bunny
(｡•ㅅ•｡)♡ ⇒ Bunny sending love
(⁀ㅅ⁀) ⇒ Smiling bunny nose
(ᵔㅅᵔ) ⇒ Happy bunny nose
(っ•ㅅ•)っ ⇒ Bunny wants a hug
(ฅ•ㅅ•ฅ) ⇒ Bunny paws
```

Group `bunny-hop` · tags: bunny, rabbit, hop, happy · description: "bunny with paws up"

```
∩(・ω・)∩ ⇒ Bunny paws up
∩( ・ω・)∩ ⇒ Hopping bunny
∩(￣ー￣)∩ ⇒ Smug hopping bunny
∩(︶▽︶)∩ ⇒ Joyful hop
∩(´∀｀)∩ ⇒ Laughing bunny
∩(^ω^)∩ ⇒ Cheerful bunny hop
∩(>ω<)∩ ⇒ Excited bunny hop
∩(=・ω・=)∩ ⇒ Whiskered hop
∩(˘ᵕ˘)∩ ⇒ Gentle bunny hop
∩(•ㅅ•)∩ ⇒ Little bunny hop
```

### Category `angry` — Angry (main group: Emotions; 59 kaomoji, dedicated page: /angry-kaomoji)

Group `mad` · tags: angry, mad, rage, annoyed · description: "angry face"

```
(╬ Ò﹏Ó) ⇒ Seething frown
(╬ಠ益ಠ) ⇒ Furious glare
(╬≖_≖) ⇒ Annoyed stare
(╬￣皿￣) ⇒ Gritting teeth
(╬ﾟдﾟ) ⇒ Fuming
(＃`Д´) ⇒ Shouting angrily
(＃｀皿´) ⇒ Snarling
(#`皿´) ⇒ Clenched teeth
(｀Д´) ⇒ Yelling
(｀皿´＃) ⇒ Growling
(｀Д´＃) ⇒ Angry shout
(｀ε´) ⇒ Pouting angrily
(｀ー´) ⇒ Irritated
(`ヘ´) ⇒ Grumpy frown
(｀へ´) ⇒ Sulky frown
(-_-メ) ⇒ Irritated vein
(ﾒ` ﾛ ´) ⇒ Ticked off
(ﾒ｀д´) ⇒ Cross face
(ꐦ ಠ皿ಠ ) ⇒ Raging glare
(҂ `з´ ) ⇒ Scowling
(っ`-´c) ⇒ Grumbling
(◣_◢) ⇒ Menacing glare
(▼皿▼#) ⇒ Evil fury
(ﾟДﾟ#) ⇒ Outraged
(๑`^´๑) ⇒ Huffy pout
(⋋▂⋌) ⇒ Boiling over
```

Group `glare` · tags: angry, glare, annoyed, unimpressed · description: "glaring disapproving face"

```
(ಠ_ಠ) ⇒ Unimpressed stare
(ಠ益ಠ) ⇒ Raging stare
(ಠ︵ಠ) ⇒ Disapproving frown
(ಠ ∩ಠ) ⇒ Glaring mouth open
(ಠ⌣ಠ) ⇒ Smug glare
ಠ_ಠ ⇒ Look of disapproval
ಠ╭╮ಠ ⇒ Judging stare
(¬_¬) ⇒ Side-eye
(¬_¬") ⇒ Annoyed side-eye
(¬､¬) ⇒ Doubtful side-eye
(￣^￣) ⇒ Grumpy huff
(￣ヘ￣) ⇒ Pouty grump
(￣︿￣) ⇒ Sour frown
(눈_눈) ⇒ Unamused stare
(눈‸눈) ⇒ Fed-up stare
```

Group `fight` · tags: angry, fight, rage, furious · description: "furious face ready to fight"

```
(#`Д´)ﾉ ⇒ Angry wave
(ノಠ益ಠ)ノ ⇒ Furious arms up
(ノ°益°)ノ ⇒ Enraged arms up
(ノ｀Д´)ノ ⇒ Shouting arms up
(屮｀∀´)屮 ⇒ Mocking taunt
(•̀o•́)ง ⇒ Determined fist
(ง'̀-'́)ง ⇒ Ready to fight
(ง •̀_•́)ง ⇒ Fighting stance
(╯°益°)╯ ⇒ Raging lunge
(╯`Д´)╯ ⇒ Angry lunge
ヽ(`Д´)ﾉ ⇒ Throwing a fit
ヽ(#`Д´)ﾉ ⇒ Tantrum
ヽ(｀⌒´メ)ノ ⇒ Stomping mad
ヾ(｀ヘ´)ﾉﾞ ⇒ Shooing away
ヾ(`Д´*)ﾉ ⇒ Flailing angrily
٩(╬ʘ益ʘ╬)۶ ⇒ Full rage
٩(ఠ益ఠ)۶ ⇒ Beyond furious
(๑•̀ㅁ•́๑)✧ ⇒ Fired up
```

### Category `angel` — Angel (main group: Love; 53 kaomoji, dedicated page: /angel-kaomoji)

Group `angel-wings` · tags: angel, wings, innocent, sweet · description: "angel face with wings"

```
ʚ(ˊᗜˋ)ɞ ⇒ Happy angel
ʚ( ˘ᵕ˘ )ɞ ⇒ Peaceful angel
ʚ(•‿•)ɞ ⇒ Simple angel
ʚ(◕‿◕)ɞ ⇒ Bright-eyed angel
ʚ(｡◕‿◕｡)ɞ ⇒ Sweet little angel
ʚ(*´▽`*)ɞ ⇒ Blissful angel
ʚ(˶ᵔ ᵕ ᵔ˶)ɞ ⇒ Gentle angel
ʚ(ᵔ◡ᵔ)ɞ ⇒ Smiling angel
ʚ(♡‿♡)ɞ ⇒ Loving angel
ʚ(˘︶˘)ɞ ⇒ Content angel
ʚ( ˶ˆᗜˆ˵ )ɞ ⇒ Cheerful angel
ʚ(＾▽＾)ɞ ⇒ Grinning angel
ʚ(◡ ω ◡)ɞ ⇒ Dreamy angel
ʚ(ꈍᴗꈍ)ɞ ⇒ Serene angel
ʚ(˃ᴗ˂)ɞ ⇒ Giggling angel
ʚ(-ω-)ɞ ⇒ Sleepy angel
ʚ(╥﹏╥)ɞ ⇒ Sad angel
ʚ(✿◠‿◠)ɞ ⇒ Flower angel
ʚ(⸝⸝ᵕᴗᵕ⸝⸝)ɞ ⇒ Shy angel
ʚ(｀・ω・´)ɞ ⇒ Determined angel
ʚ(ᵕᴗᵕ)ɞ ⇒ Calm angel
ʚ(˘◡˘)ɞ ⇒ Soft angel smile
ʚ(^‿^)ɞ ⇒ Joyful angel
꒰ঌ(•ᴗ•)໒꒱ ⇒ Tiny angel
｡ﾟ✧ ʚ(•ᴗ•)ɞ ✧ﾟ｡ ⇒ Sparkling angel
✧ ʚ(ˊᵕˋ)ɞ ✧ ⇒ Twinkling angel
꒰ঌ(ᵔᴗᵔ)໒꒱ ⇒ Little angel
꒰ঌ(˶ˆᗜˆ˵)໒꒱ ⇒ Beaming angel
꒰ঌ(◕‿◕)໒꒱ ⇒ Wide-eyed angel
꒰ঌ(˘ᵕ˘)໒꒱ ⇒ Restful angel
꒰ঌ(♡‿♡)໒꒱ ⇒ Angel in love
꒰ঌ(ꈍᴗꈍ)໒꒱ ⇒ Dreaming angel
```

Group `flying-angel` · tags: angel, flying, happy, innocent · description: "happy flying angel"

```
ଘ(੭ˊᵕˋ)੭ ⇒ Flying angel
ଘ(੭*ˊᵕˋ)੭* ⇒ Soaring angel
ଘ(੭ˊ꒳ˋ)੭✧ ⇒ Sparkly flying angel
ଘ(⸝⸝ᵕᴗᵕ⸝⸝)ଓ ⇒ Blushing angel
ଘ(˶ᵔ ᵕ ᵔ˶)ଓ ⇒ Rosy-cheeked angel
ଘ(•‿•)ଓ ⇒ Angel with wings out
ଘ(◕‿◕)ଓ ⇒ Fluttering angel
ଘ( ˊᵕˋ )ଓ ⇒ Hovering angel
⁽⁽ଘ( ˊᵕˋ )ଓ⁾⁾ ⇒ Floating angel
⁽⁽ଘ(ˊᗜˋ)ଓ⁾⁾ ⇒ Bouncing angel
ଘ(｡•́‿•̀｡)ଓ ⇒ Kind angel
ଘ(♡‿♡)ଓ ⇒ Lovestruck angel
ଘ(˘︶˘)ଓ ⇒ Drifting angel
ଘ(੭•‿•)੭ ⇒ Angel arms up
ଘ(੭◕‿◕)੭ ⇒ Waving angel
ଘ(੭♡‿♡)੭ ⇒ Angel full of love
ଘ(੭˘︶˘)੭ ⇒ Cozy flying angel
ଘ(੭ˊᗜˋ)੭ ⇒ Celebrating angel
ଘ(੭ᵔ◡ᵔ)੭ ⇒ Happy flying angel
ଘ(੭˃ᴗ˂)੭ ⇒ Excited flying angel
ଘ(✿◠‿◠)ଓ ⇒ Flower flying angel
```

### Category `blush` — Blush (main group: Emotions; 52 kaomoji, dedicated page: /blush-kaomoji)

Group `shy` · tags: blush, shy, embarrassed, flustered · description: "shy blushing face"

```
(⁄ ⁄•⁄ω⁄•⁄ ⁄) ⇒ Shy and blushing
(⁄ ⁄>⁄ ▽ ⁄<⁄ ⁄) ⇒ Embarrassed squirm
(⁄ ⁄^⁄ω⁄^⁄ ⁄) ⇒ Bashful blush
(*/ω＼*) ⇒ Hiding face
(*/▽＼*) ⇒ Peeking through hands
(*/_＼) ⇒ Covering face
(*ノωノ) ⇒ Hiding a smile
(*ノ▽ノ) ⇒ Hiding a grin
(*ﾉ∀`*) ⇒ Embarrassed giggle
(〃ノωノ) ⇒ Shyly hiding
(//▽//) ⇒ Bright red cheeks
(//ω//) ⇒ Red-faced
(/ω＼) ⇒ Covering eyes
(/▽＼) ⇒ Too shy to look
(>/////<) ⇒ Totally flustered
(⸝⸝⸝>﹏<⸝⸝⸝) ⇒ Flustered squirm
(＞﹏＜) ⇒ Cringing
(〃＞＿＜;〃) ⇒ Awkward embarrassment
(ﾉ∀`*) ⇒ Sheepish laugh
(✿//▽//) ⇒ Flower blush
(*/ᴗ＼*) ⇒ Hiding shy smile
```

Group `rosy` · tags: blush, rosy cheeks, happy, cute · description: "smiling face with rosy cheeks"

```
(〃▽〃) ⇒ Flustered smile
(〃ω〃) ⇒ Rosy omega face
(〃∀〃) ⇒ Blushing grin
(〃´∀`) ⇒ Smitten blush
(〃ﾟ3ﾟ〃) ⇒ Whistling innocently
(*^.^*) ⇒ Rosy cheeks
(*^_^*) ⇒ Blushing smile
(*´ω`*) ⇒ Warm blush
(o^ ^o) ⇒ Shy grin
(✿´‿`) ⇒ Gentle blush
(˶˃ᆺ˂˶) ⇒ Squinting blush
(˶• ᴗ •˶) ⇒ Soft rosy cheeks
(˶ˊᵕˋ˶) ⇒ Sweet blush
(⸝⸝⸝• ω •⸝⸝⸝) ⇒ Glowing cheeks
(⸝⸝ᵕᴗᵕ⸝⸝) ⇒ Peaceful blush
(⸝⸝˃ᴗ˂⸝⸝) ⇒ Giggly blush
(灬º‿º灬) ⇒ Blushing happily
(灬╹ω╹灬) ⇒ Bashful smile
(灬ºωº灬) ⇒ Pink-cheeked wonder
(๑•́ ₃ •̀๑) ⇒ Pouty blush
(๑>ᴗ<๑) ⇒ Grinning blush
(っ˶´ ˘ `˶ς) ⇒ Wistful blush
(●´ω｀●) ⇒ Round-cheeked blush
(●´∀｀●) ⇒ Blushing laugh
(●＾o＾●) ⇒ Delighted blush
(●♡∀♡) ⇒ Lovesick blush
(*≧ω≦*) ⇒ Squealing blush
(〃ˆᴗˆ〃) ⇒ Pleased blush
(*ˊᵕˋ*) ⇒ Shy happiness
(⸝⸝ᵔᴗᵔ⸝⸝) ⇒ Content blush
(〃•ᴗ•〃) ⇒ Rosy little face
```

### Category `hug` — Hug (main group: Love; 24 kaomoji, homepage section only)

Group `hug` · tags: hug, cuddle, comfort, friendship · description: "face reaching out for a hug"

```
(づ｡◕‿‿◕｡)づ ⇒ Big warm hug
(っ´▽`)っ ⇒ Coming in for a hug
⊂(・▽・⊂) ⇒ Open arms
⊂(◉‿◉)つ ⇒ Excited open arms
⊂(´・ω・｀⊂) ⇒ Shy hug
⊂(￣▽￣)⊃ ⇒ Wide open arms
(つ≧▽≦)つ ⇒ Excited hug
(つ✧ω✧)つ ⇒ Sparkly hug
(つ ͡° ͜ʖ ͡°)つ ⇒ Lenny hug
(づ◡﹏◡)づ ⇒ Sleepy hug
(づ ◕‿◕ )づ ⇒ Happy hug
(づ｡◕‿◕｡)づ ⇒ Kawaii hug
(っ´ω`)ﾉ(╥ω╥) ⇒ Comforting a friend
(ノ_<。)ヾ(´ ▽ ` ) ⇒ Cheering someone up
(っ＾▿＾)っ ⇒ Cheerful hug
(っ◕‿◕)っ ⇒ Friendly hug
(っಠ‿ಠ)っ ⇒ Suspicious hug
(⊃｡•́‿•̀｡)⊃ ⇒ Gentle hug
⊂(´• ω •`⊂) ⇒ Soft open arms
(ɔ◔‿◔)ɔ ♥ ⇒ Hug with love
(っ.❛ ᴗ ❛.)っ ⇒ Cozy hug
(∩˃o˂∩)♡ ⇒ Squeeze with a heart
(つ˵•́ω•̀˵)つ ⇒ Eager hug
⊂((・▽・))⊃ ⇒ Wiggly hug
```

### Category `bear` — Bear (main group: Animals; 29 kaomoji, homepage section only)

Group `bear` · tags: bear, teddy, animal, cute · description: "bear face"

```
ʕ•ᴥ•ʔ ⇒ Classic bear
ʕ·ᴥ·ʔ ⇒ Little bear
ʕ ᵔᴥᵔ ʔ ⇒ Happy bear
ʕ￫ᴥ￩ʔ ⇒ Side-eyeing bear
ʕ→ᴥ←ʔ ⇒ Shifty bear
ʕ´•ᴥ•`ʔ ⇒ Shy bear
ʕ≧ᴥ≦ʔ ⇒ Excited bear
ʕ•̀ω•́ʔ✧ ⇒ Determined bear
ʕ ꈍᴥꈍʔ ⇒ Sleepy bear
ʕ ˵• ₒ •˵ ʔ ⇒ Surprised little bear
ʕ ˙ᴥ˙ ʔ ⇒ Calm bear
ʕ ·(エ)· ʔ ⇒ Teddy bear
ʕっ•ᴥ•ʔっ ⇒ Bear reaching out
ʕ ⊃･ ◡ ･ ʔ⊃ ⇒ Bear offering a hug
ʕ ◕ᴥ◕ ʔ ⇒ Bright-eyed bear
ʕ•ᴥ•ʔﾉ♡ ⇒ Bear sending love
ʕ ಠᴥಠ ʔ ⇒ Disapproving bear
ʕ T ᴥ T ʔ ⇒ Crying bear
ʕ ᵕᴥᵕ ʔ ⇒ Peaceful bear
ʕ ˶ᵔ ᴥ ᵔ˶ ʔ ⇒ Rosy-cheeked bear
ʕ ´ᴥ` ʔ ⇒ Mellow bear
ʕ⊙ᴥ⊙ʔ ⇒ Surprised bear
ʕ ﾟ ● ﾟʔ ⇒ Bear with a big nose
⊂(￣(ｴ)￣)⊃ ⇒ Bear hug
(￣(ｴ)￣) ⇒ Bear face
(／(ｴ)＼) ⇒ Bear covering eyes
(*￣(ｴ)￣*) ⇒ Blushing bear
(´(ｴ)｀) ⇒ Shy bear face
(ᵔᴥᵔ) ⇒ Smiling bear
```

### Category `dog` — Dog (main group: Animals; 21 kaomoji, homepage section only)

Group `dog` · tags: dog, puppy, animal, cute · description: "dog face"

```
૮ ˶• ﻌ •˶ ა ⇒ Cute puppy
૮ ･ﻌ･ა ⇒ Little puppy
૮ ◞ ﻌ ◟ ა ⇒ Sad puppy
૮ ⚆ﻌ⚆ა ⇒ Wide-eyed puppy
૮ ˶ᵔ ﻌ ᵔ˶ ა ⇒ Happy puppy
∪･ω･∪ ⇒ Floppy-eared dog
∪＾ェ＾∪ ⇒ Grinning dog
∪´ω`∪ ⇒ Content dog
U＾ェ＾U ⇒ Cheerful dog
U・ᴥ・U ⇒ Happy dog
U^ｪ^U ⇒ Smiling dog
U •ﻌ• U ⇒ Calm dog
(❍ᴥ❍ʋ) ⇒ Drooling dog
(◕ᴥ◕ʋ) ⇒ Bright-eyed dog
(ᵔᴥᵔʋ) ⇒ Joyful dog
V●ᴥ●V ⇒ Pointy-eared dog
V•ᴥ•V ⇒ Pointy-eared pup
V^ᴥ^V ⇒ Happy pointy-eared pup
(・ｪ・) ⇒ Small dog face
(U・x・U) ⇒ Floppy-eared puppy
(ᐡ•ﻌ•ᐡ) ⇒ Fluffy dog
```

### Category `sleepy` — Sleepy (main group: Emotions; 20 kaomoji, homepage section only)

Group `sleepy` · tags: sleepy, sleep, tired, zzz, night · description: "sleeping face"

```
(－_－) zzZ ⇒ Snoozing
(￣o￣) zzZZzzZZ ⇒ Snoring loudly
(∪｡∪)｡｡｡zzZ ⇒ Deep sleep
(-.-)Zzz... ⇒ Dozing off
(ᴗ˳ᴗ) ⇒ Peacefully asleep
(ᴗ_ᴗ) ⇒ Eyes closed
(-_-) zzZ ⇒ Napping
(￣ρ￣)..zzZZ ⇒ Drooling in sleep
(＿ ＿*) Z z z ⇒ Face down asleep
(x . x) ~~zzZ ⇒ Knocked out
(´〜｀*) zzz ⇒ Sleepy sigh
(=_=) ⇒ Exhausted
(～﹃～)~zZ ⇒ Drowsy drool
(ᵕ—ᴗ—) ⇒ Resting eyes
(｡-ω-)zzz ⇒ Cozy nap
(￣ー￣)zzZ ⇒ Smug nap
(～ o ～) Zz ⇒ Yawning
(ᴗ ᴗ)ᶻᶻᶻ ⇒ Sound asleep
(っ- ‸ - ς) ⇒ Drifting off
(-ω-) zzZ ⇒ Comfy snooze
```

### Category `surprised` — Surprised (main group: Emotions; 26 kaomoji, homepage section only)

Group `surprised` · tags: surprised, shocked, wow, omg · description: "surprised shocked face"

```
(°ロ°) ⇒ Shocked face
(⊙_⊙) ⇒ Wide-eyed stare
(⊙ω⊙) ⇒ Stunned
(⊙▽⊙) ⇒ Amazed
(⊙０⊙) ⇒ Speechless
(O_O) ⇒ Wide eyes
(o_O) ⇒ Confused surprise
(O_o) ⇒ Double take
(°o°) ⇒ Gasping
(ﾟДﾟ) ⇒ Startled
(☉｡☉)! ⇒ Surprised blink
(◎_◎;) ⇒ Dizzy surprise
(＊〇□〇)……！ ⇒ Utterly shocked
(・□・;) ⇒ Awkward surprise
(゜-゜) ⇒ Blank surprise
(□_□) ⇒ Blank stare
w(°ｏ°)w ⇒ Whoa
Σ(°△°|||) ⇒ Horrified
Σ(O_O) ⇒ Shocked gasp
Σ(ﾟДﾟ) ⇒ Startled shout
Σ(°ロ°) ⇒ Startled jump
Σ(っ °Д °;)っ ⇒ Running away in shock
(ʘᗩʘ') ⇒ Jaw dropped
(ʘ_ʘ) ⇒ Staring in shock
∑(O_O;) ⇒ Nervous shock
ヽ(°〇°)ﾉ ⇒ Arms up in shock
```

### Category `table-flip` — Table Flip (main group: Actions; 21 kaomoji, homepage section only)

Group `flip` · tags: table flip, rage, flip, angry · description: "face flipping a table"

```
(╯°□°)╯︵ ┻━┻ ⇒ Classic table flip
(ノಠ益ಠ)ノ彡┻━┻ ⇒ Angry table flip
(╯ರ ~ ರ)╯︵ ┻━┻ ⇒ Grumpy table flip
┻━┻ ︵ヽ(`Д´)ﾉ︵ ┻━┻ ⇒ Double table flip
(ﾉ≧∇≦)ﾉ ﾐ ┸━┸ ⇒ Happy table flip
(╯‵□′)╯︵┻━┻ ⇒ Furious table flip
(┛ಠ_ಠ)┛彡┻━┻ ⇒ Disapproving flip
(┛◉Д◉)┛彡┻━┻ ⇒ Wild-eyed flip
(ノ°Д°）ノ︵ ┻━┻ ⇒ Shocked table flip
(ﾉ｀Д´)ﾉ彡┻━┻ ⇒ Raging flip
┻━┻ ︵ ¯\(ツ)/¯ ︵ ┻━┻ ⇒ Shrugging double flip
(╯°Д°)╯︵ /(.□ . \) ⇒ Flipping a person
ʕノ•ᴥ•ʔノ ︵ ┻━┻ ⇒ Bear flips table
(ﾉ´･ω･)ﾉ ﾐ ┸━┸ ⇒ Casual table flip
(╯✧∇✧)╯︵ ┻━┻ ⇒ Sparkly table flip
```

Group `unflip` · tags: table flip, calm down, put table back · description: "face calmly putting a table back"

```
┬─┬ノ( º _ ºノ) ⇒ Putting the table back
┬─┬ ノ( ゜-゜ノ) ⇒ Calmly fixing the table
┬──┬ ¯\_(ツ) ⇒ Shrugging at the table
(ヘ･_･)ヘ┳━┳ ⇒ Calming down
┳━┳ ヽ(ಠل͜ಠ)ﾉ ⇒ Smug table fix
(ノ^_^)ノ┻━┻ ┬─┬ ノ( ^_^ノ) ⇒ Flip and fix
```

### Category `wave` — Wave (main group: Actions; 19 kaomoji, homepage section only)

Group `wave` · tags: wave, hello, hi, bye · description: "face waving hello"

```
(・ω・)ノ ⇒ Little wave
(^_^)/ ⇒ Simple hello
(＾▽＾)/ ⇒ Happy hello
( ´ ▽ ` )ﾉ ⇒ Friendly wave
(^-^)/ ⇒ Cheerful hi
(｡･∀･)ﾉﾞ ⇒ Waving bye
(^o^)/ ⇒ Excited hello
(￣▽￣)ノ ⇒ Casual hi
(°▽°)/ ⇒ Waving hello
(・∀・)ノ ⇒ Bright hello
ヾ(＾∇＾) ⇒ Cheerful bye
ヾ(☆▽☆) ⇒ Starry wave
ヾ(・ω・*) ⇒ Cute wave
ヾ(￣▽￣) Bye~Bye~ ⇒ Bye-bye
(＾０＾)ノ ⇒ Loud hello
(*＾▽＾)／ ⇒ Big wave
ヾ(•ω•`)o ⇒ Shy wave
(｡･ω･)ﾉﾞ ⇒ Gentle wave
(⌒▽⌒)/ ⇒ Sunny wave
```
