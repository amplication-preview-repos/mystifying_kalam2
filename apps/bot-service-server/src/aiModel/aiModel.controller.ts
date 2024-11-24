import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { AiModelService } from "./aiModel.service";
import { AiModelControllerBase } from "./base/aiModel.controller.base";

@swagger.ApiTags("aiModels")
@common.Controller("aiModels")
export class AiModelController extends AiModelControllerBase {
  constructor(
    protected readonly service: AiModelService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
