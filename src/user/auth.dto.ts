import { IsEmail, IsString, MinLength, MaxLength, Matches, IsOptional } from 'class-validator';

export class LoginDTO {
    @IsEmail({}, { message: 'Please provide a valid email address' })
    email!: string;

    @IsString()
    password!: string;

    @IsOptional()
    @IsString()
    twoFactorCode?: string;
}

export class ChangePasswordDTO {
    @IsString()
    currentPassword!: string;

    @IsString()
    @MinLength(8, { message: 'Password must be at least 8 characters' })
    @MaxLength(128, { message: 'Password cannot exceed 128 characters' })
    @Matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/, {
        message: 'Password must contain at least one uppercase letter, one lowercase letter, one number and one special character',
    })
    newPassword!: string;

    @IsString()
    confirmPassword!: string;
}

export class ForgotPasswordDTO {
    @IsEmail({}, { message: 'Please provide a valid email address' })
    email!: string;
}

export class ResetPasswordDTO {
    @IsString()
    token!: string;

    @IsString()
    @MinLength(8, { message: 'Password must be at least 8 characters' })
    @MaxLength(128, { message: 'Password cannot exceed 128 characters' })
    @Matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/, {
        message: 'Password must contain at least one uppercase letter, one lowercase letter, one number and one special character',
    })
    newPassword!: string;

    @IsString()
    confirmPassword!: string;
}

export class VerifyEmailDTO {
    @IsString()
    token!: string;
}

export class RefreshTokenDTO {
    @IsString()
    refreshToken!: string;
}

export class AuthResponseDTO {
    accessToken!: string;
    refreshToken!: string;
    expiresIn!: number;
    tokenType: string = 'Bearer';
}
