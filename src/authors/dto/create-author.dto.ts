import { IsString, IsUrl } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class CreateAuthorDto {
  @ApiProperty({
    example: "James Clear",
    description: "Full name of the author",
  })
  @IsString()
  full_name: string;

  @ApiProperty({
    example:
      "James Clear is an author known for writing about habits and behavior change.",
    description: "Short biography of the author",
  })
  @IsString()
  bio: string;

  @ApiProperty({
    example: "https://example.com/images/james-clear.jpg",
    description: "URL to the author’s photo",
  })
  @IsUrl()
  photo_url: string;
}
