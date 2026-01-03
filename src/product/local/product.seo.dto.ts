import {
    IsString,
    IsOptional,
    IsArray
} from 'class-validator';
import { ApiPropertyOptional } from '@nestjs/swagger';

export class ProductSeoDTO {
    @ApiPropertyOptional({ example: 'Buy Red T-Shirt - Best Price' })
    @IsOptional()
    @IsString()
    metaTitle?: string;

    @ApiPropertyOptional({ example: 'High quality red t-shirt made of cotton.' })
    @IsOptional()
    @IsString()
    metaDescription?: string;

    @ApiPropertyOptional({ type: [String], example: ['t-shirt', 'red', 'clothing'] })
    @IsOptional()
    @IsArray()
    @IsString({ each: true })
    keywords?: string[];
}
