import {
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from "sequelize-typescript";
import { Collection } from "../../collection/entities/collection.entity";
import { Book } from "../../books/models/book.model";

interface BookCollectionCreationAttrs {
  book_id: number;
  collection_id: number;
}

@Table({ tableName: "book_collections" })
export class BookCollection extends Model<
  BookCollection,
  BookCollectionCreationAttrs
> {
  @Column({ type: DataType.INTEGER, autoIncrement: true, primaryKey: true })
  declare id: number;

  @ForeignKey(() => Book)
  @Column({ type: DataType.INTEGER, allowNull: false })
  declare book_id: number;

  @ForeignKey(() => Collection)
  @Column({ type: DataType.INTEGER, allowNull: false })
  declare collection_id: number;
}
