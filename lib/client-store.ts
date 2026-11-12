"use client";
// Tiny client-side store for consent, recently copied kaomoji and the
// Discord-safe setting. Optional data is only written to localStorage when the
// visitor has allowed "Preferences" storage; otherwise it lives in memory for
// the current page session only.

export const CONSENT_KEY = "kz-consent";
export const RECENT_KEY = "kz-recent";
export const DISCORD_KEY = "kz-discord-safe";
const CONSENT_VERSION = 1;
const MAX_RECENT = 12;

export interface ConsentState {
  version: number;
  preferences: boolean;
  updatedAt: string;
}

export interface StoreState {
  /** null = no valid choice saved yet (show the banner). */
  consent: ConsentState | null;
  /** True after the store has read localStorage on the client. */
  ready: boolean;
  discordSafe: boolean;
  recent: string[];
  settingsOpen: boolean;
}

let state: StoreState = { consent: null, ready: false, discordSafe: false, recent: [], settingsOpen: false };
const listeners = new Set<() => void>();
const SERVER_STATE: StoreState = state;

function emit() {
  listeners.forEach((l) => l());
}

function set(partial: Partial<StoreState>) {
  state = { ...state, ...partial };
  emit();
}

function safeGet(key: string): string | null {
  try {
    return window.localStorage.getItem(key);
  } catch {
    return null;
  }
}
function safeSet(key: string, value: string) {
  try {
    window.localStorage.setItem(key, value);
  } catch {
    /* storage unavailable: keep in memory only */
  }
}
function safeRemove(key: string) {
  try {
    window.localStorage.removeItem(key);
  } catch {
    /* ignore */
  }
}

let initialized = false;
export function initStore() {
  if (initialized || typeof window === "undefined") return;
  initialized = true;
  let consent: ConsentState | null = null;
  try {
    const raw = safeGet(CONSENT_KEY);
    const parsed = raw ? (JSON.parse(raw) as ConsentState) : null;
    if (parsed && parsed.version === CONSENT_VERSION && typeof parsed.preferences === "boolean") consent = parsed;
  } catch {
    consent = null;
  }
  let recent: string[] = [];
  let discordSafe = false;
  if (consent?.preferences) {
    try {
      const r = JSON.parse(safeGet(RECENT_KEY) ?? "[]");
      if (Array.isArray(r)) recent = r.filter((x) => typeof x === "string").slice(0, MAX_RECENT);
    } catch {
      recent = [];
    }
    discordSafe = safeGet(DISCORD_KEY) === "1";
  }
  set({ consent, recent, discordSafe, ready: true });
}

export function subscribe(listener: () => void) {
  listeners.add(listener);
  return () => listeners.delete(listener);
}
export const getState = () => state;
export const getServerState = () => SERVER_STATE;

export function saveConsent(preferences: boolean) {
  const consent: ConsentState = { version: CONSENT_VERSION, preferences, updatedAt: new Date().toISOString() };
  safeSet(CONSENT_KEY, JSON.stringify(consent));
  if (preferences) {
    // Persist what the visitor already did this session.
    safeSet(RECENT_KEY, JSON.stringify(state.recent));
    safeSet(DISCORD_KEY, state.discordSafe ? "1" : "0");
  } else {
    // Withdrawal: remove optional data from the browser.
    safeRemove(RECENT_KEY);
    safeRemove(DISCORD_KEY);
  }
  set({ consent, settingsOpen: false });
}

export function openSettings(open = true) {
  set({ settingsOpen: open });
}

export function setDiscordSafe(on: boolean) {
  if (state.consent?.preferences) safeSet(DISCORD_KEY, on ? "1" : "0");
  set({ discordSafe: on });
}

export function addRecent(kaomoji: string) {
  const recent = [kaomoji, ...state.recent.filter((k) => k !== kaomoji)].slice(0, MAX_RECENT);
  if (state.consent?.preferences) safeSet(RECENT_KEY, JSON.stringify(recent));
  set({ recent });
}

export function clearRecent() {
  safeRemove(RECENT_KEY);
  set({ recent: [] });
}
