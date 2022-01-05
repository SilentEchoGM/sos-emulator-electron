import type { TeamEnum } from "$lib/types/sosConsts";
import type { SOS } from "$lib/types/sosPluginEvents";
import { v4 } from "uuid";

export const getMatchEnded = ({
  match_guid = v4(),
  winner_team_num = 0,
}: SOS.MatchGUIDData & { winner_team_num: 0 | 1 }) =>
  ({
    event: "game:match_ended",
    data: {
      match_guid,
      winner_team_num,
    },
  } as SOS.GameMatchEnded);
