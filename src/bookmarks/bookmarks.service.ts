import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { Bookmark } from "./entities/bookmark.entity";
import { CreateBookmarkDto } from "./dto/create-bookmark.dto";
import { UpdateBookmarkDto } from "./dto/update-bookmark.dto";

@Injectable()
export class BookmarksService {
  constructor(@InjectModel(Bookmark) private bookmarkRepo: typeof Bookmark) {}

  create(dto: CreateBookmarkDto) {
    return this.bookmarkRepo.create(dto);
  }

  findAll() {
    return this.bookmarkRepo.findAll();
  }

  async findOne(id: number) {
    const bookmark = await this.bookmarkRepo.findByPk(id);
    if (!bookmark) throw new NotFoundException("Bookmark not found");
    return bookmark;
  }

  async update(id: number, dto: UpdateBookmarkDto) {
    const bookmark = await this.findOne(id);
    return bookmark.update(dto);
  }

  async remove(id: number) {
    const bookmark = await this.findOne(id);
    await bookmark.destroy();
    return { message: "Bookmark deleted" };
  }
}
