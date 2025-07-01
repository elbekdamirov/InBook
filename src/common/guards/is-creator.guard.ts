import {
  CanActivate,
  ExecutionContext,
  Injectable,
  ForbiddenException,
} from "@nestjs/common";

@Injectable()
export class IsCreatorGuard implements CanActivate {
  canActivate(context: ExecutionContext): boolean {
    const request = context.switchToHttp().getRequest();
    const user = request.user;

    if (!user) {
      throw new ForbiddenException("No user payload found");
    }

    if (!user.is_creator) {
      throw new ForbiddenException("Access denied: Only creators are allowed");
    }

    return true;
  }
}
