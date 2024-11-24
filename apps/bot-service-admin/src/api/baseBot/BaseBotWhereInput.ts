import { AiModelWhereUniqueInput } from "../aiModel/AiModelWhereUniqueInput";
import { BotListRelationFilter } from "../bot/BotListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type BaseBotWhereInput = {
  aiModel?: AiModelWhereUniqueInput;
  bots?: BotListRelationFilter;
  description?: StringNullableFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
};
