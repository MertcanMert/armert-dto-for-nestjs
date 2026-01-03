import { IsOptional, IsInt, Min, Max, IsString, IsIn } from 'class-validator';
import { Type } from 'class-transformer';
import { ApiPropertyOptional } from '@nestjs/swagger';

export type SortOrder = 'asc' | 'desc';

export class PaginationQueryDTO {
    @ApiPropertyOptional({
        description: 'Page number (starts from 1)',
        default: 1,
        minimum: 1,
    })
    @IsOptional()
    @Type(() => Number)
    @IsInt()
    @Min(1)
    page?: number = 1;

    @ApiPropertyOptional({
        description: 'Number of items per page',
        default: 20,
        minimum: 1,
        maximum: 100,
    })
    @IsOptional()
    @Type(() => Number)
    @IsInt()
    @Min(1)
    @Max(100)
    limit?: number = 20;

    @ApiPropertyOptional({
        description: 'Field to sort by',
        example: 'createdAt',
    })
    @IsOptional()
    @IsString()
    sortBy?: string;

    @ApiPropertyOptional({
        description: 'Sort direction',
        enum: ['asc', 'desc'],
        default: 'desc',
    })
    @IsOptional()
    @IsIn(['asc', 'desc'])
    sortOrder?: SortOrder = 'desc';
}

export class PaginationMetaDTO {
    @ApiPropertyOptional()
    currentPage!: number;

    @ApiPropertyOptional()
    itemsPerPage!: number;

    @ApiPropertyOptional()
    totalItems!: number;

    @ApiPropertyOptional()
    totalPages!: number;

    @ApiPropertyOptional()
    hasNextPage!: boolean;

    @ApiPropertyOptional()
    hasPreviousPage!: boolean;
}

export class PaginatedResponseDTO<T> {
    @ApiPropertyOptional({ isArray: true, description: 'List of records' })
    data!: T[];

    @ApiPropertyOptional({ type: PaginationMetaDTO, description: 'Pagination metadata' })
    meta!: PaginationMetaDTO;
}
