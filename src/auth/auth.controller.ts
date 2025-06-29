import { Body, Controller, HttpCode, Post, Res } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { CreateUserDto } from "../users/dto/create-user.dto";
import { SigninUserDto } from "../users/dto/signin-user.dto";
import { Response } from "express";

@Controller("auth")
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post("signup")
  signup(@Body() createUserDto: CreateUserDto) {
    return this.authService.signup(createUserDto);
  }

  @HttpCode(200)
  @Post("signin")
  signin(
    @Body() signinUserDto: SigninUserDto,
    @Res({ passthrough: true }) res: Response
  ) {
    return this.authService.signin(signinUserDto, res);
  }
}
