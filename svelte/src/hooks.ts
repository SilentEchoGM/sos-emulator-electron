import { httpServer, startSOSEmulator } from "$lib/backend/socket";
import { getLogger } from "$lib/logger";
import stringify from "fast-safe-stringify";

const log = getLogger({ filepath: "svelte/src/hooks.ts" });

log.info("Hooks!", stringify(httpServer));
startSOSEmulator();
