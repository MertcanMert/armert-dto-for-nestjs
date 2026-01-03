import { VariantsStockConsistencyValidator } from './variants-stock.validator';
import { ValidationArguments } from 'class-validator';
import { BaseProductDTO } from '../base-product.dto';

describe('VariantsStockConsistencyValidator', () => {
    let validator: VariantsStockConsistencyValidator;

    beforeEach(() => {
        validator = new VariantsStockConsistencyValidator();
    });

    it('should act as truthy if validator is defined', () => {
        expect(validator).toBeDefined();
    });

    it('should SUCCEED if product has variants AND parent stock is undefined', () => {
        const product = new BaseProductDTO();
        product.variants = [{ sku: 'V1', price: 10, stock: 5, isActive: true }];
        product.stock = undefined;

        const result = validator.validate(null, { object: product } as ValidationArguments);
        expect(result).toBe(true);
    });

    it('should FAIL if product has variants BUT parent stock is defined', () => {
        const product = new BaseProductDTO();
        product.variants = [{ sku: 'V1', price: 10, stock: 5, isActive: true }];
        product.stock = 100; // Error!

        const result = validator.validate(null, { object: product } as ValidationArguments);
        expect(result).toBe(false);
    });

    it('should SUCCEED if product has NO variants AND parent stock is defined', () => {
        const product = new BaseProductDTO();
        product.variants = [];
        product.stock = 50;

        const result = validator.validate(null, { object: product } as ValidationArguments);
        expect(result).toBe(true);
    });

    it('should FAIL if product has NO variants AND parent stock is undefined', () => {
        const product = new BaseProductDTO();
        product.variants = [];
        product.stock = undefined; // Error!

        const result = validator.validate(null, { object: product } as ValidationArguments);
        expect(result).toBe(false);
    });
});
