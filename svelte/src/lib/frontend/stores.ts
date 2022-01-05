import { writable } from "svelte/store";
import type { Writable } from "svelte/store";
import type { SOS } from "$lib/types/sosPluginEvents";
import { getPlayerStore } from "$lib/packetFactory/utils/getPlayerStore";

// const prettyMapNames = {
//   "Stadium_P":
// }

export const matchSettings = writable({
  arena: "Stadium_P",
  blueName: "BLUE",
  orangeName: "ORANGE",
  blueScore: 0,
  orangeScore: 0,
  time: 300,
});

export const matchBoolSettings = writable({
  isOT: false,
  isReplay: false,
});

export const target = writable("");

export const players: Writable<SOS.PlayersStore> = writable(getPlayerStore());
