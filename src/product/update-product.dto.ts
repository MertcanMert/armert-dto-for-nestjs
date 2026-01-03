import { PartialType, OmitType } from '@nestjs/mapped-types';
import { BaseProductDTO } from './base-product.dto';

export class UpdateProductDTO extends PartialType(
    OmitType(BaseProductDTO, [
        'id',
        'rating',
        'reviewCount',
        'createdAt',
        'updatedAt',
    ] as const),
) { }