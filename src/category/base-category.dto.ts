import {
    IsString,
    IsOptional,
    IsBoolean,
    IsNumber,
    IsUUID,
    IsUrl,
    IsArray,
    Min,
    ValidateNested,
} from 'class-validator';
import { Type } from 'class-transformer';
import { LocalizedTextDTO } from '../product/local/localized-text.dto';

export class BaseCategoryDTO {
    @IsUUID()
    id!: string;

    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => LocalizedTextDTO)
    name!: LocalizedTextDTO[];

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => LocalizedTextDTO)
    description?: LocalizedTextDTO[];

    @IsString()
    slug!: string;

    @IsOptional()
    @IsUUID()
    parentId?: string;

    @IsOptional()
    @IsUrl()
    image?: string;

    @IsOptional()
    @IsUrl()
    icon?: string;

    @IsOptional()
    @IsNumber()
    @Min(0)
    sortOrder?: number;

    @IsBoolean()
    isActive!: boolean;

    @IsOptional()
    @IsBoolean()
    isFeatured?: boolean;

    @IsOptional()
    @IsString()
    metaTitle?: string;

    @IsOptional()
    @IsString()
    metaDescription?: string;

    @IsOptional()
    @IsArray()
    @IsString({ each: true })
    metaKeywords?: string[];

    @IsOptional()
    createdAt?: Date;

    @IsOptional()
    updatedAt?: Date;
}
