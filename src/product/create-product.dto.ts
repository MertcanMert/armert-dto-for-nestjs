import { OmitType } from '@nestjs/mapped-types';
import { BaseProductDTO } from './base-product.dto';

export class CreateProductDTO extends OmitType(BaseProductDTO, [
    'id',
    'rating',
    'reviewCount',
    'isActive',
    'createdAt',
    'updatedAt',
] as const) { }
