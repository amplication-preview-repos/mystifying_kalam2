import { StringNullableFilter } from "../../util/StringNullableFilter";
import { BaseBotListRelationFilter } from "../baseBot/BaseBotListRelationFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type AiModelWhereInput = {
  apiEndpoint?: StringNullableFilter;
  baseBots?: BaseBotListRelationFilter;
  costPerToken?: FloatNullableFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
};
