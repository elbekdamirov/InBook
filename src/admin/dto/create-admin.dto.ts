import { IsString, IsEmail, MinLength, IsBoolean } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class CreateAdminDto {
  @ApiProperty({
    example: "Elbek Damirov",
    description: "Full name of the admin",
  })
  @IsString()
  full_name: string;

  @ApiProperty({ example: "admin@example.com", description: "Email address" })
  @IsEmail()
  email: string;

  @ApiProperty({
    example: "StrongPass123",
    description: "Password with minimum 6 characters",
  })
  @IsString()
  @MinLength(6)
  password: string;

  @ApiProperty({
    example: "StrongPass123",
    description: "Confirm password (must match password)",
  })
  @IsString()
  @MinLength(6)
  confirm_password: string;

  @ApiProperty({ example: true, description: "Is this admin a creator?" })
  @IsBoolean()
  is_creator: boolean;
}
