import { AiModel } from "../aiModel/AiModel";
import { Bot } from "../bot/Bot";

export type BaseBot = {
  aiModel?: AiModel | null;
  bots?: Array<Bot>;
  createdAt: Date;
  description: string | null;
  id: string;
  name: string | null;
  updatedAt: Date;
};
