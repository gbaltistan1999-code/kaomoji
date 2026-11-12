import type { LocaleBundle } from "@/types/i18n";
import { allKaomoji } from "@/data/kaomoji";
import { ui } from "./ui";
import { groups } from "./groups";
import { home } from "./home";
import { categories } from "./categories";
import { maker } from "./maker";
import { pages } from "./pages";
import { symbolPages } from "./symbols";

// English labels are the source labels from Appendix A.
const labels: Record<string, string> = Object.fromEntries(allKaomoji.map((k) => [k.id, k.label]));

export const en: LocaleBundle = { ui, groups, labels, home, categories, maker, symbolPages, pages };
