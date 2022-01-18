import { gameId } from "$lib/frontend/stores";
import type { SOS } from "$lib/types/sosPluginEvents";
import { get } from "svelte/store";

export const getMatchEnded = ({
  match_guid = get(gameId),
  winner_team_num = 0,
}: SOS.MatchGUIDData & { winner_team_num: 0 | 1 }) =>
  ({
    event: "game:match_ended",
    data: {
      match_guid,
      winner_team_num,
    },
  } as SOS.GameMatchEnded);
