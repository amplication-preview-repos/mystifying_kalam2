import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { BaseBotModuleBase } from "./base/baseBot.module.base";
import { BaseBotService } from "./baseBot.service";
import { BaseBotController } from "./baseBot.controller";
import { BaseBotResolver } from "./baseBot.resolver";

@Module({
  imports: [BaseBotModuleBase, forwardRef(() => AuthModule)],
  controllers: [BaseBotController],
  providers: [BaseBotService, BaseBotResolver],
  exports: [BaseBotService],
})
export class BaseBotModule {}
