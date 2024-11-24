import { BaseBotWhereUniqueInput } from "../baseBot/BaseBotWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";

export type BotWhereInput = {
  baseBot?: BaseBotWhereUniqueInput;
  description?: StringNullableFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
  tokensRequired?: IntNullableFilter;
};
