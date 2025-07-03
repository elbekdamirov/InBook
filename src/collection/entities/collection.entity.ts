import { Column, DataType, Model, Table } from "sequelize-typescript";

interface CollectionCreationAttrs {
  title: string;
  description?: string;
  coverImageUrl?: string;
  isPublic?: boolean;
  isPremiumOnly?: boolean;
  isPremium?: boolean;
  createdBy?: number;
}

@Table({ tableName: "collections" })
export class Collection extends Model<Collection, CollectionCreationAttrs> {
  @Column({ type: DataType.INTEGER, autoIncrement: true, primaryKey: true })
  declare id: number;

  @Column({ type: DataType.STRING, allowNull: false })
  declare title: string;

  @Column({ type: DataType.TEXT })
  declare description: string;

  @Column({ type: DataType.STRING })
  declare coverImageUrl: string;

  @Column({ type: DataType.BOOLEAN, defaultValue: true })
  declare isPublic: boolean;

  @Column({ type: DataType.BOOLEAN, defaultValue: false })
  declare isPremiumOnly: boolean;

  @Column({ type: DataType.BOOLEAN, defaultValue: false })
  declare isPremium: boolean;

  @Column({ type: DataType.INTEGER })
  declare createdBy: number;
}
