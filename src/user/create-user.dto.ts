import { OmitType } from '@nestjs/mapped-types';
import {
    IsString,
    MinLength,
    MaxLength,
    Matches,
    IsOptional,
} from 'class-validator';
import { BaseUserDTO } from './base-user.dto';

export class CreateUserDTO extends OmitType(BaseUserDTO, [
    'id',
    'emailVerified',
    'phoneVerified',
    'twoFactorEnabled',
    'lastLoginAt',
    'createdAt',
    'updatedAt',
    'status',
    'role',
] as const) {
    @IsString()
    @MinLength(8, { message: 'Password must be at least 8 characters' })
    @MaxLength(128, { message: 'Password cannot exceed 128 characters' })
    @Matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/, {
        message: 'Password must contain at least one uppercase letter, one lowercase letter, one number and one special character',
    })
    password!: string;

    @IsOptional()
    @IsString()
    referralCode?: string;
}
