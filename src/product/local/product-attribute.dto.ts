import { IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class ProductAttributeDTO {
    @ApiProperty({ example: 'Color' })
    @IsString()
    key!: string;

    @ApiProperty({ example: 'Red' })
    @IsString()
    value!: string;
}
