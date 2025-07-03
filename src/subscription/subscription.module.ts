import { Module } from "@nestjs/common";
import { SequelizeModule } from "@nestjs/sequelize";
import { Subscription } from "./entities/subscription.entity";
import { User } from "../users/models/user.model";
import { SubscriptionsController } from "./subscription.controller";
import { SubscriptionsService } from "./subscription.service";
import { JwtModule } from "@nestjs/jwt";

@Module({
  imports: [SequelizeModule.forFeature([Subscription, User]), JwtModule],
  controllers: [SubscriptionsController],
  providers: [SubscriptionsService],
  exports: [SubscriptionsService],
})
export class SubscriptionsModule {}
