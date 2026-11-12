"use client";
// Closes <details data-autoclose> menus (header dropdowns, mobile menu,
// language switcher) on navigation, outside click or Escape. The menus
// themselves work without JavaScript.
import { usePathname } from "next/navigation";
import { useEffect } from "react";

export function DetailsCloser() {
  const pathname = usePathname();

  useEffect(() => {
    document.querySelectorAll<HTMLDetailsElement>("details[data-autoclose][open]").forEach((d) => (d.open = false));
  }, [pathname]);

  useEffect(() => {
    function onClick(e: MouseEvent) {
      document.querySelectorAll<HTMLDetailsElement>("details[data-autoclose][open]").forEach((d) => {
        if (!d.contains(e.target as Node)) d.open = false;
      });
    }
    function onKey(e: KeyboardEvent) {
      if (e.key !== "Escape") return;
      document.querySelectorAll<HTMLDetailsElement>("details[data-autoclose][open]").forEach((d) => {
        d.open = false;
        d.querySelector("summary")?.focus();
      });
    }
    document.addEventListener("click", onClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("click", onClick);
      document.removeEventListener("keydown", onKey);
    };
  }, []);

  return null;
}
