import { Expose } from 'class-transformer';
import { UserRole, UserStatus, Gender } from './base-user.dto';

export class UserResponseDTO {
    @Expose() id!: string;
    @Expose() email!: string;
    @Expose() firstName!: string;
    @Expose() lastName!: string;
    @Expose() username?: string;
    @Expose() phone?: string;
    @Expose() avatar?: string;
    @Expose() gender?: Gender;
    @Expose() birthDate?: Date;
    @Expose() role!: UserRole;
    @Expose() status!: UserStatus;
    @Expose() emailVerified!: boolean;
    @Expose() phoneVerified?: boolean;
    @Expose() twoFactorEnabled?: boolean;
    @Expose() lastLoginAt?: Date;
    @Expose() createdAt!: Date;
    @Expose() updatedAt!: Date;

    // Computed property
    get fullName(): string {
        return `${this.firstName} ${this.lastName}`;
    }
}

export class UserSummaryDTO {
    @Expose() id!: string;
    @Expose() email!: string;
    @Expose() firstName!: string;
    @Expose() lastName!: string;
    @Expose() avatar?: string;
    @Expose() role!: UserRole;
}
