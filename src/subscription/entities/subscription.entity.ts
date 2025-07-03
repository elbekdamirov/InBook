import {
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from "sequelize-typescript";
import { User } from "../../users/models/user.model";

interface SubscriptionCreationAttrs {
  user_id: number;
  start_date: Date;
  end_date: Date;
}

@Table({ tableName: "subscriptions" })
export class Subscription extends Model<
  Subscription,
  SubscriptionCreationAttrs
> {
  @Column({ type: DataType.INTEGER, autoIncrement: true, primaryKey: true })
  declare id: number;

  @ForeignKey(() => User)
  @Column({ type: DataType.INTEGER, allowNull: false })
  declare user_id: number;

  @Column({ type: DataType.DATE, allowNull: false })
  declare start_date: Date;

  @Column({ type: DataType.DATE, allowNull: false })
  declare end_date: Date;
}
