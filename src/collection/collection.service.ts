import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { Collection } from "./entities/collection.entity";
import { CreateCollectionDto } from "./dto/create-collection.dto";
import { UpdateCollectionDto } from "./dto/update-collection.dto";

@Injectable()
export class CollectionsService {
  constructor(
    @InjectModel(Collection) private collectionRepo: typeof Collection
  ) {}

  create(dto: CreateCollectionDto) {
    return this.collectionRepo.create(dto);
  }

  findAll() {
    return this.collectionRepo.findAll();
  }

  async findOne(id: number) {
    const collection = await this.collectionRepo.findByPk(id);
    if (!collection) throw new NotFoundException("Collection not found");
    return collection;
  }

  async update(id: number, dto: UpdateCollectionDto) {
    const collection = await this.findOne(id);
    return collection.update(dto);
  }

  async remove(id: number) {
    const collection = await this.findOne(id);
    await collection.destroy();
    return { message: "Collection deleted" };
  }
}
