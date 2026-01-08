import { InputType, Field } from '@nestjs/graphql';
import { IsNotEmpty, IsString, MinLength, MaxLength } from 'class-validator';

@InputType()
export class CreateBookInput {
  @Field()
  @IsString()
  @IsNotEmpty({ message: 'Book name cannot be empty' })
  @MinLength(3)
  name: string;

  @Field()
  @IsString()
  @MaxLength(500) 
  description: string;
}