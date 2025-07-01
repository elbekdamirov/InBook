import {
  Table,
  Column,
  Model,
  DataType,
  ForeignKey,
  BelongsTo,
  HasMany,
} from "sequelize-typescript";
import { Book } from "../../books/models/book.model"; // adjust import paths as needed
import { Language } from "../../languages/models/language.model";
import { AudioBook } from "../../audio-book/models/audio-book.model";

interface IBookVersionCreationAttr {
  bookId: number;
  languageId: number;
  title: string;
  description: string;
  text_url: string;
  cover_url: string;
}

@Table({ tableName: "book_versions" })
export class BookVersion extends Model<BookVersion, IBookVersionCreationAttr> {
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  declare id: number;

  @ForeignKey(() => Book)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  declare bookId: number;

  @ForeignKey(() => Language)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  declare languageId: number;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  declare title: string;

  @Column({
    type: DataType.TEXT,
    allowNull: false,
  })
  declare description: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  declare text_url: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  declare cover_url: string;

  @BelongsTo(() => Book)
  book: Book;

  @BelongsTo(() => Language)
  language: Language;

  @HasMany(() => AudioBook)
  audioBooks: AudioBook[];
}
