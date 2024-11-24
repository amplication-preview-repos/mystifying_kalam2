/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import * as nestAccessControl from "nest-access-control";
import * as defaultAuthGuard from "../../auth/defaultAuth.guard";
import { AiModelService } from "../aiModel.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AiModelCreateInput } from "./AiModelCreateInput";
import { AiModel } from "./AiModel";
import { AiModelFindManyArgs } from "./AiModelFindManyArgs";
import { AiModelWhereUniqueInput } from "./AiModelWhereUniqueInput";
import { AiModelUpdateInput } from "./AiModelUpdateInput";
import { BaseBotFindManyArgs } from "../../baseBot/base/BaseBotFindManyArgs";
import { BaseBot } from "../../baseBot/base/BaseBot";
import { BaseBotWhereUniqueInput } from "../../baseBot/base/BaseBotWhereUniqueInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class AiModelControllerBase {
  constructor(
    protected readonly service: AiModelService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: AiModel })
  @nestAccessControl.UseRoles({
    resource: "AiModel",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async createAiModel(
    @common.Body() data: AiModelCreateInput
  ): Promise<AiModel> {
    return await this.service.createAiModel({
      data: data,
      select: {
        apiEndpoint: true,
        costPerToken: true,
        createdAt: true,
        id: true,
        name: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [AiModel] })
  @ApiNestedQuery(AiModelFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "AiModel",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async aiModels(@common.Req() request: Request): Promise<AiModel[]> {
    const args = plainToClass(AiModelFindManyArgs, request.query);
    return this.service.aiModels({
      ...args,
      select: {
        apiEndpoint: true,
        costPerToken: true,
        createdAt: true,
        id: true,
        name: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: AiModel })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "AiModel",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async aiModel(
    @common.Param() params: AiModelWhereUniqueInput
  ): Promise<AiModel | null> {
    const result = await this.service.aiModel({
      where: params,
      select: {
        apiEndpoint: true,
        costPerToken: true,
        createdAt: true,
        id: true,
        name: true,
        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: AiModel })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "AiModel",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async updateAiModel(
    @common.Param() params: AiModelWhereUniqueInput,
    @common.Body() data: AiModelUpdateInput
  ): Promise<AiModel | null> {
    try {
      return await this.service.updateAiModel({
        where: params,
        data: data,
        select: {
          apiEndpoint: true,
          costPerToken: true,
          createdAt: true,
          id: true,
          name: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: AiModel })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "AiModel",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deleteAiModel(
    @common.Param() params: AiModelWhereUniqueInput
  ): Promise<AiModel | null> {
    try {
      return await this.service.deleteAiModel({
        where: params,
        select: {
          apiEndpoint: true,
          costPerToken: true,
          createdAt: true,
          id: true,
          name: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id/baseBots")
  @ApiNestedQuery(BaseBotFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "BaseBot",
    action: "read",
    possession: "any",
  })
  async findBaseBots(
    @common.Req() request: Request,
    @common.Param() params: AiModelWhereUniqueInput
  ): Promise<BaseBot[]> {
    const query = plainToClass(BaseBotFindManyArgs, request.query);
    const results = await this.service.findBaseBots(params.id, {
      ...query,
      select: {
        aiModel: {
          select: {
            id: true,
          },
        },

        createdAt: true,
        description: true,
        id: true,
        name: true,
        updatedAt: true,
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/baseBots")
  @nestAccessControl.UseRoles({
    resource: "AiModel",
    action: "update",
    possession: "any",
  })
  async connectBaseBots(
    @common.Param() params: AiModelWhereUniqueInput,
    @common.Body() body: BaseBotWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      baseBots: {
        connect: body,
      },
    };
    await this.service.updateAiModel({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/baseBots")
  @nestAccessControl.UseRoles({
    resource: "AiModel",
    action: "update",
    possession: "any",
  })
  async updateBaseBots(
    @common.Param() params: AiModelWhereUniqueInput,
    @common.Body() body: BaseBotWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      baseBots: {
        set: body,
      },
    };
    await this.service.updateAiModel({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/baseBots")
  @nestAccessControl.UseRoles({
    resource: "AiModel",
    action: "update",
    possession: "any",
  })
  async disconnectBaseBots(
    @common.Param() params: AiModelWhereUniqueInput,
    @common.Body() body: BaseBotWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      baseBots: {
        disconnect: body,
      },
    };
    await this.service.updateAiModel({
      where: params,
      data,
      select: { id: true },
    });
  }
}
