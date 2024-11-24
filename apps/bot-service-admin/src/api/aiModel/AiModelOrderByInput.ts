import { SortOrder } from "../../util/SortOrder";

export type AiModelOrderByInput = {
  apiEndpoint?: SortOrder;
  costPerToken?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  updatedAt?: SortOrder;
};
