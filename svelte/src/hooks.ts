import { startSOSEmulator } from "$lib/backend/socket";
import { getLogger } from "$lib/logger";

const log = getLogger({ filepath: "svelte/src/hooks.ts" });

startSOSEmulator();
