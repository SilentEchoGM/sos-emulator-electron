import type { SOS } from "$lib/types/sosPluginEvents";
import { v4 } from "uuid";
import { getLocation } from "./utils/getLocation";
import { getPlayerStore } from "./utils/getPlayerStore";

type Options = {
  players: SOS.PlayersStore;
  arena: string;
  isOT: boolean;
  isReplay: boolean;
  target: string;
  blueName: string;
  orangeName: string;
  blueScore: number;
  orangeScore: number;
  time: number;
  match_guid: string;
};

export const getUpdate = ({
  players = getPlayerStore(),
  arena = "Stadium_P",
  isOT = false,
  isReplay = false,
  target = "",
  blueName = "BLUE",
  orangeName = "ORANGE",
  blueScore = 0,
  orangeScore = 0,
  time = 300,
  match_guid = v4(),
}: Options): SOS.Packet => ({
  event: "game:update_state",
  data: {
    event: "gamestate",
    game: {
      arena,
      ball: {
        location: getLocation(),
        speed: 0,
        team: 255,
      },
      hasTarget: false,
      hasWinner: false,
      isOT,
      isReplay,
      target,
      teams: [
        {
          color_primary: "1873FF",
          color_secondary: "E5E5E5",
          name: blueName,
          score: blueScore,
        },
        {
          color_primary: "C26418",
          color_secondary: "E5E5E5",
          name: orangeName,
          score: orangeScore,
        },
      ],
      time_milliseconds: time,
      time_seconds: time,
      winner: "",
    },
    hasGame: true,
    match_guid,
    players,
  },
});
