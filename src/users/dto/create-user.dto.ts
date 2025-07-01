import {
  IsString,
  IsEmail,
  MinLength,
  IsPhoneNumber,
  IsNumber,
  IsIn,
} from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class CreateUserDto {
  @ApiProperty({
    example: "Elbek Damirov",
    description: "Full name of the user",
  })
  @IsString()
  full_name: string;

  @ApiProperty({
    example: "UserPass123",
    description: "Password (min 6 characters)",
  })
  @IsString()
  @MinLength(6)
  password: string;

  @ApiProperty({
    example: "UserPass123",
    description: "Confirm password (must match password)",
  })
  @IsString()
  @MinLength(6)
  confirm_password: string;

  @ApiProperty({
    example: "+998901234567",
    description: "Phone number in international format",
  })
  @IsString()
  phone: string;

  @ApiProperty({ example: "user@example.com", description: "Email address" })
  @IsEmail()
  email: string;

  @ApiProperty({ example: "Erkak", description: "Gender: Erkak or Ayol" })
  @IsString()
  @IsIn(["Erkak", "Ayol"])
  gender: string;

  @ApiProperty({ example: 2007, description: "Year of birth (4-digit)" })
  @IsNumber()
  birth_year: number;
}
