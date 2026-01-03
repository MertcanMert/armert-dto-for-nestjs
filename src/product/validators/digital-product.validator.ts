import {
    ValidatorConstraint,
    ValidatorConstraintInterface,
    ValidationArguments,
} from 'class-validator';
import { BaseProductDTO, ShippingType } from '../base-product.dto';

/**
 * Validates that digital products do not have physical dimension attributes.
 */
@ValidatorConstraint({ name: 'DigitalProductConsistency', async: false })
export class DigitalProductConsistencyValidator
    implements ValidatorConstraintInterface {
    validate(_: any, args: ValidationArguments): boolean {
        const product = args.object as BaseProductDTO;

        if (product.shippingType !== ShippingType.DIGITAL) {
            return true;
        }

        return (
            product.weight === undefined &&
            product.width === undefined &&
            product.height === undefined &&
            product.depth === undefined
        );
    }

    defaultMessage(): string {
        return 'Physical dimensions (weight, width, height, depth) cannot be provided for digital products.';
    }
}
