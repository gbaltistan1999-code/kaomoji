import type { MakerContent } from "@/types/i18n";

export const maker: MakerContent = {
  title: "Kaomoji Maker: Create Your Own Japanese Text Face",
  description:
    "Build your own kaomoji by picking arms, cheeks, eyes, mouth and decorations. Live preview, randomize, and one-click copy, including Discord-safe copy. Free, runs in your browser.",
  h1: "Kaomoji Maker",
  intro: "Pick the parts, watch your face come together, and copy it in one click. Everything runs in your browser.",
  sections: [
    {
      heading: "How the Kaomoji Maker works",
      list: [
        "Choose each part from the dropdowns: arms, face edges, cheeks, eyes, mouth and a decoration.",
        "The preview updates instantly. Mix the left and right sides freely for lopsided or winking faces.",
        "Press Randomize for a balanced random face, then tweak any part you like.",
        "Press Copy, or Copy for Discord if you'll paste it into Discord.",
      ],
    },
    {
      heading: "Tips for making a good kaomoji",
      list: [
        "Match the mood across parts: soft eyes (ᵔ, ◕) go with soft mouths (‿, ω), and sharp eyes (ಠ, ò ó) go with harsh mouths (益, 皿).",
        "Use cheeks for emotion: ˶ or 〃 for blushing, ; for tears or sweat, ╬ for anger.",
        "Arms tell the action: ヽ ﾉ is cheering, ┐ ┌ is shrugging, ⊂ ⊃ is a hug, and ʚ ɞ turns any face into an angel.",
        "Keep it short if it's going into a username or bio with a character limit.",
      ],
      examples: ["ヽ(◕‿◕)ﾉ", "ʚ(˶ᵔωᵔ˶)ɞ", "┐(￣ー￣)┌"],
    },
    {
      heading: "Will my kaomoji display everywhere?",
      paragraphs: [
        "It depends on the characters you choose. Basic ones like ( ) ^ _ o and ‿ show up almost everywhere. Parts borrowed from less common scripts, such as ଘ ଓ wings or ૮ ა ears, may appear as boxes on older devices. If you want maximum compatibility, stick to simpler parts.",
      ],
    },
    {
      heading: "Looking for inspiration?",
      paragraphs: [
        "Browse ready-made faces for ideas: [cute](page:cute), [cat](page:cat), [bunny](page:bunny), [angry](page:angry), [shrug](page:shrug) and [angel](page:angel) kaomoji show how different parts combine. Or go back to the [full kaomoji library](page:home).",
      ],
    },
  ],
  faqs: [
    {
      q: "Is the Kaomoji Maker free?",
      a: "Yes. It's free, needs no account, and works entirely in your browser.",
    },
    {
      q: "Do you save the kaomoji I make?",
      a: "No. Your creation exists only in your browser tab and on your clipboard when you copy it. Nothing is sent to us.",
    },
    {
      q: "Can I use the kaomoji I create anywhere?",
      a: "Yes. They're ordinary text, so you can paste them wherever text is accepted. Some apps may restrict unusual characters, though.",
    },
  ],
};
