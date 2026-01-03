import {
    IsString,
    IsOptional,
    IsBoolean,
    IsUUID,
    IsPhoneNumber,
    IsPostalCode,
    IsEnum,
    MinLength,
    MaxLength,
} from 'class-validator';

export enum AddressType {
    HOME = 'HOME',
    WORK = 'WORK',
    BILLING = 'BILLING',
    SHIPPING = 'SHIPPING',
    OTHER = 'OTHER',
}

export class BaseAddressDTO {
    @IsUUID()
    id!: string;

    @IsUUID()
    userId!: string;

    @IsString()
    @MinLength(2)
    @MaxLength(100)
    title!: string;

    @IsString()
    @MinLength(2)
    @MaxLength(50)
    firstName!: string;

    @IsString()
    @MinLength(2)
    @MaxLength(50)
    lastName!: string;

    @IsOptional()
    @IsPhoneNumber()
    phone?: string;

    @IsString()
    @MinLength(5)
    @MaxLength(255)
    addressLine1!: string;

    @IsOptional()
    @IsString()
    @MaxLength(255)
    addressLine2?: string;

    @IsString()
    @MinLength(2)
    @MaxLength(100)
    city!: string;

    @IsOptional()
    @IsString()
    @MaxLength(100)
    state?: string;

    @IsOptional()
    @IsString()
    @MaxLength(100)
    district?: string;

    @IsString()
    @MinLength(2)
    @MaxLength(100)
    country!: string;

    @IsString()
    postalCode!: string;

    @IsEnum(AddressType)
    type!: AddressType;

    @IsOptional()
    @IsBoolean()
    isDefault?: boolean;

    @IsOptional()
    @IsString()
    @MaxLength(500)
    deliveryInstructions?: string;

    @IsOptional()
    createdAt?: Date;

    @IsOptional()
    updatedAt?: Date;
}
