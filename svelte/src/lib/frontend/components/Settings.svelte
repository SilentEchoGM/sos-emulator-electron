<script>
  import { getLogger } from "$lib/logger";
  import { matchBoolSettings, matchSettings } from "../stores";
  import Toggle from "$lib/frontend/components/Toggle.svelte";

  const log = getLogger({
    filepath: "svelte/src/lib/frontend/components/Settings.svelte",
  });

  $: log.info("matchSettings", {
    settings: $matchSettings,
    bools: $matchBoolSettings,
  });
</script>

<div class="settings-container column-content">
  {#each Object.keys($matchSettings) as setting}
    <span>{setting}</span>
    <div class="input-container">
      <div class="input-accent">
        <input type="text" bind:value={$matchSettings[setting]} />
      </div>
    </div>
  {/each}

  {#each Object.keys($matchBoolSettings) as bool}
    <span>{bool}</span>
    <Toggle bind:checked={$matchBoolSettings[bool]} />
  {/each}
</div>

<style>
  .settings-container {
    display: grid;
    grid-template-columns: 1fr 2fr;
    row-gap: 5px;
    align-items: baseline;
  }

  span {
    text-align: center;
    font-family: monospace;
  }
</style>
