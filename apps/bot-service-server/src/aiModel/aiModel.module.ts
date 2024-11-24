import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { AiModelModuleBase } from "./base/aiModel.module.base";
import { AiModelService } from "./aiModel.service";
import { AiModelController } from "./aiModel.controller";
import { AiModelResolver } from "./aiModel.resolver";

@Module({
  imports: [AiModelModuleBase, forwardRef(() => AuthModule)],
  controllers: [AiModelController],
  providers: [AiModelService, AiModelResolver],
  exports: [AiModelService],
})
export class AiModelModule {}
