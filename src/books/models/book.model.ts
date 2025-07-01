import {
  Table,
  Column,
  Model,
  DataType,
  ForeignKey,
  BelongsTo,
  HasOne,
} from "sequelize-typescript";
import { Author } from "../../authors/models/author.model";
import { BookVersion } from "../../book-version/models/book-version.model";

interface IBookCreationAttr {
  published_year: Date;
  authorId: number;
}

@Table({ tableName: "books" })
export class Book extends Model<Book, IBookCreationAttr> {
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  declare id: number;

  @Column({
    type: DataType.DATE,
    allowNull: false,
  })
  declare published_year: Date;

  @ForeignKey(() => Author)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  declare authorId: number;

  @BelongsTo(() => Author)
  author: Author;

  @HasOne(() => BookVersion)
  bookVersion: BookVersion;
}
