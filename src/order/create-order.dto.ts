import { IsUUID, IsEnum, IsOptional, IsString } from 'class-validator';
import { PaymentMethod } from './base-order.dto';

export class CreateOrderDTO {
    @IsUUID()
    shippingAddressId!: string;

    @IsUUID()
    billingAddressId!: string;

    @IsEnum(PaymentMethod)
    paymentMethod!: PaymentMethod;

    @IsOptional()
    @IsString()
    couponCode?: string;

    @IsOptional()
    @IsString()
    note?: string;

    // Items are usually taken automatically from the Cart, 
    // but can be added here if there is a direct product purchase.
    // We assume we are proceeding via Cart for now.
}
