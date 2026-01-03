import { Expose, Type } from 'class-transformer';

export class CartItemResponseDTO {
    @Expose() id!: string;
    @Expose() productId!: string;
    @Expose() variantId?: string;
    @Expose() productName!: string;
    @Expose() productImage?: string;
    @Expose() sku!: string;
    @Expose() quantity!: number;
    @Expose() unitPrice!: number;
    @Expose() discountPrice?: number;
    @Expose() lineTotal!: number;
    @Expose() isAvailable!: boolean;
    @Expose() maxQuantity?: number;
    @Expose() variantAttributes?: Record<string, string>;
}

export class CartSummaryDTO {
    @Expose() itemCount!: number;
    @Expose() subtotal!: number;
    @Expose() discount!: number;
    @Expose() shippingCost!: number;
    @Expose() tax!: number;
    @Expose() total!: number;
    @Expose() currency!: string;
}

export class CartResponseDTO {
    @Expose() id!: string;
    @Expose() userId?: string;
    @Expose() sessionId?: string;

    @Expose()
    @Type(() => CartItemResponseDTO)
    items!: CartItemResponseDTO[];

    @Expose()
    @Type(() => CartSummaryDTO)
    summary!: CartSummaryDTO;

    @Expose() couponCode?: string;
    @Expose() couponDiscount?: number;
    @Expose() hasUnavailableItems!: boolean;
    @Expose() updatedAt!: Date;
}
