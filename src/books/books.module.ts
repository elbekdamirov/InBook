import { Module } from "@nestjs/common";
import { BooksService } from "./books.service";
import { BooksController } from "./books.controller";
import { SequelizeModule } from "@nestjs/sequelize";
import { Book } from "./models/book.model";
import { JwtModule } from "@nestjs/jwt";

@Module({
  imports: [SequelizeModule.forFeature([Book]), JwtModule],
  controllers: [BooksController],
  providers: [BooksService],
})
export class BooksModule {}
