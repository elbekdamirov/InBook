import {
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from "sequelize-typescript";
import { User } from "../../users/models/user.model";
import { Book } from "../../books/models/book.model";

interface BookmarkCreationAttrs {
  user_id: number;
  book_id: number;
  note?: string;
  position?: number;
}

@Table({ tableName: "bookmarks" })
export class Bookmark extends Model<Bookmark, BookmarkCreationAttrs> {
  @Column({ type: DataType.INTEGER, autoIncrement: true, primaryKey: true })
  declare id: number;

  @ForeignKey(() => User)
  @Column({ type: DataType.INTEGER, allowNull: false })
  declare user_id: number;

  @ForeignKey(() => Book)
  @Column({ type: DataType.INTEGER, allowNull: false })
  declare book_id: number;

  @Column({ type: DataType.STRING })
  declare note: string;

  @Column({ type: DataType.INTEGER })
  declare position: number;
}
