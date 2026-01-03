import {
    ValidatorConstraint,
    ValidatorConstraintInterface,
    ValidationArguments,
} from 'class-validator';
import { BaseProductDTO } from '../base-product.dto';

/**
 * Validates consistency between parent product stock and variants.
 * Product cannot have both parent-level stock and variants simultaneously.
 */
@ValidatorConstraint({ name: 'VariantsStockConsistency', async: false })
export class VariantsStockConsistencyValidator
    implements ValidatorConstraintInterface {
    validate(_: any, args: ValidationArguments): boolean {
        const product = args.object as BaseProductDTO;

        const hasVariants =
            Array.isArray(product.variants) && product.variants.length > 0;

        if (hasVariants) {
            // If variants exist, parent stock must be undefined (managed by variants)
            return product.stock === undefined;
        }

        // If no variants, parent stock is mandatory
        return typeof product.stock === 'number';
    }

    defaultMessage(args: ValidationArguments): string {
        const product = args.object as BaseProductDTO;

        const hasVariants =
            Array.isArray(product.variants) && product.variants.length > 0;

        if (hasVariants) {
            return 'Parent stock cannot be defined when product variants are present.';
        }

        return 'Stock quantity is required for products without variants.';
    }
}