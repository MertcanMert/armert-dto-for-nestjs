import { OmitType } from '@nestjs/mapped-types';
import { BaseAddressDTO } from './base-address.dto';

export class CreateAddressDTO extends OmitType(BaseAddressDTO, [
    'id',
    'userId',
    'createdAt',
    'updatedAt',
] as const) { }
