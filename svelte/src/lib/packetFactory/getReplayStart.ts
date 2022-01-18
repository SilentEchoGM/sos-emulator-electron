import { gameId } from "$lib/frontend/stores";
import type { SOS } from "$lib/types/sosPluginEvents";
import { get } from "svelte/store";
import { getMisc } from "./getMisc";

export const getReplayStartPlain = () =>
  ({
    data: "game_replay_start",
    event: "game:replay_start",
  } as SOS.GameReplayStart);

export const getReplayStartData = ({ match_guid = get(gameId) }) =>
  getMisc("game:replay_start")({ match_guid }) as SOS.GameMisc;
