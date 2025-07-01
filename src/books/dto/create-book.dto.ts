import { IsInt, IsDateString } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class CreateBookDto {
  @ApiProperty({
    example: "2024-05-12",
    description: "The year the book was published",
  })
  @IsDateString()
  published_year: Date;

  @ApiProperty({
    example: 1,
    description: "The ID of the author",
  })
  @IsInt()
  authorId: number;
}
