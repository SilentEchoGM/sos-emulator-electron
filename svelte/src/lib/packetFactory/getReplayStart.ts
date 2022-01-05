import type { SOS } from "$lib/types/sosPluginEvents";
import { v4 } from "uuid";
import { getMisc } from "./getMisc";

export const getReplayStartPlain = () =>
  ({
    data: "game_replay_start",
    event: "game:replay_start",
  } as SOS.GameReplayStart);

export const getReplayStartData = ({ match_guid = v4() }) =>
  getMisc("game:replay_start")({ match_guid }) as SOS.GameMisc;
