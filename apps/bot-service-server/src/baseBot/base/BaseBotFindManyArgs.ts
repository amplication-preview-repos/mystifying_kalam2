/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { BaseBotWhereInput } from "./BaseBotWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { BaseBotOrderByInput } from "./BaseBotOrderByInput";

@ArgsType()
class BaseBotFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => BaseBotWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => BaseBotWhereInput, { nullable: true })
  @Type(() => BaseBotWhereInput)
  where?: BaseBotWhereInput;

  @ApiProperty({
    required: false,
    type: [BaseBotOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [BaseBotOrderByInput], { nullable: true })
  @Type(() => BaseBotOrderByInput)
  orderBy?: Array<BaseBotOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { BaseBotFindManyArgs as BaseBotFindManyArgs };
