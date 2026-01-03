import {
    ValidatorConstraint,
    ValidatorConstraintInterface,
    ValidationArguments,
} from 'class-validator';
import { BaseProductDTO } from '../base-product.dto';

/**
 * Validates that the discount price is mathematically lower than the regular price.
 */
@ValidatorConstraint({ name: 'DiscountPriceConsistency', async: false })
export class DiscountPriceConsistencyValidator
    implements ValidatorConstraintInterface {
    validate(_: any, args: ValidationArguments): boolean {
        const product = args.object as BaseProductDTO;

        if (product.discountPrice === undefined || product.discountPrice === null) {
            return true;
        }

        return product.discountPrice < product.price;
    }

    defaultMessage(): string {
        return 'Discount price must be lower than the regular price.';
    }
}
