import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { Book } from "./models/book.model";
import { CreateBookDto } from "./dto/create-book.dto";
import { UpdateBookDto } from "./dto/update-book.dto";

@Injectable()
export class BooksService {
  constructor(
    @InjectModel(Book)
    private readonly bookModel: typeof Book
  ) {}

  async create(createBookDto: CreateBookDto): Promise<Book> {
    return this.bookModel.create(createBookDto);
  }

  async findAll(): Promise<Book[]> {
    return this.bookModel.findAll({ include: { all: true } });
  }

  async findOne(id: number): Promise<Book> {
    const book = await this.bookModel.findByPk(id, { include: { all: true } });
    if (!book) throw new NotFoundException(`Book with id ${id} not found`);
    return book;
  }

  async update(id: number, updateBookDto: UpdateBookDto): Promise<Book> {
    const book = await this.findOne(id);
    return book.update(updateBookDto);
  }

  async remove(id: number): Promise<{ message: string }> {
    const book = await this.findOne(id);
    await book.destroy();
    return { message: `Book with id ${id} deleted` };
  }
}
