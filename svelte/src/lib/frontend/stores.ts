import { writable } from "svelte/store";
import type { Writable } from 'svelte/store'
import type { SOS } from "$lib/types/sosPluginEvents";

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
})

export const target = writable("")

export const players: Writable<SOS.Player[]> = writable([] as SOS.Player[])