import {
  Body,
  Controller,
  Get,
  HttpCode,
  Param,
  ParseIntPipe,
  Post,
  Res,
} from "@nestjs/common";
import { AuthService } from "./auth.service";
import { CreateUserDto } from "../users/dto/create-user.dto";
import { SigninUserDto } from "../users/dto/signin-user.dto";
import { Response } from "express";
import { RegisterAdminDtoDto } from "../admin/dto/register-admin.dto";
import { CreateAdminDto } from "../admin/dto/create-admin.dto";
import { CookieGetter } from "../common/decorators/cookie-getter.decorator";

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

  @HttpCode(200)
  @Post("signout")
  signout(
    @CookieGetter("refreshToken") refreshToken: string,
    @Res({ passthrough: true }) res: Response
  ) {
    return this.authService.signout(refreshToken, res);
  }

  @Post("admin/signup")
  register(@Body() createAdminDto: CreateAdminDto) {
    return this.authService.register(createAdminDto);
  }

  @Post("admin/signin")
  login(
    @Body() registerAdminDto: RegisterAdminDtoDto,
    @Res({ passthrough: true }) res: Response
  ) {
    return this.authService.login(registerAdminDto, res);
  }

  // @Get("activate/:activation_link")
  // async activateAccount(@Param("activation_link") activation_link: string) {
  //   return this.authService.activate(activation_link);
  // }

  @Post("logout")
  logout(@Res({ passthrough: true }) res: Response): string {
    res.clearCookie("refreshToken");
    return "Logged out successfully";
  }

  @HttpCode(200)
  @Post(":id/refresh")
  refresh(
    @Param("id", ParseIntPipe) id: number,
    @CookieGetter("refreshToken") refreshToken: string,
    @Res({ passthrough: true }) res: Response
  ) {
    return this.authService.refreshToken(id, refreshToken, res);
  }
}
