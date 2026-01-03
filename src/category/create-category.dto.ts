import { OmitType } from '@nestjs/mapped-types';
import { BaseCategoryDTO } from './base-category.dto';

export class CreateCategoryDTO extends OmitType(BaseCategoryDTO, [
    'id',
    'createdAt',
    'updatedAt',
] as const) { }
