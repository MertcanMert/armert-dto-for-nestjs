import { PartialType, OmitType } from '@nestjs/mapped-types';
import { BaseAddressDTO } from './base-address.dto';

export class UpdateAddressDTO extends PartialType(
    OmitType(BaseAddressDTO, [
        'id',
        'userId',
        'createdAt',
        'updatedAt',
    ] as const),
) { }
