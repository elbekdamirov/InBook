import {
  CanActivate,
  ExecutionContext,
  Injectable,
  ForbiddenException,
} from "@nestjs/common";

@Injectable()
export class IsPremiumGuard implements CanActivate {
  canActivate(context: ExecutionContext): boolean {
    const request = context.switchToHttp().getRequest();
    const user = request.user;

    if (!user) {
      throw new ForbiddenException("Foydalanuvchi aniqlanmadi");
    }

    if (!user.is_premium) {
      throw new ForbiddenException("Premium foydalanuvchilar uchun");
    }

    return true;
  }
}
