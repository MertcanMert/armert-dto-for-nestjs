import { IsEnum } from 'class-validator';
import { UserStatus, UserRole } from './base-user.dto';

export class UpdateUserStatusDTO {
    @IsEnum(UserStatus)
    status!: UserStatus;
}

export class UpdateUserRoleDTO {
    @IsEnum(UserRole)
    role!: UserRole;
}
