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
import { ProductWhereUniqueInput } from "../../product/base/ProductWhereUniqueInput";
import { ValidateNested, IsOptional, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { UserUpdateManyWithoutReviewsInput } from "./UserUpdateManyWithoutReviewsInput";

@InputType()
class ReviewUpdateInput {
  @ApiProperty({
    required: false,
    type: () => ProductWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => ProductWhereUniqueInput)
  @IsOptional()
  @Field(() => ProductWhereUniqueInput, {
    nullable: true,
  })
  product?: ProductWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsInt()
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  rating?: number | null;

  @ApiProperty({
    required: false,
    type: () => UserUpdateManyWithoutReviewsInput,
  })
  @ValidateNested()
  @Type(() => UserUpdateManyWithoutReviewsInput)
  @IsOptional()
  @Field(() => UserUpdateManyWithoutReviewsInput, {
    nullable: true,
  })
  users?: UserUpdateManyWithoutReviewsInput;
}

export { ReviewUpdateInput as ReviewUpdateInput };
