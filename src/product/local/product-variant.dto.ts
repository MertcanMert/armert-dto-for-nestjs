import {
    IsString,
    IsNumber,
    IsBoolean,
    IsOptional,
    IsArray,
    IsUrl,
    Min,
    ValidateNested,
} from 'class-validator';
import { Type } from 'class-transformer';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { ProductAttributeDTO } from './product-attribute.dto';

/**
 * Product Variant DTO
 * Represents a specific variant of a product (e.g., Red - XL)
 */
export class ProductVariantDTO {
    @ApiProperty({ description: 'Variant SKU', example: 'TSHIRT-RED-XL' })
    @IsString()
    sku!: string;

    @ApiPropertyOptional({ description: 'Variant Barcode', example: '8691234567891' })
    @IsOptional()
    @IsString()
    barcode?: string;

    @ApiProperty({ description: 'Variant Price', example: 120.00 })
    @IsNumber()
    @Min(0)
    price!: number;

    @ApiPropertyOptional({ description: 'Variant Discount Price' })
    @IsOptional()
    @IsNumber()
    @Min(0)
    discountPrice?: number;

    @ApiProperty({ description: 'Variant Stock Quantity', example: 50 })
    @IsNumber()
    @Min(0)
    stock!: number;

    @ApiProperty({ description: 'Is variant active?' })
    @IsBoolean()
    isActive!: boolean;

    @ApiPropertyOptional({ type: [ProductAttributeDTO] })
    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => ProductAttributeDTO)
    attributes?: ProductAttributeDTO[];

    @ApiPropertyOptional({ type: [String], description: 'Variant specific images' })
    @IsOptional()
    @IsArray()
    @IsUrl({}, { each: true })
    images?: string[];

    @ApiPropertyOptional({ description: 'Variant weight' })
    @IsOptional()
    @IsNumber()
    @Min(0)
    weight?: number;
}
