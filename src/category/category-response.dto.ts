import { Expose, Type } from 'class-transformer';
import { LocalizedTextDTO } from '../product/local/localized-text.dto';

export class CategoryResponseDTO {
    @Expose() id!: string;

    @Expose()
    @Type(() => LocalizedTextDTO)
    name!: LocalizedTextDTO[];

    @Expose()
    @Type(() => LocalizedTextDTO)
    description?: LocalizedTextDTO[];

    @Expose() slug!: string;
    @Expose() parentId?: string;
    @Expose() image?: string;
    @Expose() icon?: string;
    @Expose() sortOrder?: number;
    @Expose() isActive!: boolean;
    @Expose() isFeatured?: boolean;
    @Expose() productCount?: number;
    @Expose() createdAt!: Date;
    @Expose() updatedAt!: Date;
}

export class CategoryTreeDTO {
    @Expose() id!: string;

    @Expose()
    @Type(() => LocalizedTextDTO)
    name!: LocalizedTextDTO[];

    @Expose() slug!: string;
    @Expose() image?: string;
    @Expose() icon?: string;
    @Expose() productCount?: number;

    @Expose()
    @Type(() => CategoryTreeDTO)
    children?: CategoryTreeDTO[];
}

export class CategoryBreadcrumbDTO {
    id!: string;
    name!: string;
    slug!: string;
}
