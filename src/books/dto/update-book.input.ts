import { CreateBookInput } from './create-book.input';
import { InputType, Field, ID, PartialType } from '@nestjs/graphql';
import { IsNotEmpty, IsUUID } from 'class-validator';

@InputType()
export class UpdateBookInput extends PartialType(CreateBookInput) {
  @Field(() => ID)
  @IsNotEmpty() 
  @IsUUID()    
  id: string;     
}