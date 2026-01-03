import { IsEnum, IsNumber, IsOptional, Min } from 'class-validator';
import { StockType } from './base-product.dto';

export class UpdateProductStockDTO {
    @IsEnum(StockType)
    stockType!: StockType;

    @IsOptional()
    @IsNumber()
    @Min(0)
    stock?: number;
}
