import { IsOptional, IsUUID, IsNumber, IsBoolean, IsEnum } from 'class-validator';
import { Type } from 'class-transformer';
import { PaginationQueryDTO } from '../common/pagination.dto';
import { ReviewStatus } from './base-review.dto';

export class ReviewListQueryDTO extends PaginationQueryDTO {
    @IsOptional()
    @IsUUID()
    productId?: string;

    @IsOptional()
    @IsUUID()
    userId?: string;

    @IsOptional()
    @Type(() => Number)
    @IsNumber()
    minRating?: number;

    @IsOptional()
    @Type(() => Boolean)
    @IsBoolean()
    withImages?: boolean;

    @IsOptional()
    @IsEnum(ReviewStatus)
    status?: ReviewStatus; // For admin panel
}
