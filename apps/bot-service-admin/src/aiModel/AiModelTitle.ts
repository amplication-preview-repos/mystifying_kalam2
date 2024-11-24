import { AiModel as TAiModel } from "../api/aiModel/AiModel";

export const AIMODEL_TITLE_FIELD = "name";

export const AiModelTitle = (record: TAiModel): string => {
  return record.name?.toString() || String(record.id);
};
