import { PartialType, OmitType } from '@nestjs/mapped-types';
import { BaseUserDTO } from './base-user.dto';

export class UpdateUserDTO extends PartialType(
    OmitType(BaseUserDTO, [
        'id',
        'email',
        'emailVerified',
        'phoneVerified',
        'twoFactorEnabled',
        'lastLoginAt',
        'createdAt',
        'updatedAt',
        'role',
        'status',
    ] as const),
) { }
