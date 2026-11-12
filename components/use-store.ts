"use client";
import { useSyncExternalStore } from "react";
import { getServerState, getState, subscribe, type StoreState } from "@/lib/client-store";

export function useStore<T>(selector: (s: StoreState) => T): T {
  return useSyncExternalStore(
    subscribe,
    () => selector(getState()),
    () => selector(getServerState())
  );
}
