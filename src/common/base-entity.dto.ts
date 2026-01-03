import { IsUUID, IsOptional, IsDate } from 'class-validator';
import { Type } from 'class-transformer';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class BaseEntityDTO {
    @ApiProperty({
        description: 'Unique identifier (UUID)',
        example: '123e4567-e89b-12d3-a456-426614174000',
    })
    @IsUUID()
    id!: string;

    @ApiPropertyOptional({ description: 'Creation timestamp' })
    @IsOptional()
    @Type(() => Date)
    @IsDate()
    createdAt?: Date;

    @ApiPropertyOptional({ description: 'Last update timestamp' })
    @IsOptional()
    @Type(() => Date)
    @IsDate()
    updatedAt?: Date;
}
