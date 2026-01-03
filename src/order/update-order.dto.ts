import { IsEnum, IsOptional, IsString } from 'class-validator';
import { OrderStatus, PaymentStatus } from './base-order.dto';

export class UpdateOrderStatusDTO {
    @IsEnum(OrderStatus)
    status!: OrderStatus;

    @IsOptional()
    @IsString()
    description?: string; // Reason for status change
}

export class UpdatePaymentStatusDTO {
    @IsEnum(PaymentStatus)
    paymentStatus!: PaymentStatus;
}

export class CancelOrderDTO {
    @IsString()
    reason!: string;
}

export class AddTrackingInfoDTO {
    @IsString()
    shippingCompany!: string;

    @IsString()
    trackingCode!: string;
}
