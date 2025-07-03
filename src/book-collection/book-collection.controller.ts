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
import { CreateBookCollectionDto } from "./dto/create-book-collection.dto";
import { UpdateBookCollectionDto } from "./dto/update-book-collection.dto";
import { ApiTags, ApiOperation, ApiBearerAuth } from "@nestjs/swagger";
import { BookCollectionsService } from "./book-collection.service";
import { AdminGuard } from "../common/guards/admin.guard";

@ApiTags("BookCollections")
@ApiBearerAuth()
@UseGuards(AdminGuard)
@Controller("book-collections")
export class BookCollectionsController {
  constructor(
    private readonly bookCollectionsService: BookCollectionsService
  ) {}

  @Post()
  @ApiOperation({ summary: "Create BookCollection" })
  create(@Body() dto: CreateBookCollectionDto) {
    return this.bookCollectionsService.create(dto);
  }

  @Get()
  @ApiOperation({ summary: "Get all BookCollections" })
  findAll() {
    return this.bookCollectionsService.findAll();
  }

  @Get(":id")
  @ApiOperation({ summary: "Get BookCollection by ID" })
  findOne(@Param("id", ParseIntPipe) id: number) {
    return this.bookCollectionsService.findOne(id);
  }

  @Patch(":id")
  @ApiOperation({ summary: "Update BookCollection by ID" })
  update(
    @Param("id", ParseIntPipe) id: number,
    @Body() dto: UpdateBookCollectionDto
  ) {
    return this.bookCollectionsService.update(id, dto);
  }

  @Delete(":id")
  @ApiOperation({ summary: "Delete BookCollection by ID" })
  remove(@Param("id", ParseIntPipe) id: number) {
    return this.bookCollectionsService.remove(id);
  }
}
