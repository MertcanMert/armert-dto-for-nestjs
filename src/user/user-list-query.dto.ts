import { IsOptional, IsString, IsEnum, IsBoolean, IsDate } from 'class-validator';
import { Type } from 'class-transformer';
import { PaginationQueryDTO } from '../common/pagination.dto';
import { UserRole, UserStatus } from './base-user.dto';

export class UserListQueryDTO extends PaginationQueryDTO {
    @IsOptional()
    @IsString()
    search?: string;

    @IsOptional()
    @IsEnum(UserRole)
    role?: UserRole;

    @IsOptional()
    @IsEnum(UserStatus)
    status?: UserStatus;

    @IsOptional()
    @Type(() => Boolean)
    @IsBoolean()
    emailVerified?: boolean;

    @IsOptional()
    @Type(() => Date)
    @IsDate()
    createdAfter?: Date;

    @IsOptional()
    @Type(() => Date)
    @IsDate()
    createdBefore?: Date;
}
