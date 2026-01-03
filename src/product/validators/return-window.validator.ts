import {
    ValidatorConstraint,
    ValidatorConstraintInterface,
    ValidationArguments,
} from 'class-validator';
import { BaseProductDTO } from '../base-product.dto';

/**
 * Validates consistency between return policy and return window duration.
 * If a product is returnable, a return window (days) must be specified.
 */
@ValidatorConstraint({ name: 'ReturnWindowConsistency', async: false })
export class ReturnWindowConsistencyValidator
    implements ValidatorConstraintInterface {
    validate(_: any, args: ValidationArguments): boolean {
        const product = args.object as BaseProductDTO;

        if (product.isReturnable === true) {
            return typeof product.returnWindowDays === 'number';
        }

        if (product.isReturnable === false) {
            // Optional: You could enforce returnWindowDays to be undefined here, 
            // but we allow it as ignored data for flexibility.
            return true;
        }

        return true;
    }

    defaultMessage(): string {
        return 'Return window days must be specified for returnable products.';
    }
}
