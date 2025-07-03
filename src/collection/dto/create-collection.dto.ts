import { ApiProperty } from "@nestjs/swagger";
import { IsOptional, IsString, IsBoolean, IsInt, IsUrl } from "class-validator";

export class CreateCollectionDto {
  @ApiProperty()
  @IsString()
  title: string;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  description?: string;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsUrl()
  coverImageUrl?: string;

  @ApiProperty({ required: false, default: true })
  @IsOptional()
  @IsBoolean()
  isPublic?: boolean;

  @ApiProperty({ required: false, default: false })
  @IsOptional()
  @IsBoolean()
  isPremiumOnly?: boolean;

  @ApiProperty({ required: false, default: false })
  @IsOptional()
  @IsBoolean()
  isPremium?: boolean;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsInt()
  createdBy?: number;
}
