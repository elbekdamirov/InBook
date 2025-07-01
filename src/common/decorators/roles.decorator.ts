import { SetMetadata } from "@nestjs/common";
import { ROLES_KEY } from "../../app.contstants";

export const Roles = (...roles: string[]) => SetMetadata(ROLES_KEY, roles);
