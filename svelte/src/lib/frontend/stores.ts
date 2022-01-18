import { writable } from "svelte/store";
import type { Writable } from "svelte/store";
import type { SOS } from "$lib/types/sosPluginEvents";
import { getPlayerStore } from "$lib/packetFactory/utils/getPlayerStore";
import localForage from "localforage";
import { browser } from "$app/env";
import { v4 } from "uuid";

// const prettyMapNames = {
//   "Stadium_P":
// }

export const createPersistentStore = (defaultValue: any, name: string) => {
  if (!browser) return writable(defaultValue);
  const { set, subscribe, update } = writable(defaultValue);

  const save = (value: any) => {
    localForage.setItem(name, value);
    set(value);
  };

  return {
    set: save,
    subscribe,
    update,
  };
};

export const matchSettings = createPersistentStore(
  {
    arena: "Stadium_P",
    blueName: "BLUE",
    orangeName: "ORANGE",
    blueScore: 0,
    orangeScore: 0,
    time: 300,
  },
  "settings"
);

export const matchBoolSettings = createPersistentStore(
  {
    isOT: false,
    isReplay: false,
  },
  "bools"
);

export const target = writable("");

export const players: Writable<SOS.PlayersStore> = createPersistentStore(
  getPlayerStore(),
  "players"
);

export const gameId = createPersistentStore(v4(), "gameId");
