import { IsOptional, IsString, IsBoolean, IsUUID } from 'class-validator';
import { Type } from 'class-transformer';
import { PaginationQueryDTO } from '../common/pagination.dto';

export class CategoryListQueryDTO extends PaginationQueryDTO {
    @IsOptional()
    @IsString()
    search?: string;

    @IsOptional()
    @IsUUID()
    parentId?: string;

    @IsOptional()
    @Type(() => Boolean)
    @IsBoolean()
    isActive?: boolean;

    @IsOptional()
    @Type(() => Boolean)
    @IsBoolean()
    isFeatured?: boolean;

    @IsOptional()
    @Type(() => Boolean)
    @IsBoolean()
    rootOnly?: boolean;
}
