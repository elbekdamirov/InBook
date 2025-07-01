import {
  Table,
  Column,
  Model,
  DataType,
  BelongsToMany,
  BelongsTo,
  HasMany,
} from "sequelize-typescript";
import { BookVersion } from "../../book-version/models/book-version.model";

interface ILanguageCreationAttr {
  code: string;
  name: string;
  flag: string;
}

@Table({ tableName: "languages" })
export class Language extends Model<Language, ILanguageCreationAttr> {
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  declare id: number;

  @Column({
    type: DataType.STRING(10),
    allowNull: false,
    unique: true,
  })
  declare code: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  declare name: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  declare flag: string;

  @HasMany(() => BookVersion)
  bookVersion: BookVersion[];
}
