import { SortOrder } from "../../util/SortOrder";

export type TransactionOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  timestamp?: SortOrder;
  tokensUsed?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};
