import { Module } from "@nestjs/common";
import { SequelizeModule } from "@nestjs/sequelize";
import { BookmarksService } from "./bookmarks.service";
import { BookmarksController } from "./bookmarks.controller";
import { Bookmark } from "./entities/bookmark.entity";
import { User } from "../users/models/user.model";
import { Book } from "../books/models/book.model";
import { JwtModule } from "@nestjs/jwt";

@Module({
  imports: [SequelizeModule.forFeature([Bookmark, User, Book]), JwtModule],
  controllers: [BookmarksController],
  providers: [BookmarksService],
  exports: [BookmarksService],
})
export class BookmarksModule {}
