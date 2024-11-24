import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type TransactionCreateInput = {
  timestamp?: Date | null;
  tokensUsed?: number | null;
  user?: UserWhereUniqueInput | null;
};
