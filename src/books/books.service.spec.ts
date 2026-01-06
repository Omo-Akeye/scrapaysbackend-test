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
    const book = this.booksRepository.create(createBookInput);
    return this.booksRepository.save(book);
  }

  findAll() {
    return this.booksRepository.find();
  }

  async findOne(id: number) {
    const book = await this.booksRepository.findOneBy({ id });
    if (!book) throw new NotFoundException(`Book #${id} not found`);
    return book;
  }

  async update(id: number, updateBookInput: UpdateBookInput) {
    const book = await this.findOne(id);
    const updated = { ...book, ...updateBookInput };
    return this.booksRepository.save(updated);
  }

  async remove(id: number) {
    const book = await this.findOne(id);
    await this.booksRepository.remove(book);
    return { ...book, id };
  }
}