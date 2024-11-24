import { AiModelWhereUniqueInput } from "../aiModel/AiModelWhereUniqueInput";
import { BotUpdateManyWithoutBaseBotsInput } from "./BotUpdateManyWithoutBaseBotsInput";

export type BaseBotUpdateInput = {
  aiModel?: AiModelWhereUniqueInput | null;
  bots?: BotUpdateManyWithoutBaseBotsInput;
  description?: string | null;
  name?: string | null;
};
