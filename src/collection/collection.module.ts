import { Module } from "@nestjs/common";
import { SequelizeModule } from "@nestjs/sequelize";
import { CollectionsService } from "./collection.service";
import { CollectionsController } from "./collection.controller";
import { Collection } from "./entities/collection.entity";
import { JwtModule } from "@nestjs/jwt";

@Module({
  imports: [SequelizeModule.forFeature([Collection]), JwtModule],
  controllers: [CollectionsController],
  providers: [CollectionsService],
  exports: [CollectionsService],
})
export class CollectionsModule {}
