import { IsPhoneNumber, IsString } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class PhoneUserDto {
  @ApiProperty({
    example: "+998901234567",
    description: "Phone number in international format",
  })
  @IsString()
  @IsPhoneNumber("UZ")
  phone: string;
}
