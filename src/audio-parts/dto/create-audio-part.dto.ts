import { IsInt, IsNumber, IsString, IsUrl, Min } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class CreateAudioPartDto {
  @ApiProperty({
    example: 1,
    description: "ID of the associated AudioBook",
  })
  @IsInt()
  audioBookId: number;

  @ApiProperty({
    example: "Part 1: Introduction",
    description: "Title of this audio part",
  })
  @IsString()
  title: string;

  @ApiProperty({
    example: "https://cdn.example.com/audio/part1.mp3",
    description: "URL to the audio file",
  })
  @IsUrl()
  file_url: string;

  @ApiProperty({
    example: 300,
    description: "Duration of the part (in seconds or minutes)",
  })
  @IsInt()
  @Min(1)
  duration: number;

  @ApiProperty({
    example: 5.7,
    description: "Size of the part in MB",
  })
  @IsNumber()
  @Min(0.1)
  size_mb: number;

  @ApiProperty({
    example: 1,
    description: "Order of this part in the full audiobook",
  })
  @IsInt()
  @Min(0)
  oreder_index: number;
}
