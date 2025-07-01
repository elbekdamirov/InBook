import { IsEmail, IsString, MinLength } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class RegisterAdminDtoDto {
  @ApiProperty({ example: "admin@example.com", description: "Email address" })
  @IsEmail()
  email: string;

  @ApiProperty({
    example: "StrongPass123",
    description: "Password (min 6 characters)",
  })
  @IsString()
  @MinLength(6)
  password: string;
}
