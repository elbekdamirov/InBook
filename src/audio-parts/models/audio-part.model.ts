import {
  Table,
  Column,
  Model,
  DataType,
  ForeignKey,
  BelongsTo,
} from "sequelize-typescript";
import { AudioBook } from "../../audio-book/models/audio-book.model";

interface IAudioPartCreationAttr {
  audioBookId: number;
  title: string;
  file_url: string;
  duration: number;
  size_mb: number;
  oreder_index: number;
}

@Table({ tableName: "audio_parts" })
export class AudioPart extends Model<AudioPart, IAudioPartCreationAttr> {
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  declare id: number;

  @ForeignKey(() => AudioBook)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  declare audioBookId: number;

  @BelongsTo(() => AudioBook)
  audioBook: AudioBook;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  declare title: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  declare file_url: string;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  declare duration: number;

  @Column({
    type: DataType.FLOAT,
    allowNull: false,
  })
  declare size_mb: number;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  declare oreder_index: number;
}
