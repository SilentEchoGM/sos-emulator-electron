import type { SOS } from "$lib/types/sosPluginEvents";
import { v4 } from "uuid";

export const getMisc =
  (event: SOS.Event) =>
  ({ match_guid = v4() }) =>
    ({
      data: {
        match_guid,
      },
      event,
    } as SOS.GameMisc);
