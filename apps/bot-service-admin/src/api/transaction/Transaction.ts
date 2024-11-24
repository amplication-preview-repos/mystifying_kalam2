import { User } from "../user/User";

export type Transaction = {
  createdAt: Date;
  id: string;
  timestamp: Date | null;
  tokensUsed: number | null;
  updatedAt: Date;
  user?: User | null;
};
