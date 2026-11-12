// Discord treats \ _ * ~ ` | as markdown. Unescaped, the shrug ¯\_(ツ)_/¯
// loses its arm and text between underscores turns italic.
// Escaping each of these characters with a backslash makes it paste literally.

export function escapeDiscord(text: string): string {
  return text.replace(/[\\_*~`|]/g, (ch) => `\\${ch}`);
}

export function needsDiscordEscape(text: string): boolean {
  return /[\\_*~`|]/.test(text);
}
