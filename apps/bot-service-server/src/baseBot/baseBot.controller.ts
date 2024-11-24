import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { BaseBotService } from "./baseBot.service";
import { BaseBotControllerBase } from "./base/baseBot.controller.base";

@swagger.ApiTags("baseBots")
@common.Controller("baseBots")
export class BaseBotController extends BaseBotControllerBase {
  constructor(
    protected readonly service: BaseBotService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
