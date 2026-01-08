import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateBookInput } from './dto/create-book.input';
import { UpdateBookInput } from './dto/update-book.input';
import { InjectRepository } from '@nestjs/typeorm';
import { Book } from './entities/book.entity';
import { Repository } from 'typeorm';

@Injectable()
export class BooksService {
  constructor(
    @InjectRepository(Book) private booksRepository: Repository<Book>,
  ) {}

  create(createBookInput: CreateBookInput) {
    const newBook = this.booksRepository.create(createBookInput);
    return this.booksRepository.save(newBook);
  }


async findAll(limit: number, offset: number) {
    return this.booksRepository.findAndCount({
      take: limit,  
      skip: offset, 
    });
  }
  
  async findOne(id: string) {
    const book = await this.booksRepository.findOneBy({ id });
    if (!book) throw new NotFoundException(`Book #${id} not found`);
    return book;
  }


  async update(id: string, updateBookInput: UpdateBookInput) {
    const book = await this.findOne(id);
    const updatedBook = { ...book, ...updateBookInput };
    return this.booksRepository.save(updatedBook);
  }

  async remove(id: string) {
    const book = await this.findOne(id);
    await this.booksRepository.remove(book);
    return { ...book, id };
  }


}