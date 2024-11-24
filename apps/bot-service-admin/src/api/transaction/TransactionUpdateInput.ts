import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type TransactionUpdateInput = {
  timestamp?: Date | null;
  tokensUsed?: number | null;
  user?: UserWhereUniqueInput | null;
};
