import { PartialType, OmitType } from '@nestjs/mapped-types';
import { BaseCategoryDTO } from './base-category.dto';

export class UpdateCategoryDTO extends PartialType(
    OmitType(BaseCategoryDTO, [
        'id',
        'createdAt',
        'updatedAt',
    ] as const),
) { }
