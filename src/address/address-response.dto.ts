import { Expose } from 'class-transformer';
import { AddressType } from './base-address.dto';

export class AddressResponseDTO {
    @Expose() id!: string;
    @Expose() userId!: string;
    @Expose() title!: string;
    @Expose() firstName!: string;
    @Expose() lastName!: string;
    @Expose() phone?: string;
    @Expose() addressLine1!: string;
    @Expose() addressLine2?: string;
    @Expose() city!: string;
    @Expose() state?: string;
    @Expose() district?: string;
    @Expose() country!: string;
    @Expose() postalCode!: string;
    @Expose() type!: AddressType;
    @Expose() isDefault?: boolean;
    @Expose() deliveryInstructions?: string;
    @Expose() createdAt!: Date;
    @Expose() updatedAt!: Date;

    get fullName(): string {
        return `${this.firstName} ${this.lastName}`;
    }

    get fullAddress(): string {
        const parts = [this.addressLine1];
        if (this.addressLine2) parts.push(this.addressLine2);
        if (this.district) parts.push(this.district);
        parts.push(this.city);
        if (this.state) parts.push(this.state);
        parts.push(this.country);
        parts.push(this.postalCode);
        return parts.join(', ');
    }
}

export class AddressSummaryDTO {
    @Expose() id!: string;
    @Expose() title!: string;
    @Expose() city!: string;
    @Expose() country!: string;
    @Expose() type!: AddressType;
    @Expose() isDefault?: boolean;
}
