import type { SOS } from "./sosPluginEvents";

export type BasicPlayer = {
  name: string;
  team: 1 | 0;
  id: number;
};

type PacketFetcher = (options: Record<string, any>) => SOS.Packet;

export interface PacketFactory
  extends Record<SOS.Event | "game:replay_start||data", PacketFetcher> {}
