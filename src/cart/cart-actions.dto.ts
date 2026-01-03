import { IsUUID, IsNumber, IsOptional, Min, Max } from 'class-validator';

export class AddToCartDTO {
    @IsUUID()
    productId!: string;

    @IsOptional()
    @IsUUID()
    variantId?: string;

    @IsNumber()
    @Min(1)
    @Max(999)
    quantity!: number;
}

export class UpdateCartItemDTO {
    @IsNumber()
    @Min(1)
    @Max(999)
    quantity!: number;
}

export class RemoveFromCartDTO {
    @IsUUID()
    productId!: string;

    @IsOptional()
    @IsUUID()
    variantId?: string;
}

export class ApplyCouponDTO {
    couponCode!: string;
}
