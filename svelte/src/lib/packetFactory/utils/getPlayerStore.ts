import type { SOS } from "$lib/types/sosPluginEvents";
import { pipe } from "fp-ts/function";
import { array as A } from "fp-ts";
import { keys } from "fp-ts/Record";
import { getPlayer } from "./getPlayer";
import { TeamEnum } from "$lib/types/sosConsts";

const names = ["Darman", "Niner", "Fi", "Atin", "Etain", "Bardan", "Kal"];

export const getPlayerStore = (players: SOS.PlayersStore = {}) => {
  const neededCount = 6 - keys(players).length;
  return pipe(
    new Array(6 - keys(players).length),
    A.reduceWithIndex(players, (i, acc, _) => {
      const name = names[neededCount - i];
      const player = getPlayer(name, TeamEnum[(i % 2) + ""], acc);
      return {
        ...acc,
        [player.id]: player,
      };
    })
  ) as SOS.PlayersStore;
};
