import type { SOS } from "$lib/types/sosPluginEvents";
import { getPlayer } from "./utils/getPlayer";
import { getTarget } from "./utils/getTarget";

type Options = {
  scorer: SOS.Player;
  assister: SOS.Player | null;
  ball_last_touch: SOS.BallLastTouch;
  goalspeed: number;
  goaltime: number;
  impact_location: SOS.ImpactLocation;
};

export const getGoalScored = ({
  scorer = getPlayer(),
  assister = null,
  ball_last_touch = { player: "", speed: 1 },
  goalspeed = 1,
  goaltime = 299,
  impact_location = {
    X: 0.5,
    Y: 0.5,
  },
}: Options) =>
  ({
    event: "game:goal_scored",
    data: {
      assister: {
        id: assister?.id ?? "",
        name: assister?.name ?? "",
      },
      ball_last_touch,
      goalspeed,
      goaltime,
      impact_location,
      scorer: getTarget(scorer),
    },
  } as SOS.GameGoalScored);
