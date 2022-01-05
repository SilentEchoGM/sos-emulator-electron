import type { SOS } from "$lib/types/sosPluginEvents";
import { v4 } from "uuid";
import { getLocation } from "./utils/getLocation";
import { getPlayer } from "./utils/getPlayer";

export const getBallHit = ({ match_guid = v4(), player = getPlayer() }) =>
  ({
    data: {
      ball: {
        location: getLocation(),
        post_hit_speed: 10,
        pre_hit_speed: 1,
      },
      match_guid,
      player,
    },
    event: "game:ball_hit",
  } as SOS.GameBallHit);
