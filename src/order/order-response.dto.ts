import { Expose, Type } from 'class-transformer';
import { OrderStatus, PaymentStatus, PaymentMethod } from './base-order.dto';
import { AddressResponseDTO } from '../address/address-response.dto';
import { UserSummaryDTO } from '../user/user-response.dto';

export class OrderItemResponseDTO {
    @Expose() id!: string;
    @Expose() productId!: string;
    @Expose() productName!: string;
    @Expose() sku!: string;
    @Expose() quantity!: number;
    @Expose() unitPrice!: number;     // List price
    @Expose() finalPrice!: number;    // Sales price
    @Expose() lineTotal!: number;
    @Expose() productImage?: string;
    @Expose() variantAttributes?: Record<string, string>;
}

export class OrderResponseDTO {
    @Expose() id!: string;
    @Expose() orderNumber!: string;

    @Expose()
    @Type(() => UserSummaryDTO)
    user?: UserSummaryDTO;

    @Expose()
    @Type(() => AddressResponseDTO)
    shippingAddress!: AddressResponseDTO;

    @Expose()
    @Type(() => AddressResponseDTO)
    billingAddress!: AddressResponseDTO;

    @Expose()
    @Type(() => OrderItemResponseDTO)
    items!: OrderItemResponseDTO[];

    @Expose() subtotal!: number;
    @Expose() shippingCost!: number;
    @Expose() tax!: number;
    @Expose() discount!: number;
    @Expose() total!: number;
    @Expose() currency!: string;

    @Expose() status!: OrderStatus;
    @Expose() paymentStatus!: PaymentStatus;
    @Expose() paymentMethod!: PaymentMethod;

    @Expose() shippingTrackingCode?: string;
    @Expose() shippingCompany?: string;

    @Expose() note?: string;
    @Expose() cancelReason?: string;
    @Expose() createdAt!: Date;
    @Expose() updatedAt!: Date;
}
