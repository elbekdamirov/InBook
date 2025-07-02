import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  HttpCode,
} from "@nestjs/common";
import { UsersService } from "./users.service";
import { CreateUserDto } from "./dto/create-user.dto";
import { UpdateUserDto } from "./dto/update-user.dto";
import { UserGuard } from "../common/guards/user.guard";
import { SelfGuard } from "../common/guards/self.guard";
import { PhoneUserDto } from "./dto/phone-user.dto";

@Controller("users")
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  @HttpCode(200)
  @Post("send-otp")
  newOtp(@Body() phoneUserDto: PhoneUserDto) {
    return this.usersService.newOtp(phoneUserDto);
  }

  @UseGuards(UserGuard)
  @Get()
  findAll() {
    return this.usersService.findAll();
  }

  @UseGuards(SelfGuard)
  @UseGuards(UserGuard)
  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.usersService.findOne(+id);
  }

  @UseGuards(SelfGuard)
  @UseGuards(UserGuard)
  @Patch(":id")
  update(@Param("id") id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(+id, updateUserDto);
  }

  @UseGuards(SelfGuard)
  @UseGuards(UserGuard)
  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.usersService.remove(+id);
  }

  @Get("activate/:activation_link")
  async activateAccount(@Param("activation_link") activation_link: string) {
    return this.usersService.activateUser(activation_link);
  }
}
