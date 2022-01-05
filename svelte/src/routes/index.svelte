<script lang="ts">
  import SendPacketButton from "$lib/frontend/components/SendPacketButton.svelte";
  import Settings from "$lib/frontend/components/Settings.svelte";
  import { getLogger } from "$lib/logger";
  import { keys } from "fp-ts/Record";
  import { onMount } from "svelte";
  import { packetFactory } from "$lib/packetFactory";
  import type { PacketFactory } from "$lib/types";
  import { socket } from "$lib/frontend/socket";
  import { matchBoolSettings, matchSettings } from "$lib/frontend/stores";

  const log = getLogger({ filepath: "svelte/src/routes/index.svelte" });

  const sendEvent = (type: keyof PacketFactory) => {
    log.info("sendEvent", type);
    const packet = packetFactory[type]({
      ...$matchBoolSettings,
      ...$matchSettings,
    });
    $socket = { channel: "send-packet", data: packet };
  };

  onMount(async () => {
    log.info("onMount");
  });
</script>

<div class="container">
  <div class="column">
    <h3>Match Settings</h3>
    <Settings />
  </div>
  <div class="column">
    <h3>Send Packet</h3>
    <div class="column-content">
      {#each keys(packetFactory) as type}
        <SendPacketButton {type} on:sendEvent={() => sendEvent(type)} />
      {/each}
    </div>
  </div>
</div>

<style>
  .column {
    width: 200px;
    height: 100%;
    padding: 0;
    background-color: #636564;
  }

  .container {
    display: flex;
    justify-content: space-between;
  }
</style>
