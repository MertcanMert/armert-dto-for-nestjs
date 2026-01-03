import {
    IsString,
    IsNumber,
    IsUUID,
    IsOptional,
    IsEnum,
    IsArray,
    Min,
    ValidateNested,
    IsDate,
} from 'class-validator';
import { Type } from 'class-transformer';
import { CartItemDTO } from '../cart/base-cart.dto';

/**
 * Order Status Lifecycle
 */
export enum OrderStatus {
    PENDING = 'PENDING',                 // Order created, waiting for payment
    AWAITING_PAYMENT = 'AWAITING_PAYMENT',
    CONFIRMED = 'CONFIRMED',             // Payment received, approved
    PREPARING = 'PREPARING',             // Being prepared/packed
    SHIPPED = 'SHIPPED',                 // Handed over to cargo
    DELIVERED = 'DELIVERED',             // Delivered to customer
    CANCELLED = 'CANCELLED',             // Cancelled by user or system
    REFUNDED = 'REFUNDED',               // Payment refunded
    FAILED = 'FAILED',                   // Payment or processing failed
}

export enum PaymentStatus {
    PENDING = 'PENDING',
    PAID = 'PAID',
    FAILED = 'FAILED',
    REFUNDED = 'REFUNDED',
}

export enum PaymentMethod {
    CREDIT_CARD = 'CREDIT_CARD',
    BANK_TRANSFER = 'BANK_TRANSFER',
    CASH_ON_DELIVERY = 'CASH_ON_DELIVERY',
    WALLET = 'WALLET',
}

export class OrderItemDTO extends CartItemDTO {
    // Inherits from CartItem but freezes prices at the time of order
    @IsNumber()
    @Min(0)
    finalPrice!: number; // Unit price after discounts
}

export class BaseOrderDTO {
    @IsUUID()
    id!: string;

    @IsUUID()
    userId!: string;

    @IsString()
    orderNumber!: string; // Human-readable order ID (e.g., ORD-2024-001)

    @IsUUID()
    shippingAddressId!: string;

    @IsUUID()
    billingAddressId!: string;

    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => OrderItemDTO)
    items!: OrderItemDTO[];

    @IsNumber()
    @Min(0)
    subtotal!: number;

    @IsNumber()
    @Min(0)
    shippingCost!: number;

    @IsNumber()
    @Min(0)
    tax!: number;

    @IsNumber()
    @Min(0)
    discount!: number; // Total discount (coupons etc.)

    @IsNumber()
    @Min(0)
    total!: number;

    @IsString()
    currency!: string;

    @IsEnum(OrderStatus)
    status!: OrderStatus;

    @IsEnum(PaymentStatus)
    paymentStatus!: PaymentStatus;

    @IsEnum(PaymentMethod)
    paymentMethod!: PaymentMethod;

    @IsOptional()
    @IsString()
    paymentID?: string; // Payment Provider Transaction ID (e.g., Iyzico, Stripe)

    @IsOptional()
    @IsString()
    shippingTrackingCode?: string;

    @IsOptional()
    @IsString()
    shippingCompany?: string;

    @IsOptional()
    @IsString()
    note?: string;

    @IsOptional()
    @IsString()
    cancelReason?: string;

    @IsOptional()
    @Type(() => Date)
    @IsDate()
    createdAt?: Date;

    @IsOptional()
    @Type(() => Date)
    @IsDate()
    updatedAt?: Date;
}
