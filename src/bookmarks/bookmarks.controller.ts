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
import { BookmarksService } from "./bookmarks.service";
import { CreateBookmarkDto } from "./dto/create-bookmark.dto";
import { UpdateBookmarkDto } from "./dto/update-bookmark.dto";
import { ApiTags, ApiOperation, ApiBearerAuth } from "@nestjs/swagger";
import { UserGuard } from "../common/guards/user.guard";

@ApiTags("Bookmarks")
@ApiBearerAuth()
@UseGuards(UserGuard)
@Controller("bookmarks")
export class BookmarksController {
  constructor(private readonly bookmarksService: BookmarksService) {}

  @Post()
  @ApiOperation({ summary: "Create Bookmark" })
  create(@Body() dto: CreateBookmarkDto) {
    return this.bookmarksService.create(dto);
  }

  @Get()
  @ApiOperation({ summary: "Get all Bookmarks" })
  findAll() {
    return this.bookmarksService.findAll();
  }

  @Get(":id")
  @ApiOperation({ summary: "Get Bookmark by ID" })
  findOne(@Param("id", ParseIntPipe) id: number) {
    return this.bookmarksService.findOne(id);
  }

  @Patch(":id")
  @ApiOperation({ summary: "Update Bookmark by ID" })
  update(
    @Param("id", ParseIntPipe) id: number,
    @Body() dto: UpdateBookmarkDto
  ) {
    return this.bookmarksService.update(id, dto);
  }

  @Delete(":id")
  @ApiOperation({ summary: "Delete Bookmark by ID" })
  remove(@Param("id", ParseIntPipe) id: number) {
    return this.bookmarksService.remove(id);
  }
}
