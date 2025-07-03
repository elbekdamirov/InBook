import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { Subscription } from "./entities/subscription.entity";
import { CreateSubscriptionDto } from "./dto/create-subscription.dto";
import { UpdateSubscriptionDto } from "./dto/update-subscription.dto";

@Injectable()
export class SubscriptionsService {
  constructor(
    @InjectModel(Subscription) private subscriptionRepo: typeof Subscription
  ) {}

  async create(dto: CreateSubscriptionDto) {
    return this.subscriptionRepo.create({
      user_id: dto.user_id,
      start_date: new Date(dto.start_date),
      end_date: new Date(dto.end_date),
    });
  }

  async findAll() {
    return this.subscriptionRepo.findAll();
  }

  async findOne(id: number) {
    const subscription = await this.subscriptionRepo.findByPk(id);
    if (!subscription) throw new NotFoundException("Subscription not found");
    return subscription;
  }

  async update(id: number, dto: UpdateSubscriptionDto) {
    const subscription = await this.findOne(id);
    return subscription.update({
      user_id: dto.user_id ?? subscription.user_id,
      start_date: dto.start_date
        ? new Date(dto.start_date)
        : subscription.start_date,
      end_date: dto.end_date ? new Date(dto.end_date) : subscription.end_date,
    });
  }

  async remove(id: number) {
    const subscription = await this.findOne(id);
    await subscription.destroy();
    return { message: "Subscription deleted" };
  }
}
