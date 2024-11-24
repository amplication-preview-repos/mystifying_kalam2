import { BaseBotWhereUniqueInput } from "../baseBot/BaseBotWhereUniqueInput";

export type BotUpdateInput = {
  baseBot?: BaseBotWhereUniqueInput | null;
  description?: string | null;
  name?: string | null;
  tokensRequired?: number | null;
};
