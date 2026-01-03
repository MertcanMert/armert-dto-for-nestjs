import { Expose, Type } from 'class-transformer';
import { ReviewStatus } from './base-review.dto';
import { UserSummaryDTO } from '../user/user-response.dto';

export class ReviewResponseDTO {
    @Expose() id!: string;
    @Expose() productId!: string;
    @Expose() rating!: number;
    @Expose() comment?: string;
    @Expose() images?: string[];
    @Expose() helpfulCount!: number;
    @Expose() isVerifiedPurchase!: boolean;
    @Expose() createdAt!: Date;
    @Expose() status!: ReviewStatus; // Can be used for admin or to show pending status to user

    @Expose()
    @Type(() => UserSummaryDTO)
    user?: UserSummaryDTO;
}
