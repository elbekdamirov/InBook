import { Module } from "@nestjs/common";
import { SequelizeModule } from "@nestjs/sequelize";
import { BookCollectionsService } from "./book-collection.service";
import { BookCollectionsController } from "./book-collection.controller";
import { BookCollection } from "./entities/book-collection.entity";
import { Collection } from "../collection/entities/collection.entity";
import { Book } from "../books/models/book.model";
import { JwtModule } from "@nestjs/jwt";

@Module({
  imports: [
    SequelizeModule.forFeature([BookCollection, Book, Collection]),
    JwtModule,
  ],
  controllers: [BookCollectionsController],
  providers: [BookCollectionsService],
  exports: [BookCollectionsService],
})
export class BookCollectionsModule {}
