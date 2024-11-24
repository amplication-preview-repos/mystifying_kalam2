import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type TransactionWhereInput = {
  id?: StringFilter;
  timestamp?: DateTimeNullableFilter;
  tokensUsed?: IntNullableFilter;
  user?: UserWhereUniqueInput;
};
