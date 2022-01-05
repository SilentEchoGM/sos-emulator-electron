import type { SOS } from "$lib/types/sosPluginEvents";
import { v4 } from "uuid";
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
  match_guid = v4(),
}: Options) =>
  ({
    data: {
      main_target: getTarget(mainTarget),
      secondary_target: secondaryTarget ?? { id: "", name: "", team_num: -1 },
      match_guid,
      type,
    },
    event: "game:statfeed_event",
  } as SOS.GameStatFeedEvent);
