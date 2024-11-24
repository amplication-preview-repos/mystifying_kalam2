import { BaseBot } from "../baseBot/BaseBot";

export type AiModel = {
  apiEndpoint: string | null;
  baseBots?: Array<BaseBot>;
  costPerToken: number | null;
  createdAt: Date;
  id: string;
  name: string | null;
  updatedAt: Date;
};
