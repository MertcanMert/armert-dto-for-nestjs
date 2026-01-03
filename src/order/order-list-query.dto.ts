import { IsOptional, IsEnum, IsUUID, IsDate, IsString } from 'class-validator';
import { Type } from 'class-transformer';
import { PaginationQueryDTO } from '../common/pagination.dto';
import { OrderStatus, PaymentStatus } from './base-order.dto';

export class OrderListQueryDTO extends PaginationQueryDTO {
    @IsOptional()
    @IsEnum(OrderStatus)
    status?: OrderStatus;

    @IsOptional()
    @IsEnum(PaymentStatus)
    paymentStatus?: PaymentStatus;

    @IsOptional()
    @IsUUID()
    userId?: string;

    @IsOptional()
    @IsString()
    orderNumber?: string;

    @IsOptional()
    @Type(() => Date)
    @IsDate()
    startDate?: Date;

    @IsOptional()
    @Type(() => Date)
    @IsDate()
    endDate?: Date;
}
