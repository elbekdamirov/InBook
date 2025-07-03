import { ApiProperty } from "@nestjs/swagger";
import { IsDateString, IsInt, Min } from "class-validator";

export class CreateSubscriptionDto {
  @ApiProperty({ example: 1 })
  @IsInt()
  @Min(1)
  user_id: number;

  @ApiProperty({ example: "2025-01-01" })
  @IsDateString()
  start_date: string;

  @ApiProperty({ example: "2026-01-01" })
  @IsDateString()
  end_date: string;
}
