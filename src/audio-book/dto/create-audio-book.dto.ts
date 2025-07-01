import { IsInt, IsNumber, IsString, Min } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class CreateAudioBookDto {
  @ApiProperty({
    example: 1,
    description: "ID of the related book version",
  })
  @IsInt()
  bookVersionId: number;

  @ApiProperty({
    example: "John Doe",
    description: "Name of the narrator",
  })
  @IsString()
  narrator_name: string;

  @ApiProperty({
    example: 3600,
    description: "Total duration in seconds or minutes",
  })
  @IsInt()
  @Min(1)
  total_duration: number;

  @ApiProperty({
    example: 120.5,
    description: "Total audio file size in MB",
  })
  @IsNumber()
  @Min(0.1)
  total_size_mb: number;
}
