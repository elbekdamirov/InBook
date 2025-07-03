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
import { CreateCollectionDto } from "./dto/create-collection.dto";
import { UpdateCollectionDto } from "./dto/update-collection.dto";
import { ApiTags, ApiOperation, ApiBearerAuth } from "@nestjs/swagger";
import { CollectionsService } from "./collection.service";
import { AdminGuard } from "../common/guards/admin.guard";

@ApiTags("Collections")
@ApiBearerAuth()
@UseGuards(AdminGuard)
@Controller("collections")
export class CollectionsController {
  constructor(private readonly collectionsService: CollectionsService) {}

  @Post()
  @ApiOperation({ summary: "Create a collection" })
  create(@Body() dto: CreateCollectionDto) {
    return this.collectionsService.create(dto);
  }

  @Get()
  @ApiOperation({ summary: "Get all collections" })
  findAll() {
    return this.collectionsService.findAll();
  }

  @Get(":id")
  @ApiOperation({ summary: "Get collection by ID" })
  findOne(@Param("id", ParseIntPipe) id: number) {
    return this.collectionsService.findOne(id);
  }

  @Patch(":id")
  @ApiOperation({ summary: "Update collection by ID" })
  update(
    @Param("id", ParseIntPipe) id: number,
    @Body() dto: UpdateCollectionDto
  ) {
    return this.collectionsService.update(id, dto);
  }

  @Delete(":id")
  @ApiOperation({ summary: "Delete collection by ID" })
  remove(@Param("id", ParseIntPipe) id: number) {
    return this.collectionsService.remove(id);
  }
}
