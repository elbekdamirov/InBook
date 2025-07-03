import {
  Controller,
  Post,
  Body,
  Get,
  Param,
  Patch,
  Delete,
  ParseIntPipe,
  UseGuards,
} from "@nestjs/common";
import { CreateSubscriptionDto } from "./dto/create-subscription.dto";
import { UpdateSubscriptionDto } from "./dto/update-subscription.dto";
import { ApiTags, ApiOperation, ApiBearerAuth } from "@nestjs/swagger";
import { SubscriptionsService } from "./subscription.service";
import { AdminGuard } from "../common/guards/admin.guard";

@ApiTags("Subscriptions")
@ApiBearerAuth()
@UseGuards(AdminGuard)
@Controller("subscriptions")
export class SubscriptionsController {
  constructor(private readonly subscriptionsService: SubscriptionsService) {}

  @Post()
  @ApiOperation({ summary: "Create Subscription" })
  create(@Body() dto: CreateSubscriptionDto) {
    return this.subscriptionsService.create(dto);
  }

  @Get()
  @ApiOperation({ summary: "Get all Subscriptions" })
  findAll() {
    return this.subscriptionsService.findAll();
  }

  @Get(":id")
  @ApiOperation({ summary: "Get Subscription by ID" })
  findOne(@Param("id", ParseIntPipe) id: number) {
    return this.subscriptionsService.findOne(id);
  }

  @Patch(":id")
  @ApiOperation({ summary: "Update Subscription by ID" })
  update(
    @Param("id", ParseIntPipe) id: number,
    @Body() dto: UpdateSubscriptionDto
  ) {
    return this.subscriptionsService.update(id, dto);
  }

  @Delete(":id")
  @ApiOperation({ summary: "Delete Subscription by ID" })
  remove(@Param("id", ParseIntPipe) id: number) {
    return this.subscriptionsService.remove(id);
  }
}
