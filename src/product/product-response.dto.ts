import { Expose, Type } from 'class-transformer';
import { ProductVariantDTO } from './local/product-variant.dto';
import { ProductAttributeDTO } from './local/product-attribute.dto';
import { ProductSeoDTO } from './local/product.seo.dto';
import { LocalizedTextDTO } from './local/localized-text.dto';
import { StockType, ShippingType } from './base-product.dto';

export class ProductResponseDTO {
    @Expose() id!: string;
    @Expose() sku!: string;
    @Expose() slug!: string;
    @Expose() brand!: string;
    @Expose() categoryId!: string;

    @Expose()
    @Type(() => LocalizedTextDTO)
    name!: LocalizedTextDTO[];

    @Expose()
    @Type(() => LocalizedTextDTO)
    shortDescription?: LocalizedTextDTO[];

    @Expose()
    images!: string[];

    @Expose() thumbnail?: string;

    @Expose()
    @Type(() => ProductAttributeDTO)
    attributes?: ProductAttributeDTO[];

    @Expose() price!: number;
    @Expose() discountPrice?: number;
    @Expose() currency!: string;
    @Expose() vatRate!: number;

    @Expose() stockType!: StockType;
    @Expose() stock?: number;

    @Expose()
    @Type(() => ProductVariantDTO)
    variants?: ProductVariantDTO[];

    @Expose() shippingType!: ShippingType;
    @Expose() shippingTimeInDays?: number;

    @Expose()
    @Type(() => ProductSeoDTO)
    seo?: ProductSeoDTO;

    @Expose() rating?: number;
    @Expose() reviewCount?: number;
    @Expose() isActive!: boolean;
}
