import { gameId } from "$lib/frontend/stores";
import type { SOS } from "$lib/types/sosPluginEvents";
import { get } from "svelte/store";

export const getMisc =
  (event: SOS.Event) =>
  ({ match_guid = get(gameId) }) =>
    ({
      data: {
        match_guid,
      },
      event,
    } as SOS.GameMisc);
