import {
    IsString,
    IsNumber,
    IsUUID,
    IsOptional,
    IsBoolean,
    Min,
    Max,
    IsArray,
    IsUrl,
    MaxLength,
    IsEnum,
} from 'class-validator';

export enum ReviewStatus {
    PENDING = 'PENDING',     // Pending approval
    APPROVED = 'APPROVED',   // Published / Live
    REJECTED = 'REJECTED',   // Rejected (unwanted content)
}

export class BaseReviewDTO {
    @IsUUID()
    id!: string;

    @IsUUID()
    productId!: string;

    @IsOptional()
    @IsUUID()
    productVariantId?: string;

    @IsUUID()
    userId!: string;

    @IsNumber()
    @Min(1)
    @Max(5)
    rating!: number;

    @IsOptional()
    @IsString()
    @MaxLength(5000)
    comment?: string;

    @IsOptional()
    @IsArray()
    @IsUrl({}, { each: true })
    images?: string[];

    @IsEnum(ReviewStatus)
    status!: ReviewStatus;

    @IsNumber()
    helpfulCount!: number;

    @IsOptional()
    @IsBoolean()
    isVerifiedPurchase?: boolean;

    @IsOptional()
    createdAt?: Date;

    @IsOptional()
    updatedAt?: Date;

    @IsOptional()
    @IsString()
    rejectionReason?: string;
}
