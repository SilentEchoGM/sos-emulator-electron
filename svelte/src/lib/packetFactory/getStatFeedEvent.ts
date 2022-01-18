import { gameId } from "$lib/frontend/stores";
import type { SOS } from "$lib/types/sosPluginEvents";
import { get } from "svelte/store";
import { getPlayer } from "./utils/getPlayer";
import { getTarget } from "./utils/getTarget";

type Options = {
  type: SOS.StatFeedEvent;
  mainTarget: SOS.Player;
  secondaryTarget: SOS.Player | null;
  match_guid: string;
};

export const getStatFeedEvent = ({
  type = "Shot on Goal",
  mainTarget = getPlayer(),
  secondaryTarget = null,
  match_guid = get(gameId),
}: Options) =>
  ({
    data: {
      main_target: getTarget(mainTarget),
      secondary_target: secondaryTarget ?? { id: "", name: "", teamnum: -1 },
      match_guid,
      type,
    },
    event: "game:statfeed_event",
  } as SOS.GameStatFeedEvent);
