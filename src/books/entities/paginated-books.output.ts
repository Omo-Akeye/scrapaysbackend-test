import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Book } from './book.entity';

@ObjectType()
export class PaginatedBooks {
  @Field(() => [Book])
  items: Book[];

  @Field(() => Int)
  total: number;
}