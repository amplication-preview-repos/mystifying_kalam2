import { SortOrder } from "../../util/SortOrder";

export type BotOrderByInput = {
  baseBotId?: SortOrder;
  createdAt?: SortOrder;
  description?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  tokensRequired?: SortOrder;
  updatedAt?: SortOrder;
};
