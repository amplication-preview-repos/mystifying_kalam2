import { AiModelWhereUniqueInput } from "../aiModel/AiModelWhereUniqueInput";
import { BotCreateNestedManyWithoutBaseBotsInput } from "./BotCreateNestedManyWithoutBaseBotsInput";

export type BaseBotCreateInput = {
  aiModel?: AiModelWhereUniqueInput | null;
  bots?: BotCreateNestedManyWithoutBaseBotsInput;
  description?: string | null;
  name?: string | null;
};
