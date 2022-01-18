<script>
  import { getLogger } from "$lib/logger";
  import { gameId, matchBoolSettings, matchSettings, players } from "../stores";
  import Toggle from "$lib/frontend/components/Toggle.svelte";
  import { v4 } from "uuid";

  const log = getLogger({
    filepath: "svelte/src/lib/frontend/components/Settings.svelte",
  });

  $: log.info("matchSettings", {
    settings: $matchSettings,
    bools: $matchBoolSettings,
  });

  const numberProps = [
    "team",
    "assists",
    "boost",
    "demos",
    "goals",
    "saves",
    "score",
    "shortcut",
    "shots",
    "speed",
    "touches",
  ];

  $: console.log("gameId", $gameId);
</script>

<div class="settings-container column-content">
  <button
    on:click={() => {
      $gameId = v4();
    }}>New Game Id</button>

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

  {#each Object.keys($players) as id}
    <h6>{$players[id].name}</h6>
    <div />
    {#each Object.keys($players[id]) as prop}
      {#if typeof $players[id][prop] !== "object"}
        <span>{prop}</span>
        <div class="input-container">
          <div class="input-accent">
            {#if numberProps.includes(prop)}
              <input bind:value={$players[id][prop]} type="number" />
            {:else}
              <input bind:value={$players[id][prop]} />
            {/if}
          </div>
        </div>
      {/if}
    {/each}
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

  button {
    grid-column: 1 / span 2;
  }
</style>
