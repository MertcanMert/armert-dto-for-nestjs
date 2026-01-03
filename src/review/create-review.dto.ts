import { PickType } from '@nestjs/mapped-types';
import { BaseReviewDTO } from './base-review.dto';

export class CreateReviewDTO extends PickType(BaseReviewDTO, [
    'productId',
    'productVariantId',
    'rating',
    'comment',
    'images',
] as const) { }

export class UpdateReviewStatusDTO {
    status!: BaseReviewDTO['status'];
    rejectionReason?: string;
}
