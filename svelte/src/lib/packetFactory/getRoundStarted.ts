import type { SOS } from "$lib/types/sosPluginEvents";

export const getRoundStarted = () =>
  ({
    data: "game_round_started_go",
    event: "game:round_started_go",
  } as SOS.GameRoundStarted);
