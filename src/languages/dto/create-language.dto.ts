import { IsString, Length, Matches } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class CreateLanguageDto {
  @ApiProperty({
    example: "en",
    description: "Language code (ISO 639-1)",
  })
  @IsString()
  @Length(2, 5)
  @Matches(/^[a-z]{2,5}$/i)
  code: string;

  @ApiProperty({
    example: "English",
    description: "Name of the language",
  })
  @IsString()
  name: string;

  @ApiProperty({
    example: "🇺🇸",
    description: "Flag emoji or URL",
  })
  @IsString()
  flag: string;
}
