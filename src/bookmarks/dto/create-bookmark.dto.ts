import { ApiProperty } from "@nestjs/swagger";
import { IsInt, IsOptional, IsString, Min } from "class-validator";

export class CreateBookmarkDto {
  @ApiProperty()
  @IsInt()
  @Min(1)
  user_id: number;

  @ApiProperty()
  @IsInt()
  @Min(1)
  book_id: number;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  note?: string;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsInt()
  @Min(0)
  position?: number;
}
