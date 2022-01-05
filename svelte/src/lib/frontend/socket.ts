import { getLogger } from "$lib/logger";
import { io } from "socket.io-client";
import { writable } from "svelte/store";

type SocketIOPayload = { channel: string; data: any };

const log = getLogger({ filepath: "svelte/src/lib/frontend/socket.ts" });

export const createSocketStore = () => {
  const { subscribe, set } = writable<SocketIOPayload>({
    channel: "initial",
    data: {},
  });

  const socket = io("ws://localhost:34001", {
    query: {
      process: "frontend",
    },
  });

  const history = [];

  const pushToHistory = (payload: SocketIOPayload) => {
    const cacheMax = 100;
    const newHistory = [payload, ...history.slice(0, cacheMax)];
    history.length = 0;
    history.push(...newHistory);
  };

  const send = ({ channel, data }: SocketIOPayload) => {
    log.verbose("Sending socket message", { channel, data });
    socket.emit(channel, data);
  };

  socket.on("connect", () => {
    log.info("Frontend connected to ioBackend.");
  });

  socket.onAny((channel, data) => {
    const payload = { channel, data };
    set(payload);
    pushToHistory(payload);
  });

  return {
    set: send,
    send,
    subscribe,
    socket,
    get connected() {
      return socket.connected;
    },
    history,
  };
};

export const socket = createSocketStore();
