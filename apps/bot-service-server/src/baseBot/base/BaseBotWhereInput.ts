/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { AiModelWhereUniqueInput } from "../../aiModel/base/AiModelWhereUniqueInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";
import { BotListRelationFilter } from "../../bot/base/BotListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

@InputType()
class BaseBotWhereInput {
  @ApiProperty({
    required: false,
    type: () => AiModelWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => AiModelWhereUniqueInput)
  @IsOptional()
  @Field(() => AiModelWhereUniqueInput, {
    nullable: true,
  })
  aiModel?: AiModelWhereUniqueInput;

  @ApiProperty({
    required: false,
    type: () => BotListRelationFilter,
  })
  @ValidateNested()
  @Type(() => BotListRelationFilter)
  @IsOptional()
  @Field(() => BotListRelationFilter, {
    nullable: true,
  })
  bots?: BotListRelationFilter;

  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  description?: StringNullableFilter;

  @ApiProperty({
    required: false,
    type: StringFilter,
  })
  @Type(() => StringFilter)
  @IsOptional()
  @Field(() => StringFilter, {
    nullable: true,
  })
  id?: StringFilter;

  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  name?: StringNullableFilter;
}

export { BaseBotWhereInput as BaseBotWhereInput };
