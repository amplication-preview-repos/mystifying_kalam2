import { BaseBotCreateNestedManyWithoutAiModelsInput } from "./BaseBotCreateNestedManyWithoutAiModelsInput";

export type AiModelCreateInput = {
  apiEndpoint?: string | null;
  baseBots?: BaseBotCreateNestedManyWithoutAiModelsInput;
  costPerToken?: number | null;
  name?: string | null;
};
