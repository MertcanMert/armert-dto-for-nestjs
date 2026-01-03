import { IsNumber, Min, IsOptional } from 'class-validator';

export class UpdateProductPriceDTO {
    @IsNumber()
    @Min(0)
    price!: number;

    @IsOptional()
    @IsNumber()
    @Min(0)
    discountPrice?: number;
}
