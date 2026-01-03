import {
    IsString,
    IsEmail,
    IsOptional,
    IsBoolean,
    IsEnum,
    IsDate,
    IsPhoneNumber,
    IsUrl,
    MinLength,
    MaxLength,
    Matches,
    IsUUID,
} from 'class-validator';
import { Type } from 'class-transformer';

export enum UserRole {
    CUSTOMER = 'CUSTOMER',
    ADMIN = 'ADMIN',
    MODERATOR = 'MODERATOR',
    VENDOR = 'VENDOR',
}

export enum UserStatus {
    ACTIVE = 'ACTIVE',
    INACTIVE = 'INACTIVE',
    SUSPENDED = 'SUSPENDED',
    PENDING_VERIFICATION = 'PENDING_VERIFICATION',
}

export enum Gender {
    MALE = 'MALE',
    FEMALE = 'FEMALE',
    OTHER = 'OTHER',
    PREFER_NOT_TO_SAY = 'PREFER_NOT_TO_SAY',
}

export class BaseUserDTO {
    @IsUUID()
    id!: string;

    @IsEmail({}, { message: 'Please provide a valid email address' })
    email!: string;

    @IsString()
    @MinLength(2, { message: 'First name must be at least 2 characters' })
    @MaxLength(50, { message: 'First name cannot exceed 50 characters' })
    firstName!: string;

    @IsString()
    @MinLength(2, { message: 'Last name must be at least 2 characters' })
    @MaxLength(50, { message: 'Last name cannot exceed 50 characters' })
    lastName!: string;

    @IsOptional()
    @IsString()
    @MinLength(3, { message: 'Username must be at least 3 characters' })
    @MaxLength(30, { message: 'Username cannot exceed 30 characters' })
    @Matches(/^[a-zA-Z0-9_-]+$/, {
        message: 'Username can only contain letters, numbers, underscores and dashes',
    })
    username?: string;

    @IsOptional()
    @IsPhoneNumber(undefined, { message: 'Please provide a valid phone number' })
    phone?: string;

    @IsOptional()
    @IsUrl({}, { message: 'Please provide a valid URL for avatar' })
    avatar?: string;

    @IsOptional()
    @IsEnum(Gender)
    gender?: Gender;

    @IsOptional()
    @Type(() => Date)
    @IsDate()
    birthDate?: Date;

    @IsEnum(UserRole)
    role!: UserRole;

    @IsEnum(UserStatus)
    status!: UserStatus;

    @IsBoolean()
    emailVerified!: boolean;

    @IsOptional()
    @IsBoolean()
    phoneVerified?: boolean;

    @IsOptional()
    @IsBoolean()
    twoFactorEnabled?: boolean;

    @IsOptional()
    @Type(() => Date)
    @IsDate()
    lastLoginAt?: Date;

    @IsOptional()
    @Type(() => Date)
    @IsDate()
    createdAt?: Date;

    @IsOptional()
    @Type(() => Date)
    @IsDate()
    updatedAt?: Date;
}
