import {
    IsString,
    IsNumber,
    IsUUID,
    IsOptional,
    IsEnum,
    Min,
    IsCreditCard,
} from 'class-validator';

export enum PaymentProvider {
    IYZICO = 'IYZICO',
    STRIPE = 'STRIPE',
    PAYPAL = 'PAYPAL',
    BANK_TRANSFER = 'BANK_TRANSFER',
}

export class CreatePaymentDTO {
    @IsUUID()
    orderId!: string;

    @IsEnum(PaymentProvider)
    provider!: PaymentProvider;

    @IsOptional()
    @IsString()
    cardHolderName?: string;

    @IsOptional()
    @IsCreditCard()
    cardNumber?: string;

    @IsOptional()
    @IsString()
    expireYear?: string;

    @IsOptional()
    @IsString()
    expireMonth?: string;

    @IsOptional()
    @IsString()
    cvc?: string;

    @IsOptional()
    @IsNumber()
    installment?: number; // Number of installments
}

export class PaymentCallbackDTO {
    @IsString()
    token!: string; // Token returned by Iyzico/Provider

    @IsOptional()
    @IsString()
    paymentId?: string;

    @IsOptional()
    @IsString()
    status?: string;

    // To capture dynamic data
    conversationId?: string;
    conversationData?: string;
}

export class PaymentResultDTO {
    success!: boolean;
    paymentId?: string;
    errorMessage?: string;
    redirectUrl?: string; // For 3D Secure redirection
    htmlContent?: string; // For Iyzico form content
}
