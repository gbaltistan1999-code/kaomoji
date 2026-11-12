import { describe, expect, it } from "vitest";
import { escapeDiscord, needsDiscordEscape } from "@/lib/discord";
import { allKaomoji } from "@/data/kaomoji";

describe("escapeDiscord", () => {
  it("escapes the classic shrug so both arms survive", () => {
    expect(escapeDiscord("¯\\_(ツ)_/¯")).toBe("¯\\\\\\_(ツ)\\_/¯");
  });
  it("escapes asterisks, underscores, tildes, backticks and pipes", () => {
    expect(escapeDiscord("(*/ω＼*)")).toBe("(\\*/ω＼\\*)");
    expect(escapeDiscord("(-_-) zzZ")).toBe("(-\\_-) zzZ");
    expect(escapeDiscord("☆〜（ゝ。∂）~")).toBe("☆〜（ゝ。∂）\\~");
    expect(escapeDiscord("(´・ω・`)")).toBe("(´・ω・\\`)");
    expect(escapeDiscord("a|b")).toBe("a\\|b");
  });
  it("escapes the bunny backslash", () => {
    expect(escapeDiscord("(\\_/)")).toBe("(\\\\\\_/)");
  });
  it("leaves kaomoji without markdown characters untouched", () => {
    expect(escapeDiscord("(｡◕‿◕｡)")).toBe("(｡◕‿◕｡)");
    expect(needsDiscordEscape("(｡◕‿◕｡)")).toBe(false);
  });
  it("is reversible: removing one backslash before each escaped char gives the original", () => {
    for (const k of allKaomoji) {
      const unescaped = escapeDiscord(k.kaomoji).replace(/\\([\\_*~`|])/g, "$1");
      expect(unescaped).toBe(k.kaomoji);
    }
  });
});
