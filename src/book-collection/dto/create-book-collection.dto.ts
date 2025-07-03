import { ApiProperty } from "@nestjs/swagger";
import { IsInt, Min } from "class-validator";

export class CreateBookCollectionDto {
  @ApiProperty({ example: 1 })
  @IsInt()
  @Min(1)
  book_id: number;

  @ApiProperty({ example: 1 })
  @IsInt()
  @Min(1)
  collection_id: number;
}
