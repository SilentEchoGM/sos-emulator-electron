import { dev } from "$app/env";
import { getLogger } from "$lib/logger";
import { Server } from "socket.io";

const log = getLogger({ filepath: "svelte/src/lib/backend/socket.ts" });

export const server = new Server({
  cors: {
    origin: dev ? "http://localhost:3000" : "tbd",
  },
});

server.on("connection", (socket) => {
  log.info("Socket connected:", socket.handshake.query);
});

const reconnectTimeout = 500;
let reconnectTries = 0;

const startListening = () => {
  try {
    server.listen(3001);
    log.info("Socket.io backend now listening.");
  } catch (err) {
    const tries =
      (++reconnectTries > 5 ? 5 : reconnectTries) * reconnectTimeout;

    log.error(
      `Socket.io backend unable to start listening.${
        reconnectTries ? ` Now tried ${reconnectTries} times.` : ""
      } Trying again in ${tries * reconnectTimeout}ms.`
    );
    setTimeout(
      startListening,
      (reconnectTries > 5 ? 5 : reconnectTries) * reconnectTimeout
    );
  }
};
