import { IsInt, IsString, IsUrl } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class CreateBookVersionDto {
  @ApiProperty({
    example: 1,
    description: "ID of the book",
  })
  @IsInt()
  bookId: number;

  @ApiProperty({
    example: 2,
    description: "ID of the language",
  })
  @IsInt()
  languageId: number;

  @ApiProperty({
    example: "Atomic Habits (Uzbek)",
    description: "Title of the book version in the specific language",
  })
  @IsString()
  title: string;

  @ApiProperty({
    example: "This is the Uzbek version of Atomic Habits.",
    description: "Localized description of the book",
  })
  @IsString()
  description: string;

  @ApiProperty({
    example: "https://storage.example.com/books/atomic-habits-uz.pdf",
    description: "URL to the full book text or file",
  })
  @IsUrl()
  text_url: string;

  @ApiProperty({
    example: "https://storage.example.com/covers/atomic-habits-uz.jpg",
    description: "URL to the cover image",
  })
  @IsUrl()
  cover_url: string;

  
}
