import {
  Table,
  Column,
  Model,
  DataType,
  ForeignKey,
  BelongsTo,
  HasMany,
} from "sequelize-typescript";
import { BookVersion } from "../../book-version/models/book-version.model";
import { AudioPart } from "../../audio-parts/models/audio-part.model";

interface IAudioBookCreationAtrr {
  bookVersionId: number;
  narrator_name: string;
  total_duration: number;
  total_size_mb: number;
}

@Table({ tableName: "audio_books" })
export class AudioBook extends Model<AudioBook, IAudioBookCreationAtrr> {
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  declare id: number;

  @ForeignKey(() => BookVersion)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  declare bookVersionId: number;

  @BelongsTo(() => BookVersion)
  declare bookVersion: BookVersion;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  declare narrator_name: string;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  declare total_duration: number;

  @Column({
    type: DataType.FLOAT,
    allowNull: false,
  })
  declare total_size_mb: number;

  @HasMany(() => AudioPart)
  audioParts: AudioPart[];
}
