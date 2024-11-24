import { BaseBot } from "../baseBot/BaseBot";

export type Bot = {
  baseBot?: BaseBot | null;
  createdAt: Date;
  description: string | null;
  id: string;
  name: string | null;
  tokensRequired: number | null;
  updatedAt: Date;
};
