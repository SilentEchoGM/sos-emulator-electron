import type { SOS } from "$lib/types/sosPluginEvents";
import { getPlayer } from "./getPlayer";

export const getTarget = (
  { id, name, team }: SOS.Player = {
    ...getPlayer(),
  }
) => ({
  id,
  name,
  teamnum: team,
});
