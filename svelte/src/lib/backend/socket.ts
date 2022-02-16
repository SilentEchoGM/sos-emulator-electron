import { dev } from "$app/env";
import { getLogger } from "$lib/logger";
import { Server } from "socket.io";
import http from "http";
import WebSocket, { WebSocketServer } from "ws";
import type { SOS } from "$lib/types/sosPluginEvents";
import type { DefaultEventsMap } from "socket.io/dist/typed-events";

interface FrontendToBackendEvents {
  "send-packet": (packet: SOS.Packet) => void;
}

const log = getLogger({ filepath: "svelte/src/lib/backend/socket.ts" });

export const httpServer = new http.Server();

httpServer.on("listening", () => {
  const address = httpServer.address();
  if (typeof address === "string") return;

  log.info(`HTTP Server listening on ${address.port}`, address);
});

export const ioBackend = new Server<
  DefaultEventsMap,
  FrontendToBackendEvents,
  DefaultEventsMap
>(httpServer, {
  cors: {
    origin: dev ? "http://localhost:39254" : "*",
  },
});

ioBackend.on("listening", () => {
  log.info("ioBackend now listening.");
});

const startListening = () => {
  log.info("Trying to start the HTTP Server listening");
  httpServer.listen(34001);
};

startListening();

const reconnectTimeout = 500;
let reconnectTries = 0;
let reconnectTimer;

httpServer.on("error", (err: Record<string, any>) => {
  if (err.code === "EADDRINUSE") {
    const tries = ++reconnectTries < 15 ? reconnectTries : 15;
    const timeout = tries * reconnectTimeout;

    log.error(
      `ioBackend address in use. Tried ${reconnectTries} time${
        reconnectTries === 1 ? "" : "s"
      }. Retrying in ${timeout}ms.`
    );

    if (reconnectTimer) clearTimeout(reconnectTimer);
    if (reconnectTries > 20)
      reconnectTimer = setTimeout(startListening, timeout);

    return;
  }

  log.error("ioBackend error", {
    err: err.message,
    stack: err.stack,
    code: err.code,
  });
});

let sosEmulator: WebSocket.Server;

export const startSOSEmulator = (port: number = 49122) => {
  const wss = new WebSocketServer({
    port,
  });

  wss.on("connection", (ws) => {
    ws.on("message", (data) => {
      log.info("WS message", data);
    });
  });

  wss.on("error", (error) => {
    log.error("Error with SOS Emulator WSS", { error });
    setTimeout(startSOSEmulator, 200);
  });

  sosEmulator = wss;
  return wss;
};

ioBackend.on("connection", (socket) => {
  log.info("Client connected to ioBackend.", { ...socket.handshake.query });

  socket.on("send-packet", (packet) => {
    log.info('"send-packet" received.', packet);
    if (!sosEmulator) return;
    sosEmulator.clients.forEach((client) => {
      client.send(JSON.stringify(packet));
    });
  });
});
