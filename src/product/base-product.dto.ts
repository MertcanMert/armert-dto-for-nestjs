import {
    IsString,
    IsNumber,
    IsBoolean,
    IsOptional,
    IsArray,
    IsEnum,
    Min,
    Max,
    IsUUID,
    IsUrl,
    ValidateNested,
    Validate,
} from 'class-validator';
import { Type } from 'class-transformer';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

import { ProductVariantDTO } from './local/product-variant.dto';
import { ProductAttributeDTO } from './local/product-attribute.dto';
import { ProductSeoDTO } from './local/product.seo.dto';
import { LocalizedTextDTO } from './local/localized-text.dto';

import { VariantsStockConsistencyValidator } from './validators/variants-stock.validator';
import { DiscountPriceConsistencyValidator } from './validators/discount-price.validator';
import { ReturnWindowConsistencyValidator } from './validators/return-window.validator';
import { DigitalProductConsistencyValidator } from './validators/digital-product.validator';

export enum StockType {
    LIMITED = 'LIMITED',
    UNLIMITED = 'UNLIMITED',
}

export enum ShippingType {
    CARGO = 'CARGO',
    DIGITAL = 'DIGITAL',
}

export class BaseProductDTO {
    /* ---------- CLASS LEVEL VALIDATION ---------- */
    @Validate(VariantsStockConsistencyValidator)
    @Validate(DiscountPriceConsistencyValidator)
    @Validate(ReturnWindowConsistencyValidator)
    @Validate(DigitalProductConsistencyValidator)
    private readonly __domainRules!: boolean;

    /* ---------- Identity ---------- */
    @ApiProperty({ description: 'Product ID', example: 'uuid-v4' })
    @IsUUID()
    id!: string;

    @ApiProperty({ description: 'Stock Keeping Unit', example: 'TSHIRT-BLK-L' })
    @IsString()
    sku!: string;

    @ApiPropertyOptional({ description: 'Barcode / EAN / GTIN', example: '8691234567890' })
    @IsOptional()
    @IsString()
    barcode?: string;

    @ApiProperty({ description: 'URL-friendly slug', example: 'black-tshirt-large' })
    @IsString()
    slug!: string;

    @ApiProperty({ example: 'Nike' })
    @IsString()
    brand!: string;

    @ApiProperty({ description: 'Product Category ID', example: 'uuid-v4' })
    @IsString()
    categoryId!: string;

    /* ---------- Content ---------- */
    @ApiProperty({ type: [LocalizedTextDTO], description: 'Product name in multiple languages' })
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => LocalizedTextDTO)
    name!: LocalizedTextDTO[];

    @ApiPropertyOptional({ type: [LocalizedTextDTO] })
    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => LocalizedTextDTO)
    shortDescription?: LocalizedTextDTO[];

    @ApiPropertyOptional({ type: [LocalizedTextDTO] })
    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => LocalizedTextDTO)
    description?: LocalizedTextDTO[];

    @ApiProperty({ type: [String], description: 'Array of image URLs' })
    @IsArray()
    @IsUrl({}, { each: true })
    images!: string[];

    @ApiPropertyOptional({ description: 'Main thumbnail image URL' })
    @IsOptional()
    @IsUrl()
    thumbnail?: string;

    @ApiPropertyOptional({ type: [ProductAttributeDTO] })
    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => ProductAttributeDTO)
    attributes?: ProductAttributeDTO[];

    /* ---------- Pricing ---------- */
    @ApiProperty({ description: 'Base selling price', example: 100.50 })
    @IsNumber()
    @Min(0)
    price!: number;

    @ApiProperty({ example: 'USD', default: 'USD' })
    @IsString()
    currency!: string;

    @ApiPropertyOptional({ description: 'Discounted price (must be lower than price)', example: 80.00 })
    @IsOptional()
    @IsNumber()
    @Min(0)
    discountPrice?: number;

    @ApiProperty({ description: 'VAT Rate percentage', example: 18, minimum: 0, maximum: 100 })
    @IsNumber()
    @Min(0)
    @Max(100)
    vatRate!: number;

    /* ---------- Stock ---------- */
    @ApiPropertyOptional({ description: 'Stock quantity (Required if StockType is LIMITED and no variants)' })
    @IsOptional()
    @IsNumber()
    @Min(0)
    stock?: number;

    @ApiProperty({ enum: StockType, example: StockType.LIMITED })
    @IsEnum(StockType)
    stockType!: StockType;

    @ApiProperty({ description: 'Product visibility status' })
    @IsBoolean()
    isActive!: boolean;

    @ApiPropertyOptional({ type: [ProductVariantDTO], description: 'Product variants (color, size, etc.)' })
    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => ProductVariantDTO)
    variants?: ProductVariantDTO[];

    /* ---------- Logistics ---------- */
    @ApiPropertyOptional({ description: 'Weight in kg' })
    @IsOptional()
    @IsNumber()
    weight?: number;

    @ApiPropertyOptional({ description: 'Width in cm' })
    @IsOptional()
    @IsNumber()
    width?: number;

    @ApiPropertyOptional({ description: 'Height in cm' })
    @IsOptional()
    @IsNumber()
    height?: number;

    @ApiPropertyOptional({ description: 'Depth in cm' })
    @IsOptional()
    @IsNumber()
    depth?: number;

    @ApiProperty({ enum: ShippingType, default: ShippingType.CARGO })
    @IsEnum(ShippingType)
    shippingType!: ShippingType;

    @ApiPropertyOptional({ description: 'Estimated shipping time in days' })
    @IsOptional()
    @IsNumber()
    shippingTimeInDays?: number;

    /* ---------- Marketplace ---------- */
    @ApiPropertyOptional({ readOnly: true })
    @IsOptional()
    @IsNumber()
    rating?: number;

    @ApiPropertyOptional({ readOnly: true })
    @IsOptional()
    @IsNumber()
    reviewCount?: number;

    @ApiPropertyOptional({ type: ProductSeoDTO })
    @IsOptional()
    @ValidateNested()
    @Type(() => ProductSeoDTO)
    seo?: ProductSeoDTO;

    @ApiPropertyOptional()
    @IsOptional()
    @IsBoolean()
    isReturnable?: boolean;

    @ApiPropertyOptional({ description: 'Return window in days' })
    @IsOptional()
    @IsNumber()
    returnWindowDays?: number;

    /* ---------- System ---------- */
    @ApiPropertyOptional()
    @IsOptional()
    createdAt?: Date;

    @ApiPropertyOptional()
    @IsOptional()
    updatedAt?: Date;
}