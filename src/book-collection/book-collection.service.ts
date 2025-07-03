import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { BookCollection } from "./entities/book-collection.entity";
import { CreateBookCollectionDto } from "./dto/create-book-collection.dto";
import { UpdateBookCollectionDto } from "./dto/update-book-collection.dto";

@Injectable()
export class BookCollectionsService {
  constructor(
    @InjectModel(BookCollection)
    private bookCollectionRepo: typeof BookCollection
  ) {}

  create(dto: CreateBookCollectionDto) {
    return this.bookCollectionRepo.create(dto);
  }

  findAll() {
    return this.bookCollectionRepo.findAll();
  }

  async findOne(id: number) {
    const record = await this.bookCollectionRepo.findByPk(id);
    if (!record) throw new NotFoundException("BookCollection not found");
    return record;
  }

  async update(id: number, dto: UpdateBookCollectionDto) {
    const record = await this.findOne(id);
    return record.update(dto);
  }

  async remove(id: number) {
    const record = await this.findOne(id);
    await record.destroy();
    return { message: "BookCollection deleted" };
  }
}
