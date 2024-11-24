/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { BaseBot } from "./BaseBot";
import { BaseBotCountArgs } from "./BaseBotCountArgs";
import { BaseBotFindManyArgs } from "./BaseBotFindManyArgs";
import { BaseBotFindUniqueArgs } from "./BaseBotFindUniqueArgs";
import { CreateBaseBotArgs } from "./CreateBaseBotArgs";
import { UpdateBaseBotArgs } from "./UpdateBaseBotArgs";
import { DeleteBaseBotArgs } from "./DeleteBaseBotArgs";
import { BotFindManyArgs } from "../../bot/base/BotFindManyArgs";
import { Bot } from "../../bot/base/Bot";
import { AiModel } from "../../aiModel/base/AiModel";
import { BaseBotService } from "../baseBot.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => BaseBot)
export class BaseBotResolverBase {
  constructor(
    protected readonly service: BaseBotService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "BaseBot",
    action: "read",
    possession: "any",
  })
  async _baseBotsMeta(
    @graphql.Args() args: BaseBotCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [BaseBot])
  @nestAccessControl.UseRoles({
    resource: "BaseBot",
    action: "read",
    possession: "any",
  })
  async baseBots(
    @graphql.Args() args: BaseBotFindManyArgs
  ): Promise<BaseBot[]> {
    return this.service.baseBots(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => BaseBot, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "BaseBot",
    action: "read",
    possession: "own",
  })
  async baseBot(
    @graphql.Args() args: BaseBotFindUniqueArgs
  ): Promise<BaseBot | null> {
    const result = await this.service.baseBot(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => BaseBot)
  @nestAccessControl.UseRoles({
    resource: "BaseBot",
    action: "create",
    possession: "any",
  })
  async createBaseBot(
    @graphql.Args() args: CreateBaseBotArgs
  ): Promise<BaseBot> {
    return await this.service.createBaseBot({
      ...args,
      data: {
        ...args.data,

        aiModel: args.data.aiModel
          ? {
              connect: args.data.aiModel,
            }
          : undefined,
      },
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => BaseBot)
  @nestAccessControl.UseRoles({
    resource: "BaseBot",
    action: "update",
    possession: "any",
  })
  async updateBaseBot(
    @graphql.Args() args: UpdateBaseBotArgs
  ): Promise<BaseBot | null> {
    try {
      return await this.service.updateBaseBot({
        ...args,
        data: {
          ...args.data,

          aiModel: args.data.aiModel
            ? {
                connect: args.data.aiModel,
              }
            : undefined,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => BaseBot)
  @nestAccessControl.UseRoles({
    resource: "BaseBot",
    action: "delete",
    possession: "any",
  })
  async deleteBaseBot(
    @graphql.Args() args: DeleteBaseBotArgs
  ): Promise<BaseBot | null> {
    try {
      return await this.service.deleteBaseBot(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => [Bot], { name: "bots" })
  @nestAccessControl.UseRoles({
    resource: "Bot",
    action: "read",
    possession: "any",
  })
  async findBots(
    @graphql.Parent() parent: BaseBot,
    @graphql.Args() args: BotFindManyArgs
  ): Promise<Bot[]> {
    const results = await this.service.findBots(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => AiModel, {
    nullable: true,
    name: "aiModel",
  })
  @nestAccessControl.UseRoles({
    resource: "AiModel",
    action: "read",
    possession: "any",
  })
  async getAiModel(@graphql.Parent() parent: BaseBot): Promise<AiModel | null> {
    const result = await this.service.getAiModel(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}
