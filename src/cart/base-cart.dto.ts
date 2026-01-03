import {
    IsString,
    IsNumber,
    IsUUID,
    IsOptional,
    IsArray,
    Min,
    Max,
    ValidateNested,
} from 'class-validator';
import { Type } from 'class-transformer';

export class CartItemDTO {
    @IsUUID()
    productId!: string;

    @IsOptional()
    @IsUUID()
    variantId?: string;

    @IsNumber()
    @Min(1)
    @Max(999)
    quantity!: number;

    // These are typically set by the server, not client
    @IsOptional()
    @IsString()
    productName?: string;

    @IsOptional()
    @IsString()
    productImage?: string;

    @IsOptional()
    @IsNumber()
    @Min(0)
    unitPrice?: number;

    @IsOptional()
    @IsNumber()
    @Min(0)
    discountPrice?: number;

    @IsOptional()
    @IsString()
    sku?: string;
}

export class BaseCartDTO {
    @IsUUID()
    id!: string;

    @IsOptional()
    @IsUUID()
    userId?: string;

    @IsOptional()
    @IsString()
    sessionId?: string;

    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => CartItemDTO)
    items!: CartItemDTO[];

    @IsOptional()
    @IsString()
    couponCode?: string;

    @IsOptional()
    @IsNumber()
    @Min(0)
    subtotal?: number;

    @IsOptional()
    @IsNumber()
    @Min(0)
    discount?: number;

    @IsOptional()
    @IsNumber()
    @Min(0)
    shippingCost?: number;

    @IsOptional()
    @IsNumber()
    @Min(0)
    tax?: number;

    @IsOptional()
    @IsNumber()
    @Min(0)
    total?: number;

    @IsOptional()
    @IsString()
    currency?: string;

    @IsOptional()
    createdAt?: Date;

    @IsOptional()
    updatedAt?: Date;
}
