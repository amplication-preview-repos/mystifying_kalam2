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
import {
  IsString,
  MaxLength,
  IsOptional,
  ValidateNested,
  IsNumber,
  Min,
  Max,
} from "class-validator";
import { BaseBotUpdateManyWithoutAiModelsInput } from "./BaseBotUpdateManyWithoutAiModelsInput";
import { Type } from "class-transformer";

@InputType()
class AiModelUpdateInput {
  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  apiEndpoint?: string | null;

  @ApiProperty({
    required: false,
    type: () => BaseBotUpdateManyWithoutAiModelsInput,
  })
  @ValidateNested()
  @Type(() => BaseBotUpdateManyWithoutAiModelsInput)
  @IsOptional()
  @Field(() => BaseBotUpdateManyWithoutAiModelsInput, {
    nullable: true,
  })
  baseBots?: BaseBotUpdateManyWithoutAiModelsInput;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsNumber()
  @Min(-999999999)
  @Max(999999999)
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  costPerToken?: number | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  name?: string | null;
}

export { AiModelUpdateInput as AiModelUpdateInput };
