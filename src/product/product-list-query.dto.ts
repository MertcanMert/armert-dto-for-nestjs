import { IsOptional, IsString, IsNumber, IsBoolean, IsEnum, IsArray, Min, Max } from 'class-validator';
import { Type } from 'class-transformer';
import { PaginationQueryDTO } from '../common/pagination.dto';
import { StockType, ShippingType } from './base-product.dto';

export class ProductListQueryDTO extends PaginationQueryDTO {
    @IsOptional()
    @IsString()
    categoryId?: string;

    @IsOptional()
    @IsString()
    brand?: string;

    @IsOptional()
    @IsArray()
    @IsString({ each: true })
    brands?: string[];

    @IsOptional()
    @Type(() => Number)
    @IsNumber()
    @Min(0)
    minPrice?: number;

    @IsOptional()
    @Type(() => Number)
    @IsNumber()
    @Min(0)
    maxPrice?: number;

    @IsOptional()
    @IsString()
    search?: string;

    @IsOptional()
    @IsEnum(StockType)
    stockType?: StockType;

    @IsOptional()
    @IsEnum(ShippingType)
    shippingType?: ShippingType;

    @IsOptional()
    @Type(() => Boolean)
    @IsBoolean()
    isActive?: boolean;

    @IsOptional()
    @Type(() => Boolean)
    @IsBoolean()
    inStock?: boolean;

    @IsOptional()
    @Type(() => Boolean)
    @IsBoolean()
    hasDiscount?: boolean;

    @IsOptional()
    @Type(() => Number)
    @IsNumber()
    @Min(0)
    @Max(5)
    minRating?: number;

    @IsOptional()
    @IsArray()
    @IsString({ each: true })
    tags?: string[];
}
