<script lang="ts">
  import { socket } from "$lib/frontend/socket";
  import { getLogger } from "$lib/logger";

  const log = getLogger({ filepath: "svelte/src/routes/index.svelte" });

  $: log.info("Frontend socket connected to backend:", socket.connected);
</script>

<h1>Welcome to SvelteKit</h1>
<p>
  Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation
</p>
