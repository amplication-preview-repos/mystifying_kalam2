import { BaseBotUpdateManyWithoutAiModelsInput } from "./BaseBotUpdateManyWithoutAiModelsInput";

export type AiModelUpdateInput = {
  apiEndpoint?: string | null;
  baseBots?: BaseBotUpdateManyWithoutAiModelsInput;
  costPerToken?: number | null;
  name?: string | null;
};
