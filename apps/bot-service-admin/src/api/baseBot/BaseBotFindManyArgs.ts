import { BaseBotWhereInput } from "./BaseBotWhereInput";
import { BaseBotOrderByInput } from "./BaseBotOrderByInput";

export type BaseBotFindManyArgs = {
  where?: BaseBotWhereInput;
  orderBy?: Array<BaseBotOrderByInput>;
  skip?: number;
  take?: number;
};
