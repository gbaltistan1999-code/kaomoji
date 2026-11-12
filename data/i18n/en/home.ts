import type { HomeContent } from "@/types/i18n";

export const home: HomeContent = {
  title: "Kaomoji Copy and Paste: 800+ Cute Japanese Text Faces",
  description:
    "Copy and paste over 800 kaomoji with one click: cute, happy, sad, cat, heart, shrug and more Japanese text faces, organized by emotion and animal. Free, no sign-up.",
  h1: "Kaomoji Copy and Paste",
  intro: "828 Japanese text faces, sorted by emotion and animal. Search, tap, and paste anywhere.",
  sections: [
    {
      heading: "What are kaomoji?",
      paragraphs: [
        "Kaomoji (顔文字) are faces made out of text characters. The Japanese word combines kao (face) and moji (character). Unlike Western emoticons such as :-) that you read by tilting your head sideways, kaomoji are read upright, with the eyes, mouth, cheeks and arms all facing you: (◕‿◕).",
        "Because they are just text, kaomoji can be pasted into almost any place that accepts text: chats, comments, bios, usernames, game chat and documents. They borrow characters from many writing systems, including Japanese kana, Cyrillic, Kannada, Thai, Greek and Korean, plus symbols, box-drawing characters and combining marks. That mix is what gives them so much expression.",
      ],
    },
    {
      heading: "Kaomoji vs emoji vs Western emoticons",
      paragraphs: [
        "All three express emotions, but they are built differently:",
      ],
      list: [
        "Western emoticons, like :) or ;-P, are short, sideways faces typed with basic keyboard characters.",
        "Kaomoji, like (╥﹏╥) or ヽ(・∀・)ﾉ, are upright faces made from many different text characters. They can include arms, actions and props.",
        "Emoji, like 😊, are single pictures. Each one has its own Unicode code point, and every platform draws it with its own artwork.",
      ],
      examples: ["(｡◕‿◕｡)", "(╥﹏╥)", "¯\\_(ツ)_/¯"],
    },
    {
      heading: "How to use this kaomoji library",
      list: [
        "Search by feeling, animal or action, for example cat, cry, love, hug or shrug.",
        "Or browse: choose a group (Emotions, Cute, Love, Animals, Actions, Sparkles), then a category.",
        "Tap or click any kaomoji. It is copied to your clipboard right away and a “Copied” message appears.",
        "Paste it wherever you like with Ctrl+V, Cmd+V, or a long press and Paste on a phone.",
      ],
      paragraphs: [
        "Every category also has its own page with the full list, grouped into smaller sections. For example, the [sad kaomoji page](page:sad) separates crying faces from lonely and disappointed ones.",
      ],
    },
    {
      heading: "How to type kaomoji on your phone or computer",
      paragraphs: [
        "Copying and pasting is the easiest way, which is what this site is for. If you use the same few faces all the time, try one of these:",
      ],
      list: [
        "Text replacement shortcuts. iPhone and iPad (Settings › General › Keyboard › Text Replacement), Mac (System Settings › Keyboard › Text Replacements) and many Android keyboards such as Gboard (personal dictionary) let you save a phrase. For example, typing “shrugg” could expand to ¯\\_(ツ)_/¯.",
        "Japanese keyboards. Many Japanese input methods (IMEs) suggest kaomoji when you type words like かお (kao). The exact list depends on your keyboard and operating system.",
        "Windows emoji panel. On Windows 10 and 11, press Windows key + . (period) and open the kaomoji tab for a small built-in selection.",
      ],
    },
    {
      heading: "Where kaomoji work, and where they might not",
      paragraphs: [
        "Kaomoji usually paste fine into Discord, Instagram captions and bios, TikTok comments, X posts, WhatsApp, Messenger, SMS, email and most in-game chats, because they are ordinary Unicode text.",
        "Some places are stricter. Username fields often allow only letters and numbers. Some games filter unusual characters. Character limits can also cut off longer kaomoji such as table flips. If a kaomoji is rejected, try a simpler one built from common characters, like (^_^) or (T_T).",
      ],
    },
    {
      heading: "Why do some kaomoji show up as boxes or question marks?",
      paragraphs: [
        "Every character in a kaomoji has to exist in a font on the device showing it. If no installed font has that character (glyph), you see an empty box (often called “tofu”), a question mark, or a gap. The system tries other fonts first (this is called font fallback), but older phones, smart TVs and some apps have limited fonts.",
        "Characters from less common scripts, such as ଘ, ʚ, ꒰ or ᓚᘏᗢ, are the ones that go missing most often. Combining marks, like the accents in •̀ᴗ•́, can also look shifted in some fonts. If your friend sees boxes, pick a kaomoji made from more common characters, or check the [Unicode Consortium's explanation of fonts and display issues](https://www.unicode.org/faq/font_keyboard.html).",
      ],
    },
    {
      heading: "The Discord problem: why your shrug loses an arm",
      paragraphs: [
        "Discord uses Markdown formatting. A backslash \\ means “show the next character literally”, text between _underscores_ or *asterisks* becomes italic or bold, ~~tildes~~ strike text through, `backticks` make code and ||pipes|| hide spoilers. So when you paste ¯\\_(ツ)_/¯, Discord treats the backslash as an escape, the underscore disappears, and the shrug loses its left arm.",
        "Turn on “Discord-safe copy” above the library. It adds a backslash before each of those characters, so the kaomoji shows up exactly as intended. Leave it off for other apps, because elsewhere the extra backslashes will show.",
      ],
      examples: ["¯\\_(ツ)_/¯"],
    },
    {
      heading: "Kaomoji and accessibility",
      paragraphs: [
        "Screen readers usually read kaomoji character by character. ヽ(・∀・)ﾉ might be announced as a string of symbol names, or skipped. For people using assistive technology, a long kaomoji can interrupt the message.",
        "Use kaomoji for flavor, not to carry important information. Put the meaning in words too (“congrats! ヽ(・∀・)ﾉ”), and avoid long kaomoji in usernames or alt text. On this site, every kaomoji button has a short spoken label, such as “Copy kaomoji: Stretching cat”, so screen reader users can browse without hearing raw symbols.",
      ],
    },
    {
      heading: "Popular kaomoji categories",
      paragraphs: [
        "Start with the collections people reach for most: [cute kaomoji](page:cute) for kawaii faces, [happy kaomoji](page:happy) for smiles, [sad and crying kaomoji](page:sad), [heart and love kaomoji](page:heart), and [cat kaomoji](page:cat).",
        "For something more specific, try the [shrug](page:shrug), [angry](page:angry), [blush](page:blush), [bunny](page:bunny), [angel](page:angel) or [star and sparkle](page:star) collections. You can also build your own face with the [Kaomoji Maker](page:maker).",
      ],
    },
  ],
  faqs: [
    {
      q: "What does kaomoji mean?",
      a: "Kaomoji is a Japanese word made from kao (face) and moji (character). It means faces drawn with text characters, such as (^_^) or (╥﹏╥).",
    },
    {
      q: "Are kaomoji free to use?",
      a: "Yes. Kaomoji are short text expressions that people everywhere use in messages, posts and bios. You can copy and use any kaomoji on this site freely.",
    },
    {
      q: "How do I copy a kaomoji?",
      a: "Tap or click it. It is copied to your clipboard right away, and a confirmation appears. Then paste it with Ctrl+V (Windows), Cmd+V (Mac), or a long press and Paste on your phone.",
    },
    {
      q: "What's the difference between kaomoji and emoji?",
      a: "An emoji is a single picture character that each platform draws in its own style. A kaomoji is built from several ordinary text characters, read upright, and looks like text in whatever font you are using.",
    },
    {
      q: "Why does my kaomoji show boxes?",
      a: "The device showing it has no font containing one or more of the characters. Try a kaomoji made from more common characters, or update your device or app.",
    },
    {
      q: "Why did my shrug lose its arm on Discord?",
      a: "Discord reads the backslash and underscores as formatting. Turn on Discord-safe copy before copying, and the needed backslashes are added for you.",
    },
    {
      q: "Do you store what I search or copy?",
      a: "No. Searching, copying and the Kaomoji Maker all run in your browser, and nothing you type or copy is sent to us. Your recently copied kaomoji are only saved on your device if you allow preference storage.",
    },
  ],
  conclusion: {
    heading: "Find your face and paste it anywhere",
    paragraphs: [
      "Whether you want a soft (˶ᵔ ᵕ ᵔ˶), a dramatic (╯°□°)╯︵ ┻━┻ or the classic ¯\\_(ツ)_/¯, scroll back up, search a feeling and tap to copy. Still can't find the one? Make it yourself in the [Kaomoji Maker](page:maker).",
    ],
  },
};
