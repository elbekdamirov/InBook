import { IsEmail, IsString, MinLength } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class SigninUserDto {
  @ApiProperty({ example: "user@example.com", description: "Email address" })
  @IsEmail()
  email: string;

  @ApiProperty({
    example: "UserPass123",
    description: "User password (min 6 characters)",
  })
  @IsString()
  @MinLength(6)
  password: string;
}
