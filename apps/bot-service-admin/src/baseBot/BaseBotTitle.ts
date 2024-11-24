import { BaseBot as TBaseBot } from "../api/baseBot/BaseBot";

export const BASEBOT_TITLE_FIELD = "name";

export const BaseBotTitle = (record: TBaseBot): string => {
  return record.name?.toString() || String(record.id);
};
