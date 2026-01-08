import { Resolver, Query, Mutation, Args, ID, Int } from '@nestjs/graphql';
import { BooksService } from './books.service';
import { Book } from './entities/book.entity';
import { CreateBookInput } from './dto/create-book.input';
import { UpdateBookInput } from './dto/update-book.input';
import { UseGuards } from '@nestjs/common';
import { GqlAuthGuard } from '../auth/gql-auth.guard';
import { PaginatedBooks } from './entities/paginated-books.output';

@Resolver(() => Book)

export class BooksResolver {
  constructor(private readonly booksService: BooksService) {}


  @Query(() => PaginatedBooks, { name: 'books' }) 
  async findAll(
    @Args('limit', { type: () => Int, defaultValue: 10 }) limit: number,
    @Args('offset', { type: () => Int, defaultValue: 0 }) offset: number,
  ) {
    const [items, total] = await this.booksService.findAll(limit, offset);
    return { items, total };
  }

  @Query(() => Book, { name: 'book' })
  findOne(@Args('id', { type: () => ID }) id: string) {
    return this.booksService.findOne(id);
  }


  @UseGuards(GqlAuthGuard) 
  @Mutation(() => Book)
  createBook(@Args('createBookInput') createBookInput: CreateBookInput) {
    return this.booksService.create(createBookInput);
  }

  @UseGuards(GqlAuthGuard) 
  @Mutation(() => Book)
  updateBook(@Args('updateBookInput') updateBookInput: UpdateBookInput) {
    return this.booksService.update(updateBookInput.id, updateBookInput);
  }

  @UseGuards(GqlAuthGuard)
  @Mutation(() => Book)
  removeBook(@Args('id', { type: () => ID }) id: string) {
    return this.booksService.remove(id);
  }
}