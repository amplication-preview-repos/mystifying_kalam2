import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { BaseBotServiceBase } from "./base/baseBot.service.base";

@Injectable()
export class BaseBotService extends BaseBotServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
