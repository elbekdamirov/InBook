import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { BookVersion } from "./models/book-version.model";
import { CreateBookVersionDto } from "./dto/create-book-version.dto";
import { UpdateBookVersionDto } from "./dto/update-book-version.dto";

@Injectable()
export class BookVersionService {
  constructor(
    @InjectModel(BookVersion)
    private readonly bookVersionModel: typeof BookVersion
  ) {}

  async create(
    createBookVersionDto: CreateBookVersionDto
  ): Promise<BookVersion> {
    return await this.bookVersionModel.create(createBookVersionDto);
  }

  async findAll(): Promise<BookVersion[]> {
    return await this.bookVersionModel.findAll({ include: { all: true } });
  }

  async findOne(id: number): Promise<BookVersion> {
    const version = await this.bookVersionModel.findByPk(id, {
      include: { all: true },
    });
    if (!version)
      throw new NotFoundException(`Book version with id ${id} not found`);
    return version;
  }

  async update(
    id: number,
    updateDto: UpdateBookVersionDto
  ): Promise<BookVersion> {
    const version = await this.findOne(id);
    return await version.update(updateDto);
  }

  async remove(id: number): Promise<{ message: string }> {
    const version = await this.findOne(id);
    await version.destroy();
    return { message: `Book version with id ${id} deleted` };
  }
}
