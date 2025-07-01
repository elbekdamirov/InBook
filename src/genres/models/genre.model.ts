import { Table, Column, Model, DataType } from "sequelize-typescript";

interface IGenresCreationAttr {
  name: string;
}

@Table({ tableName: "genres" })
export class Genre extends Model<Genre, IGenresCreationAttr> {
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  declare id: number;

  @Column({
    type: DataType.STRING,
    allowNull: false,
    unique: true,
  })
  declare name: string;
}
